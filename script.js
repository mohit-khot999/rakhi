let current=0;
const screens=[...document.querySelectorAll('.screen')];
function go(n){
  screens[current].classList.remove('active');
  current=n;
  screens[current].classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function show(id,msg){
  document.getElementById(id).textContent=msg;
  const suffix = id === 'reaction' ? '1' : id.replace('reaction','');
  const btn = document.getElementById('next' + suffix);
  if(btn) btn.classList.remove('hidden');
}
function wrong(who){
  if(who==='Shreya'){
    show('reaction','HAHA funny 😂 Aamhi aahot! Nice try, Tai.');
  } else show('reaction','Suspicious answer detected 👀');
}
function correct(who){show('reaction',`Okay ${who}… finally someone understands the assignment 😌`)}
function answer2(){show('reaction2','Scientists have concluded: Shreya Tai time runs on a different clock. 🧪😂')}
function answer3(){show('reaction3','Case closed. Older = yes. Tall = absolutely not. 🤏😂')}
function answer4(x){const m={Money:'Ah yes… the economy has entered the family chat. 💰😂',Remote:'The TV remote: the true family heirloom. 📺',Games:'One game = 47 arguments. 🎮😭',Trips:'Planning the trip is easy. Agreeing on the trip is the boss fight. ✈️😂'};show('reaction4',m[x])}
function answer5(x){
  if(x==='Tai') show('reaction5','Correct 😂 Unofficial counsellor, official Tai. ❤️');
  else show('reaction5','Incorrect. Please contact Shreya Tai immediately. She has experience. 😌');
}
function openGift(){
  const b=document.getElementById('giftbox'); b.classList.add('open');
  document.getElementById('giftTitle').textContent='🎁 The gift is…';
  document.getElementById('giftText').innerHTML='A promise that no matter how much we annoy you, fight with you, steal the remote, or disturb your personal space… <b>you will always have us. ❤️</b>';
  document.getElementById('giftNext').classList.remove('hidden');
  burst();
}
function burst(){
  for(let i=0;i<28;i++){
    const s=document.createElement('span'); s.textContent=['❤','✦','✧','🎉'][Math.floor(Math.random()*4)];
    s.style.position='fixed'; s.style.left=(50+Math.random()*30-15)+'%'; s.style.top='45%';
    s.style.zIndex=10;s.style.fontSize=(12+Math.random()*20)+'px';s.style.pointerEvents='none';
    document.body.appendChild(s);
    const x=(Math.random()*360-180), y=(Math.random()*-420-80);
    s.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${x}px,${y}px) rotate(${Math.random()*720-360}deg) scale(.4)`,opacity:0}],{duration:1200+Math.random()*900,easing:'cubic-bezier(.2,.7,.2,1)'}).onfinish=()=>s.remove();
  }
}
function toggleMusic(){
  const a=document.getElementById('music');
  if(a.paused){a.play().catch(()=>alert('If music.mp3 is present in the same folder, your browser should play it after you tap again.'));}else a.pause();
}
