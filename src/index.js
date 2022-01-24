import './scss/style.scss'
import {getSuccess} from './getData';
import {getSuccessSubjects} from './getSubjects';
import {send} from './postData';
import {selectDepartment} from './components/createSelectDepartment';
import {selectDate} from './components/createSelectDate';
import {selectTime} from './components/createSelectTime';
import {emailField} from './components/createEmailField';
import {selectSubject} from './components/createSelectSubject';
import {checkbox_1, checkbox_2} from './components/createCheckbox';
import {openErrorModal} from './components/modal';
import {helperText} from './components/helperText';


window.addEventListener('load', () => {
    const state = true
    selectDate.disabled = state
    selectTime.disabled = state
    // emailField.disabled = state
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

            // selectDepartment.helperTextContent = ""

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
                // emailField.disabled = true
                renderDate(currentDepartment)

            }

    })
    }   

}


const renderDate = (currentDepartment)   => {


        const currentDepartmentArray = Object.values(currentDepartment)
        console.log(currentDepartmentArray)


        const fragment = document.createDocumentFragment()
                currentDepartmentArray.map(({date}) => {
                    const li = document.createElement('li')
                    li.classList.add("mdc-list-item")
                    li.setAttribute("aria-selected", false)
                    li.setAttribute("data-value", date)
                    li.setAttribute("role", "option")
                    li.innerHTML = `
                            <span class="mdc-list-item__ripple"></span>
                            <span class="mdc-list-item__text">
                            ${date}
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

                // selectDate.helperTextContent = ""

                console.log(selectDate.selectedIndex)
                selectTime.setSelectedIndex(0)
                selectTime.disabled = true
                // emailField.disabled = true
                
                const selectedDateId = selectDate.selectedIndex -1
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
                    timeItems = timeItems.slice(0, 5) 
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

                    // selectTime.helperTextContent = ""

                    // emailField.disabled = false

                    console.log(selectTime.selectedIndex, selectTime.value)

            });

        }
    }

const renderSubjects = (subjectList) => {

        if (!subjectList.length) {
            return;
        }else
        {
            // const subjectListArray = Object.values(subjectList)
            const fragment = document.createDocumentFragment()
            subjectList.map(({id,name}) => {
                const li = document.createElement('li')
                li.classList.add("mdc-list-item")
                li.setAttribute("aria-selected", false)
                li.setAttribute("data-value", name)
                li.setAttribute("role", "option")
                li.innerHTML = `
                        <span class="mdc-list-item__ripple"></span>
                        <span class="mdc-list-item__text">
                          ${name}
                        </span>
                    `
                    fragment.append(li)
        })

            const selectSubjectList = document.getElementById('selectSubjectList')
            
            selectSubjectList.appendChild(fragment) 
            
            selectSubject.layoutOptions()
    
        }
    
            selectSubject.listen('MDCSelect:change', () => {
                
                // selectSubject.helperTextContent = ""
                
                console.log(`${selectSubject.selectedIndex}, ${selectSubject.value}`)
            
            })
    }




const button = document.getElementById('saveButton')

button.addEventListener('click', (event) => {

        const top = document.getElementById('container') 

        event.preventDefault()

        if(selectDepartment.value == ""){

            top.scrollIntoView(top)
            selectDepartment.valid = false
            // selectDepartment.helperTextContent = "*Wybierz oddział z rozwijanej listy"
        
        }else if(selectDate.value == ""){
            
            top.scrollIntoView(top)
            selectDate.valid = false
            // selectDate.helperTextContent = "*Wybierz datę"

        
        }else if(selectTime.value == ""){
            
            top.scrollIntoView(top)
            selectTime.valid = false
            // selectTime.helperTextContent = "*Wybierz godzinę"

        
        }else if(selectSubject.valid == false){

            selectSubject.valid = false
            // selectSubject.helperTextContent = "*Musisz wybrać temat spotkania"

        }else if (emailField.valid == false && emailField.value == ""){

            // emailField.valid = false 
            emailField.focus()   
            // emailField.helperTextContent = "*Nieprawidłowy adres e-mail"
        
        }else if (checkbox_1.checked == false){
            // alert("Zaakceptuj oświadczenie nr 1" )
            checkbox_1Box.classList.add('error')
            openErrorModal()
            if(checkbox_2.checked == false){
                checkbox_2Box.classList.add('error')
            }else{
                return
            }
        }else if (checkbox_2.checked == false) {
            // alert("Zaakceptuj oświadczenie nr 2" )
            checkbox_2Box.classList.add('error')
            openErrorModal()
            if(checkbox_1.checked == false){
                checkbox_1Box.classList.add('error')
            }else{
                return
            }
        }else{
            const toSend = {
                email: emailField.value,
                date: selectDate.value,
                branchId: selectDepartment.value,
                subjectId: selectSubject.selectedIndex,
                time: selectTime.value, 
            }
            send(toSend)
        }
        
})


const errorRegulationsCheckbox1 = document.getElementById('checkbox-1Input')
const checkbox_1Box = document.getElementById("checkbox-1Box")

errorRegulationsCheckbox1.addEventListener("click", () => {

        if(checkbox_1.checked == true){
            checkbox_1Box.classList.remove('error')
        }else if(checkbox_1.checked == false) {
            checkbox_1Box.classList.add('error')
        }
        
})


const errorRegulationsCheckbox2 = document.getElementById('checkbox-2Input')
const checkbox_2Box = document.getElementById("checkbox-2Box")


errorRegulationsCheckbox2.addEventListener("click", () => {

        if(checkbox_2.checked == true){
            checkbox_2Box.classList.remove('error')
        }else if(checkbox_2.checked == false) {
            checkbox_2Box.classList.add('error')
        }
        
})





export {
    render,
    renderSubjects,
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

