import { generateDaysOfTheYearToMoment } from '@/utils/helpers'
import { Fragment } from 'react'
import { Habit } from './components'
import * as Styles from './styles'
// import { ComponentProps } from './types'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export function SummaryTable () {

  const { days, placeholderDays } = generateDaysOfTheYearToMoment()
  
  const renderDays = weekDays.map((day, index) => (
    <Styles.Day key={index}>{day}</Styles.Day>
  ))

  const renderCells = days.map((day, index) => (
    <Habit key={index} />
  ))

  const renderPlaceholderDays = placeholderDays.map((day, index) => (
    <Habit key={index} disabled  />
  ))

  return (
    <Styles.Container>
      <div style={{ overflow: 'auto' }}>

        <Styles.Grid>
          <Styles.GridHeader>
            {renderDays}
          </Styles.GridHeader>
          <Styles.GridBody>
            {renderCells}
            {renderPlaceholderDays}
          </Styles.GridBody>
        </Styles.Grid>
      </div>

    </Styles.Container>
  )
}