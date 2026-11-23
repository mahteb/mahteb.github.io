// Light/dark toggle. Remembers the choice in this browser only.
(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem('theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var cur = root.getAttribute('data-theme');
      if (!cur) cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
