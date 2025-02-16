import { useState } from 'react'
import './monthform.css'

export default function MonthForm({ onSubmit }) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    
    const [formData, setFormData] = useState({
        month: months[new Date().getMonth()],
        year: new Date().getFullYear()
    })

    const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - 25 + i)

    const handleChange = (e) => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newFormData)
        onSubmit(newFormData.month, parseInt(newFormData.year))
    }

    return (
        <div className="month-form">
            <div className="select-group">
                <label htmlFor="month-select">Month</label>
                <select 
                    id="month-select"
                    name="month" 
                    value={formData.month}
                    onChange={handleChange}
                >
                    {months.map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>
            </div>

            <div className="select-group">
                <label htmlFor="year-select">Year</label>
                <select 
                    id="year-select"
                    name="year" 
                    value={formData.year}
                    onChange={handleChange}
                >
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}