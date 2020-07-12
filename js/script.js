// show modal form
const btnWriteus = document.querySelector(".btn-writeus");
const modalWriteus = document.querySelector(".modal-writeus");
const writeusInputName = modalWriteus.querySelector("#writeus-name");
btnWriteus.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteus.classList.add("modal-show");
    writeusInputName.focus();
});

// close modal form
const btnWriteusClose = document.querySelector(".writeus-close");
btnWriteusClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWriteus.classList.remove("modal-show");
});

// close modal form by esc
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && modalWriteus.classList.contains("modal-show")) {
        evt.preventDefault();
        modalWriteus.classList.remove("modal-show");
    }
})


// sliders switching
const sliderInputs = document.getElementsByName('slider-radiogroup');
const sliderItems = document.querySelectorAll(".slider-item");
sliderInputs.forEach(function (sliderInput) {
    sliderInput.addEventListener("change", function () {
        for (let i = 0; i < sliderInputs.length; i++) {
            if (sliderInputs[i].checked) {
                sliderItems[i].classList.add("slider-item-visible");
            }
            else {
                sliderItems[i].classList.remove("slider-item-visible");
            }
        }
    });
});
