import { render } from "../index"

const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/getBranchList/'




const success = (data) => {
    const request = JSON.parse(data.target.responseText)
    render(request)
}


const error = (err) => {
    console.log(err)
}



const xhr = new XMLHttpRequest();

xhr.onload = success
    
xhr.onerror = error

xhr.open('GET', API_URL, true)

xhr.send();



export default success;



