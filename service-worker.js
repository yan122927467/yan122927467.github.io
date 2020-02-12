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

var precacheConfig = [["2020/01/13/Mac上好用的敲代码软件CodeRunner/index.html","2800d0a09849e8f2de40b44edff23fbf"],["2020/01/13/我的第一篇博客文章/index.html","cb2db08ebe15e67223bfb79d59556980"],["2020/01/19/leeCode报错问题1/index.html","083a5d96609921412d4112ea86dd321f"],["2020/01/19/汉诺塔递归实现c语言版/index.html","5e8330ea35e51c4bb98196869dcab29b"],["2020/01/20/DailyLife--Jan--20th/index.html","f880c9994b88baec4883d55e813f7541"],["2020/01/20/哈夫曼树--修理牧场/index.html","28f64c608c4373d787ba9fd163829812"],["2020/01/20/树种统计/index.html","dce71a09d47ff014421064bb36d75306"],["2020/01/21/寒假计划与每日完成情况/index.html","f7769caa42dfe0b3ddb41bac5b8d8a44"],["2020/01/21/汉诺塔非递归实现c语言版/index.html","f5b7f920b8c69de993c28a2fb72c576b"],["2020/01/30/swift基本运算符/index.html","05e47fbef257159eaaf347a5d68bf64e"],["2020/01/30/关于C指针——和指针的第一次亲密接触/index.html","5ce724f2c6c2284dee5bf8161f24a2d5"],["2020/01/30/深度优先遍历/index.html","69627c951dfe6f4f0eed17358ac8315c"],["2020/02/01/Mac自定义各个应用快捷键/index.html","bd8dd37d89609fe6afdadaa574476d55"],["2020/02/02/C指针问题之不同类型指针之间的区别/index.html","11c5a9df323857a840733f608ca6c60a"],["2020/02/03/vim基础操作+配置文件设置/index.html","b9148940b44c46a2ee5aa5d1b12b118e"],["2020/02/04/hello-world/index.html","821fd13693f4a57bdcd9309758f2f6c9"],["2020/02/05/Mac修改键盘之将大小写锁定修改esc/index.html","03096edc55e68336f09a5ceaa09e0ee4"],["2020/02/07/Codeblocks中文乱码解决方法/index.html","5abf2392c4db35c6d24262dbca996ef8"],["2020/02/09/swiftui与uikit交互/index.html","139fa9ba80cd881d46705bdf3c46d750"],["2020/02/10/2020-02-10日记/index.html","cc97c225dab91f37cb614ed806fecbd2"],["2020/02/11/2020-02-11日记/index.html","9a676cb64cdec1776742fb31af31e772"],["Gallery/index.html","bc2357d60f942714d77030478fb96324"],["about/index.html","10c285444ec697105bc44bc4a336e82a"],["archives/2020/01/index.html","ab9549cb8935066dfd005eb0d5f70882"],["archives/2020/01/page/2/index.html","476d4b7f1d30790332f9fb5a5464a6a3"],["archives/2020/02/index.html","88b2766b4d0998c302d50536fb965d62"],["archives/2020/index.html","eed89490445a60fe71efeda02e1a1ce7"],["archives/2020/page/2/index.html","07e677cb5a180cc58dd5c8dd870b5da8"],["archives/2020/page/3/index.html","877864b813c16998e8578b63721ff3ef"],["archives/index.html","ada40b5d3f5581fb5ebcf2c1378b4f5b"],["archives/page/2/index.html","92f96049106921a4f3b119288ab118d5"],["archives/page/3/index.html","b39c235dd0745ef2a33722b0e04ee328"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Hexo博客/index.html","4b9204a3a5bb7ade4681b2cf390c6320"],["categories/IOS开发/index.html","c8ae207ca498778c7641396911bb6ecb"],["categories/Mac骚操作/index.html","61eb31ed674bd8f2deaff1811ea3cac0"],["categories/My-Daily-Life/index.html","3ca527af367efcfaaf59e0759cede43e"],["categories/index.html","27b575d8a6932bdbdd8f9ef7f62c95d9"],["categories/征服C指针/index.html","bfbc6235e2a966104332bda0796ac9b5"],["categories/算法题/index.html","8007c1bb86bb407ce9f1574cbc6e8a95"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/index.css","5877fd2a673598684c409cefbb359260"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/My avatar.jpg","453f80c19226ba6fca2261b0c7b3bc9d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/img_0164.jpg","7f1476645ed9860607c403b2af20c051"],["img/img_0165.jpg","3b862ec70a3ab1688e143e8720ff3fc4"],["img/img_0166.jpg","6e5291e2d7d0e800e09f3f2f9954b357"],["img/img_0167.jpg","998066d3647ace1084c6eae73b4c2390"],["img/img_0168.jpg","b8231a75edd970df0c5b6ac5c5cd9083"],["img/img_0169.jpg","d9ff1edbde894331a635f0d693bb5a19"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","7ca417cd4caf69e5b9b6cf2cd7da186b"],["js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["link/index.html","eecf51d7360c9acbcade10eb4a49f2ff"],["messageboard/index.html","09d4f2c9b4fc04011b7621e6bc99830e"],["movies/index.html","f30688e75b33ebb964394e91fc88b094"],["music/index.html","3477e1cd0654fb5aabd67a569e0be4c6"],["page/2/index.html","8cc70b4e136783825e1185535a0e4563"],["page/3/index.html","7850859fb4b0335f4f972c25b51918b9"],["tags/C指针/index.html","da372e6c309061596bea182794a1944e"],["tags/Hexo/index.html","652ac3e79940da7d66bf0380514352df"],["tags/LeeCode/index.html","3b417f60cbd3865433ff7969f518f924"],["tags/Mac/index.html","003e2cde5df8b017c1e0d6ceb7bd4a8b"],["tags/PTA/index.html","71e6d140b1da9aef4f62223a7b0108fd"],["tags/index.html","5c947ed580ab34ff4a443d71e8d877d0"],["tags/mac与windows兼容性/index.html","ddb5835bc925aba09c56e5d7170f640c"],["tags/swift/index.html","a2b59fd28f94d71142732a01046c5756"],["tags/swiftUI/index.html","4b31d9b4e0c19cff6b04eb0485cbf282"],["tags/vim/index.html","74462786c07011487bab87d9b61c582c"],["tags/寒假终极计划/index.html","c5110c9e75d0a7d4021de39a33f3e61d"],["tags/数据结构/index.html","2e3f112034329c52c2ca7dd2778e386f"],["tags/日记/index.html","ad9ebd791a5995d956cab916aa560de8"],["tags/算法/index.html","8f3c2ae9624288e37c5867ada5d0583a"]];
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







