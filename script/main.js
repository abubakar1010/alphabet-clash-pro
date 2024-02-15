
//remove home page and show playground
// entireGame

const button = document.getElementById('btn')

button.addEventListener('click', function () {

    setAndRemoveElement("homeScreen","playGround")

    continueGame()


})

    let yourScore = 0

function continueGame(){

    // step-->02: make random Alphabets

    const alphabet = makeRandomAlphabets()

//step --> 03: set inner text background(show alphabet on screen)

    const parent = document.getElementById('addAlphabet')

    parent.innerText = alphabet

    // step:04 ---> ste background color 

    setBackground(alphabet)

}

document.addEventListener('keyup', function(event){

    const expectedKey = event.key

    console.log(expectedKey);

    const currentKey = document.getElementById('addAlphabet')

    const  playerKey = (currentKey.innerText).toLowerCase()

    //quit game if user prase esc

    if( expectedKey === "Escape"){
        gameOver()
    }

    //check user input
    
    if( expectedKey === playerKey){

        const currentScore = getCurrentElementById('score')

        const updatedScore = currentScore + 1

        yourScore = updatedScore

        setValueById('score', updatedScore)




        //-----------------------------------

        // // update score 

        // // 1.current score

        // const currentScore = document.getElementById('score')

        // const currentScoreText = currentScore.innerText

        // const currentScoreNumber = parseInt(currentScoreText)

        // // 2.increase score by 1

        // const updatedScore = currentScoreNumber + 1

        // console.log(updatedScore);

        // // 3.show the update score

        // currentScore.innerText = updatedScore

        // //new round 

        continueGame()
        removeBackground(expectedKey.toUpperCase())


    }else{
        const currentChances = getCurrentElementById('chances')

        const updatedChances = currentChances - 1

        setValueById('chances', updatedChances)

        if( updatedChances === 0){
            gameOver()
            
        }
    //     // update chances 
        
    //     // 1.current chances

    //     const currentChances = document.getElementById('chances')

    //     const currentChancesText = currentChances.innerText

    //     const currentChancesNumber = parseInt(currentChancesText)

    //     // 2.decrease chances by 1

    //     const updatedChances = currentChancesNumber - 1

    //     // 3.show the update chances

    //     currentChances.innerText = updatedChances
    // }

}})