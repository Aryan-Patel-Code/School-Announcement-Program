let y = 0;
//Display Function
function displayAnnouncement() {

    //Getting Variables From Local Storage
    var teacherDetails = JSON.parse(localStorage.getItem("teacherAnnouncementKey")) 

    var teacherGradeA = JSON.parse(localStorage.getItem("teacherGradeAKey"))
    var teacherGrade9 = JSON.parse(localStorage.getItem("teacherGrade9Key")) 
    var teacherGrade10 = JSON.parse(localStorage.getItem("teacherGrade10Key")) 
    var teacherGrade11 = JSON.parse(localStorage.getItem("teacherGrade11Key"))     
    var teacherGrade12 = JSON.parse(localStorage.getItem("teacherGrade12Key")) 

    var teacherGenderA = JSON.parse(localStorage.getItem("teacherGenderAKey"))
    var teacherGenderM = JSON.parse(localStorage.getItem("teacherGenderMKey"))
    var teacherGenderF = JSON.parse(localStorage.getItem("teacherGenderFKey"))
    
    var teacherClubAll = JSON.parse(localStorage.getItem("teacherClubAllKey")) 
    var teacherClubMath = JSON.parse(localStorage.getItem("teacherClubMathKey")) 
    var teacherClubHack = JSON.parse(localStorage.getItem("teacherClubHackKey")) 
    var teacherClubDeca = JSON.parse(localStorage.getItem("teacherClubDecaKey")) 
    var teacherClubEco = JSON.parse(localStorage.getItem("teacherClubEcoKey")) 

    var studentGradeA = JSON.parse(localStorage.getItem("studentGradeAKey")) 
    var studentGrade9 = JSON.parse(localStorage.getItem("studentGrade9Key")) 
    var studentGrade10 = JSON.parse(localStorage.getItem("studentGrade10Key")) 
    var studentGrade11 = JSON.parse(localStorage.getItem("studentGrade11Key")) 
    var studentGrade12 = JSON.parse(localStorage.getItem("studentGrade12Key"))  

    var studentGenderA = JSON.parse(localStorage.getItem("studentGenderAKey")) 
    var studentGenderM = JSON.parse(localStorage.getItem("studentGenderMKey")) 
    var studentGenderF = JSON.parse(localStorage.getItem("studentGenderFKey"))

    var studentClubAll = JSON.parse(localStorage.getItem("studentClubAllKey")) 
    var studentClubMath = JSON.parse(localStorage.getItem("studentClubMathKey")) 
    var studentClubHack = JSON.parse(localStorage.getItem("studentClubHackKey")) 
    var studentClubDeca = JSON.parse(localStorage.getItem("studentClubDecaKey")) 
    var studentClubEco = JSON.parse(localStorage.getItem("studentClubEcoKey")) 

    var announcementTextHolder = [];
    var x = document.getElementsByClassName("Announce");

    // The Student Search Information
    //document.getElementById("resultOne").innerHTML = studentGrade;
    //document.getElementById("resultTwo").innerHTML = studentGender;
    //document.getElementById("resultThree").innerHTML = studentClub;

    //Checking if Announcements Match
        for (let i = 0; i < teacherDetails.length; i++){
           
        if (((studentGradeA || teacherGradeA[i]) || (studentGrade9 && teacherGrade9[i]) || (studentGrade10 && teacherGrade10[i]) || (studentGrade11 && teacherGrade11[i]) || (studentGrade12 && teacherGrade12[i])) && ((teacherGenderA[i] || studentGenderA) || (teacherGenderM[i] && studentGenderM) || (teacherGenderF[i] && studentGenderF)) && ((teacherClubAll[i] || studentClubAll) || (teacherClubMath[i] && studentClubMath) || (teacherClubHack[i] && studentClubHack) || (teacherClubDeca[i] && studentClubDeca) || (teacherClubEco[i] && studentClubEco))) { 
            announcementTextHolder.push(teacherDetails[i]);
            document.getElementById("sorryMes").style.display = "none";
           
        }     
    }  

        //Displaying Multiple Announcement Boxes
         //Displaying the text within the announcement boxes        
         document.getElementById("textOne").innerHTML = announcementTextHolder[y+0];
         document.getElementById("textTwo").innerHTML = announcementTextHolder[y+1];
         document.getElementById("textThree").innerHTML = announcementTextHolder[y+2];
         document.getElementById("textFour").innerHTML = announcementTextHolder[y+3];
         document.getElementById("textFive").innerHTML = announcementTextHolder[y+4];
 
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
}








//Sends the User Back To Student Options Page
function optionDirect() {
    y = y + 5;
    displayAnnouncement()
}