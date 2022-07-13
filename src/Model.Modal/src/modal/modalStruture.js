//-------------Código classes---------------

export default class Modals {

    static creatStrutureHtmlModal(typeOfModal) {

        switch (typeOfModal) {
            case 'creatHabit' :
                return this.createHabitModal();
            case 'editHabit'   :
               return this.createEditHabitModal();
            case 'editProfile' :
               return this.createEditProfileModal();
            case 'delete'      :
               return this.createDeleteModal()
        }
    }

 //----------Elemento pai dos Modais------------------------------------------------   

    static bodyDocument = document.querySelector('body')

 //----------Criação das tags HTML--------------------------------------------------

    static createHtmlElement(element, classList){
        const tag = document.createElement(element);
        tag.classList = classList;
    
        return tag;
    }

    static createActionBox(textType, actionTypeTitle, classListActionType, placeholder, identification) {

    let containerActionBox  = this.createHtmlElement('div', `box__actions ${classListActionType}`);
    let containerlabel      = this.createHtmlElement('label', `title ${classListActionType}`);
    let textActionBox       = this.createHtmlElement(textType, `textArea ${classListActionType}`); 
    
    textActionBox.id = identification

    containerlabel = this.setInnerTextHtml(containerlabel, actionTypeTitle)

    containerlabel.append(textActionBox)

    textActionBox = this.settingAtributesTextActionBox(textActionBox, classListActionType, placeholder)

    containerActionBox.append(containerlabel)

    return containerActionBox
}

    static createActionBoxButton(element, placeholder, buttonType, classList, buttonValue) {

        const button = this.createHtmlElement(element, classList)
        button.type  = buttonType
        button.name  = 'modalData'
        buttonValue === ''? buttonValue : button.value = buttonValue
        !placeholder? placeholder : button.innerText = placeholder;
        
        return button
    }

    static appropriatingTagsHeader(actionOfmodalTitle, modalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal) {

        modalHeaderCloseButton = this.settingAtributesImg(modalHeaderCloseButton, './src/assets/X.png', 'close Icon', 'button')
        modalHeaderCloseButton.addEventListener('click', () => {
            const callModal = document.querySelectorAll('.callModal')
            callModal.forEach(btn => {
                btn.style.display = 'block';
            });
            this.bodyDocument.removeChild(formModal)
        });
    
        modalHeaderTitle = this.setInnerTextHtml(modalHeaderTitle, actionOfmodalTitle)
    
        modalHeader.append(modalHeaderTitle, modalHeaderCloseButton)
    
        return modalHeader
        
    }

    static setInnerTextHtml(tagToSet, textToSet) {
        const tag     = tagToSet 
        tag.innerText = textToSet
    
        return tag
    }

    static settingAtributesTextActionBox(tagToSet, setAttributeId, setAttributePlaceholder) {
        const tag = tagToSet
    
        tag.name        = 'content'
        tag.id          = setAttributeId
        tag.cols        = '50'
        tag.rows        = '10'
        tag.placeholder = setAttributePlaceholder
    
        return tag
    }

    static settingAtributesImg(tagToSet, setAttributeSrc, setAttributeAlt, setAttributeType) {
        const tag = tagToSet
    
        tag.src  = setAttributeSrc
        tag.alt  = setAttributeAlt
        tag.type = setAttributeType
    
        return tag
    }

 //----------Tags Options-----------------------------------------------------------------

    static appropriatingTagsOption(listOptionToCreate) {

        const optionsCreated  = []
    
        listOptionToCreate.forEach( option => {
            const tag   = this.createHtmlElement('option', 'option.select');
            tag.value    = option
            tag.innerText = option
            optionsCreated.push(tag)
        });
    
        return optionsCreated
    }

    static createActionSelectBox(actionTypeTitle, classListActionType) {

        const habitOptions = ['Saúde', 'Estudos', 'Casa', 'Trabalho', 'Lazer']

        let containerActionBox  = this.createHtmlElement('div', `box__actions ${classListActionType}`);
        let actionBoxTitle      = this.createHtmlElement('span', 'title');
        let actionBoxSelect     = this.createHtmlElement('select', `textArea ${classListActionType}`);
        let actionBoxtOptions   = this.appropriatingTagsOption(habitOptions);
        
        actionBoxTitle = this.setInnerTextHtml(actionBoxTitle, actionTypeTitle)
        
        actionBoxSelect.append(...actionBoxtOptions)

        containerActionBox.append(actionBoxTitle, actionBoxSelect)

        return containerActionBox

    }



 //----------Criação dos modais------------------------------------------------------------

