const formContainer = document.querySelector(".form-container");
const search = document.querySelector(".search");
const sortLinks = document.querySelectorAll(".sorting-list-link");
const arrivalDate = document.querySelector(".arrival-date");
const departureDate = document.querySelector(".departure-date");
const appointmentDate = document.querySelector(".appointment-date");


if (search) {
    formContainer.classList.add("form-container--closed");
    search.addEventListener("click", function (evt) {
        evt.preventDefault();
        formContainer.classList.toggle("form-container--closed");
    });
}

if (sortLinks) {
    sortLinks.forEach(function(elem){
        elem.addEventListener("click", function(evt){
            evt.preventDefault();
            document.querySelector(".sorting-list-link-active").classList.remove("sorting-list-link-active");
            this.classList.add("sorting-list-link-active");
        });
    });
}

arrivalDate.required = false;
departureDate.required = false;
if (appointmentDate) {
    appointmentDate.addEventListener("submit", function(evt){
        if (!arrivalDate.value || !departureDate.value) {
            evt.preventDefault();
            appointmentDate.classList.remove("form--error");
            appointmentDate.offsetWidth = appointmentDate.offsetWidth;
            appointmentDate.classList.add("form--error");
        }
    });
}