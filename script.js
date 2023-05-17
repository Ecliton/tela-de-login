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

let usuario= document.getElementById('nm1')
let entrar=document.getElementById('entrar')
entrar.addEventListener('click', busca)
let senha=document.getElementById('sn1')
let cad=document.getElementById('cad')
cad=addEventListener('click', cadastrar)
let mensagem= document.getElementById('msg1')
let bcd=[]

function cadastrar(){

    let user=String(usuario.value)
    let pass=Number(senha.value)

    bcd.push(user,pass)
}
function busca(){
    let busca=bcd.indexOf(user)

    if(busca==-1){
        window.alert('lalala')
    }else{
        window.alert('lelele')
    }
}
