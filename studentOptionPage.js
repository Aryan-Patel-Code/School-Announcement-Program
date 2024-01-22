//Establishing the Variables
var studentGrade;
var stduentGender;
var studentClub;

//Getting The Input Through The Search Button
function getTeacherData(){
    studentGrade = document.querySelector('input[name="htmlStudentGrade"]:checked').value;
    studentGender = document.querySelector('input[name="htmlStudentGender"]:checked').value;
    studentClub = document.querySelector('input[name="htmlStudentClub"]:checked').value;

    localStorage.setItem("studentGradeKey", studentGrade);
    localStorage.setItem("studentGenderKey", studentGender);
    localStorage.setItem("studentClubKey", studentClub);
    event.preventDefault();
    window.location = "studentViewerPage.html";
   }

