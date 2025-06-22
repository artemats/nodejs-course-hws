import { getStats } from '../services/statsService.js';

export async function handle() {
  const stats = await getStats();

  console.table(stats);
}
