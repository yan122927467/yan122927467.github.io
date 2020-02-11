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

var precacheConfig = [["2020/01/13/Mac上好用的敲代码软件CodeRunner/index.html","4db0620cc6c39bed3284de547d0d5936"],["2020/01/13/我的第一篇博客文章/index.html","f595d53124fd4265b5a3fcb667527c9c"],["2020/01/19/leeCode报错问题1/index.html","a631c0cf63c4ba88ef0464c42ace3512"],["2020/01/19/汉诺塔递归实现c语言版/index.html","a9b295d84437ce27e072e9d6a88e1fe9"],["2020/01/20/DailyLife--Jan--20th/index.html","9e3afd3461d3e48a4507b93b446eae5f"],["2020/01/20/哈夫曼树--修理牧场/index.html","3c6f4c0505918ab743818a5d5b70f161"],["2020/01/20/树种统计/index.html","c59db99f451d2556ac602f72d41eadf3"],["2020/01/21/寒假计划与每日完成情况/index.html","e6d9ccba725e033f374bab400ea98656"],["2020/01/21/汉诺塔非递归实现c语言版/index.html","c2a4614b2dcaa7877be95077448b456c"],["2020/01/30/swift基本运算符/index.html","91fd66a45a153a3189623393c056ae4d"],["2020/01/30/关于C指针——和指针的第一次亲密接触/index.html","0429ae3134eee7cb0e1e45d3d35476b9"],["2020/01/30/深度优先遍历/index.html","f5372a788351e0da62ed7adaf12302b4"],["2020/02/01/Mac自定义各个应用快捷键/index.html","98cedc810972997f92ec80689870cca3"],["2020/02/02/C指针问题之不同类型指针之间的区别/index.html","5cc3f4b4663c388de127a9efe87b22e3"],["2020/02/03/vim基础操作+配置文件设置/index.html","b311da2ea36d7ca650f59f4b22e5410a"],["2020/02/04/hello-world/index.html","1560aa6f3d7f42930b6be67e875e5711"],["2020/02/05/Mac修改键盘之将大小写锁定修改esc/index.html","909ce7cb9128091d3401331bf9c2320e"],["2020/02/07/Codeblocks中文乱码解决方法/index.html","71ef34612b4eb30544bac5f6420f3ed5"],["2020/02/09/swiftui与uikit交互/index.html","9412e5d71950363d4d985099584f4761"],["2020/02/10/2020-02-10日记/index.html","acb57549acdd14acbf56fc9cef426264"],["Gallery/index.html","2008f9b8cb9972edbc826604bf07d151"],["about/index.html","3f20fec725033b9424558ba5037338ee"],["archives/2020/01/index.html","3aad5cb10c35d2dcb907e2d3f9760ad6"],["archives/2020/01/page/2/index.html","d167f1edba4e224021722f82f5906f5a"],["archives/2020/02/index.html","9ce9d7fe807a2a9860e48cebea8af85f"],["archives/2020/index.html","e16f01098845968b88d7cf74442d99af"],["archives/2020/page/2/index.html","89fd934b287fb4d67a81c34484005641"],["archives/index.html","aed2a118103e55c34da8c7ee6f134a96"],["archives/page/2/index.html","c0cefd60fbd37a86386f2a3d50fe6c54"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Hexo博客/index.html","2777812d9a52e4d33e459c84031e45a0"],["categories/IOS开发/index.html","3fe9edaedfc3cc709cc63e1767b65095"],["categories/Mac骚操作/index.html","531c32422bd21a3a585f5c27280f7472"],["categories/My-Daily-Life/index.html","2cd6da9afe381b432b69aabd25f6246d"],["categories/index.html","ef31f3586b80cba9cd4be32d361eb3d6"],["categories/征服C指针/index.html","588b38dc5f4651c0802c008a50ebd023"],["categories/算法题/index.html","a2e7b7b63cae64e0348c9e8876bd2787"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/index.css","5877fd2a673598684c409cefbb359260"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/My avatar.jpg","453f80c19226ba6fca2261b0c7b3bc9d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/img_0164.jpg","7f1476645ed9860607c403b2af20c051"],["img/img_0165.jpg","3b862ec70a3ab1688e143e8720ff3fc4"],["img/img_0166.jpg","6e5291e2d7d0e800e09f3f2f9954b357"],["img/img_0167.jpg","998066d3647ace1084c6eae73b4c2390"],["img/img_0168.jpg","b8231a75edd970df0c5b6ac5c5cd9083"],["img/img_0169.jpg","d9ff1edbde894331a635f0d693bb5a19"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","a215111061a6b13cbb4c0a4c3bfd7fa2"],["js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["link/index.html","beaf51a7014698ef60256a0867f2e33a"],["messageboard/index.html","624eb485165cb7689206b61a4871a183"],["movies/index.html","49aadf49f50a025407a00ae86c70c82b"],["music/index.html","657f7b8feada8e2aa08c168e78e41bea"],["page/2/index.html","7e66133d4f7b1d911cd2b0ffca649d68"],["tags/C指针/index.html","d610a726903bc2ef03b2a73b74d923de"],["tags/Hexo/index.html","d01d93db65b4d97fcf612539d42bc34f"],["tags/LeeCode/index.html","b4d84906b3df16e75bb249f8f818901d"],["tags/Mac/index.html","3930db7fbced705421d69434ed13beb7"],["tags/PTA/index.html","66f4c74958519833365bac47ac24f5ed"],["tags/index.html","6b60a0144dc8893b2abb970a700f3fa1"],["tags/mac与windows兼容性/index.html","3abae0d1c8c3b77bc34283b943a3fa2f"],["tags/swift/index.html","08c1c96b8e3db2fd6a15c92533328068"],["tags/swiftUI/index.html","a79aaeb7f20f379ad8849cbec0b44def"],["tags/vim/index.html","1bcfd41aa21297a79f001b98daf1e594"],["tags/寒假终极计划/index.html","4c9484db602b4a1c913e070b9871489c"],["tags/数据结构/index.html","31e4a267bd325667cead27cfb9889801"],["tags/日记/index.html","efaaf4eadfc27731d31e2dba3b43a2f4"],["tags/算法/index.html","e820d8d5cf152b580310915e16bdad88"]];
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







