
const body = document.getElementById('body')

date = new Date()

nowHours = date.getHours()
nowMinutes = date.getMinutes()
nowSeconds = date.getSeconds()

const timeTable = document.getElementById("time")

// 19 April is 19.04.25

neededDateDay = 19
neededDateMonth = 4

setInterval(()=>{
    date = new Date()

    nowMonth = date.getMonth() + 1
    nowDay = date.getDate()
    nowHours = date.getHours()
    nowMinutes = date.getMinutes()
    nowSeconds = date.getSeconds()
    
    if(nowMonth == 3){
        nowDay = 31 + neededDateDay - 1 - nowDay
    }
    if(nowMonth == 2){
        nowDay = 31 + 28 + neededDateDay - 1 - nowDay
    }
    if(nowMonth == neededDateMonth){
        nowDay = date.getDate()
        nowDay = neededDateDay - 1 - nowDay
        // nowHours = 23
        // nowMinutes = 59
        // nowSeconds = 59
    } 

    if(nowDay.toString().length == 1){
        nowDayStr = `0${nowDay}`
    } else {
        nowDayStr = `${nowDay}`
    }
    if(nowHours >= 14){
        nowHoursStr = `0${23 - nowHours}`
    } else {
        nowHoursStr = `${23 - nowHours}`
    }
    if(nowMinutes >= 50){
        nowMinutesStr = `0${59 - nowMinutes}`
    } else {
        nowMinutesStr = `${59 - nowMinutes}`
    }
    if(nowSeconds >= 50){
        nowSecondsStr = `0${59 - nowSeconds}`
    } else {
        nowSecondsStr = `${59 - nowSeconds}`
    }

    timeTable.innerHTML = `
       ${nowDayStr} : ${nowHoursStr} : ${nowMinutesStr} : ${nowSecondsStr}
    `
}, 500)


const menuBtn = document.getElementById('menu_btn')

menuBtn.addEventListener("click", ()=>{
    if(body.dataset.menuOpen == "true"){
        body.dataset.menuOpen = "false"
    } else {
        body.dataset.menuOpen = "true"
    }
    console.log("a")
});



// var ww = window.innerWidth
// var wh = window.innerHeight

// const lbbs = document.getElementsByClassName('lbb');

// var lbw = 10

// for (let index = 0; index < lbbs.length; index++) {
//     const lbb = lbbs[index];
//     var lbbRect = lbb.getBoundingClientRect()

//     console.log(lbbRect.right)
    
//     body.innerHTML += `
//         <div class="cursor_light_box" style="width: ${lbb.offsetWidth + lbw}px; height: ${lbb.offsetHeight + lbw}px; right: ${ww -lbbRect.right - lbw*1.5}px; top: ${lbbRect.top - lbw/2}px;">
//             <div class="cursor_light"></div>
//         </div>
//     `
// }

// const cursorLights = document.getElementsByClassName('cursor_light');

// var clBoundsArr = []

// for (let index = 0; index < cursorLights.length; index++) {
//     const cl = cursorLights[index];
//     var clrect = cl.getBoundingClientRect();
//     clBoundsArr.push([clrect.left, clrect.top, cl.offsetWidth, cl.offsetHeight])
// }

// window.addEventListener('mousemove', (e)=>{
//     cX = e.clientX
//     cY = e.pageY

//     for (let index = 0; index < cursorLights.length; index++) {
//         const cl = cursorLights[index];
//         clX = cX - clBoundsArr[index][0] - clBoundsArr[index][2]/2;
//         clY = cY - clBoundsArr[index][1] - clBoundsArr[index][3]/2;

//         cl.style.transform = `translate(${clX}px,${clY}px)`
//     }

    
// })