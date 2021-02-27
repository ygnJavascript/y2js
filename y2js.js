		if(y!==null){
			return document.querySelectorAll(x)[y];
		}else{
			return document.querySelector(x)[0];
			return document.querySelector(x);
		}
	}else{
		if(y!==null){
			return document.getElementsByClassName(x)[y];
		}else{
			return document.getElementsByClassName(x)[0];
		}
	}
}
