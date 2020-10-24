import favoriteRestaurantDB from '../data/favorite-restaurant'

const changeFavoriteText = async (button, id) => {
  const dataRestaurant = await favoriteRestaurantDB.getRestaurant(id)
  if (dataRestaurant === undefined) {
    button.classList.add('add-to-favorite-text')
    button.classList.remove('is-on-favorite')
    button.innerHTML = 'Add To Favorite'
  } else {
    button.classList.remove('add-to-favorite-text')
    button.classList.add('is-on-favorite')
    button.innerHTML = 'Remove from favorite'
  }
}

const checkFavoriteOnDb = async (data) => {
  const favoriteRestaurantContainer = document.querySelector('.add-to-favorite')
  let dataRestaurant = ''
  if ('restaurant' in data) {
    dataRestaurant = await favoriteRestaurantDB.getRestaurant(data.restaurant.id)
  } else {
    dataRestaurant = 'id not found'
  }

  if (dataRestaurant === undefined) {
    favoriteRestaurantContainer.innerHTML = '<button id="add-to-favorite" class="add-to-favorite-text">Add To Favorite</button>'
  } else if (dataRestaurant === 'id not found') {
    favoriteRestaurantContainer.innerHTML = '<button id="add-to-favorite" class="id-not-found">Id is not found</button>'
  } else {
    favoriteRestaurantContainer.innerHTML = '<button id="add-to-favorite" class="is-on-favorite">Remove from favorite</button>'
  }

  const favoriteRestaurantButton = document.getElementById('add-to-favorite')
  favoriteRestaurantButton.addEventListener('click', () => {
    // check if it remove or add
    if (favoriteRestaurantButton.innerHTML.toLowerCase() === 'add to favorite') {
      favoriteRestaurantDB.putRestaurant(data.restaurant)
      alert('Success adding restaurant to favorite')
      changeFavoriteText(favoriteRestaurantButton, data.restaurant.id)
    }
    if (favoriteRestaurantButton.innerHTML.toLowerCase() === 'remove from favorite') {
      favoriteRestaurantDB.deleteRestaurant(data.restaurant.id)
      alert('Restaurant has been removed from favorite')
      changeFavoriteText(favoriteRestaurantButton, data.restaurant.id)
    }
  })
}

export { checkFavoriteOnDb }
