/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Arvinder Singh Ghumman
*/
$(document).ready(function () {
  
  function fahrenheitToCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
  }

  function celsiusToKelvin(celsius) {
      return celsius + 273.15;
  }

  //onchange f to celcius
  $("#temp").on("input", function () {

    var fInput = parseFloat($("#temp").val());
  
    // Check if the input is a number
    if (!isNaN(fInput)) {
      //converting
        var cOutput = fahrenheitToCelsius(fInput);
        // results
        $("#cOutput").text("Celsius: " + cOutput.toFixed(2) + " °C");
        $("#kOutput").text("");
      } else if($("#temp").val()==""){
      $("#cOutput").text("Enter a value");
      $("#kOutput").text("");
    } else {
        alert("Please enter a valid temperature in Fahrenheit.");
    }
    
  });

  // celcius to kelvin on button click event
  $("#convert").click(function (event) {
      event.preventDefault();

      var fInput = parseFloat($("#temp").val());

      // Check if the input is a number
      if (!isNaN(fInput)) {
        //converting
          var cOutput = fahrenheitToCelsius(fInput);
          var kOutput = celsiusToKelvin(cOutput);

          // results
          $("#cOutput").text("Celsius: " + cOutput.toFixed(2) + " °C");
          $("#kOutput").text("Kelvin: " + kOutput.toFixed(2) + " K");
      } else {
          alert("Please enter a valid temperature in Fahrenheit.");
      }
  });
});
