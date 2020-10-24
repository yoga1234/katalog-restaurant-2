import { openDB } from 'idb'
import CONFIG from '../globals/config'

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  }
})

const favoriteRestaurantDB = {
  async getRestaurant (id) {
    if (!id) {
      return
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },
  async getAllRestaurant () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },
  async putRestaurant (restaurant) {
    if (!restaurant.id) {
      return
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
  },
  async deleteRestaurant (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  },
  async deleteAllRestaurant () {
    return (await dbPromise).clear(OBJECT_STORE_NAME)
  }
}

export default favoriteRestaurantDB
