import { Box, Button, Checkbox, Icon, Input, Typography } from '@/components'
import { FormEvent, PropsWithChildren, useState } from 'react'
import * as Styles from './styles'

export const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function CreateHabitDialog ({ children }: PropsWithChildren) {
  const [title, setTitle] = useState('')
  const [weekDaysSelected, setWeekDaysSelected] = useState<number[]>([])

  const handleChangeChecked = (value: number) => {
    const alreadyChecked = weekDaysSelected.includes(value)

    if (alreadyChecked) return setWeekDaysSelected(prevState => prevState.filter(item => value !== item))

    setWeekDaysSelected(prevState => ([
      ...prevState,
      value
    ]))
  }
  
  const renderWeekDays = weekDays.map((day, index) => (
    <li key={index}>
      <Checkbox id={`${index}`} label={day}  onCheckedChange={() => handleChangeChecked(index)} />
    </li>
  ))

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    console.log(title)
  }

  console.log(weekDaysSelected)


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
          <Styles.Form onClick={handleSubmit}>
            <Box flexDirection="column" gap={1}>
              <Input
                id="title"
                autoFocus
                label="Qual seu comprometimento?"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              <Typography size="md" fontWeight="400" color="gray400">Qual a recorrência?</Typography>
              <Styles.List>
                {renderWeekDays}
              </Styles.List>
            </Box>
            <Box marginTop={2}>
              <Button fullWidth variant="confirm" icon={{ name: 'add', color: 'heading' }}>Confirmar</Button>
            </Box>
          </Styles.Form>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}