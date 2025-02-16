const getMonthDates = (month, year) => {
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

const getWeekDates = (month, year, selectedDate) => {
    const currentDate = new Date(year, months.indexOf(month), selectedDate);
    
    // Get the start of the week (Sunday)
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());
    
    // Generate array for the week
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        dates.push({
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'long' }),
            year: date.getFullYear()
        });
    }
    
    return dates;
}

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const getNextDate = (currentMonth, currentYear, selectedDate, view) => {
    if (view === 'week') {
        const currentDate = new Date(currentYear, months.indexOf(currentMonth), selectedDate);
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        const lastDateOfWeek = new Date(startOfWeek);
        lastDateOfWeek.setDate(startOfWeek.getDate() + 6);
        
        const nextWeekDate = new Date(lastDateOfWeek);
        nextWeekDate.setDate(lastDateOfWeek.getDate() + 1);
        
        return {
            month: months[nextWeekDate.getMonth()],
            year: nextWeekDate.getFullYear(),
            date: nextWeekDate.getDate()
        };
    } else {
        const currentMonthIndex = months.indexOf(currentMonth);
        if (currentMonthIndex === 11) {
            return {
                month: months[0],
                year: currentYear + 1,
                date: selectedDate
            };
        }
        return {
            month: months[currentMonthIndex + 1],
            year: currentYear,
            date: selectedDate
        };
    }
};

const getPreviousDate = (currentMonth, currentYear, selectedDate, view) => {
    if (view === 'week') {
        const currentDate = new Date(currentYear, months.indexOf(currentMonth), selectedDate);
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        
        const prevWeekDate = new Date(startOfWeek);
        prevWeekDate.setDate(startOfWeek.getDate() - 1);
        
        return {
            month: months[prevWeekDate.getMonth()],
            year: prevWeekDate.getFullYear(),
            date: prevWeekDate.getDate()
        };
    } else {
        const currentMonthIndex = months.indexOf(currentMonth);
        if (currentMonthIndex === 0) {
            return {
                month: months[11],
                year: currentYear - 1,
                date: selectedDate
            };
        }
        return {
            month: months[currentMonthIndex - 1],
            year: currentYear,
            date: selectedDate
        };
    }
};

export { getMonthDates, getWeekDates, getNextDate, getPreviousDate };