interface Day {
  id: string
  date: string
}

export interface Habit {
  title: string
  id: string
  created_at: string
}

export interface Summary {
  id: string
  amount: number
  completed: number
  date: string
}

export interface FindHabitByDateResponse {
  completed_habits: string[]
  possibles_habits: Habit[]
}