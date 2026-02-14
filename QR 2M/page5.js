const message = `عزیزم بودنت قشنگترین اتفاق زندگیمه.
ولنتاین فقط یه بهونست که بگم از وقتی اومدی دنیا قشنگتره.`;

const el = document.getElementById("text");
let i = 0;

function typeWriter() {
if (i < message.length) {
el.innerHTML += message[i] === "\n" ? "<br>" : message[i];
i++;
setTimeout(typeWriter, 70); // کمی کندتر برای زیبایی بیشتر
}
}

// شروع تایپ بعد ۱ ثانیه
setTimeout(typeWriter, 1000);