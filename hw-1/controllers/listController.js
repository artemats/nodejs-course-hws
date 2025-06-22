import { listHabits } from '../services/habitService.js';

export async function handle() {
  const habits = await listHabits();
  habits.length === 0
    ? console.log("You don't have any habits.")
    : console.table(habits);
}
