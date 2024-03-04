function countdown() {
    var currentDate = new Date(); 
    var targetDate = new Date("June 8, 2024 00:00:00"); 

    var difference = targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("timeToTheEndOfStudyYear").innerHTML = "Днів: " + days + " Годин: " + hours + " Хвилин: " + minutes + " Секунд: " + seconds;
    } else {
        document.getElementById("countdown").innerHTML = "Насолоджуйтеся літом! ";
    }
}

setInterval(countdown, 1000);