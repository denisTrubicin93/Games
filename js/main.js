$(function () {
    $('.header__slider').slick({
        infinite: true,
        pauseOnDotsHover: true,
        dots: true,
        initialSlide: 2,
        vertical: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        verticalSwiping: true,
        prevArrow: '<img class="slick-arrows slick-arrows__left" src="img/arrowup.png">',
        nextArrow: '<img class="slick-arrows slick-arrows__right" src="img/arrowdown.png">',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    autoplay: false,
                }
            },
        ]
    });
    $('.shop__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider__arrows slider__arrow-left" src="img/arrow-left.png">',
        nextArrow: '<img class="slider__arrows slider__arrow-right" src="img/arrow-right.png">',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
    $('.release__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '340px',
        prevArrow: '<img class="slider__arrows slider__arrow-left" src="img/arrow-left.png">',
        nextArrow: '<img class="slider__arrows slider__arrow-right" src="img/arrow-right.png">',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: '200px',
                },
            },
            {
                breakpoint: 780,
                settings: {
                    centerPadding: '0px',
                },
            },
        ],
    })
    $('.categoria__slider').slick({
        rows: '2',
        slidesPerRow: '2',
        infinite: false,
        prevArrow: '<img class="slider__arrows slider__arrow-left" src="img/arrow-left.png">',
        nextArrow: '<img class="slider__arrows slider__arrow-right" src="img/arrow-right.png">',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesPerRow: '1',
                },
            },
        ],
    })

});