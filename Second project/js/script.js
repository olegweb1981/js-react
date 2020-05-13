window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabCOntent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabCOntent.length; i++) {
            tabCOntent[i].classList.remove('show');
            tabCOntent[i].classList.add('hide');
        }
    }
    
    hideTabContent(1);

    function showTabContent(b) {
        if (tabCOntent[b].classList.contains('hide')) {
            tabCOntent[b].classList.remove('hide');
            tabCOntent[b].classList.add('show');
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
});