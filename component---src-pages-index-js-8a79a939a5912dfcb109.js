webpackJsonp([35783957827783],{104:function(e,t){"use strict";function a(e,t,d){if("string"!=typeof t){if(s){var f=o(t);f&&f!==s&&a(e,f,d)}var M=i(t);u&&(M=M.concat(u(t)));for(var m=0;m<M.length;++m){var N=M[m];if(!(n[N]||l[N]||d&&d[N])){var p=c(t,N);try{r(e,N,p)}catch(e){}}}return e}return e}var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,s=o&&o(Object);e.exports=a},305:function(e,t){},205:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(2),c=n(u);a(305);var o=a(450),s=n(o),d=a(126),f=(n(d),function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.coins,a=e.title,n=e.subtitle,l=e.onDismiss;return c.default.createElement("div",{className:"EarnedCoinsModal"},c.default.createElement(M,{count:t}),c.default.createElement("img",{src:s.default,className:"sunburst"}),c.default.createElement("div",{className:"blurb"},c.default.createElement("div",{className:"dummy"},c.default.createElement("div",{className:"title"},a),c.default.createElement("div",{className:"subtitle"},n),c.default.createElement("div",{className:"doneButton",onClick:l},"Let’s get more!")),c.default.createElement("div",{className:"count"},t," coins!"),c.default.createElement("div",{className:"title"},a),c.default.createElement("div",{className:"subtitle"},n),c.default.createElement("div",{className:"doneButton",onClick:l},"Let’s get more!")))},t}(c.default.Component));t.default=f;var M=function(e){for(var t=e.count,a=[],n=0;n<t;n++)a.push(c.default.createElement("div",{key:n,left:(n+.5)/t}));return c.default.createElement("div",{className:"FallingCoins"},a)};e.exports=t.default},306:function(e,t){},207:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l);a(306);var i=function(e){var t=e.children;return r.default.createElement("div",{className:"hscroll"},t)};t.default=i,e.exports=t.default},307:function(e,t){},129:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0,t.ModalPlaylist=t.ModalItem=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c=a(2),o=n(c);a(307);var s=a(74),d=(t.ModalItem=function e(t,a){i(this,e),this.identifier=(0,s.uuid)(),this.render=t,this.itemClass=a},t.ModalPlaylist=function e(t){i(this,e),this.identifier=(0,s.uuid)(),this.items=t},function(e){var t=e.item,a=e.onBack,n=e.onForward,l=(e.onDismiss,e.offset),r="ModalItemView offset_"+l+" "+(t.itemClass||""),i=t.render({full:0===l});return o.default.createElement("div",{className:r},o.default.createElement("div",{className:"content"},i),a?o.default.createElement("div",{className:"control back",onClick:a,key:"back"}):null,n?o.default.createElement("div",{className:"control forward",onClick:n,key:"forward"}):null)}),f=function(e){function t(a){i(this,t);var n=l(this,e.call(this,a));return n.state={itemIndex:0},n}return r(t,e),t.prototype.componentDidUpdate=function(e,t,a){var n=e.playlist?e.playlist.identifier:null,l=this.props.playlist?this.props.playlist.identifier:null;n!==l&&0!==this.state.index&&this.setState({itemIndex:0})},t.prototype.render=function(){var e=this,t=this.props.playlist,a=this.state.itemIndex,n=t?t.items:[],l=[0,1,2],r=l.map(function(t){var l=a+t;if(l<0||l>=n.length)return null;var r={};return 0===t&&(r={onBack:e.back.bind(e),onForward:e.forward.bind(e),onDismiss:e.dismiss.bind(e)}),o.default.createElement(d,u({key:l,className:"ModalPlayer",item:n[l],offset:t},r))}),i=function(t){t.currentTarget===t.target&&e.dismiss()};return o.default.createElement("div",{className:"ModalPlayer",onClick:i},r)},t.prototype.back=function(){this.advance(-1)},t.prototype.forward=function(){this.advance(1)},t.prototype.advance=function(e){var t=this.props.playlist,a=this.state.itemIndex,n=t?t.items:[],l=a+e;l<0||l>=n.length?this.props.onDone():this.setState({itemIndex:l})},t.prototype.dismiss=function(){this.props.onDone()},t}(o.default.Component);t.default=f},208:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.web=void 0;var l=a(2),r=n(l),i=a(129);n(i),t.web=function(e){return new i.ModalItem(function(t){var a=t.full;return a?r.default.createElement("iframe",{src:e}):null},"web")}},308:function(e,t){},209:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l);a(308);var i=function(e){var t=e.emoji,a=e.name,n=e.desc,l=(e.value,e.action),i=e.unlocked;return r.default.createElement("div",{className:"trophy "+(i?"unlocked":"locked")},r.default.createElement("div",{className:"emoji"},r.default.createElement("span",null,t)),r.default.createElement("div",{className:"name"},a),r.default.createElement("div",{className:"desc"},n),r.default.createElement(u,{action:l,unlocked:i}))},u=function(e){var t=e.action,a=e.unlocked;return a?r.default.createElement("div",{className:"unlocked"},"Unlocked!"):t?r.default.createElement("div",{className:"unlock",onClick:t},"Click here!"):r.default.createElement("div",{className:"not-unlocked"},"Not unlocked")};t.default=i,e.exports=t.default},309:function(e,t){},210:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l);a(309);var i=function(e){var t=e.name,a=e.price;return r.default.createElement("div",{className:"unlockable"},r.default.createElement("div",{className:"lock"},r.default.createElement("label",null,a)),r.default.createElement("h6",null,t))};t.default=i,e.exports=t.default},74:function(e,t){"use strict";function a(){var e,t,a="";for(e=0;e<32;e++)t=16*Math.random()|0,8!=e&&12!=e&&16!=e&&20!=e||(a+="-"),a+=(12==e?4:16==e?3&t|8:t).toString(16);return a}t.__esModule=!0,t.uuid=a},126:function(e,t,a){e.exports=a.p+"static/coin.880183e6.png"},449:function(e,t,a){e.exports=a.p+"static/intro.1a73784a.svg"},450:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMiIgaGVpZ2h0PSIxMjAyIiB2aWV3Qm94PSIwIDAgMTIwMiAxMjAyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY3OS41NTIgNS41Mjg2M0w2MDIuNDcxIDU5Ny4wMkw2MDIuNDQ4IDBDNjI4LjEzMSAwLjE4MDI5OCA2NTMuODgxIDIuMDAxMTMgNjc5LjU1MiA1LjUyODYzWk02MDEuMjQzIDU5Ni4xMzFMNTIyLjc2NSA2LjAyMTQ1QzQ5Ni45NjEgOS4yMzUwMiA0NzEuNjc0IDE0LjA4MzggNDQ2Ljk5MiAyMC40NjI1TDYwMS4yNDMgNTk2LjEzMVpNNTk4LjUxMyA1OTcuMTE5TDIzNS40OTUgMTI1LjMwOEMyMTQuNzU0IDE0MC45OTMgMTk1LjI4IDE1Ny44MzYgMTc3LjA5NCAxNzUuN0w1OTguNTEzIDU5Ny4xMTlaTTYwNS44NTMgNTk3Ljg4M0w2MDkuMTY5IDU5NS45NjlMMTAyNy4zMiAxNzcuODE5QzEwNDUuMTggMTk2LjAwNCAxMDYyLjAzIDIxNS40NzkgMTA3Ny43MSAyMzYuMjE5TDYxMy4wOTMgNTkzLjcwNEwxMTIxLjM5IDMwMC4yMzdDMTEzNC4zOCAzMjIuMzI1IDExNDYgMzQ1LjMwMyAxMTU2LjEzIDM2OS4wODFMNjA5Ljc4NSA1OTYuMjQ5TDYwNS45IDU5OS4yMzdMNjA4LjI1MiA1OTYuODg2TDYwNS44NTMgNTk3Ljg4M1pNNjA2LjI2NiA1OTkuMDY3TDExODIuNSA0NDQuNjY2QzExODkuMjcgNDY5LjI5NSAxMTk0LjUzIDQ5NC41NTkgMTE5OC4xNCA1MjAuMzQ1TDYwNi4yNjYgNTk5LjA2N1pNNTk2Ljg1OCA2MDAuOTQ0TDYuNzQ3NDQgNjc5LjQyMkM5Ljk2MDk0IDcwNS4yMjYgMTQuODA5OCA3MzAuNTEzIDIxLjE4ODUgNzU1LjE5NUw1OTYuODU4IDYwMC45NDRaTTQ2LjM3MDggODMxLjE1NUw1OTcuMTU4IDYwMi4xNjVMODAuMTM1NSA5MDAuNjk0QzY3LjQ1NTMgODc4LjM2NCA1Ni4xNTU1IDg1NS4xNTIgNDYuMzcwOCA4MzEuMTU1Wk0xMjAxLjk4IDU5OS45MzRINjA2LjY4N0wxMTk3LjY1IDY3Ni45MjRDMTIwMC43NiA2NTEuMjY4IDEyMDIuMTkgNjI1LjU1NiAxMjAxLjk4IDU5OS45MzRaTTYwNi40NTMgNjAxLjE2NUwxMTgyLjY5IDc1NS41NjZDMTE3Ni4yNCA3ODAuMjgyIDExNjguMTYgODA0Ljc5MSAxMTU4LjM5IDgyOC45MjdMNjA2LjQ1MyA2MDEuMTY1Wk01OTcuMzY3IDU5OC4wODdMNDcuMDc3NCAzNzAuOTk1QzM2Ljk1ODMgMzk0Ljk1IDI4LjUxNCA0MTkuMjczIDIxLjY5NzEgNDQzLjgzN0w1OTcuMzY3IDU5OC4wODdaTTUuNTIyNTggNTIyLjIxMUw1OTcuMDE1IDU5OS4yOTJMMCA1OTkuMzE2QzAuMTgwMjk4IDU3My42MzggMi4wMDExIDU0Ny44ODggNS41MjI1OCA1MjIuMjExWk0xMTIxLjIgOTAxLjAyNUw2MDUuNjYyIDYwMy4zNzhMMTA3OC45NSA5NjUuNTMzQzEwOTQuNDggOTQ0Ljg3MiAxMTA4LjU3IDkyMy4zMTcgMTEyMS4yIDkwMS4wMjVaTTYwNC44NDQgNjA0LjMyOEwxMDI2LjY4IDEwMjYuMTZDMTAwOC43MyAxMDQ0LjM0IDk4OS40ODQgMTA2MS41MyA5NjguOTU3IDEwNzcuNTVMNjA0Ljg0NCA2MDQuMzI4Wk0xMjMuOTAxIDIzNS40OUw1OTcuNjA3IDU5Ny45ODlMODAuNTYxMyAyOTkuNUM5My41NTkzIDI3Ny4zNTMgMTA4LjAxMiAyNTUuOTYxIDEyMy45MDEgMjM1LjQ5Wk05MDEuOTUgMTEyMC42Nkw2MDQuMzAzIDYwNS4xMjZMODMzLjEwNiAxMTU1LjQxQzg1Ni44ODQgMTE0NS4yOCA4NzkuODYzIDExMzMuNjUgOTAxLjk1IDExMjAuNjZaTTYwMy4xMjEgNjA1LjUzOUw3NTcuNTIxIDExODEuNzdDNzMyLjg5MiAxMTg4LjU1IDcwNy42MjkgMTE5My44IDY4MS44NDIgMTE5Ny40MUw2MDMuMTIxIDYwNS41MzlaTTM3MS4wMzEgNDUuNjQ2NUw2MDAuMDIgNTk2LjQzMUwzMDEuNDkxIDc5LjQxMjVDMzIzLjgyMiA2Ni43MjY5IDM0Ny4wMzUgNTUuNDI5NCAzNzEuMDMxIDQ1LjY0NjVaTTYwMS44MzQgMTIwMS45OFY2MDYuNjg4TDUyNC44NDMgMTE5Ny42NUM1NTAuNDk5IDEyMDAuNzYgNTc2LjIxMSAxMjAyLjE5IDYwMS44MzQgMTIwMS45OFpNNjAwLjYwMyA2MDYuNDU1TDQ0Ni4yMDEgMTE4Mi42OUM0MjEuNDg0IDExNzYuMjQgMzk2Ljk3NiAxMTY4LjE2IDM3Mi44MzkgMTE1OC4zOUw2MDAuNjAzIDYwNi40NTVaTTYwMy42OCA1OTcuMzY4TDgzMC43NzIgNDcuMDc5M0M4MDYuODE4IDM2Ljk2MDEgNzgyLjQ5NCAyOC41MTU5IDc1Ny45MyAyMS42OTkyTDYwMy42OCA1OTcuMzY4Wk0zMDEuOTk0IDExMjEuOTJMNTk5LjY0MSA2MDYuMzg2TDIzNy40ODYgMTA3OS42N0MyNTguMTQ2IDEwOTUuMiAyNzkuNzAyIDExMDkuMjkgMzAxLjk5NCAxMTIxLjkyWk01OTguNjkxIDYwNS41NjhMMTc2Ljg1OSAxMDI3LjRDMTU4LjY3OCAxMDA5LjQ2IDE0MS40OTIgOTkwLjIwNyAxMjUuNDczIDk2OS42OEw1OTguNjkxIDYwNS41NjhaTTk2Ny41MjkgMTI0LjYyNkw2MDUuMDMxIDU5OC4zM0w5MDMuNTE4IDgxLjI4NzRDOTI1LjY2OCA5NC4yODU1IDk0Ny4wNTUgMTA4LjczOCA5NjcuNTI5IDEyNC42MjZaIiBmaWxsPSIjMDBGRkUwIi8+Cjwvc3ZnPgo="},451:function(e,t,a){e.exports=a.p+"static/babynames.be88e4c3.svg"},452:function(e,t,a){e.exports=a.p+"static/content.47dadc2b.svg"},453:function(e,t,a){e.exports=a.p+"static/flashlight.54b6e2c0.svg"},454:function(e,t,a){e.exports=a.p+"static/hab.a316404f.svg"},455:function(e,t,a){e.exports=a.p+"static/instagrade.0ebaf414.svg"},456:function(e,t,a){e.exports=a.p+"static/rwr.8f4de111.svg"},457:function(e,t,a){e.exports=a.p+"static/stacks.185e85b8.svg"},458:function(e,t,a){e.exports=a.p+"static/subway.8fc8879e.svg"},459:function(e,t,a){e.exports=a.p+"static/table.93599de6.svg"},460:function(e,t,a){e.exports=a.p+"static/zest.d3a1ebcb.svg"},461:function(e,t,a){e.exports=a.p+"static/workflow.a8ded56a.svg"},213:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(2),c=n(u),o=a(102),s=(n(o),a(207)),d=n(s),f=a(210),M=n(f),m=a(449),N=n(m),p=a(461),y=n(p),D=a(209),E=n(D),j=a(129),w=n(j),T=a(208),g=a(205),h=n(g),I=a(454),v=n(I),k=a(453),O=n(k),x=a(460),A=n(x),b=a(458),z=n(b),L=a(457),C=n(L),S=a(456),U=n(S),Y=a(451),Q=n(Y),_=a(459),P=n(_),W=a(455),R=n(W),Z=a(452),B=n(Z),F=function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.state={playlist:null},n}return i(t,e),t.prototype.testPlaylist=function(){var e=this,t=new j.ModalItem(function(){return c.default.createElement("div",{className:"testItem"},"READ ME!")}),a=new j.ModalItem(function(t){var a=t.full;return a?c.default.createElement(h.default,{coins:5,title:"🏆 Super Clicker",subtitle:"For clicking 20 times! Keep it up!",onDismiss:function(){return e.setState({playlist:null})}}):null},"earnedCoinsModalItem"),n=[t,a];this.setState({playlist:new j.ModalPlaylist(n)})},t.prototype.playWithRewards=function(e,t){this.setState({playlist:new j.ModalPlaylist(t)})},t.prototype.render=function(){var e=this;return c.default.createElement("div",{className:"index-page"},c.default.createElement(w.default,{playlist:this.state.playlist,onDone:function(){return e.setState({playlist:null})}}),c.default.createElement("div",{className:"intro",onClick:this.testPlaylist.bind(this)},c.default.createElement("img",{className:"readable-width",src:N.default,alt:"Nate Parrott dot com: developer, designer and gamification enthusiast."})),c.default.createElement("div",{className:"readable-width boxed-content workflow section"},c.default.createElement("h3",null,"How this site works"),c.default.createElement("img",{src:y.default,alt:"Consume content, earn points, get exclusive experiences!"})),c.default.createElement("div",{className:"readable-width section"},c.default.createElement("h3",null,"Learn about things ",c.default.createElement("span",{className:"nowrap"},"I’ve made! ",c.default.createElement("div",{className:"tooltip"},"1 point per click"))),c.default.createElement("div",{className:"content-tiles"},c.default.createElement(V,{src:v.default,alt:"Design and branding for a beginner-friendly hackathon",onClick:function(){return e.playWithRewards("hab",[(0,T.web)((0,o.withPrefix)("/hab/index.html"))])}}),c.default.createElement(V,{src:O.default,alt:"A popular natural-language interface to Mac OS",onClick:function(){return e.playWithRewards("flashlight",[(0,T.web)((0,o.withPrefix)("/flashlight/index.html"))])}}),c.default.createElement(V,{src:R.default,alt:"An app that grades paper quizzes instantly",onClick:function(){return e.playWithRewards("instagrade",[(0,T.web)((0,o.withPrefix)("/instagrade/index.html"))])}}),c.default.createElement(V,{src:A.default,alt:"A spice rack powered by computer vision",onClick:function(){return e.playWithRewards("zest",[(0,T.web)("http://zest.nateparrott.com/")])}}))),c.default.createElement("div",{className:"cashcash section"},c.default.createElement("div",{className:"bg"}),c.default.createElement("div",{className:"readable-width"},c.default.createElement("h3",null,"Exclusive unlockable content!"),c.default.createElement(d.default,null,c.default.createElement(M.default,{name:"Download my resume",price:5}),c.default.createElement(M.default,{name:"Download my resume",price:5}),c.default.createElement(M.default,{name:"Download my resume",price:5}),c.default.createElement(M.default,{name:"Download my resume",price:5}),c.default.createElement(M.default,{name:"Download my resume",price:5}),c.default.createElement(M.default,{name:"Download my resume",price:5}),c.default.createElement(M.default,{name:"Download my resume",price:5})))),c.default.createElement("div",{className:"readable-width section"},c.default.createElement("h3",null,"Why not consume ",c.default.createElement("span",{className:"nowrap"},"more content? ",c.default.createElement("div",{className:"tooltip"},"1 point per click"))),c.default.createElement("div",{className:"content-tiles"},c.default.createElement(V,{src:P.default,alt:"An augmented-reality table prototype",onClick:function(){return e.playWithRewards("table",[(0,T.web)("http://table.nateparrott.com/")])}}),c.default.createElement(V,{src:z.default,alt:"An subway map that visualizes travel time",onClick:function(){return e.playWithRewards("subway",[(0,T.web)("http://subway.nateparrott.com/")])}}))),c.default.createElement("div",{className:"readable-width boxed-content section"},c.default.createElement("h3",null,"Sharing is caring!"),c.default.createElement("div",{className:"two-pane"},c.default.createElement("div",{className:"hides-on-phone"},c.default.createElement("div",{className:"free-points-graphic",alt:"Free points for sharing your data!"})),c.default.createElement("form",{className:"trade-data"},c.default.createElement("input",{name:"email",type:"email",placeholder:"Enter your email"}),c.default.createElement("input",{type:"submit",value:"Earn 5 free points!"})))),c.default.createElement("div",{className:"trophies section"},c.default.createElement("div",{className:"bg"}),c.default.createElement("div",{className:"readable-width"},c.default.createElement("h3",null,"Why not earn some trophies??"),c.default.createElement(d.default,null,c.default.createElement(E.default,{emoji:"🌈",name:"Reading Rainbow",desc:"Read 5 pieces of content!",value:10}),c.default.createElement(E.default,{emoji:"🕹",name:"Clicker Clique",desc:"Click 20 times anywhere!",value:5,unlocked:!0}),c.default.createElement(E.default,{emoji:"🤞",name:"Big Click Energy",desc:"Click 100 times anywhere!",value:5}),c.default.createElement(E.default,{emoji:"👀",name:"Eyewitness",desc:"Follow me on Instagram!",value:5}),c.default.createElement(E.default,{emoji:"👻",name:"Toasty Ghost",desc:"Add me on the Snapchat!",value:7}),c.default.createElement(E.default,{emoji:"🐮",name:"Cash Cow",desc:"Send me $3 on Square Cash",value:7,action:function(){return alert("test")}})))),c.default.createElement("div",{className:"readable-width section"},c.default.createElement("h3",null,"There’s so much ",c.default.createElement("span",{className:"nowrap"},"rewarding content!",c.default.createElement("div",{className:"tooltip"},"1 point per click"))),c.default.createElement("div",{className:"content-tiles"},c.default.createElement(V,{src:B.default,alt:"An app for creating exciting animations",onClick:function(){return e.playWithRewards("content",[(0,T.web)("http://content.nateparrott.com/")])}}),c.default.createElement(V,{src:C.default,alt:"An app for making your own social network"}),c.default.createElement(V,{src:U.default,alt:"An online vocabulary workbook based on hip-hop lyrics",onClick:function(){return e.playWithRewards("rwr",[(0,T.web)("https://www.rhymeswithreason.co/")])}}),c.default.createElement(V,{src:Q.default,alt:"A neural network for generating new baby names",onClick:function(){return e.playWithRewards("names",[(0,T.web)((0,o.withPrefix)("/names/index.html"))])}}))),c.default.createElement("div",{className:"readable-width boxed-content section"},c.default.createElement("h3",null,"Sharing is caring!"),c.default.createElement("div",{className:"two-pane"},c.default.createElement("div",{className:"hides-on-phone"},c.default.createElement("div",{className:"free-points-graphic",alt:"Free points for sharing your data!"})),c.default.createElement("form",{className:"trade-data"},c.default.createElement("input",{name:"name",type:"text",placeholder:"What’s your name?"}),c.default.createElement("input",{type:"submit",value:"Earn 5 free points!"})))))},t}(c.default.Component);t.default=F;var V=function(e){var t=e.src,a=e.alt,n=e.onClick;return c.default.createElement("div",{className:"tile hover-offset",style:{backgroundImage:"url("+t+")"},alt:a,onClick:n})};e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-8a79a939a5912dfcb109.js.map