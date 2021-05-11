/**
 * @description 判断一个元素是否在对应容器的可视区域内
 * @param {Object} el 判断是否在容器的目标DOM元素
 * @param {Object} container 容器DOM元素，默认为视口
 * @returns 是否在可视区域内
 */
function isInContainer(el, container) {
    const elRect = el.getBoundingClientRect();
    let containerRect = null;

    if (
        [window, document, document.documentElement, null, undefined].includes(
            container
        )
    ) {
        containerRect = {
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
            left: 0,
        };
    } else {
        containerRect = container.getBoundingClientRect();
    }

    return (
        elRect.top < containerRect.bottom &&
        elRect.bottom > containerRect.top &&
        elRect.right > containerRect.left &&
        elRect.left < containerRect.right
    );
}


module.exports = isInContainer;