import React, { useEffect, useState } from 'react'
import Grid from './Grid'
import { generateCards } from '../utils/generateCards'

const MemoryGame = () => {
	const [cards, setCards] = useState([])
	const [clickedCardsIndexes, setClickedCards] = useState(null)
	const [numberOfAttempts, setNumberOfAttempts] = useState(0)
	const [numberOfMatches, setNumberOfMatches] = useState(0)

	useEffect(() => {
		setCards(generateCards())
	}, [])

	const handleClickedCard = (cardIndex) => {
		if (clickedCardsIndexes && clickedCardsIndexes.length === 2) {
			return
		}
		setNumberOfAttempts((prev) => prev + 0.5)
		if (clickedCardsIndexes) {
			setClickedCards((prev) => [...prev, cardIndex])
			if (cards[clickedCardsIndexes[0]].number === cards[cardIndex].number) {
				setNumberOfMatches((prev) => prev + 2)
				setCards((prev) => {
					const newCards = [...prev]
					newCards[cardIndex]['matched'] = true
					newCards[clickedCardsIndexes[0]]['matched'] = true
					return newCards
				})
			}
			setTimeout(() => {
				setClickedCards(null)
			}, 700)
		} else {
			setClickedCards([cardIndex])
		}
	}

	const restartGame = () => {
		setCards(generateCards())
		setNumberOfAttempts(0)
		setClickedCards(null)
		setNumberOfMatches(0)
	}

	return (
		<div className='container'>
			{numberOfMatches === 16 ? (
				<div style={{ textAlign: 'center' }}>
					<h1>You Completed The Game!</h1>
					<h4>Number of total attempts: {numberOfAttempts}</h4>
					<button onClick={restartGame} type='button'>
						Go Again!{' '}
					</button>
				</div>
			) : (
				<div>
					<Grid
						cards={cards}
						handleClickedCard={handleClickedCard}
						clickedCardsIndexes={clickedCardsIndexes}
					/>
					<h3>Number of attempts: {parseInt(numberOfAttempts)}</h3>
				</div>
			)}
		</div>
	)
}

export default MemoryGame
