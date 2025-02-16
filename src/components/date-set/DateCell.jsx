import './date.css'

export default function DateCell({ date, isToday, view }){
    if (view === 'week') {
        return(
            <div className={`DateCell ${isToday ? 'today' : ''}`}>
                <p>
                    <span>{date.day}</span>
                    {date.month !== new Date().toLocaleString('default', { month: 'long' }) && 
                        <span className="other-month">{date.month}</span>
                    }
                </p>
            </div>
        )
    }

    return(
        <div className={`DateCell ${isToday ? 'today' : ''}`}>
            {date && <p>{date}</p>}
        </div>
    )
}