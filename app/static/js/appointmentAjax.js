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
                name: $('#name').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                date: $('#date').val(),
                hour: $('#clock').val()
            },
            success: function(e) {
              
                $('#myModal').modal('show');
            }
        })
            .done(function (e) {

                $('#name').val("");
                $('#email').val("");
                $('#phone').val("");
                $('#date').val("");
                $('#clock').val("");
            });
    }
});

$('#formContact').validate({

    rules:{

        apname : {
            required: true
        },
        apemail:{
            required : true,
            email: true
        },
        aptel: {
            required : true
        },
        apcomment:{
            required: true
        }

    },
    submitHandler: function(form){

        $.ajax({

            method: 'POST',
            url: 'contact/',
            data:{

                apname: $('#apname').val(),
                apemail: $('#apemail').val(),
                aptel: $('#aptel').val(),
                apcomment: $('#apcomment').val()

            },success: function(e){
                $('#myModal').modal('show')
            }

        })
        .done(function(e){
            $('#apname').val(""),
            $('#apemail').val(""),
            $('#aptel').val(""),
            $('#apcomment').val("")
        });

    }

});
