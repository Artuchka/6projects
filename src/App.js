import React from "react"
import Users from "./components/User/index"
import Result from "./components/Result"
import "./main.scss"

function App() {
	// https://reqres.in/api/users

	const [users, setUsers] = React.useState([])
	const [invited, setInvited] = React.useState([])
	const [isLoading, setLoading] = React.useState(true)
	const [isSend, setSend] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState("")

	React.useEffect(() => {
		fetch("https://reqres.in/api/users")
			.then((res) => res.json())
			.then((jsoned) => {
				console.log(jsoned.data)
				setUsers(jsoned.data)
				setLoading(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	function handleInvite(id) {
		if (invited.includes(id)) {
			setInvited(invited.filter((invitedId) => invitedId != id))
		} else {
			setInvited([...invited, id])
			console.log("added")
		}
	}
	function handleSendInvites() {
		setSend(true)
	}
	function handleSearchInput(e) {
		setSearchValue(e.target.value)
	}

	return (
		<div className="App">
			{isSend ? (
				<Result count={invited.length} />
			) : (
				<Users
					items={users}
					isLoading={isLoading}
					handleInvite={handleInvite}
					handleSendInvites={handleSendInvites}
					invited={invited}
					searchValue={searchValue}
					handleSearchInput={handleSearchInput}
				/>
			)}
		</div>
	)
}

export default App
