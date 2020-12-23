import jquery from 'jquery';

var timeout;
$("#feedbackLink").hover(
  // Change HTML on mouseover
  function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      $("#feedbackLink").html("Send us a quick message!");
    }, 2000); // change the HTML after 2 seconds
  },
  // Change back on mouseout
  function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      $("#feedbackLink").html("How can we improve this page?");
    }, 2000); // change the HTML after 2 seconds
  }
);
// Toggle Button and Form
$('#feedbackLink').click(function() {
    // Hide feedback button
    $('#feedbackLink').toggle(500);
    // Display feedback form
    $('#feedbackForm').delay(501).toggle(250);
});
// Feedback Form
$('#cancel').click(function() {
    // Slides form from view when "CANCEL" is clicked
    $('#feedbackForm').toggle(500);
    // Fades original link back into view after a defined delay to allow for previous form to be hidden
    $('#feedbackLink').delay(501).toggle(75);
});