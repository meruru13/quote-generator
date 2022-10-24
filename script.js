const newQuoteButton = document.getElementById('js-new-quote')
const newQuote = document.getElementById('js-quote-text')
const twitterButton = document.getElementById('js-tweet')

newQuoteButton.addEventListener('click', getQuote)

async function getQuote() {
  try {
    const res = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    if (!res.ok) {
      throw Error(res.statusText)
    }
    const json = await res.json()
    const quote = json.message
    newQuote.innerHTML = quote
    setTweetButton(quote)
  } catch (err) {
    alert (`'Failed to fetch new quote. ${err}'`)
  }
}

function setTweetButton(quote) {
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`)
}

getQuote()