    static createHabitModal() {

        // BLOCOS NECESSARIS PARA MODAL CRIAR HABITO 
    
        // bloco container
        const formModal        = this.createHtmlElement('form', 'modal creatHabit');
        // bloco header
        const containerModalHeader = this.createHtmlElement('header', 'modal__header');
        const modalHeaderTitle       = this.createHtmlElement('h3', 'modal__title'); 
        const modalHeaderCloseButton   = this.createHtmlElement('img', 'modal__close');
    
        // bloco caixas de ação
        const boxActionHabitTitle          = this.createActionBox('input','Título', 'title', 'Digitar título') 
        const boxActionHabitDescription      = this.createActionBox('textarea','Descrição', 'description', 'Digitar descrição') 
        const boxActionHabitSelectorCategory   = this.createActionSelectBox('Categoria', 'category')
        const boxActionHabitButton               = this.createActionBoxButton('button','Inserir', 'submit', 'modal__submit')
    
        // Editando Elementos dentro do header 
        const modalHeaderCreated = this.appropriatingTagsHeader('Criar hábito', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)
    
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
 
    static createEditHabitModal(){

        // BLOCOS NECESSARIS PARA MODAL EDITAR HABITO  
    
        // bloco container
        const formModal        = this.createHtmlElement('form', 'modal editHabit');
        // bloco header
        const containerModalHeader = this.createHtmlElement('header', 'modal__header');
        const modalHeaderTitle       = this.createHtmlElement('h3', 'modal__title'); 
        const modalHeaderCloseButton   = this.createHtmlElement('img', 'modal__close');
    
        
       // bloco caixas de ação
        const boxActionHabitTitle            = this.createActionBox('input','Título', 'title', 'Tarefa a ser editada') 
    
        const boxActionHabitDescription      = this.createActionBox('textarea','Descrição', 'description', 'Descrição a ser editada') 
        const boxActionHabitSelectorCategory = this.createActionSelectBox('Categoria', 'category');
    
        const containerActionCheckbox        = this.createHtmlElement('fieldset', 'container__action checkbox');
        let containerActionTitleCheckbox     = this.createHtmlElement('label', 'title checkbox');
        containerActionTitleCheckbox         = this.setInnerTextHtml(containerActionTitleCheckbox, 'Status')
        const actionCheckbox                 = this.createActionBoxButton('input', null, 'checkbox', 'status__checkbox', '');
        containerActionCheckbox.append(containerActionTitleCheckbox, actionCheckbox)
        
        const containerActionHabitButton     = this.createHtmlElement('div', 'container__box button');
        const boxActionHabitButtonDelete     = this.createActionBoxButton('button','Excluir', 'checkbox', 'modal__submit delete', '')
        const boxActionHabitButtonSave       = this.createActionBoxButton('button', 'Salvar', 'checkbox', 'modal__submit save', '')
        containerActionHabitButton.append(boxActionHabitButtonDelete, boxActionHabitButtonSave)
        
    
        // Editando Elementos dentro do header 
        const modalHeaderCreated = this.appropriatingTagsHeader('Editar hábito', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)
    
    
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
 
    static createEditProfileModal() {

        // BLOCOS NECESSARIS PARA MODAL EDITAR PROFILE 
    
        // bloco container
        const formModal                          = this.createHtmlElement('form', 'modal editProfile');
    
        // bloco header
        const containerModalHeader               = this.createHtmlElement('header', 'modal__header');
        const modalHeaderTitle                   = this.createHtmlElement('h3', 'modal__title'); 
        const modalHeaderCloseButton             = this.createHtmlElement('img', 'modal__close');
    
        
       // bloco caixas de ação
        const boxActionHabitTitle                = this.createActionBox('input','Título', 'title', 'Tarefa a ser editada') 
    
        const boxActionHabitDescription          = this.createActionBox('input','URL da imagem do perfil', 'modal__editImg', 'Nova foto de perfil', "3") 
    
        const createActionBoxButtonSalvarPerfil  = this.createActionBoxButton('button', 'Salvar alterações', 'submit', 'modal__submit')
    
    
    
    
        // Editando Elementos dentro do header 
        const modalHeaderCreated = this.appropriatingTagsHeader('Editar Perfil', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)
    
    
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

    static createDeleteModal() {

        // BLOCOS NECESSARIS PARA MODAL DELETAR HABITO  
    
        // bloco container
        const formModal           = this.createHtmlElement('form', 'modal delete');
    
        // bloco header
        const containerModalHeader = this.createHtmlElement('header', 'modal__header');
        const modalHeaderTitle       = this.createHtmlElement('h3', 'modal__title'); 
        const modalHeaderCloseButton   = this.createHtmlElement('img', 'modal__close');
    
        
       // bloco caixas de ação
        let deleteDescriptionTitle = this.createHtmlElement('h2', 'title actionInforme');
        let deleteDescription        = this.createHtmlElement('p', 'title');
        deleteDescriptionTitle         = this.setInnerTextHtml(deleteDescriptionTitle, 'Certeza que deseja excluir este hábito?')
        deleteDescription                = this.setInnerTextHtml(deleteDescription, 'Após executar essa ação não será possível desfazer')
    
    
        const conntainerDeleteButtonCancel = this.createHtmlElement('div', 'container__box button');
        const deleteButtonCancel  = this.createActionBoxButton('button', 'Cancelar', 'submit', 'modal__submit delete');
        const deleteButtonConfirme  = this.createActionBoxButton('button', 'Sim, excluir este hábito', 'submit', 'modal__submit deleteConfirme');
        conntainerDeleteButtonCancel.append(deleteButtonCancel, deleteButtonConfirme)
    
    
        // Editando Elementos dentro do header 
        const modalHeaderCreated = this.appropriatingTagsHeader('Excluir hábito', containerModalHeader, modalHeaderTitle, modalHeaderCloseButton, formModal)
    
    
        // implementando corpo de modal ao container 
        formModal.append(
            modalHeaderCreated,
            deleteDescriptionTitle,
            deleteDescription,
            conntainerDeleteButtonCancel
        ) 
            
        // retornando modal completo
        return formModal
    }

}