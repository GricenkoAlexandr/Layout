`use strict`;

 let btnop=document.querySelector('.btn_op');
 console.log(btnop);
    btncl=document.querySelector('.btn_cl');
    console.log(btncl);
    modal=document.querySelector('.modal_block');
    console.log(modal);

    btnop=addEventListener('click', ()=> {
        modal.style.classList.removed('hide');
    })