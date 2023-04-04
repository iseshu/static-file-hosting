var i = 0;
let myObj;
function asssgin(){
  const url = "https://skip-cors.vercel.app/cors?url=https://ibomma-api.vercel.app/";
  const Http = new XMLHttpRequest();
  Http.open('GET',url);
  Http.send();
  Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     myObj = JSON.parse(this.responseText);
     var hw =  "<div id='class-subdiv-ads'><h id='class-title-ads-m'><b>New Movie</b></h>"+ '<link onload="bypass()"  rel="stylesheet" href="https://file-hosting-yss.netlify.app/movieruz-scriptjs/style.css"> ';
     var hp = '<img  id="class-img-ads" src="'+myObj[i].image+'">';
     var hs = "<h4 id='class-title-ads'>"+myObj[i].title+"</h4>"+'<button id="class-link-ads">Watch Now</button><br><br></div>';
     var html = hw+hp+hs;
     document.getElementById("class-atag-ads").href = "https://t.me/+NTyXOsgWd2tkOGM1";
     var x = document.getElementById("class-atag-ads");
     document.getElementById('class-div-ads').style.width = "250px";
     x.innerHTML = html;
     ++i;
     switchd(this.responseText);
      }
  };
}

function switchd(){
    if (i==myObj.length){
      i = 0;
    }
    else{
      ++i;
    }
    document.getElementById("class-img-ads").src = "https://skip-cors.vercel.app/cors?url="+myObj[i].image;
    document.getElementById("class-title-ads").innerHTML = myObj[i].title;
}

setInterval(switchd, 2500);
