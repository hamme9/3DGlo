const checkValidation = elems => {
    let status = true;
    elems.forEach(elem => {
        switch (elem.getAttribute('name')) {
            case 'user_name':
                if(/^[а-яё]{2,}/gi.test(elem.value)) {
                    elem.classList.add('success')
                    elem.classList.remove('error')
                } else {
                    elem.classList.add('error')
                    elem.classList.remove('success')
                }
                break;
            case 'user_email':
                if(/^[a-z\d\-_.!~*']+@[a-z\d\-_.!~*']+\.[a-z]{2,3}$/gi.test(elem.value)) {
                    elem.classList.add('success')
                    elem.classList.remove('error')
                } else {
                    elem.classList.add('error')
                    elem.classList.remove('success')
                }
                break;
            case 'user_phone':
                if(elem.value.length >= 17) {
                    elem.classList.add('success')
                    elem.classList.remove('error')
                } else {
                    elem.classList.add('error')
                    elem.classList.remove('success')
                }
                break;
            case 'user_message':
                elem.classList.add('success')
                elem.classList.remove('error')
            default: return;
        }
        
        elems.forEach(input => {
            if (input.classList.contains('error')) {
                status = false
            }
        })
    })
    console.log(status)
    return status
}

export { checkValidation }