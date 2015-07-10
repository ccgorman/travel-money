$(document).ready(function(){
    $(".submit").click(function(e) {
        e.preventDefault();


        //quickly found a regular expression, not fully tested
        var currentVal = $("#amount").val(),
            valid = /^-?(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.\d+)?$/.test(currentVal);

        if (valid) {
            alert('You have entered a valid value.');
        }
        else {
            alert('Please enter a valid value.');
        }
    });
});
