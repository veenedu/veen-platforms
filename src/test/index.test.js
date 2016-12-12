import {assert} from 'chai';
import {web,android,ios} from '../'

var platforms = {
  web:web,
  android: android,
  ios:ios
};
var testingPlatformsCount = Object.keys(platforms).length;
var platformsTested = 0;


describe('Testing platforms =>',function(){

  for (var key in platforms) {
    platformsTested++
    var platform = platforms[key];

    describe(key + "=>",function(){

      //it should export platform
      it('should export '+key,function(){
        assert.isDefined(platform, key+' has been exported');
      });

      //
      it('should have a function getKey()',function(){
        assert.isFunction(platform.getKey,'getKey() is function');
      });

      //
      it('platform key should be string',function(){
        assert.isString(platform.getKey(), ' key is string');
      });

      //
      it('should have a propery xhr',function(){
        assert.isDefined(platform.xhr,'xhr is exported');
      });

      //
      it('should have a function xhr()',function(){
        assert.isFunction(platform.xhr,'xhr is function')
      });

      //
      it('should have a function dbInit', function(){
          assert.isFunction(platform.dbInit,'dbInit is a function');
      });



      //
      it('xhr() should make web request',function(done){
        this.timeout(15000);//timeout for web request
        platform.xhr({
            method: 'get',
            url: 'https://google.com'
          }).then(function(res){
            console.log(res.status,'HTTP: Request status');
            assert.equal(1,1,'xhr made ajax request successfully!!');
            done();
          }).catch(function(res){
            assert.equal(1,2,'xhr could not make xhr request');
            done();
          })
      });

      //New statement
    });
  }
});



describe('Test all platforms are tested',function(){
  it('should check total platforms equal platform tested',function(){
    assert.equal(testingPlatformsCount,platformsTested,'All Platforms tested');
  })
})
