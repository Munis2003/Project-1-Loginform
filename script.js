const form = document.querySelector("#form")
const message = document.querySelector("#message")
const pass1 = document.querySelector("#password1")
const pass2 = document.querySelector("#password2")
let isValid = false
let passMatch = false

function validateform(){
    isValid = form.checkValidity();
    if(!isValid){
        message.textContent="Please fill all the fields"
        message.style.color='red'
    }else{
        if(pass1.value === pass2.value){
            passMatch=true;
        }
        else{
            passMatch=false;
            message.textContent="Make sure your password is correct"
            message.style.color='red'
        }
    }
    if(isValid && passMatch){
        message.textContent="Registered Succesfully"
        message.style.color = 'green'
    }
}



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateform();
})