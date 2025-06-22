import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_PATH = join(__dirname, '..', 'database.json');

export async function read() {
  return JSON.parse((await readFile(DB_PATH, 'utf-8')) || '[]');
}

export async function save(data) {
  writeFile(DB_PATH, JSON.stringify(data, null, 2));
}
