// Getting a reference to the HTML element where quotes will be displayed
const quotesContainer = document.querySelector('.names');

// Function to fetch and display a random quote
async function getRandomQuote() {
  try {
    const response = await fetch('/api/random-quote');
    const data = await response.json();

    // Display the quote on the page
    quotesContainer.innerHTML = `
      <p>${data.quote}</p>
      <p>— ${data.author}</p>
    `;
  } catch (error) {
    console.error('Error fetching random quote:', error);
  }
}

// Function to fetch and display the next quote
async function getNextQuote() {
  try {
    const response = await fetch('/api/next-quote');
    const data = await response.json();

    // Display the quote on the page
    quotesContainer.innerHTML = `
      <p>${data.quote}</p>
      <p>— ${data.author}</p>
    `;
  } catch (error) {
    console.error('Error fetching next quote:', error);
  }
}

// Attach event listeners to buttons in HTML file
const randomQuoteButton = document.querySelector('#random-quote-button');
const nextQuoteButton = document.querySelector('#next-quote-button');

randomQuoteButton.addEventListener('click', getRandomQuote);
nextQuoteButton.addEventListener('click', getNextQuote);
