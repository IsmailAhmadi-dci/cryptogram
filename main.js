

//*****************************************************************
// Main Data : ****************************************************
//*****************************************************************

const quotes = [
    {
      id: 1,
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      id: 2,
      quote:
        "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
      author: "Albert Einstein",
    },
    {
      id: 3,
      quote:
        "The more I live, the more I learn. The more I learn, the more I realize, the less I know.",
      author: "Michel Legrand",
    },
    {
      id: 4,
      quote:
        "A wise man learns more from his enemies than a fool from his friends.",
      author: "Niki Lauda",
    },
    {
      id: 5,
      quote: "The beginning of wisdom is the definition of terms.",
      author: "Socrates",
    },
    {
      id: 6,
      quote: "It's not what you look at that matters, it's what you see.",
      author: "Henry David Thoreau",
    },
    {
      id: 7,
      quote:
        "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      author: "William Shakespeare",
    },
    {
      id: 8,
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      id: 9,
      quote: "The art of being wise is the art of knowing what to overlook.",
      author: "William James",
    },
    {
      id: 10,
      quote: "Knowledge speaks, but wisdom listens.",
      author: "Jimi Hendrix",
    },
    {
      id: 11,
      quote: "The wise man does at once what the fool does finally.",
      author: "Niccolo Machiavelli",
    },
    {
      id: 12,
      quote:
        "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
      author: "Aristotle",
    },
    {
      id: 13,
      quote:
        "To acquire knowledge, one must study; but to acquire wisdom, one must observe.",
      author: "Marilyn vos Savant",
    },
    {
      id: 14,
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      id: 15,
      quote: "Patience is the companion of wisdom.",
      author: "Saint Augustine",
    },
    {
      id: 16,
      quote:
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      id: 17,
      quote:
        "The man of wisdom is never of two minds; the man of benevolence never worries; the man of courage is never afraid.",
      author: "Confucius",
    },
    {
      id: 18,
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates",
    },
    {
      id: 19,
      quote: "Knowing yourself is the beginning of all wisdom.",
      author: "Aristotle",
    },
    {
      id: 20,
      quote: "The wise man has long ears and a short tongue.",
      author: "German Proverb",
    },
    {
      id: 21,
      quote: "The more one judges, the less one loves.",
      author: "Honore de Balzac",
    },
    {
      id: 22,
      quote: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 23,
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 24,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 25,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 26,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 27,
      quote:
        "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
      author: "Daniel J. Boorstin",
    },
    {
      id: 28,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 29,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 30,
      quote: "The more you know, the more you realize you don't know.",
      author: "Anonymous",
    },
    {
      id: 31,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 32,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 33,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 34,
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 35,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 36,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 37,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 38,
      quote:
        "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
      author: "Daniel J. Boorstin",
    },
    {
      id: 39,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 40,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 41,
      quote: "The more you know, the more you realize you don't know.",
      author: "Anonymous",
    },
    {
      id: 42,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 43,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 44,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 45,
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 46,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 47,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 48,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 49,
      quote:
        "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
      author: "Daniel J. Boorstin",
    },
    {
      id: 50,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 51,
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 52,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 53,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 54,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 55,
      quote:
        "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
      author: "Daniel J. Boorstin",
    },
    {
      id: 56,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 57,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 58,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 59,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 60,
      quote:
        "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
      author: "Daniel J. Boorstin",
    },
    {
      id: 61,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 62,
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 63,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 64,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 65,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 66,
      quote:
        "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
      author: "Daniel J. Boorstin",
    },
    {
      id: 67,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 68,
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 69,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 70,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 71,
      quote:
        "The only thing we know about the future is that it will be different.",
      author: "Peter Drucker",
    },
    {
      id: 72,
      quote:
        "The greatest obstacle to discovery is not ignorance; it is the illusion of knowledge.",
      author: "Daniel J. Boorstin",
    },
    {
      id: 73,
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 74,
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 75,
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
  ];
  

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


