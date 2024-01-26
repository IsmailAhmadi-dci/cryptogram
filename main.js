

// Global Variables : ********************************************************************************

// alphabets : 
const alphabets = 'abcdefghijklmnopqrstuvwxyz';
let userKey = '**************************';
let shiftedAlphabets;
let txt, quote, encryptedQuote;


// html elements :
const textLand = document.getElementById('text-land');

// a variable that shows which on keyboard was selected:
let selectedKey;

// Main Functions : **********************************************************************************

// Getting a random quote from the data:
function getQuote(q) {
    const n = Math.floor(Math.random() * q.length);
    return q[n];
}

quote = getQuote(quotes);
txt = quote.quote + '~~' + quote.author;

// keyboard populator:
function keyboardPopulator() {
    const kb = document.getElementById('key-board');
    let content = '';
    for (const letter of alphabets) {
        content += `<p class="key" style="grid-area: ${letter.toUpperCase()}n;">${letter.toUpperCase()}-> </p><button class="key" id="${letter}" style="grid-area: ${letter};" onclick="selectKeyFor('${letter}')"></button>` ;
    }
    kb.innerHTML = content;
}

keyboardPopulator();

// letter board populator
function letterBoardPopulator() {
    const lb = document.getElementById('letter-landing-zone');
    let content = '';
    for (const letter of alphabets) {
        content += `<button onclick="selectLetter('${letter}')">${letter.toUpperCase()}</button>`;
    }
    content += `<button onclick="selectLetter('?')">[none]</button>`;
    lb.innerHTML = content;
}

letterBoardPopulator()

// encrypting the message:
function scramblePattern() {
  let charArray = alphabets.split('');
  for (let i = charArray.length; i > 0 ; i--) {
    const j = Math.floor(Math.random() * charArray.length);
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
  }
  shiftedAlphabets = charArray.join('');
}
scramblePattern();

//encrypting the text :
function encryptingMessage(string) {
  let message = string.toLowerCase();
  let encrypted = '' ;
  for (const letter of message) {
    if (alphabets.includes(letter)) {
      encrypted += shiftedAlphabets[alphabets.indexOf(letter)];
    } else {
      encrypted += letter;
    }
  }

  return encrypted;
}
encryptedQuote = encryptingMessage(txt);

console.log(shiftedAlphabets);







// The function which displays the encryped Quote on Screen:
function displayer() {
  let refinedText = encryptedQuote;
  //here the user key must interact with message:


  refinedText = refinedText.replaceAll('~', '<br>');
textLand.innerHTML = refinedText;
}
displayer();









// Interface functions : *****************************************************************************

// Closing the letter board:
function closeLetterBoard() {
    const elem = document.getElementById('letter-board');
    elem.style.display = 'none';
}



// selecting the letter :
function selectLetter(letter) {
  const theKey = document.getElementById(selectedKey);
  if (alphabets.includes(letter)) {
      theKey.innerHTML = letter;
      closeLetterBoard();
  } else {
    theKey.innerHTML = '';
    closeLetterBoard();
  }
}

// Setting an alternative key: 
function selectKeyFor(letter) {
  // oppening the letter board
  const elem = document.getElementById('letter-board');
  elem.style.display = 'flex';
  // marking the alternative key:
  selectedKey = letter;
}


