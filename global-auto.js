function ce(tag, classOrId, innerHTML) {
    var e = document.createElement(tag);
    if (classOrId != undefined)
        e.setAttribute(classOrId.split("=")[0], classOrId.split("=")[1]);
    if (innerHTML != undefined)
        e.innerHTML = innerHTML;
    return e;
}

function setPublic() {
    var topNav = ce("div", "class=top-nav", `
        <div class="top-nav-left">
            <div class="top-nav-logo">
                <a href="https://penyoofficial.github.io/">
                    <img src="https://i.328888.xyz/2022/12/27/U8QJ5.png" alt="">
                </a>
            </div>
            <ul class="top-nav-menus">
                <li>
                    <a href="https://penyoofficial.github.io/blog/" target="_blank">
                        博客
                    </a>
                </li>
                <li>
                    <a href="https://penyoofficial.github.io/cyber-museum/" target="_blank">
                        赛博博物馆
                    </a>
                </li>
                <li>
                    <a href="https://github.com/penyoofficial/Jupiter.Project" target="_blank">
                        木星计划
                    </a>
                </li>
                <li>
                    <a href="https://penyoofficial.github.io/h5c3-now/">
                        最新 Web 工程
                    </a>
                </li>
            </ul>
        </div>
        <div class="top-nav-right">
            <p>追随 Penyo</p>
            <ul>
                <li>
                    <a class="uni-button-small bilibili" href="https://space.bilibili.com/92465406"
                        target="_blank">哔哩哔哩</a>
                </li>
                <li>
                    <a class="uni-button-small netease" href="https://music.163.com/#/artist?id=36778469"
                        target="_blank">网易云音乐</a>
                </li>
            </ul>
        </div>
    `);
    var bottomNav = ce("div", "class=bottom-nav", `
        <div class="bottom-nav-abouts">
            <div>
                <h4>友情链接</h4>
                <ul>
                    <li>
                        <a href="https://www.runoob.com/" target="_blank">
                            菜鸟教程
                        </a>
                    </li>
                    <li>
                        <a href="https://www.exception.site/" target="_blank">
                            异常教程
                        </a>
                    </li>
                    <li>
                        <a href="https://www.liaoxuefeng.com/" target="_blank">
                            廖雪峰的官方网站
                        </a>
                    </li>
                    <li>
                        <a href="https://paul.ren/" target="_blank">
                            保罗的小窝
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>示范工程</h4>
                <ul>
                    <li>
                        <a href="https://github.com/penyoofficial/IndependentRandomEventGenerator" target="_blank">
                            随机事件发生器
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/penyoofficial/Cyanidation" target="_blank">
                            Cyanidation 课程表
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/penyoofficial/pterosaur" target="_blank">
                            Pterosaur 网页播放器
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>捐助我们</h4>
                <img src="http://img.i5e.cc/i/2023/01/31/j3dd9k.jpeg" alt="云闪付" />
            </div>
        </div>
        <div class="bottom-easter-egg">愿你出走半生，归来仍是少年。</div>
    `);
    document.body.insertBefore(topNav, document.body.firstElementChild);
    document.body.appendChild(bottomNav);
}
setPublic();