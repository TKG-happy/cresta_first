$(function() {
  'use strict';
  $('#nav-bars').click(function() {
    const modal_selector = $('#header-top, #nav-bars, #modal-nav');
    modal_selector.toggleClass('open');
  });
});