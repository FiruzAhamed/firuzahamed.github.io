/* Shared behaviour for all pages. */
(function () {
  'use strict';

  var nav = document.querySelector('.nav');
  var links = document.getElementById('navLinks');
  var toggle = document.getElementById('navToggle');
  var toTop = document.getElementById('toTop');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function onScroll() {
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 8);
    if (toTop) toTop.classList.toggle('is-visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Placeholder if an image path is missing, so layout never collapses.
  function placeholder(w, h, label) {
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
      '<rect fill="#eef2f4" width="' + w + '" height="' + h + '"/>' +
      '<text fill="#8b959f" font-family="IBM Plex Mono, monospace" font-size="13" text-anchor="middle" x="' + (w / 2) + '" y="' + (h / 2 + 5) + '">' + label + '</text></svg>'
    );
  }

  document.querySelectorAll('.portrait img').forEach(function (img) {
    img.onerror = function () { this.onerror = null; this.src = placeholder(400, 448, 'FN'); };
  });
  document.querySelectorAll('.event-photos img').forEach(function (img) {
    img.onerror = function () { this.onerror = null; this.src = placeholder(420, 260, 'Photo'); };
  });
})();
