import { useState } from "react"
import "./App.scss"

function Modal({ open, setOpen, children }) {
	return (
		<div className={`overlay ${open ? "show" : ""}`}>
			<div className="modal">
				<div className="close" onClick={() => setOpen(false)}>
					&times;
				</div>
				<div className="info">{children}</div>
			</div>
		</div>
	)
}

function App() {
	const [open, setOpen] = useState(false)

	return (
		<div className="App">
			<button onClick={() => setOpen(true)} className="btn btn--ok">
				🥳open modal🥳
			</button>

			<Modal open={open} setOpen={setOpen}>
				im infoooff
			</Modal>
		</div>
	)
}

export default App
