
const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false
});

let burger = document.querySelector('.header__burger__button');
let menu = document.querySelector('.header__nav');
let menu2 = document.querySelector('.header__search__top');
let menuLinks = menu.querySelectorAll('.header__link__top');



burger.addEventListener('click', function (e) {
  burger.classList.toggle('header__burger__button--active');
  menu.classList.toggle('header__nav--active');
  menu2.classList.toggle('header__search__top--active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger__button--active');
    menu.classList.remove('header__nav--active');
    menu2.classList.remove('header__search__top--active');
    document.body.classList.remove('stop-scroll');

  });
});



const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');

icon.onclick = function () {
  search.classList.toggle('active');
};

clear.onclick = function () {
  document.getElementById('mySearch').value = '';
};


var swiper = new Swiper(".mySwiper", {

  autoplay: {
    delay: 5000,
  },

});

document.querySelectorAll(".header__dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });
})


const btns = document.querySelectorAll(".header__menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
});


$('input,textarea').focus(function () {
  $(this).data('placeholder', $(this).attr('placeholder'))
    .attr('placeholder', '');
}).blur(function () {
  $(this).attr('placeholder', $(this).data('placeholder'));
});



var swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".galery__swiper__next.swiper-button-next",
    prevEl: ".galery__swiper__prev.swiper-button-prev",
  },

  pagination: {
    el: ".galery__swiper__pagination",
    clikable: true,
    type: "fraction",

  },

  slidesPerView: 1,


  breakpoints: {

    320: {
      slidesPerView: 1,

    },
    720: {
      slidesPerView: 2,
      spaceBetween: 38
    },
    769: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1350: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1700: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }

});



let popup = document.querySelector('.popup');
let popupContent = document.querySelector('.popup__content');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
    popupContent.classList.add('active');
  })
});

closePopupButton.addEventListener('click', () => {
  popup.classList.remove('active');
  popupContent.classList.remove('active');
});

$('.open-popup').click(function (e) {
  e.preventDefault();
  $('.popup').fadeIn(300);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
  $('.popup').fadeOut(300);
  $('html').removeClass('no-scroll');
});



var swiper2 = new Swiper(".mySwiper2", {

  slidesPerView: 1,
  slidesPerGroup: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    581: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0
    },

    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    900: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1350: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  navigation: {
    nextEl: ".event__swiper__next.swiper-button-next",
    prevEl: ".event__swiper__prev.swiper-button-prev",
  },

  pagination: {
    el: '.event__pagination.swiper-pagination',
    clickable: true
  }

});


var swiper3 = new Swiper(".mySwiper3", {

  slidesPerView: 1,
  slidesPerGroup: 3,
  spaceBetween: 50,
  breakpoints: {
    320: {
      slidesPerView: 1,

    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  navigation: {
    nextEl: ".progect__partners__swiper__next.swiper-button-next",
    prevEl: ".progect__partners__swiper__prev.swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

});



let catalogLink = document.querySelectorAll('.catalog__link');
let catalogName = document.querySelectorAll('.catalog__name ');

catalogLink.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    catalogLink.forEach(function (btn) { btn.classList.remove('catalog__link--active') });
    e.currentTarget.classList.add('catalog__link--active');

    catalogName.forEach(function (element) { element.classList.remove('catalog__name--active') })
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__name--active');
  });
});



var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);


const validation = new JustValidate('.form');

validation
  .addField('.name', [{
    rule: 'minLength',
    value: 3,
    errorMessage: "Количество символов-3"
  },
  {
    rule: 'maxLength',
    value: 20,
    errorMessage: "Количество символов-3"
  },
  {
    rule: 'customRegexp',
    value: '^[A-zА-яЁё]+$',
    errorMessage: "Недопустимый формат"
  }


  ])

  .addField('.tel', [{
    rule: "function",
    validator: function (name, value) {
      const phone = selector.inputmask.unmaskedvalue();
      return phone.length === 10
    },
    errorMessage: 'Недопустимый формат',
  }]);




ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map1", {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 15,
    controls: ["geolocationControl", "zoomControl"]

  },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "300px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" }
    }
  );

  if (window.matchMedia("(max-width: 1280px)").matches) {
    if (Object.keys(myMap.controls._controlKeys).length) {
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
    }
  }

  myMap.behaviors.disable("scrollZoom");

  myMap.events.add("sizechange", function (e) {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    } else {
      if (!Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.add('zoomControl');
        myMap.controls.add('geolocationControl');
      }
    }
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
    }
  });

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/footer__map.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -40],

  });

  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
};



const MOBILE_WIDTH = 1350;

function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

function scrollToContent(link, isMobile) {
  if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
    return;
  }

  const href = link.getAttribute('href').substring(1);
  const scrollTarget = document.getElementById(href);
  const elementPosition = scrollTarget.getBoundingClientRect().top;

  window.scrollBy({
    top: elementPosition,
    behavior: 'smooth'
  });
}

document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    scrollToContent(this, true);
  });
});


document.querySelectorAll(".catalog__ac__title").forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("open")) {
      e.classList.remove("open")
    } else {
      let opened = document.querySelector(".catalog__ac__title.open")
      if (opened) {
        opened.classList.remove("open")
      }
      e.classList.add("open")
    }
  })
});


