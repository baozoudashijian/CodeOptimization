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

    let playNext = () => {
        playSlideByIndex(currentIndex + 1)
    }
    let playPrevious = () => {
        playSlideByIndex(currentIndex - 1)
    }

    let clearTimer = () => {
        window.clearInterval(timeId)
    }
    let resetTimer = () => {
        timeId = setInterval(() => {
            playNextSlide()
        }, 3000)
    }

    function bindEvents() {
        let events = [
            { el: buttonNext, event: 'click', fn: playNext },
            { el: buttonPrevous, event: 'click', fn: playPrevious },
            { el: $slidesWindow, event: 'mouseenter', fn: clearTimer },
            { el: $slidesWindow, event: 'mouseleave', fn: resetTimer },
        ]
    
        events.forEach((eventObject) => {
            $(eventObject.el).on(eventObject.event, eventObject.fn)
        })
    }
    bindEvents()


})