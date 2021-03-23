let links = document.querySelector(".links");
let shareBTN = document.querySelector(".share-btn");
let avatar = document.querySelector(".avatar");

let mediaQuery = window.matchMedia("(min-width: 760px)");

function desktop() {
    if (links.style.display == "none") {
        links.style.display = "flex";
    } else {
        links.style.display = "none";
    };
};

function mobile() {
    if (links.style.display == "none") {
        links.style.display = "flex"
        avatar.style.marginLeft = "-9999px";
    } else {
        links.style.display = "none";
        avatar.style.marginLeft = "";
    };
};

function clickEvent(e) {
    if (e.matches) {
        shareBTN.removeEventListener("click", mobile);
        shareBTN.addEventListener("click", desktop);
    } else {
        shareBTN.removeEventListener("click", desktop);
        shareBTN.addEventListener("click", mobile);
    }
}

clickEvent(mediaQuery);
mediaQuery.addEventListener("change", clickEvent);

shareBTN.addEventListener('click', function() {
    console.log('button clicked');    
});