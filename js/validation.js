function applicationForm()
{
	var name = document.application.Name;
	var email = document.application.Email;
	var phone = document.application.Phone_Num;
	var dob = document.application.Date_Of_Birth;
	var addr= document.application.Address;
	var nat= document.application.Nationality;
    if(allLetter(name)&&validateEmail(email)&&validatePhone(phone)&&validateDOB(dob)&&validateAddress(addr)&&validateNAT(nat))
		{
			alert("Form successfully submitted");
			return true;
		}
	else {
			window.alert("Required fields are either null or wrong");
			return false;
		 }
}
function allLetter(name)
{   
	var letters = /^[A-Za-z]+$/;  
	if(name.value.match(letters))  
	{  
		return true;  
	}  
	else  
	{  
		alert('Username must have alphabet characters only');  
		name.focus();  
		return false;  
	}  
} 
function validateEmail(email)
{    
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(email.value.match(mailformat))  
	{  
		return true;  
	}  
	else  
	{  
		alert("You have entered an invalid email address!");  
		email.focus();  
		return false;  
	}  
} 
function validatePhone(phone) 
{
 	var nums = /^[0-9]+$/;  
	if(phone.value.match(nums))  
	{  
		return true;  
	}  
	else  
	{  
		alert('Phone_Num must have numerical characters only');  
		phone.focus();  
		return false;  
	}  
} 
 function validateDOB(dob)
{
	var dateformat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; 
	if(dob.value.match(dateformat))  
	{  
		return true;  
	}  
	else  
	{  
		alert('DOB must be in form of  DD-MM-YYYY or DD/MM/YYYY or DD.MM.YYYY only');  
		dob.focus();  
		return false;  
	}
}
function validateAddress(addr)
{
 if(addr.value!="")
 	return true;
 else
 {
 	alert('Address should not be NULL');  
	addr.focus();  
	return false;  
 }
}
function validateNAT(nat)
{
	var nats = /^[A-Za-z]+$/;  
	if(nat.value.match(nats))  
	{  
		return true;  
	}  
	else  
	{  
		alert('Nationality must have alphabet characters only');  
		nat.focus();  
		return false;  
	} 
}