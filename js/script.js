function toggleNav(){
  const nav=document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

function setYear(){
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();
}

/* Email obfuscation. Recreates mailto and visible text at runtime */
function revealEmail(){
  const el=document.getElementById('email');
  if(!el) return;
  const user=el.dataset.user, dom=el.dataset.domain;
  const addr=`${user}@${dom}`;
  el.textContent=addr;
  el.href=`mailto:${addr}`;
}

/* Rotating highlights on the hero section */
function startRotator(){
  const el = document.getElementById('hero-rotator');
  if (!el) return;
  const items = [
    'Wearable sensors for health monitoring.',
    'AI and machine learning for healthcare.',
    'Translational engineering in medicine.',
    'Innovative solutions for patient care.',
    'Advancing medical technology through research.',
    'Bridging engineering and clinical practice.',
    'Pioneering wearable health technologies.'
  ];
  let i = 0;
  el.textContent = items[i];

  setInterval(() => {
    // Start fade-out
    el.classList.add('fade-out');
    // After fade-out duration, update the text and fade back in
    setTimeout(() => {
      i = (i + 1) % items.length;
      el.textContent = items[i];
      el.classList.remove('fade-out');
      el.classList.add('fade-in');
      // Remove fade-in after it completes
      setTimeout(() => {
        el.classList.remove('fade-in');
      }, 500);
    }, 500);
  }, 4000);
}

document.addEventListener('DOMContentLoaded',()=>{
  setYear();
  startRotator();
  revealEmail();
});