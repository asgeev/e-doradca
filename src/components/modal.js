import { emailField } from "./createEmailField"
import { selectDate } from "./createSelectDate"
import { selectTime } from "./createSelectTime"
import { selectDepartment } from "./createSelectDepartment"
import { checkbox_1, checkbox_2} from "./createCheckbox"
import { helperText } from "./helperText"
import { selectSubject } from "./createSelectSubject"
import { over, reverse } from "lodash"



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
            <p><strong>Dzień dobry</strong>, dziękujemy za zainteresowanie naszą usługą e-Doradcy NFZ.</p>
            <p>Umówimy dla Ciebie konsultację z pracownikiem oddziału NFZ poprzez wideo-spotkanie.</p>
            <div class="okModalBodyBox">
            <img src = "./icons/calendar.png">
            <p><strong>Termin spotkania: </strong>${selectDate.value}</p>
            </div>
            <div class="okModalBodyBox">
            <img src = "./icons/clock.png">
                <p><strong>Godzina: </strong>${selectTime.value}</p>
            </div>
            <div class="okModalBodyBox">
            <img src = "./icons/email.png">
                <p style = "text-align:left" ><strong>Adres e-mail: </strong>${emailField.value}</p>
            </div>
            <div class="okModalBodyBox">
            <img src = "./icons/chat.png">
                <p style = "text-align:left"><strong>Temat spotkania: </strong>${selectSubject.value}</p>
            </div>
            <br>
            <p>Link do spotkania przyślemy do Ciebie na wskazany adres po wygenerowaniu w aplikacji Microsoft Teams.<p>
            <br>  
            <p>Do zobaczenia</p>
            <p><strong>Zespół e-Doradców NFZ</strong></p>
        `
    
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

    console.log(responseText)

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
