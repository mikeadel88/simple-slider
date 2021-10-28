var imgList=Array.from(document.getElementsByClassName('img-item')) ;
var lightboxContainer=document.querySelector(".lightbox-container");
var lightbox=document.querySelector(".lightbox");
var nextBtn=document.getElementById("next");
var prevBtn=document.getElementById("prev");
var closeBtn=document.getElementById("close");
var div=document.querySelectorAll(".col-md-4");
var currentIndex=0;

for(var i=0;i<imgList.length;i++){
    imgList[i].addEventListener("click",function(e){
        var imgSrc=e.target.getAttribute("src");
        lightbox.classList.replace("d-none","d-flex");
        currentIndex=imgList.indexOf(e.target);
        lightboxContainer.style.backgroundImage=`url(${imgSrc})`;
        

    })
}
function slide(i){
    currentIndex+=i;
    if(currentIndex==imgList.length){
        currentIndex=0;
    }
   if(currentIndex==-1){
        currentIndex=imgList.length-1;
    }
    var imgSrc=imgList[currentIndex].getAttribute("src");
    lightboxContainer.style.backgroundImage=`url(${imgSrc})`;
}
nextBtn.addEventListener("click",function(){
    slide(1);
  
})
prevBtn.addEventListener("click",function(){
    slide(-1);
})
closeBtn.addEventListener("click",function(){
    lightbox.classList.replace("d-flex","d-none");
},)



document.addEventListener("keydown",function(e){
    console.log(e);
    if(e.key=='ArrowRight'){
        slide(1);
    }
    else if(e.key=='ArrowLeft'){
        slide(-1);
    }
    else if(e.key=='Escape'){
        lightbox.classList.replace("d-flex","d-none");
    }
})
window.addEventListener("click",function(e){

    if(e.target==lightbox){
        lightbox.classList.replace("d-flex","d-none");
    }

})