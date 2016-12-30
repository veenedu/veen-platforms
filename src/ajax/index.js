let PROXY_URL = null;

/**
 * This sets proxy for web requests
 */
export function setProxyUrl(proxyUrl){
  PROXY_URL =  proxyUrl;
}

/**
 * Normalizes ajax options before send to ajax.
 * adds proxy info if needed
 * 'useProxy' is not there in returned object
 */
export  function normalizeAjaxOptions(options){
  let config = {};
  let o = {...options};
  let useProxy = !!o.useProxy;
  let proxyUrl = o.useProxy;
  delete o.useProxy;
  if(useProxy){
    let url = typeof(proxyUrl)==='string' ? proxyUrl : PROXY_URL;
    config = {
      url:url,
      data:o,
      method:'POST'
    }
  }else{
    config = o;
  }

  return config;
}
