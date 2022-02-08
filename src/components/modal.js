import { emailField } from "./createEmailField"
import { selectDate } from "./createSelectDate"
import { selectTime } from "./createSelectTime"
import { selectDepartment } from "./createSelectDepartment"
import { checkbox_1, checkbox_2} from "./createCheckbox"
import { helperText } from "./helperText"
import { selectSubject } from "./createSelectSubject"


const disableAllFields = (fieldState) =>{
        
    const link = document.querySelector('a')

    selectDepartment.disabled = fieldState
    selectDate.disabled = fieldState
    selectTime.disabled = fieldState
    selectSubject.disabled = fieldState
    emailField.disabled = fieldState
    checkbox_1.disabled = fieldState
    checkbox_2.disabled = fieldState
    saveButton.disabled = fieldState

    if(fieldState == true){
        link.setAttribute("tabindex", "-1")
    }else if (fieldState == false){
        link.removeAttribute("tabindex")
    }
}


const overlay = (overlayState) => {

    const overlay = document.getElementById("overlay")

    const body = document.querySelector('body')
    
    // overlay.classList.toggle("active")

    // body.classList.toggle("modalOpen")

    if(overlayState == true){
        
        overlay.classList.add("active")
        
        body.classList.add("modalOpen")

        disableAllFields(true)

    }else if(overlayState == false){

        overlay.classList.remove("active")

        body.classList.remove("modalOpen")

        disableAllFields(false)
    }
}

const openOkModal = () => {
    
    overlay(true)

    // disableAllFields(true)  

    const okModal = document.getElementById("okModal")

    const okModalBody = document.getElementById('okModalBody')

    okModal.classList.toggle("okModalInactive")

    const div = document.createElement('div')
                                    
    okModalBody.innerHTML = ""

    div.innerHTML = `  
            <p><strong>Dzień dobry ,</strong><br>
            dziękujemy za zainteresowanie naszą usługą e-Doradcy NFZ.</p>
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
            <p>Link do spotkania przyślemy do Ciebie na wskazany adres e-mail po wygenerowaniu w aplikacji Microsoft Teams.<p>
            <br>  
            <p>Do zobaczenia</p>
            <p><strong>Zespół e-Doradców NFZ</strong></p>
        `
    
    okModalBody.appendChild(div)


    const okButton = document.getElementById('okButton')

    okButton.addEventListener('click', () => {
        
        okModal.classList.toggle("okModalInactive")

        overlay(false)
        
        window.location.reload(true)
    })


}



const openErrorModal = (responseText) => {

    console.log(responseText)

    overlay(true)

    // disableAllFields(true)
    
    const errorModal = document.getElementById('errorModal')

    const errorModalBody = document.getElementById("errorModalBody")

    const p = document.createElement('p')
    
    errorModal.classList.remove("errorModalInactive")

    errorModalBody.innerHTML = ""
    
    if( checkbox_1.checked == false || checkbox_2.checked == false){
        
        p.innerHTML =`Proszę o akceptację wszystkich oświadczeń w&nbsp;celu rezerwacji wizyty!`

    } else {
        p.innerHTML = `${responseText.message}`
    }

    errorModalBody.appendChild(p)
    

    const errorButton = document.getElementById("errorButton")

    errorButton.addEventListener('click', () => {

        errorModal.classList.add("errorModalInactive")

        overlay(false)

        // disableAllFields(false)
    })    

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
              
            errorModal.classList.add("errorModalInactive")
       
            overlay(false)
       
            // disableAllFields(false)
           
           }
    })
    

}













export  {
    openOkModal,
    openErrorModal,
}
