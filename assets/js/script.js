document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

  //Sticky Navbar
  const nav = document.querySelector('#navbar');
  let navTop = nav.offsetTop;
  
  function fixedNav() {
    if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  }
  
  window.addEventListener('scroll', fixedNav);

    function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });

});

//Nav link active on sections scroll

window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.navbar-item');

  var currentSection = '';

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
}




);


var popupButtons = document.getElementsByClassName("popupButton");

for (const popupButton of popupButtons) {
  popupButton.addEventListener('click', retailersPopup);
}

function retailersPopup() {
  document.getElementsByClassName("retailers").classList.toggle("show");
}


