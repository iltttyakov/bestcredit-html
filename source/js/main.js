// Полоса прогресса range
var time_top = $('#credit-time').slider({
  min: 1,
  max: 60,
  value: 12,
  animate: "fast",
  range: "min",
  slide: function(event, ui)
  { 
    $('#calculator_value_time').val(ui.value)
  }
});

var sum_top = $('#credit-sum').slider({
  min: 1,
  max: 190,
  value: 20,
  animate: "fast",
  step: 1,
  range: "min",
  slide: function(event, ui)
  { 
    if (ui.value <= 100) {
      $('#calculator_value_sum').val(ui.value * 5000);
    } else {
      $('#calculator_value_sum').val(500000 + (50000 * (ui.value - 100)));
    }
  }
});

var time_footer = $('#credit-time--footer').slider({
  min: 1,
  max: 60,
  value: 12,
  range: "min",
  animate: "fast",
  slide: function(event, ui)
  { 
    $('#calculator_value_time--footer').val(ui.value)
  }
});

var sum_footer = $('#credit-sum--footer').slider({
  min: 1,
  max: 190,
  value: 20,
  animate: "fast",
  step: 1,
  range: "min",
  slide: function(event, ui)
  { 
    if (ui.value <= 100) {
      $('#calculator_value_sum--footer').val(ui.value * 5000);
    } else {
      $('#calculator_value_sum--footer').val(500000 + (50000 * (ui.value - 100)));
    }
  }
});

// Максимальное и минимальное значение для калькуляторов 
$('.calculator_value_sum').blur( function(e) {
  if( $(this).val() < 5000 ) {
    $(this).val(5000);
  } else if ( $(this).val() > 5000000 ) {
    $(this).val(5000000);
  }

  if ($(this).val() <= 500000) {
    $range_val = $(this).val() / 5000; 
  } else {
    $range_val = (($(this).val() - 500000) / 50000) + 100; 
  }

  $('#credit-sum--footer').slider('option', 'value', $range_val);
  $('#credit-sum').slider('option', 'value', $range_val);
});

$('.calculator_value_time').blur( function(e) {
  if( $(this).val() < 1 ) {
    $(this).val(1);
  } else if ( $(this).val() > 60 ) {
    $(this).val(60);
  }

  $('#credit-time--footer').slider('option', 'value', $(this).val());
  $('#credit-time').slider('option', 'value', $(this).val());
});

// Слайдер партнеров
$('.partners__slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 4,
  nextArrow: document.querySelector('.partners__navigation--next'),
  prevArrow: document.querySelector('.partners__navigation--prev'),
  responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
});


// Инициализация первого слайдера
$('.best__list--active').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
});

// Переключение сайдеров лучших предложений
function bestSwitch (selected, button) {
  $('.best__button--active').removeClass('best__button--active');
  $(button).addClass('best__button--active');

  $('.best__list--active').removeClass('best__list--active');
  $(selected).addClass('best__list--active');
  $(selected).slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
}

$('.burger').click(function() {
  $('.header__menu').toggle('header__menu--open');
});