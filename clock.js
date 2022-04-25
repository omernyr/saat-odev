
let name1 = prompt("İsminiz nedir ?")
let text1 = document.querySelector(".text-1")
let text2 = document.querySelector(".text-2")

// Text 1 

text1.innerHTML = `Merhaba ${name1}! Hoş geldin!`

// Saat 

window.onload = startTime;
function startTime()
{
 var today=new Date();
 var d=today.getDay();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 switch(d)
    {
        case 1: d = "Pazartesi"
        break
        case 2: d = "Sali"
        break
        case 3: d = "Çarşamba"
        break
        case 4: d = "Perşembe"
        break
        case 5: d = "Cuma"
        break
        case 6: d = "Cumartesi"
        break
        case 7: d = "Pazar"
        break

    }


 document.querySelector('.clock').innerHTML=h+":"+m+":"+s+" "+d;
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


// Text 2

text2.innerHTML = `tarihinde
<strong>Kodluyoruz Frontend Web Development Patikası</strong>'nın
Javascript bölümü 1. Ödevindesiniz.`
