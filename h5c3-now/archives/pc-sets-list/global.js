function autoGetDate() {
    var d = new Date();
    document.getElementById('date').innerText =
        '截止至' + d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日，';
}
autoGetDate();

var pf = 'i';
function switchPlatform() {
    if (pf == 'i')
        document.getElementsByClassName('title')[0].setAttribute('class', 'title red');
    else
        document.getElementsByClassName('title')[0].setAttribute('class', 'title blue');
    pf = pf == 'i' ? 'a' : 'i';
}

function calc() {
    var total = 0;
    for (var i = 1; i < 9; i++)
        total += Number(document.getElementById('pr' + i).value);
    document.getElementById('total').innerText = "共计" + total + "元";
}