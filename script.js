function ValiderNom() {
    nom = document.querySelector('#nom')
    if (nom.value.length < 3) {
        nom.style.border = "5px solid red"
    } else nom.style.border = "5px solid green"
}

function ValiderPrenom() {
    prenom = document.querySelector('#prenom')
    if (prenom.value.length < 3) {
        prenom.style.border = "5px solid red"
    } else prenom.style.border = "5px solid green"
}

function ValiderCin() {
    Cin = document.querySelector('#Cin')
    reg = /^[A-Z]{1,2}[0-9]{4,6}$/
    if (reg.test(Cin.value) == 0) {
        Cin.style.border = "3px solid red"
    } else Cin.style.border = "3px solid green"
}
function Select() {
    ville = document.querySelector('#Ville')
    if (Ville.value != "-1") {
        Ville.style.border = "3px solid green"
    } else Ville.style.border = "3px solid red"

}

function ValiderCodePostal() {
    CodePostal = document.querySelector('#CodePostal')
    reg = /^[A-Z]{5}$/
    if (reg.test(CodePostal.value) == 0) {
        CodePostal.style.border = "3px solid red"
    } else CodePostal.style.border = "3px solid green"
}



function Valideremail() {
    email = document.querySelector('#email')
    reg = /^[A-Z]{0,50}[a-z]{0,50}[0-9]{0,50}\@[a-z]{0,50}.[a-z]{0,50}$/
    if (reg.test(email.value) == 0) {
        email.style.border = "3px solid red"
    } else email.style.border = "3px solid green"
}

function ValiderPassword() {
    Password = document.querySelector('#Password')
    reg = /^[A-Z]{0,5}[a-z]{8,20}$/
    if (reg.test(Password.value) == 0) {
        Password.style.border = "3px solid red"
    } else Password.style.border = "3px solid green"
}

function ValiderConPassword() {
    ConPassword = document.querySelector('#ConPassword')
    reg = /^[A-Z]{0,5}[a-z]{8,20}$/
    if (reg.test(ConPassword.value) == 0) {
        ConPassword.style.border = "3px solid red"
    } else ConPassword.style.border = "3px solid green"
}
if (ConPasword.value == Password.value) {
    ConPassword.style.border = "3px solid green"
} else
    ConPassword.style.border = "3px solid red"






