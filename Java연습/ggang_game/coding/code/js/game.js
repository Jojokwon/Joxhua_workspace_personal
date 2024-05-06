/* 코드를 작성하세요 */

const key = {
    keyValue : {
        37:
    }
}

const windowEvent = () => {
    window.addEventListener('keydown', e => {
        console.log('키눌림 : ' + e.which)
    })
   
    window.addEventListener('keyup', e => {
        console.log('키업 : ' + e.which);

    });

}

const init = () => {
    windowEvent();
}

window.onload = () => {
    init();
}