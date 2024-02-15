
//remove home page and show playground
// entireGame

const button = document.getElementById('btn')

button.addEventListener('click', function () {

    setAndRemoveElement("homeScreen","playGround")

    continueGame()


})



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

    const currentKey = document.getElementById('addAlphabet')

    const  playerKey = (currentKey.innerText).toLowerCase()

    //check user input
    
    if( expectedKey === playerKey){

        // update score 
        // 1.current score
        // 2.increase score by 1
        // 3.show the update score
        continueGame()
        removeBackground(expectedKey.toUpperCase())


    }else{
        console.log('lose');
    }

})