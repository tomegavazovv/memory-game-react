import React from 'react'

const Card = ({ number, handleClickedCard, index, displayNumber }) => {
	const handleClick = () => {
		if (!displayNumber) {
			handleClickedCard(index)
		}
	}

	return (
		<div
			onClick={handleClick}
			className={`card ${displayNumber ? '' : 'hideCard'}`}>
			<div style={{ display: displayNumber ? '' : 'none' }}>{number}</div>
		</div>
	)
}

export default Card
