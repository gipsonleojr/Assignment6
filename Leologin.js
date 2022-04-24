function validateCreds() {
    //variables to identify first name, last name, and badge number
     var firstName = document.getElementById("firstName").value;
     var lastName = document.getElementById("lastName").value;
     var badgeNumber = document.getElementById("badgeNumber").value;
     var firstLastName = firstName + " " + lastName;
     //if statement for 20 character limit for first name and last name length
     if (firstName.length > 20 || lastName.length > 20){
     
         document.getElementById("loginStatus").innerHTML = "Invalid First or Last Name: Cannot be more than 20 characters!";

     }
     //else if statement for badge number 3 digit parameters
     else if (badgeNumber > 999 || badgeNumber < 100){

        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number:  Must use 3 numerical digits!";
     }
     //else statement showing access has been granted
     else {

        alert("Access Granted, Welcome " + firstLastName + "!");
     }














}