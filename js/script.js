$(document).ready(function() {
  // alert('hello')
  $(document).on('click', '.cell',
    function() {
      // $('.cell').removeClass('green');
      //   $(this).addClass('green');

      var chiamata = $.ajax(
        {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
          var numero = data.response;
          if (numero <= 5) {
            $(this).addClass('.yellow');
            console.log(numero);
          } else {
            $(this).addClass('.green');
            console.log(numero);
          }
        },
        error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
        }
      });
      });
});
