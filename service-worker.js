/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/01/13/Mac上好用的敲代码软件CodeRunner/index.html","a475bb21c4014b2ab8ec90876980fc12"],["2020/01/13/我的第一篇博客文章/index.html","385c858b9e35db2e38bd857050dc2502"],["2020/01/19/leeCode报错问题1/index.html","59e5193e3c5dc5e192eedf3796dd872f"],["2020/01/19/汉诺塔递归实现c语言版/index.html","94278a3063168049f82329f7ce624d09"],["2020/01/20/DailyLife--Jan--20th/index.html","420c4f135525ca4b774bb366c25d71db"],["2020/01/20/哈夫曼树--修理牧场/index.html","23b9000398fe10b5ffc98fdb620b2a9a"],["2020/01/20/树种统计/index.html","d23b19e41bd2fc9431c5948e5bb1abcb"],["2020/01/21/寒假计划与每日完成情况/index.html","c277efca914933dabf6ba4acc4cc784a"],["2020/01/21/汉诺塔非递归实现c语言版/index.html","0c4839d7b6b08773bdfbe1055422d52b"],["2020/01/30/swift基本运算符/index.html","efdc562e854818079d8ff8dcc1d5d8f5"],["2020/01/30/关于C指针——和指针的第一次亲密接触/index.html","6bf6c548d21f9712ee32baf15459f6b8"],["2020/01/30/深度优先遍历/index.html","7eca65518a4e0ef8c680bdf6642d5004"],["2020/02/01/Mac自定义各个应用快捷键/index.html","2e7aa8b9e1bc6c73e5e902a0ceb8ab8a"],["2020/02/02/C指针问题之不同类型指针之间的区别/index.html","de2f5c8896d12f0476e5465570e199d2"],["2020/02/03/vim基础操作+配置文件设置/index.html","fc0a8cd46112c7029faac048b691936f"],["2020/02/04/hello-world/index.html","12e307c4debb9104772bbb44f4c1d415"],["2020/02/05/Mac修改键盘之将大小写锁定修改esc/index.html","4692e13eed2a9e164c7268d317cae258"],["2020/02/07/Codeblocks中文乱码解决方法/index.html","e7b85c26e80c5c0acc95d385adaf9d2d"],["2020/02/09/swiftui与uikit交互/index.html","ffcac60a37849f440eac3f391b0ffa5d"],["2020/02/10/2020-02-10日记/index.html","856bb45c7a7532f65d94ea9d0dc9dad4"],["2020/02/11/2020-02-11日记/index.html","e15a2116519ce4bff1d388527006d1c8"],["2020/02/12/word中如何加入带√的小方块/index.html","538aa2d59e85f9c5171e39a3ec0b914c"],["Gallery/index.html","69d0b0b8274eafd80369a1b3d2f41541"],["about/index.html","6857f0534cb964ef88a8d0565045b39f"],["archives/2020/01/index.html","7e3495eab51a948705e58da37e9ddb27"],["archives/2020/01/page/2/index.html","a1b8bcf461f88adc4eabb40f95821396"],["archives/2020/02/index.html","064c6bd3bb9a771ebd78767717b811c0"],["archives/2020/index.html","0f5883a7278df5888e66b20a285a68e5"],["archives/2020/page/2/index.html","413762e060bd4540590928dec0662528"],["archives/2020/page/3/index.html","95494ce15a33485c61b33cc520c14677"],["archives/index.html","fe3e67a4abdfa9d21fe28078a7b1ce9e"],["archives/page/2/index.html","862a3f3bc06561e35afe5510261b95a2"],["archives/page/3/index.html","0bbdd4fe5fa798773697f09019ea3a35"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Hexo博客/index.html","da5b27941058704b449ca9a4e2eb798a"],["categories/IOS开发/index.html","b4848cc94dbcd1f8658c63c009ec8f0a"],["categories/Mac骚操作/index.html","ce84b9e71fc39408b08f6291e698ae86"],["categories/Microsoft技能/index.html","3f9685eec005ffb85a28a49712bfb5d6"],["categories/My-Daily-Life/index.html","93f0c8b722c3b890bf51fb30c6a59869"],["categories/index.html","d2af92b4e9457c2f6c91276d47729811"],["categories/征服C指针/index.html","77bc22c2d98d677a316dd5d167151fd2"],["categories/算法题/index.html","81c16a6ff9e79ae91a9b169103849c70"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/index.css","5877fd2a673598684c409cefbb359260"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/My avatar.jpg","453f80c19226ba6fca2261b0c7b3bc9d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/img_0164.jpg","7f1476645ed9860607c403b2af20c051"],["img/img_0165.jpg","3b862ec70a3ab1688e143e8720ff3fc4"],["img/img_0166.jpg","6e5291e2d7d0e800e09f3f2f9954b357"],["img/img_0167.jpg","998066d3647ace1084c6eae73b4c2390"],["img/img_0168.jpg","b8231a75edd970df0c5b6ac5c5cd9083"],["img/img_0169.jpg","d9ff1edbde894331a635f0d693bb5a19"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","e4bc6c9146ac40f55306c11a39d75151"],["js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["link/index.html","e6974039cfe88310c1725915651abee6"],["messageboard/index.html","27b72ce2d348a58e864c14e25576574b"],["movies/index.html","6f84f3349459c2f48f4e787203261113"],["music/index.html","e634856f6ad4ed0801ba4d6b8c4f047e"],["page/2/index.html","72d75c93c12b659b21cc092dd8375b3b"],["page/3/index.html","a0c1aa199a6b7e031ee54e2524fc2f18"],["tags/C指针/index.html","283fbdfbdf2c83d1a9a66706bb8935be"],["tags/Hexo/index.html","c337be171d8e9f2fa2a992bb595b63da"],["tags/LeeCode/index.html","d485804b24040273e763b2e89f02ecbd"],["tags/Mac/index.html","db05101bb5b9101c3fb1070d757e0ff1"],["tags/PTA/index.html","2c3d89d11f21dab6c12caab6f5cdf99b"],["tags/index.html","426a98236186205d6ea840a93ff9498b"],["tags/mac与windows兼容性/index.html","ca13d01c6e2a8fa22888c3499424c9c7"],["tags/swift/index.html","0ae578f620bac11844a09c50594ccc49"],["tags/swiftUI/index.html","2429829b57f4a6b2590dbe2faa14ee7e"],["tags/vim/index.html","d3d26b20d905985ed4cc42a5665236f6"],["tags/word技巧/index.html","fb3f44af5767c43fb194273bcdf64cc8"],["tags/寒假终极计划/index.html","4d9a0b7607c59c871f23bb544c421508"],["tags/数据结构/index.html","2d3d2de79f3f0a2cac02ad3d91679bd7"],["tags/日记/index.html","fa308f73cba6a45e644fc1f8c34db628"],["tags/算法/index.html","33b11074a69e3b19eca64d76e8a43c40"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







