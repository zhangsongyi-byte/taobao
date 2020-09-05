let header = document.getElementsByClassName('header')[0];

let array = document.getElementsByClassName('header-right-a');

controlHeader();

$(window).scroll(function () {
    controlHeader();
})

for (let i = 0; i < array.length; i++) {
    array[i].onclick = function () {
        judge();
        /* 禁止原生操作，防止a标签跳转 */
        event.preventDefault();
        let href = array[i].getAttribute('href');

            $('html,body').stop().animate({
                scrollTop: $(`.${href}`).offset().top
            }, 500, 'linear');
            console.log(this)
            $(this).addClass('coral')
        }
    }

    function judge(){
        $('.header-right-a').removeClass('coral');
    }


// $('.header-right-a').click(function () {
//     event.preventDefault();
//     let href = $(this).attr('href')
//     if ($(`.${href}`).length > 0) {
//         $('html,body').stop().animate({
//             scrollTop: $(`.${href}`).offset().top
//         }, 500, 'linear');
//     }
// })



function controlHeader() {
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 20) {
        $('.header').addClass('scroll');
        header.style.background = 'rgba(64,75,97,0.9)';
    } else {
        $('.header').removeClass('scroll');
        header.style.background = '#0000';


    }
}

let btn = document.getElementsByClassName('header-btn')[0];
let right = document.getElementsByClassName('header-right')[0];
let flag = false;
btn.onclick = function () {
    header.style.background = 'rgba(64,75,97,0.9)';
    flag = !flag;
    if (flag == true) {
        right.style.display = 'flex';
        header.style.height = 100 + 'px';
    } else {
        right.style.display = 'none';
        header.style.height = 80 + 'px';
    }
}



window.onresize = function () {
    let width = document.documentElement.offsetWidth;
    if (width > 1025) {
        right.style.display = 'none'
        flag=false;
    }

}