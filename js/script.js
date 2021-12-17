new Choices('#model', {
    searchEnabled: false,
    itemSelecttext: ''
})

new Choices('#color', {
    searchEnabled: false,
    itemSelecttext: ''
})


$('#form-order').on('submit', function(event){ 
    event.preventDefault();

    $.ajax({
        url:'https://jsonplaceholder.typicode.com/postys',
        method:'POST',
        dataType:'html',
        data: $('#form-order').serialize(),
        success:function(data){
            console.log(data);
            $('#form-order').html('Спасибо! Ваша заявка успешно отправлена!')
            $('#form_submit').hide();
        }
    })
})