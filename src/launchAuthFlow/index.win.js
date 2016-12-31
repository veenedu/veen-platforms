/**
 * callbacks -> has 3 mthods to call
 * onSucsess, onError, onCancel
 * onSuccess(redirect_url) -> returns redirect url, you have to parse 
 * url based on service
 */

//TODO:  Check what happens when user closes popup window.
export function launchAuthFlow(formattedUrl, callbacks) {
  var webAuthBroker = Windows.Security.Authentication.Web.WebAuthenticationBroker;
  var webAuthOptions = Windows.Security.Authentication.Web.WebAuthenticationOptions;

  var startURI = new Windows.Foundation.Uri(formattedUrl);
  var endURI = new Windows.Foundation.Uri(getConfig().redirectUrl);

  webAuthBroker
    .authenticateAsync(webAuthOptions.none, startURI, endURI)
    .then(function (res) {
      console.log(res)
        //res.responseData is = redirect URL
        callbacks.onSuccess(res.responseData);
    });;
}
