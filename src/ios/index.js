import axios from 'axios';
import init from './database/init';

var platform = {
  getKey:function(){
    return "ios";
  },

  xhr: axios,

  dbInit: init
}

export default platform;
