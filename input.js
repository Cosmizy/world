javascript:
var num = prompt("Type a number 1-1000");
var done = false;
var x = window.location.href;

for (var i = 1; i <= num; i++) {
    history.pushState(0, 0, i == num ? x : i.toString());
    if (i == num) {
        done = true;
    }
}

if (done === true) {
    alert("Thanks! Added number to system");
    window.close();
}