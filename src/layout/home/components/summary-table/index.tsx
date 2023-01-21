import { useHabit } from '@/context/habit'
import { generateDaysOfTheYearToMoment } from '@/utils/helpers'
import { isSameDay } from 'date-fns'
import { Fragment, useMemo } from 'react'
import { Habit } from './components'
import * as Styles from './styles'
// import { ComponentProps } from './types'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export function SummaryTable () {
  const { summary } = useHabit()

  const { days, placeholderDays } = generateDaysOfTheYearToMoment()
  
  const renderDays = useMemo(() => weekDays.map((day, index) => {
    return (
      <Styles.Day key={index}>{day}</Styles.Day>
    )
  }), [])

  const renderCells = useMemo(() => days.map((day, index) => {
    const dayInSummary =   summary?.find(summary => isSameDay(day, new Date(summary.date)))
    
    return (
      <Habit 
        key={index}
        completed={dayInSummary?.completed}  
        amount={dayInSummary?.amount}  
        date={dayInSummary?.date}  
      />
    )
  }), [days, summary])

  const renderPlaceholderDays = useMemo(() => placeholderDays.map((day, index) => (
    <Habit key={index} disabled  />
  )), [placeholderDays])

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