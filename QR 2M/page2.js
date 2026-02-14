const message = `امروز خیلی روز خاصیه...
روزی که بخوام یه حس قدیمی رو برات تعریف کنم.
یه لحظه که همه چی عادی به نظر میرسید،
اما برای من شروع یه چیز قشنگ بود.`;

const el = document.getElementById("text");

let i = 0;

function typeWriter(){
if(i < message.length){
el.innerHTML += message[i] === "\n" ? "<br>" : message[i];
i++;
setTimeout(typeWriter, 50);
}
}

setTimeout(typeWriter, 1000);