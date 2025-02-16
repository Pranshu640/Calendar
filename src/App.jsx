import './App.css'
import CalenderSet from './components/calender-set/CalenderSet'
import MonthForm from './components/monthselector/monthform'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { getNextDate, getPreviousDate } from './helpers/months/month'

function App() {
  const [calendarDate, setCalendarDate] = useState({
    month: new Date().toLocaleString('default', { month: 'long' }),
    year: new Date().getFullYear(),
    date: new Date().getDate()
  })
  const [view, setView] = useState('month') // 'month' or 'week'

  const handleDateUpdate = (month, year) => {
    setCalendarDate(prev => ({ ...prev, month, year }))
  }

  const goToNextDate = () => {
    const { month, year, date } = getNextDate(calendarDate.month, calendarDate.year, calendarDate.date, view)
    setCalendarDate({ month, year, date })
  }

  const goToPreviousDate = () => {
    const { month, year, date } = getPreviousDate(calendarDate.month, calendarDate.year, calendarDate.date, view)
    setCalendarDate({ month, year, date })
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNextDate(),
    onSwipedRight: () => goToPreviousDate(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  const toggleView = () => {
    setView(prev => prev === 'month' ? 'week' : 'month')
  }

  return (
    <div className="app-container">
      <div className="calendar-header">
        <h1 className="calendar-title">Calendar</h1>
        <div className="calendar-controls">
          <button onClick={toggleView} className="view-toggle">
            {view === 'month' ? 'Week View' : 'Month View'}
          </button>
          <MonthForm onSubmit={handleDateUpdate} />
        </div>
      </div>
      <div className="calendar-navigation">
        <button onClick={goToPreviousDate} className="nav-button">
          ←
        </button>
        <button onClick={goToNextDate} className="nav-button">
          →
        </button>
      </div>
      <div {...swipeHandlers} className="calendar-swipe-container">
        <CalenderSet 
          month={calendarDate.month} 
          year={calendarDate.year} 
          date={calendarDate.date}
          view={view}
        />
      </div>
    </div>
  )
}

export default App
