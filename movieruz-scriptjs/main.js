var i = 0;
let myObj;
function asssgin(){
  const url = "https://skip-cors.vercel.app/cors?url=https://movierulz.vercel.app/";
  const Http = new XMLHttpRequest();
  Http.open('GET',url);
  Http.send();
  Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     myObj = JSON.parse(this.responseText);
     var hw =  "<h id='class-title-ads-m'><b>New Movie</b></h>"+ '<link onload="bypass()"  rel="stylesheet" href="https://raw.githubusercontent.com/iseshu/static-file-hosting/main/movieruz-scriptjs/style.css"> ';
     var hp = '<img  id="class-img-ads" src="'+myObj.data[i].image+'">';
     var hs = "<h4 id='class-title-ads'>"+myObj.data[i].title+"</h4>"+'<button id="class-link-ads">Watch Now</button><br><br>';
     var html = hw+hp+hs;
     document.getElementById("class-atag-ads").href = "https://t.me/+NTyXOsgWd2tkOGM1";
     var x = document.getElementById("class-div-ads");
     x.innerHTML = html;
     ++i;
     switchd(this.responseText);
      }
  };
}

function switchd(){
    if (i==myObj.data.length){
      i = 0;
    }
    else{
      ++i;
    }
    document.getElementById("class-img-ads").src = myObj.data[i].image;
    document.getElementById("class-title-ads").innerHTML = myObj.data[i].title;
}

setInterval(switchd, 2500);
