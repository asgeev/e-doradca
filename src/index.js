import './scss/style.scss'
import { getSuccess } from './getData';
import { send } from './postData'
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

            const currentId = selectDepartment.selectedIndex -1 
            
            const currentDepartment = data[currentId].dates

            console.log(data[currentId])
            
            if (currentDepartment == undefined){
                return
            }else{  
                selectDate.setSelectedIndex(0) 
                selectDateList.innerHTML = `
                        <li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="" role="option">
                        <span class="mdc-list-item__ripple"></span>
                        </li>`

                selectDate.disabled = false
                selectTime.disabled = true
                emailField.disabled = true
                renderDate(currentDepartment)
            }

    })
    }   

}


const renderDate = (currentDepartment)   => {
    
        const currentDepartmentArray = Object.values(currentDepartment)

        emailField.disabled = true

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

                emailField.disabled = true
                
                const selectedDateId = selectDate.selectedIndex -1
                const selectedDate = currentDepartment[selectedDateId]


                console.log(selectedDate)    

                    renderTime(selectedDate)            
                
            })
        }  



const renderTime = (selectedDate)   => {

    if (selectedDate == undefined){
        return
    }else{
        
        selectTime.setSelectedIndex(0) 
        
        selectTime.disabled = false

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
            
            selectTimeList.innerHTML = `
                <li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="" role="option">
                <span class="mdc-list-item__ripple"></span>
                </li>`

            selectTimeList.appendChild(fragment) 
            
            selectTime.layoutOptions()
            
            selectTime.listen('MDCSelect:change', () => {

                    emailField.disabled = false

                    console.log(selectTime.selectedIndex, selectTime.value)

            });

        }
    }





    
const button = document.querySelector('#saveButton')

button.addEventListener('click', (e) => {
        e.preventDefault()
        // const toSend = {
        //     email: "asdas@wp.pl",
        //     date: "2022-01-14",
        //     id: "3",
        //     time: "12:00:00",
        // }
        // send(toSend)
        console.log(selectDepartment.selectedIndex)
        console.log(selectDate.value)
        console.log(selectTime.value)
        console.log(emailField.value)
})


    
    


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

