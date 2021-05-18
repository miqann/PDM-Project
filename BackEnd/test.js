const today = new Date();
let date = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
let time = today.getMonth() < 10 ? `0${today.getMonth()+1}` : `${today.getMonth()}`;
let current = `${date}${time}`;
console.log(time);