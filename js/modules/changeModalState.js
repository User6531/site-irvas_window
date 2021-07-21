import {checkNumInputs} from '/src/js/services/services';

function changeModalState(state) {

    const typeOfBalcon = document.querySelectorAll('.balcon_icons_img'),
          balconWidth = document.querySelectorAll('#width'),
          balconHeight = document.querySelectorAll('#height'),
          balconGlazing = document.querySelectorAll('#view_type'),
          balconGlazingProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(selector, event, property) {
        selector.forEach((item, i) => {
            item.addEventListener(event, ()=>{
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[property] = i+1;
                        break;
                    case 'INPUT' : 
                        if (item.getAttribute('type') == 'checkbox') {
                            if (i == 0) {
                                state[property] = 'Cold';
                            } else {
                                state[property] = "Warm";
                            }
                            selector.forEach((box, key) => {
                                box.checked = false;
                                if (i == key) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[property] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[property] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }
    bindActionToElems(typeOfBalcon, 'click', 'type');
    bindActionToElems(balconWidth, 'input', 'width');
    bindActionToElems(balconHeight, 'input', 'height');
    bindActionToElems(balconGlazing, 'change', 'glazing');
    bindActionToElems(balconGlazingProfile, 'change', 'glazingProfile');
}

export default changeModalState;