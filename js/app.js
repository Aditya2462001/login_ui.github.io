console.log("hello world");

const password = document.querySelector('.password');

const password_see = document.getElementById('see_pass');


password_see.addEventListener("click",
function ()
{
    if(password.type == "password")
    {
        console.log('see');
        password.type = 'text' ;
        password_see.innerHTML = '<i class="fas fa-eye-slash" ></i>';
    }
    else
    {
        console.log('hide');
        password.type = 'password' ;
        password_see.innerHTML = '<i class="fas fa-eye" ></i>';
    }
});