System.register([],(function(){"use strict";return{execute:function(){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout,Element.prototype.remove||(Element.prototype.remove=function(){this.parentNode.removeChild(this)});var e=document.body;null===e.ontouchstart&&(e.ontouchstart=function(){})}}}));