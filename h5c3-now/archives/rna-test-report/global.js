function redo() {
    var obj = document.getElementById('a-time');
    var dateObj = new Date(obj.innerText);
    dateObj.setDate(dateObj.getDate() + 1);
    obj.innerText = dateObj.getFullYear() + '-' +
        ((dateObj.getMonth() + 1) < 10 ? ('0' + (dateObj.getMonth() + 1)) : (dateObj.getMonth() + 1)) + '-' +
        ((dateObj.getDate()) < 10 ? ('0' + dateObj.getDate()) : dateObj.getDate());
    document.getElementById('b-time').innerText = obj.innerText;
}

var i = 0;
function counter() {
    if (!(++i % 3))
        changeMorph();
}

var morph = false;
function changeMorph() {
    var mlogo = document.getElementById('m-icon'),
        mtext = document.getElementById('morph'),
        mtext2 = document.getElementById('morph2');
    if (!morph) {
        mlogo.setAttribute('src', 'https://i.328888.xyz/2022/12/30/nN3Jq.png');
        mtext.innerText = "阳性";
        mtext.setAttribute('class', 'red');
        mtext2.setAttribute('class', 'red');
        morph = true;
    } else {
        mlogo.setAttribute('src', 'https://i.328888.xyz/2022/12/30/nNrXb.png');
        mtext.innerText = "阴性";
        mtext.setAttribute('class', 'green');
        mtext2.setAttribute('class', 'green');
        morph = false;
    }
}