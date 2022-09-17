let fullName = prompt ("Lutfen Adinizi Girin:")


let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small> ${fullName}</small>`


window.onload = startTime;
function startTime()
{
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('saat').innerHTML=h+":"+m+":"+s;
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}


var bugun = new Date();

var formatliTarih=bugun.getDate();

formatliTarih=formatliTarih+"."+Number(bugun.getMonth()+1);

formatliTarih=formatliTarih+"."+bugun.getFullYear();
document.getElementById("formatliTarih").innerHTML = formatliTarih;

function myFunction() {
    alert("Randevunuz başarıyla alınmıştır!");
  }

  