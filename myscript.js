function CheckAnswer() {

    var score = 0;
    var totalQuestions = 10;

    for (var i = 1; i <= totalQuestions; i++) {

        var answers = document.getElementsByName("q" + i);

        var answered = false;

        for (var j = 0; j < answers.length; j++) {

            if (answers[j].checked) {

                answered = true;

                if (answers[j].value === "true") {
                    score++;
                }

            }

            answers[j].disabled = true;
        }

        if (!answered) {
            console.log("Question " + i + " was not answered.");
        }
    }


    var result = document.getElementById("result");


    if (score >= 8) {

        result.innerHTML =
            "🎉 Excellent! Great job! You got " +
            score +
            " out of " +
            totalQuestions +
            " correct! ⭐";

        result.style.backgroundColor = "#d4edda";
        result.style.color = "#155724";

    }

    else if (score >= 5) {

        result.innerHTML =
            "😊 Good job! You got " +
            score +
            " out of " +
            totalQuestions +
            ". Keep learning! 💪";

        result.style.backgroundColor = "#fff3cd";
        result.style.color = "#856404";

    }

    else {

        result.innerHTML =
            "💪 Don't give up! You got " +
            score +
            " out of " +
            totalQuestions +
            ". Try again and keep learning! 🌟";

        result.style.backgroundColor = "#f8d7da";
        result.style.color = "#721c24";
    }
}


function TakeQuizAgain() {

    var form = document.getElementById("quizForm");

    form.reset();


    var answers = document.querySelectorAll(
        "#quizForm input[type='radio']"
    );

    for (var i = 0; i < answers.length; i++) {
        answers[i].disabled = false;
    }


    var result = document.getElementById("result");

    result.innerHTML = "";

    result.style.backgroundColor = "";

    result.style.color = "";
}