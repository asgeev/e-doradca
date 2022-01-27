import { emailField } from "./createEmailField"
import { selectDate } from "./createSelectDate"
import { selectTime } from "./createSelectTime"
import { selectDepartment } from "./createSelectDepartment"
import { checkbox_1, checkbox_2} from "./createCheckbox"
import { helperText } from "./helperText"
import { selectSubject } from "./createSelectSubject"


const overlay = () => {
    const overlay = document.getElementById("overlay")

    const body = document.querySelector('body')

    overlay.classList.toggle("active")

    body.classList.toggle("modalOpen")
}






const openOkModal = () => {
    
    overlay()


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
                <br>
                <p>Do zobaczenia</p></n>

                <p><strong>Zespół e-Doradców NFZ</strong></p>`
    
    okModalBody.appendChild(p)

    const okButton = document.getElementById('okButton')

    okButton.addEventListener('click', () => {
        
        okModal.classList.toggle("okModalInactive")
        
        location.reload()
    })


}
    







const openErrorModal = (responseText) => {

    overlay()
    
    const errorModal = document.getElementById('errorModal')

    const errorModalBody = document.getElementById("errorModalBody")

    const p = document.createElement('p')
    
    errorModal.classList.toggle("errorModalInactive")

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
    
        errorModal.classList.toggle("errorModalInactive")

        overlay()
})









    








export  {
    openOkModal,
    openErrorModal,
}
