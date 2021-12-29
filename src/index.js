import './scss/style.scss'
import { success } from './data';
import {selectDepartment} from './components/createSelectDepartment'
import {selectDate} from './components/createSelectDate';
import {selectTime} from './components/createSelectTime';
import {saveButton} from './components/createSaveButton';
import {emailField} from './components/createEmailField';
import { map, values } from 'lodash';





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
    const selectOddzialList = document.getElementById('selectDepartmentList')
    selectOddzialList.appendChild(fragment) 
    selectDepartment.layoutOptions();
    }   

}



const renderDate = (data) => {
    
    if (!data.length) {
        return;
    }else
    {   
        let currentId = selectDepartment.selectedIndex


        let currentDepartment = data[currentId].dates
        
        // console.log(currentDepartment)

        const currentDepartmentArray = Object.values(currentDepartment)

        // console.log(currentDepartmentArray)

        const fragmenta = document.createDocumentFragment()
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
                        fragmenta.append(li)
            })
            const selectDateList = document.getElementById('selectDateList')
            selectDateList.appendChild(fragmenta) 
            selectDate.layoutOptions();
    }
}  






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

