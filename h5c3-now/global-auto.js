/** 设置选中区域。 */
function setChosen() {
    document.getElementsByClassName("top-nav-menus")[0]
        .getElementsByTagName("li")[3]
        .getElementsByTagName("a")[0]
        .setAttribute("class", "top-nav-menus chosen");
}
setChosen();

/** 获取Json对象。 */
function getJSONObj(url) {
    return $.parseJSON($.ajax({
        url: url,
        dataType: "json",
        async: false
    }).responseText);
}

/** 部署工程对象。 */
function setProject() {
    Array.from(getJSONObj("projects.json").projects).forEach(p => {
        document.getElementById("obj-grid").appendChild(ce("div", "class=obj", `
            <div class="img" style="background-image: url(`+ p.thumb + `);"></div>
            <h3 class="title">`+ p.title + `</h3>
            <h4 class="discribe">`+ p.discribe + `</h4>
            <a class="go" href="archives/`+ p.id + `/index.html">访问 ></a>
        `));
    });
}
setProject();