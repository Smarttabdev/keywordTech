/**
* Template Name: Bikin - v4.1.0
* Template URL: https://bootstrapmade.com/bikin-free-simple-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

function test() {
    var x = document.getElementById("x").value;
    if (x == "0") {
        $("#divv").fadeIn(10);
        document.getElementById("x").value = "1"
    } else {
        $("#divv").fadeOut(10)
        document.getElementById("x").value = "0"
    }
}
function test2(xxx) {
    var src = "assets/img/flags/" + xxx + ".jpg"
    document.getElementById("imgggg").src = src;
    document.getElementById("marketplaceVal").value = xxx;
    $("#divv").fadeOut(10);
    document.getElementById("x").value = "0"
}
function editbilling(xx,qq) {
var xx = document.getElementById(xx);
var qq = document.getElementById(qq);
xx.style.display = "none";
qq.style.display = "flex";

}
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
function passtest() {

  var wrapping1 = document.getElementById("addon-wrapping1");
  var wrapping2 = document.getElementById("addon-wrapping2");

  var password = document.getElementById("password");
  var confirm_password = document.getElementById("confirm_password");
  if (password.value==confirm_password.value) {
    wrapping1.style.borderColor = "green";
    wrapping2.style.borderColor = "green";
    password.style.borderColor = "green";
    confirm_password.style.borderColor = "green";
  }else{
    wrapping1.style.borderColor = "red";
    wrapping2.style.borderColor = "red";
    password.style.borderColor = "red";
    confirm_password.style.borderColor = "red";
  }
}
function billingcompany() {
  var billingcompany = document.getElementById("billingcompany");
  var areyoucomp = document.getElementById("areyoucomp");
  if (areyoucomp.checked) {
    billingcompany.style.display = "block"
  }else{
    billingcompany.style.display = "none"
  }
}
function showhidepass() {
    var eyeinp = document.getElementById("eyeinp");
    var eyeimg = document.getElementById("eyeimg");

    var oldpassword = document.getElementById("oldpassword");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");

    if (eyeinp.value == "close") {
      eyeinp.value = "open"
      oldpassword.type = "text"
      password.type = "text"
      confirm_password.type = "text"

    }else{
      eyeinp.value = "close"
      oldpassword.type = "password"
      password.type = "password"
      confirm_password.type = "password"
    }
}

function selectAllperKey(name) {
    parent="#"+name+"> div > div > div > div > input:checkbox";
    var parentDiv = [];
    $(parent).each((index, elem) => {
      parentDiv.push(elem.id);
    });
        for (var i = 0; i <= parentDiv.length - 1; i++) {
            cid=parentDiv[i];
            document.getElementById(cid).checked=document.getElementById(name+"All").checked;
        }
    selectcount(name)
}


function selectcount(name) {
    var checked = "#"+name+" > div > div > div > div > input:checkbox:checked";
    var count ="#"+name+"count";
    var checkboxes = $(checked).length;
    console.log(checkboxes);
    $(count).html(checkboxes);
}

function selectexport(id) {
    var checked = "#"+id+" > div > div > div > div > input:checkbox:checked";
    var checkboxes = $(checked);
    var keywords=new Array();
    $(checked).each(function() {
       keywords.push(this.value);
    });
    console.log(keywords)
}

function qq() {
    if ( document.getElementById("selectallbtn").innerHTML!="Unselect All") {
        $('input:checkbox').not(this).prop('checked', true);
        document.getElementById("selectallbtn").innerHTML="Unselect All";
    }else{
         $('input:checkbox').not(this).prop('checked', false);
        document.getElementById("selectallbtn").innerHTML="Select All";
    }
}
   

