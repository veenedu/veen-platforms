import axios from 'axios';

let PROXY_URL = null;

export function setXHRProxyUrl(proxyUrl){
  PROXY_URL =  proxyUrl;
}

export  function xhr(options){
  let config = {};
  let useProxy = !!options.useProxy;
  let proxyUrl = options.useProxy;
  delete options.useProxy;
  if(useProxy){
    let url = typeof(proxyUrl)==='string' ? proxyUrl : PROXY_URL;
    config = {
      url:url,
      data:options,
      method:'POST'
    }
  }else{
    config = options;
  }

  return axios(config);
}
