function hide(target) {
    "use strict";
    if (document.getElementById(target).style.display == 'none') {
        document.getElementById(target).style.display = 'block';
    } else {
        document.getElementById(target).style.display = 'none';
    }
}

function showModule(arg) {
    if (document.getElementById(arg).style.display == 'none') {
        document.getElementById(arg).style.display = 'block';
    } else {
        document.getElementById(arg).style.display = 'none';
    }
}
