

// import {dataa

const API_URL = 'https://e-doradca.nfz-lublin.pl:8080/Booking/saveReservation'


const send = (data) => {

        console.log(data)
       
        const jsonString = JSON.stringify(data)

        console.log(jsonString)

        const xhr = new XMLHttpRequest();

        xhr.open('POST', API_URL)

        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.setRequestHeader('Access-Control-Allow-Headers', '*')

        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                const status = xhr.status
                if(status === 0 || (status >= 200 && status < 400)){
                    alert("Termin zarezerwowany")
                    console.log(xhr.responseText)
                    // location.reload()
                }else{
                    alert("Wystąpił nieznany błąd")
                }
            }
        }

        xhr.send(jsonString)



        console.log(xhr)
}

export {
    send
}
