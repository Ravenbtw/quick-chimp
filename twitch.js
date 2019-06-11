window.onload = function() {
  var metaTags = document.getElementsByTagName('meta');
  var clipURL = '';





  var loadButton = setInterval(function() {
    if (document.getElementsByClassName('tw-align-items-center tw-flex tw-justify-content-between tw-pd-t-1')[0]) {
      if (!document.getElementById('quickChimpButton')) {
        console.log("doesn't exist");
        document.getElementsByClassName('tw-align-items-center tw-flex tw-justify-content-between tw-pd-t-1')[0].insertAdjacentHTML('afterend','<p id="quickChimpButton" style="cursor: pointer; padding: 5px; font-size: 25px; background-color:#ff4500; text-align: center; color: white; margin-top: 10px; border-radius: 5px; line-height: 50px;"><img height="50px" src="https://i.imgur.com/yAy3SuP.png">Publish and post to r/LivestreamFail<img height="50px" src="https://i.imgur.com/yAy3SuP.png"></p>');

      } else {
        console.log("exists");
        clearInterval(loadButton);
        document.getElementById('quickChimpButton').addEventListener('click', function() {
        document.getElementsByClassName('tw-align-items-center tw-align-middle tw-border-bottom-left-radius-large tw-border-bottom-right-radius-large tw-border-top-left-radius-large tw-border-top-right-radius-large tw-core-button tw-core-button--border tw-core-button--large tw-core-button--padded tw-core-button--primary tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative')[0].click();
          if (!document.getElementsByClassName('tw-block tw-border-bottom-left-radius-large tw-border-bottom-right-radius-large tw-border-top-left-radius-large tw-border-top-right-radius-large tw-font-size-4 tw-full-width tw-input tw-input--large tw-pd-l-1 tw-pd-r-1 tw-pd-y-05')[0].getAttribute('value') == "") {
            for (var i = 0; i < metaTags.length; i++) {
              if (metaTags[i].getAttribute('property') == 'og:url') {
                var postURL = 'https://old.reddit.com/r/livestreamfail/submit?url=' + metaTags[i].getAttribute('content').slice(0,-5) + '&title=' + document.getElementsByClassName('tw-block tw-border-bottom-left-radius-large tw-border-bottom-right-radius-large tw-border-top-left-radius-large tw-border-top-right-radius-large tw-font-size-4 tw-full-width tw-input tw-input--large tw-pd-l-1 tw-pd-r-1 tw-pd-y-05')[0].getAttribute('value') + '&quickChimp=true';
                window.open(postURL);
                break;
              }
            }
          }
        })
      }
    }
  },500);
}
