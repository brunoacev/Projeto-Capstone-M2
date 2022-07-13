
export default function creatStrutureHtmlModal(typeOfModal) {

    switch (typeOfModal) {
        case 'creatHabit' :
            console.log(typeOfModal)
            return createHabitModal()
        case 'editHabit'   :
            console.log(typeOfModal)
           return createEditHabitModal()
        case 'editProfile' :
            console.log(typeOfModal)
           return createEditProfileModal()
        case 'delete'      :
            console.log(typeOfModal)
           return createDeleteModal()
    }

}

// ELEMENTO PAI DO MODAL
const bodyDocument = document.querySelector('body')

// estrutura de modal Criar Habito

function createHabitModal() {

    // BLOCOS NECESSARIS PARA MODAL CRIAR HABITO 

    // bloco container
    const formModal           = createHtmlElement('form', 'modal creatHabit');

    // bloco header
    const containerModalHeader = createHtmlElement('header', 'modal__header');
    const modalHeaderTitle       = createHtmlElement('h3', 'modal__title'); 
    const modalHeaderCloseButton   = createHtmlElement('img', 'modal__close');

    
    // bloco caixas de ação
    const boxActionHabitTitle          = createActionBox('input','Título', 'title', 'Digitar título') 
    const boxActionHabitDescription      = createActionBox('textarea','Descrição', 'description', 'Digitar descrição') 
    const boxActionHabitSelectorCategory   = createActionSelectBox('Categoria', 'category')
    const boxActionHabitButton               = createActionBoxButton('button','Inserir', 'submit', 'modal__submit')

    // Editando Elementos dentro do header 
    const modalHeaderCreated = appropriatingTagsHeader('Criar hábito', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)


    // implementando corpo de modal ao container 
    formModal.append(
        modalHeaderCreated,
        boxActionHabitTitle,
        boxActionHabitDescription,
        boxActionHabitSelectorCategory,
        boxActionHabitButton,
    ) 
      
    // retornando modal completo
    return formModal
}


function createEditHabitModal(){

    // BLOCOS NECESSARIS PARA MODAL EDITAR HABITO  

    // bloco container
    const formModal                      = createHtmlElement('form', 'modal editHabit');

    // bloco header
    const containerModalHeader           = createHtmlElement('header', 'modal__header');
    const modalHeaderTitle               = createHtmlElement('h3', 'modal__title'); 
    const modalHeaderCloseButton         = createHtmlElement('img', 'modal__close');

    
   // bloco caixas de ação
    const boxActionHabitTitle            = createActionBox('input','Título', 'title', 'Tarefa a ser editada') 

    const boxActionHabitDescription      = createActionBox('textarea','Descrição', 'description', 'Descrição a ser editada') 
    const boxActionHabitSelectorCategory = createActionSelectBox('Categoria', 'category');

    const containerActionCheckbox        = createHtmlElement('fieldset', 'container__action checkbox');
    let containerActionTitleCheckbox     = createHtmlElement('label', 'title checkbox');
    containerActionTitleCheckbox         = setInnerTextHtml(containerActionTitleCheckbox, 'Status')
    const actionCheckbox                 = createActionBoxButton('input', null, 'checkbox', 'status__checkbox', '');
    containerActionCheckbox.append(containerActionTitleCheckbox, actionCheckbox)
    
    const containerActionHabitButton     = createHtmlElement('div', 'container__box button');
    const boxActionHabitButtonDelete     = createActionBoxButton('button','Excluir', 'checkbox', 'modal__submit delete', '')
    const boxActionHabitButtonSave       = createActionBoxButton('button', 'Salvar', 'checkbox', 'modal__submit save', '')
    containerActionHabitButton.append(boxActionHabitButtonDelete, boxActionHabitButtonSave)
    

    // Editando Elementos dentro do header 
    const modalHeaderCreated = appropriatingTagsHeader('Editar hábito', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)


    // implementando corpo de modal ao container 
    formModal.append(
        modalHeaderCreated,
        boxActionHabitTitle,
        boxActionHabitDescription,
        boxActionHabitSelectorCategory,
        containerActionCheckbox,
        containerActionHabitButton
    ) 
        
    // retornando modal completo
    return formModal
}



function createEditProfileModal() {

    // BLOCOS NECESSARIS PARA MODAL EDITAR PROFILE 

    // bloco container
    const formModal                          = createHtmlElement('form', 'modalEditProfile');

    // bloco header
    const containerModalHeader               = createHtmlElement('header', 'modal__header');
    const modalHeaderTitle                   = createHtmlElement('h3', 'modal__title'); 
    const modalHeaderCloseButton             = createHtmlElement('img', 'modal__close');

    
   // bloco caixas de ação
    const boxActionHabitTitle                = createActionBox('input','Título', 'title', 'Tarefa a ser editada') 

    const boxActionHabitDescription          = createActionBox('textarea','URL da imagem do perfil', 'URLDaImagemDoPerfil', 'Nova foto de perfil', "tres") 

    const createActionBoxButtonSalvarPerfil  = createActionBoxButton('button', 'Salvar alterações', 'submit', 'botaoSalvarPerfil')




    // Editando Elementos dentro do header 
    const modalHeaderCreated = appropriatingTagsHeader('Editar Perfil', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)


    // implementando corpo de modal ao container 
    formModal.append(
        modalHeaderCreated,
        boxActionHabitTitle,
        boxActionHabitDescription,
        createActionBoxButtonSalvarPerfil
    ) 
        
    // retornando modal completo
    return formModal
}


