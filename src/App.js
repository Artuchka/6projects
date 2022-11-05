import { useState } from "react"
import "./App.scss"

const questions = [
	{
		title: "what is useState?",
		variants: ["function", "global state", "loniless"],
		correct: 0,
	},
	{
		title: "what is my name?",
		variants: [
			"tuchka",
			"artuchka",
			"arthur",
			"temka",
			"artem arkadievich",
		],
		correct: 3,
	},
	{
		title: "what is my fav coding languga?",
		variants: ["react", "nodejs", "pascal", "js"],
		correct: 1,
	},
]

function Game({ handleClick, question, step }) {
	const { variants } = question
	const percentage = Math.round((step / questions.length) * 100)
	return (
		<div className="quiz-form">
			<div className="progress">
				<div
					className="progress__inner"
					style={{ width: `${percentage}%` }}
				></div>
			</div>
			<div className="title">what is use state</div>
			<ul className="variants">
				{variants.map((text, index) => {
					return (
						<li key={text} onClick={() => handleClick(index)}>
							{text}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
function Result({ correct }) {
	return (
		<div className="result-form">
			<div className="title">Congratulations! all is over</div>
			<div className="text">
				u have done {correct} out of {questions.length}
			</div>
			<a href="/">
				<button className="btn">i wanna try again.</button>
			</a>
		</div>
	)
}

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)

	const question = questions[step]

	function handleClick(chosenIndex) {
		setStep(step + 1)
		if (questions[step].correct == chosenIndex) {
			setCorrect(correct + 1)
		}
	}

	return (
		<div className="App">
			{step == questions.length ? (
				<Result correct={correct} />
			) : (
				<Game
					handleClick={handleClick}
					question={question}
					step={step}
				/>
			)}
		</div>
	)
}

export default App
