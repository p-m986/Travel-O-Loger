var displayNumber = 1;
var i = 0;
var j = 1;
var speed = 25;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
function hideName(){
    $("#PageName").fadeOut();
}
$(document).ready(function(){
    typeWriter();
    checkLogin();
    if (localStorage.getItem("fav1") == "true"){
        $("#box1 .favbtn i").removeClass("fa-heart-o");
        $("#box1 .favbtn i").addClass("fa-heart");
    }
    if (localStorage.getItem("fav2") == "true"){
        $("#box2 .favbtn i").removeClass("fa-heart-o");
        $("#box2 .favbtn i").addClass("fa-heart");
    }
    if (localStorage.getItem("fav3") == "true"){
        $("#box3 .favbtn i").removeClass("fa-heart-o");
        $("#box3 .favbtn i").addClass("fa-heart");
    }
    if (localStorage.getItem("fav4") == "true"){
        $("#box4 .favbtn i").removeClass("fa-heart-o");
        $("#box4 .favbtn i").addClass("fa-heart");
    }
    if (localStorage.getItem("fav5") == "true"){
        $("#box5 .favbtn i").removeClass("fa-heart-o");
        $("#box5 .favbtn i").addClass("fa-heart");
    }
    // favorite button work
    $("#fav").click(function(){
        $(".BlurWholePage").show();
        $(".favDisplay").show();
        for(j; j < 6; j++){
            if((localStorage.getItem("fav"+j+"")) == "true"){
                let a = "box"+j+"";
                let b = "b"+j+"";
                let c = "n"+j+"";
                loadDoc1(a, b, c);
            }
        }
    });
    $(".BlurWholePage").click(function (){
        $(".BlurWholePage").hide();
        $(".favDisplay").hide();
    });
    // Hiding the extra images as soon as the document is ready
    $("#RightClick").click(function(){
        if(displayNumber == 5){
            displayNumber = 5;
        }
        else{
            displayNumber += 1;
        }
        $("#box"+(displayNumber-1)+"").fadeOut()
        $("#box"+(displayNumber-1)+" .pic").show()
        $("#box"+displayNumber+"").fadeIn()
        revNameCssChange();
        clearTextArea();
    });
    $("#LeftClick").click(function(){
        if(displayNumber == 1){
            displayNumber = 1;
        }
        else{
            displayNumber -= 1;
        }
        clearTextArea();
        $("#box"+(displayNumber+1)+"").fadeOut()
        $("#box"+displayNumber+"").fadeIn()
        $("#box"+(displayNumber+1)+" .pic").show()
        revNameCssChange();
    });

    // Image click function's
    $("#box1").click(function(){
        hideName();
        let imageUrl = "./Pictures/Locations/Majuli-Assam.jpg";
        $(".leftDiv .backdrop").css("background-image", "url(" + imageUrl + ")");
        $("#box1 .pic").hide();
        clearTextArea();
        nameCssChange();
        $(".leftDiv .infoArea").show();
        $(".leftDiv .infoArea span").show();
        loadDoc("box1");
    });
    $("#box2").click(function(){
        hideName();
        let imageUrl = "./Pictures/Locations/Key-Monastery-Spiti.jpg";
        $(".leftDiv .backdrop").css("background-image", "url(" + imageUrl + ")");
        $("#box2 .pic").hide();
        clearTextArea();
        nameCssChange();
        $(".leftDiv .infoArea").show();
        $(".leftDiv .infoArea span").show();
        loadDoc("box2");
    });
    $("#box3").click(function(){
        hideName();
        let imageUrl = "./Pictures/Locations/Hampi-Karnataka.jpg";
        $(".leftDiv .backdrop").css("background-image", "url(" + imageUrl + ")");
        $("#box3 .pic").hide();
        clearTextArea();
        nameCssChange();
        $(".leftDiv .infoArea").show();
        $(".leftDiv .infoArea span").show();
        loadDoc("box3");
    });
    $("#box4").click(function(){
        hideName();
        let imageUrl = "./Pictures/Locations/Nohkalikai-Waterfalls-Cherrapunjee.jpg";
        $(".leftDiv .backdrop").css("background-image", "url(" + imageUrl + ")");
        $("#box4 .pic").hide();
        clearTextArea();
        nameCssChange();
        $(".leftDiv .infoArea").show();
        $(".leftDiv .infoArea span").show();
        loadDoc("box4");
    });
    $("#box5").click(function(){
        hideName();
        clearTextArea();
        let imageUrl = "./Pictures/Locations/Pangong-Lake-Ladakh.jpg";
        $(".leftDiv .backdrop").css("background-image", "url(" + imageUrl + ")");
        $("#box5 .pic").hide();
        nameCssChange();
        $(".leftDiv .infoArea").show();
        $(".leftDiv .infoArea span").show();
        loadDoc("box5");
    });

    // To detect favorite
    $("#box1 .favbtn").click(function(){
        if (count1 == 0){
            $("#box1 .favbtn i").removeClass("fa-heart-o");
            $("#box1 .favbtn i").addClass("fa-heart");
            count1 += 1;
            localStorage.setItem("fav1", "true");
        }
        else{
            $("#box1 .favbtn i").removeClass("fa-heart");
            $("#box1 .favbtn i").addClass("fa-heart-o");
            count1 = 0;
            localStorage.setItem("fav1", "false");
        }
    });
    $("#box2 .favbtn").click(function(){
        if (count2 == 0){
            $("#box2 .favbtn i").removeClass("fa-heart-o");
            $("#box2 .favbtn i").addClass("fa-heart");
            count2 += 1;
            localStorage.setItem("fav2", "true");
        }
        else{
            $("#box2 .favbtn i").removeClass("fa-heart");
            $("#box2 .favbtn i").addClass("fa-heart-o");
            count2 = 0;
            localStorage.setItem("fav2", "false");
        }
    });
    $("#box3 .favbtn").click(function(){
        if (count3 == 0){
            $("#box3 .favbtn i").removeClass("fa-heart-o");
            $("#box3 .favbtn i").addClass("fa-heart");
            count3 += 1;
            localStorage.setItem("fav3", "true");
        }
        else{
            $("#box3 .favbtn i").removeClass("fa-heart");
            $("#box3 .favbtn i").addClass("fa-heart-o");
            count3 = 0;
            localStorage.setItem("fav3", "false");
        }
    });
    $("#box4 .favbtn").click(function(){
        if (count4 == 0){
            $("#box4 .favbtn i").removeClass("fa-heart-o");
            $("#box4 .favbtn i").addClass("fa-heart");
            count4 += 1;
            localStorage.setItem("fav4", "true");
        }
        else{
            $("#box4 .favbtn i").removeClass("fa-heart");
            $("#box4 .favbtn i").addClass("fa-heart-o");
            count4 = 0;
            localStorage.setItem("fav4", "false");
        }
    });
    $("#box5 .favbtn").click(function(){
        if (count5 == 0){
            $("#box5 .favbtn i").removeClass("fa-heart-o");
            $("#box5 .favbtn i").addClass("fa-heart");
            count5 += 1;
            localStorage.setItem("fav5", "true");
        }
        else{
            $("#box5 .favbtn i").removeClass("fa-heart");
            $("#box5 .favbtn i").addClass("fa-heart-o");
            count5 = 0;
            localStorage.setItem("fav5", "false");
        }
    });
});

