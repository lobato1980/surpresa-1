// Gera confetes com posições/cores/duração aleatórias para o cartão rosa
(function makeConfetti(){
  const confettiRoot = document.querySelector('.confetti');
  if(!confettiRoot) return;

  const colors = ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#FF9DE2','#E0FFB3'];
  const pieces = 28;

  for(let i=0;i<pieces;i++){
    const el = document.createElement('span');
    el.className = 'confetti-piece';
    // estilo inline para variar posição/tempo
    const left = Math.random()*100;
    const delay = Math.random()*-8; // start already falling
    const duration = 4 + Math.random()*4;
    const size = 6 + Math.random()*12;

    el.style.position = 'absolute';
    el.style.left = left + '%';
    el.style.top = (Math.random()*30 - 10) + '%';
    el.style.width = size + 'px';
    el.style.height = Math.floor(size*1.6) + 'px';
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.borderRadius = '2px';
    el.style.opacity = 0.95;
    el.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
    el.style.animation = `fall ${duration}s linear ${delay}s infinite`;
    el.style.boxShadow = '0 1px 0 rgba(0,0,0,0.15)';
    confettiRoot.appendChild(el);
  }

  // adiciona keyframes dinamicamente (não precisa alterar CSS)
  const style = document.createElement('style');
  style.innerHTML = `
  @keyframes fall {
    0% { transform: translateY(-10%) rotate(0deg); opacity:1; }
    100% { transform: translateY(120%) rotate(720deg); opacity:0.9; }
  }`;
  document.head.appendChild(style);
  // timeline do GSAP
const tl = gsap.timeline();

// anima camadas do bolo (SVG)
tl.to(".cake rect:nth-child(1)", {opacity: 1, y: 0, duration: 0.5})
  .to(".cake rect:nth-child(2)", {opacity: 1, y: 0, duration: 0.5})
  .to(".cake rect:nth-child(3)", {opacity: 1, y: 0, duration: 0.5})
  .to(".cake rect:nth-child(4)", {opacity: 1, y: 0, duration: 0.5})
  .to(".cake ellipse", {opacity: 1, y: 0, duration: 0.5})
  .to(".cake path", {opacity: 1, y: 0, duration: 0.5});

// depois do bolo, mostra o texto
tl.to(".birthday-text", {opacity: 1, scale: 1.2, duration: 1, ease: "bounce.out"}, "+=0.5");

// anima o texto letra por letra
gsap.from(".birthday-text", {
  duration: 1,
  opacity: 0,
  y: 30,
  ease: "power3.out",
  stagger: 0.1
});

})();