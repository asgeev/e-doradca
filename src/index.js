import './scss/style.scss'
import { success } from './data';
import {selectDepartment} from './components/createSelectDepartment'
import {selectDate} from './components/createSelectDate';
import {selectTime} from './components/createSelectTime';
import {saveButton} from './components/createSaveButton';
import {emailField} from './components/createEmailField';


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
                selectDate.setSelectedIndex(0) 
                selectDateList.innerHTML = `<li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="" role="option">
                <span class="mdc-list-item__ripple"></span>
              </li>`

                selectDate.disabled = false
                selectTime.disabled = true
                renderDate(data,currentDepartment)

        

            }

    })
    }   

}


const renderDate = (data,currentDepartment)   => {

    if (!data.length) {
        return;
    }else 
    {      
        const currentDepartmentArray = Object.values(currentDepartment)

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

            selectDate.layoutOptions()

            

            
            selectDate.listen('MDCSelect:change',  () => {
                
                let selectedDateId = selectDate.selectedIndex -1 
                let selectedDate = currentDepartment[selectedDateId]
                console.log(selectedDate)

                if (selectedDateId == undefined){
                    return
                }else{
                    selectTime.setSelectedIndex(0) 
                    selectTime.innerHTML = ""
                    selectTimeList.innerHTML = `<li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="" role="option">
                    <span class="mdc-list-item__ripple"></span>
                  </li>`
                    selectTime.disabled = false
                    renderTime(selectedDate)
                }
            })


    }
}  



const renderTime = (selectedDate)   => {

    if(selectedDate == undefined){
        return
    }else{

        const timeItems = selectedDate.avaiableTime
   
        const fragment = document.createDocumentFragment()
                timeItems.map(timeItems => { 
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

            selectTimeList.appendChild(fragment) 
            
            selectTime.layoutOptions()
            
            selectTime.listen('MDCSelect:change', () => {
                
                emailField.disabled = false
                console.log(selectTime.selectedIndex, selectTime.value)

            });

    }
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

