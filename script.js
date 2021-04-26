const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);

  quoteText.textContent = quote.text;
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
}

//Get new quotes
async function getQuotes() {
  try {
    const apiUrl = "https://type.fit/api/quotes";
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (err) {
    console.log(err);
  }
}

// on load
getQuotes();