function nameCssChange(){
    $(".rightDiv .horizontalScroll .boxes .Name").css({"opacity": "1", "zIndex": "3"})
}
function revNameCssChange(){
    $(".rightDiv .horizontalScroll .boxes .Name").removeAttr("style");
    $(".rightDiv .horizontalScroll .boxes .Name").addClass("NameUpdate")
}

// Ajax for loading the description of the images when the user clicks on them
function loadDoc(boxnum) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      myFunction(this, boxnum);
      }
    };
    xhttp.open("GET", "ImageContent.xml", true);
    xhttp.send();
  }
  function myFunction(xml, box) {
    var xmlDoc = xml.responseXML;
    // let display = $("#"&box.toString()+" ."
    var x = xmlDoc.getElementsByTagName(box.toString());    
    var des = (x[0].childNodes[3].textContent).toString();
    var des1 = des.toString();
    // document.getElementById("display").innerHTML += des1.charAt(i);
    let count = 0;
    function typeWriter1(){
    if (i < des1.length) {
        document.getElementById("display").innerHTML += des1.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
    else{
        i = 0;
    }
    }
    typeWriter1();
  }


  function loadDoc1(boxnum, imageBox, nameBox) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      loadFav(this, boxnum, imageBox, nameBox);
      }
    };
    xhttp.open("GET", "ImageContent.xml", true);
    xhttp.send();
  }
  function loadFav(xml, box, imageBox, nameBox) {
    var xmlDoc = xml.responseXML;
    // let display = $("#"&box.toString()+" ."
    var x = xmlDoc.getElementsByTagName(box.toString());    
    var des = (x[0].childNodes[5].textContent).toString();
    var des1 = "<img src = "+des+"></img>";
    document.getElementById(imageBox).innerHTML += des1;
    document.getElementById(nameBox).innerHTML += x[0].childNodes[1].textContent;
  }



var speed1 = 100;
var pageName = "Travel-O-Loger";
function clearTextArea(){
    $("#display").empty();
}
function typeWriter() {

if (i < pageName.length) {
    document.getElementById("PageName").innerHTML += pageName.charAt(i);
    i++;
    setTimeout(typeWriter, speed1);
}
}
function addClassName(){
    
}
function removeClassName(){

}
function checkLogin(){
    localStorage.setItem("loginVal", "false");
    try{
        let loginCheck = localStorage.getItem("loginVal");
        if(loginCheck == null || loginCheck == "false"){
            console.log(loginCheck);
        }
        else{
            console.log("b");
        }
    }
    catch(err){
        console.log(err);
    }
}