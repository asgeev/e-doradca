import './scss/style.scss'
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';

// import { data } from './data'


const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));




const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/getBranchList/'





















 
// const send = document.querySelector('#send')
// const date = document.querySelectorAll('input[type=date]')

// console.log( success )

/*
const dataList = data.map(({id, Oddział}) =>{
    const select = document.getElementById("select")
    const option = document.createElement("option")
    option.text = Oddział
    option.value = id
    select.add(option)
})*/

