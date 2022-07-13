import Modal from '../modal/modalStruture.js'

const bodyDocument = document.querySelector('body')
const callModal = document.querySelectorAll('.callModal')


callModal.forEach(button => {
    button.addEventListener('click', (event) => {

        callModal.forEach(btn => {
            btn.style.display = 'none';
        });
        const typeOfButton = event.target.value;
        const modalCreateHabit = Modal.creatStrutureHtmlModal(typeOfButton);
        bodyDocument.append(modalCreateHabit);
        console.log(typeOfButton);
    });
});
    