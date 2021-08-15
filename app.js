const birthday="25 february 2022"//date
const day=document.getElementById("days")
const hour=document.getElementById("hours")
const min=document.getElementById("mins")
const sec=document.getElementById("sec")
function countdown(){
    const b_day=new Date(birthday)
    const currentday=new Date();
    const totaltime=(b_day-currentday)/1000
    const days=Math.floor(totaltime/3600/24)
    const hours=Math.floor(totaltime/3600)%24
    const mins=Math.floor(totaltime/60)%60
    const seconds=Math.floor(totaltime)%60

    day.innerHTML=days
    hour.innerHTML=hours
    min.innerHTML=mins
    sec.innerHTML=seconds


    
}
countdown()
setInterval(countdown,1000)