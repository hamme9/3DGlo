const menu = () => {
    const menu = document.querySelector('menu')

    const toggleMenu = () => {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.menu') || e.target.closest('.close-btn')) {
                e.preventDefault()
                menu.classList.toggle('active-menu');
            } else if (e.target.closest('a') || !e.target.closest('.active-menu')) {
                menu.classList.remove('active-menu');
            } 
        })
    }

    toggleMenu()
}

export default menu