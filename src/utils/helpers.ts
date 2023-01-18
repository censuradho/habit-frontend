import { differenceInDays, startOfYear } from "date-fns";

interface GenerateDaysOfTheYearToMomentOptions {
  minDays?: number
}

export function generateDaysOfTheYearToMoment (options?: GenerateDaysOfTheYearToMomentOptions) {
  const { 
    minDays = 18
  } = options || {}

  const _minDays = minDays * 7

  const firstDayOfTheYear = startOfYear(new Date())
  const today = new Date()

  const diff = differenceInDays(today, firstDayOfTheYear)
  const amountOfDaysToFill =  _minDays - diff

  const days = Array(diff)
    .fill(1)
    .map((value, index) => index + 1)

  const placeholderDays = Array(amountOfDaysToFill)
    .fill(1)
    .map((value, index) => index + 1)

  return {
    days,
    amountOfDaysToFill,
    placeholderDays
  }
}