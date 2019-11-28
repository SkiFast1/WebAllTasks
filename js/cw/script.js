/*let years = prompt('Сколько вам лет?', 100);
alert('Вам ' + years + ' лет!');
let isAdmin = confirm('Вам ' + years + ' лет?');
alert(isAdmin);
*/
document.write("<b>NUMBER</b> OF <i>ANCHORS</i>: ",document.anchors.length),'<br>';
document.write('URL: ', document.URL, '<br>');
document.write('URL2: ', document.location.href, '<br>');
document.write('TITLE: ', document.title, '<br>');
document.write('HOSTNAME: ', document.location.hostname, '<br>');
document.write('NUMBER OF FORMS: ', document.getElementsByTagName('form').length,'<br>');
document.write('FIRST FORM NAME: ', document.getElementsByTagName('form')[0].name,'<br>');
document.write('NUMBER OF PICS: ', document.images.length,'<br>');
document.write('FIRST PIC ID: ', document.getElementsByTagName('img')[0].id,'<br>');
document.write('NUMBER OF LINKS: ', document.links.length,'<br>');
document.write('FIRST LINK ID: ',document.querySelectorAll("a[href]")[0].id,'<br>');

x = document.getElementById("butt1");
document.write("BUTTON NAME: ",x.name,'<br>');
document.write("BUTTON TYPE: ",x.type,'<br>');
document.write("BUTTON VAL: ",x.value,'<br>');
document.write("BUTTON PARENT: ",x.parentElement.id,'<br>');

y = document.getElementById("anotherForm");
for (var i = 0; i < y.length; i++) {
    document.write('VAL',i+1,' IS ',y[i].value,'<br>');
}
document.write("ACTION: ",y.action,'<br>');
document.write("DATATYPE: ",y.enctype,'<br>');
document.write("AMOUNT OF ELEMS: ",y.length,'<br>');
document.write("METHOD: ",y.method,'<br>');
document.write("NAME: ",y.name,'<br>');

//FUNCTIONS
for (let i = 0; i < 10; i++){
console.log('XSS_INJ'+i);
}
function sayHi(){
    alert('COLOR CHANGE');
document.body.bgColor="lavender";
}
function sayGi(){
    alert('TEXT CHANGE');
    document.getElementById("pl").innerHTML="DELETEDDDDD";
}
function disa()
{
    let but = document.getElementById('butt1');
    but.disabled = true;
}
function resetForm()
    {
        y.reset();
    }
