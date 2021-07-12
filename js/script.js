const formContainer = document.querySelector(".form-container");
const search = document.querySelector(".search");
const sortLinks = document.querySelectorAll(".sorting-list-link");

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