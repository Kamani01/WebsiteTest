(function () {
  var car = document.querySelector('.bg-car');
  if (!car) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    car.style.transform = 'translate3d(calc(50vw - 140px), -50%, 0)';
    return;
  }
  function drive() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    var x = -42 + p * 62;
    car.style.transform = 'translate3d(' + x + 'vw, -50%, 0)';
    car.style.opacity = String(0.16 + p * 0.18);
  }
  window.addEventListener('scroll', drive, { passive: true });
  window.addEventListener('resize', drive);
  drive();
})();
