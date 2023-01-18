import { Box, Button, Container } from '@/components'
import Image from 'next/image'
import * as Styles from './styles'

export function HomeLayout () {
  return (
    <Styles.Main>
      <Container>
        <Box 
          flexDirection="column" 
          gap={4}
          >
            <Styles.Header>
              <Image src="/logo.svg" width={147} height={71} alt="logo"  />
              <Button icon={{ name: 'add' }} variant="stroke">Novo hábito</Button>
            </Styles.Header>
        </Box>
      </Container>
    </Styles.Main>
  )
}