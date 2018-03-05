var groupGoal = "you're not in a group";
var groupMember = "None";
var groupOwner = "None";
var group = ["outdoor running group", "swimming group"];
var groupGoals = ["30 minutes running each day", "one hour daily swimming"];
var searchGroupNum = 0;

function onNewGroup() {
    console.log("new a group");
    document.getElementById('popNewGroup').style.display = "block";
    document.getElementById("searchResult").style.display = "none";
}

function onSubmit() {
    console.log("submit a new group");

    var gn = document.getElementById("gn").value;
    var gg = document.getElementById("gg").value;
    group.push(gn);
    groupGoals.push(gg);
    document.getElementById("groupGoal").innerHTML = gg;
    document.getElementById("groupOwner").innerHTML = "YOU";
    document.getElementById("mygn").innerHTML = ": " + gn;
    document.getElementById('popNewGroup').style.display = "none";
    document.getElementById("notValidSreach").style.display = "none";
}

function onSearch() {
    // document.getElementById("g1b").style.display = "inline-block";
    // document.getElementById("g2b").style.display = "inline-block";
    document.getElementById("notValidSreach").style.display = "none";
    var searchInput = document.getElementById("searchInput").value;

    if (searchInput == "") {
        document.getElementById("notValidSreach").style.display = "inline-block";
        document.getElementById("notValidSreach").innerHTML = "please fill the search box";
        return;
    }
    for (i = 0; i < group.length; i++) {
        if (searchInput == group[i]) {
            document.getElementById("g1b").style.display = "inline-block";
            document.getElementById("searchResult").style.display = "inline-block";
            console.log("searching");
            document.getElementById("group1").innerHTML = "name: " + group[i];
            document.getElementById("group1Goal").innerHTML = "goals: " + groupGoals[i];
            searchGroupNum = i;
            return;
        }
    }

    document.getElementById("searchResult").style.display = "inline-block";
    document.getElementById("g1b").style.display = "none";
    console.log("searching");
    document.getElementById("group1").innerHTML = "group named " + searchInput + " not exists";
    document.getElementById("group1Goal").innerHTML = "";
    // document.getElementById("group1Goal").innerHTML = groupGoals[0];
    // document.getElementById("group2").innerHTML = group[1];
    // document.getElementById("group2Goal").innerHTML = groupGoals[1]
}

function onLeaveGroup() {
    console.log("leave the group");
    document.getElementById("groupGoal").innerHTML = "You're not in a group";
    document.getElementById("groupOwner").innerHTML = "None";
    document.getElementById("mygn").innerHTML = "";
    document.getElementById("searchResult").style.display = "none";
    document.getElementById("notValidSreach").style.display = "none";
}

function onJoinGroup() {
    document.getElementById("groupGoal").innerHTML = groupGoals[searchGroupNum];
    document.getElementById("groupOwner").innerHTML = "YOU";
    document.getElementById("mygn").innerHTML = ": " + group[searchGroupNum];
    alert("join the " + group[searchGroupNum]);
}