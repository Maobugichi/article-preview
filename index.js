const shareBtn = document.getElementById('share-btn')

const active = document.getElementById('active')

const secondButton = document.getElementById('share-btn-2')

shareBtn.addEventListener('click' , () => {
  
  active.classList.toggle('active-state')
})


secondButton.addEventListener('click' , () => {
  
  active.classList.toggle('active-state')
})