const createHeroImage = (imageHero) => {
  const jumbotronContainer = document.querySelector('.jumbotron')
  const pictureElement = document.createElement('PICTURE')
  const firstSourceElement = document.createElement('SOURCE')
  const secondSourceElement = document.createElement('SOURCE')
  const myHeroImage = new Image()

  firstSourceElement.setAttribute('type', 'image/webp')
  firstSourceElement.setAttribute('srcset', './images/hero-image_1-small.webp 480w, ./images/hero-image_1-large.webp 800w')
  firstSourceElement.setAttribute('sizes', '(max-width: 600px) 480px, 800px')
  firstSourceElement.setAttribute('alt', 'restaurant hero')
  firstSourceElement.setAttribute('width', '100')
  firstSourceElement.setAttribute('height', '750')
  firstSourceElement.classList.add('image-hero')

  secondSourceElement.setAttribute('type', 'image/webp')
  secondSourceElement.setAttribute('srcset', './images/hero-image_1-small.jpg 480w, ./images/hero-image_1-large.jpg 800w')
  secondSourceElement.setAttribute('sizes', '(max-width: 600px) 480px, 800px')
  secondSourceElement.setAttribute('alt', 'restaurant hero')
  secondSourceElement.setAttribute('width', '100')
  secondSourceElement.setAttribute('height', '750')
  secondSourceElement.classList.add('image-hero')

  myHeroImage.src = imageHero
  myHeroImage.setAttribute('srcset', './images/hero-image_1-small.jpg 480w, ./images/hero-image_1-large.jpg 800w')
  myHeroImage.setAttribute('sizes', '(max-width: 600px) 480px, 800px')
  myHeroImage.setAttribute('alt', 'restaurant hero')
  myHeroImage.setAttribute('width', '100')
  myHeroImage.setAttribute('height', '750')
  myHeroImage.classList.add('lazyload', 'image-hero')

  pictureElement.appendChild(firstSourceElement)
  pictureElement.appendChild(secondSourceElement)
  pictureElement.appendChild(myHeroImage)

  jumbotronContainer.insertBefore(pictureElement, jumbotronContainer.firstChild)
}

export default createHeroImage
