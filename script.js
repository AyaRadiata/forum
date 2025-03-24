
const body = document.getElementById('body')

date = new Date()

nowHours = date.getHours()
nowMinutes = date.getMinutes()
nowSeconds = date.getSeconds()

const timeTable = document.getElementById("time")

// 19 April is 19.04.25

neededDateDay = 19
neededDateMonth = 4

if(timeTable){
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
}


const menuBtn = document.getElementById('menu_btn')

menuBtn.addEventListener("click", ()=>{
    if(body.dataset.menuOpen == "true"){
        body.dataset.menuOpen = "false"
    } else {
        body.dataset.menuOpen = "true"
    }
});

const p1Vid = document.getElementById('p1Vid');
const p1vidClose = document.getElementById('p1vidClose');

if(p1Vid){
    p1Vid.addEventListener('click', ()=>{
        body.dataset.p1vidOpen = "true"
    })
    p1vidClose.addEventListener('click', ()=>{
        body.dataset.p1vidOpen = "false"
    })
}

const t_row_respbtns = document.getElementsByClassName('t_row_respbtn')
const t_hid_rows = document.getElementsByClassName('t_hid_row')
var canOpenHidrow = true


for (let index = 0; index < t_row_respbtns.length; index++) {
    const trbtn = t_row_respbtns[index];
    const thidrow = t_hid_rows[index];
    trbtn.addEventListener('click', ()=>{
        console.log(thidrow.dataset.hidrowOpen)
        if((thidrow.dataset.hidrowOpen == "false" || !(thidrow.dataset.hidrowOpen)) && canOpenHidrow){
            thidrow.dataset.hidrowOpen = "true"
            canOpenHidrow = false
            setTimeout(()=>{canOpenHidrow = true}, 500)
        }
        if((thidrow.dataset.hidrowOpen == "true") && canOpenHidrow){
            thidrow.dataset.hidrowOpen = "false"
            canOpenHidrow = false
            setTimeout(()=>{canOpenHidrow = true}, 500)
        }
    })
}