function y(x,y="boş"){
	if(x.indexOf(" ")==-1){
    	if(y=="boş"){
        	return document.querySelectorAll(x);
        }else{
        	return document.querySelectorAll(x)[y];
        }
    }else{
    	return document.getElementsByClassName(x);
    }
}
