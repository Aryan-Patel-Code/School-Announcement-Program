//Establishing the Variables
var teacherGrade9 = [];
var teacherGrade10 = [];
var teacherGrade11 = [];
var teacherGrade12 = [];
var teacherGradeA = [];

var teacherGenderA = [];
var teacherGenderM = [];
var teacherGenderF = [];

var teacherClubAll = [];
var teacherClubMath = [];
var teacherClubHack = [];
var teacherClubDeca = [];
var teacherClubEco = [];

var teacherAnnouncement = [];

var counter = 0;

//Getting The Input Through The Submit
function getData(){
    teacherGradeA[counter] = document.getElementById("gradeA").checked;
    teacherGrade9[counter] = document.getElementById("grade9").checked;
    teacherGrade10[counter] = document.getElementById("grade10").checked;
    teacherGrade11[counter] = document.getElementById("grade11").checked;
    teacherGrade12[counter] = document.getElementById("grade12").checked;
    
    teacherGenderA[counter] = document.getElementById("genderA").checked;
    alert(teacherGenderA)
    teacherGenderM[counter] = document.getElementById("genderM").checked;
    teacherGenderF[counter] = document.getElementById("genderF").checked;

    teacherClubAll[counter] = document.getElementById("clubAll").checked;
    teacherClubMath[counter] = document.getElementById("clubMath").checked;
    teacherClubHack[counter] = document.getElementById("clubHack").checked;
    teacherClubDeca[counter] = document.getElementById("clubDeca").checked;
    teacherClubEco[counter] = document.getElementById("clubEco").checked;

    teacherAnnouncement[counter] = document.getElementById("htmlTeacherAnnouncement").value;   


    //Setting Data Into Local Storage
    localStorage.setItem("teacherGradeAKey", JSON.stringify(teacherGradeA));
    localStorage.setItem("teacherGrade9Key", JSON.stringify(teacherGrade9));
    localStorage.setItem("teacherGrade10Key", JSON.stringify(teacherGrade10));
    localStorage.setItem("teacherGrade11Key", JSON.stringify(teacherGrade11));
    localStorage.setItem("teacherGrade12Key", JSON.stringify(teacherGrade12));

    localStorage.setItem("teacherGenderAKey", JSON.stringify(teacherGenderA));
    localStorage.setItem("teacherGenderMKey", JSON.stringify(teacherGenderM));
    localStorage.setItem("teacherGenderFKey", JSON.stringify(teacherGenderF));
  
    localStorage.setItem("teacherClubAllKey", JSON.stringify(teacherClubAll));
    localStorage.setItem("teacherClubMathKey", JSON.stringify(teacherClubMath));
    localStorage.setItem("teacherClubHackKey", JSON.stringify(teacherClubHack));
    localStorage.setItem("teacherClubDecaKey", JSON.stringify(teacherClubDeca));
    localStorage.setItem("teacherClubEcoKey", JSON.stringify(teacherClubEco));

    localStorage.setItem("teacherAnnouncementKey", JSON.stringify(teacherAnnouncement));

    counter++;
}