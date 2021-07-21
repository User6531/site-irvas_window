import {postData} from '/src/js/services/services';
import {checkNumInputs} from '/src/js/services/services';
import {closeAllModal} from './modal';


function forms(state) {

    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
    
    checkNumInputs('input[name="user_phone"]');

    function clearFormsValue() {
    inputs.forEach(input=>{
        input.value = '';
    });
    }

    const statusMessage = {
        loading: "Loading...",
        succesfull: "Succesfull",
        error: "Error!!!"
    };
    
    forms.forEach(form=>{
        form.addEventListener('submit', e=>{
            e.preventDefault();

            const statusDiv = document.createElement('div');
            statusDiv.innerHTML = statusMessage.loading;
            statusDiv.style.cssText = `
                margin: 0 auto;
                text-align: center;
                color: red;
            `;
            form.append(statusDiv);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc') == 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
            .then(res=>{
                console.log(res);
                statusDiv.innerHTML = statusMessage.succesfull;
            }).catch(()=>{
                console.error("Error");
                statusDiv.innerHTML = statusMessage.error;
            }).finally(()=>{
                clearFormsValue();
                setTimeout(()=>{
                    statusDiv.remove();
                    closeAllModal();
                    // clear state object
                    for (let k in state) {
                        delete state[k];
                    }
                }, 3000);
            });
        });
    });

}

export default forms;