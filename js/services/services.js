export async function postData(url, data) {
    let res = await fetch (url, {
        method: "POST",
        body: data,
    });
    return await res.text();
}

export function checkNumInputs(selector) {
    const inputsPhoneValue = document.querySelectorAll(selector);

    inputsPhoneValue.forEach(item=>{
        item.addEventListener('input', ()=>{
            item.value = item.value.replace(/\D/g, '');
        });
    });
}







