//This code for Login validation
function validatelogin(email,password) {
    const defaultemail = "haris123@gmail.com";
    const defaultpassword = "123456";

    return email === defaultemail && password === defaultpassword;
}

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('validation').addEventListener('submit', function (event){
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password =document.getElementById('password').value;
        const errormesssage = document.getElementById('error');

        if (validatelogin(email,password)){
            errormesssage.textContent='';
            window.location.href='welcome.html';
        }else{
            errormesssage.textContent ='invalid data.please try again'
        }
    });
});



