//Engine Optimization
function DeferImages() {
    var imgDefer = document.getElementsByTagName("img");
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].className.includes("imgDefer")) {
            imgDefer[i].setAttribute('src', (imgDefer[i].getAttribute('data-src')));
        }
    }
}

window.onload = DeferImages;