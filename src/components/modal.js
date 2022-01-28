import { emailField } from "./createEmailField"
import { selectDate } from "./createSelectDate"
import { selectTime } from "./createSelectTime"
import { selectDepartment } from "./createSelectDepartment"
import { checkbox_1, checkbox_2} from "./createCheckbox"
import { helperText } from "./helperText"
import { selectSubject } from "./createSelectSubject"
import { over } from "lodash"



const disableAllFields = (state) =>{
        
    const link = document.querySelector('a')

    selectDepartment.disabled = state
    selectDate.disabled = state
    selectTime.disabled = state
    selectSubject.disabled = state
    emailField.disabled = state 
    checkbox_1.disabled = state
    checkbox_2.disabled = state
    saveButton.disabled = state

    if(state == true){
        link.setAttribute("tabindex", "-1")
    }else if (state == false){
        link.removeAttribute("tabindex")
    }

}


const overlay = () => {

    const overlay = document.getElementById("overlay")

    const body = document.querySelector('body')

    overlay.classList.toggle("active")

    body.classList.toggle("modalOpen")

}






const openOkModal = () => {
    
    overlay()

    disableAllFields(true)  

    const okModal = document.getElementById("okModal")

    const okModalBody = document.getElementById('okModalBody')

    okModal.classList.toggle("okModalInactive")

    const p = document.createElement('p')
                                    
    okModalBody.innerHTML = ""
        
    p.innerHTML = `
                <p>Dzień dobry, dziękujemy za zainteresowanie naszą usługą e-Doradcy NFZ. </p></n>
                <p>Umówimy dla Ciebie konsultację z pracownikiem oddziału NFZ poprzez wideo-spotkanie.</p></n>
                <p>Termin spotkania: <strong>${selectDate.value}</strong>,</n><br> 
                Godzina: <strong>${selectTime.value}</strong></p></n>   
                <p>Temat spotkania:<br>
                <strong>${selectSubject.value}</strong></p></n>

                <p>Link do spotkania przyślemy do Ciebie na adres e-mail: <strong>${emailField.value}</strong> po wygenerowaniu w aplikacji Microsoft Teams.<p></n>
                <p>Link do spotkania 
                <br>
                <p>Do zobaczenia</p></n>

                <p><strong>Zespół e-Doradców NFZ</strong></p>`
    
    okModalBody.appendChild(p)

    const okButton = document.getElementById('okButton')

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape'){
            
            okModal.classList.add("okModalInactive")

            overlay()
        
            window.location.reload(true)
        }
    })
    

    okButton.addEventListener('click', () => {
        
        okModal.classList.toggle("okModalInactive")

        overlay()
        
        window.location.reload(true)
    })


}

const openErrorModal = (responseText) => {

    overlay()

    disableAllFields(true)
    
    const errorModal = document.getElementById('errorModal')

    const errorModalBody = document.getElementById("errorModalBody")

    const p = document.createElement('p')
    
    errorModal.classList.remove("errorModalInactive")

    errorModalBody.innerHTML = ""
    
    if( checkbox_1.checked == false || checkbox_2.checked == false){
        
        p.innerHTML =`Proszę o akceptację wszystkich oświadczeń w celu rezerwacji wizyty!`

    } else {
        p.innerHTML = `${responseText.message}`
    }


    
    
    errorModalBody.appendChild(p)

       
}


const errorButton = document.getElementById("errorButton")

errorButton.addEventListener('click', () => {

    errorModal.classList.add("errorModalInactive")

    overlay()

    disableAllFields(false)
})


//  document.addEventListener('keydown', (event) => {
        
//         if (event.key === 'Escape'){

//             errorModal.classList.add("okModalInactive")
    
//             const overlay = document.getElementById("overlay")

//             overlay.classList.remove('active')

//             disableAllFields(false)

//         }})


 








export  {
    openOkModal,
    openErrorModal,
}
