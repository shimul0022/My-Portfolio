const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
}
btn.addEventListener('click', navToggle)


function linkClick() {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
}
nav.addEventListener('click', linkClick)


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1.25, stagger: 0.35 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 0.75 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");