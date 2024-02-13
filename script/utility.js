// hide and show Element

function hideAndShowElementById(hideElement,ShowElement){

    const hide = document.getElementById(hideElement)

    hide.classList.add("hidden")

    const show = document.getElementById(ShowElement)

    show.classList.remove("hidden")
}

// create a random letter 

function getRandomAlphabet(){

    const alphabetsString = "abcdefghijklmnopqrstuvwxyz"

    const alphabetsArray = alphabetsString.split("")

    let randomNumber = Math.round((Math.random() * 25))

    const randomAlphabet = alphabetsArray[randomNumber].toUpperCase()

    return randomAlphabet
}


