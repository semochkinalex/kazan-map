(this["webpackJsonpkazan-map"]=this["webpackJsonpkazan-map"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(5),s=c.n(i),o=(c(10),c(3)),l=c(2),d=(c(11),c(1)),r=function(e){var t=e.name,c=e.date,n=e.info,a=e.coordinates,i=e.selectPlace,s=e.id,o=e.moveToPlace;return Object(d.jsx)(l.b,{defaultGeometry:a,onClick:function(){o(a),i(t,c,n,a,s)}})},j=(c(14),function(e){e.place;var t=e.isPlaceToggled,c=e.togglePlace,n=e.currentId,a=e.slides,i=e.nextSlide,s=e.backSlide;console.log(a[n].images);return Object(d.jsxs)("section",{className:"info ".concat(t?"":"info-hidden"),children:[Object(d.jsxs)("div",{className:"info__dialog",children:[Object(d.jsxs)("div",{className:"info__part",children:[Object(d.jsxs)("div",{className:"info__person",children:[Object(d.jsx)("img",{className:"info__speaker",src:"https://cdn.pixabay.com/photo/2020/09/04/09/09/snow-leopard-5543394_960_720.png",alt:"bars"}),Object(d.jsx)("p",{className:"info__date",children:a[n].date?"-> ".concat(a[n].date):""})]}),Object(d.jsx)("h1",{className:"info__title",children:a[n].speech})]}),Object(d.jsx)("div",{className:"info__images",children:a[n].images?a[n].images.map((function(e,t){return Object(d.jsx)("img",{className:"info__image",src:e,alt:"image"},t)})):""}),Object(d.jsxs)("div",{className:"info__buttons",children:[n?Object(d.jsx)("button",{className:"info__button info__back",onClick:s,children:"\u041d\u0430\u0437\u0430\u0434"}):"",n+1===a.length?"":Object(d.jsx)("button",{className:"info__button info__next",onClick:i,children:"\u0414\u0430\u043b\u044c\u0448\u0435 =>"})]}),Object(d.jsxs)("p",{className:"info__progress",children:[n+1,"/",a.length]})]}),Object(d.jsx)("button",{className:"info__toggler ".concat(t&&"info__button-toggled"),onClick:c})]})}),h=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),s=Object(o.a)(i,2),h=s[0],p=s[1],m=Object(n.useState)({}),u=Object(o.a)(m,2),f=u[0],b=u[1],g=Object(n.useRef)(null),_=[{speech:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443\u0442 \u0441\u043f\u0438\u043a\u0435\u0440. \u042f \u0432\u044b\u0431\u0440\u0430\u043b \u0441\u043d\u0435\u0436\u043d\u043e\u0433\u043e \u0431\u0430\u0440\u0441\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d \u0442\u043e\u0436\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0430\u043b \u041a\u0430\u0437\u0430\u043d\u044c"},{speech:"\u0422\u0443\u0442 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c '\u0441\u043b\u0430\u0439\u0434\u044b' \u043f\u043e \u0440\u0430\u0437\u043d\u044b\u043c \u043c\u0435\u0441\u0442\u0430\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u043f\u043e\u0441\u0435\u0442\u0438\u043b\u0438. \u041a\u0430\u0440\u0442\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u043a\u0438\u0434\u0430\u0442\u044c \u043d\u0430\u0441 \u043d\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443.",coordinates:[55.772203,48.659044],date:"12/06"},{speech:"\u041a \u0442\u0430\u043a\u043e\u0432\u044b\u043c \u0441\u043b\u0430\u0439\u0434\u0430\u043c \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 (\u0434\u0430\u043d\u044f \u043d\u0438\u0436\u0435), \u0438 \u0434\u0430\u0442\u0443 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u044f.",coordinates:[56.6316,47.886178],date:"12/06",images:["https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910","https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910","https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910"]},{speech:"\u0414\u0443\u043c\u0430\u044e \u044d\u0442\u043e\u0442 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0442\u044c \u043f\u043e QR \u043a\u043e\u0434\u0430\u043c. \u0422\u0430\u043a \u043d\u0430\u0448\u0430 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0435\u0435 \u0441 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043e\u043c.",coordinates:[55.821496,49.160784],date:"12/06"},{speech:"\u0411\u0443\u0434\u0443 \u0436\u0434\u0430\u0442\u044c \u0438\u0434\u0435\u0439 \u0438 \u0441\u043e\u0432\u0435\u0442\u043e\u0432 \u043d\u0430\u0441\u0447\u0451\u0442 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430. \u0422\u0430\u043a\u0436\u0435 \u043e\u0447\u0435\u043d\u044c \u0436\u0434\u0443 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043e\u0431 \u0440\u0430\u0437\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445. \u0418\u0445 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u043e\u043b\u0433\u043e, \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u0451 \u0434\u043e \u0432\u0435\u0447\u0435\u0440\u0430 \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430.",coordinates:[55.810584,49.122956],date:"12/06"},{speech:"\u0412\u043e\u0442 \u0438 \u043a\u043e\u043d\u0435\u0446! \u041d\u0430\u0434\u0435\u044e\u0441\u044c \u0442\u0435\u0431\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435!"}];function O(e,t,c,n,i){b({placeName:e,placeDate:t,placeInfo:c,placeCoordinates:n}),a(i),p(!0)}function x(e){g.current&&e&&g.current.panTo(e).then((function(){p(!0)}))}return Object(n.useEffect)((function(){x(_[c].coordinates)}),[c]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(j,{isPlaceToggled:h,place:f,togglePlace:function(){p(!h)},currentId:c,slides:_,nextSlide:function(){a(c+1)},backSlide:function(){a(c-1)}}),Object(d.jsx)(l.c,{children:Object(d.jsx)(l.a,{instanceRef:function(e){e&&(g.current=e)},defaultState:{center:[55.75,37.57],zoom:9},style:{width:"100%",height:"100vh"},children:[{placeId:1,placeCoordinates:[55.772203,48.659044]}].map((function(e,t){var c=e.placeName,n=e.placeDate,a=e.placeInfo,i=e.placeCoordinates,s=e.placeId;return Object(d.jsx)(r,{name:c,date:n,info:a,coordinates:i,id:s,moveToPlace:x,selectPlace:O},t)}))})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.a48947ff.chunk.js.map