const loadHeroImage = (image) => {
  const jumbotronContainer = document.querySelector('.jumbotron')
  const myHeroImage = new Image()
  myHeroImage.src = image
  myHeroImage.classList.add('image-hero')

  jumbotronContainer.insertAdjacentElement('afterbegin', myHeroImage)
}

export default loadHeroImage
