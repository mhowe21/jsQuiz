var questions = [{
    Type: "True/False",
    Question: "Javascript and Java are the same language",
    Correct: "False",
    Incorrect: "True"
},
{
    Type:"MultipleChoice",
    Question:"How would one declare a function in Javascript",
    Correct:"function name (){code}",
    Incorrect:"function.name.{code}",
    Incorrect:"function:name{code}"
},
{
    Type:"MultipleChoice",
    Question:"Selct all the primitive data types",
    Correct:"String",
    Correct:"Number",
    Correct:"boolean",
    
}


]


document.getElementById("start-btn").addEventListener("click", function () {
    //start the timer after clicking start. 
    timer()
    document.getElementById("start-btn").classList.add("hide")
    document.getElementById("next-btn").classList.remove("hide")
})


// timer function 
function timer() {
    let time = 10
    let timerNumber = document.getElementById("timer-number")
    timerNumber.innerText = (time)

    //countdown
    let runTimer = setInterval(countdown, 1000)


    function countdown() {

        time = time - 1
        console.log(time)
        timerNumber.innerText = time



        if (time == 0) {
            clearInterval(runTimer)
            timerNumber.innerText = "Times-Up!"
        }

    }

}