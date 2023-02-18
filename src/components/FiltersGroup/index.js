import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {ratingsList, categoryOptions} = props

  return (
    <div className="filters-group-container">
      <div className="search-box-container">
        <input type="search" className="search-box" placeholder="Search" />
        <BsSearch className="search-icon" />
      </div>
      <div className="category-container">
        <p className="category-heading">Category</p>
        <button className="category-option-btn" type="button">
          Clothing
        </button>
        <button className="category-option-btn" type="button">
          Electronics
        </button>
        <button className="category-option-btn" type="button">
          Appliances
        </button>
        <button className="category-option-btn" type="button">
          Grocery
        </button>
        <button className="category-option-btn" type="button">
          Toys
        </button>
      </div>
      <div className="ratings-container">
        <p className="rating-heading">Rating</p>
        {ratingsList.map(eachItem => (
          <Rating ratingDetails={eachItem} />
        ))}
        <button className="clear-filters-btn" type="button">
          Clear Filters
        </button>
      </div>
    </div>
  )
}

const Rating = props => {
  const {ratingDetails} = props
  const {ratingId, imageUrl} = ratingDetails

  return (
    <div className="rating-container">
      <img src={imageUrl} alt={`rating ${ratingId}`} className="rating-img" />
      <p className="rating-extra-text">& up</p>
    </div>
  )
}

export default FiltersGroup
