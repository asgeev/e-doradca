import './scss/style.scss'
import {success} from './data';
import { buttonRipple, textField } from './material_ui';
import {MDCMenu} from '@material/menu';
import {MDCSelect} from '@material/select';








const render = (data) => {
    if (!data.length) {
        return;
    }else
    {
        const fragment = document.createDocumentFragment()
        data.forEach(({id,name}) => {
            const li = document.createElement('li')
            li.classList.add("mdc-list-item")
            li.setAttribute("aria-selected", false)
            li.setAttribute("data-value", id)
            li.setAttribute("role", "option")
            li.innerHTML = `
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">
                      ${name}
                    </span>
                `
                fragment.appendChild(li)
    })
    const oddzial = document.getElementById('oddzial')
    oddzial.appendChild(fragment)
    }
}



window.addEventListener("load", function(){
    
    const selectOddzial = new MDCSelect(document.querySelector('.mdc-select'));

    selectOddzial.listen('MDCSelect:change', () => {
        alert(`Selected option at index ${selectOddzial.selectedIndex} with value "${selectOddzial.value}"`);
    });
});





export {
    render
}

























 
// const send = document.querySelector('#send')
// const date = document.querySelectorAll('input[type=date]')

// console.log( success )

/*
const dataList = data.map(({id, name}) =>{
    const select = document.getElementById("select")
    const option = document.createElement("option")
    option.text = Oddział
    option.value = id
    select.add(option)
})*/

