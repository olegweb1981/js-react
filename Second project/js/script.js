window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Tab content
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabContent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Slider
    let prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        slidIndex = 1,
        sliderItem = document.querySelectorAll('.slider-item'),
        dots = document.querySelectorAll('.dot'),
        dotsWrap = document.querySelector('.slider-dots');

    
    showSlider(slidIndex);
    function showSlider(n) {
        if (n > sliderItem.length) {
            slidIndex = 1;
        } if (n < 1) {
            slidIndex = sliderItem.length;
        }

        sliderItem.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        sliderItem[slidIndex - 1].style.display = 'block';
        dots[slidIndex - 1].classList.add('dot-active');
    }

    function plusSlider(n) {
        showSlider(slidIndex += n);
    }
    function currentSlider(n) {
        showSlider(slidIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlider(-1);
    });
    next.addEventListener('click', function() {
        plusSlider(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlider(i);
            }
        }
    });
});