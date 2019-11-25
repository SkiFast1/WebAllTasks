//let years = prompt('Сколько вам лет?', 100);
//alert('Вам ' + years + ' лет!');
//let isAdmin = confirm('Вам ' + years + ' лет?');
//alert(isAdmin);

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
    let but = document.getElementsByTagName('button')[0];
    but.disabled = true;
}
