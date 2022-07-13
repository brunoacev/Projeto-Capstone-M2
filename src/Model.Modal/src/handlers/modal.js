import creatStrutureHtmlModal from '../modal/modalStruture.js'

const bodyDocument = document.querySelector('body')
const callModal = document.querySelectorAll('.callModal')


callModal.forEach(button => {
    button.addEventListener('click', (event) => {
        const typeOfButton = event.target.value
        const modalCreateHabit = creatStrutureHtmlModal(typeOfButton)
        bodyDocument.append(modalCreateHabit)
        console.log(typeOfButton)
    });
});
    