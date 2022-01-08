const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
	currentQuestionsIndex++;
	setNextQuestion;
});

function startGame() {
	startButton.classList.add("hide");
	shuffledQuestions = questions.sort(() => Math.random() -0.5);
	currentQuestionsIndex = 0;
	questionContainerElement.classList.remove("hide");
	setNextQuestion();
	quizScore = 0;
}

function setNextQuestion() {
	resetState();
	showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
	questionElement.innerText = question.question;
	question.answer.forEach((answer) => {
		const button = document.createElement("button");
		button.innerText = answer.text;
		button.classList.add("btn");
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
		answerButtonElement.appendChild(button);
	});
}

function resetState() {
	clearStatusClass(document.body);
	nextButton.classList.add("hide");
	while (answerButtonElement.firstChild) {
		answerButtonElement.removeChild(answerButtonElement.firstChild);
	}
}

function selectAnswer(e) {
	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct;

	setStatusClass(document.body, correct);
	Array.from(answerButtonElement.children).forEach((button) => {
		setStatusClass(button, button.dataset.correct);
	});

	if (shuffledQuestions.length > currentQuestionsIndex + 1) {
		nextButton.classList.remove("hide");
	} else {
		startButton.innerText = "Restart";
		startButton.classList.remove("hide");
	}
	if ((selectedButton.dataset = correct)) {
		quizScore++;
	}
	document.getElementById("right-answer").innerText = quizScore;
}

function setStatusClass(element, correct) {
	clearStatusClass(element);
	if (correct) {
		element.classList.add("correct");
	} else {
		element.classList.add("wrong");
	}
}

function clearStatusClass(element) {
	element.classList.remove("correct");
	element.classList.remove("wrong");
}
const questions = [
	{
		question: "which one of these is a JavaScript frameworks?",
		answer: [
			{ text: "Python", correct: false },
			{ text: "Django", correct: false },
			{ text: "React", correct: true },
			{ text: "Eclipse", correct: false },
		],
	},
	{
		question: "who is the president of Xanadu?",
		answer: [
			{ text: "Nitya Chatterjee", correct: true },
			{ text: "Sahle-Work Zewde", correct: false },
			{ text: "Emmerson Mnangagwa", correct: false },
			{ text: "Rasputin XVII", correct: false },
		],
	},
	{
		question: "what is 230 - 220 x 0.5?",
		answer: [
			{ text: "210", correct: false },
			{ text: "Is it 5?", correct: false },
			{ text: "It is 120!", correct: false },
			{ text: "No, 5!", correct: true },
		],
	},
];
