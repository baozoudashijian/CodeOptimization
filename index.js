(function () {
    let currentIndex = 0;
    let $slides = $('.slides')
    let $slidesWindow = $('.slidesWindow')


    function playSlideByIndex(index) {
        index = fixIndex(index)
        $slides.css({
            transform: `translateX(${-400 * (index)}px)`
        })
        currentIndex = index
        return index
    }

    function fixIndex(index) {
        if (index < 0) {
            index = 4
        } else if (index > 4) {
            index = 0
        }
        return index
    }

    let timeId = setInterval(() => {
        playNextSlide()
    }, 3000)

    let onClickNext = () => {
        playSlideByIndex(currentIndex + 1)
    }
    let onClickPrevious = () => {
        playSlideByIndex(currentIndex - 1)
    }

    let onEnterWindow = () => {
        window.clearInterval(timeId)
    }
    let onLeaveWindow = () => {
        timeId = setInterval(() => {
            playNextSlide()
        }, 3000)
    }



    $(buttonNext).on('click', onClickNext)

    $(buttonPrevous).on('click', onClickPrevious)

    $slidesWindow.on('mouseenter', onEnterWindow)

    $slidesWindow.on('mouseleave', onLeaveWindow)
})