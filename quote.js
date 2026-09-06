let quote = document.getElementById("quote");
let quotebutton = document.getElementById("newQuoteBtn");



const quotes = [
    "The mind is everything. What you think you become.",
    "Peace comes from within. Do not seek it without.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Happiness is not something ready made. It comes from your own actions.",
    "In the middle of every difficulty lies opportunity."
]

quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

quotebutton.addEventListener("click", () => {
    quote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote.textContent);
})

