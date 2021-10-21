const btns = document.querySelectorAll('.menu-icon');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btns.forEach((btnItem) =>{
            if(btnItem === btn){
                btnItem.classList.toggle('isOpen');
            }
        });
    });
});
