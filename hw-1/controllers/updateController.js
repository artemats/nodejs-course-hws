import { parseArgs } from '../utils/argsParser.js';
import { updateHabit } from '../services/habitService.js';

export async function handle(req) {
  const { id, name, freq } = parseArgs(req, ['id', 'name', 'freq']);
  const payload = Object.fromEntries(
    Object.entries({ name, freq }).filter(([_, v]) => v !== undefined)
  );
  const habit = await updateHabit(id, payload);
  console.log(`Habit "${habit.name}" was successfully updated.`);
}
