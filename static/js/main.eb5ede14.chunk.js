(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(69)},65:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(31),l=n.n(r),i=n(15),c=n(5),s=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)(function(){var e=window.location.pathname,t=window.localStorage.getItem("token");if(t||"a"!==e[1])t=window.localStorage.token;else{t=e.substring(1).split("&").find(function(e){return e.startsWith("access_token")}).split("=")[1];var n=e.substring(1).split("&").find(function(e){return e.startsWith("refresh_token")}).split("=")[1];window.location.pathname="",window.localStorage.setItem("token",t),window.localStorage.setItem("refresh_token",n)}r(t)},[]);return o.a.createElement("div",{className:"nav-wrapper"},o.a.createElement("nav",null,o.a.createElement("h2",{className:"logo"},"LIST",o.a.createElement("span",null,"IT")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/Home"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"/About"},"About")),o.a.createElement("li",null,o.a.createElement("a",{href:"/ContactUs"},"Contact Us")),o.a.createElement("li",null,o.a.createElement("a",{href:"/Help"},"Help"))),n?o.a.createElement("button",{className:"login-button",onClick:function(){r(""),window.localStorage.removeItem("token")}},"Log out"):o.a.createElement("a",{href:"http://localhost:8888/login",className:"login-button"},"Login with Spotify")))},u=n(0),h=n(11),m=function(){var e=Object(u.o)();return o.a.createElement(h.motion.div,{className:"home",key:"Home",initial:{width:0},animate:{width:"100%"},exit:{y:window.innerHeight,transition:{duration:.1}}},o.a.createElement("div",{className:"convertion-main"},o.a.createElement("h1",null,"TRANSFER YOUR PLAYLIST USING LISTIT"),o.a.createElement("p",null,"LISTIT will transfer your favourite music playlist on Youtube and create it on Spotify"),o.a.createElement("button",{id:"modalButton",onClick:function(){return e("/ConvertionModule")}},"Let's Strat")))},f=n(9),p=n(7),d=n(72);function y(){y=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(x){c=function(e,t,n){return e[t]=n}}function s(e,t,n,o){var r=t&&t.prototype instanceof m?t:m,l=Object.create(r.prototype),i=new I(o||[]);return a(l,"_invoke",{value:T(e,n,i)}),l}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(x){return{type:"throw",arg:x}}}e.wrap=s;var h={};function m(){}function f(){}function p(){}var d={};c(d,r,function(){return this});var g=Object.getPrototypeOf,b=g&&g(g(O([])));b&&b!==t&&n.call(b,r)&&(d=b);var w=p.prototype=m.prototype=Object.create(d);function v(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var o;a(this,"_invoke",{value:function(a,r){function l(){return new t(function(o,l){!function a(o,r,l,i){var c=u(e[o],e,r);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then(function(e){a("next",e,l,i)},function(e){a("throw",e,l,i)}):t.resolve(h).then(function(e){s.value=e,l(s)},function(e){return a("throw",e,l,i)})}i(c.arg)}(a,r,o,l)})}return o=o?o.then(l,l):l()}})}function T(e,t,n){var a="suspendedStart";return function(o,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===o)throw r;return j()}for(n.method=o,n.arg=r;;){var l=n.delegate;if(l){var i=S(l,n);if(i){if(i===h)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=u(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function S(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=u(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var r=o.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,a(w,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:f,configurable:!0}),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},v(E.prototype),c(E.prototype,l,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,o,r){void 0===r&&(r=Promise);var l=new E(s(t,n,a,o),r);return e.isGeneratorFunction(n)?l:l.next().then(function(e){return e.done?e.value:l.next()})},v(w),c(w,i,"Generator"),c(w,r,function(){return this}),c(w,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=O,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return l.type="throw",l.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],l=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var i=n.call(r,"catchLoc"),c=n.call(r,"finallyLoc");if(i&&c){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var l=r?r.completion:{};return l.type=e,l.arg=t,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var o=a.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var g=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),i=Object(c.a)(l,2),s=i[0],m=i[1],g=Object(a.useState)(""),b=Object(c.a)(g,2),w=b[0],v=b[1],E=Object(a.useState)(""),T=Object(c.a)(E,2),S=T[0],k=T[1],L=Object(a.useState)(""),I=Object(c.a)(L,2),O=I[0],j=I[1],x=Object(a.useState)(""),N=Object(c.a)(x,2),_=N[0],C=N[1],Y=Object(a.useState)([]),P=Object(c.a)(Y,2),U=P[0],A=P[1],W=Object(a.useState)([]),H=Object(c.a)(W,2),G=H[0],R=H[1],F=Object(u.o)();Object(a.useEffect)(function(){r(window.localStorage.getItem("token"))},[n]),Object(a.useEffect)(function(){d.a.get("http://localhost:8888/googleToken").then(function(e){k(e.data)})},[]),Object(a.useEffect)(function(){O.length&&q()},[O]),Object(a.useEffect)(function(){O.length&&U&&J()},[U,_]),Object(a.useEffect)(function(){return O.length&&_&&G&&X(G),R([])},[_]);var B=function(){var e={url:"http://localhost:8888/refresh_token",method:"GET",params:{refresh_token:window.localStorage.getItem("refresh_token")}};Object(d.a)(e).then(function(e){r(e.access_token),console.log("refreshToken is set: ",e.access_token),z()})},M=function(e){var t={key:S,part:"snippet",playlistId:e,maxResults:50};d.a.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:t}).then(function(e){if(200===e.status){var t=[];e.data.items.forEach(function(e){t.push(e.snippet.title)}),A(t),console.log("Youtube play list tracks info done")}else console.log("getPlaylistInfo call wasn't successful: ",e.error)}).catch(function(e){console.log(e)})},z=function(){d.a.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){200===e.status?j(e.data.id):"The access token expired"===e.data.error.message?(B(),console.log("getSpotifyUserId call wasn't successful /n trying to get a refreshToken: ",e.error)):(B(),console.log("trying to get a refreshToken"))})},q=function(){var e={method:"POST",url:"https://api.spotify.com/v1/users/".concat(O,"/playlists"),headers:{Authorization:"Bearer ".concat(n),"Content-Type":"application/json"},data:{name:w.length?w:"LISTIT",description:"Your Youtube Playlist",public:!1,collaborative:!1}};Object(d.a)(e).then(function(e){e.data?(console.log("createSpotifyPlayList call was successful: ",e.data),C(e.data.id)):console.log("createSpotifyPlayList call wasn't successful: ",e.error.message)}).catch(function(e){console.log(e)})};function D(){return(D=Object(p.a)(y().mark(function e(t){var a,o,r;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={type:"track",limit:1,q:t},o={Authorization:"Bearer ".concat(n)},e.next=5,d.a.get("https://api.spotify.com/v1/search",{params:a,headers:o});case 5:r=e.sent,R(function(e){return[].concat(Object(f.a)(e),[r.data.tracks.items[0].uri])}),r.error&&console.log(r.error);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var J=function(){U.forEach(function(e){!function(e){D.apply(this,arguments)}(e)})},X=function(){var e={method:"POST",url:"https://api.spotify.com/v1/playlists/".concat(_,"/tracks"),headers:{Authorization:"Bearer ".concat(n)},data:{uris:G}};G.length&&console.log("Spotify URIs length is: ",G.length),Object(d.a)(e).then(function(e){201!==e.status&&200!==e.status||console.log("addTracksToList func successfully done and response status is: ",e.status),window.alert("All done!, Your playlist is ready.")}).catch(function(e){console.log("addTracksToList func wasn't able to add this track: ",e)}),F("/Home")};return o.a.createElement(h.motion.div,{className:"modal-wrapper",initial:{width:0},animate:{width:"100%"},exit:{x:window.innerWidth,transition:{duration:.1}}},o.a.createElement("div",{className:"modalCloseSign",onClick:function(){return F("/Home")}},o.a.createElement("span",{className:"modalCloseCross","aria-hidden":"true"},"X")),o.a.createElement("div",{className:"convertion-main"},o.a.createElement("div",{id:"myModal"},o.a.createElement("form",{className:"getLinkForm",name:"getLinkForm"},o.a.createElement("div",{className:"modelInputWrapper"},o.a.createElement("div",{className:"link_inbt_lbl"},o.a.createElement("label",{htmlFor:"mdlInput",id:"mdlLbl",className:"modal_form_label"},"Youtube Link"),o.a.createElement("input",{className:"modalInput",id:"mdlInput",type:"text",name:"getLinkInput",placeholder:"Enter YouTube playlist link here",value:s,onChange:function(e){return function(e){m(e.target.value)}(e)}})),o.a.createElement("button",{className:"modalSubmit",id:"CvBtn",onClick:function(e){return function(e){if(!/&list=([a-zA-Z0-9_-]{18})/.test(s))return e.preventDefault(),void window.alert("Please make sure you entered a valid Youtube playlist Link");if(window.localStorage.token){var t=s.slice(s.indexOf("list=")+5,s.indexOf("list=")+39);console.log("Play List Id: ",t),e.preventDefault(),z(),M(t)}else window.alert("please login with your spotify account")}(e)}},"Convert")),o.a.createElement("div",{className:"nameInputWrapper"},o.a.createElement("label",{className:"listname_lbl",htmlFor:"nameInput"},"Name your playlist"),o.a.createElement("input",{className:"modalInput",id:"nameInput",placeholder:"LISTIT is set by default . . .",value:w,onChange:function(e){return function(e){v(e.target.value)}(e)}}))))))},b=function(){return o.a.createElement(h.motion.div,{className:"about",initial:{width:0},animate:{width:"100%"},exit:{x:window.innerWidth,transition:{duration:.1}}},o.a.createElement("h1",{className:"about_header"},"About"),o.a.createElement("p",{className:"about_para"},"This web app allows you to easily transfer your favorite YouTube playlists to your Spotify account. Simply enter the URL of your YouTube playlist, and the app will create a new playlist on your Spotify account with the same songs. You can also choose to rename the playlist.",o.a.createElement("br",null),"To use ",o.a.createElement("b",null,"LISTIT"),", you will need to log in to your Spotify account. This is done to ensure that ",o.a.createElement("b",null,"LISTIT")," only creates playlists on your account, and not on someone else's account.",o.a.createElement("br",null),o.a.createElement("b",null,"LISTIT")," is free to use, and it is easy to use. Simply enter the URL of your YouTube playlist, and ",o.a.createElement("b",null,"LISTIT")," will do the rest.",o.a.createElement("br",null),"We hope you enjoy using our app!"),o.a.createElement("ul",null,o.a.createElement("b",null,"LISTIT")," is",o.a.createElement("li",null,"easy to use and straight to the point."),o.a.createElement("li",null,"free to use."),o.a.createElement("li",null,"compatible with all major browsers."),o.a.createElement("li",null,"compatible with smart phones."),o.a.createElement("li",null,"regularly updated with new features and bug fixes."),o.a.createElement("li",null,"highly secured.")),o.a.createElement("footer",null,"We hope you enjoy your new Spotify playlist! Please feel free to give us ",o.a.createElement("a",{href:"#"},"feedback")))};var w=function(){return o.a.createElement(h.motion.div,{className:"help",initial:{width:0},animate:{width:"100%"},exit:{x:window.innerWidth,transition:{duration:.1}}},o.a.createElement("h1",null,"Welcome to the Help Page"),o.a.createElement("p",null,"This help page is designed to help you get the most out of our website. Here, you will find information on how to use the website, as well as troubleshooting tips for common problems."),o.a.createElement("h2",null,"How to Use the Website"),o.a.createElement("ul",null,"The website is designed to be easy to use. However, if you are having trouble, please refer to the following sections:",o.a.createElement("li",null,"Getting Started"),o.a.createElement("li",null,"Using the Website"),o.a.createElement("li",null,"Troubleshooting")),o.a.createElement("h3",null,"Getting Started"),o.a.createElement("p",null,"To get started with the website, you will need to log in with your Spotify account. Once you have logged in, you will be able to use the website to transere your YouTube playlists to Spotify playlists."),o.a.createElement("h3",null,"Using the Website"),o.a.createElement("ol",null,"To transere a YouTube playlist to a Spotify playlist, simply follow these steps:",o.a.createElement("li",null,"Enter the URL of your YouTube playlist."),o.a.createElement("li",null,'Click the "Convert Playlist" button.'),o.a.createElement("li",null,"The website will create a new Spotify playlist with the same songs as your YouTube playlist.")),o.a.createElement("h3",null,"Troubleshooting"),o.a.createElement("p",null,"If you are having trouble using the website, please refer to the following section:"),o.a.createElement("h3",null,"Troubleshooting"),o.a.createElement("p",null,"This section provides troubleshooting tips for common problems. If you are still having trouble, please contact us for help."),o.a.createElement("ul",null,o.a.createElement("li",null,"Make sure that you are logged in to your Spotify account. If you are not logged in, the website will not be able to create a new Spotify playlist for you."),o.a.createElement("li",null,"Make sure that the URL of your YouTube playlist is correct. If the URL is incorrect, the website will not be able to find your playlist."),o.a.createElement("li",null,"Make sure that your YouTube playlist is public. If your playlist is private, the website will not be able to access it.")),o.a.createElement("h3",null,"Common Problems"),o.a.createElement("ul",null,o.a.createElement("li",null,"The website is not loading. This may be due to a problem with your internet connection. Try refreshing the page or restarting your browser."),o.a.createElement("li",null,"The website is not creating a new Spotify playlist. This may be due to a problem with your Spotify account. Try logging out and logging back in."),o.a.createElement("li",null,"The website is not finding my YouTube playlist. This may be due to a problem with the URL of your playlist. Try copying and pasting the URL again."),o.a.createElement("li",null,"Some of the songs may not be the same, Spotify's search could get confused with a similar song name or artist")),o.a.createElement("h3",null,"Contacting Us"),o.a.createElement("p",null,"If you have any questions or problems, please contact us. You can contact us by email or by opening a support ticket."),o.a.createElement("footer",null,"We hope you enjoy using our website! If you have any feedback or suggestions, please feel free to contact us."))},v=n(26),E=n(32),T=function(){return o.a.createElement(h.motion.div,{className:"contact-us",initial:{width:0},animate:{width:"100%"},exit:{x:window.innerWidth,transition:{duration:.3}}},o.a.createElement("h2",null,"Contact Us"),o.a.createElement("ul",{className:"contacts-list"},o.a.createElement("li",null,o.a.createElement("a",{href:"#"},o.a.createElement(v.a,{className:"contact-logo"}),o.a.createElement("span",{className:"contact-name"},"Facebook"))),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},o.a.createElement(v.b,{className:"contact-logo"}),o.a.createElement("span",{className:"contact-name"},"Twitter"))),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},o.a.createElement(E.a,{className:"contact-logo"}),o.a.createElement("span",{className:"contact-name"},"Gmail")))))};var S=function(){var e=Object(u.m)();return o.a.createElement(h.AnimatePresence,null,o.a.createElement(u.c,{location:e,key:e.pathname},o.a.createElement(u.a,{path:"/Home",exact:!0,Component:m}),o.a.createElement(u.a,{path:"/",exact:!0,Component:m}),o.a.createElement(u.a,{path:"/ConvertionModule",exact:!0,Component:g}),o.a.createElement(u.a,{path:"/About",exact:!0,Component:b}),o.a.createElement(u.a,{path:"/Help",exact:!0,Component:w}),o.a.createElement(u.a,{path:"/ContactUs",exact:!0,Component:T})))},k=function(){return o.a.createElement(i.a,null,o.a.createElement(s,null),o.a.createElement(S,null))};n(65),n(67);l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)))}},[[33,2,1]]]);
//# sourceMappingURL=main.eb5ede14.chunk.js.map