$(document).ready(function () {

    setTimeout(function () {
        $('.loading').addClass('hidden');
    }, 4000)

    function setLanguage(newLang) {
        var lang = localStorage.lang = 'en';
        if (newLang) {
            lang = newLang;
        }
        localStorage.setItem('lang', lang);
    };
    function arLang() {
        $('html').attr('dir', 'rtl')
        $('html').attr('lang', 'ar');
        $('.info-banner').addClass('lan');
        $('.lang-arrow').removeClass('fa-arrow-right').addClass('fa-arrow-left')
        $('#lang').text('AR')
    }
    function enLang() {
        $('html').attr('dir', 'ltr')
        $('html').attr('lang', 'en');
        $('.info-banner').removeClass('lan');
        $('.lang-arrow').removeClass('fa-arrow-left').addClass('fa-arrow-right')
        $('#lang').text('EN')
    }
    if (localStorage.getItem('lang', lang) == 'ar') {
        arLang()
    } else {
        enLang()
    }
    $('#lang').click(function () {
        var language = localStorage.getItem('lang', lang)
        if (language == 'en') {
            setLanguage('ar');
            arLang()
            $(this).text('AR');
        } else {
            setLanguage('en');
            enLang()
            $(this).text('EN');
        }
    });

    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();
        if (scrollPos > 0) {
            $('.top').addClass('show');
            $('.navbar').addClass('navlight');
        } else {
            $('.top').removeClass('show');
            $('.navbar').removeClass('navlight');
            $('#nav a').removeClass('active');
            $('#nav a').first().addClass('active');
        }
    });

    function scrollToSection(hash) {
        var target = '';
        if (hash) {
            target = $(hash);
        } else {
            target = $(window.location.hash);
        }
        if (target.length) {
            $('html,body').stop().animate({
                scrollTop: target.offset().top - 85
            }, 1000);
            return false;
        }
    }

    $("a[href*='#']:not([href='#'])").click(function (e) {
        e.preventDefault();
        $('#nav a').removeClass('active')
        $(this).addClass('active')
        setTimeout(() => {
            scrollToSection(e.target.hash);
        }, 100);
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

    $.ajax({
        url: '../data/data.json',
        dataType: 'JSON',
        success: function (response) {
            var getHomeData =
                '<div class="contain"><img src=' + response.home.img + ' alt=""><div class="info-banner"><p class="title">' + response.home.title + '</p><p class="description"> ' + response.home.paragraph + ' </p> <a href="#" class="button">Get Started</a> </div> </div>';
            $("#home-data").append(getHomeData)

            var getServiceData = '<div class="left-content"><p class="slog-section">' + response.service.slog + '</p><p class="title">' + response.service.title + '</p></div><div class="right-content"><p class="paragraph">' + response.service.head + '</p>' +
                '<div class="data" id="services-data">'
            $("#service-data").append(getServiceData)

            for (i = 0; i < response.service.services.length; i++) {
                var getServices = '';
                getServices = '<div class="column"><div class="icon">' + response.service.services[i].icon + '</div><h3 class="title">' + response.service.services[i].title + '</h3><p class="description">' + response.service.services[i].paragraph + '</p></div>'
                $("#services-data").append(getServices)
            }

            for (i = 0; i < response.service.increase.length; i++) {
                var serviceRest = '';
                serviceRest = '<div class="content"><img class="background-img" src="' + response.service.increase[i].img + '" alt=""><div class="container"><div class="header-section"><p class="slog-section">' + response.service.increase[i].slog + '</p><p class="title">' + response.service.increase[i].title + '</p></div><a href="#" class="bg-dark"><span>Be an advertiser </span><i class="fas fa-arrow-right lang-arrow"></i></a></div></div>'
                $("#service-rest").append(serviceRest)
            }

            for (i = 0; i < response.clients.length; i++) {
                var clients = '';
                clients = '<img src="' + response.clients[i].path + '" alt="' + response.clients[i].alt + '">'
                $("#clients-logos").append(clients)
            }

            var qoute = '<div class="content"><img class="background-img" src="' + response.qoute.img + '" alt=""><div class="container"><p>' + response.qoute.text + '</p></div></div>';
            $("#qoute").append(qoute)

            var video = '<img src="' + response.team.img + '" alt="">';
            $("#video").append(video)

            var footer = '<a href="#" class="logo"><img src="' + response.footer.logo + '" alt="Relevant Network" height="80"></a><p class="about">' + response.footer.about + '</p>';
            $("#footer").append(footer)

            var copy = '<p>' + response.copyright.at + '</p>';
            $("#copy").append(copy)
        },
        error: function (err) {
            console.log(err.statusText);
        }
    })
});

// for (i = 0; i < response.length; i++) {
//     getData = '<a href="#" class="card"><img src=' + `${response[i].image}` + '><div class="card-content"><div class="left"><div class="card-title">' + response[i].title + '</div><div class="card-info">' + response[i].description + '</div></div><div class="right"><img src="./imgs/views.svg"><span>' + response[i].number + '</span></div></div></a>';
//     $("#wrapper").append(getData)
// }