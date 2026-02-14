const message = `دیدن یه دختر بین شلوغی های روزم که نمیدونست قراره یه روز دلیل لبخند های من باشه.
شاید اون روز فقط یه رهگذر بودم اما امروز که نگاه میکنم میفهمم همون روز ها بود که دنیام داشت آروم آروم قشنگتر میشد.`;

const el = document.getElementById("text");
let i = 0;

function typeWriter() {
if (i < message.length) {
el.innerHTML += message[i] === "\n" ? "<br>" : message[i];
i++;
setTimeout(typeWriter, 50);
}
}

setTimeout(typeWriter, 1000);

// تابع رفتن به صفحه بعدی
function goToNextPage() {
window.location.href = 'page4.html';  // یا هر آدرس دیگه‌ای
}