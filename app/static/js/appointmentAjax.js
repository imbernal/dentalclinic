$('#submitAppointment').click(function (e) {
    //debugger;
    e.preventDefault();


    var urlPost = '/appointment/';
    $.ajax({
        method: "POST",
        url: urlPost,
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            date: $('#date').val(),
            hour: $('#clock').val()
        }
    })
        .done(function () {
                $('#name').val(""),
                $('#email').val(""),
                $('#phone').val(""),
                $('#date').val(""),
                $('#clock').val("")
        });


});

$('#contactSubmit').click(function (e) {
    //debugger;
    e.preventDefault();


    var urlPost = /contact/;
    $.ajax({
        method: "POST",
        url: urlPost,
        data: {
            name: $('#apname').val(),
            email: $('#apemail').val(),
            phone: $('#aptel').val(),
            comment: $('#apcomment').val()
        }
    })
        .done(function () {
                $('#apname').val("");
                $('#apemail').val("");
                $('#aptel').val("");
                $('#apcomment').val("");
        });


});

//var form = $('#formAppointment').click(function(e){
//
//});

//form.validate({
//
//    doNotHideMessage: true,
//    errorElement: 'span',
//    errorClass: 'help-block', // default input error message class
//    focusInvalid: false, // do not focus the last invalid input
//    rules: {
//        name:{
//            required: true
//        }
//    }
//});