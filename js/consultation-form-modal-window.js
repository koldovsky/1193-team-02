const showBtn = document.querySelector(".consultation-form__send-button");
const closeBtn = document.querySelector(".consultation-form__modal-window-ok-button");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const exitBtn = document.querySelector(".consultation-form__modal-window-exit-button");
const phoneField = document.querySelector(".consultation-form__phone-field");
const form = document.querySelector(".consultation-form__controls");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (phoneField.value.trim() !== "") {
        popup.classList.add("show");
        overlay.classList.add("show");
    }
});

function hidePopup() {
    popup.classList.remove("show");
    popup.classList.add("hide");
    overlay.classList.remove("show");
    overlay.classList.add("hide");
}

closeBtn.addEventListener("click", hidePopup);
exitBtn.addEventListener("click", hidePopup);
overlay.addEventListener("click", hidePopup);

phoneField.addEventListener("input", (e) => {
    phoneField.value = phoneField.value.replace(/[^0-9+]/g, "");
});