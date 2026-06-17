document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    // Options go here
    dist: -50, // Perspective zoom (negative values bring back cards forward)
    shift: 0,  // Spacing between items
    padding: 20
  });
});