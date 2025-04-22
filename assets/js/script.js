// JavaScript Here

function toggleHamburgerIcon(x) {
  x.classList.toggle("change");
}


let hamburgerIcon = document.getElementById("hamburgerIcon")
 if(hamburgerIcon){
    hamburgerIcon.addEventListener("click",function(){
        let mobileMenu = document.getElementById("mobile-Menu");
        if(mobileMenu.style.display=== "block"){
            mobileMenu.style.display="none"

        }else{
            mobileMenu.style.display ="block"
        }
    })
 }