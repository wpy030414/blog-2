/**
 * 返回顶部。
 */
export function goTop() {
  setTimeout(() => {
    (document.querySelector(".spirit") as HTMLButtonElement).click();
  }, 233);
}

/**
 * 处理用户离开页面。
 *
 * @param url 外链
 */
export function goOutside(url: string) {
  window.open(url, "_blank");
}
