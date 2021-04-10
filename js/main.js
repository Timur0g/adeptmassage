document.addEventListener('DOMContentLoaded', function() {
    M.Slider.init(document.querySelectorAll('.slider_top'), {indicators: false, duration: 1500, interval: 4000});
    M.Carousel.init(document.querySelectorAll('.carousel_sertificat'));
    var instance_carousel_sertificat = M.Carousel.getInstance(document.querySelector('.carousel_sertificat'));
    document.querySelector('#arrow_forward').addEventListener('click', () => instance_carousel_sertificat.next());
    document.querySelector('#arrow_back').addEventListener('click', () => instance_carousel_sertificat.prev());
    M.Parallax.init(document.querySelectorAll('.parallax'));
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.display = "block";
  } else {
    document.querySelector("nav").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}
