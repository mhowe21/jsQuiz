var questions = [{
        Type: "True/False",
        Question: "Javascript and Java are the same language",
        Correct: "False",
        Incorrect: "True"
    },
    {
        Type: "MultipleChoice",
        Question: "How would one declare a function in Javascript",
        Correct: "function name (){code}",
        Incorrect: "function.name.{code}",
        Incorrect: "function:name{code}"
    },
    {
        Type: "MultipleChoice",
        Question: "Selct all the primitive data types",
        Correct: "String",
        Correct: "Number",
        Correct: "boolean",

    }


]

var time = 2000
let questionIndex = 0


document.getElementById("start-btn").addEventListener("click", function () {
    //start the timer after clicking start. 
    timer()
    document.getElementById("start-btn").classList.add("hide")
    document.getElementById("next-btn").classList.remove("hide")
    displayQuestion(questionIndex)
    questionIndex = questionIndex + 1

})

document.getElementById("next-btn").addEventListener("click", function() {
    console.log(questionIndex)
    displayQuestion(questionIndex)
    questionIndex = questionIndex + 1
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

    let question = document.getElementById("question-text").innerText = questions[index]["Question"]
    document.getElementById("question-text-wrapper").classList.remove("hide")
    //console.log(question)

    // add question items
}