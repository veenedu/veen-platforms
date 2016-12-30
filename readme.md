# Veen Platform

Provides common interface for multiple platforms.


---

### How to use

```js
import {web} from 'veen-platforms'
web.getKey() //This returns platfor key, a string.
```

### Platforms

web, ios, android


# API

* getKey()
* setProxyUrl
* normalizeAjaxOptions
* launchAuthFlow

### setProxyUrl, normalizeAjaxOptions

A little utility to proxy web requests. You can use any ajax libabry to make web requets, which follows the same options as ('axios')[https://github.com/mzabriskie/axios].   There are 2 ways normalize ajax options

```js
import {web} from 'veen-platforms'
import axios from 'axios';

//Method 1
//Proxy a single request

var options= {
    url:'some_other_server_url',
    useProxy:'your_proxy_server_url',//proxy server
    data:{...}
};

axios(web.normalizeAjaxOptions(options));


//Method 2
//Set proxy once and just tell in request
web.setProxyUrl('your_proxy_server_url');

var options= {
    url:'some_other_server_url',
    useProxy:true,
    data:{...}
};


axios(web.normalizeAjaxOptions(options));

```

You Should always normaliz the ajax requests, when `useProxy` is missing in options, options are return as it it.




##### A sample Proxy server

For web, proxy-server should run on same origin as host. Requests to proxy servers are made thorugh 'POST' method.

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
