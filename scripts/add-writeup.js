import { db } from "../server/db.js";

function parseArguments(argumentsList) {
  const options = {};
  for (let index = 0; index < argumentsList.length; index += 1) {
    const key = argumentsList[index];
    if (!key.startsWith("--") || !argumentsList[index + 1] || argumentsList[index + 1].startsWith("--")) {
      throw new Error(`Argumento inválido: ${key}`);
    }
    options[key.slice(2)] = argumentsList[index + 1];
    index += 1;
  }
  return options;
}

try {
  const options = parseArguments(process.argv.slice(2));
  const { slug, title, url } = options;
  if (!slug || !title || !url) {
    throw new Error("Uso: npm run writeup:add -- --slug slug-unico --title \"Título\" --url https://... [--platform TryHackMe] [--tools \"Nmap, Wireshark\"] [--published-at 2027-03]");
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error("O slug deve usar letras minúsculas, números e hífens.");
  const parsedUrl = new URL(url);
  if (parsedUrl.protocol !== "https:") throw new Error("O writeup precisa usar uma URL HTTPS.");

  const nextOrder = db.prepare("SELECT COALESCE(MAX(display_order), -1) + 1 AS value FROM writeups").get().value;
  db.prepare(`
    INSERT INTO writeups (slug, title, platform, tools, published_at, url, display_order)
    VALUES (@slug, @title, @platform, @tools, @publishedAt, @url, @displayOrder)
    ON CONFLICT(slug) DO UPDATE SET
      title = excluded.title,
      platform = excluded.platform,
      tools = excluded.tools,
      published_at = excluded.published_at,
      url = excluded.url
  `).run({
    slug,
    title,
    platform: options.platform || "",
    tools: options.tools || "",
    publishedAt: options["published-at"] || "",
    url: parsedUrl.toString(),
    displayOrder: nextOrder,
  });
  process.stdout.write(`Writeup salvo: ${slug}\n`);
} catch (error) {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
} finally {
  db.close();
}
