//Establishing the Variables
var studentGradeA;
var studentGrade9;
var studentGrade10;
var studentGrade11;
var studentGrade12;

var studentGenderA;
var studentGenderM;
var studentGenderF;

var studentClubAll;
var studentClubMath;
var studentClubHack;
var studentClubDeca;
var studentClubEco;

//Getting The Input Through The Search Button
function getTeacherData(){
    studentGradeA = document.getElementById("gradeA").checked;
    studentGrade9 = document.getElementById("grade9").checked;
    studentGrade10 = document.getElementById("grade10").checked;
    studentGrade11 = document.getElementById("grade11").checked;
    studentGrade12 = document.getElementById("grade12").checked;
   
    studentGenderA = document.getElementById("genderA").checked;
    studentGenderM = document.getElementById("genderM").checked;
    studentGenderF = document.getElementById("genderF").checked;

    studentClubAll = document.getElementById("clubAll").checked;
    studentClubMath = document.getElementById("clubMath").checked;
    studentClubHack = document.getElementById("clubHack").checked;
    studentClubDeca = document.getElementById("clubDeca").checked;
    studentClubEco = document.getElementById("clubEco").checked;

    localStorage.setItem("studentGradeAKey", studentGradeA);
    localStorage.setItem("studentGrade9Key", studentGrade9);
    localStorage.setItem("studentGrade10Key", studentGrade10);
    localStorage.setItem("studentGrade11Key", studentGrade11);
    localStorage.setItem("studentGrade12Key", studentGrade12);

    localStorage.setItem("studentGenderAKey", studentGenderA);
    localStorage.setItem("studentGenderMKey", studentGenderM);
    localStorage.setItem("studentGenderFKey", studentGenderF);

    localStorage.setItem("studentClubAllKey", studentClubAll);
    localStorage.setItem("studentClubMathKey", studentClubMath);
    localStorage.setItem("studentClubHackKey", studentClubHack);
    localStorage.setItem("studentClubDecaKey", studentClubDeca);
    localStorage.setItem("studentClubEcoKey", studentClubEco);

    //event.preventDefault();
    //window.location = "studentViewerPage.html";
   }

