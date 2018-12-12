/*Back to Top Button */
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
var displayBtnOnScroll = function () {
    var y = isEdge ? document.documentElement.scrollTop : window.scrollY;
    
    if (y >= 800) {
        $("#btnTopContainer").removeClass('hideEverything');
    } else {
        $("#btnTopContainer").addClass('hideEverything');
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