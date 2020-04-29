$(document).ready(function () {
    //var currentQuestion = 0
    var quizQuestions = [
        Question1 = {
            question: 'What color is the sky?',
            options: ['green ', 'blue ', 'pink'],
            answer: "blue",
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                for (var i = 0; i < this.options.length; i++) {
                    console.log(this.options[i]);
                }
            }
        },
        Question2 = {
            question: 'Who was the first president of USA?',
            options: ['george washington', 'George Bush ', 'Abraham Lincoln'],
            answer: 'george washington',
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                for (var i = 0; i < this.options.length; i++) {
                    console.log(this.options[i]);
                }
            }
        },
        Question3 = {
            question: 'Who wrote "purple rain"?',
            options: ['Beyonce ', 'Chris Pratt ', 'Prince'],
            answer: 'Prince',
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                for (var i = 0; i < this.options.length; i++) {
                    console.log(this.options[i]);
                }
            }
        },
        Question4 = {
            question: 'Who was the first person to walk on the moon?',
            options: ['amelia Earhart ', 'neal armstrong ', 'michael jackson'],
            answer: 'michael jackson',
            askQuestion: function () {
                $('#quizquestion').html(this.question);
                for (var i = 0; i < this.options.length; i++) {
                    console.log(this.options[i]);
                }
            }
        },
        Question5 = {
            question: 'When did WWII end?',
            options: ['1945 ', '1920 ', '2010'],
            answer: '1945',
            askQuestion: function () {
                $('#quizquestion').html('<ul style="list-style-type:none;"><li><button id="quizOption" class="btn btn-dark">' + this.question + '</button></li><ul>');
                for (var i = 0; i < this.options.length; i++) {
                    console.log(this.options[i]);
                }
            }
        }
    ];
    var createQuiz = function () {
        for (var i = 0; i < quizQuestions.length; i++) {
            console.log(quizQuestions[i].askQuestion())
        }
    }
    function startCountDown() {
        var time = 300;
        var interval = setInterval(function () {
           time = time - 1;
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
     }
    createQuiz();
    startCountDown();
});











































// $(document).ready(function () {
//     var currentQuestion = 0;
//     $("#startButton").on("click", function () {
//        startCountDown();
//        createQuiz();
//     });
//     $(document).on("click", '#quizOption', function () {
//         var questions = ['What color is the sky?', 'Who was the first president of USA?', 'Who wrote "purple rain"?', 'When did WWII end?', 'Who was the first person to walk on the moon?'];
//         $('#quizquestion').html(questions[currentQuestion])
//         currentQuestion++
//     });
//     // var nextQuestion = function(){
//     // }
//     function startCountDown() {
//        var time = 300;
//        var interval = setInterval(function () {
//           time = time - 1;
//           if (time >= 0) {
//              var minutes = Math.floor(time / 60);
//              var seconds = time - (minutes * 60);
//              var display = minutes + ' : ' + seconds;
//              $("#timer").html(display);
//           }
//           else {
//              clearInterval(interval);
//           }
//        }, 1000);
//     }
//     var createQuiz = function () {
//        var questions = ['What color is the sky?', 'Who was the first president of USA?', 'Who wrote "purple rain"?', 'When did WWII end?', 'Who was the first person to walk on the moon?'];
//        var option1 = ['green ', 'blue ', 'pink'];
//        var option2 = ['george washington', 'George Bush ', 'Abraham Lincoln'];
//        var option3 = ['Beyonce ', 'Chris Pratt ', 'Prince'];
//        var option4 = ['1945 ', '1920 ', '2010'];
//        var option5 = ['amelia Earhart ', 'neal armstrong ', 'michael jackson'];
//        var answers = ['blue', 'george washington', 'prince', '1945', 'michael jackson'];
//        currentQuestion = 0;
//        $('#quizquestion').html(questions[currentQuestion])

