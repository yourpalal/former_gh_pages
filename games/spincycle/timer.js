define(["underscore"],function(e){var t,n,r;return t=function(){this.requestAnimationFrame=window.requestAnimationFrame,this.cancelAnimationFrame=window.cancelAnimationFrame,e(["ms","moz","webkit","o"]).each(function(e){this.requestAnimationFrame=this.requestAnimationFrame||window[e+"RequestAnimationFrame"],this.cancelAnimationFrame=this.cancelAnimationFrame||window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]},this),this.requestAnimationFrame&&(this.requestAnimationFrame=e.bind(this.requestAnimationFrame,window),this.cancelAnimationFrame=e.bind(this.cancelAnimationFrame,window))},n=function(e){this._functions=e,this.update=null,this.scope=null,this._requestID=null,this._lastCalled=null},n.prototype={run:function(){var e=this;this._lastCalled===null&&(this._lastCalled=new Date),this._requestID=this._functions.requestAnimationFrame(function(){var t=new Date;e.update.call(e.scope||window,t-e._lastCalled),e._lastCalled=t})},clear:function(){this.requestID&&this._functions.cancelAnimationFrame(this._requestID)}},r=function(e){this.update=null,this.scope=null,this.timeout=e,this._timeoutID=null,this._lastCalled=null},r.prototype={run:function(){var e=this;this._lastCalled===null&&(this._lastCalled=new Date),this._requestID=window.setTimeout(function(){var t=new Date;e.update.call(e.scope||window,t-e._lastCalled),e._lastCalled=t},this.timeout)},clear:function(){this._timeoutID&&(window.clearTimeout(this._timeoutID),this._timeoutID=null)}},function(e){var i=new t;return i.requestAnimationFrame&&i.cancelAnimationFrame?new n(i):new r(e)}});