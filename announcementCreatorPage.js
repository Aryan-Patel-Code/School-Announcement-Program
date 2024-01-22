//Establishing the Variables
var teacherGrade = [];
var teacherGender = [];
var teacherClub = [];
var teacherAnnouncement = [];
var counter = 0;


function getAnnouncement() {
    //Stores Multiple Announcements Wihtout ReWritting It
    if (JSON.parse(localStorage.getItem("teacherGradeKey")) != null) {

    teacherGrade = JSON.parse(localStorage.getItem("teacherGradeKey"));
    teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
    teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
    teacherAnnouncement = JSON.parse(localStorage.getItem("teacherAnnouncementKey"));
    counter = teacherGrade.length;
    }
}

//Getting The Input Through The Submit
function getData(){
    teacherGrade[counter] = document.querySelector('input[name="htmlTeacherGrade"]:checked').value;
    teacherGender[counter] = document.querySelector('input[name="htmlTeacherGender"]:checked').value;
    teacherClub[counter] = document.querySelector('input[name="htmlTeacherClub"]:checked').value;
    teacherAnnouncement[counter] = document.getElementById("htmlTeacherAnnouncement").value;   

    //Storing Data In The Local Storage
    localStorage.setItem("teacherGradeKey", JSON.stringify(teacherGrade));
    localStorage.setItem("teacherGenderKey", JSON.stringify(teacherGender));
    localStorage.setItem("teacherClubKey", JSON.stringify(teacherClub));
    localStorage.setItem("teacherAnnouncementKey", JSON.stringify(teacherAnnouncement));
   
    alert("Your Announcement Has Succesfully Been Saved")
    
    counter++;
   }

