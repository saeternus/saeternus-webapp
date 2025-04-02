export const getNextMonday = () => getNextWeekday(1);
export const getNextTuesday = () => getNextWeekday(2);
export const getNextWednesday = () => getNextWeekday(3);
export const getNextThursday = () => getNextWeekday(4);
export const getNextFriday = () => getNextWeekday(5);
export const getNextSaturday = () => getNextWeekday(6);
export const getNextSunday = () => getNextWeekday(0);

const getNextWeekday = (targetDay: number) => {
  let today = new Date();
  let dayOfWeek = today.getDay();
  let daysUntilTarget = (targetDay - dayOfWeek + 7) % 7 || 7;
  let nextDate = new Date();
  nextDate.setDate(today.getDate() + daysUntilTarget);

  return nextDate.toLocaleDateString('en-US', {
    month: 'short', // "Mar"
    day: 'numeric', // "19"
    year: 'numeric', // "2025"
  });
};
