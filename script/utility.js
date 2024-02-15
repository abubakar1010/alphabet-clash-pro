//remove home page and show playground

function setAndRemoveElement(addClass,removeClass){

    const removeHomePage = document.getElementById(addClass)

    const addPlayGround = document.getElementById(removeClass)

    removeHomePage.classList.add('hidden')
    addPlayGround.classList.remove('hidden')

    resetScoreAndChances()

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

//step 05: collect current score

function getCurrentElementById(elementId){

    const currentElement = document.getElementById(elementId)

    const Value = parseInt(currentElement.innerText)

    return Value

}

// step 05: set current score 

function setValueById(id, value){

    const updatedNumber = document.getElementById(id)

    updatedNumber.innerText = value

   
}

function gameOver(){

    setAndRemoveElement("playGround","newGame")

    

    setValueById('finalScore', yourScore)

    
}

function resetScoreAndChances(){
    //  reset score and chances
    setValueById("score", 0)
    setValueById("chances", 5)
    setValueById("finalScore", 0)
}