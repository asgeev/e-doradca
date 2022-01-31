import { render } from "./index"

// const API_URL = 'https://e-doradca.nfz.gov.pl:8080/Booking/getBranchListWithCalendar/'
const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/getBranchListWithCalendar/'

const getSuccess = (data) => {
    const request = JSON.parse(data.target.responseText)
    render(request)
}

const error = (err) => {
    console.log(err)
}



const xhr = new XMLHttpRequest();


if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 400)){
    xhr.onload = getSuccess
}else{
    xhr.onerror = error
}

xhr.open('GET', API_URL)

xhr.send();



export {
    getSuccess,
}



