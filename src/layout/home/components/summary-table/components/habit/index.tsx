import { Box, Checkbox, Typography } from '@/components'
import clsx from 'clsx'
import { format } from 'date-fns'
import { useEffect, useMemo } from 'react'

import * as Styles from './styles'

import { HabitProps } from './types'



export function Habit (props: HabitProps) {
  const { 
    disabled,
    completed = 0,
    amount = 0,
    date
  } = props

  const completedPercent = amount > 0 ? Math.round(amount / completed) * 100 : 0

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
            <Typography color="gray400" size="sm">Terça-feira</Typography>
            <Typography color="heading" size="lg" fontWeight="800">{format(new Date(), 'dd/MM')}</Typography>
          </Box>
          <Styles.ProgressRoot value={33}>
            <Styles.ProgressIndicator  style={{ transform: `translateX(-${100 - 10}%)` }}  />
          </Styles.ProgressRoot>
          <Styles.List>
            <Checkbox label="Teste" />
          </Styles.List>
          <Styles.Arrow />
        </Styles.Content>

      </Styles.Portal>
    </Styles.Root>
  )
}