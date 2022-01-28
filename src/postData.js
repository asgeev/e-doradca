import { openOkModal, openErrorModal } from "./components/modal"


// const API_URL = 'https://e-doradca.nfz.gov.pl:8080/Booking/saveReservation'
const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/saveReservation'

const send = (data) => {

        const jsonString = JSON.stringify(data)

        const xhr = new XMLHttpRequest();

        xhr.open('POST', API_URL)

        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.setRequestHeader('Access-Control-Allow-Headers', '*')

        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                const status = xhr.status
                if(status === 0 || (status >= 200 && status < 400)){

                    openOkModal()

                }else{
                    
                    const responseText = JSON.parse(xhr.responseText)
                    
                    openErrorModal(responseText)
                }
            }
        }

        xhr.send(jsonString)
}

export {
    send,
}
