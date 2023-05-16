document.querySelector('.button').addEventListener('click', function() { 
const form = document.getElementById('form')
const Name = document.getElementById('Name')
const email = document.getElementById('email')
const password = document.getElementById('password')
form.addEventListener('submit',e => {e.preventDefault(),
validateInputs();
});
const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};
 const isValidEmail = email =>{
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }
const validateInputs = () => {
    const NameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


if(NameValue ===''){
    setError(Name,'Введіть імя');
}
else{
    setSuccess(Name);
}
if(emailValue ===''){
    setError(email,'Введіть вашу електрону пошту');
}
else if( !isValidEmail(emailValue)){
    setError(email,'');
}
else{
    setSuccess(email);
}
 
 if(passwordValue ===''){
     setError(password,'Ведіть пароль');
 }
 else if(passwordValue.length < 8){
     setError(password,'Пароль має містити більше 8 символів')
 }
 else{
   setSuccess(password);
 alert("Реєстрація успішна!"); }    
}
});
 
             

        


    