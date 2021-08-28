const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

const changeClass = el => {
    for(let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove('active');
        contents[i].classList.remove('active');
        if(contents[i].dataset.con == el){
            contents[i].classList.add('active');
            tabs[i].classList.add('active');
            tabs[i].parentElement.classList.add('active');
        }
    }
};

for(let i=0; i < tabs.length; i++){
    tabs[i].addEventListener('click', e =>{
        changeClass(e.target.dataset.btn);
    })
}
/*tabs.children.addEventListener('click', () =>{
   /* const currTab = e.target.dataset.btn;
    changeClass(currTab);
});*/