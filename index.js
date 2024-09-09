function scrollFunction1(){
  let e = document.getElementById("page06");
  if (e) {
      e.scrollIntoView({
          block: 'start',
          inline: 'start',
          behavior: 'smooth'
      });
  }
}


 /****************************form************************************** */



function sendEmail(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Send email using EmailJS
  emailjs.send("service_zz2pd2a", "template_jp1sl4e", {
      from_name: name,
      from_email: email,
      message: message
  })
  .then(function(response) {
      alert('Email sent successfully!');
      document.getElementById('contact-form').reset(); // Reset the form
  }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');
  });
}

 
  

  document.querySelector('.about-us').addEventListener('mouseenter', function() {
    var aboutUsSection = this;
    aboutUsSection.querySelector('.text-content').style.animation = 'fadeInRotate 1s ease-out forwards';
    aboutUsSection.querySelector('.learn-more-button').style.animation = 'fadeInRotate 1.2s ease-out forwards';
    aboutUsSection.querySelector('.image-content img').style.animation = 'zoomIn 1.5s ease-out forwards';
  });
  
  

  document.getElementById('js-navbar-toggle').addEventListener('click', function() {
    const navbarLinks = document.getElementById('js-navbar-links');
    navbarLinks.classList.toggle('active');
  });