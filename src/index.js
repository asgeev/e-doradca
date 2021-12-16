import {data} from "./data"

// const send = document.querySelector('#send')
// const date = document.querySelectorAll('input[type=date]')

console.log(data)


const dataList = data.map(({id, Oddział}) =>{
    const select = document.getElementById("select")
    const option = document.createElement("option")
    option.text = Oddział
    option.value = id
    select.add(option)
})



function load(){
    const xhr = new XMLHttpRequest();

    console.log(xhr);
    xhr.open('GET', 'https://e-doradca.nfz-lublin.pl:8080/', true)

    xhr.onload = function(){
        if (this.status == 200){
            const element = document.getElementById('container').textContent = xhr.responseText
        }
    }
    xhr.send();
}

load()

/*
$.ajax({
    url: "https://e-doradca.nfz-lublin.pl:8080/",
    type: 'get',
    data: {
      action: 'get_branch_list()',
      event_name: 'test'
    }*/

    $.ajax({
        url: "https://e-doradca.nfz-lublin.pl:8080/",
        dataType: "json", //html, json, text, xml, jsonp, script
        data: {
            action: 'get_branch_list()'
        }
    })
    .done(res => {
        console.log(res);
    });




