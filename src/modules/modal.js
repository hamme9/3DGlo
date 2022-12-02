import { animate } from './helpers'

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const modalContent = modal.querySelector('.popup-content')
  
    const animation = () => {
        modal.style.display = 'block'
        if(screen.width > 768) {
            animate({
                duration: 300,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modalContent.style.opacity = progress;
                }
              });
        }
    }

    buttons.forEach(btn => btn.addEventListener('click', animation))

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })

}

export default modal