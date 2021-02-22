import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Converter from './js/converter.js';

function clearFields() {
  $('.showErrors').text('');
  $('.showTotal').text('');
  $('#USD').val('');
}

function displayConversion(response, input, currency) {
  if (response.result != 'success') {
    $('.showErrors').text(`There was an error: ${response.error}`);
  } else if (!input) {
    $('.showErrors').text(`Please enter an amount in USD.`);
  } else if (!currency) {
    $('.showErrors').text(`Please choose a currency to convert to.`);
  } else if(response) {
    $('.showTotal').text(`The total in ${response.target_code} is ${response.conversion_result}`);
  } else {
    return;
  }
}


$(document).ready(function() {
  $('#convert').click(function() {
    let input = $('#USD').val();
    let currency = $('#currency').val();
    clearFields();
    Converter.getConversion(currency, input)
      .then(function(response) {
        displayConversion(response, input, currency);
      });
  });
});