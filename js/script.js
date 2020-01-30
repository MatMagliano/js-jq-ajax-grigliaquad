$(document).ready(function() {
  // alert('hello')
  $(document).on('click', '.cell',
    function() {
      var cliccato = $(this);
      $('.cell').removeClass('yellow');
      $('.cell').removeClass('green');
      $('.cell').text('');
      $.ajax(
        {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
          var numero = data.response;
          if (numero <= 5) {
            cliccato.addClass('yellow');
            cliccato.text(data.response);
            console.log(numero);
          } else {
            cliccato.addClass('green');
            cliccato.text(data.response);
            console.log(numero);
          }
        },
        error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
        }
      });
    });
});
