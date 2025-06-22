import { read, save } from '../models/habitModel.js';

export async function addHabit(payload) {
  const habits = await read();
  const habit = {
    id: Date.now().toString(),
    timetable: [],
    ...payload,
  };
  await save([...habits, habit]);
  return habit;
}

export async function listHabits() {
  return await read();
}

export async function doneHabit(id) {
  const habits = await read();
  const now = () => Date.now() + process.env.DAY_OFFSET * 24 * 60 * 60 * 1000;
  const habit = habits.find((h) => h.id === id);
  if (!habit) {
    throw new Error(`Habit with id ${id} not found`);
  }
  // Check if the habit is already done today
  if (!habit.timetable.includes(now())) {
    habit.timetable.push(now());
  }
  await save(habits);
  return habit;
}

export async function removeHabit(id) {
  const habits = await read();
  const filteredDb = habits.filter((h) => h.id !== id);
  if (filteredDb.length === habits.length) {
    throw new Error(`Habit with id ${id} not found`);
  }
  await save(filteredDb);
  return true;
}

export async function updateHabit(id, payload) {
  const habits = await read();
  const habit = habits.find((h) => h.id === id);
  if (!habit) {
    throw new Error(`Habit with id ${id} not found`);
  }
  Object.assign(habit, payload);
  await save(habits);
  return habit;
}
