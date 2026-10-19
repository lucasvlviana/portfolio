import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { initialLabs, initialProjects } from "../src/data/portfolioFallback.js";

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
