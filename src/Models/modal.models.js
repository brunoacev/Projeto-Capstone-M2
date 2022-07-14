// Codar aqui os modais!!
export default class Modal {
  static modalScreen = document.querySelector(".modal-screen");
  static formHeader = document.querySelector(".form__header");

  static createHabit() {
    const createHeader = document.createElement("header");
    createHeader.classList.add("form__header");
    const headerTitle = document.createElement("h3");
    headerTitle.classList.add("form-header__title");
    const buttonTitle = document.createElement("button");
    buttonTitle.classList.add("form__button--submit");

    createHeader.append(headerTitle, buttonTitle);

    // Continuar com a criação pelo DOM das tag's na homepage.html

  }

  static editHabit() {}

  static editProfile() {}

  static deleteHabit() {}
}

// Inicio Eventos de Click do Modal Criar Habitos

const buttonCriarHabito = document.querySelector("#buttonCriarHabito");
buttonCriarHabito.addEventListener("click", () =>{
    const modalCard = document.querySelector("#hide__container");
    modalCard.style.display = "block";
})

const buttonCloseModalCriarHabito = document.querySelector("#buttonClose");
buttonCloseModalCriarHabito.addEventListener("click", () => {
    const modalCard = document.querySelector("#hide__container");
    modalCard.style.display = "none";
})

const coletarDadosModal = document.querySelector(".section__inserirBtn");
coletarDadosModal.addEventListener("click", () =>{
    const inputTextValue = document.querySelector("#inputTitulo");
    const inputDescriptionValue = document.querySelector("#inputDescription");
    const inputCategoriaValue = document.querySelector("#selectCategoria")

    const dadosColetados = {
        textValue: inputTextValue.value,
        descriptionValue: inputDescriptionValue.value,
        categoryValue: inputCategoriaValue.value
    }
    console.log(dadosColetados)
})

// Final Eventos de Click do Modal Criar Habitos

