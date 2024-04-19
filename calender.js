// script.js

const calendarGrid = document.getElementById('calendarGrid');
const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');
const currentMonthSpan = document.getElementById('currentMonth');
const eventNameInput = document.getElementById('eventName');
const eventDateInput = document.getElementById('eventDate');
const saveEventBtn = document.getElementById('saveEventBtn');

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

function renderCalendar() {
    calendarGrid.innerHTML = '';
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    currentMonthSpan.textContent = months[currentMonth] + ' ' + currentYear;

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('calendar-day', 'empty');
        calendarGrid.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');
        calendarDay.textContent = day;
        calendarGrid.appendChild(calendarDay);
    }
}

saveEventBtn.addEventListener('click', () => {
    const eventName = eventNameInput.value;
    const eventDate = eventDateInput.value;
    if (eventName && eventDate) {
        alert(`Event "${eventName}" saved for ${eventDate}`);
        eventNameInput.value = '';
        eventDateInput.value = '';
    } else {
        alert('Please fill in all fields');
    }
});

renderCalendar();
