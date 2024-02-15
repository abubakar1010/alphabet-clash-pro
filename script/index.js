
// entireGame

const button = document.getElementById('btn')

button.addEventListener('click', function () {

    setAndRemoveElement("homeScreen","playGround")

    makeRandomAlphabets()

    continueGame()
})

function continueGame(){

    const alphabet = makeRandomAlphabets()

    const parent = document.getElementById('addAlphabet')

    parent.innerText = alphabet

    setBackground(alphabet)

}