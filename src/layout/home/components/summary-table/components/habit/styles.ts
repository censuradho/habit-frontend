import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '$default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$foreground',
  border: '2px solid $foregroundLight'
})