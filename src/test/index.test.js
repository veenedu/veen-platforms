// import {assert} from 'chai';
// import {web,android,ios} from '../'
//
// var platforms = {
//   web:web,
//   android: android,
//   ios:ios
// };
// var methods = ['getKey'
//     ,'setAjaxProxyUrl','getAjaxOptions','launchAuthFlow'
// ];
// var testingPlatformsCount = Object.keys(platforms).length;
// var platformsTested = 0;
//
//
// describe('Testing platforms exposed correctly',function(){
//
//   for (let key in platforms) {
//     let platform = platforms[key];
//
//     describe(key + "=>",function(){
//
//       //it should export platform
//       it('should export '+key,function(){
//         assert.isDefined(platform, key+' has been exported');
//       });
//
//
//       describe('Platform should have following methods',function(){
//         for (let i = 0; i < methods.length; i++) {
//           let methodName = methods[i];
//           let method = platform[methodName];
//
//           it('should have a function '+methodName+'()',function(){
//             assert.isFunction(method, methodName+'() is function');
//           });
//         }
//       });
//
//
//     });
//   }
//
// });
//
//
// describe('Testing platforms =>',function(){
//
//   for (let key in platforms) {
//
//     let platform = platforms[key];
//     describe(key + "=>",function(){
//
//       //Here you test behavior of methods
//       //
//       it('platform key should be string',function(){
//         assert.isString(platform.getKey(), ' key is string');
//       });
//
//
//     });
//   }
//
// });
//
//
//
// // describe('Test all platforms are tested',function(){
// //   it('should check total platforms equal platform tested',function(){
// //     assert.equal(testingPlatformsCount,platformsTested,'All Platforms tested');
// //   })
// // })
