export async function getPortfolio(signal) {
  const response = await fetch("/api/portfolio", { signal, headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Portfolio API returned ${response.status}`);

  const payload = await response.json();
  return {
    projects: Array.isArray(payload.projects) ? payload.projects : [],
    labs: Array.isArray(payload.labs) ? payload.labs : [],
    writeups: Array.isArray(payload.writeups) ? payload.writeups : [],
  };
}
