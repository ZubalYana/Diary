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
        document.getElementById("timeToTheEndOfStudyYear").innerHTML = "Насолоджуйтеся літом! ";
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
        document.getElementById("timeToHolidays").innerHTML = "Насолоджуйтеся канікулами! ";
    }
}
setInterval(countdownNextHolidays, 1000);
function countdownWeekends() {
    var currentDate = new Date(); 
    var targetDate = new Date("March 23, 2024 00:00:00"); 

    var difference = targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("timeToWeekends").innerHTML = "До найблищих вихідних: " + days +  " днів " + hours + " годин " + minutes + " хвилин " + seconds + " секунд ";
    } else {
        document.getElementById("timeToWeekends").innerHTML = "Насолоджуйтеся вихідними! ";
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
        $('.wrap').css('background-color', '#fff');
        $('.wrap').css('color', '#333');
        $('.weekDay').css('border', '#393E46 3px solid');
        $('.weekDay_lessonHomework').css('color', '#000');
        $('.theme').css('background-color', '#393E46');
        $('.theme_circle').css('background-color', '#fff');
        $('.theme_circle').css('border', '3px solid #393E46');

    }else{
        $('#theme').css('justify-content', 'flex-end');
        $('.wrap').css('background-color', '#393E46');
        $('.wrap').css('color', '#eee');
        $('.weekDay').css('border', '#eee 3px solid');
        $('.weekDay_lessonHomework').css('color', '#fff');
        $('.theme').css('background-color', '#fff');
        $('.theme_circle').css('background-color', '#393E46');
        $('.theme_circle').css('border', '3px solid #fff');

    }
}
changeTheme(theme);


//homework getting
axios.get('http://localhost:3000/getMondayHomework')
.then(response => {
    console.log('Monday Homework:', response.data);
    $('#MondayHomework1').html(response.data.Mondayhomework1);
    $('#MondayHomework2').html(response.data.Mondayhomework2);
    $('#MondayHomework3').html(response.data.Mondayhomework3);
    $('#MondayHomework4').html(response.data.Mondayhomework4);
    $('#MondayHomework5').html(response.data.Mondayhomework5);
    $('#MondayHomework6').html(response.data.Mondayhomework6);
    $('#MondayHomework7').html(response.data.Mondayhomework7);
    $('#MondayHomework8').html(response.data.Mondayhomework8);
})
.catch(error => {
    console.error('Error:', error);
});