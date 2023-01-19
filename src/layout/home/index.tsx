import { Box, Container } from '@/components'
import { habitServer } from '@/services/server/habit'
import { useEffect } from 'react'
import { Header, SummaryTable } from './components'
import * as Styles from './styles'

export function HomeLayout () {

  useEffect(() => {
    habitServer.findByDate(new Date())
  }, [])
  
  return (
    <Styles.Main>
      <Container>
        <Box 
          flexDirection="column" 
          gap={4}
        >
          <Header />
          <SummaryTable />
        </Box>

      </Container>
    </Styles.Main>
  )
}