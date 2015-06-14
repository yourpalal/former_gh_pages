define(["underscore","globals.js","spinner","rivetTimer"],function(e,t,n,r){var i=function(e,t){this.fgCtx=e,this.bgCtx=t,this.eraseBackground=[],this.drawBackground=[],this.drawForeground=[]};return i.prototype={reset:function(){this.eraseBackground=[],this.drawBackground=[],this.drawForeground=[]},setRivetTimer:function(e){this.rivetTimer=e},addActiveSpinner:function(e){this.drawForeground.push(e)},addInactiveSpinner:function(e){this.drawBackground.push(e)},removeInactiveSpinner:function(t){this.eraseBackground.push(e.chain(t).clone().extend({arc:Math.PI*2,rotation:0}).value())},clearInactiveSpinners:function(e){this.drawBackground=[]},clearCanvases:function(){this.fgCtx.clearRect(0,0,this.fgCtx.canvas.width,this.fgCtx.canvas.height),this.bgCtx.clearRect(0,0,this.bgCtx.canvas.width,this.bgCtx.canvas.height)},update:function(){this.drawGraphics({style:this.styles.eraseSpinner,ctx:this.bgCtx,drawables:this.eraseBackground}),this.eraseBackground=[],this.drawGraphics({style:this.styles.inactiveSpinners,ctx:this.bgCtx,drawables:this.drawBackground}),this.fgCtx.clearRect(0,0,this.fgCtx.canvas.width,this.fgCtx.canvas.height),this.drawGraphics({style:this.styles.activeSpinners,ctx:this.fgCtx,drawables:this.drawForeground}),this.drawGraphics({style:this.styles.rivetTimer,ctx:this.fgCtx,drawables:[this.rivetTimer]})},drawGraphics:function(t){if(t.drawables.length===0)return;e.extend(t.ctx,t.style),e.each(t.drawables,function(e){e.draw(t.ctx,spinnerCenter)})},styles:{rivetTimer:{lineWidth:2,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,shadowBlur:0,globalCompositeOperation:"source-over"},inactiveSpinners:{lineWidth:2,strokeStyle:"#EFEFEF",shadowColor:"black",shadowOffsetX:0,shadowOffsetY:2,shadowBlur:2,globalCompositeOperation:"source-over"},activeSpinners:{lineWidth:2,strokeStyle:"red",shadowColor:"",shadowOffsetX:0,shadowOffsetY:0,shadowBlur:0,globalCompositeOperation:"source-over"},eraseSpinner:{lineWidth:8,strokeStyle:"#FFFFFF",shadowColor:"#FFFFFF",shadowOffsetX:0,shadowOffsetY:2,shadowBlur:2,globalCompositeOperation:"destination-out"}}},i});