var fName = document.getElementById('firstName');
var lName = document.getElementById('lastName');
var dob = document.getElementById('dob');
var click = document.getElementById('cal');

function ageCalulator(){
	if(fName.value===""){
			 
		alert("All feilds are manditory");
	    }
	    else if(lName.value==="") {
	    	
	    	alert("All feilds are manditory");
	    }
	    else if(dob.value==="") {
	    	
	    	alert("All feilds are manditory");
	    }

		else{
			click.setAttribute("data-target", "#myModal");
		$("#name").text(fName.value+ " " + lName.value);
		$("#Age").text(getAge(dob.value));
		}
	 
}

function getAge(dob){

	var year ;
    	var month; 
    	var day;
    	var age;
    	var mdif;


		if(dob.length==10){

			 year = parseInt(dob.substring(0,4), 10);
    	 month = parseInt(dob.substring(5,7), 10);
    	 day = parseInt(dob.substring(8,10), 10);
    	 var now = new Date()	
		 age = now.getFullYear() - year
		 mdif = now.getMonth() - month + 1 //0=jan	
		
		}
		
		else{
			age = 0;
		}
			
		if(mdif < 0)
		{
			--age
		}
		else if(mdif == 0)
		{
			var ddif = now.getDate() - day
			
			if(ddif < 0)
			{
				--age
			}
		}

		
		return age;

}

	