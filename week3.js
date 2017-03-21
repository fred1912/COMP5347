//the main function must occur after the page is loaded, hence being inside the wondow.onload event handler.
window.onload = function(){
    var mainForm = document.getElementById("mainForm");

    //all inputs with the class required are looped through 
    var requiredInputs = document.querySelectorAll(".required");
    
	for (var i=0; i < requiredInputs.length; i++){
		requiredInputs[i].onfocus = function(){
	    this.style.fontWeight = "bold";
	    this.style.backgroundColor = "green";
	}
	requiredInputs[i].onblur = function(){
	    //TODO, 
		//highlight an error if no value
	    this.style.fontWeight = "normal";
	    this.style.backgroundColor = "#FFFFFF";
	}
    }

    //on submitting the form, "empty" checks are performed on required inputs.
    mainForm.onsubmit = function(e){
		var flag1 = 0,flag2=0;
		//TODO, perform empty checks
		for (var i=0;i< requiredInputs.length;i++){
			    
			    if (i==0&&requiredInputs[i].value== null||requiredInputs[i].value==""){
					flag1 = 1 ;
					e.preventDefault();
					requiredInputs[i].parentNode.style.backgroundColor = 'red';
					alert('you have to fill the title');
					continue;
				}
				if (i==1&&!requiredInputs[i].checked){
					flag2 = 1 ;
					e.preventDefault();
					requiredInputs[i].parentNode.style.backgroundColor = 'red';
					alert('you have to accept the license');
					continue;
				}
				
				if (flag1==0){
					requiredInputs[0].parentNode.style.backgroundColor = '#FFFFFF';
					
				}
				
				if (flag2==0){
					requiredInputs[1].parentNode.style.backgroundColor = '#FFFFFF';
					
				}
				
		}
		if (flag1==0&&flag2==0) {alert('You have submitted the form');}
		
		
    }
}
