window.onload = function() {
  var metaTags = document.getElementsByTagName('meta');
  var clipURL = '';


  for (var i = 0; i < metaTags.length; i++) {

    if (metaTags[i].getAttribute('property') == 'og:url') {
      var postURL = 'https://www.reddit.com/r/livestreamfail/submit?url=' + metaTags[i].getAttribute('content').slice(0,-5) + '&title=' + document.getElementsByClassName('tw-block tw-border-bottom-left-radius-large tw-border-bottom-right-radius-large tw-border-top-left-radius-large tw-border-top-right-radius-large tw-font-size-4 tw-full-width tw-input tw-input--large tw-pd-l-1 tw-pd-r-1 tw-pd-y-05')[0].getAttribute('value');
      window.open(postURL);
      break;
    }
  }

  var buttonLoaded = false;

  var loadButton = setInterval(function() {
    if (document.getElementById('quickChimpButton')) {
      console.log("exists");
    } else {
      console.log("doesn't exist");
      document.getElementsByClassName('tw-align-items-center tw-flex tw-justify-content-between tw-pd-t-1')[document.getElementsByClassName('tw-align-items-center tw-flex tw-justify-content-between').length - 1].insertAdjacentHTML('beforeend','<div class="tw-pd-l-1" id="quickChimpButton"><div class=""><button class="tw-align-items-center tw-align-middle tw-border-bottom-left-radius-large tw-border-bottom-right-radius-large tw-border-top-left-radius-large tw-border-top-right-radius-large tw-core-button tw-core-button--border tw-core-button--large tw-core-button--padded tw-core-button--primary tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative"><div class="tw-align-items-center tw-flex tw-flex-grow-0"><div data-a-target="tw-core-button-label-text" class="tw-flex-grow-0">Publish</div></div></button></div></div>');
        clearInterval(loadButton);
    }

  },500);

}
