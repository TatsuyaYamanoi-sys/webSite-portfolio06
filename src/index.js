import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import { App } from './App';

document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector('#root');
    ReactDOM.render(<App />, root); 
    // new ClickScroll('a[href^="#"]', 400, "swing");
    new MainClass();
});
class MainClass {
    constructor() {
        this._init();
    }
    _init() {
        new ClickScroll('a[href^="#"]', 400, "swing");
    }
}// Class Mainは競合する

class ClickScroll {
    constructor(els) {
        this.DOM = document.querySelectorAll(els);
        this._init();
    }
    _init(duration, easing) {
        for (let i = 0; i < this.DOM.length; i++){
            this.DOM[i].addEventListener('click', (e) => {
                e.preventDefault();
                let href = this.DOM[i].getAttribute('href');
                let targetElement = document.querySelector(href.replace("#", "."));
                const position = targetElement.getBoundingClientRect().top;
                const nowPosition = window.pageYOffset;
                const rootMargin = 0;
                const targetPosition = position + nowPosition - rootMargin;
                console.log(position, nowPosition)
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            });
        }
    }
}