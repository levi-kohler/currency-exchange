import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Converter from './js/converter.js';

function displayConversion(response) {
  if (response.result) {
    $('.showTotal').text(`The total in GBP is ${response.result}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#convert').click(function() {
    // let USD = $('#USD').val();
    Converter.getConversion()
      .then(function(response) {
        displayConversion(response);
      });
  });
});