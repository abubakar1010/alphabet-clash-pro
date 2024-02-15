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

//step --> set enter text background

function setBackground(keyId){

    const key = document.getElementById(keyId)

    key.classList.add("bg-orange-400")
}