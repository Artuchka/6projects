import React from "react"

export default function User(props) {
	const {
		isInvited,
		avatar,
		first_name,
		email,
		id,
		last_name,
		handleInvite,
	} = props
	return (
		<div className="user">
			<img src={avatar} alt="avatar" className="avatar" />
			<div className="main-info">
				<span className="full-name">
					{first_name} {last_name}
				</span>
				<span className="email">{email}</span>
			</div>
			<div className="image-add-remove" onClick={() => handleInvite(id)}>
				{isInvited ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19.5 12h-15"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				)}
			</div>
		</div>
	)
}
