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

var precacheConfig = [["2020/01/13/Mac上好用的敲代码软件CodeRunner/index.html","dea9cfab06cf0bb7edd23005354b406a"],["2020/01/13/我的第一篇博客文章/index.html","eb209268cac40e494b216bd0e98015c0"],["2020/01/19/leeCode报错问题1/index.html","97d3c1f296fc386f238bdd26572082c2"],["2020/01/19/汉诺塔递归实现c语言版/index.html","9fedff4b7eb33c6c40323aaab8d656be"],["2020/01/20/DailyLife--Jan--20th/index.html","9a5c7dea64b8cbb63fb3a97841c948e1"],["2020/01/20/哈夫曼树--修理牧场/index.html","1e28c93aab4de6d04c0bfcd5731ba58e"],["2020/01/20/树种统计/index.html","145da04f2eac1a058fe3492dfc8ec3a5"],["2020/01/21/寒假计划与每日完成情况/index.html","724f35698775e72be50efcba9291d1d8"],["2020/01/21/汉诺塔非递归实现c语言版/index.html","2660102671322dc6b6f08d38d7098b36"],["2020/01/30/swift基本运算符/index.html","930a54c31b5a3de6f6a4207c5abe3ff6"],["2020/01/30/关于C指针——和指针的第一次亲密接触/index.html","e923f9eace60d44d31c13085ae1d1abd"],["2020/01/30/深度优先遍历/index.html","64a7bc16b6bb31bf44bd56affe0431dd"],["2020/02/01/Mac自定义各个应用快捷键/index.html","2ea483ec09ccf51e5b110283e434782a"],["2020/02/02/C指针问题之不同类型指针之间的区别/index.html","c0478faf5729debcbf629917ed0c0f5a"],["2020/02/03/vim基础操作+配置文件设置/index.html","2df397ace241de60fac892b8ecd295a4"],["2020/02/04/hello-world/index.html","07607b808aedc79e4d71f71efc423af2"],["2020/02/05/Mac修改键盘之将大小写锁定修改esc/index.html","93c1382cfca00018a9a96848a93d4000"],["2020/02/07/Codeblocks中文乱码解决方法/index.html","accc8bab1a8698dc7cced9a53ad58f26"],["2020/02/09/swiftui与uikit交互/index.html","d7c68369eb27490c6418dea4ac4f12f8"],["2020/02/10/2020-02-10日记/index.html","f3029cbec4ddd616da8c124096386209"],["about/index.html","991e6f7eb44815323ef04fe6d9525447"],["archives/2020/01/index.html","241cd9ecafd6fb4eb0aab85d042e3037"],["archives/2020/01/page/2/index.html","017f7e5c21464dd0ad790a7a5a4dc4ad"],["archives/2020/02/index.html","1ff8db78de44d2b1a3da8795cbcc8dc6"],["archives/2020/index.html","780f4b5a49d742c2d8bfd6d5f4e2c1f0"],["archives/2020/page/2/index.html","96b163a1a99805086ef0295b261643d0"],["archives/index.html","a46027a12ed346ff40ff1e81b80005fa"],["archives/page/2/index.html","4b57e0c94d88270b3f5f281841052b2b"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Hexo博客/index.html","676ed29e9c785bb6b084472145f70ce2"],["categories/IOS开发/index.html","cf475e9b4351ebf040370a186b4dbe12"],["categories/Mac骚操作/index.html","b5f8471e2675ed4d0a710f2706bbe3ed"],["categories/My-Daily-Life/index.html","b0a471d8b47d88ceb0a1b800fc7e5718"],["categories/index.html","ed86616dd6062b4e73adac11c02c6a5f"],["categories/征服C指针/index.html","d70feb358bf16320f63dd4bf3c4b3bfb"],["categories/算法题/index.html","9edaf3a99cebed10f541bba4a4e9f2ff"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/index.css","5877fd2a673598684c409cefbb359260"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/My avatar.jpg","453f80c19226ba6fca2261b0c7b3bc9d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/img_0164.jpg","7f1476645ed9860607c403b2af20c051"],["img/img_0165.jpg","3b862ec70a3ab1688e143e8720ff3fc4"],["img/img_0166.jpg","6e5291e2d7d0e800e09f3f2f9954b357"],["img/img_0167.jpg","998066d3647ace1084c6eae73b4c2390"],["img/img_0168.jpg","b8231a75edd970df0c5b6ac5c5cd9083"],["img/img_0169.jpg","d9ff1edbde894331a635f0d693bb5a19"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","92f172bcc3717888ee74b8d43148343c"],["js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["link/index.html","4669223b75826137a6f3a045570b1f85"],["movies/index.html","86a347b2babca300534ddb56ff42e473"],["music/index.html","99ecbb75132b5ae84aaec2a61d35b524"],["page/2/index.html","4b46282ccd83db7307ac943afa49a962"],["tags/C指针/index.html","e1f7e87476b9d3c78928e37f36728621"],["tags/Hexo/index.html","4ef95b11ec0b7a3958dc9bde43311119"],["tags/LeeCode/index.html","540b75cc0e02e2bae21a8144f5fc199b"],["tags/Mac/index.html","ccafb5a1fd3f2143bb137195a0cda49b"],["tags/PTA/index.html","19a1f384b4b6047061a339086f8aa8cd"],["tags/index.html","e231ae11b704f62846437733b2ae3166"],["tags/mac与windows兼容性/index.html","aaf321850e79ae1fb49ef4762fded627"],["tags/swift/index.html","8764ecdbb6b11f2fbda11203eb3e0190"],["tags/swiftUI/index.html","cdec6be7588e12b8323eb9c3371a4088"],["tags/vim/index.html","0d5356546c4135d7b88659ec6bb67902"],["tags/寒假终极计划/index.html","a18367c6975fca3516433a5b414b336e"],["tags/数据结构/index.html","4ad802841112005ced6b2550dd14df05"],["tags/日记/index.html","4d7f25c6535b8944d592abd6757b5e6f"],["tags/算法/index.html","2dc4f96e31651c839fe4a8af45d60f55"]];
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







