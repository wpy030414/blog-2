class Advertisement {
    constructor(title, picUrl) {
        this.#adTitle = title;
        this.#adPic = picUrl;
    }

    #adLogo = { icon: "https://tse3-mm.cn.bing.net/th/id/OIP-C.X1Z3t7jEGrEEuR1iBufucQHaFo", title: "下北泽激聊" };
    #adTitle = "";
    #adPic = "";
    #adImpact = { dlAmount: 1919, star: 5 };
    #adGo = "https://www.bilibili.com/read/cv6526043/";

    /** 快捷创建元素。 */
    #createElement(tag, id, innerText) {
        var e = document.createElement(tag);
        if (id != undefined)
            e.setAttribute("id", id);
        if (innerText != undefined)
            e.innerText = innerText;
        return e;
    }

    /** 组装对象。 */
    #assemble() {
        var adFrame = this.#createElement("div", "ad-frame"); {
            var adIcon = this.#createElement("div", "ad-icon"); {
                adIcon.style.backgroundImage = "url(" + this.#adLogo.icon + ")";
            }
            var adBrand = this.#createElement("div", "ad-brand", this.#adLogo.title);
            var adFold = this.#createElement("a", "ad-fold", "×"); {
                adFold.setAttribute("href", "javascript: document.getElementById('ad-frame').remove();");
            }
            var adTitle = this.#createElement("div", "ad-title", this.#adTitle);
            var adPic = this.#createElement("div", "ad-pic"); {
                adPic.style.backgroundImage = "url(" + this.#adPic + ")";
            }
            var adImpact1 = this.#createElement("div", "ad-impact-dla", this.#adImpact.dlAmount + "万人已下载");
            var getStar = function (star) {
                var str = "";
                while (star--) {
                    str += "★";
                }
                return str;
            }
            var adImpact2 = this.#createElement("div", "ad-impact-star", getStar(this.#adImpact.star));
            var adGo = this.#createElement("a", "ad-go", "去看看"); {
                adGo.setAttribute("href", this.#adGo);
            }
            adFrame.appendChild(adIcon);
            adFrame.appendChild(adBrand);
            adFrame.appendChild(adFold);
            adFrame.appendChild(adTitle);
            adFrame.appendChild(adPic);
            adFrame.appendChild(adImpact1);
            adFrame.appendChild(adImpact2);
            adFrame.appendChild(adGo);
        }
        return adFrame;
    }

    /** 部署对象。 */
    deploy() {
        var af = document.getElementById("ad-frame");
        if (af != null)
            af.remove();
        document.body.appendChild(this.#assemble());
    }

    /** 设置广告标志。 */
    setAdLogo(icon, title) {
        this.#adLogo = { icon: icon, title: title };
    }

    /** 设置广告影响。 */
    setAdImpact(dlAmount, star) {
        this.#adImpact = { dlAmount: dlAmount, star: star }
    }

    /** 设置跳转链接。 */
    setAdGo(url) {
        this.#adGo = url;
    }
}

new Advertisement("群主在这做兼职，一个月竟然挣那么多！", "https://ts1.cn.mm.bing.net/th/id/R-C.a84622fdc2eb65e906e63ff6859bae83?rik=BfeSrxFYYqdBnQ&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2fb260395d325a0c2473ac0b6db4b3ea05b5151e62.jpg&ehk=c%2bAGF97oetYZRKMWk%2fZDaIBW0GKlNr47yIcOkJacwjQ%3d&risl=&pid=ImgRaw&r=0").deploy();