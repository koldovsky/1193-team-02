const showbtn = document.querySelector(".consultation-form__send-button"); 
const closebtn = document.querySelector(".consultation-form__popup-button");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

showbtn.addEventListener("click", () => { 
    popup.style.display = "block";
    overlay.style.display = "block";
}); 
  
closebtn.addEventListener("click", () => { 
    popup.style.display = "none";
    overlay.style.display = "none";
});