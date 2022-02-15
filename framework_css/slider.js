let slides = document.querySelector('.slider');
let nextSlide = document.querySelector('.suivant');
let prevSlide = document.querySelector('.precedent');
let totalSlides = slides.length;
let index = 0;

nextSlide.onclick = function (){
    next("next");
}
prevSlide.onclik = function(){
    next("prev");
}

function next(direction){
    index ++;
    if(direction=="next"){
        index++;
        if (index==totalSlides){
            index = 0;
        }
    }

    else{
        if(index==0){
            index=totalSlides-1;
        }
        }
    for (i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}