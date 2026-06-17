document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    duration: 200,      // Transition transition time
    dist: -100,         // Perspective zoom. Play with this for card depth!
    shift: 0,           // Space between cards
    padding: 0,         // Padding between cards
    numVisible: 5,      // Number of visible items
    indicators: true    // Shows the little slide dots at the bottom
  });
});