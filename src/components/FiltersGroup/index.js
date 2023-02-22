import './index.css'
import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

class FiltersGroup extends Component {
  state = {
    searchedKey: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchedKey: event.target.value})
  }

  onEnter = event => {
    const {updateTitleSearch} = this.props
    const {searchedKey} = this.state
    if (event.key === 'Enter') {
      updateTitleSearch(searchedKey)
    }
  }

  onClickClear = () => {
    const {resetFilters} = this.props
    resetFilters()
  }

  render() {
    const {searchedKey} = this.state

    const {
      ratingsList,
      categoryOptions,
      updateRating,
      updateCategory,
    } = this.props

    return (
      <div className="filters-group-container">
        <div className="search-box-container">
          <input
            type="search"
            className="search-box"
            placeholder="Search"
            value={searchedKey}
            onChange={this.onChangeSearchInput}
            onKeyPress={this.onEnter}
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
            onClick={this.onClickClear}
          >
            Clear Filters
          </button>
        </div>
      </div>
    )
  }
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
