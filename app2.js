const form = document.querySelector("form")
const divScore = document.querySelector(".score")
const quizAnswers = ["A", "B"]


form.addEventListener("submit", e => {
    e.preventDefault()
    
    userAnswers = [
        form.question1.value,
        form.question2.value,
    ]
    
    let score = 0
    userAnswers.forEach((answer, index) => {
        if (answer === quizAnswers[index]) {
            console.log(`Answer ${index + 1} correct!`)
            score += 50
            return
        }
        console.log(`Answer ${index + 1} wrong!`)
    })

    counter = 0    
    setInterval(() => {
        if (counter <= score) {
            divScore.style.display = "block"
            divScore.innerHTML = `<p>You got <span class="scoreNumber">${counter}%</span> on this quiz</p>`
            counter++
        }
    }, 10)
})
