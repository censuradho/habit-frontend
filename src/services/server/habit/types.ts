interface Day {
  id: string
  date: string
}

export interface Habit {
  title: string
}

export interface FindHabitByDateResponse {
  completed_habits: Habit[]
  possibles_habits: Habit[]
}