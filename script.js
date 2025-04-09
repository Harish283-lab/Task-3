
let flippedCards = [];
let matchedCards = 0;
let cardColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown'];

cardColors = [...cardColors, ...cardColors]; // Double the cards for matching pairs

// Shuffle the cards
const shuffleCards = () => {
  for (let i = cardColors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardColors[i], cardColors[j]] = [cardColors[j], cardColors[i]];
  }
};

const initializeGame = () => {
  shuffleCards();
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.backgroundColor = '#eee';
    card.dataset.color = cardColors[index];
    card.classList.remove('flipped');
  });

  matchedCards = 0;
  flippedCards = [];
  document.getElementById('game-status').innerText = 'Let\'s Play!';
};

// Flip the card
const flipCard = (card) => {
  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
    card.style.backgroundColor = card.dataset.color;
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
};

// Check if the two flipped cards match
const checkMatch = () => {
  const [card1, card2] = flippedCards;
  if (card1.dataset.color === card2.dataset.color) {
    matchedCards += 2;
    flippedCards = [];
    if (matchedCards === 16) {
      document.getElementById('game-status').innerText = 'You Won the Game! 🎉';
    }
  } else {
    card1.style.backgroundColor = '#eee';
    card2.style.backgroundColor = '#eee';
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    flippedCards = [];
  }
};

// Reset the game
const handleReset = () => {
  initializeGame();
  document.getElementById('game-status').innerText = 'Let\'s Play!';
};
