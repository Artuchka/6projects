import React from "react"
import User from "./User"
import Skeleton from "../Skeleton"

export default function Users(props) {
	const {
		items,
		isLoading,
		handleInvite,
		invited,
		handleSendInvites,
		searchValue,
		handleSearchInput,
	} = props

	return (
		<div className="invite-form">
			<div className="search-box">
				<label htmlFor="searchBox">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
						style={{ width: "20", height: "20" }}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</label>
				<input
					placeholder="Find user by name, email..."
					id="searchBox"
					value={searchValue}
					onChange={handleSearchInput}
				/>
			</div>

			<div className="users-list">
				{isLoading ? (
					<>
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
					</>
				) : (
					<>
						{items
							.filter(({ first_name, last_name, email }) => {
								const full = (
									first_name +
									last_name +
									email
								).toLowerCase()
								return full.includes(
									searchValue.toLowerCase().replace(" ", "")
								)
							})
							.map((user) => {
								return (
									<User
										key={user.id}
										{...user}
										handleInvite={handleInvite}
										isInvited={invited.includes(user.id)}
									></User>
								)
							})}
					</>
				)}
			</div>

			<button className="btn btn--full" onClick={handleSendInvites}>
				Send invites
			</button>
		</div>
	)
}
