import init from './database/init';
import xhr from '../base/xhr.js';

var platform = {
  getKey:function(){
    return "web";
  },

  xhr: xhr,

  setXHRProxyUrl: function(proxyUrl){
    PROXY_URL =  proxyUrl;
  },

  dbInit:init
}

export default platform;
