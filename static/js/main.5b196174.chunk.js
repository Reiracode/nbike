(this.webpackJsonpyourbike=this.webpackJsonpyourbike||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=(n(12),n(13),n.p+"static/media/logo-light.0c6a71ad.svg"),s=(n.p,n.p,n.p,n.p,n.p,n(0));function u(){return Object(s.jsx)("h1",{className:"logo",children:Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/krli07717/bikeland",children:Object(s.jsx)("img",{src:o,alt:"Bikeland"})})})}var l=function(t){return Object(s.jsx)("header",{children:Object(s.jsx)("div",{className:"header_wrapper",children:Object(s.jsx)(u,{})})})},p=n(2),d=n.n(p),b=n(4),f=n(3),v=(n(16),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{enableHighAccuracy:!0,timeout:5e3,maximumAge:0};return new Promise((function(e,n){navigator.geolocation.getCurrentPosition((function(t){e([t.coords.latitude,t.coords.longitude])}),(function(t){n(t)}),t)}))});n(18);function h(t){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(d.a.mark((function t(e){var n,a,r,c,i,o,s,u,l,p,b,v,h;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,n=Object(f.a)(e,2),a=n[0],r=n[1],c="https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/Taipei?%24top=30&%24spatialFilter=nearby(".concat(a,",").concat(r,",1000)&%24format=JSON"),"https://tdx.transportdata.tw/api/basic/v2/Bike/Availability/City/Taipei?%24format=JSON",t.next=7,Promise.allSettled([g(c),g("https://tdx.transportdata.tw/api/basic/v2/Bike/Availability/City/Taipei?%24format=JSON")]);case 7:for(i=t.sent,o=[],s=[i[0].value,i[1].value],l=s[1],p=(u=s[0]).map((function(t){return t.StationUID})),b=l.filter((function(t){return p.indexOf(t.StationUID)>-1})),console.log(b),v=0;v<u.length;v++)h={stationId:u[v].StationUID,stationName:u[v].StationName.Zh_tw,stationAddress:u[v].StationAddress.Zh_tw,stationPosition:{lat:u[v].StationPosition.PositionLat,lng:u[v].StationPosition.PositionLon},serviceStatus:b[v].ServiceStatus,availableRentBikes:b[v].AvailableRentBikes,availableReturnBikes:b[v].AvailableReturnBikes,srcUpdateTime:b[v].SrcUpdateTime},o.push(h);return console.log(o),t.abrupt("return",o);case 18:throw t.prev=18,t.t0=t.catch(1),t.t0;case 21:case"end":return t.stop()}}),t,null,[[1,18]])})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(d.a.mark((function t(e){var n,a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:return n=t.sent,t.prev=3,t.next=6,fetch(e,{headers:{authorization:"Bearer ".concat(n.access_token)}});case 6:return a=t.sent,t.next=9,a.json();case 9:return r=t.sent,t.abrupt("return",r);case 13:throw t.prev=13,t.t0=t.catch(3),t.t0;case 16:case"end":return t.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function j(){return k.apply(this,arguments)}function k(){return(k=Object(b.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",e=new URLSearchParams({grant_type:"client_credentials",client_id:"reira.igg-178246c9-c6da-466e",client_secret:"9f16dc51-0a6e-492c-9dd6-278b917d0c67"}).toString(),t.next=5,fetch("https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e});case 5:return n=t.sent,t.next=8,n.json();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O=n.p+"static/media/icon-bicycle-500.9f48f63e.svg",x=n.p+"static/media/icon-bicycle-red.90c43663.svg",w=n.p+"static/media/icon-bicycle-grey.e2b1d7d4.svg",N=n.p+"static/media/icon-parking.0d06e565.svg",S=n.p+"static/media/icon-parking-red.0b602e67.svg",B=n.p+"static/media/icon-parking-grey.84ff3ab7.svg",R=n.p+"static/media/icon-user-position-mobile.dbd42942.svg",_=n.p+"static/media/icon-geolocation.7783d3dc.svg";function P(t){var e=t.source,n=t.resultNone,a=t.resultFew,r=t.resultNormal;return 0===e?n:e<=5?a:r}var T=n(5),C=n.n(T);function U(t){var e=t.userPosition,n=t.bikesAvailable,r=t.isFindingBikes,c=t.isLocatingUser,i=t.handleLocateUser;console.log(e);var o=Object(a.useRef)(null),u=Object(a.useRef)(null),l=Object(a.useRef)([]),p=Object(s.jsx)("button",{className:"geolocation",disabled:!!c,onClick:i,children:Object(s.jsx)("img",{src:_,alt:"geo location icon"})});return Object(a.useEffect)((function(){e&&(o.current||(o.current=C.a.map("bike_map",{attributionControl:!1,zoomControl:!1,center:e,zoom:15,layers:[C.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]})))}),[e]),Object(a.useEffect)((function(){if(o.current){u.current&&o.current.removeLayer(u.current),o.current.setView(e,15);var t=C.a.icon({iconUrl:R,iconSize:[56,56]});u.current=C.a.marker(e,{icon:t}),u.current.addTo(o.current)}}),[e]),Object(a.useEffect)((function(){var t,e;o.current&&(l.current.forEach((function(t){o.current.removeLayer(t)})),l.current=[],n.forEach((function(n,a){"Y"==(n.stationName.includes("2.0")?"Y":"N")?(t="twofull",e="twohalf "):(t=P({source:n.availableRentBikes,resultNone:"none",resultFew:"few",resultNormal:""}),e=P({source:n.availableReturnBikes,resultNone:"none",resultFew:"few",resultNormal:""}));var c=P({source:n.availableRentBikes,resultNone:"none",resultFew:"few",resultNormal:""}),i=P({source:n.availableReturnBikes,resultNone:"none",resultFew:"few",resultNormal:""}),s=P({source:n.availableRentBikes,resultNone:"<img src=".concat(w,' alt="bicycle icon" />'),resultFew:"<img src=".concat(x,' alt="bicycle icon" />'),resultNormal:"<img src=".concat(O,' alt="bicycle icon" />')}),u=P({source:n.availableReturnBikes,resultNone:"<img src=".concat(B,' alt="parking icon" />'),resultFew:"<img src=".concat(S,' alt="parking icon" />'),resultNormal:"<img src=".concat(N,' alt="parking icon" />')});l.current[a]=C.a.marker([n.stationPosition.lat,n.stationPosition.lng],{icon:C.a.divIcon({html:'<span class="bikeMarker_number typography-bold typography-button">\n            '.concat(r?n.availableRentBikes:n.availableReturnBikes,"</span>"),className:"bikeMarker ".concat(r?t:e)})});var p=/.*T(\d*:\d*)/g.exec(n.srcUpdateTime)[1],d='<div class="bikeMarkers_popup">\n          <h3 class="typography-bold typography-button">'.concat(n.stationName,'</h3>\n          <div class="popup_info">\n              <div class="popup_bikes ').concat(c,'">\n                  ').concat(s,'\n                  <span class="quantity typography-bold typography-button">').concat(n.availableRentBikes,'</span>\n              </div>\n              <div class="popup_parks ').concat(i,'">\n                  ').concat(u,'\n                  <span class="quantity typography-bold typography-button">').concat(n.availableReturnBikes,'</span>\n              </div>\n              <span class="update_time typography-medium typography-caption">').concat(p,"\u66f4\u65b0</span>\n          </div>\n        </div>");l.current[a].bindPopup(d,{className:"popupClass"}),l.current[a].addTo(o.current)})))}),[n,r]),Object(a.useEffect)((function(){return function(){o.current&&(o.current.remove(),o.current=null)}}),[]),e?Object(s.jsxs)("div",{id:"bike_map",children:["   ",p]}):null}n.p,n.p,n.p,n.p,n.p;var F=function(){var t=Object(a.useState)(!1),e=Object(f.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)([]),i=Object(f.a)(c,2),o=i[0],u=i[1],l=Object(a.useState)(!0),p=Object(f.a)(l,2),m=p[0],g=p[1],y=Object(a.useState)(!0),j=Object(f.a)(y,2),k=j[0];j[1];var O=Object(a.useCallback)(Object(b.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,alert("\u4f4d\u5b50"+e),r(e),t.next=7,h(e);case 7:n=t.sent,u(n),g(!1);case 10:case"end":return t.stop()}}),t)}))),[]);Object(a.useEffect)((function(){O()}),[O]);var x=Object(s.jsx)("div",{className:"overlay",children:Object(s.jsx)("span",{className:"typography-bold typography-h4",children:"\u5b9a\u4f4d\u4e2d"})});return Object(s.jsx)("main",{children:n?Object(s.jsx)(U,{userPosition:n,bikesAvailable:o,isFindingBikes:k,handleLocateUser:O,isLocatingUser:m}):x})};var A=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(F,{})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5b196174.chunk.js.map