import { renderDepartment, renderDate} from "./index"


const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/getBranchListWithCalendar/'

const success = (data) => {
    localStorage['data_all']=data.target.responseText
    const request = JSON.parse(data.target.responseText)
    renderDepartment(request)
   // renderDate(request)
    // jsonnn=request
}

const error = (err) => {
    console.log(err)
}



const xhr = new XMLHttpRequest();

xhr.onload = success
    
xhr.onerror = error

xhr.open('GET', API_URL)

xhr.send();



export {
    success,

}



