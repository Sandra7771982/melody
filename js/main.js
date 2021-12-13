$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath =  $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /*кнопка увеличения этажа*/
  var counterDown = $(".counter-down"); /*кнопка уменьшения этажа*/
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  //при наведении мышкой на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass("current-floor"); //удаление активного класса у этажей
    currentFloor = $(this).attr('data-floor'); // получение значения текущего этажа
    $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
  });

  floorPath.on('click', toggleModal); // при клике на этаж вызвать окно
  modalCloseButton.on('click', toggleModal); // клик на кнопку закрыть окно - окно закрывается
  viewFlatsButton.on('click', toggleModal);

  counterUp.on("click", function(){ // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 01, а не 1
    $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
    floorPath.removeClass("current-floor"); //удаление активного класса у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    } //подсвечиваем текущий этаж
  });

  counterDown.on('click', function() {
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });
  function toggleModal(){ // функция открыть/закрыть окно
    modal.toggleClass('is-open');
  }
});