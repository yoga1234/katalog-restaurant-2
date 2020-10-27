const loadHeroImage = (imageHero) => {
  const jumbotronContainer = document.querySelector('.jumbotron')
  const myHeroImage = new Image()
  myHeroImage.src = imageHero
  myHeroImage.setAttribute('srcset', './images/hero-image_1-small.jpg 480w, ./images/hero-image_1-large.jpg 800w')
  myHeroImage.setAttribute('sizes', '(max-width: 600px) 480px, 800px')
  myHeroImage.setAttribute('alt', 'restaurant hero')
  myHeroImage.classList.add('image-hero')

  jumbotronContainer.insertAdjacentElement('afterbegin', myHeroImage)
}

export default loadHeroImage
