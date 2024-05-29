const showbtn = document.querySelector(".consultation-form__send-button"); 
const closebtn = document.querySelector(".consultation-form__popup-ok-button");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const exitbtn = document.querySelector(".consultation-form__popup-exit-button");

showbtn.addEventListener("click", () => { 
    popup.style.display = "block";
    overlay.style.display = "block";
}); 

closebtn.addEventListener("click", () => { 
    popup.style.display = "none";
    overlay.style.display = "none";
});

exitbtn.addEventListener("click", () => { 
    popup.style.display = "none";
    overlay.style.display = "none";
});

