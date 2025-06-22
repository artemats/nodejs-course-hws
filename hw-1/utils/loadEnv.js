import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function loadEnv() {
  const envPath = resolve(process.cwd(), '.env');
  try {
    const text = readFileSync(envPath, 'utf-8');
    const lines = text.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const [key, ...rest] = trimmed.split('=');
      const value = rest.join('=').trim();
      process.env[key.trim()] = value;
    }
  } catch (err) {
    throw new Error(`Failed to load .env file: ${err.message}`);
  }
}
