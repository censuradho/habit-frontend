import { differenceInDays, startOfYear } from "date-fns";

export function generateDaysOfTheYearToMoment () {
  const firstDayOfTheYear = startOfYear(new Date())
  const today = new Date()

  const diff = differenceInDays(today, firstDayOfTheYear)

  const days = Array(diff)
    .fill(1)
    .map((value, index) => index + 1)

  return days
}