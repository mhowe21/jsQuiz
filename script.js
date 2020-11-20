let time = 2000
let questionIndex = 0
let body = document.body
let anwsersButtons = document.getElementById("anwsers")



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
    if(questionIndex + 1 > questions.length){
        gameOver()
    }else{
        displayQuestion(questionIndex)
    }
    
    

    

    
    
    
})


// timer function 
function timer() {
    //let time = 10
    let timerNumber = document.getElementById("timer-number")
    timerNumber.innerText = (time)

    //countdown
    let runTimer = setInterval(countdown, 1000)


    function countdown() {

        time = time - 1
        //console.log(time)
        timerNumber.innerText = time



        if (time == 0) {
            clearInterval(runTimer)
            timerNumber.innerText = "Times-Up!"
        }

    }

}





function displayQuestion(index) {

    // add question test
    if(index > questions.length){
        gameOver()
    }
    console.log(index)
    let textContainer = document.getElementById("question-text")
    textContainer.innerText = questions[index].Question

    //reset question on next question
    reset()

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
    if(correctAnwser == true){

    }
    else if(correctAnwser == undefined) {
        time = time - 100
    }

}

function reset(){
    do{
        anwsersButtons.removeChild(anwsersButtons.firstChild)
        
    }while(anwsersButtons.firstChild != null)
}

function gameOver() {
    console.log("game over")

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
