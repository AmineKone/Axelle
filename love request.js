const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const YesBtn = document.querySelector(".Yes-btn");
const Nobtn = document.querySelector(".No-btn");
const Video = document.querySelector(".vid");
var HeartBtn = document.querySelector(".Heart-btn");

YesBtn.addEventListener("click",() => {
    question.innerHTML = "I Love Youuuu Tooooo Darling !";
    gif.src ="https://gifdb.com/images/high/cute-love-baby-kiss-pw26tcs2lnig9xob.gif";
    Nobtn.style.opacity = 0;
    YesBtn.style.opacity = 0;
    Video.style.opacity = 100;
    HeartBtn.style.opacity = 100;
});

Nobtn.addEventListener("mouseover",() => {
    const NobtnRect = Nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - NobtnRect.width;
    const maxY = window.innerHeight - NobtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    Nobtn.style.left = randomX + "px";
    Nobtn.style.top = randomY + "px";
});
