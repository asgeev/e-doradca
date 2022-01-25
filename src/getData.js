import { render } from "./index"

const API_URL = 'http://e-doradca.nfz.gov.pl:8080/Booking/getBranchListWithCalendar/'
// const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/getBranchListWithCalendar/'

const getSuccess = (data) => {
    const request = JSON.parse(data.target.responseText)
    render(request)
}

const error = (err) => {
    console.log(err)
}



const xhr = new XMLHttpRequest();

xhr.onload = getSuccess
    
xhr.onerror = error

xhr.open('GET', API_URL)

xhr.send();



export {
    getSuccess,
}



