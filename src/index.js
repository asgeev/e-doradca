import './scss/style.scss'
import { success } from './data';
import {selectDepartment} from './components/createSelectDepartment'
import {selectDate} from './components/createSelectDate';
import {selectTime} from './components/createSelectTime';
import {saveButton} from './components/createSaveButton';
import {emailField} from './components/createEmailField';
import { map, values } from 'lodash';



// window.addEventListener('load', () => {
//     const state = true
//     // selectDate.disabled = state
//     selectTime.disabled = state
//     emailField.disabled = state
// })

const renderDepartment = (data) => {
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
    const selectDepartmentList = document.getElementById('selectDepartmentList')
    selectDepartmentList.appendChild(fragment) 
    selectDepartment.layoutOptions();
    }   

}
var currentId = 0


selectDepartment.listen('MDCSelect:change', () => {
    // console.log(`Selected option at index ${selectDepartment.selectedIndex} with value "${selectDepartment.value}"`);
    // let selectedId  = selectDepartment.selectedIndex
    // selectedDepartmentId(selectedId)
        // console.log(selectDepartment.selectedIndex)
        // let currentId = selectDepartment.selectedIndex
        // console.log(selectDepartment.selectedIndex)
        // currentId = selectDepartment.selectedIndex
        console.log(selectDepartment.selectedIndex)
        renderDate(selectDepartment.selectedIndex)
        
    });
  
const renderDate = (data, selectedIndex)   => {
    
    if (!data.length) {
        return;
    }else
    {   
        // let currentId = 0
       
        console.log(currentId)
        let currentId = selectedIndex
        
        let currentDepartment = data[currentId].dates
        
        // console.log(currentDepartment)

        const currentDepartmentArray = Object.values(currentDepartment)

        // console.log(currentDepartmentArray)

        const fragment = document.createDocumentFragment()
                currentDepartmentArray.map(({date, dayName}) => {
                    const li = document.createElement('li')
                    li.classList.add("mdc-list-item")
                    li.setAttribute("aria-selected", false)
                    li.setAttribute("data-value", date)
                    li.setAttribute("role", "option")
                    li.innerHTML = `
                            <span class="mdc-list-item__ripple"></span>
                            <span class="mdc-list-item__text">
                            ${date}, ${dayName}
                            </span>
                        `
                        fragment.append(li)
            })
            const selectDateList = document.getElementById('selectDateList')
            selectDateList.appendChild(fragment) 
            selectDate.layoutOptions();

    }
``  }  






export {
    renderDepartment,
    renderDate,
    // selectedDepartmentId,
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

