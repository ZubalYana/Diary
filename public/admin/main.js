$('.addBtn').click(()=>{
    // let Mondayhomework1 = $('#homework1').val();
    // console.log(Mondayhomework1);
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

    let TuesdayData = {
        Tuesdayhomework1: $('#Tuesdayhomework1').val(),
        Tuesdayhomework2: $('#Tuesdayhomework2').val(),
        Tuesdayhomework3: $('#Tuesdayhomework3').val(),
        Tuesdayhomework4: $('#Tuesdayhomework4').val(),
        Tuesdayhomework5: $('#Tuesdayhomework5').val(),
        Tuesdayhomework6: $('#Tuesdayhomework6').val(),
        Tuesdayhomework7: $('#Tuesdayhomework7').val(),
    }
    console.log(TuesdayData)
    axios.post('/addNewTuesdayHomework', TuesdayData)

})