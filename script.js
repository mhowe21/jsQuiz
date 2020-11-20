let time = 100
let questionIndex = 0
let body = document.body
let anwsersButtons = document.getElementById("anwsers")
let gameOverBool = false



document.getElementById("start-btn").addEventListener("click", function () {
    //start the timer after clicking start. 
    timer()
    document.getElementById("start-btn").classList.add("hide")
    document.getElementById("next-btn").classList.remove("hide")
    displayQuestion(questionIndex)
    console.log(questionIndex)
    //questionIndex = questionIndex + 1

})

document.getElementById("next-btn").addEventListener("click", function () {
    questionIndex = questionIndex + 1
    //console.log(questionIndex)
    if (questionIndex + 1 > questions.length) {
        gameOverBool = true
    } else {
        displayQuestion(questionIndex)
    }
})


// timer function 
function timer() {
    //let time = 10
    let timerNumber = document.getElementById("timer-number")
    timerNumber.innerText = (time)

    //countdown
    var runTimer = setInterval(countdown, 1000)


    function countdown() {

        time = time - 1
        //console.log(time)
        timerNumber.innerText = time



        if (time < 0 || gameOverBool == true) {
            clearTimer()
        }
        function clearTimer(){
            clearInterval(runTimer)
            timerNumber.innerText = "Game - over"
            gameOver()
        }

    }

}





function displayQuestion(index) {

    // add question test
    
    console.log(index)
    let textContainer = document.getElementById("question-text")
    textContainer.innerText = questions[index].Question

    //reset question on next question
    reset()
    document.getElementById("next-btn").classList.add("hide")

    // add question items


    questions[index].anwsers.forEach(anwser => {
        const anwserButton = document.createElement("button")
        anwserButton.innerText = anwser.text
        if (anwser.correct) {
            // slightly probomatic as if you are inspecting ellement it will tag the correct anwser
            anwserButton.dataset.correct = anwser.correct
        }
        anwserButton.addEventListener("click", choseAnwser)
        anwsersButtons.append(anwserButton)
    });
}

function choseAnwser(event) {
    // get what you clicked on    
    const chosenAnwserButton = event.target

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
    const correctAnwser = chosenAnwserButton.dataset.correct

    console.log(correctAnwser)
    // subtract time if the wrong anwser is given. 
    anwserIndicatorText = document.getElementById("correct-incorrect-text")
    
    if (correctAnwser == undefined) {
        time = time - 250
        anwserIndicatorText.innerText = "Incorrect"
        anwserIndicatorText.classList.add("incorrect-indicator")
        anwserIndicatorText.classList.remove("correct-indicator")
        anwserIndicatorText.classList.remove("hide")
        
        console.log("anwser was incorrect")
        
    }else {
        console.log("anwser was correct")
        anwserIndicatorText.innerText = "Correct"
        anwserIndicatorText.classList.remove("incorrect-indicator")
        anwserIndicatorText.classList.add("correct-indicator")
        anwserIndicatorText.classList.remove("hide")
        
    }

    //unhide next button
    document.getElementById("next-btn").classList.remove("hide")
}

function reset() {
    do {
        anwsersButtons.removeChild(anwsersButtons.firstChild)

    } while (anwsersButtons.firstChild != null)
    document.getElementById("correct-incorrect-text").classList.add("hide")
}

function gameOver() {
    const score = time
    
    

    
    //console.log(score)
    
    document.getElementById("question-container").classList.add("hide")
    document.getElementById("control-buttons").classList.add("hide")
    document.getElementById("question-text").innerText = ("Score: " + score) 
    document.getElementById("timer-number").classList.add("hide")
    //time = 0

    // prompt
    let promptMessage = ("You scored " + String(score) + " " + "\r\n" + "enter your name here")
    let name = prompt(promptMessage,"your name here")
    localStorage.setItem(name,score)
    

}

// question data
const questions = [{
        Type: "True/False",
        Question: "Javascript and Java are the same language",
        anwsers: [{
                text: "False",
                correct: true
            },
            {
                text: "True",
                correct: false
            }
        ]

    },
    {
        Type: "MultipleChoice",
        Question: "How would one declare a function in Javascript",
        Correct: "function name(){code}",
        anwsers: [{
                text: "function name(){code}",
                correct: true
            },
            {
                text: "function.name.{code}",
                correct: false
            },
            {
                text: "function:name{code}",
                correct: false

            }
        ]
    },
    {
        Type: "MultipleChoice",
        Question: "Which of the following is NOT a primitive data type",
        anwsers: [{
                text: "String",
                correct: false
            },
            {
                text: "Number",
                correct: false
            },
            {
                text: "Hash",
                correct: true
            },
            {
                text: "Boolean",
                correct: false
            }
        ]

    }


]