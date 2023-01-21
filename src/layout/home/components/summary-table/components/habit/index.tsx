import { Box, Checkbox, Typography } from '@/components'
import { habitServer } from '@/services/server/habit'
import { FindHabitByDateResponse } from '@/services/server/habit/types'
import clsx from 'clsx'
import { format } from '@/lib/date-fns'
import { useEffect, useMemo, useState } from 'react'

import * as Styles from './styles'

import { HabitProps } from './types'



export function Habit (props: HabitProps) {
  const { 
    disabled,
    completed = 0,
    amount = 0,
    date
  } = props

  const [habit, setHabit] = useState<FindHabitByDateResponse | null>(null)
  const completedPercent = amount > 0 ? Math.round(amount / completed) * 100 : 0

  const classes = useMemo(() => ({
    'no-completed': completedPercent === 0,
    'under-20': completedPercent > 0 && completedPercent < 20,
    'under-40': completedPercent > 20 && completedPercent < 40,
    'under-60': completedPercent > 40 && completedPercent < 60,
    'under-80': completedPercent > 60 && completedPercent < 80,
    'bigger-80': completedPercent >= 80,
  }), [completedPercent])

  const handleGetHabits = async (date: Date | string) => {
    const response = await habitServer.findByDate(new Date(date).toISOString())

    setHabit(response.data)
  }

  const handleToggleHabit = async (id: string) => {
    await habitServer.toggle(id)
    if (date) await handleGetHabits(date)
  }
  console.log(habit?.completed_habits)

  const renderHabits = habit?.possibles_habits?.map((possibleHabit, index) => {
    const isCompleted = habit
      ?.completed_habits
      .includes(possibleHabit.id)

    return (
      <li key={index}>
        <Checkbox
          label={possibleHabit.title}
          defaultChecked={isCompleted}
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
    <Styles.Root>
      <Styles.Trigger
        className={clsx(classes)}
        disabled={disabled}
      ></Styles.Trigger>
      <Styles.Portal>
        <Styles.Content sideOffset={10}>
          <Box flexDirection="column">
            <Typography color="gray400" size="sm">{date ? format(new Date(date), 'EEEE') : ' '}</Typography>
            <Typography color="heading" size="lg" fontWeight="800">{date ? format(new Date(date), 'dd/MM') : ''}</Typography>
          </Box>
          <Styles.ProgressRoot value={33}>
            <Styles.ProgressIndicator  style={{ transform: `translateX(-${100 - 10}%)` }}  />
          </Styles.ProgressRoot>
          <Styles.List>
            {renderHabits}
          </Styles.List>
          <Styles.Arrow />
        </Styles.Content>

      </Styles.Portal>
    </Styles.Root>
  )
}