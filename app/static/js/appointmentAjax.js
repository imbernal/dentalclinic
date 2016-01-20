var urlPost = $('')
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
        })
            .done(function (e) {
                $('#name').val("");
                $('#email').val("");
                $('#phone').val("");
                $('#date').val("");
                $('#clock').val("");
                function(r){
                    $('#myModal').modal('show');
                }
            });
    }
});
