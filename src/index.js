import './scss/style.scss'

import createSelectDepartment from './components/createSelectDepartment'
import createSelectDate from './components/createSelectDate';
import createSelectTime from './components/createSelectTime';
import createSaveButton from './components/createSaveButton';
import createEmailField from './components/createEmailField';
import success from './data/data';





window.addEventListener("load", function(){
    createSelectDepartment()
    createSelectDate()
    createSelectTime()
    createEmailField()
    createSaveButton()
});







const render = (data) => {
    if (!data.length) {
        return;
    }else
    {
        const fragment = document.createDocumentFragment()
        data.forEach(({id,name}) => {
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
                fragment.appendChild(li)
    })
    const selectOddzialList = document.getElementById('selectDepartmentList')
    selectOddzialList.appendChild(fragment)
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

