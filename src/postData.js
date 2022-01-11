

// import {dataa

const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/saveReservation'


const send = (data) => {

        console.log(data)
       
        const jsonString = JSON.stringify(data)

        console.log(jsonString)

        const xhr = new XMLHttpRequest();

        xhr.open('POST', API_URL)

        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.setRequestHeader('Access-Control-Allow-Headers', '*');

        xhr.send(jsonString)
        console.log(xhr)
}

export {
    send
}