//        for (var currentQuestion = 0; currentQuestion < option1.length; currentQuestion++) {
//           var quizQuestionHTML = '<ul style="list-style-type:none;"><li><button id="quizOption" class="btn btn-dark">' + option1[currentQuestion] + '</button></li><ul>'
//           $('#quizquestion').append(quizQuestionHTML)
//        }
//        for (var i = 0; i < answers.length; i++) {
//  return questions
//        }
//     }
//  });









 // var myObject = {
 //    question: "Pussy Cat where have you been?",
 //    Options: ['London', 'Paris', 'New York'],
 // }
 // function Soldier() {
 // }
 // Soldier.prototype.Weapon = "";
 // Soldier.prototype.Uniform = "";
 // Soldier.prototype.ShootWeapon = function () { }
 // var firstSoldier = new Soldier();
 // firstSoldier.Uniform = "White sailor attire";
 // firstSoldier.Weapon = "Tomahawk Cruise missile";
 // firstSoldier.ShootWeapon = function () {
 //    var bullets = 10;
 //    console.log("fire!!!!");
 //    bullets -= 1;
 // }
 // var secondSoldier = new Soldier();
 // firstSoldier.Uniform = "White sailor attire";
 // firstSoldier.Weapon = "Tomahawk Cruise missile";
 // firstSoldier.ShootWeapon = function () {
 //    var bullets = 10;
 //    console.log("fire!!!!");
 //    bullets -= 1;
 // }
 // function QuizQuestion() {
 // }
 // //blue print
 // QuizQuestion.prototype.Question = "";
 // QuizQuestion.prototype.Options = [];
 // QuizQuestion.prototype.Answer = "";
 // var firstQuestion = createQuizQuestion("Pussy Cat, where have you been?", ['London', 'Paris', 'New York'], 'Paris');
 // var firstQuestion = new QuizQuestion();
 // firstQuestion.Question = "Pussy Cat, where have you been?";
 // firstQuestion.Options = ['London', 'Paris', 'New York'];
 // firstQuestion.Answer = 'Paris';
 // var quizQuestionsArray = getQuizQuestion();
 // currentQuestionIndex = 0;
 // $("#nextButton").on('click', function(){
 //    var currentQuestion = quizQuestionsArray[currentQuestionIndex];
 //    showQuestion(currentQuestion);
 //    currentQuestionIndex ++;
 // });
 // function showQuestion(quizQuestion) {
 //    var quizQuestionHtml = '<div class="row"><div class="col-md-12">' + quizQuestion.Question + '</div></div>';
 //    quizQuestionHtml += '<div class="row"><div class="col-md-12"><ol>';
 //    for (var option of quizQuestion.Options) {
 //       quizQuestionHtml += '<li><input type="radio" name="option">' + option + '</li>';
 //    }
 //    quizQuestionHtml += '</ol></div></div>';
 //    $("#quizquestion").html(quizQuestionHtml);
 // }
 // function createQuizQuestion(question, options, answer) {
 //    var quizQuestion = new QuizQuestion();
 //    quizQuestion.Question = question;
 //    quizQuestion.Options = options;
 //    quizQuestion.Answer = answer;
 //    return quizQuestion;
 //}














































// $(document).ready(function () {
//     var ourQuestionsArray = getQuizQuestions();
//     var currentQuestionIndex = -1;
//     score = 0;
//     $("#startButton").on("click", function () {
//         startCountDown();
//         showNextQuestion();
//     });
//     $('#nextButton').on('click', function () {
//         showNextQuestion();
//     });
//     function startCountDown() {
//         var time = 300;
//         var interval = setInterval(function () {
//             time -= 1;
//             if (time >= 0) {
//                 var minutes = Math.floor(time / 60);
//                 var seconds = time - (minutes * 60);
//                 var display = minutes + ' : ' + seconds;
//                 $("#timer").html(display);
//             }
//             else {
//                 clearInterval(interval);
//             }
//         }, 1000);
//     } 
//     function showNextQuestion() {
//         currentQuestionIndex++;
//         var question = ourQuestionsArray[currentQuestionIndex];
//         showQuestion(question);
//     }
//     function showQuestion(question) {
//         var quizQuestionHtml = '<div class="row"><div class="col-md-12">' + question.Question + '</div></div>';
//         quizQuestionHtml += '<div class="row"><div class="col-md-12"><ol>';
//         for (var option of question.Options) {
//             quizQuestionHtml += `<li><button class="answer" value= '${option}' > ${option} </button></li>`;
//         }
//         quizQuestionHtml += '</ol></div></div>';
//         $("#quizquestion").html(quizQuestionHtml);
//     }
//     function Correct(buttonVal,ourQuestionsArray){
//         for(var i = 0; i<ourQuestionsArray.length; i++)
//         var array = ourQuestionsArray
//         if( buttonVal === array.answer){
//             alert("corret!");
//             score++
//         }else{
//             alert('wrong!')
//         }
//     };
    
