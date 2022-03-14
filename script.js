qiymet=prompt('qiymet daxil edin');
metncevir=qiymet.split('.');
window.alert(metncevir[0]+ ' '+ 'manat' + ' ' + metncevir[1] + ' ' + 'qəpik')

let emekhaqqi=prompt('emekhaqqinizi daxil edin');
let vergisizmebleg= Number(emekhaqqi)-Number(emekhaqqi)*13/100;
window.alert(vergisizmebleg);

let adsoyad=prompt('ad soyad ata adı ?');
let ayri=adsoyad.split(' ');
let soyad=ayri[1];
let ataadi=ayri[2];
window.alert(ayri[0] + ' ' + soyad[0] + '.'+ ataadi[0])

let mebleg=Number(prompt('meblegi daxil edin'));
let aysayi=Number(prompt('ayi daxil edin'));
let faiz=Number(prompt('faizi daxil edin'));
let menfeet=mebleg*aysayi*faiz/100;
window.alert(aysayi + ' aydan sonra emanetden qazanciniz ' + menfeet + ' olacaq');
