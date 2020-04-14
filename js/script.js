$(document).ready(function () {

    $('#lang').click(function () {
        var dir = $('html').attr('dir');
        if (dir == 'ltr') {
            $(this).text('AR');
            $('html').attr('dir', 'rtl');
            $('.info-banner').addClass('lan');
            $('.lang-arrow').removeClass('fa-arrow-right').addClass('fa-arrow-left')
        } else {
            $('html').attr('dir', 'ltr')
            $(this).text('EN');
            $('.info-banner').removeClass('lan');
            $('.lang-arrow').removeClass('fa-arrow-left').addClass('fa-arrow-right')
        }
    });

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
        submitError = false
        if ($('.error').length > 3) {
            return false;
        } else {
            function hidden() {
                $('.thankful').css('visibility', 'hidden')
            }
            function reset() {
                submitError = true;
                $('#basic-form').closest('form').find("input[type=text], input[type=email], textarea").val("");
                if (submitError) {
                    $('.thankful').css('visibility', 'visible')
                }
                setTimeout(hidden, 4000);

            }
            setTimeout(reset, 2000);
            return false;
        }
    });
});