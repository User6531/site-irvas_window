function timer({deadline, daySelector, hourSelector, minuteSelector, secondSelector}) {

    const dayMs = 86400000,
          hourMs = 3600000,
          minuteMs = 60000,
          secondMs = 1000;

    function getTimeRemaining() {
        const now = new Date(),
              total = Date.parse(deadline) - Date.parse(now),
              days = Math.floor(total / dayMs),
              hours = Math.floor((total / hourMs) % 24),
              minutes = Math.floor((total / minuteMs) % 60),
              seconds = Math.floor((total / secondMs) % 60);

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function addZero(n) {
        if (n < 10) {
            return `0${n}`;
        } else {
            return n;
        }
    }

    function setTimer(){
        const daysPage = document.querySelector(daySelector),
              hoursPage = document.querySelector(hourSelector),
              minutesPage = document.querySelector(minuteSelector),
              secondsPage = document.querySelector(secondSelector),
              daysPageTxt = daysPage.parentNode.nextElementSibling,
              interval = setInterval(updateTimer, 1000);
              
        updateTimer();
        function updateTimer() {
            daysPage.innerHTML = addZero(getTimeRemaining().days);
            hoursPage.innerHTML = addZero(getTimeRemaining().hours);
            minutesPage.innerHTML = addZero(getTimeRemaining().minutes);
            secondsPage.innerHTML = addZero(getTimeRemaining().seconds);

            if (getTimeRemaining().total <= 0) {
                clearInterval(interval);
            }
        }
    }
    setTimer();
}

export default timer;