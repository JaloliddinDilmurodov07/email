var email = 'jaloliddin';
var password = 12345678;

function kirish(){
    var elEmail = document.querySelector('.email').value
    var elPassword = document.querySelector('.password').value
    var a = elEmail.toLowerCase();
    var b = elPassword

    if(a==email && b== password){
        alert("Siz registratsiyadan o'tdingiz")
    }
    else{
        alert("Noto'g'ri Email yoki Password kiritingiz")
    }

}