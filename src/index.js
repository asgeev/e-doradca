import './scss/style.scss'
import {success} from './data';
import { buttonRipple, textField, menu } from './material_ui';






const selectContainer = document.getElementById('selectContainer')



const render = (data) => {
    if (!data.length) {
        return;
    }else
    {
        const fragment = document.createDocumentFragment();
        data.forEach(({id, name}) => {
            const div = document.createElement('div')
            div.classList.add('item');
            div.innerHTML = `
                    <p>${id} ${name}</p>
                `
                fragment.appendChild(div)
    })
    selectContainer.appendChild(fragment)
    }
  

}





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

