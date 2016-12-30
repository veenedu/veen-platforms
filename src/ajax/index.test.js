import {assert} from 'chai';
import {setProxyUrl,normalizeAjaxOptions} from './index.js'


describe('Ajax',function() {

  it('Same options are returned when no/non-string proxy information passed',function(){
    let options1  = {a:1};
    let proxyOptions1 = normalizeAjaxOptions(options1);

    let options2  = {a:1,useProxy:undefined};
    let proxyOptions2 = normalizeAjaxOptions(options2);

    let options3  = {a:1,useProxy:null};
    let org_options3 = {...options3};
    let proxyOptions3 = normalizeAjaxOptions(options3);


    assert.deepEqual(options1,proxyOptions1);
    assert.deepEqual(options1,proxyOptions2);
    assert.deepEqual(options1,proxyOptions3);
    assert.deepEqual(options3,org_options3,'Orginal options are not mutated');
  });

  it('Request is proxied when useProxy=url',function(){
    let options  = {a:1 ,useProxy:'http://google.com'};
    let proxyOptions = normalizeAjaxOptions(options);
    assert.deepEqual({
      method:'POST',
      url:'http://google.com',
      data:{
        a:1
      }
    },proxyOptions);
  });

  it('Request can be  proxied by setting proxy url once',function(){
    setProxyUrl('http://google.com');
    let options1  = {a:1 ,useProxy:true};
    let options2  = {a:1 ,useProxy:false};
    let proxyOptions1 = normalizeAjaxOptions(options1);
    let proxyOptions2 = normalizeAjaxOptions(options2);
    assert.deepEqual({
      method:'POST',
      url:'http://google.com',
      data:{
        a:1
      }
    },proxyOptions1,'options proxied');

    assert.deepEqual({a:1},proxyOptions2,'options are returned as it it');
  });



})
