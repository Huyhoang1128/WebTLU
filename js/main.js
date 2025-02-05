const tabs=document.querySelectorAll('.tab');
// console.log(tabs);
const panes=document.querySelectorAll('.pane')
// console.log(panes);
// Tab news 
tabs.forEach((item,index)=>{
    item.onclick=()=>{
        document.querySelector('.tab.active').classList.remove('active');
        document.querySelector('.pane.active').classList.remove('active');
        item.classList.add('active');
        panes[index].classList.add('active');
    }
})

// Main news
const paneItem = document.querySelectorAll('.pane-item');
const newsItem = document.querySelectorAll('.main-news');
// console.log(newsItem);
// console.log(paneItem);

paneItem.forEach((item,index)=>{
    item.onmouseover=()=>{
        // console.log('hello');
        document.querySelector('.pane-item.active') .classList.remove('active');
        document.querySelector('.main-news.active').classList.remove('active');
        item.classList.add('active');
        newsItem[index].classList.add('active');
    }
})

// Banner
// const slides = document.querySelectorAll('.slide .box-img');
// // console.log(slides);
// let index=0;
// function next() {
//     document.querySelector('.slide .box-img.active').classList.remove('active');
//     // slides[index].classList.remove('active');
//     index=(index+1)%slides.length;
//     slides[index].classList.add('active');
// }

// setInterval(next,2000);


// Banner Drag non-autofit
// const slide=document.querySelector('.slide');
// let isDown = false;
// let startX;
// let scrollLeft;

// slide.addEventListener('mousedown',(e)=>{
//     isDown = true;
//     // slide.addclassList.add('active');
//     startX=e.pageX-slide.offsetLeft;
//     scrollLeft=slide.scrollLeft;
// })

// slide.addEventListener('mouseleave',()=>{
//     isDown = false;
//     // slide.addclassList.remove('active');
    
// })

// slide.addEventListener('mouseup',()=>{
//     isDown = false;
//     // slide.addclassList.remove('active');
    
// })

// slide.addEventListener('mousemove',(e)=>{
//     if(!isDown) return //stop the function
//     // console.log('hello world')
//     e.preventDefault();
//     const x=e.pageX-slide.offsetLeft;
//     const walk=(x-startX)*3;
//     console.log(walk);
//     slide.scrollLeft=scrollLeft - walk;
// })

// Dropdown nav moblie
// var lis=document.querySelectorAll('.have-sub-nav');
// console.log(lis);
// var subnavs=document.querySelectorAll('.sub-nav');
// console.log(subnavs);
// lis.forEach((item,index)=>{
//     item.onclick=()=>{
//         document.querySelector('.sub-nav.active')?.classList.remove('active');
//         subnavs[index]?.classList.toggle('active');
//     }
// })

var bar_toggle=document.querySelector('.bar-toggle');
console.log(bar_toggle);
bar_toggle.onclick=()=>{
    document.querySelector('.nav').classList.toggle('active');
}