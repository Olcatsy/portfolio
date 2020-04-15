$(function() {
    // menu opens when user clicks on hamburger menu 
    $('#hamburger').on('click', () => {
      $('.nav ul').slideDown();
    })

    // menu closes when user clicks on close button
    $('#close').on('click', () => {
      $('.nav ul').slideUp();
    })

    // on mobile and small tablet the menu closes when user clicks on a button
    if (screen.width < 768 ) {
      $('.nav-link').on('click', () => {
        $('.nav ul').slideUp();
      })
    }
});