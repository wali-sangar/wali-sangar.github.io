const toggle = document.querySelector(".toggle");
const nvigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nvigation.classList.toggle("active");

});


