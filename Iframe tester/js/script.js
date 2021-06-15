$(document).ready(function () {
    $("button").click(function () {
        $("p").hide();

        var iFrameDOM = $("#testIframe").contents();
        iFrameDOM.find("p").hide();

    });

    $("#sendRequest").click(function () {
        UrlExists('chrome-extension://iglbakfobmoijpbigmlfklckogbefnlf/tracker/tracker.html', function (status) {
            if (status === 200) {
                console.log("MTurk Suite Exists!");
            } else if (status === 404) {
                console.log("MTurk Suite Does Not Exists! :(");
            } else {
                console.log("MTurk Suite: Something is wrong. Status Code is: ",status);
            }
        });
        UrlExists('chrome-extension://gefompgkggmjbcihdkdbfddhjnnceipm/manifest.json', function (status) {
            if (status === 200) {
                console.log("pandaCrazy Exists!");
            } else if (status === 404) {
                console.log("pandaCrazy Does Not Exists! :(");
            } else {
                console.log("pandaCrazy: Something is wrong. Status Code is: ",status);
            }
        });
        

    });

});

function UrlExists(url, cb) {
    jQuery.ajax({
        url: url,
        dataType: 'text',
        type: 'GET',
        complete: function (xhr) {
            if (typeof cb === 'function')
                cb.apply(this, [xhr.status]);
        }
    });
}


