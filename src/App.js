import React from "react"
import Users from "./components/User/index"
import "./main.scss"

function App() {
	// https://reqres.in/api/users

	const [users, setUsers] = React.useState([])

	React.useEffect(() => {
		fetch("https://reqres.in/api/users")
			.then((res) => res.json())
			.then((jsoned) => {
				console.log(jsoned.data)
				setUsers(jsoned.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<div className="App">
			<Users items={users} />
		</div>
	)
}

export default App
