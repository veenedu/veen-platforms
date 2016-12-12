import axios from 'axios';

var platform = {
  getKey:function(){
    return "web";
  },

  xhr: axios
}

export default platform;
