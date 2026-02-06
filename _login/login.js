const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const password = document.getElementById("password");


form.addEventListener("submit", function (e) {
    e.preventDefault();
       const isRequiredValid = checkRequired([username,password,]);
   
    let isFormValid = isRequiredValid;
   
    if(isRequiredValid) {
        const isUsernameValid = checkLength(username,3,15);
        const isPasswordValid = checkLength(password,6,25);
        
        
        isFormValid = isUsernameValid  && isPasswordValid;
    }

    redire()
    if(isFormValid) {
        form.reset();
        document.querySelectorAll(".form-group").forEach(group => {
            group.className = "form-group";
        });
    }
  function botao(){
    window.location.replace('../primeira_inte/l.html')
  }
    
});

function checkPasswordsMatch(input1){
    if(input1.value) {
        showError(input1, "Passwords do not match");
        return false;
    }
   
    return true;
}




function checkLength(input,min,max) {
    if(input.value.length < min) {
        showError(input, `${formatFieldName(input)}must be at least ${min} characters.`);
        return false
    } else if (input.value.length > max ) {
        showError(input, `${formatFieldName(input)}must be at less than ${max} characters.`);
        return false;
    }else {
        showSuccess(input);
        return true
    }
}

function checkRequired(inputArray) {
    let isValid = true;
    
    inputArray.forEach(input => {
        // Password is required
        if(input.value.trim() === "") {
            showError(input, `${formatFieldName(input)} is required`);
            isValid = false;
        }
         else {
            
            showSuccess(input);
        
           
        }
    })

    return isValid;
}

// Format field name with proper capitalization
function formatFieldName(input) {
   
    // input id: username -> Username
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    
}

function showError(input, message){
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const small = formGroup.querySelector("small")
    small.innerText = message;
}
function showSuccess(input){
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
}
//redicionar o botao
 function botao(){
    

 }


   const ent =  document.getElementById('botao').addEventListener('clik', function(){
     
   if(username.trim() === '' || password.trim() ===''){
        alert()
        
    }else{
        botao()
    }
  
})




