$(document).ready(function () {
    console.log("loaded");
    var goal = Math.floor(Math.random() * 122) + 19;
    if (goal > 121) {
        goal = 121;
    }
    console.log("goal: " + goal);

    var img1 = Math.floor(Math.random() * 12) + 1;
    var img2 = Math.floor(Math.random() * 12) + 1;
    var img3 = Math.floor(Math.random() * 12) + 1;
    var img4 = Math.floor(Math.random() * 12) + 1;

    console.log("img1: " + img1);
    console.log("img2: " + img2);
    console.log("img3: " + img3);
    console.log("img4: " + img4);

    var goal_html = $("#goal");
    var img1_html = $("#image-1");
    var img2_html = $("#image-2");
    var img3_html = $("#image-3");
    var img4_html = $("#image-4");
    var wins_html = $("#win");
    var lose_html = $("#lose");
    var total_html = $("#total");

    var total = 0;
    var win = 0;
    var lose = 0;

    goal_html.html(goal);


    img1_html.on("click", function () {
        total = total + img1;
        total_html.html(total);
        checker();

    });
    img2_html.on("click", function () {
        total = total + img2;
        total_html.html(total);
        checker();

    });
    img3_html.on("click", function () {
        total = total + img3;
        total_html.html(total);
        checker();

    });
    img4_html.on("click", function () {
        total = total + img4;
        total_html.html(total);
        checker();
    });

    function checker() {
        if (total == goal) {
            alert("win");
            win = win + 1;
            wins_html.html(win);
         reset();
        } else if (total > goal) {
            alert("lose");
            lose = lose + 1;
            lose_html.html(lose); 
            reset();

        }

    }
    function reset() {
        goal = Math.floor(Math.random() * 122) + 19;
        if (goal > 121) {
            goal = 121;
        }
        console.log("goal: " + goal);

        img1 = Math.floor(Math.random() * 12) + 1;
        img2 = Math.floor(Math.random() * 12) + 1;
        img3 = Math.floor(Math.random() * 12) + 1;
        img4 = Math.floor(Math.random() * 12) + 1;

        console.log("img1: " + img1);
        console.log("img2: " + img2);
        console.log("img3: " + img3);
        console.log("img4: " + img4);
       goal_html.html(goal);

       total = 0;

       total_html.html(total); 



    }







}) 
