function gallery() {

    const parentGallery = document.querySelector('.works'),
          img = document.createElement('img'),
          popup = document.createElement('div'),
          lockPaddingValue = window.innerWidth - document.documentElement.clientWidth;

    popup.classList.add('popup');
    popup.style.cssText = `
        justify-content: center;
        align-items: center;
    `;
    img.style.cssText = `
        width: 30%;
    `;
    popup.classList.add('faded');
    popup.append(img);
    parentGallery.append(popup);

    parentGallery.addEventListener('click', (e)=>{
        e.preventDefault();

        const target = e.target;
        if (target && target.classList.contains('preview')) { 
            popup.style.display = 'flex';

            const path = target.parentNode.getAttribute('href');
            img.src = path;

            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${lockPaddingValue}px`;
        }

        if (target && target.classList.contains('popup')) {
            popup.style.display = 'none';
            document.body.style.overflow = 'visible';
            document.body.style.paddingRight = ``;
        }
    });
}

export default gallery;