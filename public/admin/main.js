$('.addBtn').click(()=>{
    let homework1 = $('#homework1').val();
    console.log(homework1)

    axios.post('/addNewHomework', homework1)
    .then(response => {
        console.log(response.data); 
        let homework = $('#homework1').val();

    
        let newHomework = {
            homework: homework,
        };
    })
    .catch(error => {
        console.error('Error:', error);
    });
})