const timer = (deadLine) => {
    const timerHours = document.querySelector('#timer-hours')
    const timerMinutes = document.querySelector('#timer-minutes')
    const timerSeconds = document.querySelector('#timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadLine).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 3600)
        let minutes = Math.floor((timeRemaining / 60) % 60) 
        let seconds = Math.floor(timeRemaining % 60)

        return {timeRemaining, hours, minutes, seconds}
    }

    const updateClock = () => {
        const {timeRemaining, hours, minutes, seconds} = getTimeRemaining();
        timerHours.textContent = hours
        timerMinutes.textContent = minutes
        timerSeconds.textContent = seconds

        if (hours < 10) timerHours.textContent = '0' + hours;
        if (minutes < 10) timerMinutes.textContent = '0' + minutes;
        if (seconds < 10) timerSeconds.textContent = '0' + seconds;

        if (timeRemaining < 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }

    const startClock = () => {
        let idInterval = setInterval(() => {
            const {timeRemaining} = getTimeRemaining();
            if (timeRemaining < 0) {
                clearInterval(idInterval);
            }
            updateClock();
        }, 1000);
}

    startClock();

}

export default timer