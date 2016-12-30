export function launchAuthFlow(formattedUrl, callbacks) {
  try {
    chrome.identity.launchWebAuthFlow({
      'url': formattedUrl,
      'interactive': true
    }, function (redirect_url) {

      //you get redirect URL

      var a = redirect_url.split("#")[1];
      var url = decodeURIComponent(a.split("=")[1]);
      var index = url.indexOf("?code");
      var search = url.slice(index, url.length - 1);
      var str = search.slice(1, search.length);
      var arr = str.split("&");
      var obj = {};
      for (var i = 0; i < arr.length; i++) {
        var chunk = arr[i].split("=");
        obj[chunk[0]] = chunk[1];
      }

      callbacks.onSuccess(obj);
    });
  } catch (e) {
    console.log('2');
    console.log(e);
  }
}
