!function(){var e=document.createElement("style");e.innerHTML=".PieChartCss{position:relative;border-radius:50px;overflow:hidden}.PieChartCss,.PieChartCss_cover1,.PieChartCss_cover2,.PieChartCss_cover3{width:50px;height:50px}.PieChartCss,.PieChartCss_cover3{background:#ff6a00}.PieChartCss_cover1,.PieChartCss_cover2{background:#808080}.PieChartCss_cover2,.PieChartCss_cover3{position:absolute;top:0;clip:rect(0,50px,50px,25px)}.PieChartCss_cover1{width:25px}.PieChartCss_cover2{z-index:1}\n",document.head.appendChild(e),System.register(["./animation-legacy.2a80d9d1.js","./index-legacy.0b2629ab.js","./common-legacy.65ac4849.js"],(function(e){"use strict";var t,s,r,a,i,n,c;return{setters:[function(e){t=e.A},function(e){s=e.d,r=e.e,a=e.o,i=e.c,n=e.b,c=e.C},function(){}],execute:function(){var o={class:"PieChartCss"},C=n("div",{class:"PieChartCss_cover1"},null,-1);e("default",s({__name:"PieChartCss",setup:function(e){var s=r(0),u=r(0),l=r(1);return(new t).start((function(e){e>.5?(s.value=180,l.value=0,u.value=360*e-180):s.value=360*e}),1e3),function(e,t){return a(),i("div",o,[C,n("div",{style:c({transform:"rotate(".concat(s.value,"deg)"),zIndex:l.value}),class:"PieChartCss_cover2"},null,4),n("div",{style:c({transform:"rotate(".concat(u.value,"deg)")}),class:"PieChartCss_cover3"},null,4)])}}}))}}}))}();