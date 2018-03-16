function onPost() {
    console.log("posting new moment");
    var commentInput = document.getElementById("postedText").innerHTML;

    document.getElementById("postedContent").innerHTML = commentInput;
    document.getElementById("addedMoments").style.display = "inline-block";
    document.getElementById("addedPrePic1").style.display = "none";
    document.getElementById("postedText").innerHTML = "";
}

function readURL(input) {
    console.log("readURL ing");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            console.log("add pic1");
            document.getElementById("addedPic1").src = e.target.result;
            document.getElementById("addedPrePic1").src = e.target.result;
            document.getElementById("addedPrePic1").style.display = "inline-block";
        };
        reader.readAsDataURL(input.files[0]);
    }

    if (input.files && input.files[1]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            console.log("add pic2");
            document.getElementById("addedPic2").src = e.target.result;
        };
        reader.readAsDataURL(input.files[1]);

    }
}


function onShareFeed() {
    console.log("sharing feed");
    console.log("sharing feed");
    window.location.replace("discuss.html?action=shareFeed");
    // document.location.href = "discuss.html";
    console.log("sharing feed");
    console.log("sharing feed");
    console.log("sharing feed");
    console.log("sharing feed");
    console.log("sharing feed");
    // onShareFeedHelper();
    // flag = 1;
    console.log("flag: " + flag);
    // var commentInput = document.getElementById("postedText").innerHTML;
}

function onShareFeedHelper() {
    // console.log("flag: " + flag);
    var parameters = location.search.substring(1).split("=");

    var temp = parameters[1];
    console.log("flag: " + temp);
    // document.getElementById("log").innerHTML = l;
    // document.getElementById("pass").innerHTML = p;
    if (temp == "shareFeed") {
        document.getElementById("addedPrePic1").src = "images/feed.jpg";
        document.getElementById("addedPic1").src = "images/feed.jpg";
        document.getElementById("addedPrePic1").style.display = "inline-block";

    }
    console.log("sharing feed helper!!!!!!!!!!!!!!!");
}


// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}



  function post(){
    var content = document.getElementById.value;
    console.log(content);
  }

  function thumbUp(clicked_id){
    var likeCount = document.getElementById("like"+clicked_id).innerHTML;
    likeCount++;
    document.getElementById("like"+clicked_id).innerHTML = likeCount;
    document.getElementById("up"+clicked_id).style = "display:none";
    document.getElementById("down"+clicked_id).style="";
  }

  function thumbDown(clicked_id){
    var likeCount = document.getElementById("like"+clicked_id).innerHTML;
    likeCount--;
    document.getElementById("like"+clicked_id).innerHTML = likeCount;
    document.getElementById("up"+clicked_id).style = "";
    document.getElementById("down"+clicked_id).style = "display:none";
  }

  function onComment(clicked_id){
    document.getElementById("comment"+clicked_id).style = "";
  }

  function submit(clicked_id){
    var content = document.getElementById("commentBox"+clicked_id).value;
    document.getElementById("commentArea"+clicked_id).insertAdjacentHTML('afterend', "<hr class=\"w3-clear\"><img src=\"images/profile.jpg\" alt=\"Avatar\" class=\"w3-left w3-circle w3-margin-right\" style=\"width:40px;height = 40px;\"><h5>Coment from you: </h5>"+content);
    document.getElementById("comment"+clicked_id).style = "display:none";
    document.getElementById("commentBox"+clicked_id).value = null;
  }
