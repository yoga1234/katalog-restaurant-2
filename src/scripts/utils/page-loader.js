import urlParser from '../routes/url-parser'

import skipToContent from './skip-to-content-event'
import { checkFavoriteOnDb } from './favorite-restaurant-initiator'
import { backToTopBehaviour } from './scroll-top'
import { getDetailRestaurant } from '../data/restaurant-data-source'

const pageLoader = async () => {
  const mainContent = document.getElementById('maincontent')

  skipToContent()

  mainContent.innerHTML = await urlParser.loadPage('empty')
  mainContent.innerHTML = await urlParser.loadPage()
  if (window.location.hash !== '#home' && window.location.hash !== '#favorite') {
    const idDetail = window.location.href.split('/')[4]
    console.log(idDetail)
    // getting data for saving into database
    const restaurantData = await getDetailRestaurant(idDetail)
    await checkFavoriteOnDb(restaurantData)

    backToTopBehaviour()
  }
}

export default pageLoader
