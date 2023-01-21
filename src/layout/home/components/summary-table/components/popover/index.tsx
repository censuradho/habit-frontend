import { Checkbox } from '@/components'
import { habitServer } from '@/services/server/habit'
import { FindHabitByDateResponse } from '@/services/server/habit/types'
import { useEffect, useState } from 'react'
import * as Styles from '../habit/styles'
import { HabitListProps } from './types'
import { isBefore, endOfDay } from 'date-fns'
import { useHabit } from '@/context/habit'


export function HabitList (props: HabitListProps) {
  const { date } = props

  const { getSummary } = useHabit()

  const [habit, setHabit] = useState<FindHabitByDateResponse | null>(null)
  
  const handleToggleHabit = async (id: string) => {
    await habitServer.toggle(id)

    await getSummary()
  }

  const isPassedDate = date ? isBefore(endOfDay(new Date(date)), new Date()) : false

  const handleGetHabits = async (date: Date | string) => {
    const response = await habitServer.findByDate(new Date(date).toISOString())

    setHabit(response.data)
  }

  const renderHabits = habit?.possibles_habits?.map((possibleHabit, index) => {
    const isCompleted = habit
      ?.completed_habits
      .includes(possibleHabit.id)

    return (
      <li key={index}>
        <Checkbox
          label={possibleHabit.title}
          defaultChecked={isCompleted}
          disabled={isPassedDate}
          onCheckedChange={() => handleToggleHabit(possibleHabit.id)}
        />
      </li>
    )
  })

  useEffect(() => {
    if (!date) return;


    handleGetHabits(date)
  }, [date])

  return (
    <Styles.List>
      {renderHabits}
    </Styles.List>
  )
}