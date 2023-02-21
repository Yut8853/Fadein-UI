const contentContainer = document.querySelectorAll('.content-container');

window.addEventListener('scroll', () => {
  contentContainer.forEach((value) => {
    if (window.scrollY > (value.getBoundingClientRect().top + 250) + window.scrollY - window.innerHeight) {
      value.classList.add('active')
    }
    // else {
    //   value.classList.remove('active')
    // }
  })
})