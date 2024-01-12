let inicio = () => {
  $(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      centerMode: true,
      centerPadding: "0",
      variableWidth: true,
    });
  });
};
window.addEventListener("DOMContentLoaded", inicio);
