(function () {

    let slide = {
        currentIndex: 0,
        $slides: $('.slides'),
        $slidesWindow: $('.slidesWindow'),
        $buttonNext: $('.buttonNext'),
        $buttonPrevous: $('.buttonPrevous'),
        timerId: null,
        events: [
            { el: slide.$buttonNext, event: 'click', fn: slide.playNext },
            { el: slide.$buttonPrevous, event: 'click', fn: slide.playPrevious },
            { el: slide.$slidesWindow, event: 'mouseenter', fn: slide.clearTimer },
            { el: slide.$slidesWindow, event: 'mouseleave', fn: slide.resetTimer },
        ],
        playNext: () => {
            slide.playSlideByIndex(slide.currentIndex + 1)
        },
        playPrevious: () => {
            slide.playSlideByIndex(slide.currentIndex - 1)
        },

        clearTimer: () => {
            window.clearInterval(slide.timerId)
        },
        resetTimer: () => {
            slide.timerId = slide.autoPlay()
        },
        bindEvents: () => {
            slide.events.forEach((eventObject) => {
                $(eventObject.el).on(eventObject.event, eventObject.fn)
            })
        },
        playSlideByIndex(index) {
            index = slide.fixIndex(index)
            slide.$slides.css({
                transform: `translateX(${-400 * (index)}px)`
            })
            slide.currentIndex = index
            return index
        },
        fixIndex(index) {
            if (index < 0) {
                index = 4
            } else if (index > 4) {
                index = 0
            }
            return index
        },
        autoPlay() {
            return setInterval(() => {
                playSlideByIndex(slide.currentIndex + 1)
            }, 3000)
        },
        init() {
            slide.timerId = slide.autoPlay()
            slide.bindEvents()
        },
    }

    slide.init() // slide.init.call(init)
})