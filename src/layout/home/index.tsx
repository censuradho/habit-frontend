import { Box, Container } from '@/components'
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
          <SummaryTable />
        </Box>
      </Container>
    </Styles.Main>
  )
}