// Script File
// js for title change on opening new tab
let doctitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Please Come Back :(";
});
window.addEventListener("focus", () => {
  document.title = doctitle;
});

// Home Section Starts
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".nav-links");
var menuLinks = document.querySelectorAll(".nav-links li a");

menuBtn.addEventListener("click", activeClass);

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", menuItemClicked);
}

function menuItemClicked() {
  menuBtn.classList.remove("active");
  menu.classList.remove("active");
}

var homeSection = document.querySelector(".home");
window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}
// Home Section Ends

// Project Section Starts
var $galleryContainer = $(".gallery").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows",
});

$(".button-group .button").on("click", function () {
  $(".button-group .button").removeClass("active");
  $(this).addClass("active");

  var value = $(this).attr("data-filter");
  $galleryContainer.isotope({
    filter: value,
  });
});

// magnific popup
$(".gallery").magnificPopup({
  delegate: ".overlay a",
  type: "image",
  gallery: {
    enabled: true,
  },
});
// Project Section Ends

