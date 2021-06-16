var output = {};

$(document).ready(async function () {

    await checkForExtensions();
    console.log(output);
});

async function UrlExists(url, cb) {
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

async function checkForExtensions(){
    await UrlExists('chrome-extension://iglbakfobmoijpbigmlfklckogbefnlf/tracker/tracker.html', function (status) {
        if (status === 200) {
            console.log("MTurk Suite Exists!");
            output["MTurk Suite"] = true;
        }
    });
    await UrlExists('chrome-extension://kgejhghjgpndnehjgldgaknbiadbjoom/src/audios/ding.wav', function (status) {
        if (status === 200) {
            console.log("Turk Guru Exists!");
            output["Turk Guru"]=true;
        }
    });
}


