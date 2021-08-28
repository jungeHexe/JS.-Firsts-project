const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      stopTime = document.getElementById('stop');

let index = 0;

const activeElement = (n, arr) => {
    for(el of arr){
        el.classList.remove('active');
    }
    arr[n].classList.add('active');
};

const prepCurrSlide = n => {
    activeElement(n, slides);
    activeElement(n, dots);
};

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepCurrSlide(index);
    }else{
        index++;
        prepCurrSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepCurrSlide(index);
    }else{
        index--;
        prepCurrSlide(index);
    }
};

dots.forEach((el, ind) => {
    el.addEventListener('click', () => {
        index = ind;
        prepCurrSlide(index);
    });
});

let timerId = setInterval(nextSlide, 2000);

next.addEventListener('click', () => {
     nextSlide();
     clearTimeout(timerId);
    });
prev.addEventListener('click',() => {
    prevSlide();
    clearTimeout(timerId);
   });
