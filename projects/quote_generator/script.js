const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function showLoadingSpinner() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
	loader.hidden = true;
	quoteContainer.hidden = false;
}

function newQuote() {
	showLoadingSpinner();

	// random number for index quotes
	const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
	//console.log(quote);
	// Check if author field is blank and replace for desconocido

	if (!quote.author) {
		authorText.textContent = "Desconocido";
	} else {
		authorText.textContent = quote.author;
	}

	// Check quote length to determine styling
	if (quote.text.length > 80) {
		quoteText.classList.add("long-quote");
	} else {
		quoteText.classList.remove("long-quote");
	}

	quoteText.textContent = quote.text;
	//await delay(5);
	removeLoadingSpinner();
}

function getQuote() {
	showLoadingSpinner();
	// random number for index quotes
	const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
	//console.log(quote);
	// Check if author field is blank and replace for desconocido

	if (!quote.author) {
		authorText.textContent = "Desconocido";
	} else {
		authorText.textContent = quote.author;
	}

	// Check quote length to determine styling
	if (quote.text.length > 80) {
		quoteText.classList.add("long-quote");
	} else {
		quoteText.classList.remove("long-quote");
	}

	quoteText.textContent = quote.text;
	removeLoadingSpinner();
}

// Tweet quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

showLoadingSpinner();
// pause 1 seg after call getQuote function
setTimeout(getQuote, 1000);


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
