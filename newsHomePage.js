//Global Variable Used In Arithmetic For Loading New Pages
let y = 0;



//Display Function
function displayAllAnnouncement() {

    //Getting Variables From Local Storage
    var teacherDetails = JSON.parse(localStorage.getItem("teacherAnnouncementKey")) 
    var announcementTextHolder = [];
    var x = document.getElementsByClassName("Announce");
    var quotes = ["❝You can totally do this.❞", "❝Don’t tell people your plans. Show them your results.❞", "❝We can do anything we want to if we stick to it long enough.❞", "❝Try Again. Fail again. Fail better.❞", "❝Good things happen to those who hustle.❞", "❝Keep going. Be all in.”", "❝Dream big. Pray bigger.❞", "❝The past does not equal the future.❞", "❝You matter.❞"]

    var idx = Math.floor(Math.random() * quotes.length)
        document.getElementById('quotes').innerHTML = quotes[idx]

    for (let i = 0; i < teacherDetails.length; i++){
        announcementTextHolder.push(teacherDetails[i])
        
    }
    
        //Displaying the text within the announcement boxes        
        document.getElementById("textOne").innerHTML = announcementTextHolder[announcementTextHolder.length-1];
        document.getElementById("textTwo").innerHTML = announcementTextHolder[announcementTextHolder.length-2];
        document.getElementById("textThree").innerHTML = announcementTextHolder[announcementTextHolder.length-3];

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
}