import favoriteRestaurantDB from '../src/scripts/data/favorite-restaurant'
import { checkFavoriteOnDb } from '../src/scripts/utils/favorite-restaurant-initiator'

describe('unfavorited a restaurant', () => {
  const dummyRestaurant = {
    restaurant: {
      id: '123',
      name: 'dummy restaurant'
    }
  }

  const initialTestingCode = () => {
    document.body.innerHTML = '<div class="add-to-favorite"></div>'
  }

  beforeEach(() => {
    initialTestingCode()
  })

  it('should display remove favorite button when the restaurant has been liked', async () => {
    await favoriteRestaurantDB.putRestaurant(dummyRestaurant.restaurant)

    await checkFavoriteOnDb(dummyRestaurant)

    expect(document.querySelector('.is-on-favorite')).toBeTruthy()

    favoriteRestaurantDB.deleteAllRestaurant()
  })

  it('should not display favorite button when the restaurant has been liked', async () => {
    await favoriteRestaurantDB.putRestaurant(dummyRestaurant.restaurant)

    await checkFavoriteOnDb(dummyRestaurant)

    expect(document.querySelector('.add-to-favorite-text')).toBeFalsy()

    favoriteRestaurantDB.deleteAllRestaurant()
  })

  it('should be able to remove favorited restaurant from the list', async () => {
    await favoriteRestaurantDB.putRestaurant(dummyRestaurant.restaurant)

    await checkFavoriteOnDb(dummyRestaurant)

    document.querySelector('#add-to-favorite').dispatchEvent(new Event('click'))
    const restaurant = await favoriteRestaurantDB.getAllRestaurant()

    expect(restaurant).toEqual([])

    favoriteRestaurantDB.deleteAllRestaurant()
  })

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await favoriteRestaurantDB.putRestaurant(dummyRestaurant.restaurant)

    await checkFavoriteOnDb(dummyRestaurant)

    await favoriteRestaurantDB.deleteAllRestaurant()

    document.querySelector('#add-to-favorite').dispatchEvent(new Event('click'))
    const restaurant = await favoriteRestaurantDB.getAllRestaurant()

    expect(restaurant).toEqual([])
  })
})
