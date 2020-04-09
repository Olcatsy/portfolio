$(function() {
    $('.hamburger').on('click', () => {
      $('.nav ul').slideDown();
    })

    $('.close').on('click', () => {
      $('.nav ul').slideUp();
    })
    
});