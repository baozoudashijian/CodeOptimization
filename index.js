(function () {
    let currentIndex = 0;
    let $slides = $('.slides')
    let $slidesWindow = $('.slidesWindow')


    function playSlideByIndex(index) {
        if (index < 0) {
            index = 4
        } else if (index > 4) {
            index = 0
        }
        $slides.css({
            transform: `translateX(${-400 * (index)}px)`
        })
        currentIndex = index
        return index
    }

    buttonNext.onClick = function () {
        playSlideByIndex(currentIndex + 1)
    }

    buttonPrevous.onClick = function () {
        playSlideByIndex(currentIndex - 1)
    }

    let timeId = setInterval(() => {
        playNextSlide()
    }, 3000)

    $slidesWindow.on('mouseenter', function () {
        window.clearInterval(timeId)
    })

    $slidesWindow.on('mouseleave', function () {
        timeId = setInterval(() => {
            playNextSlide()
        }, 3000)
    })
})