import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const defaultDatabasePath = path.resolve(process.cwd(), "data", "portfolio.sqlite");
const databasePath = path.resolve(process.env.DATABASE_PATH || defaultDatabasePath);
fs.mkdirSync(path.dirname(databasePath), { recursive: true });

export const db = new Database(databasePath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    url TEXT NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS labs (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL,
    period TEXT NOT NULL,
    tags_json TEXT NOT NULL DEFAULT '[]',
    display_order INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS writeups (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    platform TEXT NOT NULL DEFAULT '',
    tools TEXT NOT NULL DEFAULT '',
    published_at TEXT NOT NULL DEFAULT '',
    url TEXT NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0
  );
`);

const initialProjects = [
  {
    slug: "mais-engenharia-arquitetura",
    title: "Mais Engenharia & Arquitetura",
    category: "INSTITUCIONAL · FREELANCER",
    description: "Site para escritório de engenharia e arquitetura, apresentando serviços, projetos e canais de contato.",
    url: "https://maisarquitetura.netlify.app/",
  },
  {
    slug: "the-rokz-burger",
    title: "The Rokz Burger",
    category: "MARCA · FREELANCER",
    description: "Presença digital para hamburgueria artesanal de Belo Horizonte.",
    url: "https://therokz.netlify.app/",
  },
  {
    slug: "barbearia-modelo",
    title: "Barbearia Modelo",
    category: "AGENDAMENTO · DEMONSTRAÇÃO",
    description: "Experiência de agendamento online para serviços de barbearia.",
    url: "https://modelodebarbearia2026.netlify.app/",
  },
  {
    slug: "studio-modelo-nails",
    title: "Studio Modelo Nails",
    category: "AGENDAMENTO · DEMONSTRAÇÃO",
    description: "Catálogo de serviços e fluxo de agendamento para um estúdio de unhas.",
    url: "https://studionailsmodelo.netlify.app/",
  },
];

const initialLabs = [
  {
    slug: "ambiente-pentest",
    title: "Ambiente para Pentest",
    description: "Preparar um laboratório com Kali Linux e máquina-alvo para praticar enumeração e análise em ambiente controlado.",
    status: "PLANEJADO",
    period: "OUT 2026",
    tags: ["Kali Linux", "Linux", "Lab local"],
  },
  {
    slug: "tryhackme-jr-penetration-tester",
    title: "TryHackMe: Jr Penetration Tester",
    description: "Trilha prática introdutória, com salas guiadas e writeups publicados após a conclusão de cada laboratório.",
    status: "PLANEJADO",
    period: "NOV 2026 – FEV 2027",
    tags: ["Nmap", "Enumeração", "Writeups"],
  },
  {
    slug: "tryhackme-soc-level-1",
    title: "TryHackMe: SOC Level 1",
    description: "Prática orientada a monitoramento e investigação, como complemento aos estudos de operações e resposta a incidentes.",
    status: "PLANEJADO",
    period: "MAR – JUN 2027",
    tags: ["Blue Team", "Triagem", "Incidentes"],
  },
];

function seedRows(table, rows) {
  const normalizedRows = rows.map((row, index) => {
    const normalized = { ...row, display_order: index };
    if (normalized.tags) {
      normalized.tags_json = JSON.stringify(normalized.tags);
      delete normalized.tags;
    }
    return normalized;
  });
  const columns = Object.keys(normalizedRows[0]);
  const placeholders = columns.map((column) => `@${column}`).join(", ");
  const sql = `INSERT INTO ${table} (${columns.join(", ")}) VALUES (${placeholders}) ON CONFLICT(slug) DO NOTHING`;
  const insert = db.prepare(sql);
  const seed = db.transaction((items) => items.forEach((row) => insert.run(row)));
  seed(normalizedRows);
}

seedRows("projects", initialProjects);
seedRows("labs", initialLabs);

const selectProjects = db.prepare("SELECT slug, title, category, description, url FROM projects ORDER BY display_order, title");
const selectLabs = db.prepare("SELECT slug, title, description, status, period, tags_json FROM labs ORDER BY display_order, title");
const selectWriteups = db.prepare("SELECT slug, title, platform, tools, published_at AS publishedAt, url FROM writeups ORDER BY display_order, published_at DESC");

export function getPortfolioData() {
  return {
    projects: selectProjects.all(),
    labs: selectLabs.all().map(({ tags_json: tagsJson, ...lab }) => ({ ...lab, tags: JSON.parse(tagsJson) })),
    writeups: selectWriteups.all(),
  };
}
