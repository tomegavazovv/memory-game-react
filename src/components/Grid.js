import React from 'react'
import Card from './Card'

const Grid = ({ cards, handleClickedCard, clickedCardsIndexes }) => {
	const checkDisplayNumber = (card, index) => {
		return (
			card['matched'] ||
			(clickedCardsIndexes &&
				clickedCardsIndexes.findIndex((ind) => ind === index) !== -1)
		)
	}

	return (
		<div className='grid'>
			{cards.map((card, index) => (
				<div className='cardItem' key={card.id}>
					<Card
						handleClickedCard={handleClickedCard}
						number={card.number}
						index={index}
						displayNumber={checkDisplayNumber(card, index)}
					/>
				</div>
			))}
		</div>
	)
}

export default Grid
