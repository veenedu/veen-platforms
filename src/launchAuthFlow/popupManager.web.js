/**
 * THIS CODE WILL ONLY EXIST IN bundles where .web is used
 */


const AUTH_WINDOW_NAME = "AUTHWINDOW";

/**
 * This code runs is child window
 * It gets invoked when service redirects back to your APP on successfull or errorneous login
 */
function handleRedirect() {
		if (window.name == AUTH_WINDOW_NAME || (window.opener && window.opener.handler)) {
				var url = window.location.href;
				window.opener.handler(url);
				window.close();
		}
}

handleRedirect();

/**
 * This code runs in parent window only till child is not closed
 */
var timeoutHandler;
function checkWindowClosed(w, callbacks) {
		timeoutHandler = setTimeout(function () {
				console.log('timeout');
				clearTimeout(timeoutHandler);
				if (w.closed) {
						callbacks.onCancel();
				} else {
						checkWindowClosed(w, callbacks)
				}
		}, 300);
}

/**
 * This code runs in parent Window
 */
function waitForRedirect(callbacks) {
		function handler(redirectUrl) {
				clearTimeout(timeoutHandler);
				window.handler = undefined; //remove window handler

				setTimeout(function () {
						callbacks.onSuccess(redirectUrl);
				}, 1);
		}

		return handler;
}

export function openPopup(formattedUrl, callbacks) {
		var myWindow = window.open(formattedUrl, AUTH_WINDOW_NAME, "width=600, height=400");

		//Handle Auto Close
		window.handler = waitForRedirect(callbacks);

		//Handle cancel
		checkWindowClosed(myWindow, callbacks);
}
