
$(document).ready(function()  {
    $('.button-1').click(function () {
        $('.jquery_popup').toggleClass('.open')
        $('body').toggleClass('.lock')
    })
    $('.exit').click(function () {
        $('.jquery_popup').toggleClass('.open')
        $('body').toggleClass('.lock')
    });
});

$(document).ready(function(){
    $(".js-button").click(function(){
      $(".section-5").toggle();
    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("section-3");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}