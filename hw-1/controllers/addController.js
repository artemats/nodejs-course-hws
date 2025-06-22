import { parseArgs } from '../utils/argsParser.js';
import { addHabit } from '../services/habitService.js';

export async function handle(req) {
  const { name, freq } = parseArgs(req, ['name', 'freq']);
  const habit = await addHabit({ name, freq });
  console.log(`Habit ${habit.name} was successfully added.`);
}
