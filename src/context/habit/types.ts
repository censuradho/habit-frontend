import { FindHabitByDateResponse } from "@/services/server/habit/types"

export type HabitData =FindHabitByDateResponse

export interface HabitContextData {
  data?: HabitData
}