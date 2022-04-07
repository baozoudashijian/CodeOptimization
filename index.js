(function() {
    let currentIndex = 0;
    let $slides = $('.slides')
    let $slidesWindow = $('.slidesWindow')

    function playNextSlide() {
        $slides.css({
            transform: `translateX(${-400 * (currentIndex + 1)}px)`
        })
        currentIndex += 1
    }

    function playPreviousSlide() {
        $slides.css({
            transform: `translateX(${-400 * (currentIndex - 1)}px)`
        })
        currentIndex -= 1
    }

    buttonNext.onClick = function() {
        playNextSlide()
    }

    buttonPrevous.onClick = function() {
        playPreviousSlide()
    }

    let timeId = setInterval(() => {
        playNextSlide()
    }, 3000)

    $slidesWindow.on('mouseenter', function() {
        window.clearInterval(timeId)
    })

    $slidesWindow.on('mouseleave', function() {
        timeId = setInterval(() => {
            playNextSlide()
        }, 3000)
    })
})