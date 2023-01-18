import { generateDaysOfTheYearToMoment } from '@/utils/helpers'
import { Habit } from './components'
import * as Styles from './styles'
// import { ComponentProps } from './types'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export function SummaryTable () {

  console.log(generateDaysOfTheYearToMoment())
  const renderDays = weekDays.map((day, index) => (
    <Styles.Day key={index}>{day}</Styles.Day>
  ))

  return (
    <Styles.Container>
      <div style={{ overflow: 'auto' }}>

        <Styles.Grid>
          <Styles.GridHeader>
            {renderDays}
          </Styles.GridHeader>
          <Styles.GridBody>
            <Habit />
            <Habit />
            <Habit />
            <Habit />
          </Styles.GridBody>
        </Styles.Grid>
      </div>

    </Styles.Container>
  )
}