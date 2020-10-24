const assert = require('assert')

Feature('liking restaurant')

Before(({ I }) => {
  I.amOnPage('/#favorite')
})

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.see('No favorite restaurant saved.', '.no-favorite-restaurant')
})

Scenario('favorited and unfavorited one restaurant', async ({ I }) => {
  I.see('No favorite restaurant saved.', '.no-favorite-restaurant')

  I.amOnPage('/')

  I.seeElement('.article-title a')

  const firstRestaurant = locate('.article-title a')
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('.add-to-favorite-text')
  I.click('.add-to-favorite-text')
  I.acceptPopup()

  I.amOnPage('/#favorite')
  I.seeElement('.article-title')
  const likedFavoriteRestaurant = await I.grabTextFrom('.restaurant-detail')
  // pause()

  assert.strictEqual(firstRestaurantName, likedFavoriteRestaurant)

  I.click(firstRestaurant)
  I.seeElement('.is-on-favorite')
  I.click('.is-on-favorite')
  I.acceptPopup()

  I.seeElement('.add-to-favorite-text')

  I.amOnPage('/#favorite')

  I.see('No favorite restaurant saved.', '.no-favorite-restaurant')
})
