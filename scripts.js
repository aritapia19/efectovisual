$(document).ready(function() {
  $('#toggle-btn').click(function() {
    var $image = $('#image');
    var $button = $('#toggle-btn');
    var $title = $('#page-title');

    if ($image.hasClass('d-none')) {
      $image.removeClass('d-none');
      $button.text('Ocultar Imagen');
      $title.text('¿Se mueve?');
    } else {
      $image.addClass('d-none');
      $button.text('Mostrar Imagen');
      $title.text('¡Vamos de nuevo!');
    }
  });
});
