//THIS CODE WILL ONLY EXIST IN bundles where .web is used.


//This file handles redirect for all services.
//
const AUTH_WINDOW_NAME = "AUTHWINDOW";

function handleRedirect(){
	//This thing has got problem with chorme
	// if(window.name !== AUTH_WINDOW_NAME){
	// 	return true;
	// }



	var hash = window.location.hash;
	hash = hash.slice(1,hash.length);
	console.log(hash);

	var search = "";
	if(window.location.search){
	  var search1  =  window.location.search;
	  search = search1;
	}else{
	  var url = window.location.href;
	  var index = url.indexOf("?code");
	  var search2 = url.slice(index, url.length - 1);
	  search = search2;
	}

	var str = search.slice(1,search.length);
	var arr =  str.split("&");
	var obj = {};
	for(var i= 0 ; i< arr.length; i++){
	  var chunk = arr[i].split("=");
	  obj[chunk[0]] = chunk[1];
	}

	console.log(obj)

	if(Object.keys(obj).length > 1){
		if(window.opener && window.opener.handler){
		    window.opener.handler(obj);
		    window.close();
		}else{
		  var redirect_url = decodeURIComponent(obj.state);
		  var url = encodeURIComponent(window.location.href);
		  console.log(redirect_url);
		  window.location =redirect_url + "/provider_cb#authToken="+url;
		}
	}

}

handleRedirect();




function waitForRedirect(callbacks){

	function handler(res){
	  //here because window might get closed by successfull/error login
	  clearTimeout(timeoutHandler);
	  window.handler = undefined; //remove window handler
	  // res.code
	  // res.state

		if(res.error){
			//This should call error, auth error or unknown
			callbacks.onError();
		}else{
			//time to get token
			setTimeout(function(){
				callbacks.onSuccess(res);
			},1);
		}
	}

	return handler;
}

var timeoutHandler;
function checkWindowClosed(w,callbacks){
  timeoutHandler= setTimeout(function(){
    console.log('timeout');
		clearTimeout(timeoutHandler);
    if(w.closed){
      callbacks.onCancel();
    }else{
      checkWindowClosed(w,callbacks)
    }
  },300);
}


export function openPopup(formattedUrl,callbacks){
	var myWindow = window.open(formattedUrl, AUTH_WINDOW_NAME, "width=600, height=400");

	//Handle Auto Close
	window.handler =  waitForRedirect(callbacks);

	//Handle cancel
	checkWindowClosed(myWindow,callbacks);
}




//<FEEDLY URLs>

//this is recevied at redirected url
//http://localhost:8080/?code=A2jpwzbc6AbOMbL9YBe34MfgO1YMmTya9KWAqG3x5oVBV_ZUC86mSV1pOZVpCZlsOVv2N4UO2R1d6nlF5F9N3X1IkEhG3nClyhpjWLBFWHvuRp3c5P_TS-xpV_ooi7g-_TD7_zdC1901RiecEo2ke7j3UYj0h30rQ-72pi3hBLBXmqMIs6sMa6pgdn8&state=http%3A%2F%2Flocalhost%3A8080%2F#

//this is  prompt
//https://cloud.feedly.com/v3/auth/auth?client_id=veenhub&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2F&response_type=code&scope=https://cloud.feedly.com/subscriptions&state=http%3A%2F%2Flocalhost%3A8080%2F


//</FEEDLY URLs>


//<Twitter URL>
////redirect on success url
// http://localhost:8080/undefined/provider_cb#authToken=http://localhost:8080/?oauth_token=d1N97QAAAAAAiR2jAAABWURqTeE&oauth_verifier=MK1sgnOmstwEwfKrePDbc74RorbGlQdI
