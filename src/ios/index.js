import axios from 'axios';

var platform = {
  getKey:function(){
    return "ios";
  },

  xhr: axios
}

export default platform;
