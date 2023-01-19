import { Box, Typography } from '@/components'
import { format } from 'date-fns'

import * as Styles from './styles'

import { HabitProps } from './types'



export function Habit (props: HabitProps) {
  const { 
    disabled 
  } = props

  return (
    <Styles.Root>
      <Styles.Trigger
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
          <Styles.Arrow />
        </Styles.Content>

      </Styles.Portal>
    </Styles.Root>
  )
}