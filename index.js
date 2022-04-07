(function() {
    let currentIndex = 0;
    let $slides = $('.slides')
    let $slidesWindow = $('.slidesWindow')

    function playNextSlide() {
        playSlideByIndex(currentIndex + 1)
    }

    function playPreviousSlide() {
        playSlideByIndex(currentIndex - 1)
    }

    function playSlideByIndex(index) {
        $slides.css({
            transform: `translateX(${-400 * (index)}px)`
        })
        currentIndex = index
        return index
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