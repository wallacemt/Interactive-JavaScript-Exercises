// Declaração de variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]

// Substituição do layout pela primeira questão
function init() {
  createQuestion(0)
}

// Create a question 
function createQuestion(i) {

  // Limpa questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  // Altera texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere alternativas
  questions[i].answers.forEach(function(answer, i) {
    
    // Altera texto do template
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // remove classe de hide e template do template
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Insere template na tela
    answersBox.appendChild(answerTemplate);

    //inserir um evento de click no botao
    answerTemplate.addEventListener("click", function(){
      checkAnswer(this)
    })

  });


  // Incrementa o número atual de questões
  actualQuestion++;

}

//Verificando Resposta do Usuario
function checkAnswer(btn){

  //Seleciona todos os botoes
  const buttons = answersBox.querySelectorAll("button");

  //verifica se a resposta e a certa e adiciona classes no botão
  buttons.forEach(function(button){

    if(button.getAttribute("correct-answer") == "true"){

      button.classList.add("correct-answer");

      //checa se o usuario acerto a pergunta
      if(btn === button) {
        //incrementa pontos
        points++;
      }
    } else {

      button.classList.add("wrong-answer");

    }
  });
  
  // Exibir proxima pergunta
  nextQuestion();
}

function nextQuestion(){
  //timer para o usuario ver as respostas
  setTimeout(function(){
    if(actualQuestion >= questions.length){
      //apresenta a msg de sucesso
      showSucessMessage();
      return;
    }
    createQuestion(actualQuestion);
    
  }, 1300);
  
}

// Exibe a tela final
function showSucessMessage() {
  hideeOrShowQuizz();
  
  //trocar dados da tela de sucesso

  //calcular o score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");


  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;
  
  //alterar o total de perguntas
  const questionqty = document.querySelector("#questions-qty");
  questionqty.textContent = questions.length;

}

//mostrar ou esconder o score

function hideeOrShowQuizz(){
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
};

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function(){

  //zerar o jogo
  actualQuestion = 0;
  points = 0;
  hideeOrShowQuizz();
  init();
})

// Inicialização
init();


