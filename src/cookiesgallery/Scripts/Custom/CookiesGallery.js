
// var feed = new Instafeed({
//     get: 'user',
//     userId: 286296709, // Ex: 1374300081
//     accessToken: 'YOUR_ACCESS_TOKEN'
// });
// feed.run();


function GetCookiesPicture(pictureNumber) {
    var cookiesPic = "./Images/cookie-";

    cookiesPic += (pictureNumber ? pictureNumber : 1) + ".jpg";

    return cookiesPic;
}

function GetCookiesPictureText(pictureNumber) {
    var pictureText = "";

    if (pictureNumber === 1) {
        pictureText = "Momma, do you have goodies for me ?...";
    }
    else if (pictureNumber === 2) {
        pictureText = "I'm waiting for my best friend momma.";
    }
    else if (pictureNumber === 3) {
        pictureText = "When is my friend going to come out?";
    }
    else if (pictureNumber === 4) {
        pictureText = "I want to go on a walk daddy! I'm so tired though...";
    }
    else if (pictureNumber === 5) {
        pictureText = "It's voting day!";
    }
    else if (pictureNumber === 6) {
        pictureText = "I love Halloween!";
    }
    else if (pictureNumber === 7) {
        pictureText = "Chewy drew this portrait of Cookie! Go Chewy!";
    }
    else if (pictureNumber === 8) {
        pictureText = "What do you want momma?";
    }
    else if (pictureNumber === 9) {
        pictureText = "Is this snow? I love snow!";
    }
    else {
        pictureText = "No content found.";
    }

    return pictureText;
}

document.getElementById("cookiesContent").innerHTML = GetCookieGalleryHTML();

function GetCookieGalleryHTML() {
    var galleryHTML = "";

    for (var picNumber = 1; picNumber <= 9; picNumber++) {
        galleryHTML += "  <div class='col-md-4'>"
        galleryHTML += "    <div class='card mb-4 shadow-sm'>";
        galleryHTML += "    <img class='card-img-top imgDefer' src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' data-src='" + GetCookiesPicture(picNumber) +"'";
        galleryHTML += "    alt='Card image cap'>"
        galleryHTML += "        <div class='card-body'>";
        galleryHTML += "            <p class='card-text font-italic'>" + GetCookiesPictureText(picNumber) + "</p>";
        galleryHTML += "            <div class='d-flex justify-content-between align-items-center'>";
        galleryHTML += "            <small class='text-muted'>11/23/2018</small>";
        galleryHTML += "            </div>";
        galleryHTML += "         </div>";
        galleryHTML += "    </div>";
        galleryHTML += " </div>";        
    }

    return galleryHTML;
}

// Opera 8.0+ Test
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;


//Takes the user back to the top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Show - Hide Button Functionality
var btnTopContainerEle = document.getElementById("btnTopContainer");

var displayBtnOnScroll = function () {
    var y = isEdge ? document.documentElement.scrollTop : window.scrollY;

    if (y >= 800) {
        btnTopContainerEle.className = "container btnShow"
    } else {
        btnTopContainerEle.className = "container btnHide"
    }
};

window.addEventListener("scroll", displayBtnOnScroll);

function IsItMobile() {
    var isMobile = false;

    var x = window.innerWidth || document.body.clientWidth || window.screen.width;
    var y = window.innerHeight || document.body.clientHeight || window.screen.height;

    isMobile = (x <= 414 && y <= 823);

    return isMobile;
}