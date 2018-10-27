
var chooseHero=false;
var newFight=false;
var hero=0;
var villan=0;
var hp=[200,180,150,100];
var ap=[10,15,20,25];
var ca=[5,10,15,20];
var cuma=[0,0,0,0];
var def=0;


//player 1 button
$("#p1p").append("<p>"+hp[0] +"</p>");
$("#p2p").append("<p>"+hp[1] +"</p>");
$("#p3p").append("<p>"+hp[2] +"</p>");
$("#p4p").append("<p>"+hp[3] +"</p>");

$("#p1").click(function(){
    if(chooseHero===false){
        chooseHero=true;
        hero=0;
    document.getElementById("choose1").innerHTML="Hero";
    $("#bigDiv2").append("<b>Choose Your Oppenent</b> <br>");
    $("#pic2").appendTo("#bigDiv2");
    $("#pic3").appendTo("#bigDiv2");
    $("#pic4").appendTo("#bigDiv2");
}
else if(chooseHero===true&& newFight===false){
    newFight=true;
    villan=0;
    $("#pic1").appendTo("#bigDiv3");
    $("#bigDiv3").append("<br>");

    $("#bigDiv3").append("<p class= 'h4'> Attack for: </p>");
    $("#bigDiv3").append("<p class= 'h4' id='at'></p>");
    $("#bigDiv3").append("<p class= 'h4'> Counter Attacked for: </p>");
    $("#bigDiv3").append("<p class= 'h4' id='ct'></p>");
}
});

//player 2 button
$("#p2").click(function(){
    if(chooseHero===false){
        chooseHero=true;
        hero=1;
    document.getElementById("choose1").innerHTML="Hero";
    $("#bigDiv2").append("<b>Choose Your Oppenent</b> <br>");
    $("#pic1").appendTo("#bigDiv2");
    $("#pic3").appendTo("#bigDiv2");
    $("#pic4").appendTo("#bigDiv2");
}
else if(chooseHero===true&&newFight===false){
newFight=true;
villan=1;
$("#pic2").appendTo("#bigDiv3");
$("#bigDiv3").append("<br>");

$("#bigDiv3").append("<p class= 'h4'> Attack for: </p>");
$("#bigDiv3").append("<p class= 'h4' id='at'></p>");
$("#bigDiv3").append("<p class= 'h4'> Counter Attacked for: </p>");
$("#bigDiv3").append("<p class= 'h4' id='ct'></p>");
}
});
//player 3 button
$("#p3").click(function(){
    if(chooseHero===false){
        chooseHero=true;
        hero=2;
    document.getElementById("choose1").innerHTML="Hero";
    $("#bigDiv2").append("<b>Choose Your Oppenent</b> <br>");
    $("#pic1").appendTo("#bigDiv2");
    $("#pic2").appendTo("#bigDiv2");
    $("#pic4").appendTo("#bigDiv2");
}
else if(chooseHero===true&&newFight===false){
    newFight=true;
    villan=2;
    $("#pic3").appendTo("#bigDiv3");
    $("#bigDiv3").append("<br>");

    $("#bigDiv3").append("<p class= 'h4'> Attack for: </p>");
    $("#bigDiv3").append("<p class= 'h4' id='at'></p>");
    $("#bigDiv3").append("<p class= 'h4'> Counter Attacked for: </p>");
    $("#bigDiv3").append("<p class= 'h4' id='ct'></p>");
}
});
//player 4 button
$("#p4").click(function(){
    if(chooseHero===false){
        chooseHero=true;
        hero=3;
    document.getElementById("choose1").innerHTML="Hero";
    $("#bigDiv2").append("<b>Choose Your Oppenent</b> <br>");
    $("#pic1").appendTo("#bigDiv2");
    $("#pic2").appendTo("#bigDiv2");
    $("#pic3").appendTo("#bigDiv2");
}
else if(chooseHero===true&&newFight===false){
    newFight=true;
    villan=3;
    $("#pic4").appendTo("#bigDiv3");
    $("#bigDiv3").append("<br>");

    $("#bigDiv3").append("<p class= 'h4'> Attack for: </p>");
    $("#bigDiv3").append("<p class= 'h4' id='at'></p>");
    $("#bigDiv3").append("<p class= 'h4'> Counter Attacked for: </p>");
    $("#bigDiv3").append("<p class= 'h4' id='ct'></p>");
}

});

$("#attack").click(function(){
    if(newFight===true){
        console.log(true);

        cuma[hero]=cuma[hero]+ap[hero];
        hp[villan]=hp[villan]-cuma[hero];

        hp[hero]=hp[hero]-ca[villan];
        document.getElementById("at").innerHTML=cuma[hero];
        document.getElementById("ct").innerHTML=ca[villan];
        if(hero==0 ||villan==0){
            document.getElementById("p1p").innerHTML="HP: "+hp[0];

        }
        if(hero==1 ||villan==1){
            document.getElementById("p2p").innerHTML="HP: "+hp[1];

        }
        if(hero==2 ||villan==2){
            document.getElementById("p3p").innerHTML="HP: "+hp[2];

        }
        if(hero==3 ||villan==3){
            document.getElementById("p4p").innerHTML="HP: "+hp[3];

        }
        
        if(hp[villan]<=0){
            $("#bigDiv3").empty();
            $("#bigDiv3").append("<h3>Enemies Avaiable to Attack</h3> <h3>Fight Section</h3> <h3>Defender</h3>");
            def++;
            if(def==3){
                alert("You win!!!");
                document.location.reload();

            }
            else{
            alert("Choose your next opponent");
            newFight=false;
            }
        }
        if(hp[hero]<=0){
            alert("You lose :3");
        }



        
    
    }
  
});