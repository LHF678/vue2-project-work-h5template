(function() {
  const resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  function recalc() {
    const { clientWidth } = document.documentElement;
    if (!clientWidth) return;
    document.documentElement.style.fontSize = `${clientWidth / 10}px`;
  }
  window.addEventListener('DOMContentLoaded', recalc);
  window.addEventListener(resizeEvt, recalc);
})();
