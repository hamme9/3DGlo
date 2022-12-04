import { checkValidation } from "./checkValidation.js"

const sendForm = ({
    formId, 
    someElement = [] 
}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Наш менеджер с вами свяжется!'

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 
                'Content-Type': 'application/json' 
            }
        }).then((response) => response.json())
    }
    
    const clearCalc = () => {
        const inputsCalc = document.querySelectorAll('.calc-block input')
        const calcType = document.querySelector('.calc-type')
        const total = document.querySelector('#total')
        calcType.value = ''
        total.textContent = '0'
        inputsCalc.forEach((item) => {
            item.value = ''
        });
    }

    const getSomeElement = () => {
        const formElements = form.querySelectorAll('input')
        const formBody = {}
        const formData = new FormData(form)

        if(checkValidation(formElements)) {
            statusBlock.textContent = loadText
        }
        form.append(statusBlock)

        formData.forEach((value, key) => {
            if(key === 'user_message') {
                if(value === '') {
                    return
                }
            }
            formBody[key] = value
        })

        someElement.forEach(elem => {
            const element = document.getElementById(elem.id)
            const calcType = document.querySelector('.calc-type')
            const calcSquare = document.querySelector('.calc-square')
            const calcCount = document.querySelector('.calc-count')
            const calcDay = document.querySelector('.calc-day')
            if(elem.type === 'block' && element.textContent != '0') {
                formBody[elem.id] = element.textContent
                formBody['Тип объекта'] = calcType.options[calcType.selectedIndex].innerText
                formBody['Общая площадь'] = calcSquare.value
                formBody['Количесво помещений'] = calcCount.value
                formBody['Срок иссполнения'] = calcDay.value
            } else if(elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })
        return { formBody, formElements }
    }

    const submitForm = () => {
        const {formBody, formElements} = getSomeElement()

        if(checkValidation(formElements)) {
            clearCalc()

            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText
                
                formElements.forEach(input => {
                    input.value = ''
                    input.classList.remove('success')
                })
                console.log(data)
            })
            .catch(error => {
                statusBlock.textContent = errorText
            })
        }setTimeout(() => {
            statusBlock.textContent = '';
        }, 4000);
    }

    try {
        if(!form) {
            throw new Error('Верните форму на место')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
        })
    } catch(error) {
        console.error(error.message)
    }
}

export default sendForm