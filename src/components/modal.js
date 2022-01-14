import { emailField } from "./createEmailField"
import { selectDate } from "./createSelectDate"
import { selectTime } from "./createSelectTime"
import { selectDepartment } from "./createSelectDepartment"




const openModal = (response) => {
    
    console.log(response)

    const modal = document.getElementById("modal")

    const modalBody = document.getElementById('modalBody')

    modal.classList.toggle("modalInactive")

    if(response == undefined){
        
        const p = document.createElement('p')
        p.innerHTML = `
        Zarezerwowano termin ${selectDate.value} na godzinę ${selectTime.value} w oddziale ${selectDepartment.value} na adres ${emailField.value}`
        modalBody.appendChild(p)    
    }else{

        const p = document.createElement('p')
        modalBody.innerHTML = ""
        p.innerHTML = `Błąd: ${response.message}`
        modalBody.appendChild(p)
    }

   
}

    const okButton = document.getElementById('okButton')

    okButton.addEventListener('click', () => {
        modal.classList.toggle("modalInactive")
    })



    








export  {
    openModal
}
