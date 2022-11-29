const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const modalContent = modal.querySelector('.popup-content')
    const closeBtn = modal.querySelector('.popup-close')

    
    const animate = () => {
        if(screen.width > 768) {
            modal.style.display = 'block'
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

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })

}

export default modal