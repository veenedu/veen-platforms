/**
 * onSuccess(redirect_url) -> returns redirect url, you have to parse 
 * url based on service
 */

//TODO:  Check what happens when user closes popup window.

export function launchAuthFlow(formattedUrl, callbacks) {
  try {
    chrome.identity.launchWebAuthFlow({
      'url': formattedUrl,
      'interactive': true
    }, function (redirect_url) {

      //you get redirect URL
      callbacks.onSuccess(redirect_url);
    });
  } catch (e) {
    callbacks.onError();
  }
}
