$(function() {
    const main = new Main();    
});

class Main {
    constructor() {
        this._init();
    }
    _init() {
        new ClickScroll('a[href^="#"]', 400, "swing");
    }
}
class ClickScroll {
    constructor(els) {
        this.DOM = $(els);
        this._init();
    }
    _init(duration, easing) {
        this.DOM.click(function(){
            const sectionHref = $(this).attr("href");
            const posision = $(sectionHref).offset().top;
            const csOption = {duration: duration, easing: easing}
            $("html,body").animate({scrollTop : posision}, csOption);
            return false;   //preventdefault
        }); // コンポーネントclick-scroll.js
    }
}