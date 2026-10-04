(function () {
  if (window.CSS && CSS.supports('animation-timeline', 'scroll()')) return;
  var car = document.querySelector('.bg-car');
  if (!car) return;
  function drive() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    car.style.transform = 'translate3d(' + (-42 + p * 62) + 'vw, -50%, 0)';
  }
  window.addEventListener('scroll', drive, { passive: true });
  drive();
})();
