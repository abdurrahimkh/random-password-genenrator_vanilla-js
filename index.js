const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const BtnEl = document.querySelector('.btn')
const passwordOneEl = document.querySelector('.password-one')
const passwordTwoEl = document.querySelector('.password-two')
const copyBtn1 = document.querySelector('.copy-icon1')
const copyBtn2 = document.querySelector('.copy-icon2')
const toast = document.getElementById("toast");


function randomPassword(){
    let password = ""
    for(let i = 0 ; i<15 ; i ++){
        let randomIndex = Math.floor(Math.random()*characters.length)
         password += characters[randomIndex]
        }
        return password
}


function showPassword(){
    passwordOneEl.value= randomPassword()
    passwordTwoEl.value= randomPassword()
}

copyBtn1.onclick = function (){
    passwordOneEl.select()
    document.execCommand("Copy")
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}
copyBtn2.onclick = function (){
    passwordTwoEl.select()
    document.execCommand("Copy")
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}