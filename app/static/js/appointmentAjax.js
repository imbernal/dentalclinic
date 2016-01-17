$('#formAppointment').validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        },
        date: {
            required: true
        },
        hour: {
            required: true
        }
    },
    submitHandler: function (form) {

        $.ajax({
            method: "POST",
            url: 'appointment/',
            data: {
                name: $('#name').val(""),
                email: $('#email').val(""),
                phone: $('#phone').val(""),
                date: $('#date').val(""),
                hour: $('#clock').val("")
            }
        })
            .done(function (e) {
                $('#name').val("");
                $('#email').val("");
                $('#phone').val("");
                $('#date').val("");
                $('#clock').val("");
                $('#myModal').modal('show');
            });
    }
});

//$('#formContact').validate({
//    rules: {
//        apname: {
//            required: true
//        },
//        apemail: {
//            required: true,
//            email: true
//        },
//        aptel: {
//            required: true
//        },
//        apcomment: {
//            required: true
//        }
//    },
//    submitHandler: function (form) {
//        var urlPost = $('#contactUrl').val();
//        $.ajax({
//            method: "POST",
//            url: urlPost,
//            data: {
//                apname: $('#apname').val(),
//                apemail: $('#apemail').val(),
//                aptel: $('#aptel').val(),
//                apcomment: $('#apcomment').val()
//            }
//        })
//            .done(function () {
//                $('#apname').val("");
//                $('#apemail').val("");
//                $('#aptel').val("");
//                $('#apcomment').val("");
//            });
//
//    }
//
//});
//
//$('#contactSubmit').click(function (e) {
//    //debugger;
//    e.preventDefault();
//
//
//    var urlPost = $('#contactUrl').val();
//    $.ajax({
//        method: "POST",
//        url: urlPost,
//        data: {
//            name: $('#apname').val(),
//            email: $('#apemail').val(),
//            phone: $('#aptel').val(),
//            comment: $('#apcomment').val()
//        }
//    })
//        .done(function () {
//            $('#apname').val("");
//            $('#apemail').val("");
//            $('#aptel').val("");
//            $('#apcomment').val("");
//        });
//
//
//});

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