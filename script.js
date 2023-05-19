const hora= document.getElementById('hora')
const minuto= document.getElementById('minuto')


const relogio=setInterval(function tempo(){

    let data= new Date();
    let hr=  data.getHours();
    let mn= data.getMinutes();

    hora.textContent=hr
    minuto.textContent=mn

    if(mn<10){
        minuto.innerHTML=(`0${mn}`)
    }
    if(hr<10){
        hora.innerHTML=(`0${hr}`)
    }
})

let usu= document.getElementById('nm')
let snh= document.getElementById('sn')
let msg1=document.getElementById('msg1')

let ent=document.getElementById('entrar')
let cad=document.getElementById('cadastrar')

ent.addEventListener('click', entrar)
cad.addEventListener('click', cadastrar)

let bcd=[]

function cadastrar(){
    if(usu.value.length==0 || snh.value.length==0){

        window.alert('preencha todos os campos')

        usu.value=''
        snh.value=''

    }else if(snh.value.length <8){

        window.alert('senha de no minimo 8 caracteres')

        usu.value=''
        snh.value=''
    }else{

    let us=String(usu.value)
    let sn=Number(snh.value)

    bcd.push(us,sn)

    msg1.style.animation='aparecer1 5s linear'
    
    usu.value=''
    snh.value=''

}
}

function entrar(){

    us1=String(usu.value)
    sn1=Number(snh.value)

    let busca=bcd.indexOf(us1)
    let busca1=bcd.indexOf(sn1)

    if(busca==-1 || busca1==-1){
        window.alert('usuario ou senha incorretos')

        msg1.style.animation='aparecer1 5s linear'
    
    usu.value=''
    snh.value=''

    }else{
        window.alert('usuário encontrado')
        window.location.replace("pag1.html")
    }

}