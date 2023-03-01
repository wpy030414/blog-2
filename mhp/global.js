function getObjFromJSON(url) {
    return $.parseJSON($.ajax({
        url: url,
        dataType: "json",
        async: false
    }).responseText);
}

function generateBlock(index, songName, originalSinger, rerecordingTime, sourceAlpha, sourceBeta, isHiRes, isLiveReady) {
    if (!index || !songName || !originalSinger)
        throw new Error("缺少必要的参数！");
    return `
        <tr>
            <td>`+ index + `</td>
            <td>`+ songName + `</td>
            <td>`+ originalSinger + `</td>
            <td>`+ (rerecordingTime ? rerecordingTime : "-") + `</td>
            <td>`+ (sourceAlpha ? `<a href=` + sourceAlpha + `>访问</a>` : "-") + `</td>
            <td>`+ (sourceBeta ? `<a href=` + sourceBeta + `>访问</a>` : "-") + `</td>
            <td>`+ (isHiRes ? "〇" : "✕") + `</td>
            <td>`+ (isLiveReady ? "〇" : "✕") + `</td>
        </tr>
    `;
}

function loadData(y) {
    var t = document.querySelector("tbody");
    t.innerHTML = "";
    var i = 1;
    Array.from(eval(`getObjFromJSON("db.json").y` + y)).forEach(b => {
        t.innerHTML += generateBlock(
            i++,
            b.songName,
            b.originalSinger,
            b.rerecordingTime,
            b.sourceAlpha,
            b.sourceBeta,
            b.isHiRes,
            b.isLiveReady
        );
    });
}

Array.from(document.getElementsByName("y")).forEach(y => {
    y.onchange = function () {
        Array.from(document.getElementsByTagName("label")).forEach(l => {
            if (l.getAttribute("for") == y.id) {
                localStorage.setItem("selectedYear", y.id.split("-")[1]);
                l.className = "hl";
                loadData(y.id.split("-")[1]);
            }
            else
                l.className = "";
        });
    };
});

window.onload = function () {
    const y = localStorage.getItem("selectedYear") ?
        localStorage.getItem("selectedYear") : 2023;
    Array.from(document.getElementsByTagName("label")).forEach(l => {
        if (l.getAttribute("for").split("-")[1] == y)
            l.click();
    });
};