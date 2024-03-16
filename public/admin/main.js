$('.addBtn').click(()=>{
    let Mondayhomework1 = $('#homework1').val();
    console.log(Mondayhomework1);
    let MondayData = {
        Mondayhomework1: $('#homework1').val(),
        Mondayhomework2: $('#homework2').val(),
        Mondayhomework3: $('#homework3').val(),
        Mondayhomework4: $('#homework4').val(),
        Mondayhomework5: $('#homework5').val(),
        Mondayhomework6: $('#homework6').val(),
        Mondayhomework7: $('#homework7').val(),
        Mondayhomework8: $('#homework8').val(),
    }
    console.log(MondayData)

    axios.post('/addNewMondayHomework', MondayData)
})