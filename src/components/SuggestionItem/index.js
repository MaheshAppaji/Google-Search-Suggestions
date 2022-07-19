import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props

  const {suggestion} = suggestionDetails

  const onClickUpdateSearch = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="sugg-text">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onClickUpdateSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
