const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('.srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('.srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
});

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');
bar.addEventListener('click',function(){
    setTimeout(()=>{
        cross.style.display = "block";
    },200);
    headerbar.style.right = '0%'
});

cross.addEventListener('click',function(){
    cross.style.display = "none";
    headerbar.style.right = '-100%';
});

// gsap.from(".pizimg img",{
//     opacity : 0,
//     x : 150,
//     duration : 1,
//     delay : 1

// });

// gsap.from(".main_slide div h1",{
//     opacity : 0,
//     x : -150,
//     duration : 2,
//     delay : 1
// });

// gsap.from(".main_slide div p",{
//     opacity : 0,
//     x : -150,
//     duration : 2,
//     delay : 1

// });

// gsap.from(".main_slide ",{
//     opacity : 0,
//     x : -100,
//     duration : 1,
//     delay : 1
// });

// gsap.from(".hey ul a",{
//     opacity : 0,
//     y : -20,
//     duration : 1,
//     delay : 1
// });