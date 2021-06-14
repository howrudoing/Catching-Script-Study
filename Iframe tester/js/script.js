$(document).ready(function () {
    $("button").click(function () {
        $("p").hide();

        var iFrameDOM = $("#testIframe").contents();
        iFrameDOM.find("p").hide();

    });

    $("#sendRequest").click(function () {
        UrlExists('chrome-extension://iglbakfobmoijpbigmlfklckogbefnlf/tracker/tracker.html', function (status) {
            if (status === 200) {
                console.log("Virtru Exists!");
            } else if (status === 404) {
                console.log("No Virtru :(");
            } else {
                console.log("Something is wrong.");
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


