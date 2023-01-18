import { Button } from '@/components'
import Image from 'next/image'
import * as Styles from './styles'

export function Header () {
  return (
    <Styles.Header>
      <Image src="/logo.svg" width={147} height={71} alt="logo"  />
      <Button icon={{ name: 'add' }} variant="stroke">Novo hábito</Button>
    </Styles.Header>
  )
}