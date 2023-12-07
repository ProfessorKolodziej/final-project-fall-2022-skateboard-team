// This file is eventually where you'll learn to write JavaScript.
// For right now, you don't need to worry about it.
// script.js
console.log('Script loaded successfully');

function redirectToHome() {
    window.location.href = './start_screen_1.html';
  }
  
  // Add any additional JavaScript code here
  document.addEventListener('DOMContentLoaded', function() {
    var imageWrapper = document.getElementById('imageWrapper');
  
    // Add hover effect
    imageWrapper.addEventListener('mouseover', function() {
      document.querySelector('.image').style.opacity = '0.8';
    });
  
    imageWrapper.addEventListener('mouseout', function() {
      document.querySelector('.image').style.opacity = '1';
    });
  });
  