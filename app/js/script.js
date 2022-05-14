
 // Preloader
 $(window).on('load', function() { 
  $('#preloader').delay(350).fadeOut('slow'); 
})



// Nav mobile menu function
const toggleButton = document.querySelector(".mobile_menu");
const navList = document.querySelector(".nav_list");

toggleButton.addEventListener('click',() =>{
   navList.classList.toggle('active');
})


// When user clicks anywhere outside of the modalPrivacy, close it


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header_top").style.top = "0";
    document.getElementById("header_top").style.background = "#848484";

  } else {
    document.getElementById("header_top").style.top = "0px";
    document.getElementById("header_top").style.background = "transparent";
  }
}


  // ======= Scroll-Up

  const scrollBtn = document.getElementById("scroll-up");
  const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});
