import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Converter from './js/converter.js';

function displayConversion(response) {
  if (response) {
    $('.showTotal').text(`The total in ${response.target_code} is ${response.conversion_result}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#convert').click(function() {
    let input = $('#USD').val();
    let currency = $('#currency').val();
    Converter.getConversion(currency, input)
      .then(function(response) {
        displayConversion(response);
      });
  });
});