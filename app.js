let img1=document.getElementById("first");
let img2=document.getElementById("second");
let btn1=document.getElementById("clicked1");
let btn2=document.getElementById("clicked2");
let img=document.querySelector("img");
let no1=document.getElementById("no1");
let no2=document.getElementById("no2");

let current=1;
let no=6;
function click_btn_1(){
    if(current===1){
        current++;
        img.src="img-"+current+".jpg";
        img1.style.color="#b7b7a4";
        no1.innerText="01";
        no2.innerText="02";
        img2.style.color="#ffb703"
    }else if(current !== no){
        current++;
        img.src="img-"+current+".jpg";
        no1.innerText="0"+(current-1);
        no2.innerText="0"+current;
    }else{
        img.src="img-1.jpg";
        current=1;
        no1.innerText="01";
        no2.innerText="02";
        img1.style.color="#ffb703";
        img2.style.color="#b7b7a4"
    }
}
function click_btn_2(){
      if(current===1){
        current=no;
        img.src="img-"+current+".jpg";
        img1.style.color="#b7b7a4";
        img2.style.color="#ffb703";
        no1.innerText="0"+(current-1);
        no2.innerText="0"+current;
    }else if(current !== 2){
        current--;
        img.src="img-"+current+".jpg";
        no1.innerText="0"+(current-1);
        no2.innerText="0"+current;
    }else{
        current--;
        img.src="img-"+current+".jpg";
        no1.innerText="0"+(current);
        no2.innerText="0"+(current+1);
        img1.style.color="#ffb703";
        img2.style.color="#b7b7a4"
    }
}
btn1.addEventListener("click",click_btn_1);
btn2.addEventListener("click",click_btn_2);