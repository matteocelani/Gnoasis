if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let i={};const f=e=>c(e,a),r={module:{uri:a},exports:i,require:f};s[a]=Promise.all(n.map((e=>r[e]||f(e)))).then((e=>(t(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/106.832c32cb3c1b2645.js",revision:"832c32cb3c1b2645"},{url:"/_next/static/chunks/1142.190d0818480dff58.js",revision:"190d0818480dff58"},{url:"/_next/static/chunks/123.2175423febab125e.js",revision:"2175423febab125e"},{url:"/_next/static/chunks/1288.646678443421c149.js",revision:"646678443421c149"},{url:"/_next/static/chunks/1380.b106908fed17a80d.js",revision:"b106908fed17a80d"},{url:"/_next/static/chunks/1391.54e4946105901f98.js",revision:"54e4946105901f98"},{url:"/_next/static/chunks/1510.1ddfcf016a570252.js",revision:"1ddfcf016a570252"},{url:"/_next/static/chunks/1542.6d4186080017a2a7.js",revision:"6d4186080017a2a7"},{url:"/_next/static/chunks/1586.82256a2c2d79a147.js",revision:"82256a2c2d79a147"},{url:"/_next/static/chunks/1627.a230626a41230e96.js",revision:"a230626a41230e96"},{url:"/_next/static/chunks/1785.5101dcc005df435a.js",revision:"5101dcc005df435a"},{url:"/_next/static/chunks/1942.2c44bcffe99c0da6.js",revision:"2c44bcffe99c0da6"},{url:"/_next/static/chunks/1978.1c8cb5c419281473.js",revision:"1c8cb5c419281473"},{url:"/_next/static/chunks/1995.6f3c693f2aff3df1.js",revision:"6f3c693f2aff3df1"},{url:"/_next/static/chunks/2004.41c50c5e202ad69d.js",revision:"41c50c5e202ad69d"},{url:"/_next/static/chunks/207.4f77d75beec832d5.js",revision:"4f77d75beec832d5"},{url:"/_next/static/chunks/212.61af802ef12c6d08.js",revision:"61af802ef12c6d08"},{url:"/_next/static/chunks/2326.19216ed66bf159f2.js",revision:"19216ed66bf159f2"},{url:"/_next/static/chunks/2556.3306bd6bd3abefc0.js",revision:"3306bd6bd3abefc0"},{url:"/_next/static/chunks/2595.4fd136b3e06f44e2.js",revision:"4fd136b3e06f44e2"},{url:"/_next/static/chunks/2650.4aeb58bcb2242000.js",revision:"4aeb58bcb2242000"},{url:"/_next/static/chunks/2726.850a865d192df3f0.js",revision:"850a865d192df3f0"},{url:"/_next/static/chunks/2775.842a8f33ed8837ea.js",revision:"842a8f33ed8837ea"},{url:"/_next/static/chunks/2801.5a150d224a97a9e4.js",revision:"5a150d224a97a9e4"},{url:"/_next/static/chunks/3014.ce391f0062a854e9.js",revision:"ce391f0062a854e9"},{url:"/_next/static/chunks/3018.88e6f0b4026330f9.js",revision:"88e6f0b4026330f9"},{url:"/_next/static/chunks/3070.4eda7185c4c5e8ad.js",revision:"4eda7185c4c5e8ad"},{url:"/_next/static/chunks/3072.ab7a2a43c367ac16.js",revision:"ab7a2a43c367ac16"},{url:"/_next/static/chunks/3165.9a4a6affcfff3ec0.js",revision:"9a4a6affcfff3ec0"},{url:"/_next/static/chunks/3179.99cf7f9eb6ee27b9.js",revision:"99cf7f9eb6ee27b9"},{url:"/_next/static/chunks/3312.59df50ff755eac89.js",revision:"59df50ff755eac89"},{url:"/_next/static/chunks/3712.3bb821659c21d9c4.js",revision:"3bb821659c21d9c4"},{url:"/_next/static/chunks/3810.8751dba2a6f9701c.js",revision:"8751dba2a6f9701c"},{url:"/_next/static/chunks/3815.9568f4bea065a5cd.js",revision:"9568f4bea065a5cd"},{url:"/_next/static/chunks/3849.b7ca78f3a4f771c4.js",revision:"b7ca78f3a4f771c4"},{url:"/_next/static/chunks/3855.70e247848b6a904f.js",revision:"70e247848b6a904f"},{url:"/_next/static/chunks/3858.68d04a5edf2bf199.js",revision:"68d04a5edf2bf199"},{url:"/_next/static/chunks/3908.a419cb2d7b7ec890.js",revision:"a419cb2d7b7ec890"},{url:"/_next/static/chunks/3935.7ac750e7d0540a42.js",revision:"7ac750e7d0540a42"},{url:"/_next/static/chunks/3977.258310d43079f0cb.js",revision:"258310d43079f0cb"},{url:"/_next/static/chunks/4016.6f88c9bea98daafc.js",revision:"6f88c9bea98daafc"},{url:"/_next/static/chunks/4050.396dec97dfaec5a8.js",revision:"396dec97dfaec5a8"},{url:"/_next/static/chunks/4056.c8797c458c3703a2.js",revision:"c8797c458c3703a2"},{url:"/_next/static/chunks/4118.0a3340a390556c17.js",revision:"0a3340a390556c17"},{url:"/_next/static/chunks/4178.57a6b2703bd84059.js",revision:"57a6b2703bd84059"},{url:"/_next/static/chunks/4238.04c860d7e63670dd.js",revision:"04c860d7e63670dd"},{url:"/_next/static/chunks/4279.f0cfa10e297f004b.js",revision:"f0cfa10e297f004b"},{url:"/_next/static/chunks/42b88f57.373c230ae76f9e75.js",revision:"373c230ae76f9e75"},{url:"/_next/static/chunks/4310.787df06f6f1c7778.js",revision:"787df06f6f1c7778"},{url:"/_next/static/chunks/4631.003f4879d6d3bc29.js",revision:"003f4879d6d3bc29"},{url:"/_next/static/chunks/4726.bee0a88a8d1ac927.js",revision:"bee0a88a8d1ac927"},{url:"/_next/static/chunks/4932.bad71acc437eb1ce.js",revision:"bad71acc437eb1ce"},{url:"/_next/static/chunks/4943.5d66f00527a2fff6.js",revision:"5d66f00527a2fff6"},{url:"/_next/static/chunks/5084.9d432ee5f260521b.js",revision:"9d432ee5f260521b"},{url:"/_next/static/chunks/523.ffae2a3b7af7f0fc.js",revision:"ffae2a3b7af7f0fc"},{url:"/_next/static/chunks/5252.f7117b94fd23ff30.js",revision:"f7117b94fd23ff30"},{url:"/_next/static/chunks/5260.b1af2a26ecd702b8.js",revision:"b1af2a26ecd702b8"},{url:"/_next/static/chunks/5304.998e34143e2f3d29.js",revision:"998e34143e2f3d29"},{url:"/_next/static/chunks/5411.862ef3821ea76752.js",revision:"862ef3821ea76752"},{url:"/_next/static/chunks/5461.59f221e1befb1c32.js",revision:"59f221e1befb1c32"},{url:"/_next/static/chunks/5524.03aafd16862849b6.js",revision:"03aafd16862849b6"},{url:"/_next/static/chunks/5532.ff0731f568beeee3.js",revision:"ff0731f568beeee3"},{url:"/_next/static/chunks/5609.ab13d8994c8fa53a.js",revision:"ab13d8994c8fa53a"},{url:"/_next/static/chunks/5786.4574d2e6c17f6e2f.js",revision:"4574d2e6c17f6e2f"},{url:"/_next/static/chunks/5883.e4477e9126daa625.js",revision:"e4477e9126daa625"},{url:"/_next/static/chunks/5962.e351f4cdbc71a5ee.js",revision:"e351f4cdbc71a5ee"},{url:"/_next/static/chunks/6075.bc19dfa949620eac.js",revision:"bc19dfa949620eac"},{url:"/_next/static/chunks/6366.ea0b37f8d075643e.js",revision:"ea0b37f8d075643e"},{url:"/_next/static/chunks/6403.2726ce8039967519.js",revision:"2726ce8039967519"},{url:"/_next/static/chunks/65.6c9b37251046d8bc.js",revision:"6c9b37251046d8bc"},{url:"/_next/static/chunks/6603.e41573d22142dc91.js",revision:"e41573d22142dc91"},{url:"/_next/static/chunks/6780.a3597f8eec4f7513.js",revision:"a3597f8eec4f7513"},{url:"/_next/static/chunks/6814.5f2212fcad31539b.js",revision:"5f2212fcad31539b"},{url:"/_next/static/chunks/6876.82596acfb5a2334a.js",revision:"82596acfb5a2334a"},{url:"/_next/static/chunks/7011.4db80c6bcecca272.js",revision:"4db80c6bcecca272"},{url:"/_next/static/chunks/7064.dbf874c01b83f43d.js",revision:"dbf874c01b83f43d"},{url:"/_next/static/chunks/7070.2b22a10431912f88.js",revision:"2b22a10431912f88"},{url:"/_next/static/chunks/7078.111c19a999e0be44.js",revision:"111c19a999e0be44"},{url:"/_next/static/chunks/709.f28c12ff079e8c59.js",revision:"f28c12ff079e8c59"},{url:"/_next/static/chunks/7170.8c4c0673329279e1.js",revision:"8c4c0673329279e1"},{url:"/_next/static/chunks/7281.81715808561fb3e4.js",revision:"81715808561fb3e4"},{url:"/_next/static/chunks/7531.077651d75e929eef.js",revision:"077651d75e929eef"},{url:"/_next/static/chunks/7761.22cbd8d5e81ef08b.js",revision:"22cbd8d5e81ef08b"},{url:"/_next/static/chunks/7762.cb406b6f1f94b6d0.js",revision:"cb406b6f1f94b6d0"},{url:"/_next/static/chunks/7777.df980ef71e480380.js",revision:"df980ef71e480380"},{url:"/_next/static/chunks/7908.5ee4fc09c807e908.js",revision:"5ee4fc09c807e908"},{url:"/_next/static/chunks/8338.f570ee0fd1fc9114.js",revision:"f570ee0fd1fc9114"},{url:"/_next/static/chunks/8345.d330a2517ddd73a0.js",revision:"d330a2517ddd73a0"},{url:"/_next/static/chunks/8439.6b9b1374b930567f.js",revision:"6b9b1374b930567f"},{url:"/_next/static/chunks/8452.1d6d64319ef8842f.js",revision:"1d6d64319ef8842f"},{url:"/_next/static/chunks/8478.e3a04524ec390fb3.js",revision:"e3a04524ec390fb3"},{url:"/_next/static/chunks/8658.b590170481d7711f.js",revision:"b590170481d7711f"},{url:"/_next/static/chunks/883.08ee44808abafc46.js",revision:"08ee44808abafc46"},{url:"/_next/static/chunks/8831.50f96b37397977fe.js",revision:"50f96b37397977fe"},{url:"/_next/static/chunks/8837.5205a511bc75399d.js",revision:"5205a511bc75399d"},{url:"/_next/static/chunks/9021.e7abef12013a4a0c.js",revision:"e7abef12013a4a0c"},{url:"/_next/static/chunks/9055.1cf05aaa75ae6cf9.js",revision:"1cf05aaa75ae6cf9"},{url:"/_next/static/chunks/9058.1a200abf24ee92f1.js",revision:"1a200abf24ee92f1"},{url:"/_next/static/chunks/9074.256d48f9d5b46513.js",revision:"256d48f9d5b46513"},{url:"/_next/static/chunks/9091.21e26e42ac1a12af.js",revision:"21e26e42ac1a12af"},{url:"/_next/static/chunks/9117.e0d8e4896a2784c3.js",revision:"e0d8e4896a2784c3"},{url:"/_next/static/chunks/9268.d077bfdc8486e394.js",revision:"d077bfdc8486e394"},{url:"/_next/static/chunks/9343.84e337334a0e4b36.js",revision:"84e337334a0e4b36"},{url:"/_next/static/chunks/9506.110e97742e79c117.js",revision:"110e97742e79c117"},{url:"/_next/static/chunks/9521.c90b2b66b0f028e2.js",revision:"c90b2b66b0f028e2"},{url:"/_next/static/chunks/9595.f61e8a3f136fb0b3.js",revision:"f61e8a3f136fb0b3"},{url:"/_next/static/chunks/96.601dcd2b45d643ce.js",revision:"601dcd2b45d643ce"},{url:"/_next/static/chunks/9635.fd5a1a5b28616527.js",revision:"fd5a1a5b28616527"},{url:"/_next/static/chunks/9678.3b195fb02ab267d0.js",revision:"3b195fb02ab267d0"},{url:"/_next/static/chunks/9682.57b2d016e786b3e5.js",revision:"57b2d016e786b3e5"},{url:"/_next/static/chunks/9879.18980eaffcf4c2dd.js",revision:"18980eaffcf4c2dd"},{url:"/_next/static/chunks/cb355538.c4abbc3dcf987351.js",revision:"c4abbc3dcf987351"},{url:"/_next/static/chunks/f376707f.00354ef2160342ba.js",revision:"00354ef2160342ba"},{url:"/_next/static/chunks/f57c4310.55c4ec2d5e1a0803.js",revision:"55c4ec2d5e1a0803"},{url:"/_next/static/chunks/framework-945b357d4a851f4b.js",revision:"945b357d4a851f4b"},{url:"/_next/static/chunks/main-5b1300c133a407bd.js",revision:"5b1300c133a407bd"},{url:"/_next/static/chunks/pages/404-69f40558f57157de.js",revision:"69f40558f57157de"},{url:"/_next/static/chunks/pages/_error-6ddff449d199572c.js",revision:"6ddff449d199572c"},{url:"/_next/static/chunks/pages/cards-86dd5099955512f1.js",revision:"86dd5099955512f1"},{url:"/_next/static/chunks/pages/desktop-8c4f4d7b76fe779b.js",revision:"8c4f4d7b76fe779b"},{url:"/_next/static/chunks/pages/index-1b5a067d6bbf2bb8.js",revision:"1b5a067d6bbf2bb8"},{url:"/_next/static/chunks/pages/invest-4514268aa5e97711.js",revision:"4514268aa5e97711"},{url:"/_next/static/chunks/pages/payments-946e87c1e8187221.js",revision:"946e87c1e8187221"},{url:"/_next/static/chunks/pages/profile-a6851595868fb247.js",revision:"a6851595868fb247"},{url:"/_next/static/chunks/pages/stats-cb008960339ee368.js",revision:"cb008960339ee368"},{url:"/_next/static/chunks/pages/swap-8432e66a47f573b3.js",revision:"8432e66a47f573b3"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-5f157ffbf868bcc4.js",revision:"5f157ffbf868bcc4"},{url:"/_next/static/css/1d9d887f3a31bc2d.css",revision:"1d9d887f3a31bc2d"},{url:"/_next/static/h2FLG-USa8HrGd4lC5NR6/_buildManifest.js",revision:"08c27a6ee47f3cb815c0b8b446e6e5c9"},{url:"/_next/static/h2FLG-USa8HrGd4lC5NR6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/browserconfig.xml",revision:"b0df1d8364886483f481bc261ea8db4b"},{url:"/site.webmanifest",revision:"9c0ea2fa78727b9eb70f0548510d955f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
