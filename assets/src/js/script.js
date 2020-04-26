$(document).ready(function()
{
    "use strict";
    Form(); // форма с плавными эффектами и скрытием стандартных input
    Spoiler();
    ibg(); // img в background
    Slider(); // slick-слайдер

    function Form() {
        //CHECKBOX
        $.each($('.checkbox'), function(index, val) {
            if($(this).find('input').prop('checked')==true){
                $(this).addClass('active');
            }
        });
        $(document).on('click', '.checkbox', function(event) {
            if($(this).hasClass('active')){
                $(this).find('input').prop('checked',false);
            }else{
                $(this).find('input').prop('checked',true);
            }
            $(this).toggleClass('active');

            return false;
        });

        //RADIO
        $.each($('.radiobuttons__item'), function(index, val) {
            if($(this).find('input').prop('checked')==true){
                $(this).addClass('active');
            }
        });
        $(document).on('click', '.radiobuttons__item', function(event) {
            $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
            $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked',false);
            $(this).toggleClass('active');
            $(this).find('input').prop('checked',true);
            return false;
        });
    }

    function Spoiler() {
        $('.spoiler__title').click(function (event) {
            if($('.spoiler').hasClass('spoiler-one')){
                $('.spoiler__title').not($(this)).removeClass('active');
                $('.spoiler__text').not($(this).next()).slideUp(300);
            }
            $(this).toggleClass('active').next().slideToggle(300);
        });
    }

    function ibg(){
        $.each($('.ibg'), function(index, val) {
            if($(this).find('img').length>0){
                $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
            }
        });
    }

    function Slider(){
        $('.slider').slick({

        });
    }

});