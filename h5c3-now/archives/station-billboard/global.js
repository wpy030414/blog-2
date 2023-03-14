/**
 * 添加列车事件。
 * @param {string} time 发车时间。必须形如“XX:XX”。*是必要的*
 * @param {number} pf 登车站台号。*是必要的*
 * @param {string} goal 终点站。*是必要的*
 * @param {string} goalEN 终点站罗马字。*是必要的*
 * @param {number} urgency 紧迫度。必须是0（普通）、1（区急）、2（急行）或3（特急）
 * @param {string} postscript 线路注释
 * @param {boolean | undefined} isCheckingticket 检票状态。必须是true（正在检票）、false（停止检票）或undefined（未检票）
 * @returns {boolean} 操作结果
*/
function addEvent(time, pf, goal, goalEN, urgency, postscript, isCheckingticket) {
    if (!/\d\d:\d\d/.test(time) || pf.constructor.name != "Number" || (goal.length < 2 || goal.length > 4) || !goalEN)
        return false;
    let uCla, uStr;
    switch (urgency) {
        case undefined:
        case 0:
            uCla = "normal", uStr = "普通";
            break;
        case 1:
            uCla = "hurry-i", uStr = "区急";
            break;
        case 2:
            uCla = "hurry-ii", uStr = "急行";
            break;
        case 3:
            uCla = "hurry-iii", uStr = "特急";
            break;
        default:
            return false;
    }
    if (!postscript)
        postscript = "Local";
    let ctc = isCheckingticket ? "valid" : "invalid";
    let cts = isCheckingticket ? "正在检票..." :
        (isCheckingticket === false ? "已停止检票！" : "");
    document.querySelector(".info-list").innerHTML += `
        <div class="event">
            <div class="time">`+ time.substring(0, 3) + `</div>
            <div class="time">`+ time[3] + `</div>
            <div class="time">`+ time[4] + `</div>
            <div class="platform">`+ pf + `</div>
            <div class="info">
                <div class="attribute `+ uCla + `">&nbsp;</div>
                <div class="big-text">`+ uStr + `</div>
                <div class="big-text" style="letter-spacing: `+ (4 - goal.length) / (goal.length - 1) + `em">` + goal + `</div>
            </div>
            <div class="info">
                <div class="attribute `+ uCla + `">&nbsp;</div>
                <div class="goal">
                    <div class="small-text">`+ postscript + `</div>
                    <div class="small-text">for `+ goalEN + `</div>
                </div>
            </div>
            <div class="stream `+ ctc + `">` + cts + `</div>
        </div>
    `;
}