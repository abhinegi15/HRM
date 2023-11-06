// hero slider

var HeroSlider = $('#owlHero');

HeroSlider.owlCarousel({
    items:1,
    autoplay:true,
    lazyLoad:true,
    loop:true,
    margin: 0,
    nav: true,
    dots: true,
    responsiveRefreshRate: 10,
    autoplayHoverPause: true,
});



// vision slider
$(document).ready(function(){
  const titles = ['OUR VISION', 'OUR MISSION', 'OUR VALUE'];
  const titleElement = $('.vision-title');

  var visionSlider = $('#vision-slider');

  visionSlider.owlCarousel({
      items:1,
      autoplay:true,
      slideSpeed: 2000,
      autoplayTimeout: 3000,
      lazyLoad:true,
      loop:true,
      margin: 0,
      nav: false,
      dots: true,
      responsiveRefreshRate: 10,
      autoplayHoverPause: true,
  });

  visionSlider.on('translated.owl.carousel', function(event){
      const currentSlideIndex = event.item.index % titles.length;
      titleElement.text(titles[currentSlideIndex]);
  });
});


// function for update title

// const slide = document.querySelectorAll('.vision-sec');
// const title = document.getElementsByClassName('text-uppercase');

// let currentIndex= 0;
// function updateTitle(){
//   title.innerText = 'vision-sec ${currentIndex + 1}';
// }

// function showSlide(index){
//   vision-sec.forEach((item,i)=>{
//     if(i=== index){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
//   currentIndex = index;
//   updateTitle();
// }

// setInterval(()=>{
//   const nextIndex = (currentIndex + 1) % slides.length;
//   showSlide(nextIndex);
// }, 3000);
// managements desk Js

$(document).ready(function(){
  $('#managements-desk-slider').owlCarousel({
     loop: true,
          items: 1,
          slideSpeed: 2000,
          autoplay: true,
     });

     jQuery('.owl-dot').each(function() {
      grab = jQuery(this).data('info');
      slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
      jQuery(this).css("background-image", "url("+slidegrab+")");  
    });
 
  });


// Community Slider Js


$(document).ready(function () {
  var communitySlider = $("#community-caraousel");
  communitySlider.owlCarousel({
    autoplay:true,
    loop: true,
    margin: 10,
    nav: false,
    items: 2,
    responsive : {   
      0 : {
        items:1,
      },

      1280 : {
        items:2,
      }


  }
  });

  // Custom Button
  $(".customNextBtn").click(function () {
    communitySlider.trigger("prev.owl.carousel");
  });
  $(".customPreviousBtn").click(function () {
    communitySlider.trigger("next.owl.carousel");
  });
});



// Students Birthday Slider js
$(document).ready(function () {
  var birthdaySlider = $("#birthday-carousel");
  birthdaySlider.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
  });
});


// Testimonials SLider js

var owl = $('#testimonials-carausel').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: false,
  margin: 0,
  autoplay: true,
  smartSpeed: 400,
  center: true,
  navText: ["&#8592;", "&#8594;"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      center:false,
    },
    991: {
      items: 3,
    },
  },
});


//   navbar class adding 

$(document).ready(function(){
 
  $(window).scroll(function() {

    var scroll = $(window).scrollTop();


    if (scroll >= 80) {
      $(".header").addClass("headerBg");
    }
    
    else if (scroll < 80) {
      $(".header").removeClass("headerBg");
    }
  });
});


// active list class onClick for menu

if (window.innerWidth < 768) {
  const navItems = document.querySelectorAll('.nav-item.level1');

  function handleItemClick() {
    if (this.id === 'menu1') return;

    document.querySelectorAll('.nav-item.level1').forEach(item => {
      item.classList.remove('active-list');
    });

    this.classList.add('active-list');
  }

  navItems.forEach(item => {
    item.addEventListener('click', handleItemClick);
  });
}


// back btn menu for menu

$(document).ready(function() {
  $(document).on('click', '.back-menu-mobile', function() {
      $(this).closest('.nav-item').removeClass('active-list');
  });
});


// adding class on hover and mouse leave for menu

$(document).ready(function() {
  let submenuTimeout;

  $('.nav-link').mouseenter(function() {
      clearTimeout(submenuTimeout);
      $('.submenu').removeClass('show-submenu'); // Hide all submenus

      const submenu = $(this).next('.submenu-wrapper').find('.submenu');
      submenu.addClass('show-submenu');
  });

  $('.nav-item').mouseleave(function() {
      submenuTimeout = setTimeout(function() {
          $('.submenu').removeClass('show-submenu');
      }, 300);
  });

  $('.submenu').mouseenter(function() {
      clearTimeout(submenuTimeout);
  });

  $('.submenu').mouseleave(function() {
      submenuTimeout = setTimeout(function() {
          $('.submenu').removeClass('show-submenu');
      }, 300);
  });
});




// INITIALIZE AOS
AOS.init();