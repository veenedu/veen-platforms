export function launchAuthFlow() {
  var webAuthBroker = Windows.Security.Authentication.Web.WebAuthenticationBroker;
  var webAuthOptions = Windows.Security.Authentication.Web.WebAuthenticationOptions;

  var startURI = new Windows.Foundation.Uri(formattedUrl);
  var endURI = new Windows.Foundation.Uri(getConfig().redirectUrl);

  webAuthBroker
    .authenticateAsync(webAuthOptions.none, startURI, endURI)
    .then(function (res) {
      console.log(res)
        //res.responseData is = redirect URL
    });;
}
