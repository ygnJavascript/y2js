function y(x,y=null){
	if(x.indexOf(" ")==-1){
		if(y!==null){
			return document.querySelectorAll(x)[y];
		}else{
			return document.querySelector(x);
		}
	}else{
		if(y!==null){
			return document.getElementsByClassName(x)[y];
		}else{
			return document.getElementsByClassName(x);
		}
	}
}
