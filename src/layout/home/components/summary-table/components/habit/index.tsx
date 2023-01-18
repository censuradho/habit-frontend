import * as Styles from './styles'

import { HabitProps } from './types'

export function Habit (props: HabitProps) {
  const { 
    disabled 
  } = props

  return (
    <Styles.Container
      disabled={disabled}
    ></Styles.Container>
  )
}