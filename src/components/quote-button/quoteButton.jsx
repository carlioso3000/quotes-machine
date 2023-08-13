import '../../styles/quote-button.css';

function NewQuoteButton({ onClick }) {
  return (
    <div className="quote-button-container">
      <button id="new-quote" onClick={onClick}>New Quote</button>
    </div>
  )
}

export default NewQuoteButton;