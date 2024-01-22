//setting Variables
var username;
var password;
//The Correct Username/Password
var validUsername = 'Teacher123';
var validPassword = 'password';


//Checks Login Information from TeacherLogn.html
function loginDetail() {
    username = document.getElementById("htmlUsername").value;   
    password = document.getElementById("htmlPassword").value;  
   
    
    if (username === validUsername && password === validPassword) {
        event.preventDefault();
        window.location = "announcementCreatorPage.html";
    } else {
        alert('Incorrect Password. Please try again or contact admin');
        
    }
}



