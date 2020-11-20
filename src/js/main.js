let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
