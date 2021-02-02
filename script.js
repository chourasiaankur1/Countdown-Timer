let timeLeft = 3600;
let pause = true;

function countDown(){

    if(pause == false)
    {
        let time = timeLeft;
        let seconds = time%60;
        time = (time-seconds)/60;
        let minutes = time%60;
        time = (time-minutes)/60;
        let hours = time%24;

        document.getElementById("secs").innerHTML = seconds;
        document.getElementById("mins").innerHTML = minutes;
        document.getElementById("hours").innerHTML = hours;

        timeLeft--;
    }
}

$(document).ready(function(){

    $(".play-pause").click(function(){
        
        if(pause == false)
        {
            pause = true;
            $(".play-pause").attr("id","play");
            document.getElementsByTagName("h1")[0].innerHTML = "Time is paused!"
        }
        else
        {
            pause = false;
            $(".play-pause").attr("id","pause");
            document.getElementsByTagName("h1")[0].innerHTML = "Time is running up!"
        }
    });

    $('#power').click(function(){
        $('#power').toggleClass('active');

        if($('#power').hasClass("active"))
        {
            document.getElementsByClassName("inputHrs")[0].style.visibility = "visible";
            document.getElementsByClassName("inputMins")[0].style.visibility = "visible";
            document.getElementsByClassName("enter")[0].style.visibility = "visible";
            $(".play-pause").attr("id","pause");
        }
        else
        {
            document.getElementById("hours").innerText = "0";
            document.getElementById("mins").innerText = "0";
            document.getElementById("secs").innerText = "0";
            pause = true;
            $(".play-pause").attr("id","play");
        }
    });

    $('.enter').click(function(){

        let hours = Number(document.getElementsByClassName("inputHrs")[0].value);
        let mins = Number(document.getElementsByClassName("inputMins")[0].value);
        
        timeLeft = hours*3600+mins*60;

        document.getElementsByClassName("inputHrs")[0].style.visibility = "hidden";
        document.getElementsByClassName("inputMins")[0].style.visibility = "hidden";
        document.getElementsByClassName("enter")[0].style.visibility = "hidden";

        pause = false;
    });
});

setInterval(countDown,1000);

