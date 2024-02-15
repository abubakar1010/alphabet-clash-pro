//remove home page and show playground

function setAndRemoveElement(addClass,removeClass){

    const removeHomePage = document.getElementById(addClass)

    const addPlayGround = document.getElementById(removeClass)

    removeHomePage.classList.add('hidden')
    addPlayGround.classList.remove('hidden')

}

// step-->02: make random Alphabets

function makeRandomAlphabets(){

    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'

    const alphabetsArray = alphabetsString.split("")

    const randomNumber = Math.floor(Math.random() * 26)

    const randomAlphabet = alphabetsArray[randomNumber].toUpperCase()

    return randomAlphabet

}

//step 03: --> set enter text background

function setBackground(keyId){

    const key = document.getElementById(keyId)

    key.classList.add("bg-orange-400")
}

// step 04: ---> after click right button 

function removeBackground(keyId){

    const key = document.getElementById(keyId)

    key.classList.remove("bg-orange-400")
}