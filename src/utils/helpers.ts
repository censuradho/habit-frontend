import { StandardLonghandProperties } from "@stitches/react/types/css";
import { addDays, differenceInDays, isBefore, startOfYear } from "date-fns";

interface GenerateDaysOfTheYearToMomentOptions {
  minDays?: number
}

export function generateDaysOfTheYearToMoment (options?: GenerateDaysOfTheYearToMomentOptions) {
  const { 
    minDays = 17
  } = options || {}

  const _minDays = minDays * 7

  const firstDayOfTheYear = startOfYear(new Date())
  const today = new Date()

  const days = [] as Date[]
  let compareDate = firstDayOfTheYear

  const diff = differenceInDays(today, firstDayOfTheYear)

  const amountOfDaysToFill =  _minDays - diff

  while (isBefore(compareDate, today)) {
    days.push(compareDate)
    compareDate = addDays(compareDate, 1)
  }

  const placeholderDays = Array(amountOfDaysToFill)
    .fill(1)
    .map((value, index) => index + 1)

  return {
    days,
    placeholderDays
  }
}

export function parseToVariant <T> (obj: Record<string, string>, property: keyof StandardLonghandProperties) {
  return Object
    .entries(obj)
    .map(([value]) => ({
      [value]: {
        [property]: `$${value}`
      }
    }))
    .reduce((prev, next) => ({
      ...prev,
      ...next
    }), {}) as unknown as T
}
