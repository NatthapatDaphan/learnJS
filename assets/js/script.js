

function toggleHamburgerIcon(x) {
    x.classList.toggle("change");
}

//hamburgerIcon
let hamburgerIcon = document.getElementById("hamburgerIcon")
if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", function () {
        let mobileMenu = document.getElementById("mobile-Menu");
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none"

        } else {
            mobileMenu.style.display = "block"
        }
    })
}

//slide banner

let slideIndex = 1;

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("banner-wrapper");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex - 1].style.display = "flex"
}


function plusSlides(n) {
    showSlide(slideIndex += n);
}



showSlide()


//car modal
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let img = document.getElementsByClassName("myImg");

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function () {
        modal.style.display = "block"
        modalImg.src = this.src;
    });
}



let btnClose = document.getElementsByClassName("close")[0];

btnClose.addEventListener("click", () => {

    modal.style.display = "none"

});



//car info

let carDese = document.getElementsByClassName("cars-grid-item-desc");
let carBtn = document.getElementsByClassName("cars-grid-item-btn")
let carClose = document.getElementsByClassName("cars-grid-item-desc-x")

for (let i = 0; i < carBtn.length; i++) {
    carBtn[i].addEventListener("click", () => {
        carDese[i].style.display = "block"
    })
}


for (let i = 0; i < carClose.length; i++) {
    carClose[i].addEventListener("click", () => {
        carDese[i].style.display = "none"
    })
}


// accordian

let acc = document.getElementsByClassName("accordion-btn")

for (let i= 0 ; i<acc.length; i++){
    acc[i].addEventListener("click",()=>{
        let panel = acc[i].nextElementSibling;
        if(panel.style.display==="block"){
            panel.style.display = "none"

        }else{
            panel.style.display = "block"
        }
    })
}