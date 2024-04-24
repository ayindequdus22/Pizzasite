// wow init
new WOW().init();
'use strict'
//  document.getElementByClassName('loader-wrapper').style.display="none";
$(document).ready(function(){
$('.loader-wrapper').hide(5000);
$('.super-cont').hide(3000);
$('.navigation-wrap').show(5000);
$(window).scroll(function(){
if(this.scrollY > 50){
    $('.img-slide').addClass("animated slideInRight");
    $('.img-text').addClass("animated slideInLeft");
}else{
    $('.img-slide').removeClass("animated slideInRight");
    $('.img-text').addClass("animated slideInLeft")
}
});

if(this.scrollY >70){
    $('.img-slide1').addClass("animated slideInRight");
    $('.img-text1').addClass("animated slideInLeft");
}else{
    $('.img-slide1').removeClass("animated slideInLeft");
    $('.img-text1').addClass("animated slideInLRight")
}
if(this.scrollY > 90){
 $('.carouselanimate').addClass('animated fadeInDownBig');
}
else{
    $('.carouselanimate').removeClass('animated fadeInDownBig');  
}
});
