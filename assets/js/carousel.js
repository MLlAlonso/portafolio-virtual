$(document).ready(function () {
  // Array with carousel ids
  var carousels = ["#carousel1", "#carousel2", "#carousel3", "#carousel4", "#carousel5"];
  
  carousels.forEach(function (carouselId) {
    // Set the carousel to slide automatically every 10 seconds
    $(carouselId + " .carousel").carousel({
      pause: "hover",
      interval: 10000 // 10 segs
    });

    // Get the initial image of the carousel
    var startImage = $(carouselId + " .carousel-item.active > img").attr("src");
    $(carouselId).append('<img src="' + startImage + '">');

    // Update the background image each time the carousel slides
    $(carouselId + " .carousel").on("slid.bs.carousel", function () {
      var bscn = $(this).find(".carousel-item.active > img").attr("src");
      $(carouselId + " > img").attr("src", bscn);
    });
  });
});
