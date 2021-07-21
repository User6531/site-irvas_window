import "./slider";
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import gallery from './modules/gallery';


window.addEventListener('DOMContentLoaded', ()=>{
    "use strict";

    // modal State
    let modalState = {
        type: 1,
        width: 'undefined',
        height: 'undefined',
        glazing: 'tree',
        glazingProfile: 'undefined',
    };
    changeModalState(modalState);

    // modal engineer
    modal({
        triggerOpen: '.header_btn',
        modalWindow: '.popup_engineer',
        triggerClose: '.popup_close',
    });

    // modal backcall
    modal({
        triggerOpen: '.phone_link',
        modalWindow: '.popup',
        triggerClose: '.popup_close',
    });
    
    // modal calc
    modal({
        triggerOpen: '.popup_calc_btn',
        modalWindow: '.popup_calc',
        triggerClose: '.popup_calc_close',
    });

    // modal calc2
    modal({
        triggerOpen: '.popup_calc_button',
        modalWindow: '.popup_calc_profile',
        triggerClose: '.popup_calc_profile_close',
        closeClickOverlay: false,
    });

    // modal calc3
    modal({
        triggerOpen: '.popup_calc_profile_button',
        modalWindow: '.popup_calc_end',
        triggerClose: '.popup_calc_end_close',
        closeClickOverlay: false,
    });
    
    // tabs glazing
    tabs({
        tabParentSelector: '.glazing_slider',
        tabsSelector: '.glazing_block',
        tabsContentSelector: '.glazing_content',
        activeClassSelector: '.after_click',
    });

    // tabs decoration
    tabs({
        tabParentSelector: '.decoration_slider',
        tabsSelector: '.no_click',
        tabsContentSelector: '.decoration_content > div > div',
        activeClassSelector: '.after_click',
    });

    // tabs calc
    tabs({
        tabParentSelector: '.balcon_icons',
        tabsSelector: '.balcon_icons_img',
        tabsContentSelector: '.popup_calc_content .big_img > img',
        activeClassSelector: '.do_image_more',
    });

    forms(modalState); 

    timer({
        deadline: '2021-10-18 16:00:00',
        daySelector: '#days',
        hourSelector: '#hours',
        minuteSelector: '#minutes',
        secondSelector: '#seconds',
    });

    gallery();
    
});

 