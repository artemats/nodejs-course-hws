import { read } from '../models/habitModel.js';

function countExpectedExecutions(freq) {
  switch (freq) {
    case 'daily':
      return 7;
    case 'weekly':
      return 4;
    case 'monthly':
      return 1;
    default:
      return 0;
  }
}

function filterRecentTimestamps(timestamps, daysBack) {
  const now = Date.now();
  const cutoff = now - daysBack * 24 * 60 * 60 * 1000;

  return timestamps.filter((ts) => ts >= cutoff && ts <= now);
}

function calcPercentage(doneCount, totalCount) {
  if (totalCount === 0) return 0;
  return Math.round((doneCount / totalCount) * 100);
}

export async function getStats() {
  const habits = await read();

  return habits.map((habit) => {
    const daysBack = habit.freq === 'daily' ? 7 : 30;
    const expected = countExpectedExecutions(habit.freq);

    const timetable = Array.isArray(habit.timetable) ? habit.timetable : [];

    const recent = filterRecentTimestamps(timetable, daysBack);
    const doneCount = recent.length;
    const percent = calcPercentage(doneCount, expected);

    return {
      id: habit.id,
      name: habit.name,
      freq: habit.freq,
      doneCount,
      expected,
      percent: `${percent}%`,
    };
  });
}
