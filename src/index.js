import './scss/style.scss'
import { getSuccess } from './getData';
import { send } from './postData'
import {selectDepartment} from './components/createSelectDepartment'
import {selectDate} from './components/createSelectDate';
import {selectTime} from './components/createSelectTime';
import {saveButton} from './components/createSaveButton';
import {emailField} from './components/createEmailField';
import {checkbox} from './components/createCheckbox';


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
            li.setAttribute("data-value", id)
            li.setAttribute("role", "option")
            li.innerHTML = `
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">
                      ${name}
                    </span>
                `
                fragment.append(li)
    })
        const selectDepartmentList = document.getElementById('selectDepartmentList')
        selectDepartmentList.appendChild(fragment) 
        selectDepartment.layoutOptions();


        selectDepartment.listen('MDCSelect:change',  () => {

            selectDepartment.valid = true

            selectDate.setSelectedIndex(0)

            selectDate.disabled = false

            const currentId = selectDepartment.selectedIndex - 1
            
            const currentDepartment = data[currentId].dates

            console.log(data[currentId])
            
            if (currentDepartment == undefined){
                return
            }else{  
                
                selectTime.disabled = true
                emailField.disabled = true
                renderDate(currentDepartment)

            }

    })
    }   

}


const renderDate = (currentDepartment)   => {


        const currentDepartmentArray = Object.values(currentDepartment)
        console.log(currentDepartmentArray)


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
            
            selectDateList.innerHTML = `
                <li class="mdc-list-item mdc-list-item--selected" aria-selected="true" data-value="" role="option">
                    <span class="mdc-list-item__ripple"></span>
                </li>
            `


            selectDateList.appendChild(fragment) 

            selectDate.layoutOptions()

            
            selectDate.listen('MDCSelect:change',  () => {

                console.log(selectDate.selectedIndex)
                selectTime.setSelectedIndex(0)
                selectTime.disabled = true
                emailField.disabled = true
                
                const selectedDateId = selectDate.selectedIndex -1
                // const selectedDate = Object.values(currentDepartment.)
                const selectedDate = currentDepartmentArray[selectedDateId]
                console.log(selectedDate)

                if(selectedDate == undefined){
                    return
                }else{
                    renderTime(selectedDate)           
                }
                
            })
        
        }  



const renderTime = (selectedDate)   => {

    if (selectedDate == undefined){
        return
    }else{

        selectTime.disabled = false

        selectTime.setSelectedIndex(0) 
        


        const timeItems = selectedDate.avaiableTime
        const timeItemsArray = Object.values(timeItems)
   
        const fragment = document.createDocumentFragment()
                timeItemsArray.map(timeItems => { 
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



    
const button = document.getElementById('saveButton')

button.addEventListener('click', (event) => {

        event.preventDefault()

        if(selectDepartment.value == ""){
            selectDepartment.valid = false
        }else if(selectDate.value == ""){
            selectDate.valid = false
        }else if(selectTime.value == ""){
            selectTime.valid = false
        }else if (emailField.valid !== true){
            // alert("Bledny email")
            // emailField.classList.add("mdc-select--required")
            emailField.valid = false
            // emailField.focus()
        }else{
            const toSend = {
                email: emailField.value,
                date: selectDate.value,
                id: selectDepartment.value,
                time: selectTime.value,
            }
            send(toSend)
        }
        
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

