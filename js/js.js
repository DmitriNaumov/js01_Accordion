$(function () {

    'use strict';



    //accordion
    //free accordion
    function freeAckordion() {
        $('.accordion_free .accordion__item').on('click', function () {
            const timeAnim = 250;
            $(this).toggleClass('active');
            $(this).find('.accordion__header').next().slideToggle(timeAnim);
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
            const timeAnim = 250;
            $('.accordion_one_item .accordion__item').removeClass('active').css({ 'pointer-events': 'auto' });
            $(this).addClass('active').css({ 'pointer-events': 'none' });
            $('.accordion_one_item .accordion__header').next().slideUp(timeAnim);
            $(this).find('.accordion__header').next().slideDown(timeAnim);
        });
    }
    oneItemAckordion();
});