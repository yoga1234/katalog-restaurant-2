(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t),t.default=n.p+"9b0c33ce296c267bd5189ed5305c447e.png"},32:function(e,t,n){"use strict";n.r(t),t.default=n.p+"e89e1364abc8dd3d0d051f2dfe974773.png"},33:function(e,t,n){"use strict";n.r(t),t.default=n.p+"9ee0b43311129c77838b6bb435b566ad.png"},39:function(e,t,n){"use strict";n.r(t);n(7),n(8),n(29),n(34),n(36);var r={API_KEY:"12345",BASE_URL:"https://dicoding-restaurant-api.el.r.appspot.com",HOME_URL:"/list",DETAIL_URL:"/detail/",ADD_REVIEW_URL:"/review",IMAGE_SMALL:"https://dicoding-restaurant-api.el.r.appspot.com/images/small/",IMAGE_lARGE:"https://dicoding-restaurant-api.el.r.appspot.com/images/large/",DB_NAME:"foodstyle-database",DB_VERSION:1,OBJECT_STORE_NAME:"restaurants",CACHE_NAME:"Foodstyle-V1"};function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var s=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var i,o,s,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i="","empty"===n)i='\n    <div class="loading-animation">\n      <div class="loading-data"></div>\n        <p class="loading-text">LOADING...</p>\n      </div>\n      <div class="home-content">\n    </div>\n    ';else{i+='\n      <div class="home-content">\n    ',o=a(t.restaurants);try{for(o.s();!(s=o.n()).done;)c=s.value,i+='\n        <article class="card-article">\n          <figure>\n            <img class="lazyload article-image" data-src="'.concat(r.IMAGE_SMALL+c.pictureId,'" alt="Kafe dengan nama ').concat(c.name,'" crossorigin="anonymous" width="100%" height="250px">\n          </figure>\n          <h3 class="article-title"><a href="/#detail/').concat(c.id,'" class="restaurant-detail">').concat(c.name,'</a></h3>\n          <p class="article-desc">').concat(c.description,'</p>\n          <div class="article-footer">\n            <p class="article-footer-item-1">').concat(c.city,'</p>\n            <p class="article-footer-item-2">Rating: ').concat(c.rating,"/5</p>\n          </div>\n        </article>")}catch(e){o.e(e)}finally{o.f()}i+="\n      </div>\n    "}return e.abrupt("return",'\n    <section class="who-we-are-section">\n      <div class="who-we-are-left">\n        <h2>WHO WE ARE?</h2>\n        <p>We are a global community called foodstyle, we\'ll rate a restaurant by free with proffesional rater. Register your restaurant right now and introduce your restaurant to the whole world!</p>\n      </div>\n      <div class="who-we-are-right">\n\n      </div>\n    </section>\n    <section id="main-container" class="article-container">\n      <h2 class="section-header">Restaurant Registered</h2>\n      '.concat(i,'\n    </section>\n    <section class="our-service">\n      <hr class="first-hr">\n      <h2 class="restaurant-text">RESTAURANT</h2>\n      <p class="service-text">SERVICE</p>\n      <hr class="second-hr">\n      <div class="our-service-card">\n        <article class="friendly-staff-article">\n          <div class="group-image"></div>\n          <p>FRIENDLY STAFF</p>\n          <span>Every staff has been trained at least six month with special instructor that come from every corner of every proffesional restaurant</span>\n        </article>\n        <article class="next-level-food-article">\n          <div class="fork-image"></div>\n          <p>NEXT LEVEL FOOD</p>\n          <span>Food is served by proffesional chef that has mastered every piece of every ingredients mistery</span>\n        </article>\n        <article class="proven-quality-article">\n          <div class="medal-image"></div>\n          <p>PROVEN QUALITY</p>\n          <span>Restaurant that has been registered is proven their quality by showing their perfomance in front of our tester and expert</span>\n        </article>\n      </div>\n    </section>\n  '));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){o(i,r,a,s,c,"next",e)}function c(e){o(i,r,a,s,c,"throw",e)}s(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),c=function(e){var t="";return 0===e.length&&(t='<h3 class="no-favorite-restaurant">No favorite restaurant saved.</h3>'),e.forEach((function(e){t+='\n    <article class="card-article">\n      <figure>\n        <img class="lazyload article-image" src="'.concat(r.IMAGE_SMALL).concat(e.pictureId,'" alt="Kafe dengan nama ').concat(e.name,'"  width="100%" height="250px">\n      </figure>\n      <h3 class="article-title"><a href="#detail/').concat(e.id,'" class="restaurant-detail">').concat(e.name,'</a></h3>\n      <p class="article-desc">').concat(e.description,'</p>\n      <div class="article-footer">\n        <p class="article-footer-item-1">').concat(e.city,'</p>\n        <p class="article-footer-item-2">Rating: ').concat(e.rating,"</p>\n      </div>\n    </article>\n    ")})),'\n      <section id="main-content" class="article-container">\n        <h2 class="section-header">Favorite Restaurant</h2>\n        <div class="home-content">\n          '.concat(t,"\n        </div>\n      </section>\n    ")};function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t,n="",r=u(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n+="<span>".concat(a.name,"</span>")}}catch(e){r.e(e)}finally{r.f()}return n},f=function(e){var t,n="",r=u(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n+="<span>".concat(a.name,"</span>")}}catch(e){r.e(e)}finally{r.f()}return n},p=function(e){var t,n="",r=u(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n+="<span>".concat(a.name,"</span>")}}catch(e){r.e(e)}finally{r.f()}return n},v=function(e){var t,n="",r=u(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n+='\n    <div class="detail-reviews-item">\n      <h4 class="detail-reviews-item-header">'.concat(a.name,'</h4>\n      <p class="detail-reviews-item-text">').concat(a.review,'</p>\n      <span class="detail-reviews-item-date">').concat(a.date,"</span>\n    </div>\n    ")}}catch(e){r.e(e)}finally{r.f()}return n};function m(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var h=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,a,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),void 0!==t){e.next=3;break}return e.abrupt("return",'<h2 class="detail-not-found">Oops, data is cannot be found.</h2>');case 3:return n=d(t.restaurant.categories),a=f(t.restaurant.menus.foods),i=p(t.restaurant.menus.drinks),o=v(t.restaurant.customerReviews),e.abrupt("return",'\n    <section class="detail-container">\n      <a class="detail-back-button" href="#home">Back</a>\n      <h2 class="detail-restaurant-name">'.concat(t.restaurant.name,'</h2>\n      <img class="detail-restaurant-image" src="').concat(r.IMAGE_lARGE+t.restaurant.pictureId,'" crossorigin="anonymous" alt="kafe dengan nama ').concat(t.restaurant.name,'">\n      <div class="detail-description">\n        <h3 class="detail-description-header">Description</h3>\n        <p class="detail-description-text">').concat(t.restaurant.description,'</p>\n      </div>\n      <div class="detail-city">\n        <h3 class="detail-city-header">City</h3>\n        <p class="detail-city-text">').concat(t.restaurant.city,'</p>\n      </div>\n      <div class="detail-address">\n        <h3 class="detail-address-header">Address</h3>\n        <p class="detail-address-text">').concat(t.restaurant.address,'</p>\n      </div>\n      <div class="detail-categories">\n        <h3 class="detail-categories-header">Categories</h3>\n        <div class="detail-categories-list">\n          ').concat(n,'\n        </div>\n      </div>\n      <div class="detail-menu">\n        <h3 class="detail-menu-header">Menu Available</h3>\n        <div class="detail-menu-list">\n          <div class="detail-menu-foods">\n            <h3 class="detail-foods-header">Foods</h3>\n            ').concat(a,'\n          </div>\n          <div class="detail-menu-drinks">\n            <h3 class="detail-drinks-header">Drinks</h3>\n            ').concat(i,'\n          </div>\n        </div>\n      </div>\n      <div class="detail-rating-and-reviews">\n        <div class="detal-rating">\n          <h3 class="detail-rating-header">Rating</h3>\n          <p class="detail-rating-text">').concat(t.restaurant.rating,' From 5 points</p>\n        </div>\n        <div class="detail-reviews">\n          <h3 class="detail-reviews-header">Consumer Reviews</h3>\n          <div class="detail-reviews-list">\n          <form id="detail-review-form-submit" class="detail-add-review-form">\n            <label for="reviewname" class="detail-label-name">Your name:</label>\n            <input type="text" id="reviewname" class="detail-input-name" placeholder="enter your name here" autocomplete="off" required>\n            <br>\n            <label for="reviewdescription" class="detail-label-description">Review:</label>\n            <input type="text" id="reviewdescription" class="detail-input-description" placeholder="enter your review"autocomplete="off" required>\n            <button class="detail-add-review" type="submit">Add Review</button>\n          </form>\n            ').concat(o,'\n          </div>\n        </div>\n      </div>\n      <div class="add-to-favorite">\n        \n      </div>\n      <div class="back-to-top">\n        <button class="back-to-top-text">Go Top</button>\n      </div>\n    </section>'));case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){m(i,r,a,o,s,"next",e)}function s(e){m(i,r,a,o,s,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}(),g=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},w=function(){var e=document.querySelector(".back-to-top-text");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?e.style.display="block":e.style.display="none"},e.addEventListener("click",g)};function b(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){b(i,r,a,o,s,"next",e)}function s(e){b(i,r,a,o,s,"throw",e)}o(void 0)}))}}var R=function(){var e=y(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r.BASE_URL+r.HOME_URL);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=y(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r.BASE_URL+r.DETAIL_URL+t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",void 0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=y(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r.BASE_URL+r.ADD_REVIEW_URL,{method:"post",headers:{"Content-Type":"application/json","X-Auth-Token":r.API_KEY},body:JSON.stringify({id:t.id,name:t.name,review:t.review})});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(6);function k(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){k(i,r,a,o,s,"next",e)}function s(e){k(i,r,a,o,s,"throw",e)}o(void 0)}))}}var O=r.DB_NAME,P=r.DB_VERSION,S=r.OBJECT_STORE_NAME,I=Object(E.a)(O,P,{upgrade:function(e){e.createObjectStore(S,{keyPath:"id"})}}),_={getRestaurant:function(e){return L(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,I;case 4:return t.abrupt("return",t.sent.get(S,e));case 5:case"end":return t.stop()}}),t)})))()},getAllRestaurant:function(){return L(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I;case 2:return e.abrupt("return",e.sent.getAll(S));case 3:case"end":return e.stop()}}),e)})))()},putRestaurant:function(e){return L(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.id){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,I;case 4:return t.abrupt("return",t.sent.put(S,e));case 5:case"end":return t.stop()}}),t)})))()},deleteRestaurant:function(e){return L(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I;case 2:return t.abrupt("return",t.sent.delete(S,e));case 3:case"end":return t.stop()}}),t)})))()},deleteAllRestaurant:function(){return L(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I;case 2:return e.abrupt("return",e.sent.clear(S));case 3:case"end":return e.stop()}}),e)})))()}};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function C(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){M(i,r,a,o,s,"next",e)}function s(e){M(i,r,a,o,s,"throw",e)}o(void 0)}))}}var B={loadPage:function(e){var t=window.location.href.split("/")[3].slice(1).toLowerCase(),n=window.location.href.split("/")[4];switch(t){case"":window.location.hash="home";break;case"home":return this.homePageRender(e);case"favorite":return this.favoritePageRender();case"detail":return g(),this.renderDetailData(n);default:return this.homePageRender()}},renderHomeData:function(){return C(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},insertReviewData:function(e){return C(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=T({id:window.location.href.split("/")[4]},e),t.next=3,A(e);case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},renderDetailData:function(e){return C(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:return n=t.sent,t.abrupt("return",h(n));case 4:case"end":return t.stop()}}),t)})))()},homePageRender:function(e){var t=this;return C(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.renderHomeData();case 2:return r=n.sent,n.abrupt("return",s(r,e));case 4:case"end":return n.stop()}}),n)})))()},favoritePageRender:function(){return C(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getAllRestaurant();case 2:return t=e.sent,e.abrupt("return",c(t));case 4:case"end":return e.stop()}}),e)})))()}},U=function(){var e=document.querySelector(".skip-to-content"),t=document.querySelector(".section-header");e.addEventListener("keypress",(function(){t.focus()}))};function N(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function H(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){N(i,r,a,o,s,"next",e)}function s(e){N(i,r,a,o,s,"throw",e)}o(void 0)}))}}var q=function(){var e=H(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getRestaurant(n);case 2:void 0===e.sent?(t.classList.add("add-to-favorite-text"),t.classList.remove("is-on-favorite"),t.innerHTML="Add To Favorite"):(t.classList.remove("add-to-favorite-text"),t.classList.add("is-on-favorite"),t.innerHTML="Remove from favorite");case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=H(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.querySelector(".add-to-favorite"),r="",!("restaurant"in t)){e.next=8;break}return e.next=5,_.getRestaurant(t.restaurant.id);case 5:r=e.sent,e.next=9;break;case 8:r="id not found";case 9:n.innerHTML=void 0===r?'<button id="add-to-favorite" class="add-to-favorite-text">Add To Favorite</button>':"id not found"===r?'<button id="add-to-favorite" class="id-not-found">Id is not found</button>':'<button id="add-to-favorite" class="is-on-favorite">Remove from favorite</button>',(a=document.getElementById("add-to-favorite")).addEventListener("click",(function(){"add to favorite"===a.innerHTML.toLowerCase()&&(_.putRestaurant(t.restaurant),alert("Success adding restaurant to favorite"),q(a,t.restaurant.id)),"remove from favorite"===a.innerHTML.toLowerCase()&&(_.deleteRestaurant(t.restaurant.id),alert("Restaurant has been removed from favorite"),q(a,t.restaurant.id))}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function G(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var V=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("maincontent"),U(),e.next=4,B.loadPage("empty");case 4:return t.innerHTML=e.sent,e.next=7,B.loadPage();case 7:if(t.innerHTML=e.sent,"#home"===window.location.hash||"#favorite"===window.location.hash){e.next=16;break}return n=window.location.href.split("/")[4],e.next=12,x(n);case 12:return r=e.sent,e.next=15,F(r);case 15:w();case 16:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){G(i,r,a,o,s,"next",e)}function s(e){G(i,r,a,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();function W(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var z=function(){"detail"===window.location.href.split("/")[3].slice(1).toLowerCase()&&document.getElementById("detail-review-form-submit").addEventListener("submit",function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.getElementById("reviewname").value,r=document.getElementById("reviewdescription").value,a={name:n,review:r},e.next=6,B.insertReviewData(a);case 6:i=e.sent,console.log(i.status),200===i.status?alert("Review Anda berhasil dimasukan"):alert("Opps, review Anda gagal dimasukan. Cobalah beberapa saat lagi."),window.location.reload();case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){W(i,r,a,o,s,"next",e)}function s(e){W(i,r,a,o,s,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}())},J=function(){var e=document.querySelector(".jumbotron");"#home"===window.location.hash||""===window.location.hash?e.style.display="block":e.style.display="none"},Y=function(){var e=document.getElementById("navigation-wrapper");document.querySelector(".hamburger-menu").addEventListener("click",(function(){e.classList.toggle("open")})),document.addEventListener("click",(function(t){"hamburger-menu"!==String(t.target.classList)&&e.classList.contains("open")&&e.classList.remove("open"),t.target.classList.contains("link-item-href")&&t.target.blur()}))},K=n(5),X=n.n(K);function $(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}var Q=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,X.a.register();case 3:return e.abrupt("return");case 4:console.log("Service Worker is not supported");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){$(i,r,a,o,s,"next",e)}function s(e){$(i,r,a,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),Z=(n(3),n(38),function(e){var t=document.querySelector(".jumbotron"),n=document.createElement("PICTURE"),r=document.createElement("SOURCE"),a=document.createElement("SOURCE"),i=new Image;r.setAttribute("type","image/webp"),r.setAttribute("srcset","./images/hero-image_1-small.webp 480w, ./images/hero-image_1-large.webp 800w"),r.setAttribute("sizes","(max-width: 600px) 480px, 800px"),r.setAttribute("alt","restaurant hero"),r.setAttribute("width","100"),r.setAttribute("height","750"),r.classList.add("image-hero"),a.setAttribute("type","image/webp"),a.setAttribute("srcset","./images/hero-image_1-small.jpg 480w, ./images/hero-image_1-large.jpg 800w"),a.setAttribute("sizes","(max-width: 600px) 480px, 800px"),a.setAttribute("alt","restaurant hero"),a.setAttribute("width","100"),a.setAttribute("height","750"),a.classList.add("image-hero"),i.src=e,i.setAttribute("srcset","./images/hero-image_1-small.jpg 480w, ./images/hero-image_1-large.jpg 800w"),i.setAttribute("sizes","(max-width: 600px) 480px, 800px"),i.setAttribute("alt","restaurant hero"),i.setAttribute("width","100"),i.setAttribute("height","750"),i.classList.add("lazyload","image-hero"),n.appendChild(r),n.appendChild(a),n.appendChild(i),t.insertBefore(n,t.firstChild)}),ee=n.p+"91bf5c4a50c73e706c2572d1730d7a85.jpg";function te(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){te(i,r,a,o,s,"next",e)}function s(e){te(i,r,a,o,s,"throw",e)}o(void 0)}))}}window.addEventListener("DOMContentLoaded",ne(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z(ee),Y(),J(),"#maincontent"!==window.location.hash){e.next=6;break}return window.location.hash="#home",e.abrupt("return");case 6:return e.next=8,V();case 8:z();case 9:case"end":return e.stop()}}),e)})))),window.addEventListener("hashchange",function(){var e=ne(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J(),"#maincontent"===window.location.hash){e.next=4;break}return e.next=4,V();case 4:z();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),window.addEventListener("load",(function(){Q()}))}}]);