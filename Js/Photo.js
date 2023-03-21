// Filter Js
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show(1000)
        }
        else{
            $('.post-box').not('.' + value).hide('1000')
            $('.post-box').filter('.' + value).show('1000')
        }
    });
    //Add activ e to btn
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});
//header bg
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});