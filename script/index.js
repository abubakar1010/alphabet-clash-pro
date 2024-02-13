// function play(){
//     console.log("ok");
//     const homePage = document.getElementById("homeScreen")

//     homePage.classList.add('hidden')

//     // homePage.setAttribute('class', "hidden")

//     const playGroundPage = document.getElementById("playGround")

//     playGroundPage.classList.remove('hidden')
// }


function play(){

    hideAndShowElementById("homeScreen","playGround")

}

function continueGame(){
    console.log(getRandomAlphabet())
}

continueGame()