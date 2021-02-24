function y(x,y=""){
	if(y==?){
		if(x.indexOf(" ")==-1){
		if(y!==""){
			return document.body.contains(document.querySelectorAll(x)[y]);
		}else{
			return document.body.contains(document.querySelector(x));
		}
		}else{
		if(y!==""){
			return document.body.contains(document.getElementsByClassName(x)[y]);
		}else{
			return document.body.contains(document.getElementsByClassName(x)[0]);
		}
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
			return document.getElementsByClassName(x)[0];
		}
	    }
}
}
