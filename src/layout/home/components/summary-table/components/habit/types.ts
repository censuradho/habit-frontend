import { VariantProps } from '@stitches/react'

import { Trigger } from './styles'

export interface HabitProps extends VariantProps<typeof Trigger> {
  completed?: number;
  amount?: number
  date?: string | Date
}