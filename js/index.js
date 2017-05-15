
window.onload = function(){
	var aa =document.getElementById('aa');
	var bb =document.getElementById('bb');
	var cc =document.getElementById('cc').getElementsByTagName('span');
	var prev =document.getElementById('prev');
	var next =document.getElementById('next');
	var gg =-1000;
	var index =1;
	var timer;
	//原点变化//
	function showshow(){		
		for (var i = 0; i < cc.length; i++) {
			if(cc[i].className =='on'){
				cc[i].className ='';
				break;
			}
		}
	cc[index -1].className="on";
	}
	//图片循环 左右移动//
	function play(){
		timer =setInterval(function(){
			next.onclick();
		},5000);
	}
	function stop(){
		clearInterval(timer);
	}
	function dd(){
		var ff =	parseInt(bb.style.left) + gg ;
		if (ff > 0) {
			bb.style.left = -3000 +'px';			
			}
		else{
			if (ff < -3000) {
				bb.style.left = 0 +'px';		
			}
			else{
				bb.style.left = ff + 'px';		
			}
		}
	}	
		next.onclick =function () {
			if (index == 4) {
				index = 1;
			}
			else{
				index +=1;
			}
			
			showshow();
			dd();
			gg = -1000;
		}
		prev.onclick =function () {
			if (index == 1) {
				index = 4;
			}
			else{
				index -=1;
			}
			
			showshow();
			dd();
			gg=1100;
		}	
		for (var i = 0; i < cc.length; i++) {
			cc[i].onclick=function(){
				if(this.className == 'on'){
					return;
				}
				var myIndex =parseInt(this.getAttribute('index'));
				var offset =-1000*(myIndex-index);			
				dd(offset);
				index =myIndex;
				showshow();
			}
		}
		bb.onmouseover =stop;
		bb.onmouseout =play;
		play();
}
