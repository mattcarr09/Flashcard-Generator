var inquirer = require("inquirer");
var basicQuestions = require("./basicjson.json");
var counter = 0;
var correctAnswer = 0;
//taking in two arguments; front and back
var BasicCard = function(front, back){
 this.front = front;
 this.back = back;
};


var askQuestions = function (){

  if(counter < 5){

  inquirer.prompt([

    {type: "input",
      message: basicQuestions[counter].frontCard,
      name: "question"
      }//if


 ]).then(function(answer){

  var userInput = answer.question.toLowerCase();

    if(userInput === basicQuestions[counter].backCard){
          console.log("\nCorrect!");
          correctAnswer++;
        }//if

        else{
          console.log("\nWrong!");
        }//else

  console.log(basicQuestions[counter].fullAnswer);
  counter++
  askQuestions();

  });//closing then
} //closing if

else{
  console.log("\nGame Over!")
  console.log("Correct Answers: " + correctAnswerCount);
  inquirer.prompt([

      {type: "confirm",
        message: "Do you want to play again?",
        name: "playAgain",
        default: true
        }
    ]).then(function(answer){

      if (answer.playAgain === true){
        counter = 0;
        correctAnswerCount = 0;
        askQuestions();

      }
      else{
        console.log("Thank you for playing!");
      }

  });
}

}; //closing function

askQuestions();



