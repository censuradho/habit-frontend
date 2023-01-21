import { Box, Typography } from '@/components'
import clsx from 'clsx'
import { format } from '@/lib/date-fns'
import { useMemo, useState } from 'react'

import * as Styles from './styles'

import { HabitProps } from './types'
import { HabitList } from '../popover'



export function Habit (props: HabitProps) {
  const { 
    disabled,
    completed: defaultCompleted = 0,
    amount = 0,
    date
  } = props

  
  const completedPercent = amount > 0 ? Math.round((defaultCompleted / amount) * 100) : 0

  const classes = useMemo(() => ({
    'no-completed': completedPercent === 0,
    'under-20': completedPercent > 0 && completedPercent < 20,
    'under-40': completedPercent > 20 && completedPercent < 40,
    'under-60': completedPercent > 40 && completedPercent < 60,
    'under-80': completedPercent > 60 && completedPercent < 80,
    'bigger-80': completedPercent >= 80,
  }), [completedPercent])

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
          <Styles.ProgressRoot value={completedPercent}>
            <Styles.ProgressIndicator  style={{ transform: `translateX(-${100  - completedPercent}%)` }}  />
          </Styles.ProgressRoot>
          {date && <HabitList date={date} />}
          <Styles.Arrow />
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}