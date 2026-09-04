import "./style.css";
import "./script.js";
import flowerCorner from "./assets/flower-corner.png";
import couplePhoto from "./assets/couple.png";
import qrCodeImage from "./assets/qr.png";
import backgroundMusic from "./assets/music.mp3";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        {
          once: true,
        },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

document.querySelector("#app").innerHTML = `
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
    <script src="https://cdn.tailwindcss.com"></script>
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
    </script>

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
    <audio id="bg-music" loop autoplay preload="auto" src="${backgroundMusic}"></audio>


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
            <img src="${flowerCorner}" alt="" class="floral-corner floral-top-right" loading="eager">
            <img src="${flowerCorner}" alt="" class="floral-corner floral-bottom-left" loading="eager">

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
                    <img src="${couplePhoto}" alt="صورة العرسان في الصغر" class="kids-photo">
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
                        <a href="https://www.google.com/maps/search/?api=1&query=Salle+de+f%C3%AAte+Top+Happiness+Lac+1+Tunis" target="_blank" rel="noopener" class="card-action-btn">
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
                <div class="qr-wrapper"><img src="${qrCodeImage}" alt="رمز الاستجابة السريعة" class="qr-code-image" /><div id="qr-code"></div></div>
                <p class="qr-label">امسح للوصول إلى الموقع</p>
            </section>

            <div class="ornamental-divider"><span class="divider-icon">❦</span></div>

            <!-- ─── Closing Footer ─── -->
            <footer class="inv-section closing-section" id="closing-section">
                <p class="closing-primary">لكم العاقبة في الأفراح والمسرات</p>
                <p class="closing-secondary">حضوركم يُسعدنا ويشرفنا</p>
                <div class="closing-badge">أحمد & ريم — 2026</div>
            </footer>

        </main>
    </div>

</body>
</html>
`;

const externalScripts = [
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js",
  "https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js",
];

Promise.allSettled(externalScripts.map(loadScript))
  .catch(() => {
    console.warn("One or more CDN scripts failed to load.");
  })
  .finally(() => {
    const waxSeal = document.querySelector(".wax-seal");
    if (waxSeal) {
      waxSeal.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (typeof window.openEnvelope === "function") {
          window.openEnvelope();
        }
      });
    }

    const envelopeScreen = document.getElementById("envelope-screen");
    if (envelopeScreen) {
      envelopeScreen.addEventListener("click", () => {
        if (typeof window.openEnvelope === "function") {
          window.openEnvelope();
        }
      });
    }
  });
