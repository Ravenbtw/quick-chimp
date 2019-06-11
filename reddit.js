window.onload = function() {
  var url = new URL(window.location.href);
  if (url.searchParams.get('quickChimp') == "true") {
    document.getElementsByClassName('btn')[0].click();
  } else {
    console.log("THIS IS NOT A CHIMP");
  }
}
