import DateCell from "../date-set/DateCell"
import './CalenderSet.css'
import { getWeekDates, getMonthDates } from "../../helpers/months/month"

export default function CalenderSet({month, year, view = 'month', date}){
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dates = view === 'month' ? 
        getMonthDates(month, year) : 
        getWeekDates(month, year, date);

    return(
        <div className={`calendar-container ${view}-view`}>
            <div className="current-month">
                {month} {year}
            </div>
            <div className="CalenderSet">
                {weekDays.map(day => (
                    <div key={day} className="weekday-header">
                        {day.slice(0,3)}
                    </div>
                ))}
                {dates.map((el, index) => (
                    <DateCell 
                        key={index} 
                        date={el}
                        view={view}
                        isToday={
                            el === new Date().getDate() && 
                            month === new Date().toLocaleString('default', { month: 'long' }) &&
                            year === new Date().getFullYear()
                        }
                    />
                ))}
            </div>
        </div>
    )
}