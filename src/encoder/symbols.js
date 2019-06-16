let lowerCaseRussianAlphabet = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я"
];
let lowerCaseEnglishAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let otherSybols = ["!", "?", ".", " "];

let uppercaseRussianAlphabet = [...lowerCaseRussianAlphabet].map(item =>
  item.toUpperCase()
);
let uppercaseEnglishAlphabet = [...lowerCaseEnglishAlphabet].map(item =>
  item.toUpperCase()
);
let symbol = [];
symbol.push(lowerCaseRussianAlphabet);
symbol.push(lowerCaseEnglishAlphabet);
symbol.push(uppercaseRussianAlphabet);
symbol.push(uppercaseEnglishAlphabet);
symbol.push(numbers);
symbol.push(otherSybols);
let symbols = symbol.reduce((ac, next) => {
  return ac.concat(next);
}, []);

export default symbols;
