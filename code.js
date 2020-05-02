
var quizQuestions = [
    {
        question: 'What color is the sky?',
        options: ['green ', 'pink ', 'blue'],
        answer: "blue",
        userAnswer: '',
    },
    {
        question: 'Who was the first president of USA?',
        options: ['Abe', 'George Bush ', 'george washington'],
        answer: 'george washington',
    },
    {
        question: 'Who wrote "purple rain"?',
        options: ['Beyonce ', 'Chris Pratt ', 'Prince'],
        answer: 'Prince',
    },
    {
        question: 'Who was the first person to walk on the moon?',
        options: ['amelia Earhart ', 'neal armstrong ', 'michael jackson'],
        answer: 'michael jackson',
    },
    {
        question: 'When did WWII end?',
        options: ['2010 ', '1920 ', '1945'],
        answer: '1945',
    },
    {
        question: 'Quiz Complete',

    },
];
$("#startButton").on("click", function () {
    startCountDown();
    Questions();
    Options();
    endQuiz();
    $('#nextButton').show();

});

var currentQuestion = 0;

var endQuiz = function () {
    if (currentQuestion < 4) {
        $("#submit").show();
    }
}

var Options = function () {
    $("#quizoptions").append('<ul style="list-style-type:none;"><li><button class="btn btn-dark" id="wrong" name="wrong">' + quizQuestions[currentQuestion].options[0] + '</button></li></ul>');
    $("#quizoptions").append('<ul style="list-style-type:none;"><li><button class="btn btn-dark" id="wrong" name="wrong">' + quizQuestions[currentQuestion].options[1] + '</button></li></ul>');
    $("#quizoptions").append('<ul style="list-style-type:none;"><li><button class="btn btn-dark" id="right" name="right">' + quizQuestions[currentQuestion].options[2] + '</button></li></ul>');
}

var Questions = function () {
    $("#quizquestion").html(quizQuestions[currentQuestion].question)
}
var nextQuestion = function () {
    $("#nextButton").on("click", function () {
        $('#quizoptions').empty();
        currentQuestion++
        Questions();
        Options();


    });
}
nextQuestion();

var score = 0;
var checkAnswer = function () {

    $(document).on('click', '#right', function () {
        alert('correct')
        score++;
        scoresArray.push(score);
        localStorage.setItem("score", scoresArray.join(','));

        return score;
        
    });
}
 checkAnswer();
 



function startCountDown() {
    var time = 300;
    var interval = setInterval(function () {
        time = time - 1
        if (time >= 0) {
            var minutes = Math.floor(time / 60);
            var seconds = time - (minutes * 60);
            var display = minutes + ' : ' + seconds;
            $("#timer").html(display);
        }
        else {
            clearInterval(interval);
        }
    }, 1000);
    $(document).on('click', '#wrong', function () {
        alert('wrong')
        clearInterval(interval);
        time = time - 10;
        interval = setInterval(function () {
            time = time - 1
            if (time >= 0) {
                minutes = Math.floor(time / 60);
                seconds = time - (minutes * 60);
                display = minutes + ' : ' + seconds;
                $("#timer").html(display);
            }
            else {
                clearInterval(interval);
            }
        }, 1000);
    });
}
var highScore = function(initial, score){
$('#plot').append(`
<div class = "input-group mb-3">
    <div class = 'input-group-prepend'>
        <div class="input-group-text bg-success">
        </div>
         <input type='text' class='form-control' placeholder='log your score' value='${initial}: ${score}' aria-describedby='basic-addon1'>
    </div>
    <div class= 'input-group-append'>
    <span class='input-group-text bg-success text-white todo-delete' id='todo-add'></span>
  </div>
</div>
`)

};
$('#score').html(score);

var initials = localStorage.getItem('initials')
var initialsArray;
if (initials !== null) {
    initialsArray = initials.split(',')
    for (var initial of initialsArray) {
        highScore(initial,score);
    }
}
 else {
        initialsArray = [];
}
var scores= localStorage.getItem('score')
var scoresArray;
if (scores !== null) {
    scoresArray= scores.split(',')
    for (var score of scoresArray) {
        highScore(initial, score);
    }
}
 else {
        scoresArray = [];
}


$('#todo-add').on('click', function (event) {
    var initial = $('#complete').val();
    initialsArray.push(initial);
    localStorage.setItem("initials", initialsArray.join(','));
    highScore(initial, score);
    var initial = $('#complete').val('');
});






















