(function () {

    let slide = {
        currentIndex: 0,
        $slides: $('.slides'),
        $slidesWindow: $('.slidesWindow'),
        $buttonNext: $('.buttonNext'),
        $buttonPrevous: $('.buttonPrevous'),
        timerId: null,
        events() {
            return [
                { el: this.$buttonNext, event: 'click', fn: this.playNext },
                { el: this.$buttonPrevous, event: 'click', fn: this.playPrevious },
                { el: this.$slidesWindow, event: 'mouseenter', fn: this.clearTimer },
                { el: this.$slidesWindow, event: 'mouseleave', fn: this.resetTimer },
            ]
        },
        playNext: () => {
            // 调用这些函数前面都是slide
            this.playSlideByIndex(this.currentIndex + 1)
        },
        playPrevious: () => {
            // 调用这些函数前面都是slide
            this.playSlideByIndex(this.currentIndex - 1)
        },
        clearTimer: () => {
            // 调用这些函数前面都是slide
            window.clearInterval(this.timerId)
        },
        resetTimer: () => {
            // 调用这些函数前面都是slide
            this.timerId = this.autoPlay()
        },
        bindEvents: () => {
            this.events().forEach((eventObject) => {
                $(eventObject.el).on(eventObject.event, eventObject.fn)
            })
        },
        playSlideByIndex(index) {
            index = this.fixIndex(index)
            this.$slides.css({
                transform: `translateX(${-400 * (index)}px)`
            })
            this.currentIndex = index
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
            // 箭头函数不管this，如果式function那this就是window
            return setInterval(() => {
                this.playSlideByIndex(this.currentIndex + 1)
            }, 3000)
        },
        init() {
            this.timerId = this.autoPlay() // this.autoPlay === this.autoPlay.call(slide)
            this.bindEvents() // 2---------this.bindEvents === slide.bindEvents.call(slide)
        },
    }

    slide.init() // slide.init.call(slide) // 1---------隐式的传入this
})