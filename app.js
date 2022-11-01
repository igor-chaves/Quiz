const form = document.querySelector(".quiz-form")
const correctAnswers = ["B", "B", "B", "B"]

form.addEventListener("submit", e => {
    e.preventDefault()

    let score = 0
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
            console.log("Right answer!!")
        }
    })
    console.log(score);
})
