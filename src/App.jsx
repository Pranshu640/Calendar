import './App.css'
import CalenderSet from './components/calender-set/CalenderSet'
import MonthForm from './components/monthselector/monthform'
import { useState } from 'react'

function App() {
  const [calendarDate, setCalendarDate] = useState({
    month: new Date().toLocaleString('default', { month: 'long' }),
    year: new Date().getFullYear()
  })

  const handleDateUpdate = (month, year) => {
    setCalendarDate({ month, year })
  }

  return (
    <div className="app-container">
      <div className="calendar-header">
        <h1 className="calendar-title">Calendar</h1>
        <div className="calendar-controls">
          <MonthForm onSubmit={handleDateUpdate} />
        </div>
      </div>
      <CalenderSet month={calendarDate.month} year={calendarDate.year} />
    </div>
  )
}

export default App
