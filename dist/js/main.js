(()=>{"use strict";(e=>{const t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds"),r=()=>{const{timeRemaining:e,hours:r,minutes:c,seconds:l}=(()=>{let e=(new Date("30 november 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/3600),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();return t.textContent=r,n.textContent=c,o.textContent=l,r<10&&(t.textContent="0"+r),c<10&&(n.textContent="0"+c),l<10&&(o.textContent="0"+l),!(e<0&&(t.textContent="00",n.textContent="00",o.textContent="00",1))};(()=>{if(r()){let e=setInterval((()=>!r()&&clearInterval(e)),1e3)}})()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),n.addEventListener("click",r),o.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-content"),o=t.querySelector(".popup-close"),r=()=>{screen.width>768&&(t.style.display="block",n.animate([{transform:"translateX(-150%)"},{transform:"translateX(-50px)"}],500).addEventListener("finish",(function(){n.style.transform="translateX(-50px)"})))};e.forEach((e=>e.addEventListener("click",r))),o.addEventListener("click",(()=>{t.style.display="none"}))})()})();