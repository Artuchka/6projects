import { useState } from "react"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)
	return (
		<div className="App">
			<h1 className="title">Counter:</h1>
			<div className="count">{count}</div>
			<div className="btn-container">
				<button
					onClick={() => setCount(count - 1)}
					className="btn btn--danger"
				>
					- subtract
				</button>
				<button
					onClick={() => setCount(count + 1)}
					className="btn btn--ok"
				>
					add +
				</button>
			</div>
		</div>
	)
}

export default App
