# Veen Platform

Provides common interface for multiple platforms.


---

## XHR

Use XHR to make web requests. Its' a very lightweight wrapper that wraps axios (https://github.com/mzabriskie/axios)

###### Why to use it?
> - Different devices/platforms have different ways to make web requests
> - We are trying to provide common interface for all reuqests
> - Cross browser requests are still a problem (yes we know we have CORS)
> - For cross browser requests we need to set up a proxy server, and repeat the code, with this we do it once.


#### Examples

Sample domain request
```js
import {web} from 'veen-platforms'
web.xhr(options)
```

Cross domain requests
```js
import {web} from 'veen-platforms'

#Method 1
web.setXHRProxyUrl('your_proxy_server_url');
var options= {
	url:'some_other_server_url',
    useProxy:true,
    data:{...}
};
web.ajax(options);

//->With this method you set proxy server once, and use it in subsequest requests. by setting property 'useProxy:true'


#Method 2
var options= {
	url:'some_other_server_url',
    useProxy:'your_proxy_server_url'
};
web.ajax(options)

//->This method is usefull to override or default proxy server, or make one time request.

```

##### Proxy server

For web proxyserver should run on same origin as host. Requests to proxy servers are made thorugh 'POST' method.

A sample node.js proxy server (server is based on express.js)

```js
app.post('/p/webrequest',function(req,res){
  var options  = req.body;
  axios(options).then(function(result){
    res.setHeader('Content-Type', 'application/json');
    res.send(result.data);
  }).catch(function(e){
    console.log(e);
  });
});

```
