import './scss/style.scss'
import {success} from './data';
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';





const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));



const render = (data) => {
    if (!data.length) {
        return;
    }else
    {
        data.forEach(({id, name}) => {
            const select = document.getElementById("select")
            const option = document.createElement("option")
            option.text = name
            option.value = id
            select.add(option)
    })
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

