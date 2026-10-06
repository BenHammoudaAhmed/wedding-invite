(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),`scrollRestoration`in history&&(history.scrollRestoration=`manual`),window.scrollTo(0,0);var e,t,n=[],r=55,i=class{constructor(e){this.canvas=e,this.reset(!0)}reset(e=!1){this.x=Math.random()*this.canvas.width,this.y=e?Math.random()*this.canvas.height:this.canvas.height+10,this.size=Math.random()*2.5+.8,this.speedY=-(Math.random()*.35+.08),this.speedX=Math.random()*.2-.1,this.opacity=Math.random()*.6+.15,this.fadeDir=Math.random()>.5?1:-1,this.fadeSpeed=Math.random()*.008+.002,this.glow=Math.random()>.7;let t=[`#E5C158`,`#C5A059`,`#D4AF37`,`#FFD700`,`#F0E68C`];this.color=t[Math.floor(Math.random()*t.length)]}update(){this.y+=this.speedY,this.x+=this.speedX+Math.sin(this.y*.01)*.15,this.opacity+=this.fadeDir*this.fadeSpeed,(this.opacity>=.8||this.opacity<=.1)&&(this.fadeDir*=-1),(this.y<-15||this.x<-15||this.x>this.canvas.width+15)&&this.reset()}draw(e){e.save(),e.globalAlpha=Math.max(0,this.opacity),e.fillStyle=this.color,this.glow&&(e.shadowBlur=8,e.shadowColor=this.color),e.beginPath(),e.arc(this.x,this.y,this.size,0,Math.PI*2),e.fill(),e.restore()}},a=class{constructor(e){this.canvas=e,this.reset(!0)}reset(e=!1){this.x=Math.random()*this.canvas.width,this.y=e?Math.random()*this.canvas.height:-30,this.size=Math.random()*18+6,this.speedY=Math.random()*.15+.03,this.speedX=Math.random()*.1-.05,this.opacity=Math.random()*.08+.02,this.fadeDir=1,this.fadeSpeed=Math.random()*.001+5e-4}update(){this.y+=this.speedY,this.x+=this.speedX,this.opacity+=this.fadeDir*this.fadeSpeed,(this.opacity>=.12||this.opacity<=.01)&&(this.fadeDir*=-1),this.y>this.canvas.height+30&&this.reset()}draw(e){e.save(),e.globalAlpha=Math.max(0,this.opacity);let t=e.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size);t.addColorStop(0,`rgba(229, 193, 88, 0.4)`),t.addColorStop(.5,`rgba(229, 193, 88, 0.1)`),t.addColorStop(1,`rgba(229, 193, 88, 0)`),e.fillStyle=t,e.beginPath(),e.arc(this.x,this.y,this.size,0,Math.PI*2),e.fill(),e.restore()}},o=class{constructor(e){this.canvas=e,this.reset(!0)}reset(e=!1){this.x=Math.random()*this.canvas.width,this.y=e?Math.random()*this.canvas.height:-30,this.size=Math.random()*8+6,this.speedY=Math.random()*1+.3,this.speedX=Math.random()*1.5-.75,this.rotation=Math.random()*360,this.rotationSpeed=Math.random()*1.5-.75,this.opacity=Math.random()*.5+.2;let t=[`#F5D5C8`,`#FFFDF7`,`#FADCD0`];this.color=t[Math.floor(Math.random()*t.length)]}update(){this.y+=this.speedY,this.x+=this.speedX+Math.sin(this.y*.015)*.8,this.rotation+=this.rotationSpeed,this.y>this.canvas.height+30&&this.reset()}draw(e){e.save(),e.globalAlpha=this.opacity,e.translate(this.x,this.y),e.rotate(this.rotation*Math.PI/180),e.fillStyle=this.color,e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(this.size,this.size,-this.size,this.size,0,0),e.fill(),e.restore()}};function s(){if(e=document.getElementById(`particles-canvas`),e){t=e.getContext(`2d`),c();for(let t=0;t<r*.5;t++)n.push(new i(e));for(let t=0;t<r*.2;t++)n.push(new a(e));for(let t=0;t<r*.3;t++)n.push(new o(e));window.addEventListener(`resize`,c),l()}}function c(){e&&(e.width=window.innerWidth,e.height=window.innerHeight)}function l(){t&&e&&(t.clearRect(0,0,e.width,e.height),n.forEach(e=>{e.update(),e.draw(t)}),requestAnimationFrame(l))}var u=!1;function d(){u||(u=!0,y(),gsap.registerPlugin(ScrollTrigger),gsap.timeline({onComplete:()=>{let e=document.getElementById(`envelope-screen`);e&&(e.style.display=`none`);let t=document.getElementById(`audio-toggle`);t&&t.classList.add(`visible`)}}).to(`.seal-glow`,{opacity:1,scale:1.8,duration:.5,ease:`power2.out`}).to(`.seal-body`,{scale:1.5,opacity:0,rotation:20,duration:.6,ease:`power3.out`},`-=0.2`).to(`.seal-glow`,{scale:4,opacity:0,duration:.7,ease:`power2.out`},`-=0.5`).to([`.open-prompt`,`.env-top-text`,`.env-bottom-text`],{opacity:0,y:20,duration:.4,ease:`power2.in`},`-=0.6`).to(`.env-flap`,{rotateX:-180,duration:1.2,ease:`power3.inOut`,transformOrigin:`top center`,onStart:f},`-=0.3`).to(`.env-corner`,{opacity:0,duration:.4,ease:`power2.in`},`-=0.6`).to(`#envelope-screen`,{y:`-100%`,opacity:0,duration:1,ease:`power3.inOut`},`-=0.4`).call(()=>{let e=document.getElementById(`invitation-page`);e&&(e.classList.add(`visible`),window.scrollTo(0,0))},null,`-=0.6`).fromTo(`#invitation-page`,{opacity:0,y:40},{opacity:1,y:0,duration:1,ease:`power2.out`,onComplete:()=>{setTimeout(p,200)}},`-=0.6`).to(`.floral-corner`,{opacity:1,duration:1.6,ease:`power2.out`},`<`))}function f(){if(typeof confetti>`u`)return;let e=Date.now()+2500,t=[`#C5A059`,`#E5C158`,`#D4AF37`,`#FFD700`,`#BF953F`,`#FBF5B7`];(function n(){confetti({particleCount:3,angle:60,spread:55,origin:{x:0,y:.7},colors:t,ticks:200,gravity:.8,scalar:1.2,drift:.5}),confetti({particleCount:3,angle:120,spread:55,origin:{x:1,y:.7},colors:t,ticks:200,gravity:.8,scalar:1.2,drift:-.5}),Date.now()<e&&requestAnimationFrame(n)})(),setTimeout(()=>{confetti({particleCount:80,spread:100,origin:{x:.5,y:.5},colors:t,ticks:300,gravity:.6,scalar:1.5,shapes:[`circle`]})},300)}function p(){document.querySelectorAll(`.inv-section`).forEach((e,t)=>{gsap.fromTo(e,{opacity:0,y:40},{opacity:1,y:0,duration:.8,ease:`power2.out`,delay:t*.08,scrollTrigger:{trigger:e,start:`top 88%`,toggleActions:`play none none none`,once:!0}})}),document.querySelectorAll(`.ornamental-divider`).forEach(e=>{gsap.fromTo(e,{opacity:0,scaleX:0},{opacity:1,scaleX:1,duration:.6,ease:`power2.out`,scrollTrigger:{trigger:e,start:`top 90%`,once:!0}})})}function m(){let e=document.querySelectorAll(`.tilt-element`);e.forEach(e=>{e.addEventListener(`mousemove`,t=>{let n=e.getBoundingClientRect(),r=t.clientX-n.left,i=(t.clientY-n.top-n.height/2)/(n.height/2)*-5,a=(r-n.width/2)/(n.width/2)*5;e.style.transform=`perspective(800px) rotateX(${i}deg) rotateY(${a}deg) translateY(-4px) scale(1.02)`}),e.addEventListener(`mouseleave`,()=>{e.style.transform=`perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)`})}),window.DeviceOrientationEvent&&window.addEventListener(`deviceorientation`,t=>{let n=(t.gamma||0)*.15,r=(t.beta||0)*.1;e.forEach(e=>{e.style.transform=`perspective(800px) rotateX(${r}deg) rotateY(${n}deg)`})})}function h(){let e=document.getElementById(`qr-code`);!e||e.querySelector(`img`)||typeof QRCode>`u`||new QRCode(e,{text:`https://maps.app.goo.gl/8iYHdRk8w2n56j8Z6`,width:150,height:150,colorDark:`#36261C`,colorLight:`#FFFDF7`,correctLevel:QRCode.CorrectLevel.M})}var g=new Date(`2027-03-27T15:00:00+01:00`).getTime();function _(){let e=g-Date.now(),t=Math.max(0,Math.floor(e/864e5)),n=Math.max(0,Math.floor(e%864e5/36e5)),r=Math.max(0,Math.floor(e%36e5/6e4)),i=Math.max(0,Math.floor(e%6e4/1e3)),a=document.getElementById(`cd-days`),o=document.getElementById(`cd-hours`),s=document.getElementById(`cd-minutes`),c=document.getElementById(`cd-seconds`);a&&(a.textContent=t.toString().padStart(2,`0`)),o&&(o.textContent=n.toString().padStart(2,`0`)),s&&(s.textContent=r.toString().padStart(2,`0`)),c&&(c.textContent=i.toString().padStart(2,`0`),c.style.transform=`scale(1.1)`,setTimeout(()=>{c.style.transform=`scale(1)`},150))}var v=!0;function y(){let e=document.getElementById(`bg-music`),t=document.getElementById(`audio-toggle`);return e?(e.muted=!1,e.volume=.35,(()=>{let n=e.play();return n&&typeof n.then==`function`?(n.then(()=>(v=!1,t&&t.classList.remove(`muted`),!0)).catch(()=>(v=!0,t&&t.classList.add(`muted`),!1)),n):(v=!1,t&&t.classList.remove(`muted`),!0)})()):!1}function b(){let e=document.getElementById(`audio-toggle`),t=document.getElementById(`bg-music`);e&&t&&e.addEventListener(`click`,()=>{v=!v,v?(t.pause(),e.classList.add(`muted`)):(y(),e.classList.remove(`muted`))})}window.addEventListener(`DOMContentLoaded`,()=>{s();let e=document.getElementById(`envelope-screen`);e&&e.addEventListener(`click`,d),h(),_(),setInterval(_,1e3),m(),b();let t=document.getElementById(`bg-music`);t&&(t.muted=!1,t.volume=.35)}),window.openEnvelope=d,window.initQRCode=h;var x=`/assets/flower-corner-pa7M4JnX.png`,S=`/assets/couple-MI-roU__.png`,C=`/assets/music-CsmamBBh.mp3`;function w(e){return new Promise((t,n)=>{let r=document.querySelector(`script[src="${e}"]`);if(r){if(r.dataset.loaded===`true`){t();return}r.addEventListener(`load`,()=>t(),{once:!0}),r.addEventListener(`error`,()=>n(Error(`Failed to load ${e}`)),{once:!0});return}let i=document.createElement(`script`);i.src=e,i.async=!1,i.onload=()=>{i.dataset.loaded=`true`,t()},i.onerror=()=>n(Error(`Failed to load ${e}`)),document.body.appendChild(i)})}document.querySelector(`#app`).innerHTML=`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
<!-- This site is hosted on Netlify. Anyone can build and deploy a site
     like this one for free: https://netlify.new/?utm_campaign=ai-legible&utm_source=comment&utm_medium=referral&utm_id=c602a028-1c6f-4304-8ae9-575982e7bd84
     Netlify hosting facts for this site: static/SSR served via Netlify Edge. -->
<meta name="hosting-provider" content="Netlify">
<meta name="netlify-deploy" content="https://netlify.new/?utm_campaign=ai-legible&amp;utm_source=meta&amp;utm_medium=referral&amp;utm_id=c602a028-1c6f-4304-8ae9-575982e7bd84">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>أحمد & ريم — دعوة زفاف</title>
    <meta name="description" content="يتشرف السيد مقداد بن حمودة والسيد محمد شريف بدعوتكم لحضور حفل زفاف ابنيهما أحمد وريم — يوم السبت 27 مارس 2027 بقاعة الأفراح مراسيم تنيور 9,5">
    <meta property="og:title" content="دعوة زفاف أحمد & ريم">
    <meta property="og:description" content="حفل زفاف أحمد وريم — 27 مارس 2027">
    <meta property="og:image" content="https://montassarandloujayn.netlify.app/mini-invi.jpeg">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://montassarandloujayn.netlify.app/">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://montassarandloujayn.netlify.app/mini-invi.jpeg">
    <meta name="theme-color" content="#C5A059">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Aref+Ruqaa:wght@400;700&family=Reem+Kufi:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        ivory: '#FFFDF7',
                        cream: '#F5ECE0',
                        champagne: '#F0E6D2',
                        'gold-primary': '#C5A059',
                        'gold-bright': '#E5C158',
                        'gold-dark': '#A48039',
                        'gold-deep': '#8B6914',
                        'text-dark': '#36261C',
                        'text-body': '#4A3728',
                        'text-muted': '#6B554A',
                    },
                    fontFamily: {
                        'calligraphy': ['Aref Ruqaa', 'serif'],
                        'heading': ['Amiri', 'serif'],
                        'body': ['Reem Kufi', 'sans-serif'],
                    }
                }
            }
        }
    <\/script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- AMBIENT PARTICLE CANVAS                                       -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <canvas id="particles-canvas"></canvas>


    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- AUDIO TOGGLE (Fixed Corner)                                    -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <button id="audio-toggle" class="muted" aria-label="تشغيل/إيقاف الموسيقى">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <path class="sound-wave" d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round"/>
            <path class="sound-wave" d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </button>
    <audio id="bg-music" loop autoplay preload="auto" src="${C}"></audio>


    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- STAGE 1: FULLSCREEN IMMERSIVE ENVELOPE                        -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div id="envelope-screen">

        <!-- Fullscreen envelope body -->
        <div class="env-body">
            <div class="env-texture"></div>

            <!-- Gold corner accents -->
            <div class="env-corner env-corner-tl"></div>
            <div class="env-corner env-corner-tr"></div>
            <div class="env-corner env-corner-bl"></div>
            <div class="env-corner env-corner-br"></div>

            <!-- SVG ornamental corners -->
            <svg class="env-ornament env-orn-tl" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M2,2 L58,2" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
                <path d="M2,2 L2,58" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
                <path d="M8,8 Q30,8 30,30" stroke="#C5A059" stroke-width="0.6" opacity="0.4"/>
                <circle cx="8" cy="8" r="2" fill="#C5A059" opacity="0.5"/>
                <circle cx="20" cy="8" r="1" fill="#C5A059" opacity="0.3"/>
                <circle cx="8" cy="20" r="1" fill="#C5A059" opacity="0.3"/>
                <path d="M14,2 L14,8 M20,2 L20,6 M26,2 L26,5" stroke="#C5A059" stroke-width="0.6" opacity="0.35"/>
                <path d="M2,14 L8,14 M2,20 L6,20 M2,26 L5,26" stroke="#C5A059" stroke-width="0.6" opacity="0.35"/>
            </svg>
            <svg class="env-ornament env-orn-tr" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M2,2 L58,2" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
                <path d="M2,2 L2,58" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
                <path d="M8,8 Q30,8 30,30" stroke="#C5A059" stroke-width="0.6" opacity="0.4"/>
                <circle cx="8" cy="8" r="2" fill="#C5A059" opacity="0.5"/>
                <circle cx="20" cy="8" r="1" fill="#C5A059" opacity="0.3"/>
                <circle cx="8" cy="20" r="1" fill="#C5A059" opacity="0.3"/>
                <path d="M14,2 L14,8 M20,2 L20,6 M26,2 L26,5" stroke="#C5A059" stroke-width="0.6" opacity="0.35"/>
                <path d="M2,14 L8,14 M2,20 L6,20 M2,26 L5,26" stroke="#C5A059" stroke-width="0.6" opacity="0.35"/>
            </svg>
            <svg class="env-ornament env-orn-bl" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M2,2 L58,2" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
                <path d="M2,2 L2,58" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
                <path d="M8,8 Q30,8 30,30" stroke="#C5A059" stroke-width="0.6" opacity="0.4"/>
                <circle cx="8" cy="8" r="2" fill="#C5A059" opacity="0.5"/>
                <circle cx="20" cy="8" r="1" fill="#C5A059" opacity="0.3"/>
                <circle cx="8" cy="20" r="1" fill="#C5A059" opacity="0.3"/>
                <path d="M14,2 L14,8 M20,2 L20,6 M26,2 L26,5" stroke="#C5A059" stroke-width="0.6" opacity="0.35"/>
                <path d="M2,14 L8,14 M2,20 L6,20 M2,26 L5,26" stroke="#C5A059" stroke-width="0.6" opacity="0.35"/>
            </svg>
            <svg class="env-ornament env-orn-br" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M2,2 L58,2" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
                <path d="M2,2 L2,58" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
                <path d="M8,8 Q30,8 30,30" stroke="#C5A059" stroke-width="0.6" opacity="0.4"/>
                <circle cx="8" cy="8" r="2" fill="#C5A059" opacity="0.5"/>
                <circle cx="20" cy="8" r="1" fill="#C5A059" opacity="0.3"/>
                <circle cx="8" cy="20" r="1" fill="#C5A059" opacity="0.3"/>
                <path d="M14,2 L14,8 M20,2 L20,6 M26,2 L26,5" stroke="#C5A059" stroke-width="0.6" opacity="0.35"/>
                <path d="M2,14 L8,14 M2,20 L6,20 M2,26 L5,26" stroke="#C5A059" stroke-width="0.6" opacity="0.35"/>
            </svg>

            <!-- Inner gold border -->
            <div class="env-inner-border"></div>
        </div>

        <!-- TOP FLAP (covers upper ~45%, opens upward) -->
        <div class="env-flap">
            <div class="env-flap-face"></div>
        </div>

        <!-- Decorative bismillah above seal -->
        <div class="env-top-text">بسم الله الرحمن الرحيم</div>

        <!-- WAX SEAL -->
        <div class="wax-seal">
            <div class="seal-glow"></div>
            <div class="seal-body">
                <svg class="seal-rings-svg" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#FFF8E1"/>
                            <stop offset="50%" style="stop-color:#FFFDF7"/>
                            <stop offset="100%" style="stop-color:#FFF8E1"/>
                        </linearGradient>
                    </defs>
                    <ellipse cx="22" cy="20" rx="13" ry="12" fill="none" stroke="url(#ring-grad)" stroke-width="2.5"/>
                    <ellipse cx="38" cy="20" rx="13" ry="12" fill="none" stroke="url(#ring-grad)" stroke-width="2.5"/>
                    <path d="M30 14 L33 20 L30 26 L27 20 Z" fill="url(#ring-grad)" opacity="0.6"/>
                </svg>
            </div>
        </div>

        <!-- Couple initials -->
        <div class="env-bottom-text">أ ♥ ر</div>

        <!-- Click Prompt -->
        <div class="open-prompt">
            <div class="prompt-line"></div>
            <span>انقر لفتح الدعوة</span>
            <div class="prompt-line"></div>
        </div>
    </div>


    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- STAGE 2: MAIN INVITATION PAGE                                 -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div id="invitation-page">
        <main class="invitation-card">

            <!-- Floral Corner Ornaments -->
            <img src="${x}" alt="" class="floral-corner floral-top-right" loading="eager">
            <img src="${x}" alt="" class="floral-corner floral-bottom-left" loading="eager">

            <!-- ─── Golden Arch Frame Header ─── -->
            <div class="arch-frame inv-section">
                <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="arch-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#BF953F"/>
                            <stop offset="25%" style="stop-color:#FCF6BA"/>
                            <stop offset="50%" style="stop-color:#B38728"/>
                            <stop offset="75%" style="stop-color:#FBF5B7"/>
                            <stop offset="100%" style="stop-color:#AA771C"/>
                        </linearGradient>
                    </defs>
                    <path d="M30,110 Q30,20 300,10 Q570,20 570,110" fill="none" stroke="url(#arch-gold)" stroke-width="1.5" opacity="0.7"/>
                    <path d="M50,110 Q50,35 300,25 Q550,35 550,110" fill="none" stroke="url(#arch-gold)" stroke-width="1" opacity="0.4"/>
                    <circle cx="300" cy="10" r="6" fill="none" stroke="url(#arch-gold)" stroke-width="1.2"/>
                    <circle cx="300" cy="10" r="2.5" fill="#C5A059"/>
                    <path d="M120,75 Q130,65 140,75" fill="none" stroke="url(#arch-gold)" stroke-width="1" opacity="0.5"/>
                    <path d="M460,75 Q470,65 480,75" fill="none" stroke="url(#arch-gold)" stroke-width="1" opacity="0.5"/>
                    <path d="M70,95 L75,88 L80,95 L75,102 Z" fill="#C5A059" opacity="0.3"/>
                    <path d="M520,95 L525,88 L530,95 L525,102 Z" fill="#C5A059" opacity="0.3"/>
                    <circle cx="100" cy="85" r="1.5" fill="#C5A059" opacity="0.4"/>
                    <circle cx="500" cy="85" r="1.5" fill="#C5A059" opacity="0.4"/>
                    <circle cx="200" cy="50" r="1.5" fill="#C5A059" opacity="0.3"/>
                    <circle cx="400" cy="50" r="1.5" fill="#C5A059" opacity="0.3"/>
                </svg>
            </div>

            <!-- ─── Bismillah ─── -->
            <section class="inv-section" id="bismillah-section">
                <h1 class="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
            </section>

            <!-- ─── Quranic Verse ─── -->
            <section class="inv-section" id="verse-section">
                <div class="verse-container">
                    <p class="quran-verse">
                        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                    </p>
                    <span class="quran-ref">صدق الله العظيم — سورة الروم ﴿٢١﴾</span>
                </div>
            </section>

            <!-- ─── Ornamental Divider ─── -->
            <div class="ornamental-divider">
                <span class="divider-icon">❦</span>
            </div>

            <!-- ─── Greeting & Family Announcement ─── -->
            <section class="inv-section" id="greeting-section">
                <p class="greeting-text">بعد إهدائكم عاطر التحية، وأزكى السلام،</p>
                <p class="family-label">فإن عائلتي</p>

                <div class="family-names-row">
                    <span class="family-name">السيد مقداد بن حمودة</span>
                    <span class="family-ampersand">&</span>
                    <span class="family-name">السيد محمد شريف</span>
                </div>

                <p class="invitation-line">لهما عظيم الشرف بدعوتكم لحضور حفل زفاف ابنيهما</p>
            </section>

            <!-- ─── Couple Names Centerpiece ─── -->
            <section class="inv-section couple-names-container" id="couple-section">
                <div class="couple-names-row">
                    <span class="couple-name" id="groom-name">أحمد</span>
                    <span class="rings-icon">
                        <svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="ring-gold-1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#BF953F"/>
                                    <stop offset="30%" style="stop-color:#FCF6BA"/>
                                    <stop offset="60%" style="stop-color:#B38728"/>
                                    <stop offset="100%" style="stop-color:#FBF5B7"/>
                                </linearGradient>
                                <linearGradient id="ring-gold-2" x1="100%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#AA771C"/>
                                    <stop offset="30%" style="stop-color:#FBF5B7"/>
                                    <stop offset="60%" style="stop-color:#BF953F"/>
                                    <stop offset="100%" style="stop-color:#FCF6BA"/>
                                </linearGradient>
                                <filter id="ring-shadow">
                                    <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#A48039" flood-opacity="0.3"/>
                                </filter>
                            </defs>
                            <ellipse cx="28" cy="25" rx="18" ry="16" fill="none" stroke="url(#ring-gold-1)" stroke-width="4" filter="url(#ring-shadow)"/>
                            <ellipse cx="52" cy="25" rx="18" ry="16" fill="none" stroke="url(#ring-gold-2)" stroke-width="4" filter="url(#ring-shadow)"/>
                            <ellipse cx="40" cy="25" rx="5" ry="15" fill="none" stroke="rgba(252,246,186,0.4)" stroke-width="1"/>
                            <circle cx="40" cy="14" r="2" fill="#FCF6BA" opacity="0.8"/>
                            <path d="M40 11 L40.8 13.5 L43 14 L40.8 14.5 L40 17 L39.2 14.5 L37 14 L39.2 13.5 Z" fill="#FCF6BA" opacity="0.6"/>
                        </svg>
                    </span>
                    <span class="couple-name" id="bride-name">ريم</span>
                </div>
                <p class="mashia-text">وذلك بمشيئة الله تعالى</p>
            </section>

            <!-- ─── Couple Photo ─── -->
            <section class="inv-section" id="photo-section">
                <div class="photo-frame tilt-element">
                    <img src="${S}" alt="صورة العرسان في الصغر" class="kids-photo">
                    <div class="photo-overlay"></div>
                    <!-- Decorative Corners for Photo -->
                    <svg class="photo-corner photo-tl" viewBox="0 0 50 50"><path d="M0,0 L50,0 L50,2 L2,2 L2,50 L0,50 Z" fill="#C5A059"/><circle cx="10" cy="10" r="3" fill="#C5A059"/></svg>
                    <svg class="photo-corner photo-tr" viewBox="0 0 50 50"><path d="M50,0 L0,0 L0,2 L48,2 L48,50 L50,50 Z" fill="#C5A059"/><circle cx="40" cy="10" r="3" fill="#C5A059"/></svg>
                    <svg class="photo-corner photo-bl" viewBox="0 0 50 50"><path d="M0,50 L50,50 L50,48 L2,48 L2,0 L0,0 Z" fill="#C5A059"/><circle cx="10" cy="40" r="3" fill="#C5A059"/></svg>
                    <svg class="photo-corner photo-br" viewBox="0 0 50 50"><path d="M50,50 L0,50 L0,48 L48,48 L48,0 L50,0 Z" fill="#C5A059"/><circle cx="40" cy="40" r="3" fill="#C5A059"/></svg>
                </div>
            </section>

            <!-- ─── Event Details Grid ─── -->
            <section class="inv-section" id="details-section">
                <div class="details-grid">
                    <div class="glass-card tilt-element" id="date-card">
                        <div class="card-icon-circle">
                            <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><text x="12" y="18" text-anchor="middle" font-size="7" fill="#A48039" stroke="none" font-weight="bold">13</text></svg>
                        </div>
                        <p class="card-label">يوم السبت</p>
                        <p class="card-value">27 مارس 2027</p>
                        <a href="https://calendar.google.com/calendar/u/0/r/eventedit?text=حفل+زفاف+أحمد+و+ريم&dates=20270327T150000/20270327T180000&details=حفل+زفاف&location=+MARASSIM,+RPFM+65+Sakiet+Ezzit,+Tunisia" target="_blank" rel="noopener" class="card-action-btn">
                            <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
                            إضافة للتقويم
                        </a>
                    </div>
                    <div class="glass-card tilt-element" id="venue-card">
                        <div class="card-icon-circle">
                            <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6"/><rect x="9" y="9" width="2" height="2" fill="#A48039" stroke="none"/><rect x="13" y="9" width="2" height="2" fill="#A48039" stroke="none"/></svg>
                        </div>
                        <p class="card-label">بقاعة الأفراح</p>
                        <p class="card-value">مراسيم</p>
                        <p class="card-sub">تنيور 9,5</p>
                        <a href="https://maps.app.goo.gl/8iYHdRk8w2n56j8Z6" target="_blank" rel="noopener" class="card-action-btn">
                            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            الاتجاهات
                        </a>
                    </div>
                    <div class="glass-card tilt-element" id="time-card">
                        <div class="card-icon-circle">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <p class="card-label">على الساعة</p>
                        <p class="card-value">الثالثة مساءً</p>
                        <p class="card-sub">(15:00)</p>
                    </div>
                </div>
            </section>

            <!-- ─── Countdown Timer ─── -->
            <section class="inv-section" id="countdown-section">
                <p class="section-label">العد التنازلي</p>
                <h2 class="section-heading">متبقي على ليلة العمر</h2>
                <div class="countdown-grid">
                    <div class="countdown-tile"><span class="count-value" id="cd-days">00</span><span class="count-label">يوم</span></div>
                    <div class="countdown-tile"><span class="count-value" id="cd-hours">00</span><span class="count-label">ساعة</span></div>
                    <div class="countdown-tile"><span class="count-value" id="cd-minutes">00</span><span class="count-label">دقيقة</span></div>
                    <div class="countdown-tile"><span class="count-value" id="cd-seconds">00</span><span class="count-label">ثانية</span></div>
                </div>
            </section>

            <div class="ornamental-divider"><span class="divider-icon">✦</span></div>

            <!-- ─── QR Code Section ─── -->
            <section class="inv-section" id="qr-section">
                <div class="qr-pin-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#C5A059"/><circle cx="12" cy="10" r="3" fill="#FFFDF7"/></svg>
                </div>
                <div class="qr-wrapper"><div id="qr-code"></div></div>
                <p class="qr-label">امسح للوصول إلى الموقع</p>
            </section>

            <div class="ornamental-divider"><span class="divider-icon">❦</span></div>

            <!-- ─── Closing Footer ─── -->
            <footer class="inv-section closing-section" id="closing-section">
                <p class="closing-primary">لكم العاقبة في الأفراح والمسرات</p>
                <p class="closing-secondary">حضوركم يُسعدنا ويشرفنا</p>
                <div class="closing-badge">أحمد & ريم — 2027</div>
            </footer>

        </main>
    </div>

</body>
</html>
`,Promise.allSettled([`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`,`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`,`https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js`,`https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js`].map(w)).catch(()=>{console.warn(`One or more CDN scripts failed to load.`)}).finally(()=>{typeof window.initQRCode==`function`&&window.initQRCode();let e=document.querySelector(`.wax-seal`);e&&e.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),typeof window.openEnvelope==`function`&&window.openEnvelope()});let t=document.getElementById(`envelope-screen`);t&&t.addEventListener(`click`,()=>{typeof window.openEnvelope==`function`&&window.openEnvelope()})});