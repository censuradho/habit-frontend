import type { CheckboxProps } from './types'
import { Box } from '../box'

import * as Styles from './styles'
import { Icon } from '../icons'

export function Checkbox (props: CheckboxProps) {
  const { label,  ...otherProps } = props

  return (
    <Box gap={0.5} alignItems="center">
      <Styles.Root  {...otherProps}>
        <Styles.Indicator>
          <Icon name="done" color="heading" />
        </Styles.Indicator>
      </Styles.Root>
      <Styles.Label>{label}</Styles.Label>
    </Box>
  )  
}