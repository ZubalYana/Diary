//timers functions
function countdownEndOfYear() {
    var currentDate = new Date(); 
    var targetDate = new Date("June 8, 2024 00:00:00"); 

    var difference = targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("timeToTheEndOfStudyYear").innerHTML = "До кінця навчального року: " + days +  " днів " + hours + " годин " + minutes + " хвилин " + seconds + " секунд ";
    } else {
        document.getElementById("countdown").innerHTML = "Насолоджуйтеся літом! ";
    }
}
setInterval(countdownEndOfYear, 1000);
function countdownNextHolidays() {
    var currentDate = new Date(); 
    var targetDate = new Date("March 25, 2024 00:00:00"); 

    var difference = targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("timeToHolidays").innerHTML = "До найблищих канікул: " + days +  " днів " + hours + " годин " + minutes + " хвилин " + seconds + " секунд ";
    } else {
        document.getElementById("countdown").innerHTML = "Насолоджуйтеся канікулами! ";
    }
}
setInterval(countdownNextHolidays, 1000);
function countdownWeekends() {
    var currentDate = new Date(); 
    var targetDate = new Date("March 9, 2024 00:00:00"); 

    var difference = targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("timeToWeekends").innerHTML = "До найблищих вихідних: " + days +  " днів " + hours + " годин " + minutes + " хвилин " + seconds + " секунд ";
    } else {
        document.getElementById("countdown").innerHTML = "Насолоджуйтеся вихідними! ";
    }
}
setInterval(countdownWeekends, 1000);

//theme changing
let theme = localStorage.getItem('theme') || 'light';
$('#theme').click(function(){

    if(theme == 'light'){
        theme = 'dark';
        localStorage.setItem('theme', theme);
        changeTheme(theme);

    }else{
        theme = 'light';
        localStorage.setItem('theme', theme);
        changeTheme(theme);
    }
})

function changeTheme(theme){
    if(theme == 'light'){
        $('#theme').css('justify-content', 'flex-start');
    }else{
        $('#theme').css('justify-content', 'flex-end');
    }
}
changeTheme(theme);