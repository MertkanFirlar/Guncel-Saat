//tarih ve saat
let zaman=document.querySelector("#zaman")
function tarihSaat() {
    var date = new Date().toLocaleString('TR');
    document.getElementById("zaman").innerHTML = date;

}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 
let fullname = prompt("Lütfen isminizi giriniz")
let add = document.querySelector("#add")

add.innerHTML = `${add.innerHTML} ${fullname}`





