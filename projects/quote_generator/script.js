const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Show loader
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loader
function completeLoader() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show new quote
function newQuote() {

  loading();

  // random number for index quotes
  const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];
  //console.log(quote);
  // Check if author field is blank and replace for desconocido
  
  if (!quote.author) {
	authorText.textContent = "Desconocido";
  } else {
	authorText.textContent = quote.author;
  }

  // Check quote length to determine styling
  if (quote.text.length > 80 ) {
	quoteText.classList.add("long-quote");
  } else {
	quoteText.classList.remove("long-quote");
  }
  
  quoteText.textContent = quote.text;
  //await delay(5);
  completeLoader();
}


// Show new quote
function getQuote() {
  
  loading();
  // random number for index quotes
  const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];
  //console.log(quote);
  // Check if author field is blank and replace for desconocido
  
  if (!quote.author) {
	authorText.textContent = "Desconocido";
  } else {
	authorText.textContent = quote.author;
  }

  // Check quote length to determine styling
  if (quote.text.length > 80 ) {
	quoteText.classList.add("long-quote");
  } else {
	quoteText.classList.remove("long-quote");
  }
  
  quoteText.textContent = quote.text;
  completeLoader();
}



// Tweet quote
function tweetQuote() {
  const twitterUrl =  `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}


// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

loading();
setTimeout(getQuote, 1000);
//getQuote();


/* Code for use with API

let apiQuotes = [];

// Generate new newQuote
function newQuote() {
  // random number for index quotes
  const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
  console.log(quote);

}

 Get quotes from API 

async function getQuotes() {

  const apiURL = "https://type.fit/api/quotes";
  try {
	const response = await fetch(apiURL);
	apiQuotes = await response.json();
	newQuote();
  } catch (error) {
	console.log("error");
	// cath error here
  }
}

// On load
getQuotes();

*/

