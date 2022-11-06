import React from "react"
import User from "./User"
import Skeleton from "../Skeleton"

export default function Users({ items, isLoading }) {
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
				<input placeholder="Find user..." id="searchBox" />
			</div>

			<div className="users-list">
				{isLoading ? (
					<Skeleton />
				) : (
					<>
						{items.map((user) => {
							return <User key={user.id} {...user}></User>
						})}
					</>
				)}
			</div>

			<button className="btn btn--full">Send invites</button>
		</div>
	)
}
