import { Box, Button, Icon, Input, Typography } from '@/components'
import * as Styles from './styles'


export function CreateHabitDialog ({ children }: any) {
  return (
    <Styles.Root>
      <Styles.Trigger asChild>{children}</Styles.Trigger>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Box justifyContent="space-between" fullWidth>
            <Typography size="lg" color="heading" fontWeight="800">Criar hábito</Typography>
            <Styles.Close>
              <Icon name="close" color="heading" />
            </Styles.Close>
          </Box>
          <Styles.Form>
            <Input
              id="title"
              autoFocus
              label="Qual seu comprometimento?"
            />
          </Styles.Form>
          <Button fullWidth variant="confirm" icon={{ name: 'add', color: 'heading' }}>Confirmar</Button>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}