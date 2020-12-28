window.onload = function() {
  var metaTags = document.getElementsByTagName('meta');

  var loadButton = setInterval(function() {
    if (document.querySelector('.clips-editor-slider-background.tw-mg-y-4')) {
      if (!document.querySelector('.quickChimpButton')) {
        document.querySelector('.tw-align-items-center.tw-flex.tw-justify-content-between.tw-pd-t-1').insertAdjacentHTML('afterend','<p class="quickChimpButton" style="cursor: pointer; padding: 5px; font-size: 25px; background-color:#ff4500; text-align: center; color: white; margin-top: 10px; border-radius: 5px;">Post to r/LivestreamFail</p>');
      } else {
        clearInterval(loadButton);
        document.querySelector('.quickChimpButton').onclick = () => {
          if (!document.querySelector('.tw-block.tw-border-bottom-left-radius-large.tw-border-bottom-right-radius-large.tw-border-top-left-radius-large.tw-border-top-right-radius-large.tw-font-size-5.tw-full-width.tw-input.tw-input--large.tw-pd-l-1.tw-pd-r-1.tw-pd-y-05').getAttribute('value') == '') {
            for (var i = 0; i < metaTags.length; i++) {
              if (metaTags[i].getAttribute('property') == 'og:url') {
                var postURL = `https://old.reddit.com/r/livestreamfail/submit?url=${metaTags[i].getAttribute('content').slice(0,-5)}&title=${document.querySelector('.tw-block.tw-border-bottom-left-radius-large.tw-border-bottom-right-radius-large.tw-border-top-left-radius-large.tw-border-top-right-radius-large.tw-font-size-5.tw-full-width.tw-input.tw-input--large.tw-pd-l-1.tw-pd-r-1.tw-pd-y-05').getAttribute('value')}&quickChimp=true`;
                window.open(postURL);
                break;
              }
            }
          }
        }
      }
    }
  }, 500);
}
