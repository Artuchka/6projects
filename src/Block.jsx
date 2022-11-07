import React from "react"

export function Block({
	types,
	handleTypeChange,
	chosenName,
	handleAmountChange,
	amount,
}) {
	return (
		<div className="block">
			<div className="types-container">
				{types.map((name) => {
					return (
						<li
							key={name}
							className={chosenName == name ? "active" : ""}
							onClick={() => handleTypeChange(name)}
						>
							{name}
						</li>
					)
				})}
			</div>
			<input
				className="input"
				placeholder={0}
				type="number"
				min={0}
				value={amount}
				onChange={(e) => handleAmountChange(e.target.value)}
			/>
		</div>
	)
}
