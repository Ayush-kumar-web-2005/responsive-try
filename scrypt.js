var object = document.getElementById('object');
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var login = document.getElementById('login');
var register = document.getElementById('register');

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

var info1 = document.getElementById('info');
var info2 = document.getElementById('info2');

var logo1 = document.getElementById('logo1');
var logo2 = document.getElementById('logo2');









item2.onclick = function () {

    object.style.left = '15vw';
    // duration: 1000;


}
item3.onclick = function () {

    object.style.left = '30vw';

}
item1.onclick = function () {

    object.style.left = '0vw';


}

login.onclick = function () {

    img1.style.opacity = '0';
    img2.style.opacity = '1';
    info1.style.opacity = '0';
    info2.style.opacity = '1';
    logo2.style.opacity = '1';
    logo1.style.opacity = '0';
    login.style.fontSize = '1.3em';
    register.style.fontSize = '1em';





}
register.onclick = function () {

    img1.style.opacity = '1';
    img2.style.opacity = '0';
    info1.style.opacity = '1';
    info2.style.opacity = '0';
    logo1.style.opacity = '0';
    logo2.style.opacity = '1';

    login.style.fontSize = '1em';
    register.style.fontSize = '1.3em';

}
