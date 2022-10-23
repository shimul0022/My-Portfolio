const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  body.classList.toggle('no-scroll')
})

nav.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('hidden')
  body.classList.toggle('no-scroll')
})


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1.25, stagger: 0.35 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");