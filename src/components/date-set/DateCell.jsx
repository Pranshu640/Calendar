import './date.css'

export default function DateCell({ date, isToday }){
    return(
        <div className={`DateCell ${isToday ? 'today' : ''}`}>
            {date && <p>{date}</p>}
        </div>
    )
}