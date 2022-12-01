const validation = () => {
    const inputsCalc = document.querySelectorAll('.calc-block input')
    const inputsText = document.querySelectorAll('.form-name, .mess, #form2-name')
    const inputsEmail = document.querySelectorAll('input[type=email]')
    const inputsPhone = document.querySelectorAll('input[type=tel]')

    const validationCalc = () => {
        inputsCalc.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D+/,"")
            });
        });
    };

    const validationText = () => {
        inputsText.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[a-zA-Z0-9]+/, "")
            });
        });
    };

    const validationPhone = () => {
        inputsPhone.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9-()]+/,"")
            });
        });
    };

    const validationEmail = () => {
        inputsEmail.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z@-_.!~*']+/,"")
            });
        });
    };

    validationCalc();
    validationPhone();
    validationEmail();
    validationText();


}

export default validation