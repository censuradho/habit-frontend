import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  width: '100%'
})

export const Grid = styled('div', {
  display: 'flex',
  width: '100%',
  position: 'relative',
})

export const GridHeader = styled('div', {
  display: 'grid',
  gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
  gridAutoFlow: 'row',
  gap: '.75rem',
  position: 'sticky',
  left: 0,
  top: 0,
  zIndex: 2,
  background: `linear-gradient(90deg, $background 90%, hsla(0,0%,100%,0))`
})

export const GridBody = styled('div', {
  display: 'grid',
  gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
  gridAutoFlow: 'column',
  gap: '.75rem',
})

export const Cell = styled('div', {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '$default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$foreground',
  border: '2px solid $foregroundLight'
})

export const Day = styled('div', {
  width: '2.5rem',
  height: '2.5rem',
  color: '$gray400',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})