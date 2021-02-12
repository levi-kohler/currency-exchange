import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Converter from './js/converter.js'

function getElements(response) {
  if (response.conversion_rate) {
    $('showTotal').text(`The total in GBP is ${response.conversion_rate}`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#convert').click(function() {
    let currency = $('#USD').val();
    Converter.getConversion(currency)
    .then(function(response) {
      getElements(response);
    });
  });
});