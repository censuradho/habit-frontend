import { Button } from '@/components'
import Image from 'next/image'
import { useState } from 'react'
import { CreateHabitDialog } from './components'
import * as Styles from './styles'

export function Header () {

  return (
    <Styles.Header>
      <Image src="/logo.svg" width={147} height={71} alt="logo"  />
      <CreateHabitDialog>
        <Button icon={{ name: 'add', color: 'heading' }} variant="stroke">Novo hábito</Button>
      </CreateHabitDialog>
    </Styles.Header>
  )
}