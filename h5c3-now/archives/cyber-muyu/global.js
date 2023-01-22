var gd = 0, gda = 1;
function addGd() {
    gd += gda;
    document.getElementsByClassName('gd')[0].innerText = gd;
    var sfx = document.getElementsByClassName('addGd')[0];
    if (!sfx.paused)
        sfx.currentTime = 0;
    sfx.play();
}

function switchGda() {
    gda = gda == 1 ? 10 :
        gda == 10 ? 100 :
            gda == 100 ? 1000 :
                gda == 1000 ? 10000 :
                    gda == 10000 ? 114514 : 1;
    document.getElementsByClassName('magnification')[0].innerText = '倍率 x' + gda;
}

window.onload = function () {
    //定义点击出现文字类
    function ClickFrontShow() {
        //定义所需文字和颜色
        this.fron = ['功德+' + gda];
        this.colo = ['#ffffff'];
        //获取body元素
        this.elBody = document.getElementsByClassName('muyu')[0];
        //初始化randomNum
        this.randomNum = null;
        //初始化字体inde
        this.finde = 0;
        //初始化className
        this.cls = 0;
    }

    //定义初始化
    ClickFrontShow.prototype.init = function (frontArray, colorArray) {
        //自定义颜色和字体
        this.fron = ['功德+' + gda];
        this.colo = colorArray || this.colo;

        this.listenMouse();
    }

    //创建文字 
    ClickFrontShow.prototype.createFront = function (classname) {
        var self = this;
        let ospan = document.createElement('span');
        //设置样式
        let cssText = "position:absolute; width: 120px; height: 20px; cursor: default; transform: translate(-50%,-50%); font-weight: bold; opacity: 1; z-index: 1000; transition: 1s;";
        //随机字体和颜色
        let randomFront = ['功德+' + gda];
        let randomColor = self.colo[Math.round(Math.random() * (self.colo.length - 1))];
        //字体下标增1
        self.finde = (self.finde + 1) % self.fron.length;
        //向body中添加元素
        self.elBody.appendChild(ospan);
        //绑定一个classname
        ospan.className = String(classname);
        //添加样式
        ospan.style.cssText = cssText + "-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select: none;"
        ospan.style.color = randomColor;
        ospan.innerHTML = randomFront;
    }


    //监听鼠标点击
    ClickFrontShow.prototype.listenMouse = function () {
        var self = this;

        //鼠标点击事件
        document.onclick = function (e) {
            //避免classname值重复导致出现bug
            if (self.cls === 20) {
                self.cls = 0;
            } else {
                self.cls += 1;
            }
            //创建文字
            self.createFront(self.cls);
            let el = document.getElementsByClassName(self.cls)[0];

            //鼠标点击位置
            el.style.left = e.clientX + 'px';
            el.style.top = e.clientY + 'px';

            //过时改变
            setTimeout(function () {
                el.style.opacity = 0;
                el.style.top = el.offsetTop - 100 + 'px';
            }, 100);
            //过时清除
            setTimeout(function () {
                self.elBody.removeChild(el);
            }, 2000);
        }

    }

    //实例化
    var frontShow = new ClickFrontShow();
    //用户可在此传递参数，默认第一个参数是字体数组；
    //第二个参数是颜色数组，必须是数组类型！
    frontShow.init();
}