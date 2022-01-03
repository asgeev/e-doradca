import './scss/style.scss'
import { success } from './data';
import {selectDepartment} from './components/createSelectDepartment'
import {selectDate,selectDateListen} from './components/createSelectDate';
import {selectTime} from './components/createSelectTime';
import {saveButton} from './components/createSaveButton';
import {emailField} from './components/createEmailField';
// import { map, values } from 'lodash';


window.addEventListener('load', () => {
    const state = true
    selectDate.disabled = state
    selectTime.disabled = state
    emailField.disabled = state
})



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
        const selectDepartmentList = document.getElementById('selectDepartmentList')
        selectDepartmentList.appendChild(fragment) 
        selectDepartment.layoutOptions();

        selectDepartment.listen('MDCSelect:change',  () => {
        // console.log(selectDepartment.selectedIndex)
        // console.log(typeof(selectDepartment.selectedIndex))

        let currentId = selectDepartment.selectedIndex - 1
        let currentDepartment = data[currentId].dates
        console.log(data[currentId])
        // currentId = undefined
        if (currentId == undefined){
            return
        }else{
            selectDate.disabled = false
            renderDate(data,currentDepartment)
        }
    })
    }   

}


const renderDate = (data,currentDepartment)   => {
    
    // console.log(currentId);
      
    if (!data.length) {
        return;
    }else 
    {   

        // console.log(currentDepartment)

        const currentDepartmentArray = Object.values(currentDepartment)

        // console.log(currentDepartmentArray)

        const fragment = document.createDocumentFragment()
                currentDepartmentArray.map(({date, dayName, avaiableTime}) => {
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
            //selectDateList.innerHTML=""
            // let first=document.getElementById('selectDateList').firstElementChild
            // document.getElementById('selectDateList').innerHTML = ""
            // selectDateList.appendChild(first) 
            selectDateList.appendChild(fragment) 
            // document.getElementById('selectDate').querySelector(".mdc-select__selected-text").innerHTML="" 
            selectDate.layoutOptions();    
            
            
            selectDate.listen('MDCSelect:change',  () => {
                
                let selectedDateId = selectDate.selectedIndex -1 
                let selectedDate = currentDepartment[selectedDateId]
                console.log(selectedDate)

                if (selectedDateId == undefined){
                    return
                }else{
                    selectTime.disabled = false
                    renderTime(selectedDate)
                }
            })

    }
}  



const renderTime = (selectedDate)   => {

        const timeItem = selectedDate.avaiableTime
       console.log(timeItem)
   
        const fragment = document.createDocumentFragment()
                timeItem.map(timeItems => { 
                    const li = document.createElement('li')
                    li.classList.add("mdc-list-item")
                    li.setAttribute("aria-selected", false)
                    li.setAttribute("data-value", timeItems)
                    li.setAttribute("role", "option")
                    li.innerHTML = `
                            <span class="mdc-list-item__ripple"></span>
                            <span class="mdc-list-item__text">
                            ${timeItems}
                            </span>
                        `
                        fragment.append(li)
            })
            const selectTimeList = document.getElementById('selectTimeList')
            //selectDateList.innerHTML=""
            // let first = document.getElementById('selectTimeList').firstElementChild
            // document.getElementById('selectTimeList').innerHTML = ""
            selectTimeList.appendChild(fragment) 
            // document.getElementById('selectTime').querySelector(".mdc-select__selected-text").innerHTML="" 
            // selectDateList.remove()
            // console.log(selectDateList)
            selectTime.layoutOptions();     
    }
 


export {
    render,
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

