const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const modalContent = modal.querySelector('.popup-content')
  
    const animate = () => {
        modal.style.display = 'block'
        if(screen.width > 768) {
            let animation = modalContent.animate([
                {transform: 'translateX(-150%)'},
                {transform: 'translateX(-50px)'}
            ], 500);
            animation.addEventListener('finish', function() {
                modalContent.style.transform = 'translateX(-50px)';
            });
        }
    }

    buttons.forEach(btn => btn.addEventListener('click', animate))

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })

}

export default modal