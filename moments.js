function onPost() {
    console.log("posting new moment");
    var commentInput = document.getElementById("postedText").innerHTML;

    document.getElementById("postedContent").innerHTML = commentInput;
    document.getElementById("addedMoments").style.display = "inline-block";
}

function readURL(input) {
    console.log("readURL ing");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            console.log("add pic1");
            document.getElementById("addedPic1").src = e.target.result;
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