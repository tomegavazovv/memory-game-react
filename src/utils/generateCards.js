export const generateCards = () => {
	const cards = []
	for (let i = 0; i < 8; i++) {
		let generatedNumber = Math.floor(Math.random() * 11)
		_addCardToArray(cards, generatedNumber, i, i + 8)
	}

	return _shuffleCards(cards)
}

const _addCardToArray = (cards, num, id1, id2) => {
	const card1 = {
		number: num,
		id: id1,
		matched: false,
	}
	const card2 = {
		number: num,
		id: id2,
		matched: false,
	}
	cards.push(card1)
	cards.push(card2)
}

const _shuffleCards = (cards) => {
	const shuffledCards = [...cards]
	for (var i = cards.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1))
		var temp = shuffledCards[i]
		shuffledCards[i] = shuffledCards[j]
		shuffledCards[j] = temp
	}
	return shuffledCards
}
