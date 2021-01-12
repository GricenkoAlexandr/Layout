'use strict';

function btnClick() {
    let greeting='';
    let uName=document.querySelector(".inpName").value;
        if (uName=='') {
            greeting='Эй, алё, шо за фигня, погонялово своё вфигач по бырику!!!';
        }
        else {
            greeting=`Привет ${uName} как жизтя ваще, твои данные уже отправились в нужное место и может быть даже чёто и произойдёт)`;
        }
        document.querySelector(".btnInp").style.background='#fced26';

    document.querySelector(".titleAns").innerHTML=greeting;
};

document.querySelector(".btnInp").onclick = btnClick;