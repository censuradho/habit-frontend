
import { HabitProvider } from '@/context/habit'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { globalStyle } from 'stitches.config'


export default function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <HabitProvider>
      <Component {...pageProps} />
    </HabitProvider>
  )
}
