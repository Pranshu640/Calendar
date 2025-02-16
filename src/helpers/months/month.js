let DateSet = (month, year) => {
    const getDaysInMonth = (month, year) => {
        if (month === 'February') {
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
        }
        return ['January', 'March', 'May', 'July', 'August', 'October', 'December'].includes(month) ? 31 : 30;
    }

    const getFirstDayOfMonth = (month, year) => {
        const monthIndex = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'].indexOf(month);
        return new Date(year, monthIndex, 1).getDay();
    }

    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    
    // Create array with empty spaces for days before the 1st
    let dates = Array(firstDay).fill('');
    
    // Add the actual dates
    for (let i = 1; i <= daysInMonth; i++) {
        dates.push(i);
    }

    return dates;
}

export default DateSet;