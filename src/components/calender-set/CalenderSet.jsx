import DateCell from "../date-set/DateCell"
import './CalenderSet.css'
import DateSet from "../../helpers/months/month"

export default function CalenderSet({month, year}){
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dates = DateSet(month, year);

    return(
        <div className="calendar-container">
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