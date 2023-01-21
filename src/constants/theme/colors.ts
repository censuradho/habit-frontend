const gray = {
  gray400: '#A1A1AA',
  gray700: '#3F3F46',
  gray800: '#18181B',
  gray900: '#09090A'
}

const neonGreen = {
  neonGreen100: '#ADFF9E',
  neonGreen200: '#86FF70',
  neonGreen300: '#60FF42',
  neonGreen400: '#39FF14',
  neonGreen500: '#24E500',
  neonGreen600: '#1DB700',
  neonGreen700: '#168900',
  neonGreen800: '#59981A'
}

export const colors = {
  ...gray,
  ...neonGreen,
  placeholder: gray.gray400,
  background: gray.gray900,
  backgroundOpacity: 'rgba(0, 0, 0, .4)',
  heading: '#fff',
  foreground: gray.gray800,
  foregroundLight: gray.gray700,
  primary: neonGreen.neonGreen500,
  primaryDark: neonGreen.neonGreen600,
  valid: '#22C55E'
}