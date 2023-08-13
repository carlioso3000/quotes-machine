import { useState, useEffect } from 'react';
import quotesStorage from './utils/phrases/quotesStorage';
import QuoteBox from './components/quote-box/quoteBox';
import TweetQuote from './components/tweet-quote/tweetButton';
import NewQuoteButton from './components/quote-button/quoteButton';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotesStorage.length);
    setQuote(quotesStorage[randomIndex]);
  }, []);

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesStorage.length);
    setQuote(quotesStorage[randomIndex]);
  }

  return (
    <div className='app'>
      <QuoteBox quote={quote ? quote.frase : ''} author={quote ? quote.autor : ''} />
      <TweetQuote quote={quote ? quote.frase : ''} />

      <NewQuoteButton onClick={generateRandomQuote} />
    </div>
    
  );
}

export default App;
