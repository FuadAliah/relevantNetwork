$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();
        if (scrollPos > 300) {
            $('.top').addClass('show');
        } else {
            $('.top').removeClass('show');
        }
    });

    $('#top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    $("#basic-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
            },
        },
        messages: {
            name: {
                required: "Please enter your Name",
                minlength: "Name should be at least 3 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Enter Valid email (e.g.) abc@domain.tld"
            },
            message: {
                required: "Please enter your message",
            }
        }
    });

    $("#basic-form").submit(function (e) {
        
        function reset() {
            $('#basic-form').closest('form').find("input[type=text], input[type=email], textarea").val("");
        }
        setTimeout(reset, 2000)
        return false;
    });
});