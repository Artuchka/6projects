import { useEffect, useState } from "react"
import { Block } from "./Block"

import "./main.scss"

const rates = require("./rates.json")
console.log(rates)

function App() {
	const types = ["mm", "cm", "m", "km"]

	const [fromName, setFromName] = useState("m")
	const [toName, setToName] = useState("km")
	const [fromAmount, setFromAmount] = useState(0)
	const [toAmount, setToAmount] = useState(0)

	useEffect(() => {
		handleAmountChangeFrom(fromAmount)
	}, [fromAmount, fromName])

	useEffect(() => {
		handleAmountChangeTo(toAmount)
	}, [toAmount, toName])

	function handleTypeChangeFrom(name) {
		setFromName(name)
	}

	function handleTypeChangeTo(name) {
		setToName(name)
	}

	function handleAmountChangeFrom(valueFrom) {
		const normFrom = valueFrom * rates[fromName]
		const resTo = normFrom / rates[toName]
		setFromAmount(valueFrom)
		setToAmount(resTo)
	}

	function handleAmountChangeTo(valueTo) {
		const normTo = valueTo * rates[toName]
		const resFrom = normTo / rates[fromName]
		setToAmount(valueTo)
		setFromAmount(resFrom)
	}

	return (
		<div className="App">
			<Block
				types={types}
				chosenName={fromName}
				handleTypeChange={handleTypeChangeFrom}
				handleAmountChange={handleAmountChangeFrom}
				amount={fromAmount}
			/>
			<Block
				types={types}
				chosenName={toName}
				handleTypeChange={handleTypeChangeTo}
				handleAmountChange={handleAmountChangeTo}
				amount={toAmount}
			/>
		</div>
	)
}

export default App
