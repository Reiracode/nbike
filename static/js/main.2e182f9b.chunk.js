(this.webpackJsonpyourbike=this.webpackJsonpyourbike||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(7),r=n.n(c),o=(n(12),n(13),n.p+"static/media/logo-light.aeb9d168.svg"),s=n(0);function l(){return Object(s.jsx)("h1",{className:"logo",children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://reiracode.github.io/nbike/  ",children:Object(s.jsx)("img",{src:o,alt:"Bikeland"})})})}var u=function(t){return Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"header_wrapper",children:Object(s.jsx)(l,{})})})},p=n(2),d=n.n(p),b=n(5),h=n(3),f=(n(16),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enableHighAccuracy:!0,timeout:5e3,maximumAge:0};return new Promise((function(e,n){navigator.geolocation.getCurrentPosition((function(t){e([t.coords.latitude,t.coords.longitude])}),(function(t){n(t)}),t)}))});n(18);function g(t){return j.apply(this,arguments)}function j(){return(j=Object(b.a)(d.a.mark((function t(e){var n,a,i,c,r,o,s,l,u,p,b,f,g;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,n=Object(h.a)(e,2),a=n[0],i=n[1],c="https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Taipei?%24top=30&%24spatialFilter=nearby(".concat(a,",").concat(i,",1000)&%24format=JSON"),"https://tdx.transportdata.tw/api/basic/v2/Bike/Availability/City/Taipei?%24format=JSON",t.next=7,Promise.allSettled([m(c),m("https://tdx.transportdata.tw/api/basic/v2/Bike/Availability/City/Taipei?%24format=JSON")]);case 7:for(r=t.sent,o=[],s=[r[0].value,r[1].value],u=s[1],p=(l=s[0]).map((function(t){return t.StationUID})),b=u.filter((function(t){return p.indexOf(t.StationUID)>-1})),console.log(b),f=0;f<l.length;f++)g={stationId:l[f].StationUID,stationName:l[f].StationName.Zh_tw,stationAddress:l[f].StationAddress.Zh_tw,stationPosition:{lat:l[f].StationPosition.PositionLat,lng:l[f].StationPosition.PositionLon},serviceStatus:b[f].ServiceStatus,availableRentBikes:b[f].AvailableRentBikes,availableReturnBikes:b[f].AvailableReturnBikes,srcUpdateTime:b[f].SrcUpdateTime},o.push(g);return console.log(o),t.abrupt("return",o);case 18:throw t.prev=18,t.t0=t.catch(1),t.t0;case 21:case"end":return t.stop()}}),t,null,[[1,18]])})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(d.a.mark((function t(e){var n,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return n=t.sent,t.prev=3,t.next=6,fetch(e,{headers:{authorization:"Bearer ".concat(n.access_token)}});case 6:return a=t.sent,t.next=9,a.json();case 9:return i=t.sent,t.abrupt("return",i);case 13:throw t.prev=13,t.t0=t.catch(3),t.t0;case 16:case"end":return t.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",e=new URLSearchParams({grant_type:"client_credentials",client_id:"reira.igg-178246c9-c6da-466e",client_secret:"9f16dc51-0a6e-492c-9dd6-278b917d0c67"}).toString(),t.next=5,fetch("https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e});case 5:return n=t.sent,t.next=8,n.json();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O=n.p+"static/media/icon-user-position-mobile.4af8babd.svg",x=n.p+"static/media/icon-geolocation.7783d3dc.svg",w=n.p+"static/media/icon-bicycle.39345ce0.svg",_=n.p+"static/media/icon-bicycle-grey.7b8cb6aa.svg",S=n.p+"static/media/icon-bicycle-white.0cdc8c9e.svg",B=n.p+"static/media/icon-parking.d41d0ee4.svg",N=n.p+"static/media/icon-parking-grey.84ff3ab7.svg",C=n.p+"static/media/icon-parking-white.95eab66a.svg";function P(t){return 0===t?"none":t<=5?"few":""}var R=n(4),T=n.n(R);function U(t){var e=t.userPosition,n=t.bikesAvailable,i=t.isFindingBikes,c=t.isLocatingUser,r=t.handleLocateUser,o=t.handleFindingType;console.log(e);var l=Object(a.useRef)(null),u=Object(a.useRef)(null),p=Object(a.useRef)([]),d=Object(s.jsx)("button",{className:"geolocation",disabled:!!c,onClick:r,children:Object(s.jsx)("img",{src:x,alt:"geolocation icon"})});return Object(a.useEffect)((function(){l.current||(l.current=T.a.map("bike_map",{attributionControl:!1,zoomControl:!1,center:e,zoom:15,layers:[T.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]}))}),[e]),Object(a.useEffect)((function(){if(l.current){u.current&&l.current.removeLayer(u.current),l.current.setView(e,15);var t=T.a.icon({iconUrl:O,iconSize:[36,36]});u.current=T.a.marker(e,{icon:t}),u.current.addTo(l.current)}}),[e]),Object(a.useEffect)((function(){var t,e;l.current&&(p.current.forEach((function(t){l.current.removeLayer(t)})),p.current=[],n.forEach((function(n,a){var c=n.stationName.includes("2.0")?"plus":"";t=P(n.availableRentBikes)+" "+c,e=P(n.availableReturnBikes)+" "+c;var r=P(n.availableRentBikes)+" "+c,o=P(n.availableReturnBikes)+" "+c,s="<img src=".concat(_,' alt="bicycle icon" />'),u="<img src=".concat(N,' alt="parking icon" />');p.current[a]=T.a.marker([n.stationPosition.lat,n.stationPosition.lng],{icon:T.a.divIcon({className:"bikeMarker ".concat(i?t:e),html:'<span class="bikeMarker_number typography-bold typography-button">\n            '.concat(i?n.availableRentBikes:n.availableReturnBikes,"</span>")})});var d=/.*T(\d*:\d*)/g.exec(n.srcUpdateTime)[1],b='<div class="bikeMarkers_popup">\n          <h3 class="typography-bold typography-button">'.concat(n.stationName,'</h3>\n          <div class="popup_info">\n              <div class="popup_bikes ').concat(r,'">\n                  ').concat(s,'\n                  <span class="quantity typography-bold typography-button">').concat(n.availableRentBikes,'</span>\n              </div>\n              <div class="popup_parks ').concat(o,'">\n                  ').concat(u,'\n                  <span class="quantity typography-bold typography-button">').concat(n.availableReturnBikes,'</span>\n              </div>\n              <span class="update_time typography-medium typography-caption">').concat(d,"\u66f4\u65b0</span>\n          </div>\n        </div>");p.current[a].bindPopup(b,{className:"popupClass"}),p.current[a].addTo(l.current)})))}),[n,i]),Object(a.useEffect)((function(){return function(){l.current&&(l.current.remove(),l.current=null)}}),[]),e?Object(s.jsxs)("div",{id:"bike_map",children:[Object(s.jsxs)("div",{className:"find_type_wrapper",children:[Object(s.jsxs)("label",{htmlFor:"find_bikes",children:[Object(s.jsx)("input",{type:"radio",name:"find_type",id:"find_bikes",checked:i,onChange:function(){},hidden:!0}),Object(s.jsxs)("button",{className:"find_type typography-bold typography-button",onClick:o,children:[Object(s.jsx)("div",{className:"find_type_img",children:i?Object(s.jsx)("img",{src:S,alt:"bicycle white icon"}):Object(s.jsx)("img",{src:w,alt:"bicycle white icon"})}),"\u627e\u55ae\u8eca"]})]}),Object(s.jsxs)("label",{htmlFor:"find_parks",children:[Object(s.jsx)("input",{type:"radio",name:"find_type",id:"find_parks",checked:!i,onChange:function(){},hidden:!0}),Object(s.jsxs)("button",{className:"find_type typography-bold typography-button",onClick:o,children:[Object(s.jsx)("div",{className:"find_type_img",children:i?Object(s.jsx)("img",{src:B,alt:"parking icon"}):Object(s.jsx)("img",{src:C,alt:"parking icon"})}),"\u627e\u8eca\u4f4d"]})]})]}),"  ",d]}):null}var A=function(){var t=Object(a.useState)(!1),e=Object(h.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)([]),r=Object(h.a)(c,2),o=r[0],l=r[1],u=Object(a.useState)(!0),p=Object(h.a)(u,2),j=p[0],m=p[1],v=Object(a.useState)(!0),y=Object(h.a)(v,2),k=y[0],O=y[1],x=Object(a.useCallback)(Object(b.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return e=t.sent,console.log("yourlocation"+e),i(e),t.next=7,g(e);case 7:n=t.sent,l(n),m(!1);case 10:case"end":return t.stop()}}),t)}))),[]);Object(a.useEffect)((function(){console.log("execute getPosition in useEffect"),x()}),[x]);var w=Object(s.jsx)("div",{className:"overlay",children:Object(s.jsx)("span",{className:"typography-bold typography-h4",children:"\u5b9a\u4f4d\u4e2d"})});return Object(s.jsxs)("main",{children:[j?w:null,n&&Object(s.jsx)(U,{userPosition:n,bikesAvailable:o,isFindingBikes:k,handleLocateUser:x,isLocatingUser:j,handleFindingType:function(){O((function(t){return!t}))}})]})};var L=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u,{}),Object(s.jsx)(A,{})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2e182f9b.chunk.js.map