import favoriteRestaurantDB from '../src/scripts/data/favorite-restaurant'
import { checkFavoriteOnDb } from '../src/scripts/utils/favorite-restaurant-initiator'

describe('favorited a restaurant', () => {
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

  it('should show the favorite button when the restaurant has not been liked before', async () => {
    await checkFavoriteOnDb(dummyRestaurant)

    expect(document.querySelector('.add-to-favorite-text')).toBeTruthy()
  })

  it('should not show the remove from favorite button when the restaurant has not been liked', async () => {
    await checkFavoriteOnDb(dummyRestaurant)

    expect(document.querySelector('.is-on-favorite')).toBeFalsy()
  })

  it('should be able to favorite the restaurant', async () => {
    await checkFavoriteOnDb(dummyRestaurant)

    document.querySelector('#add-to-favorite').dispatchEvent(new Event('click'))
    const restaurant = await favoriteRestaurantDB.getRestaurant(dummyRestaurant.restaurant.id)

    expect(restaurant).toEqual(dummyRestaurant.restaurant)

    favoriteRestaurantDB.deleteAllRestaurant()
  })

  it('should not add a restaurant again when its already on favorite', async () => {
    await checkFavoriteOnDb(dummyRestaurant)

    await favoriteRestaurantDB.putRestaurant(dummyRestaurant.restaurant)
    document.querySelector('#add-to-favorite').dispatchEvent(new Event('click'))
    const restaurant = await favoriteRestaurantDB.getAllRestaurant()

    expect(restaurant).toEqual([dummyRestaurant.restaurant])

    favoriteRestaurantDB.deleteAllRestaurant()
  })

  it('should not add a restaurant when it has no id', async () => {
    await checkFavoriteOnDb({})

    document.querySelector('#add-to-favorite').dispatchEvent(new Event('click'))

    expect(await favoriteRestaurantDB.getAllRestaurant()).toEqual([])
  })
})
