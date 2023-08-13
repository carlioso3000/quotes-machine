import '../../styles/tweet-button.css';

function TweetQuote({ quote }) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;

  return (
    <div className="tweet-quote-container">
      <a id="tweet-quote" href={tweetUrl} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
    </div>
  )
}

export default TweetQuote;
