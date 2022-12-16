const burger = document.querySelector("#js-burger");
const navBarToggle = document.querySelector("#js-navbar-toggle")

navBarToggle.addEventListener("click", function (){
    burger.classList.toggle("active");
    navBarToggle.classList.toggle("change")
    // toggle change ;a presence de la casse ".active" ON et OFF //
    
});
