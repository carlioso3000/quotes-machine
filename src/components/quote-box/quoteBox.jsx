
function QuoteBox({ quote, author }) {
  return(
    <div className="quote-box" id="quote-box">
      <div className="quote-text-container">
        <p id="text">{quote}</p>
      </div>
      <div className="quote-author-container">
        <p id="author">{author}</p>
      </div>
    </div>
  )
}

export default QuoteBox;