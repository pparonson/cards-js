import {cardSuits, cardValues} from './../data/data';

const newDeck = message => {
  return message;
};

const createDeck = () => {
  let newDeck = [];

  // imperative
  for (let i = 0; i < cardSuits.length; i++) {
    for (let j = 0; j < cardValues.length; j++) {
      let card = `${cardValues[j]} of ${cardSuits[i]}`;
      newDeck = [...newDeck, card];
    }
  }

  return newDeck;
};

// node
// module.exports = {
//   newDeck
// };

// browser
export {
  newDeck,
  createDeck
};
