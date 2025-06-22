import { parseArgs } from '../utils/argsParser.js';
import { doneHabit } from '../services/habitService.js';

export async function handle(req) {
  const { id } = parseArgs(req, ['id']);
  const habit = await doneHabit(id);
  console.log(`Habit "${habit.name}" was successfully done.`);
}
