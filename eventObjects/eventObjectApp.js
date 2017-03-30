$(function() {
    $('button').mousedown(function(event) {
        $('.output').text('Button clicked: ' + event.which);
    });

    $('input').keydown(function(event) {
        $('.output').text('Key pressed: ' + event.key);
    });
});
