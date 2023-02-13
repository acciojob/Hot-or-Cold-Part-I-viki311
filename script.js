
function func(){
	
	const x = Math.floor(Math.random()*40)-20;
	// const x = 10;
	document.getElementById("num").innerText = x;
	if(document.getElementById("guess").value ==x){
		document.getElementById("respond").innerText = "Hot";
	}else {
		document.getElementById("respond").innerText = "Cold";
	}
}


