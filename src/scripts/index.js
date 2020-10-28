import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/detail.css'
import '../styles/responsive.css'

import pageLoader from '../scripts/utils/page-loader'
import detailAddReviewEvent from '../scripts/utils/detail-add-review-event'
import jumbotronRemover from '../scripts/utils/jumbotron-remover'
import hamburgerMenuInitiator from '../scripts/utils/hamburger-menu-initiator'
import swRegister from './utils/sw-register'

import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

import createHeroImage from '../scripts/utils/load-hero-image'
import heroImage from '../public/images/heros/hero-image_1.jpg'

window.addEventListener('DOMContentLoaded', async () => {
  createHeroImage(heroImage)
  hamburgerMenuInitiator()
  jumbotronRemover()
  if (window.location.hash === '#maincontent') {
    window.location.hash = '#home'
    return
  }

  await pageLoader()

  detailAddReviewEvent()
})

window.addEventListener('hashchange', async (e) => {
  jumbotronRemover()
  if (window.location.hash !== '#maincontent') {
    await pageLoader()
  }
  detailAddReviewEvent()
})

window.addEventListener('load', () => {
  swRegister()
})
