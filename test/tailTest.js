const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words[0] === "Lighthouse" && words[1] === "Labs" && words.length === 2, true); // => true