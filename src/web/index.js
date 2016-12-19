import init from './database/init';
import {xhr,setXHRProxyUrl} from '../base/xhr.js';

var platform = {
  getKey:function(){
    return "web";
  },

  xhr: xhr,

  setXHRProxyUrl: setXHRProxyUrl,

  dbInit:init
}

export default platform;
