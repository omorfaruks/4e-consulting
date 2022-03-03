var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

function incNumber(){
    var c = parseInt(document.getElementsByTagName("input")[0].value);
    c++;
    document.getElementsByTagName("input")[0].value = c;
    document.getElementById("display").innerHTML = c;
}

function decNumber(){
    var c = parseInt(document.getElementsByTagName("input")[0].value);
    c--;
    document.getElementsByTagName("input")[0].value = c;
    document.getElementById("display").innerHTML = c;
}

$('.product-carousel').owlCarousel({
    loop:true,
    margin:20,
  // autoplay:true,
    dots:false,
    nav:true,
    navText:["<div class='nav-btn prev-slide'><img src='assets/icons/arrow-left-circle.svg' /></div>","<div class='nav-btn next-slide'><img src='assets/icons/arrow-right-circle.svg' /></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})