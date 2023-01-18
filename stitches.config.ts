import { createStitches } from '@stitches/react'

import {
  colors,
  breakpoints,
  fontSizes
} from '@/constants/theme'

const { styled, globalCss: GlobalCss, getCssText, theme, css, keyframes, createTheme } = createStitches({
  theme: {
    colors,
    fontSizes,
    radii: {
      default: '8px'
    }
  },
  media: breakpoints
})

const globalStyle = GlobalCss({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    color: '$text'
  },
  html: {
    scrollBehavior: 'smooth'
  },
  body: {
    backgroundColor: '$background',
    width: '100%',
    height: '100%',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  h1: {
    fontWeight: '500',
  },
  h2: {
    fontWeight: '500',
    lineHeight: '4.3rem'
  },
  p: {
    fontFamily: '$text',
    lineHeight: '2rem'
  },
  li: {
    listStyle: 'none'
  },
  a: {
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'none'
  }
})

export {
  styled,
  getCssText,
  theme,
  css,
  keyframes,
  createTheme,
  globalStyle
}
