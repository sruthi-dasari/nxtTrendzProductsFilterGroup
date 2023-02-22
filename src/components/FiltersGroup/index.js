import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    updateRating,
    updateCategory,
    updateTitleSearch,
    resetFilters,
  } = props

  let searchedKey = ''

  const onChangeSearchInput = event => {
    searchedKey = event.target.value
  }

  const onEnter = event => {
    if (event.key === 'Enter') {
      updateTitleSearch(searchedKey)
    }
  }

  const onClickClear = () => {
    resetFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="search-box-container">
        <input
          type="search"
          className="search-box"
          placeholder="Search"
          value={searchedKey}
          onChange={onChangeSearchInput}
          onKeyPress={onEnter}
        />
        <BsSearch className="search-icon" />
      </div>
      <div className="category-container">
        <h1 className="category-heading">Category</h1>
        {categoryOptions.map(eachItem => (
          <Category
            categoryDetails={eachItem}
            key={eachItem.categoryId}
            updateCategory={updateCategory}
          />
        ))}
      </div>

      <div className="ratings-container">
        <h1 className="rating-heading">Rating</h1>
        {ratingsList.map(eachItem => (
          <Rating
            ratingDetails={eachItem}
            key={eachItem.ratingId}
            updateRating={updateRating}
          />
        ))}
        <button
          className="clear-filters-btn"
          type="button"
          onClick={onClickClear}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}

const Category = props => {
  const {categoryDetails, updateCategory} = props
  const {name, categoryId} = categoryDetails

  const onClickCategory = () => {
    updateCategory(categoryId)
  }

  return (
    <button
      className="category-option-btn"
      type="button"
      onClick={onClickCategory}
    >
      <p className="category-name">{name}</p>
    </button>
  )
}

const Rating = props => {
  const {ratingDetails, updateRating} = props
  const {ratingId, imageUrl} = ratingDetails

  const onClickRating = () => {
    console.log('In onClickRating()')
    updateRating(ratingId)
  }

  return (
    <button type="button" className="rating-btn" onClick={onClickRating}>
      <img src={imageUrl} alt={`rating ${ratingId}`} className="rating-img" />
      <p className="rating-extra-text">& up</p>
    </button>
  )
}

export default FiltersGroup
