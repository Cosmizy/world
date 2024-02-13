window.onload = function() {
    if (window.location.href.indexOf("google.com") !== -1) {
        console.log("This is a Google page.");

        document.body.style.transform = "rotate(180deg)";
    }
}