function createDeleteModal() {

    // BLOCOS NECESSARIS PARA MODAL DELETAR HABITO  

    // bloco container
    const formModal           = createHtmlElement('form', 'modal');

    // bloco header
    const containerModalHeader = createHtmlElement('header', 'modal__header');
    const modalHeaderTitle       = createHtmlElement('h3', 'modal__title'); 
    const modalHeaderCloseButton   = createHtmlElement('img', 'modal__close');

    
   // bloco caixas de ação
    const boxActionHabitTitle          = createActionBox('input','Título', 'title', 'Tarefa a ser editada') 

    const boxActionHabitDescription      = createActionBox('textarea','Descrição', 'description', 'Descrição a ser editada') 

    const boxActionHabitSelectorCategory   = createActionSelectBox('Categoria', 'category');



    // Editando Elementos dentro do header 
    const modalHeaderCreated = appropriatingTagsHeader('Editar hábito', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)


    // implementando corpo de modal ao container 
    formModal.append(
        modalHeaderCreated,
        boxActionHabitTitle,
        boxActionHabitDescription,
        boxActionHabitButton,
    ) 
        
    // retornando modal completo
    return formModal
}



function createHtmlElement(element, classList){
    const tag = document.createElement(element);
    
    tag.classList = classList;

    return tag;
}

function createHeaderTitle(tagToSet, textToSet) {
    const tag     = tagToSet 

    tag.innerText = textToSet

    return tag
}

function createActionBoxButton(element, placeholder, buttonType, classList, buttonValue) {

    const button = createHtmlElement(element, classList)
    button.type  = buttonType
    button.name  = 'modalData'
    buttonValue === ''? buttonValue : button.value = buttonValue
    !placeholder? placeholder : button.innerText = placeholder;
    
    return button
}



function appropriatingTagsHeader(actionOfmodalTitle, modalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal) {

    modalHeaderCloseButton = settingAtributesImg(modalHeaderCloseButton, './src/assets/X.png', 'close Icon', 'button')
    modalHeaderCloseButton.addEventListener('click', () => {
        bodyDocument.removeChild(formModal)
    });

    modalHeaderTitle = createHeaderTitle(modalHeaderTitle, actionOfmodalTitle)

    modalHeader.append(modalHeaderTitle, modalHeaderCloseButton)

    return modalHeader
    
}

function setInnerTextHtml(tagToSet, textToSet) {
    const tag     = tagToSet 

    tag.innerText = textToSet

    return tag
}

function settingAtributesTextActionBox(tagToSet, setAttributeId, setAttributePlaceholder) {
    const tag = tagToSet

    tag.name        = 'content'
    tag.id          = setAttributeId
    tag.cols        = '50'
    tag.rows        = '10'
    tag.placeholder = setAttributePlaceholder

    return tag
}

function settingAtributesImg(tagToSet, setAttributeSrc, setAttributeAlt, setAttributeType) {
    const tag = tagToSet

    tag.src  = setAttributeSrc
    tag.alt  = setAttributeAlt
    tag.type = setAttributeType

    return tag
}





function createActionBox(textType, actionTypeTitle, classListActionType, placeholder, identification) {

    let containerActionBox  = createHtmlElement('div', `box__actions ${classListActionType}`);
    let containerlabel      = createHtmlElement('label', `title ${classListActionType}`);
    let textActionBox       = createHtmlElement(textType, `textArea ${classListActionType}`); 
    
    textActionBox.id = identification

    containerlabel     = setInnerTextHtml(containerlabel, actionTypeTitle)

    containerlabel.append(textActionBox)

    textActionBox      = settingAtributesTextActionBox(textActionBox, classListActionType, placeholder)

    containerActionBox.append(containerlabel)

    return containerActionBox
}



function createActionSelectBox(actionTypeTitle, classListActionType) {

    const habitOptions = ['Saúde', 'Estudos', 'Casa', 'Trabalho', 'Lazer']

    let containerActionBox  = createHtmlElement('div', `box__actions ${classListActionType}`);
    let actionBoxTitle      = createHtmlElement('span', 'title');
    let actionBoxSelect     = createHtmlElement('select', `textArea ${classListActionType}`);
    let actionBoxtOptions   = appropriatingTagsOption(habitOptions);
    
    actionBoxTitle     = setInnerTextHtml(actionBoxTitle, actionTypeTitle)
    
    actionBoxSelect.append(...actionBoxtOptions)

    containerActionBox.append(actionBoxTitle, actionBoxSelect)

    return containerActionBox

}

function appropriatingTagsOption(listOptionToCreate) {

    const optionsCreated  = []

    listOptionToCreate.forEach( option => {
        const tag   = createHtmlElement('option', 'option.select');
        tag.value    = option
        tag.innerText = option
        optionsCreated.push(tag)
    });

    return optionsCreated
}





