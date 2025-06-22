import { parseArgs } from '../utils/argsParser.js';
import { removeHabit } from '../services/habitService.js';

export async function handle(req) {
  const { id } = parseArgs(req, ['id']);
  await removeHabit(id);
  console.log('Habit was successfully removed.');
}
