const daysele = document.querySelector(".days");
const hourssele = document.querySelector(".hours");
const minutessele = document.querySelector(".minutes");
const secondssele = document.querySelector(".seconds");



const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;



const timerfunction = () => {

    setInterval(() => {

        const timer = new Date("10/10/2023").getTime();
        const today = new Date().getTime();

        const difference = timer - today;

        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);

daysele.innerText  = leftDay
hourssele.innerText = leftHour
minutessele.innerText = leftMinute
secondssele.innerText = leftSecond



        console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);



    }, 0);


};

timerfunction()






// const now = new date();
//  let dd = String(now.getdate()).padStart(2, "0"),
//  mm = String(now.getmonth()).padStart(2 ,"0"),
//  yyyy = String(now.getyear()).padStart(2, "0");
//  console.log(mm); //