import { CreateHabitPayload, FindHabitByDateResponse, Summary } from "@/services/server/habit/types"

export type SummaryData = Summary

export interface HabitContextData {
  summary?: SummaryData[]
  isLoading?: boolean
  getSummary: () => Promise<void>
}