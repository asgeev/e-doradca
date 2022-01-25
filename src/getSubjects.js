import { renderSubjects } from "./index"

const API_URL = 'http://e-doradca.nfz.gov.pl:8080/Booking/getSubjectList/'
// const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/getSubjectList/'

const getSuccessSubjects = (data) => {
    const request = JSON.parse(data.target.responseText)
    renderSubjects(request)
}

const error = (err) => {
    console.log(err)
}



const xhr = new XMLHttpRequest();

xhr.onload = getSuccessSubjects
    
xhr.onerror = error

xhr.open('GET', API_URL)

xhr.send();



export {
    getSuccessSubjects,
}



