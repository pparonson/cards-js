// node
// const {newDeck} = require('./deck/deck.js');

// browser
import {newDeck, createDeck} from './deck/deck';
import './deck/cardBack';

const message = "Hello world!";
console.log(newDeck(message));

console.log(createDeck());
