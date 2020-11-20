window.onload = function () {
    getStoreItems()
}

function getStoreItems() {
    const items = { ...localStorage };

    const divWrapper = document.getElementById("high-score-container")

    
    for(const [name, score] of Object.entries(items)){
        console.log(name)
        console.log(score)
        
        let paragraph = document.createElement("p")
        divWrapper.appendChild(paragraph)

        let nameText = document.createElement("span")
        let nameTextNode = document.createTextNode(name +":")
        paragraph.appendChild(nameText)
        nameText.appendChild(nameTextNode)

        let scoreText = document.createElement("span")
        let scoreTextNode = document.createTextNode(" " + score)
        paragraph.appendChild(scoreText)
        scoreText.appendChild(scoreTextNode)

    }   

}