import { restaurantCategories, foodsMenu, drinksMenu, consumerReviews } from '../../utils/restaurant-detail'
import CONFIG from '../../globals/config'

const detailPage = async (data) => {
  if (data === undefined) {
    return '<h2 class="detail-not-found">Oops, data is cannot be found.</h2>'
  }

  const categories = restaurantCategories(data.restaurant.categories)
  const foods = foodsMenu(data.restaurant.menus.foods)
  const drinks = drinksMenu(data.restaurant.menus.drinks)
  const reviews = consumerReviews(data.restaurant.customerReviews)

  return `
    <section class="detail-container">
      <a class="detail-back-button" href="#home">Back</a>
      <h2 class="detail-restaurant-name">${data.restaurant.name}</h2>
      <img class="detail-restaurant-image" src="${CONFIG.IMAGE_lARGE + data.restaurant.pictureId}" crossorigin="anonymous" alt="kafe dengan nama ${data.restaurant.name}">
      <div class="detail-description">
        <h3 class="detail-description-header">Description</h3>
        <p class="detail-description-text">${data.restaurant.description}</p>
      </div>
      <div class="detail-city">
        <h3 class="detail-city-header">City</h3>
        <p class="detail-city-text">${data.restaurant.city}</p>
      </div>
      <div class="detail-address">
        <h3 class="detail-address-header">Address</h3>
        <p class="detail-address-text">${data.restaurant.address}</p>
      </div>
      <div class="detail-categories">
        <h3 class="detail-categories-header">Categories</h3>
        <div class="detail-categories-list">
          ${categories}
        </div>
      </div>
      <div class="detail-menu">
        <h3 class="detail-menu-header">Menu Available</h3>
        <div class="detail-menu-list">
          <div class="detail-menu-foods">
            <h3 class="detail-foods-header">Foods</h3>
            ${foods}
          </div>
          <div class="detail-menu-drinks">
            <h3 class="detail-drinks-header">Drinks</h3>
            ${drinks}
          </div>
        </div>
      </div>
      <div class="detail-rating-and-reviews">
        <div class="detal-rating">
          <h3 class="detail-rating-header">Rating</h3>
          <p class="detail-rating-text">${data.restaurant.rating} From 5 points</p>
        </div>
        <div class="detail-reviews">
          <h3 class="detail-reviews-header">Consumer Reviews</h3>
          <div class="detail-reviews-list">
          <form id="detail-review-form-submit" class="detail-add-review-form">
            <label for="reviewname" class="detail-label-name">Your name:</label>
            <input type="text" id="reviewname" class="detail-input-name" placeholder="enter your name here" autocomplete="off" required>
            <br>
            <label for="reviewdescription" class="detail-label-description">Review:</label>
            <input type="text" id="reviewdescription" class="detail-input-description" placeholder="enter your review"autocomplete="off" required>
            <button class="detail-add-review" type="submit">Add Review</button>
          </form>
            ${reviews}
          </div>
        </div>
      </div>
      <div class="add-to-favorite">
        
      </div>
      <div class="back-to-top">
        <button class="back-to-top-text">Go Top</button>
      </div>
    </section>`
}

export default detailPage
