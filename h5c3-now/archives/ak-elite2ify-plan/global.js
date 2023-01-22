initial();
function initial() {
    var obj = $.parseJSON($.ajax({
        url: "hostdata.json",
        dataType: "json",
        async: false
    }).responseText);
    document.getElementById('')
    aElementsSupply();
    autoCalcCost();
}

function aElementsSupply() {
    Array.from(document.getElementsByClassName('op')).forEach(op => {
        if (op.getAttribute('class') != 'op op-plus') {
            op.setAttribute('id', op.innerText);
            op.setAttribute('href', 'https://prts.wiki/w/' + op.innerText);
            op.setAttribute('target', '_blank');
        }
    });
}

function autoCalcCost() {
    let num = [0, 0, 0, 0, 0, 0, 0, 0], floater = 0;
    Array.from(document.getElementsByClassName('cr')).forEach(cr => {
        Array.from(cr.getElementsByClassName('op')).forEach(op => {
            switch (op.getAttribute('class')) {
                case 'op op-vi':
                    num[floater] += 8;
                    break;
                case 'op op-v':
                    num[floater] += 6;
                    break;
                case 'op op-iv':
                    num[floater] += 4;
                    break;
                default:
                    num[floater] += 0;
            }
        });
        floater++;
    });
    let re = document.getElementsByClassName('result')[0];
    re.innerText = '为此分别需要刷';
    for (let i = 0; i < 8; i++)
        re.innerText += (num[i] + '/');
    re.innerText = re.innerText.slice(0, -1);
    re.innerText += '次36理智芯片本。';
}

function addOP(id) {
    let e = document.createElement('a');
    switch (document.getElementById('op-star').value) {
        case '六': case '6':
            e.setAttribute('class', 'op op-vi');
            break;
        case '五': case '5':
            e.setAttribute('class', 'op op-v');
            break;
        case '四': case '4':
            e.setAttribute('class', 'op op-iv');
            break;
        case '三': case '3':
            e.setAttribute('class', 'op op-iii');
            break;
        case '二': case '2':
            e.setAttribute('class', 'op op-ii');
            break;
        case '一': case '1':
            e.setAttribute('class', 'op op-i');
            break;
        default:
            return;
    }
    if (document.getElementById('op-name').value.length < 1)
        return;
    e.innerText = document.getElementById('op-name').value;
    e.setAttribute('id', e.innerText);
    document.getElementById(id).appendChild(e);
    aElementsSupply();
    autoCalcCost();
    document.getElementById('op-star').value =
        document.getElementById('op-name').value = null;
    saveAsJson();
}

function delOP() {
    let name = document.getElementById('op-name').value;
    if (document.getElementById(name) != null)
        document.getElementById(name).remove();
    document.getElementById('op-star').value =
        document.getElementById('op-name').value = null;
    saveAsJson();
}

function saveAsJson() {
    let oriJson = '{';
    Array.from(document.getElementsByClassName('cr')).forEach(cr => {
        oriJson += ('"' + cr.firstElementChild.getAttribute('id') + '":[');
        let isMoreThanZero = false;
        Array.from(cr.getElementsByClassName('op')).forEach(op => {
            if (op.getAttribute('class') != 'op op-plus') {
                oriJson += ('{"class":"' + op.getAttribute('class') + '","innerText":"' + op.innerText + '"},');
                isMoreThanZero = true;
            }
        });
        if (isMoreThanZero)
            oriJson = oriJson.slice(0, -1);
        oriJson += '],';
    });
    oriJson = oriJson.slice(0, -1);
    oriJson += '}';
}