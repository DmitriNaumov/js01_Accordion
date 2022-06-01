$(function () {

    'use strict';



    //accordion
    //free accordion
    function freeAckordion() {
        $('.accordion_free .accordion__item').on('click', function () {
            let timeAnim = 250;
            $(this).toggleClass('active');
            $(this).find('.accordion__title').next().slideToggle(timeAnim);
            $(this).css({ 'pointer-events': 'none' });
            setTimeout(function () {
                $(this).css({ 'pointer-events': 'auto' });
            }.bind(this), timeAnim);
        });
    }
    freeAckordion();

    //one item accordion
    function oneItemAckordion() {
        $('.accordion_one_item .accordion__item').on('click', function () {
            let timeAnim = 250;
            // $(this).toggleClass('active');
            // $(this).find('.accordion__title').next().slideToggle(timeAnim);
            // $(this).css({ 'pointer-events': 'none' });

            $('.accordion_one_item .accordion__item').removeClass('active').css({ 'pointer-events': 'auto' });
            $(this).addClass('active').css({ 'pointer-events': 'none' });
            $('.accordion_one_item .accordion__title').next().slideUp(timeAnim);
            $(this).find('.accordion__title').next().slideDown(timeAnim);
            // setTimeout(function () {
            //     $(this).css({ 'pointer-events': 'auto' });
            // }.bind(this), timeAnim);


            // let topItem = $('.top__item');
            // topItem.on('click', function () {
            //     let timeAnim = 250;
            //     $('.top__item').removeClass('active');
            //     $(this).addClass('active');
            //     $('.top__head').next().slideUp(timeAnim);
            //     $(this).find('.top__head').next().slideDown(timeAnim);
            // });


        });
    }
    oneItemAckordion();
});