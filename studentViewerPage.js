//Global Variable Used In Arithmetic For Loading New Pages
let y = 0;



//Display Function
function displayAnnouncement() {

    //Getting Variables From Local Storage
    var teacherDetails = JSON.parse(localStorage.getItem("teacherAnnouncementKey")) 
    var teacherGrade = JSON.parse(localStorage.getItem("teacherGradeKey"))    
    var teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey")) 
    var teacherClub = JSON.parse(localStorage.getItem("teacherClubKey")) 
    var studentGrade = localStorage.getItem("studentGradeKey")   
    var studentGender = localStorage.getItem("studentGenderKey")
    var studentClub = localStorage.getItem("studentClubKey")
    var announcementTextHolder = [];
    var x = document.getElementsByClassName("Announce");
    var y5 = y + 5
    
    //Displays The Tags The Student Used To Search
    document.getElementById("resultOne").innerHTML = studentGrade;
    document.getElementById("resultTwo").innerHTML = studentGender;
    document.getElementById("resultThree").innerHTML = studentClub;
   
    //Checking if Announcements Match
        for (let i = 0; i < teacherGender.length; i++){
        if ((teacherGrade[i] === studentGrade || teacherGrade[i] === "All" || studentGrade === "All") && (teacherGender[i] === studentGender || teacherGender[i] === "All" || studentGender === "All") && (teacherClub[i] === studentClub || teacherClub[i] === "All" || studentClub === "All")) {   
            announcementTextHolder.push(teacherDetails[i]);
            document.getElementById("sorryMes").style.display = "none";   
        }     
    }  
    
        //Displaying the text within the announcement boxes        
        document.getElementById("textOne").innerHTML = announcementTextHolder[announcementTextHolder.length-y-1];
        document.getElementById("textTwo").innerHTML = announcementTextHolder[announcementTextHolder.length-y-2];
        document.getElementById("textThree").innerHTML = announcementTextHolder[announcementTextHolder.length-y-3];
        document.getElementById("textFour").innerHTML = announcementTextHolder[announcementTextHolder.length-y-4];
        document.getElementById("textFive").innerHTML = announcementTextHolder[announcementTextHolder.length-y-5];

        //Displaying Multiple Announcement Boxes
        if(announcementTextHolder[y+0] !== undefined){
            x[0].style.display = "block";
        }else {x[0].style.display = "none";}

        if(announcementTextHolder[y+1] !== undefined){
            x[1].style.display = "block";
        }else {x[1].style.display = "none";}

        if(announcementTextHolder[y+2] !== undefined){
            x[2].style.display = "block";
        }else {x[2].style.display = "none";}

        if(announcementTextHolder[y+3] !== undefined){
            x[3].style.display = "block";
        }else {x[3].style.display = "none";}
        
        if(announcementTextHolder[y+4] !== undefined){
            x[4].style.display = "block";
        }else {x[4].style.display = "none";}

        
        //Displays the "Next Page" Button
        document.getElementById("nextPage").style.visibility = 'hidden';
        if(announcementTextHolder.length > y5) {
            document.getElementById("nextPage").style.visibility = 'visible';
        }

        //Displays the "Previous Page" Button
        document.getElementById("previousPage").style.visibility = 'hidden';
        if(y !== 0) {
            document.getElementById("previousPage").style.visibility = 'visible';
        }
       
}

//Loading Five New Annoncemnets
function nextPageFunc() {   
    y = y + 5;
    displayAnnouncement()
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

//Loads Five Previous Announcements
function previousPageFunc() {    
    y = y - 5;
    displayAnnouncement()
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}