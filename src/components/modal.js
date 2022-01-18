import { emailField } from "./createEmailField"
import { selectDate } from "./createSelectDate"
import { selectTime } from "./createSelectTime"
import { selectDepartment } from "./createSelectDepartment"


const overlay = () => {
    const overlay = document.getElementById("overlay")

    overlay.classList.toggle("active")
}





const openOkModal = () => {
    
    overlay()

    const okModal = document.getElementById("okModal")

    const okModalBody = document.getElementById('okModalBody')

    okModal.classList.toggle("okModalInactive")

    const p = document.createElement('p')
    
    okModalBody.innerHTML = ""
        
    p.innerHTML = `
        Zarezerwowano termin ${selectDate.value} na godzinę ${selectTime.value} w oddziale ${selectDepartment.value} na adres ${emailField.value}`
    
    okModalBody.appendChild(p)

    const okButton = document.getElementById('okButton')

    okButton.addEventListener('click', () => {
        
        okModal.classList.toggle("okModalInactive")
        
        location.reload()
    })


}
    







const openErrorModal = (responseText) => {

    overlay()
    
    console.log(responseText) 

    const errorModal = document.getElementById('errorModal')

    const errorModalBody = document.getElementById("errorModalBody")

    const p = document.createElement('p')

    errorModal.classList.toggle("errorModalInactive")

    errorModalBody.innerHTML = ""
    
    p.innerHTML = `${responseText.message}`
    
    errorModalBody.appendChild(p)

}


const errorButton = document.getElementById("errorButton")

        errorButton.addEventListener('click', () => {
    
        errorModal.classList.toggle("errorModalInactive")

        overlay()
})










    








export  {
    openOkModal,
    openErrorModal,
}
