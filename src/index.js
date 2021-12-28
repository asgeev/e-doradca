import './scss/style.scss'
import { success } from './data';
import {selectDepartment} from './components/createSelectDepartment'
import {selectDate} from './components/createSelectDate';
import {selectTime} from './components/createSelectTime';
import {saveButton} from './components/createSaveButton';
import {emailField} from './components/createEmailField';
import { map } from 'lodash';





const render = (data) => {
    if (!data.length) {
        return;
    }else
    {
        const fragment = document.createDocumentFragment()
        data.map(({id,name}) => {
            const li = document.createElement('li')
            li.classList.add("mdc-list-item")
            li.setAttribute("aria-selected", false)
            li.setAttribute("data-value", name)
            li.setAttribute("role", "option")
            li.innerHTML = `
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">
                      ${id}. ${name}
                    </span>
                `
                fragment.append(li)
    })
    const selectOddzialList = document.getElementById('selectDepartmentList')
    selectOddzialList.appendChild(fragment) 
    selectDepartment.layoutOptions();
    }   

}


selectDepartment.listen('MDCSelect:change', () => {
    // console.log(`Selected option at index ${selectDepartment.selectedIndex} with value "${selectDepartment.value}"`);
    let selectedId  = selectDepartment.selectedIndex
    selectedDepartmentId(selectedId)
});



const selectedDepartmentId = (args, selectedId) => {
    // console.log(args) 
    if (args === undefined) {
        console.log("Blad")
    } else if ( args === 5) {
        console.log(selectedId)
        }
    }
    // return request
    //     console.log(request)
    // if ( args[0] === 5){
    //     console.log(args[1])
    // }



const renderDate = (a) => {
    // console.log(a[2])
}




const renderDateTest = (data) => {
    //  console.log(data[a])
  

}


export {
    render,
    renderDate,
    renderDateTest,
    selectedDepartmentId,
};




























 
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

