//TOGGLE BODY-FIX to any element
function modalFix(action=null,element='body') {
	if(action=='open'){
		document.querySelector(element).classList.add("body-fix");
	} else if(action=='close'){
		document.querySelector(element).classList.remove("body-fix");
	} else {
		document.querySelector(element).classList.toggle("body-fix");
	}
}


function inputFileChange(element_id,event){
  var fileName =  event.target.files[0];
  document.getElementById(element_id).innerHTML = fileName.name;
}
