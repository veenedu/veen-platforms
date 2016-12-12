import axios from 'axios';

var platform = {
  getKey:function(){
    return "android";
  },

  xhr: axios
}

export default platform;
