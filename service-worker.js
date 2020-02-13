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

var precacheConfig = [["2020/01/13/Mac上好用的敲代码软件CodeRunner/index.html","30f2686e87c02b4116dcc5e1a4e76612"],["2020/01/13/我的第一篇博客文章/index.html","3fbc90463d966efaf6b37a84a2f3d379"],["2020/01/19/leeCode报错问题1/index.html","4c96db8698de99e4348ceed591e382bc"],["2020/01/19/汉诺塔递归实现c语言版/index.html","9bb7135b9b577a7590f328188972b1b8"],["2020/01/20/DailyLife--Jan--20th/index.html","89089d8b916d638a5a58c076bb8ca807"],["2020/01/20/哈夫曼树--修理牧场/index.html","d2ea7b8d689da8f8f4b7cc8cd95c9a17"],["2020/01/20/树种统计/index.html","40fda61a0f9fbbea765ed8c059901254"],["2020/01/21/寒假计划与每日完成情况/index.html","2bb58118a7e4fba62c42a63cea2b34ba"],["2020/01/21/汉诺塔非递归实现c语言版/index.html","e55cbbf3e192917d578bf4cbbc3dd472"],["2020/01/30/swift基本运算符/index.html","2b46bb4d207bc7388ec36f7f722dc077"],["2020/01/30/关于C指针——和指针的第一次亲密接触/index.html","a501155bfdd5e8cec927722147303baa"],["2020/01/30/深度优先遍历/index.html","08bd353a37db6bab09637d25f7e76b23"],["2020/02/01/Mac自定义各个应用快捷键/index.html","dba2a234ac9be5df581c3c5eb339e197"],["2020/02/02/C指针问题之不同类型指针之间的区别/index.html","a29df25a1af2597f5e5793d4a4282095"],["2020/02/03/vim基础操作+配置文件设置/index.html","dfe0721b1aff2e2deea4c3eba60b6f7d"],["2020/02/04/hello-world/index.html","955f8efce4e014d3900594e19b8b3a26"],["2020/02/05/Mac修改键盘之将大小写锁定修改esc/index.html","244b6cbdf5b0f4429dbf500b215466f4"],["2020/02/07/Codeblocks中文乱码解决方法/index.html","241d51f556386124c10fb3ccefd3e804"],["2020/02/09/swiftui与uikit交互/index.html","75de79131d44f8a311f5328934c89419"],["2020/02/10/2020-02-10日记/index.html","06f99c99196f148e015e4ff2a7577bcc"],["2020/02/11/2020-02-11日记/index.html","45cb58bc353daec0fb66eecf5820e6f3"],["2020/02/12/word中如何加入带√的小方块/index.html","c7064625170fd94186c8751225eaddfa"],["Gallery/index.html","2677966671a511b6145550eecb1e77aa"],["about/index.html","8114c4f698c2b7f514992fb8f5d771c7"],["archives/2020/01/index.html","ac694f953633e5052cb3f71c24e88b70"],["archives/2020/01/page/2/index.html","a166685664103303c6766642e57b2b94"],["archives/2020/02/index.html","a4197ccc0221518ef0ba8728e150dd54"],["archives/2020/index.html","b62c3ea53eceaa68daf344677fdf1941"],["archives/2020/page/2/index.html","43c723430127dc585b9f7cdf85972f0e"],["archives/2020/page/3/index.html","e1dfe09e3f562887162f049ef0918e98"],["archives/index.html","a3e5f995484ba946c54aabfd8a7c4401"],["archives/page/2/index.html","a7ac774c533f7f7b0db1907b48ffe42d"],["archives/page/3/index.html","4cfc0d72af09a64c37a29806c0bfb90b"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/Hexo博客/index.html","3715a2ae1cc3033280069246430c4069"],["categories/IOS开发/index.html","06e7b676b6fa72b61364cd941356d8f6"],["categories/Mac骚操作/index.html","c4206debdd3240a2a8ec9925de6a446e"],["categories/Microsoft技能/index.html","5d91e13795ad69a4fd041d657a8d5407"],["categories/My-Daily-Life/index.html","0009abb40cb1d4232e9d60eda2d591a1"],["categories/index.html","a05eb54be0a46664c4a1f9c0193ee2e8"],["categories/征服C指针/index.html","24be3abba8a62e3a48844f0d31d88d5e"],["categories/算法题/index.html","055d9eee67d6ba9379d0ac525638ed85"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/index.css","5877fd2a673598684c409cefbb359260"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["img/My avatar.jpg","453f80c19226ba6fca2261b0c7b3bc9d"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","c291715561b777d5601df42b8d8fc791"],["img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/img_0164.jpg","7f1476645ed9860607c403b2af20c051"],["img/img_0165.jpg","3b862ec70a3ab1688e143e8720ff3fc4"],["img/img_0166.jpg","6e5291e2d7d0e800e09f3f2f9954b357"],["img/img_0167.jpg","998066d3647ace1084c6eae73b4c2390"],["img/img_0168.jpg","b8231a75edd970df0c5b6ac5c5cd9083"],["img/img_0169.jpg","d9ff1edbde894331a635f0d693bb5a19"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["index.html","c44ac6bf1c37bfbbe7aabe9de9dd2571"],["js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["link/index.html","e94372987e7b676d0ca4d4d4b853c7f4"],["messageboard/index.html","8516ac2629f5692c75b9243f4dbf4b65"],["movies/index.html","ed505780abe4f9ee7e32d46b89d54958"],["music/index.html","446f6407119764bbfa2fa5207a4eae04"],["page/2/index.html","34e7d5f9bd937d342f8aaf52bf1452f3"],["page/3/index.html","db63e22db3da3614e7a90a9a03888e4c"],["tags/C指针/index.html","e2437ddc2ffc342741ddc4f83d528554"],["tags/Hexo/index.html","07fbecc01cbd20da91a79ab17a6e7583"],["tags/LeeCode/index.html","ba3500022773068a2d9a9e34651219ee"],["tags/Mac/index.html","067fed53ecabb02cd03b29aa1b910fcb"],["tags/PTA/index.html","d61d2ec539649778f80a8f8bcf495aa2"],["tags/index.html","b5932d003280633f5213c76bdbe534b6"],["tags/mac与windows兼容性/index.html","a54274ca6f1634de571d508150866123"],["tags/swift/index.html","183dc4874ad085a04f4f8a5b7a9683e0"],["tags/swiftUI/index.html","e852e74681b1a2f3a87d403d023546c9"],["tags/vim/index.html","c1dd84e92faeaf9a57b3d8abe452441d"],["tags/word技巧/index.html","27d72d60f34c59046b287bfbe0d0776e"],["tags/寒假终极计划/index.html","f38ba3564f4b3b37d9a2daa3bbb77bfc"],["tags/数据结构/index.html","3307e44fa32d7473d0e9b12b72fe4282"],["tags/日记/index.html","429c39dbb875ca9947daa34d72be5cfc"],["tags/算法/index.html","d1db61f96be97c5d91dfcc2c9f41d745"]];
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







