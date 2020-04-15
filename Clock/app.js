const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const secondsHand = document.querySelector('.seconds-hand');

setInterval(() => {
    const date = new Date();

    const hour = date.getHours() % 12; // 0-23 % 12 converts to 12-hour format
    const seconds = date.getSeconds(); // 0-59
    const minutes = date.getMinutes(); // 0-59
   
    const rotateSecondsHand = seconds * 6; // 60 * 6 = 360
    const rotateMinutesHand = minutes * 6; // 60 * 6 = 360
    
    const rotateHourHand = (hour * 30) + minutes * 0.5;
    /* moves hour hand by 30deg each time and 
        add the fraction of the minutes that have elasped
    */

    secondsHand.style.transform = `rotate(${rotateSecondsHand}deg)`;
    minuteHand.style.transform = `rotate(${rotateMinutesHand}deg)`;
    hourHand.style.transform = `rotate(${rotateHourHand}deg)`;
}, 1000);