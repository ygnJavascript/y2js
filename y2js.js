function y(x,y=""){
	if(y=="s"){
		if(x.indexOf(" ")==-1){
			return document.querySelectorAll(x)[document.querySelectorAll(x).length -1];
		}else{
			return document.getElementsByClassName(x)[document.getElementsByClassName(x).length -1];
		}
	}else{
	if(x.indexOf(" ")==-1){
		if(y!==""){
			return document.querySelectorAll(x)[y];
		}else{
			return document.querySelector(x);
		}
	}else{
		if(y!==""){
			return document.getElementsByClassName(x)[y];
		}else{
			return document.getElementsByClassName(x);
		}
	}
	}
}
