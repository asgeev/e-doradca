


const modal = document.getElementById("modal")

const modalWindow = (response) => {


    if(response == undefined){
        alert(`Termin został zarezerwowany`)
        location.reload()

    }else{
        alert(response.message)
    }





}


export  {
    modalWindow
}
