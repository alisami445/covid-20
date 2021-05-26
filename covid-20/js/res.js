var ls = window.localStorage
var msg =ls.getItem("msg")
ls.removeItem('msg')
let nom = ls.getItem('nom')
ls.removeItem('nom')
let prenom = ls.getItem('prenom')
ls.removeItem('prenom')
let age = ls.getItem('age')
ls.removeItem('age')
let adresse = ls.getItem('adresse')
ls.removeItem('adresse')
let numero = ls.getItem('numero')
ls.removeItem('numero')
let email = ls.getItem('email')
ls.removeItem('email')

document.getElementById("Nom").innerHTML +=nom
document.getElementById("Prenom").innerHTML +=prenom
document.getElementById("datee").innerHTML +=age
document.getElementById("Adresse").innerHTML +=adresse
document.getElementById("Numero").innerHTML +=numero
document.getElementById("Email").innerHTML +=email

document.getElementById('medical').innerHTML += msg
