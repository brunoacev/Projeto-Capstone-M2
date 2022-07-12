import LoginRequest from "../Controllers/Login.cotroler.js";

const botaoLogin = document.getElementById("btnLogin")

class CaptarLogin{
    static dados(event){
        event.preventDefault();

        const formDeLogin = document.querySelector(".formDosInputs")
        const data = {}
        
        for(let i = 0; i < formDeLogin.length; i++){
            const {name, value} = formDeLogin[i];
            if(name){
                if(value === ""){
                    return alert("Digite os dados de login")
                }
                data[name] = value
            }
        }
        return data
    }
}
    
    botaoLogin.addEventListener("click", async(event) => {
        const dadosDoLogin = CaptarLogin.dados(event)
        LoginRequest.login(dadosDoLogin)
    })