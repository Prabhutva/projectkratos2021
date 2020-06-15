// ------- PRELOADER -------//
$(window).load(function () {
  $('.preloader').fadeOut("slow"); // set duration in brackets    
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {

  // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  // --------- PORTFOLIO IMAGE ----- //
  $('#portfolio a').nivoLightbox({
    effect: 'fadeScale',
  });

  // ------- WOW ANIMATED ------ //
  wow = new WOW({
    mobile: false
  });
  wow.init();



  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
    //$('#team').parallax("100%", 0.3);//
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

});

$('#contact-form').on('submit', (e) => {
  e.preventDefault()
  $('#after-submit').html('Sending....')
  const name = document.querySelector('#name-field').value
  const email = document.querySelector('#email-field').value
  const text = document.querySelector('#text-field').value

  var requestBody = {
    name,
    email,
    text
  }
  axios.post('/contact', requestBody)
    .then(res => $('#after-submit').html('Successfully Send'))
    .catch(err => $('#after-submit').html('Unsuccessful in sending the mail...'))

  document.querySelector('#name-field').value = ''
  document.querySelector('#email-field').value = ''
  document.querySelector('#text-field').value = ''
})