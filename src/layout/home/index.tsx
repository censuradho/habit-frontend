import { Box, Button, Container } from '@/components'
import Image from 'next/image'
import { Header, SummaryTable } from './components'
import * as Styles from './styles'

export function HomeLayout () {
  return (
    <Styles.Main>
      <Container>
        <Box 
          flexDirection="column" 
          gap={4}
        >
          <Header />
        </Box>
        <SummaryTable />
      </Container>
    </Styles.Main>
  )
}