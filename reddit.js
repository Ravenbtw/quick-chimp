window.onload = () => {
  var url = new URL(window.location.href);
  if (url.searchParams.get('quickChimp') == 'true') {
    document.querySelector('.btn').click();
  }
}
