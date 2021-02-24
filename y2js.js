function y(x,y=""){
	if(x.indexOf(" ")==-1){
		if(y!==""){
			if(y=="s"){
				return document.querySelectorAll(x);
			}else{
				return document.querySelectorAll(x)[y];
			}
		}else{
			return document.querySelector(x);
		}
	}else{
		if(y!==""){
			if(y=="s"){
				return document.getElementsByClassName(x);
			}else{
				return document.getElementsByClassName(x)[y];
			}
		}else{
			return document.getElementsByClassName(x)[0];
		}
	}
}
