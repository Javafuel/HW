module.exports = function() {
    var x;
    var i;
    var star = "*";
    var colors = require('colors');
    for (i = 10; i > 0; i--) {
        console.log (colors.blue(star.repeat(i))) + "<br>";
    }
}