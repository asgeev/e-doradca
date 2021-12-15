// const send = document.querySelector('#send')
// const date = document.querySelectorAll('input[type=date]')
const data = [ 
    {
        "id" : 1,
        "Oddział" : "Dolnośląski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 2,
        "Oddział" : "Kujawsko-Pomorski Oddział Wójewódzki NFZ",
        
    },
    {
        "id" : 3 ,
        "Oddział" : "Lubelski Oddział Wójewódzki NFZ",

    },
    {
        "id" : 4,
        "Oddział" : "Lubuski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 5,
        "Oddział" : "Łódzki Oddział Wójewódzki NFZ",

    },
    {
        "id" : 6,
        "Oddział" : "Małopolski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 7,
        "Oddział" : "Mazowiecki Oddział Wójewódzki NFZ",
    },
    {
        "id" : 8,
        "Oddział" : "Opolski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 9,
        "Oddział" : "Podkarpacki Oddział Wójewódzki NFZ",
    },
    {
        "id" : 10,
        "Oddział" : "Podlaski Oddział Wójewódzki NFZ", 
    },
    {
        "id" : 11,
        "Oddział" : "Pomorski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 12,
        "Oddział" : "Śląski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 13,
        "Oddział" : "Świętokrzyski Oddział Wójewódzki NFZ",
    },
    {
        "id" : 14,
        "Oddział" : "Warmińsko-Mazurski Oddział Wójewódzki NFZ", 
    },
    {
        "id" : 15,
        "Oddział" : "Wielkopolski Oddział Wójewódzki NFZ", 
    },
    {
        "id" : 16,
        "Oddział" : "Zachodniopomorski Oddział Wójewódzki NFZ", 
    },
]




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




