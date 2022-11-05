import { useState } from "react"
import "./App.scss"

function App() {
	const [open, setOpen] = useState(false)

	return (
		<div className="App">
			<button onClick={() => setOpen(true)}>🥳open modal🥳</button>
			{open && (
				<div className="overlay show">
					<div className="modal">
						<div className="close" onClick={() => setOpen(false)}>
							&times;
						</div>
						<div className="info">modal info</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default App
