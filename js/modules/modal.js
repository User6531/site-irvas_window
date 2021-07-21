export function closeAllModal() {
    const allModals = document.querySelectorAll('[data-modal]');
    
    allModals.forEach(modal=>{
        modal.style.display = 'none';
        document.body.style.overflow = 'visible';
        document.body.style.paddingRight = ``;
    });
}

function modal({triggerOpen, modalWindow, triggerClose, closeClickOverlay = true}) {

const btnOpen = document.querySelectorAll(triggerOpen),
      modal = document.querySelector(modalWindow),
      btnClose = modal.querySelector(triggerClose),
      lockPaddingValue = window.innerWidth - document.documentElement.clientWidth;
     
    // open modal on click buttonOpen
    btnOpen.forEach(trigger=>{
        trigger.addEventListener('click', (e)=>{
            e.preventDefault();

            closeAllModal();

            modalOpen();
        });
    });

    // open modal in a 60 sec
        let OpenModalonTimer;
        if (modal.className == 'popup'){
            OpenModalonTimer = setTimeout(modalOpen, 60000);
        }

    // close modal on click buttonClose
    btnClose.addEventListener('click', ()=>{
        closeAllModal();
        modalClose();
    });

    // close modal on click black space
    modal.addEventListener('click', event=>{
        const target = event.target;

        if(target == modal && closeClickOverlay) {
            closeAllModal();
            modalClose();
        }
    });

    // close modal on Escape button keyboard
    document.addEventListener('keydown', (event)=>{
        if(event.code == "Escape" && getComputedStyle(modal).display == 'block') {
            closeAllModal();
            modalClose();
        }
    });

    function modalOpen() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${lockPaddingValue}px`;
        if (OpenModalonTimer) {
            clearTimeout(OpenModalonTimer);
        }
    }

    function modalClose() {
        modal.style.display = 'none';
        document.body.style.overflow = 'visible';
        document.body.style.paddingRight = ``;
    }
}

export default modal;