//    $('.answer').on('click', function () {
//        var buttonVal = $(this).val();
//        alert('clicked');
//         Correct(buttonVal,ourQuestionsArray);
//     });


//     function getQuizQuestions() {
//         var quizQuestionsArray = [];
//         var question2 = createQuestion(" Which of the following attribute can hold the JavaScript version?", ['LANGUAGE', 'SCRIPT', 'VERSION', 'None of the above'], ' Ans: LANGUAGE');
//         quizQuestionsArray.push(question2);
//         var question3 = createQuestion("JavaScript entities start with _______ and end with _________.", ['Semicolon,colon', 'Semicolon, Ampersand', 'Ampersand,colon', 'Ampersand, semicolon'], ' Ans: D');
//         quizQuestionsArray.push(question3);
//         var question4 = createQuestion("Choose the server-side JavaScript object?", ['FileUpLoad', 'Function', 'File', 'Date'], 'Ans:C');
//         quizQuestionsArray.push(question4);
//         var question5 = createQuestion("Choose the client-side JavaScript object?", ['Database', 'Cursor', 'Client', 'FileUpLoad'], 'Ans: D');
//         quizQuestionsArray.push(question5);
//         var question6 = createQuestion("Which of the following is not considered a JavaScript operator?", ['new', 'this', 'delete', 'typeof'], 'Ans: B');
//         quizQuestionsArray.push(question6);
//         var question7 = createQuestion("Which of the following event fires when the form element loses the focus:<button>, <input>, <label>, <select>, <textarea>?", ['onfocus', 'onblur', 'onclick', 'ondblclick'], 'Ans:B');
//         quizQuestionsArray.push(question7);
//         var question8 = createQuestion("Can you pass a anonymous function as an argument to another function?", ['true', 'false'], 'Ans;A')
//         quizQuestionsArray.push(question8);
//         var question9 = createQuestion("Which of the following type of variable takes precedence over other if names are same?", ['global variable', 'local variable', 'Both of the above.', 'None of the above.'], 'Ans;B');
//         quizQuestionsArray.push(question9);
//         var question10 = createQuestion("Which built-in method reverses the order of the elements of an array?", ['changeOrder(order)', 'reverse()', 'sort(order)', 'None of the above.'], 'Ans:B');
//         quizQuestionsArray.push(question10);
//         return quizQuestionsArray;
//     }
//     function QuizQuestion() {
//     }
//     QuizQuestion.prototype.Question = "";
//     QuizQuestion.prototype.Options = [];
//     QuizQuestion.prototype.Answer = "";
//     function createQuestion(question, options, answer) {
//         var quizQuestion = new QuizQuestion();
//         quizQuestion.Question = question;
//         quizQuestion.Options = options,
//         quizQuestion.answer = answer;
//         return quizQuestion;
//     }
// });


























































































































// $(document).ready(function() {
// var score = 0; 
// var questions = [
//     {prompt:'What color is the sky a.green, b.blue, c.pink',
//      answer:'b'},
//     {prompt:'Who was the first president of USA a. George Washington, b. George Bush c. Abraham Lincoln',
//      answer: 'a'
//      },
//     {prompt:'Who wrote "purple rain a. Beyonce b.Chris Pratt c. Prince',
//      answer:'c' },
//     {prompt:'When did WWII end  a. 1945 b.1920 c.2010',
//      answer: 'a'},
//     {prompt:'Who was the first person to walk on the moon a. amelia Earhart b. Neal Armstrong c. Michael Jackson',
//      answer: 'c'},
// ]

// var loopQuestions = function(){
//     for(var i = 0; i < questions.length; i++){
//         if (questions[0].prompt === questions[0].answer){
//             alert("Correct!")
//             score++
//         }else{
//             alert("Incorrect!")
//         }
        

//     }

// }


// function countdown(){

// var interval = setInterval(function(){
//     var time = 300;
//     time = time-1;
//     var minutes = Math.floor(299/60);
//     var seconds = time - (minutest*60);
// if(time >= 0){
//     var minutes = Math.floor(299/60);
//     var seconds = time - (minutest*60);
//     var display = minutes + ':'+ seconds;
//     $('#timer'.html(display));
// } else{
//     clearInterval(interval);
// }, 1000);



// }
 


// }

// });