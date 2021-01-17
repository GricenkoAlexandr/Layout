
"use strict";

let ofset=0;
const sliderLine=document.querySelector('.slider_line');

document.querySelector('.slider_next').addEventListener('click', function(){
    ofset+=1800;
    if (ofset>34200) {
        ofset=0;
    }
    sliderLine.style.left=-ofset+'px';
});

document.querySelector('.slider_prev').addEventListener('click', function(){
    ofset-=1800;
    if (ofset<0) {
        ofset=34200;
    }
    sliderLine.style.left=-ofset+'px';
});


























