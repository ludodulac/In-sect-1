<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#060e04">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<title>IN-SECT — DEV (Accès Total)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
<style>
/* ══════════════════════════════════════════
   DESIGN TOKENS
══════════════════════════════════════════ */
:root{
  --bg:#060e04;--bg2:#0a1507;--card:#0d1b08;--panel:#101f0c;--border:#1a2e10;
  /* Vert UI : désaturé pour ne pas concurrencer les colonies */
  --green:#6aaa28;--green-l:#90c858;--green-d:#3a6010;--green-dim:#223808;
  /* Or premium : plus doux, moins flash */
  --gold:#c8a040;--gold-l:#ddb860;--gold-d:#8a6820;--gold-dim:#4a3810;
  --gold-glow:rgba(200,160,64,.25);--amber:#c8a040;--amber-d:#8a6820;
  --text:#d0e8a8;--text-dim:#8aaa50;--text-muted:#587030;
  --safe-top:env(safe-area-inset-top,0px);--safe-bot:env(safe-area-inset-bottom,0px);
  --anim:400ms;--cs:min(9.5vw,48px);
  --r-sm:10px;--r-md:14px;--r-lg:18px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;}
html{height:100%;background:var(--bg);}body{height:100%;}
body{color:var(--text);font-family:'Cinzel',serif;overscroll-behavior:none;touch-action:none;user-select:none;font-size:16px;-webkit-tap-highlight-color:transparent;position:fixed;left:0;top:0;right:0;bottom:0;overflow:hidden;}

/* ══ AMBIENT CANVAS ══ */
#ambient{position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.5;}
/* ══ FX CANVAS (captures, particles) ══ */
#fx-canvas{position:fixed;inset:0;pointer-events:none;z-index:100;}

/* ══════════════════════════════════════════
   LAYER SYSTEM — cinematic transitions
══════════════════════════════════════════ */
.layer{
  position:fixed;inset:0;display:flex;flex-direction:column;align-items:center;
  z-index:10;overflow:hidden;
  transition:opacity .35s cubic-bezier(.4,0,.2,1),transform .35s cubic-bezier(.4,0,.2,1);
}
.layer.hidden{opacity:0;pointer-events:none;transform:translateY(18px);}
.layer.slide-left{transform:translateX(-100%);}
.layer.slide-right{transform:translateX(100%);}

/* ══════════════════════════════════════════
   SPLASH
══════════════════════════════════════════ */
#splash{background:var(--bg);z-index:200;justify-content:center;align-items:center;}
.splash-inner{display:flex;flex-direction:column;align-items:center;gap:14px;animation:splashIn 1.1s cubic-bezier(.2,0,.3,1) forwards;}
@keyframes splashIn{0%{opacity:0;transform:scale(.82) translateY(24px);}60%{opacity:1;transform:scale(1.02) translateY(-3px);}100%{opacity:1;transform:scale(1) translateY(0);}}
.splash-bug{font-size:3.5rem;animation:bugFloat 2.4s ease-in-out infinite;}
@keyframes bugFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-9px);}}
.splash-title{
  font-family:'Cinzel Decorative',serif;font-size:clamp(3rem,13vw,5rem);font-weight:900;
  background:linear-gradient(135deg,#4a9010 0%,#8fd430 30%,#c4f050 50%,#8fd430 70%,#4a7a18 100%);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  filter:drop-shadow(0 0 28px rgba(143,212,48,.55));letter-spacing:.07em;line-height:1;
}
.splash-sub{font-family:'Crimson Pro',serif;font-size:clamp(.75rem,3.2vw,.9rem);color:var(--text-muted);letter-spacing:.35em;text-transform:uppercase;}
.splash-bar{width:160px;height:2px;background:var(--card);border-radius:2px;overflow:hidden;}
.splash-bar-fill{height:100%;width:0;background:linear-gradient(90deg,var(--gold-dim),var(--gold-l));border-radius:2px;animation:loadBar 1.7s ease-out .4s forwards;}
@keyframes loadBar{to{width:100%;}}
.splash-ver{font-size:.58rem;color:#2a3a18;letter-spacing:.2em;font-family:'Crimson Pro',serif;}

/* ══════════════════════════════════════════
   MENU — One Screen
══════════════════════════════════════════ */
#menu{padding:calc(var(--safe-top)+6px) 14px calc(var(--safe-bot)+4px);gap:0;-webkit-overflow-scrolling:touch;justify-content:space-between;overflow:hidden;align-items:center;}

.menu-top{width:100%;max-width:390px;display:flex;align-items:center;justify-content:space-between;padding:4px 0 8px;flex-shrink:0;}
.menu-logo-block{display:flex;flex-direction:column;gap:1px;}
.menu-logo{
  font-family:'Cinzel Decorative',serif;font-size:clamp(1.2rem,6vw,1.8rem);font-weight:900;
  background:linear-gradient(135deg,#5a8a20,#90c840 45%,#6aaa28 70%,#3a6010);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  filter:drop-shadow(0 0 6px rgba(106,170,40,.3));letter-spacing:.06em;line-height:1;
}
.menu-sub{font-family:'Crimson Pro',serif;font-size:.75rem;color:var(--text-dim);letter-spacing:.28em;text-transform:uppercase;}
.menu-stats-mini{display:flex;flex-direction:column;align-items:flex-end;gap:3px;}
.mstat{font-family:'Crimson Pro',serif;font-size:.85rem;color:var(--text-dim);display:flex;align-items:center;gap:5px;}
.mstat b{color:var(--gold-l);font-family:'Cinzel',serif;font-size:.92rem;}

/* Config grid — 3 colonnes : preview | config centrale | niveau IA */
.menu-config{display:none;}

/* Colonne gauche : preview selon le mode */
.mode-preview{
  background:linear-gradient(145deg,var(--card),var(--bg2));border:none;
  border-radius:var(--r-md);padding:4px 2px;background:transparent;display:flex;flex-direction:column;align-items:center;gap:3px;
  position:relative;overflow:hidden;min-height:0;justify-content:center;align-self:stretch;
}
.mode-preview::before{display:none;}
.preview-label{font-size:.65rem;letter-spacing:.12em;color:var(--green-d);text-transform:uppercase;font-family:'Cinzel',serif;text-align:center;}
.preview-tagline{font-size:.72rem;color:var(--green-l);font-family:'Crimson Pro',serif;font-style:italic;text-align:center;line-height:1.4;margin-top:4px;}
.preview-svg{width:160px;height:160px;display:block;animation:previewGlow 3.5s ease-in-out infinite;}
@keyframes previewGlow{
  0%,100%{filter:drop-shadow(0 0 3px rgba(106,170,40,.15));}
  50%{filter:drop-shadow(0 0 8px rgba(106,170,40,.3));}
}

/* Colonne centrale : adversaires + colonie empilés */
.menu-config-center{display:flex;flex-direction:column;gap:7px;}

/* Colonne droite : niveau IA vertical */
.ai-level-col{
  background:linear-gradient(145deg,var(--card),var(--bg2));border:1px solid rgba(26,46,16,.6);
  border-radius:var(--r-md);padding:8px 6px 9px;display:flex;flex-direction:column;gap:5px;
  position:relative;overflow:hidden;
}
.ai-level-col::before{display:none;}

/* Niveau IA vertical (une colonne) */
.ailgrid-v{display:flex;flex-direction:column;gap:5px;}
.ailbtn-v{
  padding:8px 5px;border-radius:7px;border:1.5px solid rgba(45,78,14,.5);background:var(--panel);
  color:var(--text-dim);cursor:pointer;font-family:'Cinzel',serif;font-size:.7rem;font-weight:700;
  display:flex;flex-direction:column;align-items:center;gap:2px;
  transition:all .18s;position:relative;
}
.ailbtn-v .alv{font-size:1.3rem;line-height:1;}
.ailbtn-v .aln{font-size:.72rem;letter-spacing:.06em;font-weight:700;}
.ailbtn-v .ali{font-size:.65rem;color:var(--text-muted);font-family:'Crimson Pro',serif;font-style:italic;}
.ailbtn-v.sel{border-color:var(--green)!important;color:var(--text);box-shadow:0 0 8px rgba(106,170,40,.25);background:#071200;}
.ailbtn-v .ai-lock{position:absolute;top:3px;right:4px;font-size:.55rem;color:var(--amber);}
.ailbtn-v:active{transform:scale(.93);}

/* Conserver l'ancienne .ailgrid/.ailbtn pour compatibilité éventuelle */
.ailgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;}
.ailbtn{
  padding:8px 3px;border-radius:7px;border:1.5px solid rgba(45,78,14,.5);background:var(--panel);
  color:var(--text-dim);cursor:pointer;font-family:'Cinzel',serif;font-size:.72rem;font-weight:700;
  display:flex;flex-direction:column;align-items:center;gap:3px;
  transition:all .18s;position:relative;min-height:60px;
}
.ailbtn .alv{font-size:1.5rem;line-height:1;}
.ailbtn .aln{font-size:.72rem;letter-spacing:.08em;font-weight:700;}
.ailbtn .ali{font-size:.65rem;color:var(--text-dim);font-family:'Crimson Pro',serif;font-style:italic;text-align:center;line-height:1.3;}
.ailbtn.sel{border-color:var(--green)!important;color:var(--text);box-shadow:0 0 8px rgba(106,170,40,.25);background:#071200;}
.ailbtn .ai-lock{position:absolute;top:4px;right:5px;font-size:.58rem;color:var(--amber);}
.ailbtn:active{transform:scale(.93);}

/* Play zone */
.menu-play-zone{width:100%;max-width:390px;display:flex;flex-direction:column;align-items:center;gap:8px;flex-shrink:0;padding:4px 0;}
.btn-play{
  width:100%;background:linear-gradient(160deg,#2d6000,#8fd430 40%,#6abf20 58%,#2d6000);
  border:none;border-radius:var(--r-lg);padding:0;height:54px;
  font-family:'Cinzel Decorative',serif;font-size:1.05rem;font-weight:700;color:#061200;
  letter-spacing:.14em;cursor:pointer;
  box-shadow:0 0 0 1px rgba(106,170,40,.2),0 4px 20px rgba(106,170,40,.25),0 1px 0 rgba(255,255,255,.1) inset;
  position:relative;overflow:hidden;
  transition:transform .15s cubic-bezier(.2,0,.3,1),box-shadow .15s;
  animation:playPulse 3s ease-in-out infinite;
  display:flex;align-items:center;justify-content:center;gap:10px;
}
.btn-play::after{content:'';position:absolute;top:0;left:-120%;width:80%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);animation:shimmer 3.5s ease-in-out infinite;}
@keyframes shimmer{0%,100%{left:-120%;}50%{left:140%;}}
@keyframes playPulse{
  0%,100%{box-shadow:0 0 0 1px rgba(106,170,40,.2),0 4px 20px rgba(106,170,40,.25),0 1px 0 rgba(255,255,255,.1) inset;}
  50%{box-shadow:0 0 0 1px rgba(106,170,40,.35),0 4px 28px rgba(106,170,40,.38),0 1px 0 rgba(255,255,255,.1) inset;}
}
.btn-play:active{transform:scale(.96);animation:none;}

.trial-badge{
  background:rgba(20,14,4,.8);border:1px solid rgba(74,56,16,.8);
  border-radius:10px;padding:6px 14px;
  font-family:'Crimson Pro',serif;font-size:.8rem;color:#a88840;
  text-align:center;width:100%;
  margin-top:4px;
}
.trial-badge b{color:#c8a050;font-size:.86rem;}
.trial-badge.warn{border-color:#9a4520;background:rgba(60,20,0,.55);}
.trial-badge.premium-ok{border-color:var(--gold-d);color:var(--gold);}

/* Bottom nav */
.bottom-nav{width:100%;max-width:390px;display:flex;gap:6px;flex-shrink:0;padding-bottom:2px;}
.bnav-btn{
  flex:1;height:42px;background:var(--card);border:1px solid rgba(26,46,16,.5);border-radius:var(--r-sm);
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;
  cursor:pointer;transition:all .2s;color:var(--text-muted);
  position:relative;overflow:hidden;
}
.bnav-btn .bni{font-size:1.3rem;line-height:1;transition:transform .2s;color:var(--text-muted);}
.bnav-btn:active{background:var(--panel);border-color:var(--green-d);color:var(--green);}
.bnav-btn:active .bni{transform:scale(1.2);}

/* ══════════════════════════════════════════
   GAME SCREEN — layout 100% fixe, board immobile
══════════════════════════════════════════ */
#game{
  display:grid;
  grid-template-rows:46px 1fr 46px 46px;
  padding:calc(var(--safe-top)+2px) 4px calc(var(--safe-bot)+4px);
  gap:4px;overflow:hidden;height:100%;box-sizing:border-box;
  align-items:center;
}

/* Top bar — hauteur FIXE 54px, ne grandit jamais */
.tban{
  width:100%;max-width:460px;
  background:linear-gradient(135deg,#0f1e08,#0a1605);
  border-radius:var(--r-sm);padding:0 8px;
  display:flex;align-items:center;gap:7px;
  border:1px solid rgba(106,170,40,.18);
  transition:border-color .35s,box-shadow .35s;
  height:46px;flex-shrink:0;overflow:hidden;
}
/* tph masqué — le message de phase sort en overlay */
.tph{display:none;}
/* Message de phase — overlay flottant centré, ne pousse rien */
.phase-msg{
  position:fixed;
  left:50%;transform:translateX(-50%);
  background:rgba(4,10,2,.95);
  border:1px solid var(--gold-d);border-radius:7px;
  padding:6px 16px;
  font-size:.8rem;color:var(--gold-l);
  font-style:italic;font-family:'Crimson Pro',serif;
  white-space:nowrap;pointer-events:none;
  z-index:50;
  transition:opacity .2s,top .2s;
  opacity:0;
}
.phase-msg.visible{opacity:1;}
.topbar-btns{display:flex;gap:5px;}
.btn-mini{
  background:rgba(0,0,0,.4);border:1.5px solid rgba(143,212,48,.3);border-radius:7px;padding:4px 9px;
  color:var(--gold);font-family:'Cinzel',serif;font-size:.74rem;cursor:pointer;letter-spacing:.05em;
  min-height:30px;min-width:34px;transition:all .15s;
}
.btn-mini:active{border-color:var(--gold);background:rgba(143,212,48,.14);transform:scale(.93);}
.tdot{width:11px;height:11px;border-radius:50%;flex-shrink:0;transition:all .3s;}
.ttxt{font-size:.9rem;font-weight:700;letter-spacing:.04em;flex:1;transition:color .3s;}
.tph{font-size:.78rem;color:var(--gold-l);font-style:italic;font-family:'Crimson Pro',serif;margin-top:1px;}

/* Board frame */
.bwrap{width:100%;max-width:460px;display:flex;justify-content:center;align-items:center;min-height:0;overflow:visible;position:relative;}
.bframe{
  border:1.5px solid rgba(106,170,40,.35);border-radius:7px;
  box-shadow:0 0 0 1px rgba(0,0,0,.95),0 0 28px rgba(106,170,40,.15),inset 0 0 0 1px rgba(106,170,40,.05);
  overflow:hidden;position:relative;
}
/* board shake */
.bframe.shake{animation:boardShake .38s cubic-bezier(.36,.07,.19,.97);}
@keyframes boardShake{
  0%,100%{transform:translateX(0);}
  15%{transform:translateX(-5px) rotate(-.4deg);}
  30%{transform:translateX(5px) rotate(.4deg);}
  45%{transform:translateX(-4px) rotate(-.3deg);}
  60%{transform:translateX(4px) rotate(.3deg);}
  75%{transform:translateX(-2px);}
  90%{transform:translateX(2px);}
}
#board{background:#020601;position:relative;display:block;touch-action:none;}

/* Cells — visible grid */
.cell{
  position:absolute;display:flex;align-items:center;justify-content:center;cursor:pointer;
  box-sizing:border-box;
  border-right:1px solid rgba(106,170,40,.3);
  border-bottom:1px solid rgba(106,170,40,.3);
  transition:background .15s;
}
.cell.l{background:#101c07;}
.cell.d{background:#040a01;}
.cell[id$="-0"]{border-left:1px solid rgba(106,170,40,.3);}
.cell[id^="cell-0-"]{border-top:1px solid rgba(106,170,40,.3);}

/* Nid Sacré — mystical pulsing aura */
.cell.lab{
  background:radial-gradient(circle,#0a1a06,#020802)!important;
  box-shadow:inset 0 0 18px rgba(80,160,80,.5),0 0 0 2px rgba(201,168,76,.4);
  animation:labAura 3s ease-in-out infinite;
}
@keyframes labAura{
  0%,100%{box-shadow:inset 0 0 18px rgba(80,160,80,.5),0 0 0 2px rgba(201,168,76,.35);}
  50%{box-shadow:inset 0 0 28px rgba(100,200,80,.7),0 0 0 3px rgba(201,168,76,.6),0 0 18px rgba(143,212,48,.2);}
}
.cell.lab::before{content:'';position:absolute;inset:3px;border:1.5px solid rgba(201,168,76,.55);border-radius:2px;animation:labRing 4s linear infinite;}
@keyframes labRing{0%{opacity:.4;}50%{opacity:1;}100%{opacity:.4;}}
.labsvg{width:58%;height:58%;opacity:.65;pointer-events:none;position:absolute;animation:labSvgGlow 3s ease-in-out infinite;}
@keyframes labSvgGlow{0%,100%{filter:none;}50%{filter:drop-shadow(0 0 4px rgba(201,168,76,.7));}}

/* Highlights */
.cell.sc{background:rgba(143,212,48,.32)!important;box-shadow:inset 0 0 16px rgba(143,212,48,.6);}
.cell.vm::after{content:'';position:absolute;width:32%;height:32%;border-radius:50%;background:rgba(143,212,48,.88);box-shadow:0 0 12px rgba(143,212,48,1);animation:dpulse 1s ease-in-out infinite;pointer-events:none;}
.cell.vk::after{content:'';position:absolute;inset:2px;border:2.5px solid rgba(255,80,80,1);border-radius:3px;animation:kpulse .8s ease-in-out infinite;pointer-events:none;box-shadow:inset 0 0 8px rgba(255,80,80,.35);}
.cell.vd::after{content:'';position:absolute;inset:2px;border:2.5px dashed rgba(80,210,255,1);border-radius:3px;animation:kpulse 1s ease-in-out infinite;pointer-events:none;}
.cell.vnecro::after{content:'';position:absolute;inset:2px;border:2.5px dashed rgba(200,100,255,1);border-radius:3px;animation:kpulse 1s ease-in-out infinite;pointer-events:none;}
.cell.vrep-o::after{content:'';position:absolute;inset:2px;border:2.5px solid rgba(255,80,80,1);border-radius:3px;animation:kpulse .8s ease-in-out infinite;pointer-events:none;}
.cell.vrep-d::after{content:'';position:absolute;inset:2px;border:2.5px solid rgba(255,160,0,1);border-radius:3px;animation:kpulse .8s ease-in-out infinite;pointer-events:none;}
.cell.vplace::after{content:'';position:absolute;width:30%;height:30%;border-radius:50%;background:rgba(100,200,255,.88);box-shadow:0 0 12px rgba(100,200,255,1);animation:dpulse 1s ease-in-out infinite;pointer-events:none;}
@keyframes dpulse{0%,100%{transform:scale(1);opacity:.75;}50%{transform:scale(1.4);opacity:1;}}
@keyframes kpulse{0%,100%{opacity:.5;}50%{opacity:1;}}

/* ── PIECES ── */
.piece{
  position:absolute;border-radius:50%;display:flex;align-items:center;justify-content:center;
  border:2.5px solid rgba(255,255,255,.28);cursor:pointer;z-index:5;
  transition:left var(--anim) cubic-bezier(.4,0,.2,1),top var(--anim) cubic-bezier(.4,0,.2,1),
             transform .2s cubic-bezier(.34,1.56,.64,1),box-shadow .2s,opacity .3s;
  transform-origin:center;will-change:transform,left,top;
  -webkit-transform:translateZ(0);
}
.piece.yellow{background:radial-gradient(circle at 35% 35%,#ffe870,#c49010);box-shadow:0 2px 14px rgba(220,170,0,.8);border-color:rgba(255,230,80,.6);}
.piece.green{background:radial-gradient(circle at 35% 35%,#70f090,#0e9030);box-shadow:0 2px 14px rgba(0,180,70,.8);border-color:rgba(80,240,110,.6);}
.piece.blue{background:radial-gradient(circle at 35% 35%,#70b0ff,#0840c0);box-shadow:0 2px 14px rgba(40,100,230,.8);border-color:rgba(80,160,255,.6);}
.piece.red{background:radial-gradient(circle at 35% 35%,#ff7070,#a01020);box-shadow:0 2px 14px rgba(220,30,30,.8);border-color:rgba(255,90,90,.6);}

/* Dead — clearly visible contrasted bone */
.piece.dead{
  background:radial-gradient(circle at 35% 35%,#c8c8b8,#686858)!important;
  box-shadow:0 0 0 2.5px rgba(210,210,185,.7),0 2px 10px rgba(0,0,0,.85)!important;
  border-color:rgba(210,210,180,.55)!important;
  opacity:1;cursor:default;z-index:3;
}
.piece.dead .psym{opacity:.75;filter:grayscale(1) brightness(1.9) contrast(1.2);}

/* Selected — glow halo + pulse */
.piece.selp{
  transform:scale(1.18)!important;
  z-index:10;
  animation:selPulse 1.4s ease-in-out infinite;
}
@keyframes selPulse{
  0%,100%{box-shadow:0 0 0 3px var(--gold),0 0 22px var(--gold);}
  50%{box-shadow:0 0 0 5px var(--gold-l),0 0 32px var(--gold-l);}
}
.piece.moving{z-index:20;transform:scale(1.2)!important;}

/* Capture flash overlay on piece */
.piece.flash-kill{animation:pieceFlash .3s ease forwards!important;}
@keyframes pieceFlash{0%{filter:brightness(3);opacity:1;}100%{filter:brightness(1);opacity:0;}}

.psym{width:100%;height:100%;line-height:1;pointer-events:none;display:flex;align-items:center;justify-content:center;font-size:calc(var(--cs)*.56);border-radius:50%;}

/* Piece info panel */
.pi{
  width:100%;max-width:460px;
  background:linear-gradient(135deg,#0f1e08,#0a1605);
  border-radius:var(--r-sm);padding:5px 11px;
  display:flex;align-items:center;gap:8px;
  border:1px solid rgba(106,170,40,.18);height:46px;flex-shrink:0;
  transition:border-color .25s,box-shadow .25s;
  overflow:hidden;
}
.pii{font-size:1.5rem;width:1.9rem;height:1.9rem;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;}
.pin{font-size:.9rem;font-weight:700;color:var(--gold-l);letter-spacing:.04em;}
.pid{font-size:.78rem;color:#d0b890;font-family:'Crimson Pro',serif;margin-top:2px;line-height:1.4;}

.pp{display:none!important;}

/* Log */
.log{
  width:100%;max-width:460px;
  background:linear-gradient(135deg,#0a1606,#060e03);
  border-radius:var(--r-sm);border:1px solid rgba(106,170,40,.1);
  padding:4px 10px;height:46px;flex-shrink:0;overflow-y:auto;
  -webkit-overflow-scrolling:touch;
}
.le{font-family:'Crimson Pro',serif;font-size:.85rem;color:#b09878;line-height:1.6;padding:1px 0;}
.le.imp{color:#b0f040;font-weight:700;}
.le.kil{color:#ff7070;font-weight:700;}

/* ── TOAST — dans l'espace noir latéral, jamais sur tban ni pi ── */
.toast{
  position:fixed;
  left:50%;transform:translateX(-50%);
  /* Dans la bande bwrap, au-dessus du board mais sous la topbar */
  top:calc(var(--safe-top) + 50px);
  background:rgba(4,10,2,.96);border:1px solid rgba(106,170,40,.5);border-radius:8px;
  padding:6px 14px;z-index:50;font-size:.74rem;color:var(--green-l);letter-spacing:.03em;
  box-shadow:0 2px 14px rgba(0,0,0,.7);animation:tin .2s ease;
  white-space:nowrap;pointer-events:none;max-width:78vw;text-align:center;
  opacity:.96;
}
@keyframes tin{from{opacity:0;transform:translateX(-50%) translateY(-4px);}to{opacity:1;transform:translateX(-50%) translateY(0);}}

/* ── AI THINKING ── */
.ait{
  position:fixed;bottom:calc(var(--safe-bot)+16px);right:12px;z-index:50;
  background:rgba(8,20,4,.92);border:1px solid var(--gold-dim);border-radius:var(--r-sm);
  padding:8px 14px;display:flex;align-items:center;gap:7px;
  font-size:.7rem;color:var(--gold-dim);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);
}
.td2{width:5px;height:5px;border-radius:50%;background:var(--gold-dim);animation:tblink 1.2s ease-in-out infinite;}
.td2:nth-child(2){animation-delay:.3s;}.td2:nth-child(3){animation-delay:.6s;}
@keyframes tblink{0%,100%{opacity:.2;}50%{opacity:1;}}

/* ══ CAPTURE FLASH OVERLAY ══ */
.cap-flash{
  position:fixed;inset:0;z-index:200;pointer-events:none;
  background:rgba(255,60,30,.18);
  animation:capFlash .25s ease forwards;
}
@keyframes capFlash{0%{opacity:1;}100%{opacity:0;}}

/* ══════════════════════════════════════════
   END SCREEN — premium victory
══════════════════════════════════════════ */
#end{justify-content:center;align-items:center;gap:18px;text-align:center;padding:calc(var(--safe-top)+16px) 20px calc(var(--safe-bot)+20px);}
.ecrown{font-size:5rem;animation:cb 1.2s ease infinite alternate;filter:drop-shadow(0 0 20px rgba(240,192,48,.7));}
@keyframes cb{from{transform:translateY(0) rotate(-5deg);}to{transform:translateY(-12px) rotate(5deg);}}
.etitle{font-family:'Cinzel Decorative',serif;font-size:2.2rem;}
.ewinner{font-size:.95rem;color:#c0b080;margin-top:3px;font-family:'Crimson Pro',serif;line-height:1.5;}
.end-stats{
  background:linear-gradient(145deg,var(--card),#0a1206);border:1px solid var(--gold-dim);
  border-radius:var(--r-lg);padding:16px 20px;width:100%;max-width:310px;
  display:flex;flex-direction:column;gap:10px;
  box-shadow:0 0 24px rgba(143,212,48,.1);
}
.end-stat-row{display:flex;justify-content:space-between;font-family:'Crimson Pro',serif;font-size:.85rem;color:#a09070;}
.end-stat-row b{color:var(--gold-l);font-size:.9rem;}

/* Victory particles canvas */
#victory-canvas{position:fixed;inset:0;pointer-events:none;z-index:150;}

/* ══════════════════════════════════════════
   SHARED BUTTONS
══════════════════════════════════════════ */
.btn-primary{
  background:linear-gradient(135deg,#2a5a00,#8fd430 42%,#5abf20 55%,#2a5a00);
  border:none;border-radius:var(--r-md);padding:0 48px;
  font-family:'Cinzel Decorative',serif;font-size:.98rem;font-weight:700;
  color:#0a1a00;letter-spacing:.12em;cursor:pointer;
  box-shadow:0 4px 24px rgba(143,212,48,.4),0 1px 0 rgba(255,255,255,.1) inset;
  transition:all .18s;width:100%;max-width:320px;height:52px;
  display:flex;align-items:center;justify-content:center;gap:8px;
}
.btn-primary:active{transform:scale(.96);box-shadow:0 2px 10px rgba(143,212,48,.25);}
.btn-secondary{
  background:transparent;border:1px solid var(--gold-dim);border-radius:var(--r-sm);
  padding:0 24px;color:var(--gold-dim);font-family:'Cinzel',serif;
  font-size:.7rem;letter-spacing:.14em;cursor:pointer;
  transition:all .18s;width:100%;max-width:320px;height:46px;
  display:flex;align-items:center;justify-content:center;
}
.btn-secondary:active{border-color:var(--gold);color:var(--gold);background:rgba(143,212,48,.06);}

/* ══════════════════════════════════════════
   PREMIUM SCREEN
══════════════════════════════════════════ */
#premium-screen{
  justify-content:center;align-items:center;gap:14px;text-align:center;
  background:linear-gradient(170deg,var(--bg),#0a1200);
  padding:calc(var(--safe-top)+16px) 20px calc(var(--safe-bot)+20px);overflow-y:auto;
}
.prem-crown{font-size:3.2rem;animation:pglow 2s ease-in-out infinite;}
@keyframes pglow{0%,100%{filter:none;}50%{filter:drop-shadow(0 0 14px rgba(240,192,48,.8));}}
.prem-title{
  font-family:'Cinzel Decorative',serif;font-size:clamp(1.5rem,6.5vw,2.2rem);font-weight:900;
  background:linear-gradient(135deg,#c9a030,#ffe060 50%,#c9a030);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;
  filter:drop-shadow(0 0 14px rgba(200,160,30,.5));
}
.prem-sub{font-family:'Crimson Pro',serif;font-size:.9rem;color:#b09050;line-height:1.6;max-width:300px;}
.prem-features{background:rgba(20,15,5,.5);border:1px solid #5a3e0e;border-radius:var(--r-lg);padding:14px;width:100%;max-width:320px;display:flex;flex-direction:column;gap:8px;}
.prem-feat{display:flex;align-items:center;gap:10px;font-family:'Crimson Pro',serif;font-size:.82rem;color:#d0b880;line-height:1.4;}
.prem-feat .fi{font-size:1rem;}
.prem-btn{
  background:linear-gradient(135deg,#7a5000,#c9a030 45%,#e8c040 55%,#7a5000);
  border:none;border-radius:var(--r-md);padding:0 40px;
  font-family:'Cinzel Decorative',serif;font-size:.95rem;font-weight:700;
  color:#1a0e00;letter-spacing:.1em;cursor:pointer;
  box-shadow:0 4px 24px rgba(200,160,30,.4);
  transition:all .18s;width:100%;max-width:320px;height:52px;
  display:flex;align-items:center;justify-content:center;
}
.prem-btn:active{transform:scale(.96);}
.prem-trial-note{font-family:'Crimson Pro',serif;font-size:.72rem;color:#6a5020;font-style:italic;}

/* ══════════════════════════════════════════
   STATS SCREEN
══════════════════════════════════════════ */
#stats-screen{padding:calc(var(--safe-top)+8px) 16px calc(var(--safe-bot)+16px);gap:10px;overflow-y:auto;-webkit-overflow-scrolling:touch;}
.screen-header{display:flex;align-items:center;gap:12px;width:100%;max-width:360px;margin-bottom:4px;flex-shrink:0;}
.screen-back{background:transparent;border:1px solid var(--gold-dim);border-radius:7px;padding:7px 13px;color:var(--gold-dim);font-family:'Cinzel',serif;font-size:.68rem;cursor:pointer;min-height:36px;transition:all .15s;}
.screen-back:active{border-color:var(--gold);color:var(--gold);}
.screen-title{font-family:'Cinzel',serif;font-size:1rem;font-weight:700;color:var(--gold);letter-spacing:.15em;flex:1;text-align:center;}
.stat-card{background:var(--card);border:1px solid var(--gold-dim);border-radius:var(--r-lg);padding:15px 17px;width:100%;max-width:360px;}
.stat-card h3{font-size:.66rem;letter-spacing:.2em;color:var(--gold-d);text-transform:uppercase;margin-bottom:12px;}
.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.stat-item{display:flex;flex-direction:column;gap:2px;}
.stat-item .sval{font-family:'Cinzel Decorative',serif;font-size:1.8rem;color:var(--gold-l);line-height:1;}
.stat-item .slabel{font-family:'Crimson Pro',serif;font-size:.78rem;color:#9aaa70;}

/* ══════════════════════════════════════════
   SETTINGS SCREEN
══════════════════════════════════════════ */
#settings-screen{padding:calc(var(--safe-top)+8px) 16px calc(var(--safe-bot)+16px);gap:8px;overflow-y:auto;-webkit-overflow-scrolling:touch;}
.setting-row{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--card);border:1px solid #1a1a08;border-radius:var(--r-md);width:100%;max-width:360px;}
.setting-label{font-size:.8rem;color:#d8c890;font-weight:600;}
.setting-desc{font-family:'Crimson Pro',serif;font-size:.68rem;color:#6a6040;margin-top:2px;}
.toggle{position:relative;width:44px;height:24px;flex-shrink:0;}
.toggle input{opacity:0;width:0;height:0;}
.toggle-track{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background:#1a1a08;border:1px solid var(--gold-dim);border-radius:24px;transition:.3s;}
.toggle-track::before{content:'';position:absolute;height:18px;width:18px;left:2px;bottom:2px;background:var(--gold-dim);border-radius:50%;transition:.3s;}
.toggle input:checked+.toggle-track{background:rgba(143,212,48,.2);border-color:var(--gold);}
.toggle input:checked+.toggle-track::before{transform:translateX(20px);background:var(--gold);}
.credits-box{background:var(--card);border:1px solid #1a1a08;border-radius:var(--r-md);padding:14px 17px;width:100%;max-width:360px;font-family:'Crimson Pro',serif;font-size:.78rem;color:#6a7050;line-height:1.7;text-align:center;}
.credits-box .cv{color:var(--gold-d);}
.privacy-text{font-family:'Crimson Pro',serif;font-size:.68rem;color:#4a5030;text-align:center;line-height:1.5;padding:0 8px;width:100%;max-width:360px;}

/* ══════════════════════════════════════════
   MODAL RÈGLES
══════════════════════════════════════════ */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.87);z-index:400;display:flex;align-items:flex-end;justify-content:center;padding:0 0 var(--safe-bot);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);transition:opacity .3s;}
.modal-overlay.hidden{opacity:0;pointer-events:none;}
.modal-overlay.hidden .modal-box{transform:translateY(32px);}
.modal-box{background:linear-gradient(170deg,#0d1808,#060c03);border:1px solid var(--gold-dim);border-radius:18px 18px 0 0;width:100%;max-width:480px;max-height:88vh;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 -10px 50px rgba(0,0,0,.65);transition:transform .3s cubic-bezier(.2,0,.3,1);}
.modal-header{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--gold-dim);flex-shrink:0;}
.modal-title{font-family:'Cinzel',serif;font-size:.85rem;font-weight:700;letter-spacing:.2em;color:var(--gold);}
.modal-close{background:transparent;border:1px solid var(--gold-dim);border-radius:7px;color:var(--gold-dim);font-size:.9rem;width:32px;height:32px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;}
.modal-close:active{border-color:var(--gold);color:var(--gold);}
.modal-body{overflow-y:auto;padding:15px 18px 24px;display:flex;flex-direction:column;gap:14px;-webkit-overflow-scrolling:touch;}
.rule-section{display:flex;flex-direction:column;gap:6px;}
.rule-stitle{font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.2em;color:var(--gold);text-transform:uppercase;border-bottom:1px solid rgba(143,212,48,.18);padding-bottom:4px;}
.rule-text{font-family:'Crimson Pro',serif;font-size:.84rem;color:#a09070;line-height:1.65;}
.rpiece{display:flex;gap:9px;align-items:flex-start;font-family:'Crimson Pro',serif;font-size:.82rem;color:#a09070;line-height:1.5;margin-bottom:5px;}
.rpsym{font-size:1.2rem;flex-shrink:0;margin-top:1px;width:1.5rem;text-align:center;}

/* ══════════════════════════════════════════
   TUTORIAL
══════════════════════════════════════════ */
.tuto-overlay{position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:500;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:calc(var(--safe-bot)+16px);pointer-events:none;}
.tuto-overlay.hidden{display:none;}
.tuto-spotlight{position:fixed;border:2.5px solid var(--gold-l);border-radius:50%;box-shadow:0 0 0 999px rgba(0,0,0,.62);pointer-events:none;z-index:501;animation:spotPulse 1.5s ease-in-out infinite;transition:all .4s cubic-bezier(.2,0,.3,1);}
@keyframes spotPulse{0%,100%{box-shadow:0 0 0 999px rgba(0,0,0,.62),0 0 0 3px rgba(196,240,80,.4);}50%{box-shadow:0 0 0 999px rgba(0,0,0,.62),0 0 0 7px rgba(196,240,80,.75);}}
.tuto-card{background:linear-gradient(135deg,#0d1808,#060c03);border:1px solid var(--gold);border-radius:var(--r-lg);padding:17px 19px;width:calc(100% - 28px);max-width:390px;pointer-events:all;z-index:502;box-shadow:0 -6px 30px rgba(0,0,0,.55);}
.tuto-step{font-size:.62rem;letter-spacing:.2em;color:var(--gold-d);text-transform:uppercase;margin-bottom:5px;}
.tuto-title{font-family:'Cinzel',serif;font-size:.92rem;font-weight:700;color:var(--gold-l);margin-bottom:8px;}
.tuto-text{font-family:'Crimson Pro',serif;font-size:.84rem;color:#a09070;line-height:1.6;margin-bottom:14px;}
.tuto-actions{display:flex;gap:8px;}
.tuto-btn{flex:1;padding:12px;border-radius:var(--r-sm);cursor:pointer;font-family:'Cinzel',serif;font-size:.7rem;letter-spacing:.1em;font-weight:600;transition:all .15s;}
.tuto-btn.primary{background:linear-gradient(135deg,#2a5a00,#8fd430);border:none;color:#0a1a00;}
.tuto-btn.secondary{background:transparent;border:1px solid var(--gold-dim);color:var(--gold-dim);}
.tuto-btn:active{transform:scale(.96);}
.tuto-progress{display:flex;gap:5px;justify-content:center;margin-bottom:12px;}
.tuto-dot{width:5px;height:5px;border-radius:50%;background:var(--gold-dim);transition:all .3s;}
.tuto-dot.active{background:var(--gold);transform:scale(1.35);}


/* ══ MENU — 3 zones épurées ══ */
.menu-config-center{display:flex;flex-direction:column;gap:6px;}

/* Zone modes : 2 grands boutons larges */
.mode-row{display:flex;flex-direction:row;gap:8px;}
.mbtn{
  flex:1;padding:12px 6px;border-radius:12px;
  border:1.5px solid rgba(58,96,16,.6);background:rgba(10,21,7,.8);
  color:var(--text-dim);cursor:pointer;font-family:'Cinzel',serif;
  display:flex;flex-direction:column;align-items:center;gap:4px;
  transition:all .2s;position:relative;
}
.mbtn .mi{font-size:1.4rem;line-height:1;}
.mbtn .mt{font-size:.95rem;font-weight:700;letter-spacing:.06em;color:var(--text);}
.mbtn .ms{font-size:.75rem;color:var(--text-dim);font-family:'Crimson Pro',serif;font-style:italic;}
.mbtn.sel{border-color:var(--green);color:var(--text);background:rgba(14,32,6,.95);
  box-shadow:0 0 0 1px rgba(106,170,40,.15),inset 0 1px 0 rgba(144,200,88,.1);}
.mbtn:active{transform:scale(.96);}
.plk{position:absolute;top:6px;right:8px;font-size:.62rem;color:var(--gold);}

/* Sélecteur colonie : rangée de cercles colorés */
.colony-row{display:flex;flex-direction:row;justify-content:center;gap:10px;padding:4px 0;}
.cbtn{
  width:52px;height:52px;border-radius:50%;
  border:2.5px solid rgba(58,96,16,.5);background:var(--panel);
  cursor:pointer;display:flex;flex-direction:column;align-items:center;
  justify-content:center;gap:1px;transition:all .2s;flex-shrink:0;
}
.cbtn .ci{font-size:1.3rem;line-height:1;}
.cbtn .cn{font-size:.62rem;letter-spacing:.08em;font-weight:700;color:var(--text-dim);}
.cbtn[data-c="yellow"]{border-color:rgba(200,160,0,.4);background:rgba(40,28,0,.6);}
.cbtn[data-c="green"]{border-color:rgba(0,140,40,.4);background:rgba(0,28,8,.6);}
.cbtn[data-c="blue"]{border-color:rgba(0,60,180,.4);background:rgba(0,8,40,.6);}
.cbtn[data-c="red"]{border-color:rgba(180,0,20,.4);background:rgba(40,0,4,.6);}
.cbtn[data-c="random-1"]{border-color:rgba(58,96,16,.4);}
.cbtn.sel{transform:scale(1.12);}
.cbtn[data-c="yellow"].sel{border-color:#ddb020;box-shadow:0 0 12px rgba(220,160,0,.4);}
.cbtn[data-c="green"].sel{border-color:#30c060;box-shadow:0 0 12px rgba(0,180,60,.4);}
.cbtn[data-c="blue"].sel{border-color:#4080e0;box-shadow:0 0 12px rgba(40,100,220,.4);}
.cbtn[data-c="red"].sel{border-color:#e03040;box-shadow:0 0 12px rgba(220,30,40,.4);}
.cbtn[data-c="random-1"].sel{border-color:var(--green);box-shadow:0 0 10px rgba(106,170,40,.3);}
.cbtn:active{transform:scale(.92);}

/* Niveau IA : rangée horizontale 3 boutons */
.ailgrid-v{display:flex;flex-direction:row;gap:8px;}
.ailbtn-v{
  flex:1;padding:10px 4px;border-radius:10px;
  border:1.5px solid rgba(58,96,16,.5);background:rgba(10,21,7,.8);
  color:var(--text-dim);cursor:pointer;font-family:'Cinzel',serif;
  display:flex;flex-direction:column;align-items:center;gap:3px;
  transition:all .18s;position:relative;
}
.ailbtn-v .alv{font-size:1.2rem;line-height:1;}
.ailbtn-v .aln{font-size:.86rem;letter-spacing:.05em;font-weight:700;color:var(--text);}
.ailbtn-v .ali{font-size:.7rem;color:var(--text-dim);font-family:'Crimson Pro',serif;font-style:italic;}
.ailbtn-v.sel{border-color:var(--green);background:rgba(14,32,6,.95);
  box-shadow:0 0 0 1px rgba(106,170,40,.15);}
.ailbtn-v .ai-lock{position:absolute;top:4px;right:5px;font-size:.55rem;color:var(--gold);}
.ailbtn-v:active{transform:scale(.94);}

/* Libellés de section */
.sec-label{
  font-family:'Cinzel',serif;font-size:.7rem;letter-spacing:.18em;
  color:var(--text-dim);text-transform:uppercase;text-align:center;
  padding:5px 0 3px;
}

/* ══ SCROLLBAR ══ */

::-webkit-scrollbar{width:3px;}
::-webkit-scrollbar-thumb{background:var(--gold-dim);border-radius:3px;}
::-webkit-scrollbar-track{background:transparent;}
</style>
</head>
<body>

<canvas id="ambient"></canvas>
<canvas id="fx-canvas"></canvas>
<canvas id="victory-canvas" style="display:none"></canvas>

<!-- ═══════════════════════ SPLASH ═══════════════════════ -->
<div id="splash" class="layer">
  <div class="splash-inner">
    <div class="splash-bug">🪲</div>
    <div class="splash-title">IN-SECT</div>
    <div class="splash-sub">Guerre des Colonies</div>
    <div class="splash-bar"><div class="splash-bar-fill"></div></div>
    <div class="splash-ver">v1.0.0 — MODE DEV — ACCÈS TOTAL</div>
  </div>
</div>

<!-- ═══════════════════════ MENU ═══════════════════════ -->
<div id="menu" class="layer hidden">
  <!-- ZONE 1 : Logo -->
  <div class="menu-top">
    <div class="menu-logo-block">
      <div class="menu-logo">IN-SECT</div>
      <div class="menu-sub">Guerre des Colonies</div>
    </div>
  </div>

  <!-- ZONE 2 : Preview central -->
  <div class="mode-preview" id="mode-preview" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:390px;">
  </div>

  <!-- ZONE 3 : Choix -->
  <div style="width:100%;max-width:390px;display:flex;flex-direction:column;gap:10px;flex-shrink:0;">

    <!-- Adversaires -->
    <div class="mode-row">
      <button class="mbtn sel" id="mbtn-1" onclick="selMode(1)">
        <span class="mt">1 IA</span>
        <span class="ms">Duel stratégique</span>
      </button>
      <button class="mbtn" id="mbtn-3" onclick="selMode(3)">
        <span class="mt">3 IA</span>
        <span class="ms">Guerre totale</span>
        <span class="plk" id="mode4lock">👑</span>
      </button>
    </div>

    <!-- Colonie 1 IA -->
    <div id="csel-1ia">
      <div class="sec-label">Colonie</div>
      <div class="colony-row">
        <button class="cbtn sel" data-c="yellow" onclick="selCol('yellow')"><span class="cn">Jaune</span></button>
        <button class="cbtn" data-c="red" onclick="selCol('red')"><span class="cn">Rouge</span></button>
        <button class="cbtn" data-c="random-1" onclick="selCol('random')"><span class="cn">Aléat.</span></button>
      </div>
    </div>

    <!-- Colonie 3 IA -->
    <div id="csel-3ia" style="display:none">
      <div class="sec-label">Colonie</div>
      <div class="colony-row">
        <button class="cbtn" data-c="yellow" onclick="selCol('yellow')"><span class="cn">Jaune</span></button>
        <button class="cbtn" data-c="green" onclick="selCol('green')"><span class="cn">Vert</span></button>
        <button class="cbtn" data-c="blue" onclick="selCol('blue')"><span class="cn">Bleu</span></button>
        <button class="cbtn" data-c="red" onclick="selCol('red')"><span class="cn">Rouge</span></button>
      </div>
    </div>

    <!-- Niveau IA -->
    <div>
      <div class="sec-label">Difficulté</div>
      <div class="ailgrid-v">
        <button class="ailbtn-v sel" id="ailbtn-1" onclick="selAILevel(1)"><span class="aln">Basique</span><span class="ali">Débutant</span></button>
        <button class="ailbtn-v" id="ailbtn-2" onclick="selAILevel(2)"><span class="aln">Tactique</span><span class="ali">Avancé</span></button>
        <button class="ailbtn-v" id="ailbtn-3" onclick="selAILevel(3)"><span class="aln">Expert</span><span class="ali">Maître</span><span class="ai-lock" id="ai3lock">👑</span></button>
      </div>
    </div>

    <!-- Jouer -->
    <div class="menu-play-zone" style="padding:0;">
      <button class="btn-play" onclick="tryStartGame()">JOUER</button>
      <div class="trial-badge" id="trial-badge">Essai : <b id="trial-count">?</b> parties gratuites restantes</div>
    </div>

  </div>

  <div class="bottom-nav">
    <button class="bnav-btn" onclick="showTutorial()"><span class="bni">📖</span></button>
    <button class="bnav-btn" onclick="showScreen('rules-modal')"><span class="bni">📜</span></button>
    <button class="bnav-btn" onclick="showScreen('stats-screen')"><span class="bni">📊</span></button>
    <button class="bnav-btn" onclick="showScreen('settings-screen')"><span class="bni">⚙️</span></button>
  </div>
</div>

<!-- ═══════════════════════ GAME ═══════════════════════ -->
<div id="game" class="layer hidden">
  <div class="tban" id="tban">
    <div class="tdot" id="tdot"></div>
    <div style="flex:1">
      <div class="ttxt" id="ttxt">Tour de…</div>
    </div>
    <div class="topbar-btns">
      <button class="btn-mini" onclick="showScreen('rules-modal')">📜</button>
      <button class="btn-mini" onclick="toggleMute()" id="mute-btn">🔊</button>
      <button class="btn-mini" onclick="confirmMenu()">⬅</button>
    </div>
  </div>
  <div class="bwrap">
    <div class="phase-msg" id="phase-msg"></div>
    <div class="bframe" id="bframe"><div id="board"></div></div>
  </div>
  <div class="pi" id="pi">
    <div class="pii">🐝</div>
    <div><div class="pin">Sélectionnez une pièce</div><div class="pid">Touchez l'un de vos insectes pour voir ses mouvements</div></div>
  </div>
  <div class="pp" id="pp" style="display:none"></div>
  <div class="log" id="log"><div class="le">La guerre des colonies commence…</div></div>
</div>

<!-- ═══════════════════════ END ═══════════════════════ -->
<div id="end" class="layer hidden">
  <div class="ecrown" id="ecrown">🏆</div>
  <div class="etitle" id="etitle"></div>
  <div id="esub" style="font-family:'Crimson Pro',serif;font-size:.88rem;color:rgba(255,160,160,.8);text-align:center;padding:4px 16px 0;font-style:italic;letter-spacing:.03em;min-height:1.2em;"></div>
  <div class="ewinner" id="ewinner"></div>
  <div class="end-stats">
    <div class="end-stat-row"><span>Tours joués</span><b id="end-turns">—</b></div>
    <div class="end-stat-row"><span>Pièces capturées</span><b id="end-caps">—</b></div>
    <div class="end-stat-row"><span>Total parties</span><b id="end-total">—</b></div>
    <div class="end-stat-row"><span>Taux de victoire</span><b id="end-winrate">—</b></div>
  </div>
  <button class="btn-primary" onclick="goMenu()">🐝 REJOUER</button>
  <button class="btn-secondary" onclick="showScreen('stats-screen')">📊 Voir mes statistiques</button>
</div>

<!-- ═══════════════════════ PREMIUM ═══════════════════════ -->
<div id="premium-screen" class="layer hidden">
  <div class="prem-crown">👑</div>
  <div class="prem-title">DÉBLOQUEZ<br>LA GUERRE COMPLÈTE</div>
  <div class="prem-sub">Vous maîtrisez désormais les colonies.<br>Il est temps d'étendre votre emprise.</div>
  <div class="prem-features">
    <div class="prem-feat"><span class="fi">♾️</span><div>Parties <b>illimitées</b> contre l'IA</div></div>
    <div class="prem-feat"><span class="fi">👾</span><div>Mode <b>4 Colonies</b> — guerre totale</div></div>
    <div class="prem-feat"><span class="fi">🐝</span><div>IA Niveau 3 — <b>Stratégique</b></div></div>
    <div class="prem-feat"><span class="fi">📊</span><div>Statistiques avancées & classements</div></div>
    <div class="prem-feat"><span class="fi">🌐</span><div>Fonctionnalités multijoueur <b>à venir</b></div></div>
  </div>
  <button class="prem-btn" onclick="purchasePremium()">🔓 DÉVERROUILLER — 2,99 €</button>
  <div class="prem-trial-note">Paiement unique — aucun abonnement</div>
  <div style="display:flex;gap:8px;width:100%;max-width:320px;margin-top:4px;">
    <button class="btn-secondary" style="flex:1;" onclick="goMenu()">← Retour</button>
    <button class="btn-secondary" style="flex:1;" onclick="startTutorialFromPremium()">📖 Tutoriel</button>
  </div>
</div>

<!-- ═══════════════════════ STATS ═══════════════════════ -->
<div id="stats-screen" class="layer hidden">
  <div class="screen-header">
    <button class="screen-back" onclick="goMenu()">← MENU</button>
    <div class="screen-title">STATISTIQUES</div>
  </div>
  <div class="stat-card">
    <h3>🎮 Historique de jeu</h3>
    <div class="stat-grid">
      <div class="stat-item"><div class="sval" id="st-total">0</div><div class="slabel">Parties jouées</div></div>
      <div class="stat-item"><div class="sval" id="st-wins">0</div><div class="slabel">Victoires</div></div>
      <div class="stat-item"><div class="sval" id="st-winrate">0%</div><div class="slabel">Taux de victoire</div></div>
      <div class="stat-item"><div class="sval" id="st-streak">0</div><div class="slabel">Meilleure série</div></div>
    </div>
  </div>
  <div class="stat-card">
    <h3>🐝 Colonies favorites</h3>
    <div class="stat-grid">
      <div class="stat-item"><div class="sval" id="st-fav">—</div><div class="slabel">Colonie favorite</div></div>
      <div class="stat-item"><div class="sval" id="st-ai">—</div><div class="slabel">Niveau IA habituel</div></div>
      <div class="stat-item"><div class="sval" id="st-captures">0</div><div class="slabel">Captures totales</div></div>
      <div class="stat-item"><div class="sval" id="st-turns">0</div><div class="slabel">Tours joués</div></div>
    </div>
  </div>
  <button class="btn-secondary" style="max-width:360px;" onclick="resetStats()">🗑️ Réinitialiser les stats</button>
</div>

<!-- ═══════════════════════ SETTINGS ═══════════════════════ -->
<div id="settings-screen" class="layer hidden">
  <div class="screen-header">
    <button class="screen-back" onclick="goMenu()">← MENU</button>
    <div class="screen-title">OPTIONS</div>
  </div>
  <div class="setting-row">
    <div><div class="setting-label">🔊 Sons</div><div class="setting-desc">Effets sonores et musique d'ambiance</div></div>
    <label class="toggle"><input type="checkbox" id="set-sound" onchange="saveSetting('sound',this.checked)" checked><span class="toggle-track"></span></label>
  </div>
  <div class="setting-row">
    <div><div class="setting-label">📳 Vibrations</div><div class="setting-desc">Retour haptique lors des captures</div></div>
    <label class="toggle"><input type="checkbox" id="set-vibro" onchange="saveSetting('vibro',this.checked)" checked><span class="toggle-track"></span></label>
  </div>
  <div class="setting-row">
    <div><div class="setting-label">✨ Particules</div><div class="setting-desc">Effets visuels ambiants (performances)</div></div>
    <label class="toggle"><input type="checkbox" id="set-particles" onchange="saveSetting('particles',this.checked)" checked><span class="toggle-track"></span></label>
  </div>
  <div class="credits-box">
    <div class="cv">IN-SECT — Guerre des Colonies</div>
    Version 1.0.0 · Édition Premium<br>© 2025 — Tous droits réservés<br><br>
    <span style="font-size:.62rem;color:#3a4025;">Moteur de jeu & IA : 100% JavaScript vanilla<br>Prêt pour Capacitor Android / iOS</span>
  </div>
  <div class="privacy-text">Ce jeu ne collecte aucune donnée personnelle. Les statistiques sont stockées localement.</div>
  <button class="btn-secondary" style="max-width:360px;margin-top:4px;" onclick="showScreen('premium-screen')">👑 Débloquer Premium</button>
</div>

<!-- MODAL RÈGLES -->
<div id="rules-modal" class="modal-overlay hidden" onclick="if(event.target===this)hideModal()">
  <div class="modal-box">
    <div class="modal-header">
      <span class="modal-title">🐝 RÈGLES DU JEU</span>
      <button class="modal-close" onclick="hideModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="rule-section"><div class="rule-stitle">🎯 OBJECTIF</div><div class="rule-text">Éliminez les Reines adverses pour convertir leurs colonies à votre cause.<br>Le dernier joueur possédant une Reine vivante remporte la partie.<br>Plateau 9×9 · 4 colonies · 9 pièces par coin.</div></div>
      <div class="rule-section"><div class="rule-stitle">🚶 DÉPLACEMENTS</div><div class="rule-text">Toutes les pièces sauf les Fourmis soldates se déplacent comme la Dame aux échecs : dans les 8 directions, sans limite de distance.<br>Les Fourmis soldates se déplacent dans les 8 directions sur 2 cases maximum.<br>Aucune pièce ne peut traverser une pièce vivante ou un cadavre.</div></div>
      <div class="rule-section">
        <div class="rule-stitle">♟️ LES 6 PIÈCES</div>
        <div class="rpiece"><span class="rpsym">🐝</span><div><b>Reine des guêpes</b> — Capture une pièce ennemie et choisit où placer le cadavre. Peut entrer sur le Nid sacré. Si elle meurt, toute sa colonie est convertie.</div></div>
        <div class="rpiece"><span class="rpsym">🕷️</span><div><b>Araignée tueuse</b> — Capture une pièce ennemie. Le cadavre est placé sur la case de départ de l'Araignée.</div></div>
        <div class="rpiece"><span class="rpsym">🪰</span><div><b>Mouche journaliste</b> — Se déplace sur cases vides puis déclenche une nuée. Cible ortho → élimine les ennemis adjacents orthogonalement. Cible diag → diagonalement.</div></div>
        <div class="rpiece"><span class="rpsym">🪲</span><div><b>Scarabée fossoyeur</b> — Se déplace vers une case vide ou transporte un cadavre vers une case libre.</div></div>
        <div class="rpiece"><span class="rpsym">🐞</span><div><b>Coccinelle manipulatrice</b> — Déplace une pièce ennemie vivante vers n'importe quelle case libre.</div></div>
        <div class="rpiece"><span class="rpsym">🐜</span><div><b>Fourmis soldates (×4)</b> — Déplacement limité à 2 cases. Capturent et choisissent où placer le cadavre. Ne peuvent pas éliminer une Reine sur le Nid sacré.</div></div>
      </div>
      <div class="rule-section"><div class="rule-stitle">🏰 NID SACRÉ (case centrale)</div><div class="rule-text">Seule la Reine peut entrer sur cette case. Aucun cadavre ne peut y être placé.<br><br><b>Mode 2 joueurs :</b> la Reine sur le Nid permet à son équipe de jouer deux fois par tour adverse.<br><br><b>Mode 4 joueurs :</b> la Reine rejoue après chaque tour adverse.<br><br>La Reine sur le Nid est immunisée contre les Fourmis soldates.</div></div>
      <div class="rule-section"><div class="rule-stitle">💀 CADAVRES & CONVERSION</div><div class="rule-text">Les pièces éliminées deviennent des cadavres et restent comme obstacles permanents.<br>Seul le Scarabée peut déplacer un cadavre.<br><br>Quand une Reine meurt, toutes ses pièces vivantes changent de couleur et rejoignent le camp du tueur.</div></div>
      <div class="rule-section"><div class="rule-stitle">🔒 ENCERCLEMENT</div><div class="rule-text">Si une Reine ne peut plus se déplacer et qu'aucun Scarabée allié ne peut libérer un passage, sa colonie est immédiatement éliminée.</div></div>
    </div>
  </div>
</div>

<!-- TUTORIEL -->
<div id="tuto-overlay" class="tuto-overlay hidden">
  <div id="tuto-spotlight" class="tuto-spotlight" style="display:none;"></div>
  <div class="tuto-card">
    <div class="tuto-step" id="tuto-step">ÉTAPE 1 / 5</div>
    <div class="tuto-progress" id="tuto-progress"></div>
    <div class="tuto-title" id="tuto-title">Bienvenue dans IN-SECT</div>
    <div class="tuto-text" id="tuto-text">Apprenez les bases en 60 secondes.</div>
    <div class="tuto-actions">
      <button class="tuto-btn secondary" onclick="skipTutorial()">PASSER</button>
      <button class="tuto-btn primary" id="tuto-next" onclick="nextTutoStep()">SUIVANT →</button>
    </div>
  </div>
</div>

<script>
// ════════════════════════════════════════════
// CONFIG
// ════════════════════════════════════════════
const CONFIG={FREE_MATCH_LIMIT:15,PREMIUM_PRICE:'2.99',VERSION:'1.0.0',AI_THINK_MIN:320,AI_THINK_MAX:680};

// ════════════════════════════════════════════
// PERSISTANCE
// ════════════════════════════════════════════
const SAVE_KEY='insect_save_v2';
function loadSave(){try{const r=localStorage.getItem(SAVE_KEY);if(!r)return defaultSave();return{...defaultSave(),...JSON.parse(r)};}catch(e){return defaultSave();}}
function defaultSave(){return{gamesPlayed:0,wins:0,losses:0,bestStreak:0,currentStreak:0,totalCaptures:0,totalTurns:0,tutorialDone:false,premium:true,sound:true,vibro:true,particles:true,lastColor:'yellow',lastAILevel:1,colonyStats:{yellow:0,green:0,blue:0,red:0}};}
function persistSave(){try{localStorage.setItem(SAVE_KEY,JSON.stringify(SAVE));}catch(e){}}
let SAVE=loadSave();

// ════════════════════════════════════════════
// AUDIO SYSTEM — iOS SAFE VERSION
// ════════════════════════════════════════════
let _audioCtx=null,_muted=false,_audioUnlocked=false;

function initAudio(){}

function unlockAudioContext(){
  if(_audioUnlocked)return;
  try{
    if(!_audioCtx){
      const AC=window.AudioContext||window.webkitAudioContext;
      if(AC)_audioCtx=new AC();
    }
    if(_audioCtx&&_audioCtx.state==='suspended'){
      _audioCtx.resume().then(function(){_audioUnlocked=true;}).catch(function(){});
    }else{
      _audioUnlocked=true;
    }
    if(_audioCtx){
      var buf=_audioCtx.createBuffer(1,1,22050);
      var src=_audioCtx.createBufferSource();
      src.buffer=buf;src.connect(_audioCtx.destination);
      if(src.start)src.start(0);else if(src.noteOn)src.noteOn(0);
    }
  }catch(e){}
}

function setupAudioUnlock(){
  var evs=['touchstart','touchend','mousedown','click','keydown'];
  function once(){
    unlockAudioContext();
    for(var i=0;i<evs.length;i++)document.removeEventListener(evs[i],once,true);
  }
  for(var i=0;i<evs.length;i++)document.addEventListener(evs[i],once,true);
}

function getAudioCtx(){
  if(!_audioCtx){
    const AC=window.AudioContext||window.webkitAudioContext;
    if(AC)_audioCtx=new AC();
  }
  if(_audioCtx&&_audioCtx.state==='suspended')_audioCtx.resume().catch(function(){});
  return _audioCtx;
}

function tone(freq,type,dur,vol,attack){
  if(_muted||!SAVE.sound||!_audioUnlocked)return;
  try{
    const ctx=getAudioCtx();if(!ctx)return;
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type=type||'sine';o.frequency.setValueAtTime(freq,ctx.currentTime);
    const a=attack||0.01;
    g.gain.setValueAtTime(0,ctx.currentTime);
    g.gain.linearRampToValueAtTime(vol||0.18,ctx.currentTime+a);
    g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);
    o.start(ctx.currentTime);o.stop(ctx.currentTime+dur+0.06);
  }catch(e){}
}
// Selection — soft organic click
function sfxSelect(){
  tone(520,'sine',.07,.12,.005);
  setTimeout(function(){tone(680,'sine',.05,.07,.005);},40);
}
// Move — smooth whoosh
function sfxMove(){
  tone(260,'sine',.1,.14,.008);
  setTimeout(function(){tone(340,'triangle',.09,.08,.005);},55);
}
// Capture — heavy impact
function sfxCapture(){
  tone(160,'sawtooth',.06,.22,.01);
  setTimeout(function(){tone(120,'square',.12,.18,.01);},50);
  setTimeout(function(){tone(80,'sawtooth',.18,.12,.02);},100);
  vibrateDevice([15,30,50]);
}
// Queen kill — dramatic
function sfxQueenKill(){
  var notes=[200,160,120,80];
  for(var i=0;i<notes.length;i++){(function(f,ii){setTimeout(function(){tone(f,'sawtooth',.25,.2,.02);},ii*90);})(notes[i],i);}
  setTimeout(function(){tone(55,'square',.4,.15,.03);},300);
  vibrateDevice([30,40,80,40,100]);
}
// Nid sacré entry
function sfxNid(){
  tone(440,'sine',.15,.14,.02);
  setTimeout(function(){tone(554,'sine',.12,.1,.02);},100);
  setTimeout(function(){tone(660,'sine',.2,.12,.02);},200);
  vibrateDevice([10,20,10]);
}
// Victory fanfare
function sfxVictory(){
  var ns=[523,659,784,880,1047];
  for(var i=0;i<ns.length;i++){(function(f,ii){setTimeout(function(){tone(f,'sine',.45,.2,.02);},ii*120);})(ns[i],i);}
  vibrateDevice([10,20,10,20,10,60]);
}
// Defeat
function sfxDefeat(){
  var ns=[330,280,220,180,140];
  for(var i=0;i<ns.length;i++){(function(f,ii){setTimeout(function(){tone(f,'sawtooth',.35,.16,.02);},ii*150);})(ns[i],i);}
  vibrateDevice([40,60,100]);
}
// UI click
function sfxUI(){tone(600,'sine',.07,.08,.005);}

function toggleMute(){
  _muted=!_muted;SAVE.sound=!_muted;
  const btn=document.getElementById('mute-btn');if(btn)btn.textContent=_muted?'🔇':'🔊';
  persistSave();
}

// ════════════════════════════════════════════
// VIBRATION SYSTEM
// ════════════════════════════════════════════
function vibrateDevice(pattern){
  if(!SAVE.vibro)return;
  try{if(navigator.vibrate)navigator.vibrate(pattern);}catch(e){}
}

// ════════════════════════════════════════════
// PARTICLES — ambient background (iOS SAFE)
// ════════════════════════════════════════════
(function initParticles(){
  const canvas=document.getElementById('ambient');
  const ctx=canvas.getContext('2d');
  let W,H,particles=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);
  for(let i=0;i<28;i++)particles.push(mkP(true));
  function mkP(rand){return{x:Math.random()*(W||400),y:rand?Math.random()*(H||800):(H||800)+10,r:Math.random()*1.8+.4,speed:Math.random()*.28+.08,op:Math.random()*.32+.07,drift:(Math.random()-.5)*.15,life:0,maxLife:Math.random()*300+180};}
  let lf=0;
  let running=false;
  function draw(ts){
    if(!running)return;
    requestAnimationFrame(draw);
    if(!SAVE.particles){ctx.clearRect(0,0,W,H);return;}
    if(ts-lf<34)return;lf=ts;
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<particles.length;i++){
      const p=particles[i];p.x+=p.drift;p.y-=p.speed;p.life++;
      if(p.y<-10||p.life>p.maxLife){particles[i]=mkP(false);continue;}
      const a=p.op*Math.sin((p.life/p.maxLife)*Math.PI);
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(143,212,48,'+a.toFixed(2)+')';ctx.fill();
    }
  }
  function startParticles(){
    if(running)return;
    running=true;
    requestAnimationFrame(draw);
  }
  if(/iP(ad|hone|od)/i.test(navigator.userAgent)){
    document.addEventListener('touchstart',function startOnce(){
      startParticles();
      document.removeEventListener('touchstart',startOnce,true);
    },true);
    setTimeout(startParticles,3000);
  }else{
    startParticles();
  }
})();

// ════════════════════════════════════════════
// FX SYSTEM — capture particles on board
// ════════════════════════════════════════════
const FX={
  canvas:null,ctx:null,particles:[],
  init(){
    this.canvas=document.getElementById('fx-canvas');
    this.canvas.width=window.innerWidth;this.canvas.height=window.innerHeight;
    window.addEventListener('resize',()=>{this.canvas.width=window.innerWidth;this.canvas.height=window.innerHeight;});
    this.loop();
  },
  spawnCapture(x,y,color){
    const cols={yellow:'#f0c030',green:'#40e070',blue:'#60a0ff',red:'#ff5050'};
    const c=cols[color]||'#c4f050';
    for(let i=0;i<18;i++){
      const angle=Math.random()*Math.PI*2,speed=Math.random()*4+2;
      this.particles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,r:Math.random()*3+1.5,life:1,decay:Math.random()*.04+.025,color:c});
    }
  },
  spawnNid(x,y){
    for(let i=0;i<12;i++){
      const angle=(i/12)*Math.PI*2,speed=Math.random()*2+1;
      this.particles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,r:Math.random()*2+1,life:1,decay:Math.random()*.03+.02,color:'#c9a84c'});
    }
  },
  loop(){
    requestAnimationFrame(()=>this.loop());
    const ctx=this.ctx||this.canvas.getContext('2d');this.ctx=ctx;
    ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    for(let i=this.particles.length-1;i>=0;i--){
      const p=this.particles[i];
      p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.life-=p.decay;p.vx*=.92;
      if(p.life<=0){this.particles.splice(i,1);continue;}
      ctx.globalAlpha=p.life;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.color;ctx.fill();
    }
    ctx.globalAlpha=1;
  }
};

// ════════════════════════════════════════════
// VICTORY PARTICLES
// ════════════════════════════════════════════
function launchVictoryParticles(){
  const canvas=document.getElementById('victory-canvas');
  canvas.style.display='block';
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  const ctx=canvas.getContext('2d');
  const colors=['#8fd430','#c4f050','#f0c030','#ffea70','#60f080'];
  const pts=[];
  for(let i=0;i<80;i++){
    pts.push({x:Math.random()*canvas.width,y:canvas.height+10,vx:(Math.random()-.5)*4,vy:-(Math.random()*10+8),r:Math.random()*4+2,c:colors[Math.floor(Math.random()*colors.length)],life:1,decay:.008+Math.random()*.01,rot:Math.random()*Math.PI*2,rotV:(Math.random()-.5)*.2});
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let alive=false;
    for(const p of pts){
      p.x+=p.vx;p.y+=p.vy;p.vy+=.25;p.life-=p.decay;p.rot+=p.rotV;
      if(p.life<=0)continue;alive=true;
      ctx.save();ctx.globalAlpha=p.life;ctx.translate(p.x,p.y);ctx.rotate(p.rot);
      ctx.fillStyle=p.c;ctx.fillRect(-p.r,-p.r,p.r*2,p.r*2);ctx.restore();
    }
    if(alive)requestAnimationFrame(draw);else canvas.style.display='none';
  }
  draw();
}

// ════════════════════════════════════════════
// MOBILE GAME FEEL
// ════════════════════════════════════════════
function boardShake(){
  const f=document.getElementById('bframe');if(!f)return;
  f.classList.add('shake');setTimeout(()=>f.classList.remove('shake'),400);
}
function screenFlash(type){
  const d=document.createElement('div');d.className='cap-flash';
  if(type==='queen')d.style.background='rgba(255,20,20,.28)';
  document.body.appendChild(d);setTimeout(()=>d.remove(),300);
}
function pieceAppear(el){
  if(!el)return;
  el.style.transform='scale(0)';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.transition='transform .35s cubic-bezier(.34,1.56,.64,1)';el.style.transform='scale(1)';}));
}

// ════════════════════════════════════════════
// PREMIUM
// ════════════════════════════════════════════
window.unlockPremium=function(){SAVE.premium=true;persistSave();toast('👑 Premium déverrouillé ! Merci pour votre soutien.');updatePremiumUI();};
function purchasePremium(){
  if(window.Capacitor&&window.Capacitor.isNative){}
  else{if(confirm('Simulation achat : Débloquer le premium gratuitement pour tester ?')){window.unlockPremium();showScreen('menu');}}
}
function updatePremiumUI(){
  const locked=!SAVE.premium;
  const m4=document.getElementById('mode4lock'),a3=document.getElementById('ai3lock');
  if(m4)m4.style.display=locked?'':'none';
  if(a3)a3.style.display=locked?'':'none';
}
function canPlayFree(){return true;}
function tryStartGame(){
  if(_mode===3&&!SAVE.premium){showScreen('premium-screen');return;}
  if(_aiLevel===3&&!SAVE.premium){showScreen('premium-screen');return;}
  if(!canPlayFree()){showScreen('premium-screen');return;}
  startGame();
}
function startTutorialFromPremium(){hideScreen('premium-screen');showTutorial();}
function updateTrialBadge(){
  const rem=Math.max(0,CONFIG.FREE_MATCH_LIMIT-SAVE.gamesPlayed);
  const badge=document.getElementById('trial-badge'),count=document.getElementById('trial-count');
  if(!badge||!count)return;
  if(SAVE.premium){badge.innerHTML='👑 Accès <b>Premium</b> déverrouillé — Parties illimitées !';badge.className='trial-badge premium-ok';}
  else{count.textContent=rem;badge.className='trial-badge'+(rem<=5?' warn':'');}
}

// ════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════
const SCREENS=['splash','menu','game','end','premium-screen','stats-screen','settings-screen'];
let _currentModal=null;
function showScreen(id){
  sfxUI();
  if(id==='rules-modal'){document.getElementById('rules-modal').classList.remove('hidden');_currentModal='rules-modal';return;}
  SCREENS.forEach(sid=>{const el=document.getElementById(sid);if(!el)return;el.classList.toggle('hidden',sid!==id);});
}
function hideModal(){if(_currentModal){document.getElementById(_currentModal).classList.add('hidden');_currentModal=null;}}
function hideScreen(id){const el=document.getElementById(id);if(el)el.classList.add('hidden');}

// ════════════════════════════════════════════
// TUTORIAL
// ════════════════════════════════════════════
const TUTO_STEPS=[
  {title:'🐝 Bienvenue dans IN-SECT',text:'Un jeu de stratégie fantasy — la guerre des colonies d\'insectes. Chaque joueur commande une colonie depuis son coin du plateau 9×9.',spotlight:null},
  {title:'♟️ Sélectionner une pièce',text:'Touchez l\'une de vos pièces pour la sélectionner. Les cases en vert indiquent ses déplacements possibles. Les cases en rouge indiquent ses cibles de capture.',spotlight:'piece'},
  {title:'🚶 Se déplacer',text:'Touchez une case verte surlignée pour déplacer la pièce. La plupart des pièces se déplacent comme la Dame aux échecs — dans les 8 directions, sans limite.',spotlight:null},
  {title:'💀 Capturer & Cadavres',text:'Touchez une case rouge pour capturer une pièce ennemie. Elle devient un cadavre — un obstacle permanent sur le plateau que seul le Scarabée peut déplacer.',spotlight:null},
  {title:'🏰 Le Nid Sacré',text:'La case centrale est le Nid Sacré. Seule votre Reine (🐝) peut y entrer. Depuis le Nid, votre Reine rejoue après chaque tour adverse. Objectif : éliminer toutes les Reines ennemies !',spotlight:'nid'},
];
let _tutoStep=0;
function showTutorial(){
  if(SAVE.tutorialDone){if(!confirm('Recommencer le tutoriel ?'))return;}
  _tutoStep=0;renderTutoStep();
  document.getElementById('tuto-overlay').classList.remove('hidden');
  hideScreen('menu');showScreen('game');
  _selColor='yellow';_mode=1;_aiLevel=1;startGame(true);
}
function renderTutoStep(){
  const step=TUTO_STEPS[_tutoStep];if(!step){endTutorial();return;}
  document.getElementById('tuto-step').textContent=`ÉTAPE ${_tutoStep+1} / ${TUTO_STEPS.length}`;
  document.getElementById('tuto-title').textContent=step.title;
  document.getElementById('tuto-text').textContent=step.text;
  document.getElementById('tuto-next').textContent=_tutoStep===TUTO_STEPS.length-1?'✓ COMMENCER':'SUIVANT →';
  const prog=document.getElementById('tuto-progress');
  prog.innerHTML=TUTO_STEPS.map((_,i)=>`<div class="tuto-dot ${i===_tutoStep?'active':''}"></div>`).join('');
  const spot=document.getElementById('tuto-spotlight');
  if(step.spotlight==='nid'){
    const boardEl=document.getElementById('board'),nidCell=document.getElementById('cell-4-4');
    if(nidCell&&boardEl){
      const br=boardEl.getBoundingClientRect(),cs=getCellSize();
      const cx=br.left+4*cs+cs/2,cy=br.top+4*cs+cs/2,r=cs*.7;
      spot.style.cssText=`left:${cx-r}px;top:${cy-r}px;width:${r*2}px;height:${r*2}px;display:block;`;
    }else{spot.style.display='none';}
  }else{spot.style.display='none';}
}
function nextTutoStep(){sfxUI();_tutoStep++;if(_tutoStep>=TUTO_STEPS.length){endTutorial();return;}renderTutoStep();}
function skipTutorial(){endTutorial();}
function endTutorial(){
  SAVE.tutorialDone=true;persistSave();
  document.getElementById('tuto-overlay').classList.add('hidden');
  const spot=document.getElementById('tuto-spotlight');if(spot)spot.style.display='none';
  showScreen('menu');document.getElementById('game').classList.add('hidden');
  showAIT(false);_animating=false;
  toast('📖 Tutoriel terminé ! Bonne chance dans la guerre des colonies.');
}

// ════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════
function initApp(){
  setupAudioUnlock();
  FX.init();
  const s=document.getElementById('set-sound'),v=document.getElementById('set-vibro'),p=document.getElementById('set-particles');
  if(s)s.checked=SAVE.sound!==false;if(v)v.checked=SAVE.vibro!==false;if(p)p.checked=SAVE.particles!==false;
  _muted=!SAVE.sound;
  updatePremiumUI();updateStatsUI();updateQuickStats();updateTrialBadge();
  selMode(1);selCol(SAVE.lastColor||'yellow');selAILevel(SAVE.lastAILevel||1);
  setTimeout(function(){
    document.getElementById('splash').classList.add('hidden');
    showScreen('menu');
  },2200);
}

// iOS-safe DOMContentLoaded
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',initApp);
}else{
  initApp();
}

// ════════════════════════════════════════════
// STATS UI
// ════════════════════════════════════════════
function updateStatsUI(){
  const s=SAVE,wr=s.gamesPlayed>0?Math.round((s.wins/s.gamesPlayed)*100):0;
  setText('st-total',s.gamesPlayed);setText('st-wins',s.wins);setText('st-winrate',wr+'%');setText('st-streak',s.bestStreak);
  setText('st-captures',s.totalCaptures||0);setText('st-turns',s.totalTurns||0);
  const cc=s.colonyStats||{},fav=Object.entries(cc).sort((a,b)=>b[1]-a[1])[0];
  const CN={yellow:'🟡 Jaune',green:'🟢 Vert',blue:'🔵 Bleu',red:'🔴 Rouge'};
  setText('st-fav',fav?CN[fav[0]]:'—');setText('st-ai',s.lastAILevel?'Niv.'+s.lastAILevel:'—');
}
function updateQuickStats(){setText('qs-win',SAVE.wins);setText('qs-total',SAVE.gamesPlayed);setText('qs-streak',SAVE.bestStreak);}
function setText(id,val){const el=document.getElementById(id);if(el)el.textContent=val;}
function resetStats(){
  if(!confirm('Réinitialiser toutes les statistiques ?'))return;
  SAVE.gamesPlayed=0;SAVE.wins=0;SAVE.losses=0;SAVE.bestStreak=0;SAVE.currentStreak=0;
  SAVE.totalCaptures=0;SAVE.totalTurns=0;SAVE.colonyStats={yellow:0,green:0,blue:0,red:0};
  persistSave();updateStatsUI();updateQuickStats();updateTrialBadge();toast('📊 Statistiques réinitialisées.');
}
function saveSetting(key,val){SAVE[key]=val;persistSave();}

// ════════════════════════════════════════════
// CONSTANTS
// ════════════════════════════════════════════
const CNAME={yellow:'Ruche Jaune',green:'Nid Vert',blue:'Essaim Bleu',red:'Colonie Rouge'};
const CCSS={yellow:'#f0c030',green:'#40c060',blue:'#4080f0',red:'#e84040'};
const CGLOW={yellow:'rgba(240,192,48,.4)',green:'rgba(64,192,96,.4)',blue:'rgba(64,128,240,.4)',red:'rgba(232,64,64,.4)'};
const SYM={chef:'🐝',assassin:'🕷️',reporter:'🪰',necromobile:'🪲',diplomate:'🐞',militant:'🐜'};
const PNAME={chef:'Reine Guêpe',assassin:'Araignée tueuse',reporter:'Mouche journaliste',necromobile:'Scarabée fossoyeur',diplomate:'Coccinelle manipulatrice',militant:'Fourmi soldate'};
const PDESC={chef:'Déplacement libre. Choisit où placer le cadavre. Accès au Nid Sacré.',assassin:'Tue librement. Cadavre automatiquement sur sa case de départ.',reporter:'Mouvement vers case vide. Déclenche une nuée orthogonale ou diagonale.',necromobile:'Se déplace sur un cadavre et le repositionne.',diplomate:'Déplace une pièce ennemie vivante vers la case de votre choix.',militant:'Max 2 cases. Tue toutes les pièces sauf la Reine sur le Nid.'};
const LAB={r:4,c:4};
const DIRS8=[[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]];
const DIRS_ORTHO=[[0,1],[0,-1],[1,0],[-1,0]];
const DIRS_DIAG=[[1,1],[1,-1],[-1,1],[-1,-1]];
const ANIM_MS=400;
const START={
  yellow:[{r:0,c:0,t:'chef'},{r:0,c:1,t:'assassin'},{r:0,c:2,t:'militant'},{r:1,c:0,t:'reporter'},{r:1,c:1,t:'diplomate'},{r:1,c:2,t:'militant'},{r:2,c:0,t:'militant'},{r:2,c:1,t:'militant'},{r:2,c:2,t:'necromobile'}],
  green:[{r:0,c:8,t:'chef'},{r:0,c:7,t:'assassin'},{r:0,c:6,t:'militant'},{r:1,c:8,t:'reporter'},{r:1,c:7,t:'diplomate'},{r:1,c:6,t:'militant'},{r:2,c:8,t:'militant'},{r:2,c:7,t:'militant'},{r:2,c:6,t:'necromobile'}],
  blue:[{r:8,c:0,t:'chef'},{r:8,c:1,t:'assassin'},{r:8,c:2,t:'militant'},{r:7,c:0,t:'reporter'},{r:7,c:1,t:'diplomate'},{r:7,c:2,t:'militant'},{r:6,c:0,t:'militant'},{r:6,c:1,t:'militant'},{r:6,c:2,t:'necromobile'}],
  red:[{r:8,c:8,t:'chef'},{r:8,c:7,t:'assassin'},{r:8,c:6,t:'militant'},{r:7,c:8,t:'reporter'},{r:7,c:7,t:'diplomate'},{r:7,c:6,t:'militant'},{r:6,c:8,t:'militant'},{r:6,c:7,t:'militant'},{r:6,c:6,t:'necromobile'}],
};

// ════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════
let G={},_animating=false,_uid=0,_gameCaptures=0,_gameTurns=0;
let _mode=1,_selColor='yellow',_aiLevel=1;

function selAILevel(n){
  _aiLevel=n;SAVE.lastAILevel=n;persistSave();
  // Supporte les deux classes (ailbtn et ailbtn-v)
  document.querySelectorAll('.ailbtn,.ailbtn-v').forEach(b=>b.classList.remove('sel'));
  const btn=document.getElementById('ailbtn-'+n);if(btn)btn.classList.add('sel');
}
function selMode(n){
  _mode=n;
  document.getElementById('mbtn-1').classList.toggle('sel',n===1);
  document.getElementById('mbtn-3').classList.toggle('sel',n===3);
  document.getElementById('csel-1ia').style.display=n===1?'':'none';
  document.getElementById('csel-3ia').style.display=n===3?'':'none';
  _selColor='yellow';document.querySelectorAll('.cbtn').forEach(b=>b.classList.remove('sel'));
  if(n===1){const btn=document.querySelector('#csel-1ia .cbtn[data-c="yellow"]');if(btn)btn.classList.add('sel');}
  else{const btn=document.querySelector('#csel-3ia .cbtn[data-c="yellow"]');if(btn)btn.classList.add('sel');}
  updateModePreview(n);
}

// ── Preview miniature de l'échiquier selon le mode ──
function updateModePreview(n){
  const el=document.getElementById('mode-preview');
  if(!el)return;
  if(n===1){
    el.innerHTML=`
      <div class="preview-label">Duel</div>
      <svg class="preview-svg" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arr" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto"><path d="M0,0 L4,2 L0,4 Z" fill="rgba(255,80,80,.8)"/></marker>
        </defs>
        <rect width="72" height="72" rx="5" fill="#050c02" stroke="rgba(143,212,48,.4)" stroke-width="1.5"/>
        ${Array.from({length:6},(_,i)=>`<line x1="${6+i*12}" y1="6" x2="${6+i*12}" y2="66" stroke="rgba(143,212,48,.2)" stroke-width=".7"/><line x1="6" y1="${6+i*12}" x2="66" y2="${6+i*12}" stroke="rgba(143,212,48,.2)" stroke-width=".7"/>`).join('')}
        <rect x="30" y="30" width="12" height="12" rx="2" fill="rgba(201,168,76,.25)" stroke="rgba(201,168,76,.6)" stroke-width="1"/>
        <circle cx="18" cy="18" r="6" fill="#c89010" stroke="rgba(255,230,80,.6)" stroke-width="1.2"/>
        <text x="18" y="22" text-anchor="middle" font-size="7" fill="#fff">🐝</text>
        <circle cx="54" cy="54" r="6" fill="#8a0010" stroke="rgba(255,90,90,.6)" stroke-width="1.2"/>
        <text x="54" y="58" text-anchor="middle" font-size="7" fill="#fff">🐝</text>
        <circle cx="30" cy="18" r="4" fill="#c89010" opacity=".7"/>
        <circle cx="18" cy="30" r="4" fill="#c89010" opacity=".7"/>
        <circle cx="42" cy="54" r="4" fill="#8a0010" opacity=".7"/>
        <circle cx="54" cy="42" r="4" fill="#8a0010" opacity=".7"/>
        <path d="M28 28 L44 44" stroke="rgba(255,80,80,.7)" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#arr)"/>
      </svg>
      <div class="preview-tagline">1 vs 1<br>Duel stratégique</div>`;
  } else {
    el.innerHTML=`
      <div class="preview-label" style="color:var(--amber)">👑 Premium</div>
      <svg class="preview-svg" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" rx="5" fill="#050c02" stroke="rgba(201,168,76,.5)" stroke-width="1.5"/>
        ${Array.from({length:6},(_,i)=>`<line x1="${6+i*12}" y1="6" x2="${6+i*12}" y2="66" stroke="rgba(143,212,48,.15)" stroke-width=".7"/><line x1="6" y1="${6+i*12}" x2="66" y2="${6+i*12}" stroke="rgba(143,212,48,.15)" stroke-width=".7"/>`).join('')}
        <rect x="30" y="30" width="12" height="12" rx="2" fill="rgba(201,168,76,.3)" stroke="rgba(201,168,76,.7)" stroke-width="1.2"/>
        <circle cx="14" cy="14" r="6" fill="#c89010" stroke="rgba(255,230,80,.7)" stroke-width="1"/>
        <text x="14" y="18" text-anchor="middle" font-size="6.5" fill="#fff">🐝</text>
        <circle cx="58" cy="14" r="6" fill="#0a7020" stroke="rgba(80,240,110,.7)" stroke-width="1"/>
        <text x="58" y="18" text-anchor="middle" font-size="6.5" fill="#fff">🐝</text>
        <circle cx="14" cy="58" r="6" fill="#0030a0" stroke="rgba(80,160,255,.7)" stroke-width="1"/>
        <text x="14" y="62" text-anchor="middle" font-size="6.5" fill="#fff">🐝</text>
        <circle cx="58" cy="58" r="6" fill="#8a0010" stroke="rgba(255,90,90,.7)" stroke-width="1"/>
        <text x="58" y="62" text-anchor="middle" font-size="6.5" fill="#fff">🐝</text>
        <circle cx="26" cy="20" r="3.5" fill="#c89010" opacity=".8"/>
        <circle cx="20" cy="26" r="3.5" fill="#c89010" opacity=".8"/>
        <circle cx="46" cy="20" r="3.5" fill="#0a7020" opacity=".8"/>
        <circle cx="52" cy="26" r="3.5" fill="#0a7020" opacity=".8"/>
        <circle cx="20" cy="46" r="3.5" fill="#0030a0" opacity=".8"/>
        <circle cx="26" cy="52" r="3.5" fill="#0030a0" opacity=".8"/>
        <circle cx="52" cy="46" r="3.5" fill="#8a0010" opacity=".8"/>
        <circle cx="46" cy="52" r="3.5" fill="#8a0010" opacity=".8"/>
        <line x1="20" y1="20" x2="30" y2="30" stroke="rgba(255,200,0,.5)" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="52" y1="20" x2="42" y2="30" stroke="rgba(80,240,110,.5)" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="20" y1="52" x2="30" y2="42" stroke="rgba(80,160,255,.5)" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="52" y1="52" x2="42" y2="42" stroke="rgba(255,80,80,.5)" stroke-width="1" stroke-dasharray="2,2"/>
      </svg>
      <div class="preview-tagline" style="color:var(--amber)">La guerre<br>peut commencer.</div>`;
  }
}
function selCol(c){
  _selColor=c;SAVE.lastColor=c;persistSave();
  const pid=(_mode===1)?'csel-1ia':'csel-3ia';
  document.querySelectorAll('#'+pid+' .cbtn').forEach(b=>{
    b.classList.toggle('sel',c==='random'?(b.dataset.c&&b.dataset.c.startsWith('random')):b.dataset.c===c);
  });
}
function resolveColor(){
  if(_selColor!=='random')return _selColor;
  if(_mode===1)return Math.random()<.5?'yellow':'red';
  return['yellow','green','blue','red'][Math.floor(Math.random()*4)];
}
function confirmMenu(){goMenu();}

// ════════════════════════════════════════════
// GAME INIT
// ════════════════════════════════════════════
const _aiMessages=['La colonie prépare son offensive…','Les éclaireurs analysent le plateau…','La Reine ennemie calcule sa stratégie…','Les insectes en marche…','La ruche se mobilise…','L\'essaim se coordonne…','Les mandibules s\'aiguisent…','La colonie traque votre Reine…'];
function startGame(tutorialMode){
  const humanColor=resolveColor();
  const activeColors=(_mode===1)?['yellow','red']:['yellow','green','blue','red'];
  _uid=0;_animating=false;_gameCaptures=0;_gameTurns=0;
  G={human:humanColor,mode1:(_mode===1),board:Array.from({length:9},()=>Array(9).fill(null)),players:{},order:[...activeColors],idx:0,sel:null,phase:'select',pendCorpse:null,pendDisp:null,afterCorpse:null,repTargets:[],labActive:null,labExtra:0,turn:0,duelZone:null};
  for(const c of activeColors){
    G.players[c]={color:c,human:(c===humanColor),pieces:[],alive:true};
    for(const sp of START[c]){const p={id:_uid++,color:c,type:sp.t,r:sp.r,c:sp.c,dead:false};G.players[c].pieces.push(p);G.board[sp.r][sp.c]=p;}
  }
  // Personnalités IA + mémoire court terme
  assignPersonalities(activeColors);
  initAIMemory(activeColors);
  SCREENS.forEach(sid=>{if(sid!=='game')document.getElementById(sid)?.classList.add('hidden');});
  document.getElementById('game').classList.remove('hidden');
  document.getElementById('log').innerHTML='<div class="le">⚔️ La guerre des colonies commence…</div>';
  const mb=document.getElementById('mute-btn');if(mb)mb.textContent=_muted?'🔇':'🔊';
  buildBoard();renderBoard();updateTurnUI();
  if(!isHuman()){const m=_aiMessages[Math.floor(Math.random()*_aiMessages.length)];setTimeout(()=>toast(`🤖 ${m}`),400);setTimeout(()=>aiTurn(finishTurn),900);}
}
function goMenu(){
  document.getElementById('game').classList.add('hidden');document.getElementById('end').classList.add('hidden');
  document.getElementById('tuto-overlay').classList.add('hidden');showAIT(false);_animating=false;
  showScreen('menu');updateQuickStats();updateTrialBadge();
}

// ════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════
const inB=(r,c)=>r>=0&&r<9&&c>=0&&c<9;
const cur=()=>G.order[G.idx];
const isHuman=()=>G.players[cur()].human;
function getCellSize(){return Math.min(window.innerWidth*.0975,48);}
function getFreeCells(forbidNid=true){const f=[];for(let r=0;r<9;r++)for(let c=0;c<9;c++){if(G.board[r][c])continue;if(forbidNid&&r===LAB.r&&c===LAB.c)continue;f.push({r,c});}return f;}
function getPieceScreenPos(piece){
  const boardEl=document.getElementById('board');if(!boardEl)return null;
  const br=boardEl.getBoundingClientRect(),cs=getCellSize();
  return{x:br.left+piece.c*cs+cs/2,y:br.top+piece.r*cs+cs/2};
}

// ════════════════════════════════════════════
// MOVEMENT RULES (unchanged)
// ════════════════════════════════════════════
function getActions(piece){if(piece.dead)return{moves:[],kills:[],diplT:[],necroT:[]};switch(piece.type){case'militant':return getMilitant(piece);case'diplomate':return getDiplomate(piece);case'necromobile':return getNecromobile(piece);case'reporter':return getReporter(piece);default:return getLinear(piece);}}
function getLinear(piece){const{r,c,color}=piece;const moves=[],kills=[];for(const[dr,dc]of DIRS8){let nr=r+dr,nc=c+dc;while(inB(nr,nc)){const t=G.board[nr][nc];if(!t){if(piece.type==='assassin'&&nr===LAB.r&&nc===LAB.c){break;}moves.push({r:nr,c:nc});}else if(t.dead){break;}else{if(t.color!==color){const qn=(t.type==='chef'&&nr===LAB.r&&nc===LAB.c);if(!qn)kills.push({r:nr,c:nc,p:t});}break;}nr+=dr;nc+=dc;}}return{moves,kills,diplT:[],necroT:[]};}
function getMilitant(piece){const{r,c,color}=piece;const moves=[],kills=[];for(const[dr,dc]of DIRS8){for(let s=1;s<=2;s++){const nr=r+dr*s,nc=c+dc*s;if(!inB(nr,nc))break;const t=G.board[nr][nc];if(!t){if(nr===LAB.r&&nc===LAB.c)break;moves.push({r:nr,c:nc});}else if(t.dead){break;}else{if(t.color!==color){const qn=(t.type==='chef'&&nr===LAB.r&&nc===LAB.c);if(!qn)kills.push({r:nr,c:nc,p:t});}break;}}}return{moves,kills,diplT:[],necroT:[]};}
function getReporter(piece){const{r,c}=piece;const moves=[];for(const[dr,dc]of DIRS8){let nr=r+dr,nc=c+dc;while(inB(nr,nc)){const t=G.board[nr][nc];if(!t){if(nr===LAB.r&&nc===LAB.c){break;}moves.push({r:nr,c:nc});}else{break;}nr+=dr;nc+=dc;}}return{moves,kills:[],diplT:[],necroT:[]};}
function getDiplomate(piece){const{r,c,color}=piece;const moves=[],diplT=[];for(const[dr,dc]of DIRS8){let nr=r+dr,nc=c+dc;while(inB(nr,nc)){const t=G.board[nr][nc];if(!t){moves.push({r:nr,c:nc});}else if(t.dead){break;}else{// only target living pieces of a DIFFERENT color — converted pieces now share color so they are safe
if(t.color!==color)diplT.push({r:nr,c:nc,p:t});break;}nr+=dr;nc+=dc;}}return{moves,kills:[],diplT,necroT:[]};}
function getNecromobile(piece){const{r,c}=piece;const moves=[],necroT=[];for(const[dr,dc]of DIRS8){let nr=r+dr,nc=c+dc;while(inB(nr,nc)){const t=G.board[nr][nc];if(!t){moves.push({r:nr,c:nc});}else if(t.dead){necroT.push({r:nr,c:nc,p:t});break;}else{break;}nr+=dr;nc+=dc;}}return{moves,kills:[],diplT:[],necroT};}
function getRepAdj(piece){const res=[];for(const dirs of[DIRS_ORTHO,DIRS_DIAG]){for(const[dr,dc]of dirs){const nr=piece.r+dr,nc=piece.c+dc;if(!inB(nr,nc))continue;const t=G.board[nr][nc];if(t&&!t.dead&&t.color!==piece.color)res.push({r:nr,c:nc,p:t,ortho:dirs===DIRS_ORTHO,dr,dc});}}return res;}

// ════════════════════════════════════════════
// BOARD OPS
// ════════════════════════════════════════════
function bset(r,c,v){if(inB(r,c))G.board[r][c]=v;}
function movePieceLogic(piece,toR,toC){bset(piece.r,piece.c,null);piece.r=toR;piece.c=toC;bset(toR,toC,piece);}
function removeFromBoard(piece){if(inB(piece.r,piece.c)&&G.board[piece.r][piece.c]===piece)G.board[piece.r][piece.c]=null;piece.r=-1;piece.c=-1;}
function placeOnBoard(piece,r,c){piece.r=r;piece.c=c;bset(r,c,piece);}

// ════════════════════════════════════════════
// ANIMATED MOVE — premium feel
// ════════════════════════════════════════════
function animatedMove(piece,toR,toC){
  return new Promise(resolve=>{
    _animating=true;
    const el=document.getElementById('p'+piece.id);
    if(!el){movePieceLogic(piece,toR,toC);_animating=false;resolve();return;}
    el.classList.add('moving');
    const cs=getCellSize(),offset=(cs-cs*.84)/2;
    el.style.left=(toC*cs+offset)+'px';el.style.top=(toR*cs+offset)+'px';
    sfxMove();vibrateDevice([8]);
    setTimeout(()=>{el.classList.remove('moving');movePieceLogic(piece,toR,toC);_animating=false;resolve();},ANIM_MS+40);
  });
}

// ════════════════════════════════════════════
// KILL LOGIC — with FX
// ════════════════════════════════════════════
function executeKill(killer,victim,fromR,fromC){
  victim.dead=true;_gameCaptures++;SAVE.totalCaptures=(SAVE.totalCaptures||0)+1;
  const isQueen=(victim.type==='chef');
  // spawn particles at victim location
  const pos=getPieceScreenPos(victim);
  if(pos){FX.spawnCapture(pos.x,pos.y,victim.color);}
  if(isQueen){sfxQueenKill();screenFlash('queen');boardShake();}
  else{sfxCapture();boardShake();}
  // flash the killed piece element before it becomes dead
  const el=document.getElementById('p'+victim.id);
  if(el)el.classList.add('flash-kill');
  if(killer.type==='assassin'){removeFromBoard(victim);placeOnBoard(victim,fromR,fromC);if(isQueen)elimPlayer(victim.color,killer.color);return false;}
  if(killer.type==='reporter'){if(isQueen)elimPlayer(victim.color,killer.color);return false;}
  if(isQueen){removeFromBoard(victim);elimPlayer(victim.color,killer.color);return false;}
  removeFromBoard(victim);G.pendCorpse={piece:victim};return true;
}
function elimPlayer(loserColor,killerColor){
  const pl=G.players[loserColor];if(!pl||!pl.alive)return;
  pl.alive=false;
  // Transfert réel des pièces vivantes vers le tableau du vainqueur
  // (fix double-annexion : sans ça les pièces converties restent dans l'ancien .pieces)
  const kpl=G.players[killerColor];
  if(kpl&&kpl.alive){
    for(const p of pl.pieces){
      if(!p.dead){
        p.color=killerColor;
        // Retirer de l'ancien .pieces et ajouter au nouveau
        kpl.pieces.push(p);
      }
    }
    // Vider les pièces vivantes de l'ancien joueur (les mortes restent pour les cadavres)
    pl.pieces=pl.pieces.filter(p=>p.dead);
  }else{
    for(const p of pl.pieces)if(!p.dead)p.dead=true;
  }
  G.order=G.order.filter(c=>c!==loserColor);if(G.idx>=G.order.length)G.idx=0;
  addLog(`💀 ${CNAME[loserColor]} éliminée ! Pièces reprises par ${CNAME[killerColor]}.`,'kil');
  if(G.labActive===loserColor){G.labActive=null;G.labExtra=0;}
  // Défaite immédiate si c'est le joueur humain qui est éliminé
  if(loserColor===G.human){
    setTimeout(()=>{
      SAVE.losses++;SAVE.currentStreak=0;persistSave();
      sfxDefeat();
      document.getElementById('game').classList.add('hidden');
      document.getElementById('end').classList.remove('hidden');
      const et=document.getElementById('etitle');
      et.textContent='DÉFAITE';
      et.style.cssText='background:linear-gradient(135deg,#8b1a1a,#e84040,#8b1a1a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;';
      const es=document.getElementById('esub');
      if(es)es.textContent='Vous ne serez pas là pour connaître les vainqueurs.';
    },600);
    return;
  }
  onKillInDuel();
  if(G.duelZone){G.duelZone.colors=G.duelZone.colors.filter(c=>c!==loserColor);if(G.duelZone.colors.length<2)G.duelZone=null;}
}

// ════════════════════════════════════════════
// NID SACRÉ — with FX
// ════════════════════════════════════════════
function handleNid(piece){
  if(piece.type!=='chef')return;
  const onNid=(piece.r===LAB.r&&piece.c===LAB.c);
  if(onNid){
    // Utiliser la couleur actuelle (peut avoir changé par fusion)
    const owner=piece.color;
    if(G.labActive!==owner){
      G.labActive=owner;G.labExtra=0;
      const msg=(G.order.length<=2)?`🏛 Nid Sacré ! ${CNAME[owner]} joue 2 fois par tour adversaire.`:`🏛 Nid Sacré ! ${CNAME[owner]} rejoue après chaque adversaire.`;
      addLog(msg,'imp');toast('🏛 Nid Sacré !');
    }
  }else{
    if(G.labActive===piece.color){G.labActive=null;G.labExtra=0;}
  }
  // Sécurité : si G.labActive ne correspond plus à un joueur vivant dans l'ordre, reset
  if(G.labActive&&(!G.players[G.labActive]||!G.players[G.labActive].alive||!G.order.includes(G.labActive))){
    G.labActive=null;G.labExtra=0;
  }
}

function getEnclosedZone(queen){const visited=new Set(),queue=[[queen.r,queen.c]];visited.add(`${queen.r},${queen.c}`);while(queue.length){const[r,c]=queue.shift();for(const[dr,dc]of DIRS8){const nr=r+dr,nc=c+dc;if(!inB(nr,nc))continue;const key=`${nr},${nc}`;if(visited.has(key))continue;const cell=G.board[nr][nc];if(cell)continue;visited.add(key);queue.push([nr,nc]);}}return visited;}
function isQueenTrapped(color){const pl=G.players[color];if(!pl||!pl.alive)return{trapped:false};const chef=pl.pieces.find(p=>p.type==='chef'&&!p.dead&&p.color===color);if(!chef)return{trapped:false};const hasNecro=pl.pieces.some(p=>!p.dead&&p.type==='necromobile'&&p.color===color);if(hasNecro)return{trapped:false};const zone=getEnclosedZone(chef);const visited2=new Set(),queue2=[[chef.r,chef.c]];visited2.add(`${chef.r},${chef.c}`);while(queue2.length){const[r,c]=queue2.shift();for(const[dr,dc]of DIRS8){const nr=r+dr,nc=c+dc;if(!inB(nr,nc))continue;const key2=`${nr},${nc}`;if(visited2.has(key2))continue;const cell=G.board[nr][nc];if(cell&&cell.dead)continue;visited2.add(key2);queue2.push([nr,nc]);}}let nonCadaverCells=0;for(let r=0;r<9;r++)for(let c=0;c<9;c++){const cell=G.board[r][c];if(!cell||!cell.dead)nonCadaverCells++;}const trapped=(visited2.size<nonCadaverCells);if(!trapped)return{trapped:false};return{trapped:true,zone,chef};}
function queensInsideZone(zone){const res=[];for(const color of G.order){const chef=G.players[color]&&G.players[color].pieces.find(p=>p.type==='chef'&&!p.dead&&p.color===color);if(chef&&zone.has(`${chef.r},${chef.c}`))res.push(color);}return res;}
function checkStalemates(){const actor=G.lastActor||null;for(const color of[...G.order]){if(!G.players[color].alive)continue;const{trapped,zone}=isQueenTrapped(color);if(!trapped)continue;const inside=queensInsideZone(zone);if(inside.length>=2){const others=inside.filter(c=>c!==color);const othersCanEscape=others.some(c=>{const opl=G.players[c];return opl&&opl.pieces.some(p=>!p.dead&&p.type==='necromobile'&&p.color===c);});if(othersCanEscape)continue;const duelKey=inside.slice().sort().join('|');if(!G.duelZone||G.duelZone.key!==duelKey){G.duelZone={key:duelKey,colors:[...inside],turns:0};addLog(`⚔️ Duel ! ${inside.map(c=>CNAME[c]).join(' vs ')} enfermées — 10 coups max !`,'imp');toast('⚔️ Duel en zone fermée !');}if(G.duelZone&&G.duelZone.turns>=10){addLog(`⏱️ Temps écoulé : ${CNAME[color]} éliminée du duel !`,'kil');toast(`⏱️ ${CNAME[color]} n'a pas su s'imposer !`);eliminateTrapped(color,actor);}}else{addLog(`🔒 ${CNAME[color]} encerclée sans Scarabée fossoyeur — éliminée !`,'kil');toast(`🔒 ${CNAME[color]} encerclée !`);eliminateTrapped(color,actor);}}}
function eliminateTrapped(color,killerColor){
  const pl=G.players[color];if(!pl||!pl.alive)return;
  pl.alive=false;
  const kpl=killerColor&&killerColor!==color?G.players[killerColor]:null;
  if(kpl&&kpl.alive){
    for(const p of pl.pieces){if(!p.dead){p.color=killerColor;kpl.pieces.push(p);}}
    pl.pieces=pl.pieces.filter(p=>p.dead);
    addLog(`💀 ${CNAME[color]} encerclée par ${CNAME[killerColor]} — pièces récupérées !`,'kil');
  }else{
    for(const p of pl.pieces)if(!p.dead)p.dead=true;
    addLog(`💀 ${CNAME[color]} éliminée par encerclement !`,'kil');
  }
  G.order=G.order.filter(c=>c!==color);if(G.idx>=G.order.length)G.idx=0;
  if(G.labActive===color){G.labActive=null;G.labExtra=0;}
  // Défaite humain
  if(color===G.human){
    setTimeout(()=>{
      SAVE.losses++;SAVE.currentStreak=0;persistSave();sfxDefeat();
      document.getElementById('game').classList.add('hidden');
      document.getElementById('end').classList.remove('hidden');
      const et=document.getElementById('etitle');
      et.textContent='DÉFAITE';
      et.style.cssText='background:linear-gradient(135deg,#8b1a1a,#e84040,#8b1a1a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;';
      const es=document.getElementById('esub');if(es)es.textContent='Vous ne serez pas là pour connaître les vainqueurs.';
    },600);return;
  }
  if(G.duelZone){G.duelZone.colors=G.duelZone.colors.filter(c=>c!==color);if(G.duelZone.colors.length<2)G.duelZone=null;}
}
function onKillInDuel(){if(G.duelZone)G.duelZone.turns=0;}

// ════════════════════════════════════════════
// HUMAN INPUT — with game feel
// ════════════════════════════════════════════
function humanClickCell(r,c){
  if(!isHuman()||_animating)return;
  const clickedPiece=G.board[r][c];
  if(G.phase==='place-corpse'){if(G.board[r][c]){toast('Case occupée');return;}if(r===LAB.r&&c===LAB.c){toast('Le Nid Sacré ne peut pas recevoir un cadavre');return;}placeOnBoard(G.pendCorpse.piece,r,c);G.pendCorpse=null;G.phase='select';renderBoard();if(G.afterCorpse){const cb=G.afterCorpse;G.afterCorpse=null;cb();}else finishTurn();return;}
  if(G.phase==='place-dipl'){
    const target=G.board[r][c];
    // reject if occupied by ANY piece (dead or alive) — displaced piece must land on truly empty cell
    if(target){toast('Case occupée');return;}
    placeOnBoard(G.pendDisp,r,c);G.pendDisp=null;G.phase='select';renderBoard();finishTurn();return;
  }
  if(G.phase==='place-necro'){if(G.board[r][c]){toast('Case occupée');return;}if(r===LAB.r&&c===LAB.c){toast('Le Nid Sacré ne peut pas recevoir un cadavre');return;}placeOnBoard(G.pendDisp,r,c);G.pendDisp=null;G.phase='select';renderBoard();finishTurn();return;}
  if(G.phase==='reporter-choose'){const hit=G.repTargets.find(t=>t.r===r&&t.c===c);if(hit){execReporterNuee(G.sel,hit.ortho);}else{G.phase='select';G.repTargets=[];handleNid(G.sel);G.sel=null;renderBoard();finishTurn();}return;}
  if(G.phase!=='select')return;
  if(clickedPiece&&!clickedPiece.dead&&clickedPiece.color===G.human&&!G.sel){selectPiece(clickedPiece);return;}
  if(!G.sel)return;
  const piece=G.sel;
  if(clickedPiece&&!clickedPiece.dead&&clickedPiece.color===G.human){selectPiece(clickedPiece);return;}
  const acts=getActions(piece);
  const mv=acts.moves.find(m=>m.r===r&&m.c===c);
  const kl=acts.kills.find(k=>k.r===r&&k.c===c);
  const dl=acts.diplT.find(d=>d.r===r&&d.c===c);
  const nc=acts.necroT.find(n=>n.r===r&&n.c===c);
  if(!mv&&!kl&&!dl&&!nc){G.sel=null;renderBoard();return;}
  if(mv)doMove(piece,r,c);
  else if(kl)doKill(piece,kl.p,r,c);
  else if(dl)doDipl(piece,dl.p,r,c);
  else if(nc)doNecro(piece,nc.p,r,c);
}
function selectPiece(piece){
  G.sel=piece;sfxSelect();vibrateDevice([6]);
  updatePieceInfo(piece);renderBoard();
}

function doMove(piece,r,c){_animating=true;animatedMove(piece,r,c).then(()=>{addLog(`${CNAME[piece.color]} : ${PNAME[piece.type]} → (${r+1},${c+1})`);if(piece.type==='reporter'){const rts=getRepAdj(piece);if(rts.length>0){G.phase='reporter-choose';G.repTargets=rts;G.sel=piece;toast('👁️ Nuée : cliquez ortho🔴 ou diag🟠 (ailleurs = passer)');renderBoard();updateTurnUI();return;}}handleNid(piece);G.sel=null;renderBoard();finishTurn();});}
function doKill(piece,victim,toR,toC){const fromR=piece.r,fromC=piece.c;_animating=true;animatedMove(piece,toR,toC).then(()=>{addLog(`${CNAME[piece.color]} : ${PNAME[piece.type]} tue ${PNAME[victim.type]} ${CNAME[victim.color]}`,'kil');const needPlace=executeKill(piece,victim,fromR,fromC);if(needPlace){G.phase='place-corpse';G.afterCorpse=()=>{handleNid(piece);G.sel=null;finishTurn();};toast('Placez le cadavre sur une case libre');renderBoard();updateTurnUI();return;}handleNid(piece);G.sel=null;renderBoard();finishTurn();});}
function doDipl(piece,victim,toR,toC){removeFromBoard(victim);_animating=true;animatedMove(piece,toR,toC).then(()=>{addLog(`🐞 ${CNAME[piece.color]} : Coccinelle déplace ${PNAME[victim.type]} ${CNAME[victim.color]}`);G.pendDisp=victim;G.phase='place-dipl';toast('Placez la pièce sur une case vide');renderBoard();updateTurnUI();});}
function doNecro(piece,corpse,toR,toC){removeFromBoard(corpse);_animating=true;animatedMove(piece,toR,toC).then(()=>{addLog(`💀 ${CNAME[piece.color]} : Scarabée déplace un cadavre`);G.pendDisp=corpse;G.phase='place-necro';toast('Placez le cadavre sur une case libre');renderBoard();updateTurnUI();});}
function execReporterNuee(reporter,isOrthoChosen){const dirs=isOrthoChosen?DIRS_ORTHO:DIRS_DIAG;const killed=[];for(const[dr,dc]of dirs){const nr=reporter.r+dr,nc=reporter.c+dc;if(!inB(nr,nc))continue;const t=G.board[nr][nc];if(t&&!t.dead&&t.color!==reporter.color){t.dead=true;_gameCaptures++;SAVE.totalCaptures=(SAVE.totalCaptures||0)+1;const pos=getPieceScreenPos(t);if(pos)FX.spawnCapture(pos.x,pos.y,t.color);if(t.type==='chef')elimPlayer(t.color,reporter.color);killed.push(t);}}if(killed.length>0){sfxCapture();boardShake();addLog(`👁️ Nuée ${isOrthoChosen?'orthogonale':'diagonale'} : ${killed.map(p=>PNAME[p.type]).join(', ')} tué(s)`,'kil');}G.phase='select';G.repTargets=[];handleNid(reporter);G.sel=null;renderBoard();finishTurn();}

// ════════════════════════════════════════════
// TURN MANAGEMENT
// ════════════════════════════════════════════
function finishTurn(){
  G.sel=null;G.phase='select';G.lastActor=cur();checkStalemates();if(checkWin())return;
  const justPlayed=cur();
  const twoPlayer=(G.order.length<=2);
  G.turn++;_gameTurns++;

  // ── Nid Sacré : qui est physiquement sur la case LAB ? ──
  // Lecture directe du board — robuste après fusions de colonies
  const nidOccupant=G.board[LAB.r][LAB.c];
  const nidColor=(nidOccupant&&!nidOccupant.dead&&nidOccupant.type==='chef'
    &&G.order.includes(nidOccupant.color)&&G.players[nidOccupant.color]?.alive)
    ?nidOccupant.color:null;

  if(nidColor!==G.labActive){
    if(nidColor) addLog(`🏛 ${CNAME[nidColor]} prend le Nid Sacré !`,'imp');
    G.labActive=nidColor;
    G.labExtra=0;
  }

  // ── Cas 1 : DUEL (2 joueurs) — le maître du Nid joue deux fois d'affilée ──
  if(twoPlayer){
    if(G.labActive===justPlayed&&!G.labExtra){
      // Premier tour du maître : lui donner un tour bonus immédiat
      G.labExtra=1;
      // G.idx reste sur justPlayed (pas d'avancement)
      addLog(`🏛 Nid Sacré — ${CNAME[justPlayed]} rejoue !`,'imp');
      renderBoard();updateTurnUI();
      if(cur()!==G.human) setTimeout(()=>aiTurn(finishTurn),900);
      return;
    }
    // Tour bonus consommé OU le maître vient de jouer son bonus : tour normal
    G.labExtra=0;
    G.idx=(G.idx+1)%G.order.length;
    let g=0;while(!G.players[cur()].alive&&g++<G.order.length)G.idx=(G.idx+1)%G.order.length;
    renderBoard();updateTurnUI();
    if(cur()!==G.human) setTimeout(()=>aiTurn(finishTurn),CONFIG.AI_THINK_MIN+Math.random()*(CONFIG.AI_THINK_MAX-CONFIG.AI_THINK_MIN));
    return;
  }

  // ── Cas 2 : FFA (3-4 joueurs) ──
  // Règle : ordre normal A→B→C→D mais après chaque tour de B, C ou D
  // le maître du Nid (A) obtient un tour bonus AVANT de passer au suivant.
  // On utilise G.labExtra comme flag "le bonus a déjà été joué ce cycle".

  if(G.labActive && G.labActive!==justPlayed){
    // Un adversaire vient de jouer → le maître du Nid doit rejouer maintenant
    // SAUF si on sort juste d'un tour bonus (G.labExtra===1)
    if(G.labExtra!==1){
      const labIdx=G.order.indexOf(G.labActive);
      if(labIdx!==-1){
        G.labExtra=1; // marquer que le bonus va être joué
        G.idx=labIdx;
        addLog(`🏛 ${CNAME[G.labActive]} rejoue (Nid Sacré) !`,'imp');
        renderBoard();updateTurnUI();
        if(cur()!==G.human) setTimeout(()=>aiTurn(finishTurn),900);
        return;
      }
    }
  }

  // Tour bonus du Nid consommé, ou c'est le tour naturel du maître :
  // avancer normalement
  G.labExtra=0;
  G.idx=(G.idx+1)%G.order.length;
  let guard=0;
  while(!G.players[cur()].alive&&guard++<G.order.length)
    G.idx=(G.idx+1)%G.order.length;

  if(G.duelZone&&G.duelZone.colors.length>=2){
    if(cur()===G.duelZone.colors[0]){G.duelZone.turns++;addLog(`⚔️ Duel — tour ${G.duelZone.turns}/10`,'imp');}
  }

  renderBoard();updateTurnUI();
  if(cur()!==G.human){
    if(Math.random()<.15){
      const m=_aiMessages[Math.floor(Math.random()*_aiMessages.length)];
      setTimeout(()=>toast(m),200);
    }
    setTimeout(()=>aiTurn(finishTurn),CONFIG.AI_THINK_MIN+Math.random()*(CONFIG.AI_THINK_MAX-CONFIG.AI_THINK_MIN));
  }
}
function checkWin(){const alive=G.order.filter(c=>G.players[c].alive);if(alive.length===1){showEnd(alive[0]);return true;}if(alive.length===0){showEnd('?');return true;}return false;}
function showEnd(winner){
  setTimeout(()=>{
    SAVE.gamesPlayed++;SAVE.totalTurns=(SAVE.totalTurns||0)+_gameTurns;
    const hw=(winner!=='?'&&G.players[winner]&&G.players[winner].human);
    if(hw){SAVE.wins++;SAVE.currentStreak++;if(SAVE.currentStreak>SAVE.bestStreak)SAVE.bestStreak=SAVE.currentStreak;if(!SAVE.colonyStats)SAVE.colonyStats={yellow:0,green:0,blue:0,red:0};SAVE.colonyStats[G.human]=(SAVE.colonyStats[G.human]||0)+1;sfxVictory();setTimeout(launchVictoryParticles,300);}else{SAVE.losses++;SAVE.currentStreak=0;sfxDefeat();}
    persistSave();
    document.getElementById('game').classList.add('hidden');document.getElementById('end').classList.remove('hidden');
    const et=document.getElementById('etitle');
    et.textContent=hw?'VICTOIRE !':'DÉFAITE';
    et.style.cssText=`background:linear-gradient(135deg,${hw?'#2a7000,#8fd430,#2a7000':'#8b1a1a,#e84040,#8b1a1a'});-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-family:'Cinzel Decorative',serif;font-size:2.2rem`;
    document.getElementById('ecrown').textContent=hw?'🏆':'💀';
    document.getElementById('ewinner').textContent=hw?'🐝 Votre colonie domine toutes les ruches !':`La colonie ${CNAME[winner]||'inconnue'} contrôle la ruche.`;
    const wr=SAVE.gamesPlayed>0?Math.round((SAVE.wins/SAVE.gamesPlayed)*100)+'%':'0%';
    setText('end-turns',_gameTurns);setText('end-caps',_gameCaptures);setText('end-total',SAVE.gamesPlayed);setText('end-winrate',wr);
    updateQuickStats();updateStatsUI();updateTrialBadge();
  },400);
}

// ════════════════════════════════════════════
// AI — ARCHITECTURE v8
// Étape 1 : getGameContext()
// Étape 2 : scores adaptés au contexte
// Étape 3 : personnalités IA (aléatoire par colonie)
// Étape 4 : mémoire court terme (lastAttacker / revengeTarget)
// ════════════════════════════════════════════

// ── Personnalités IA assignées à chaque colonie au démarrage ──
// aggressive : attaque prioritaire, ignore la survie
// opportunist : finit les faibles, évite les forts
// defensive   : protège sa reine, joue prudemment
// manipulator : privilégie diplomate+scarabée, contrôle indirect
const AI_PERSONALITIES = ['aggressive','opportunist','defensive','manipulator'];
let _aiPersonalities = {}; // {color: personality}

function assignPersonalities(colors){
  // Mélange aléatoire des personnalités pour les IA (pas le joueur humain)
  const shuffled = [...AI_PERSONALITIES].sort(()=>Math.random()-.5);
  let idx=0;
  for(const c of colors){
    _aiPersonalities[c] = shuffled[idx % shuffled.length];
    idx++;
  }
}

// ── Mémoire court terme ──
// lastAttacker[color] = couleur qui a tué une pièce de color au dernier tour
// revengeTarget[color] = couleur ciblée en priorité (vengeance)
let _aiMemory = {}; // {color: {lastAttacker, revengeTarget, lastAttackedTurn}}

function initAIMemory(colors){
  _aiMemory={};
  for(const c of colors) _aiMemory[c]={lastAttacker:null,revengeTarget:null,lastAttackedTurn:0};
}

function notifyAIAttacked(victimColor, attackerColor){
  if(!_aiMemory[victimColor]) return;
  _aiMemory[victimColor].lastAttacker = attackerColor;
  _aiMemory[victimColor].revengeTarget = attackerColor;
  _aiMemory[victimColor].lastAttackedTurn = G.turn||0;
}

// ── ÉTAPE 1 : getGameContext(color) ──
function getGameContext(color){
  const isFFA = G.order.length > 2;
  const aliveColors = G.order.filter(c=>G.players[c].alive);
  const myPieces = G.players[color].pieces.filter(p=>!p.dead&&p.color===color);
  const myCount = myPieces.length;

  // Score de menace de chaque ennemi
  const threatScores = {};
  for(const ec of aliveColors){
    if(ec===color) continue;
    const pl=G.players[ec];
    const pieces=pl.pieces.filter(p=>!p.dead&&p.color===ec);
    const chef=pieces.find(p=>p.type==='chef');
    const centerScore=pieces.reduce((s,p)=>s+(4-Math.max(Math.abs(p.r-4),Math.abs(p.c-4)))*2,0);
    const onNid=chef&&chef.r===LAB.r&&chef.c===LAB.c?15:0;
    threatScores[ec]=pieces.length*2+centerScore+onNid;
  }

  // Dominant = ennemi le plus fort
  const dominantEnemy = aliveColors
    .filter(c=>c!==color)
    .sort((a,b)=>(threatScores[b]||0)-(threatScores[a]||0))[0]||null;

  // Weakest = ennemi le plus faible (le plus facile à finir)
  const weakestEnemy = aliveColors
    .filter(c=>c!==color)
    .sort((a,b)=>(threatScores[a]||0)-(threatScores[b]||0))[0]||null;

  // Mon classement parmi les vivants (1=meilleur)
  const allCounts = aliveColors.map(c=>({c,n:G.players[c].pieces.filter(p=>!p.dead&&p.color===c).length}));
  allCounts.sort((a,b)=>b.n-a.n);
  const myRanking = allCounts.findIndex(x=>x.c===color)+1;

  const myChef = myPieces.find(p=>p.type==='chef');
  const centerControlled = myPieces.filter(p=>Math.max(Math.abs(p.r-4),Math.abs(p.c-4))<=2).length;

  // Niveau de danger : nb de mes pièces menacées
  let dangerLevel=0;
  for(const p of myPieces){
    if(cellThreatened(p.r,p.c,color)) dangerLevel++;
  }

  // Mémoire vengeance
  const mem = _aiMemory[color]||{};
  const revengeTarget = mem.revengeTarget && G.players[mem.revengeTarget]&&G.players[mem.revengeTarget].alive
    ? mem.revengeTarget : null;

  return {isFFA, dominantEnemy, weakestEnemy, myRanking, myCount,
          centerControlled, dangerLevel, revengeTarget, threatScores,
          myChef, aliveColors};
}

// ── Utilitaires (inchangés) ──
function cellZoneVal(r,c){const dr=Math.abs(r-4),dc=Math.abs(c-4),d=Math.max(dr,dc);if(d<=1)return 3;if(d<=3)return 2;return 1;}
function cellThreatened(r,c,myColor){for(const ec of G.order){if(ec===myColor)continue;if(!G.players[ec].alive)continue;for(const ep of G.players[ec].pieces){if(ep.dead||ep.color!==ec)continue;const a=getActions(ep);if(a.kills.find(k=>k.r===r&&k.c===c))return true;}}return false;}
function pieceExposed(piece,toR,toC,myColor){return cellThreatened(toR,toC,myColor);}
function pieceValue(type){switch(type){case'chef':return 200;case'necromobile':return 100;case'reporter':return 85;case'assassin':return 75;case'diplomate':return 55;case'militant':return 30;default:return 20;}}
function distCenter(r,c){return Math.max(Math.abs(r-4),Math.abs(c-4));}
function queenThreat(r,c,myColor){let n=0;for(const ec of G.order){if(ec===myColor)continue;if(!G.players[ec].alive)continue;const ch=G.players[ec].pieces.find(p=>p.type==='chef'&&!p.dead&&p.color===ec);if(ch&&Math.max(Math.abs(ch.r-r),Math.abs(ch.c-c))<=2)n++;}return n;}
function getAllMoves(color){const moves=[];const pieces=G.players[color].pieces.filter(p=>!p.dead&&p.color===color);for(const piece of pieces){const acts=getActions(piece);for(const m of acts.moves)moves.push({piece,act:'move',r:m.r,c:m.c,t:null});for(const k of acts.kills)moves.push({piece,act:'kill',r:k.r,c:k.c,t:k.p});for(const d of acts.diplT)moves.push({piece,act:'dipl',r:d.r,c:d.c,t:d.p});for(const n of acts.necroT)moves.push({piece,act:'necro',r:n.r,c:n.c,t:n.p});}return moves;}
function getDominantEnemy(myColor){let best=null,bCount=-1;for(const ec of G.order){if(ec===myColor)continue;if(!G.players[ec].alive)continue;const n=G.players[ec].pieces.filter(p=>!p.dead&&p.color===ec).length;if(n>bCount){bCount=n;best=ec;}}return best;}
function isAdjacentToEnemyPath(r,c,myColor){for(const ec of G.order){if(ec===myColor)continue;if(!G.players[ec].alive)continue;const ch=G.players[ec].pieces.find(p=>p.type==='chef'&&!p.dead);if(!ch)continue;const dr=Math.sign(4-ch.r),dc=Math.sign(4-ch.c);if(r===ch.r+dr&&c===ch.c+dc)return true;if(r===ch.r+dr*2&&c===ch.c+dc*2)return true;}return false;}
function nearbyEnemies(r,c,color){let n=0;for(let dr=-2;dr<=2;dr++)for(let dc=-2;dc<=2;dc++){const nr=r+dr,nc=c+dc;if(!inB(nr,nc))continue;const t=G.board[nr][nc];if(t&&!t.dead&&t.color!==color)n++;}return n;}

function aiCorpseSpot(free,color){let best=free[0],bs=-Infinity;for(const cell of free){let s=0;for(const ec of G.order){if(ec===color)continue;const ch=G.players[ec].pieces.find(p=>p.type==='chef'&&!p.dead);if(ch)s+=6-Math.min(6,Math.abs(ch.r-cell.r)+Math.abs(ch.c-cell.c));}const myChef=G.players[color].pieces.find(p=>p.type==='chef'&&!p.dead);if(myChef)s-=Math.max(0,3-Math.max(Math.abs(myChef.r-cell.r),Math.abs(myChef.c-cell.c)))*2;s+=Math.random()*2;if(s>bs){bs=s;best=cell;}}return best;}
function aiReporterChoice(reporter){const og=[],dg=[];for(const[dr,dc]of DIRS_ORTHO){const nr=reporter.r+dr,nc=reporter.c+dc;if(!inB(nr,nc))continue;const t=G.board[nr][nc];if(t&&!t.dead&&t.color!==reporter.color)og.push(t);}for(const[dr,dc]of DIRS_DIAG){const nr=reporter.r+dr,nc=reporter.c+dc;if(!inB(nr,nc))continue;const t=G.board[nr][nc];if(t&&!t.dead&&t.color!==reporter.color)dg.push(t);}const sd=g=>g.reduce((s,p)=>s+pieceValue(p.type),0);const so=sd(og),sdd=sd(dg);if(so===0&&sdd===0)return null;return so>=sdd;}

function execAIMove(best,color,onDone){
  const{piece,act,r,c,t}=best;
  if(act==='move'){animatedMove(piece,r,c).then(()=>{addLog(`IA Niv.${_aiLevel} ${CNAME[color]} : ${PNAME[piece.type]} → (${r+1},${c+1})`);if(piece.type==='reporter'){const choice=aiReporterChoice(piece);if(choice!==null){execReporterNueeAI(piece,choice);showAIT(false);renderBoard();updateTurnUI();onDone();return;}}handleNid(piece);showAIT(false);renderBoard();updateTurnUI();onDone();});}
  else if(act==='kill'){const fromR=piece.r,fromC=piece.c;animatedMove(piece,r,c).then(()=>{addLog(`IA Niv.${_aiLevel} ${CNAME[color]} : ${PNAME[piece.type]} tue ${PNAME[t.type]} ${CNAME[t.color]}`,'kil');// Mémoire : notifier la victime
  if(_aiMemory[t.color]) notifyAIAttacked(t.color,color);
  const need=executeKill(piece,t,fromR,fromC);if(need){const free=getFreeCells(true);if(free.length>0){const pos=aiCorpseSpot(free,color);placeOnBoard(G.pendCorpse.piece,pos.r,pos.c);G.pendCorpse=null;}else{G.pendCorpse=null;}}handleNid(piece);showAIT(false);renderBoard();updateTurnUI();onDone();});}
  else if(act==='dipl'){removeFromBoard(t);animatedMove(piece,r,c).then(()=>{addLog(`🐞 IA Niv.${_aiLevel} ${CNAME[color]} : Coccinelle déplace ${PNAME[t.type]} ${CNAME[t.color]}`);const free=getFreeCells(false);if(free.length>0){const pos=aiDiplPlacement(t,color,free);placeOnBoard(t,pos.r,pos.c);}showAIT(false);renderBoard();updateTurnUI();onDone();});}
  else if(act==='necro'){removeFromBoard(t);animatedMove(piece,r,c).then(()=>{addLog(`💀 IA Niv.${_aiLevel} ${CNAME[color]} : Scarabée déplace un cadavre`);const free=getFreeCells(true);if(free.length>0){const pos=aiCorpseSpot(free,color);placeOnBoard(t,pos.r,pos.c);}showAIT(false);renderBoard();updateTurnUI();onDone();});}
}

function aiDiplPlacement(victim,myColor,free){if(_aiLevel===1)return free[Math.floor(Math.random()*free.length)];let best=free[0],bs=-Infinity;for(const cell of free){let s=0;if(cellThreatened(cell.r,cell.c,myColor))s+=40;if(victim.type==='chef')s+=cellZoneVal(cell.r,cell.c)===1?30:0;s+=distCenter(cell.r,cell.c)*3;s+=Math.random()*3;if(s>bs){bs=s;best=cell;}}return best;}

// ── Valeur de survie d'une pièce (combien l'IA tient à la garder) ──
function pieceKeepValue(type){
  // Hiérarchie globale : Reine > Scarabée > Mouche > Assassin > Coccinelle > Soldat
  switch(type){
    case'chef':        return 9999;
    case'necromobile': return 300;  // Scarabée — pièce maîtresse
    case'reporter':    return 220;  // Mouche
    case'assassin':    return 180;  // Assassin
    case'diplomate':   return 120;  // Coccinelle
    case'militant':    return 50;   // Soldat
    default:           return 50;
  }
}
// Simule le déplacement d'une pièce et teste si elle sera immédiatement prenable
function wouldBeImmediatelyCaptured(piece,toR,toC,color){
  const fromR=piece.r,fromC=piece.c;
  G.board[fromR][fromC]=null;
  const occupant=G.board[toR][toC];
  G.board[toR][toC]=piece;
  const threatened=cellThreatened(toR,toC,color);
  G.board[fromR][fromC]=piece;
  G.board[toR][toC]=occupant;
  return threatened;
}
function isCurrentlyThreatened(piece,color){
  return cellThreatened(piece.r,piece.c,color);
}

// Lookahead 1 : après un coup IA (piece→toR,toC), les ennemis peuvent-ils
// capturer une pièce de valeur >= minValue au tour suivant ?
// Retourne le score de danger (0 = safe, >0 = danger proportionnel à la valeur)
function lookahead1Danger(piece, toR, toC, color, minValue){
  // Simuler le déplacement
  const fromR=piece.r, fromC=piece.c;
  const occupant=G.board[toR][toC];
  G.board[fromR][fromC]=null;
  G.board[toR][toC]=piece;
  const savedR=piece.r, savedC=piece.c;
  piece.r=toR; piece.c=toC;

  let danger=0;
  // Chercher toutes les pièces amies à risque
  const myPieces=G.players[color].pieces.filter(p=>!p.dead&&p.color===color);
  for(const mp of myPieces){
    if(pieceKeepValue(mp.type)<minValue) continue;
    if(cellThreatened(mp.r,mp.c,color)){
      danger += pieceKeepValue(mp.type);
    }
  }

  // Restaurer
  piece.r=savedR; piece.c=savedC;
  G.board[fromR][fromC]=piece;
  G.board[toR][toC]=occupant;
  return danger;
}

// Vérifie si une pièce amie importante est menacée en ce moment
// Retourne la liste triée par priorité décroissante
function getThreatenedPieces(color, minValue){
  return G.players[color].pieces
    .filter(p=>!p.dead&&p.color===color&&pieceKeepValue(p.type)>=minValue&&cellThreatened(p.r,p.c,color))
    .sort((a,b)=>pieceKeepValue(b.type)-pieceKeepValue(a.type));
}

// ── ÉTAPE 2+3 : scoreMove — score adapté au contexte + personnalité ──
function scoreMove(mv, color, ctx, personality){
  const {piece,act,r,c,t} = mv;
  const {isFFA, dominantEnemy, weakestEnemy, myRanking, dangerLevel,
         centerControlled, revengeTarget, threatScores} = ctx;
  let s = 0;

  // ══ VETO ABSOLUS ══

  // 1. La reine ne va JAMAIS sur une case menacée
  if(piece.type==='chef' && wouldBeImmediatelyCaptured(piece,r,c,color)) return -9999;

  // 2. Aucune pièce ne libère une ligne qui expose la reine
  if(piece.type!=='chef' && ctx.myChef){
    const chef=ctx.myChef;
    G.board[piece.r][piece.c]=null;
    const queenNowExposed=cellThreatened(chef.r,chef.c,color);
    G.board[piece.r][piece.c]=piece;
    if(queenNowExposed) return -8000;
  }

  // 3. Pièces précieuses ne se sacrifient pas pour rien
  const kv=pieceKeepValue(piece.type);
  if(kv>=100){
    const willBeCaptured=wouldBeImmediatelyCaptured(piece,r,c,color);
    if(willBeCaptured){
      if(act==='kill'){
        const alreadyDead=isCurrentlyThreatened(piece,color);
        if(pieceValue(t.type)<150 && !alreadyDead) return -(kv*2);
      } else {
        return -(kv*2);
      }
    }
  }

  // 4. Bonus de fuite : pièce menacée qui s'échappe vers une case sûre
  const currentlyThreatened=isCurrentlyThreatened(piece,color);
  if(currentlyThreatened && act==='move'){
    if(!wouldBeImmediatelyCaptured(piece,r,c,color)){
      s += kv*0.8;
    }
  }

  // ── Multiplicateurs de personnalité ──
  const aggrMult  = personality==='aggressive' ? 1.4 : personality==='defensive' ? 0.6 : 1.0;
  const survMult  = personality==='defensive'  ? 0.5 : personality==='aggressive'? 1.3 : 1.0;
  const oppoMult  = personality==='opportunist'? 1.5 : 1.0;
  const manipMult = personality==='manipulator'? 1.5 : 1.0;
  const exposed   = wouldBeImmediatelyCaptured(piece,r,c,color);
  const risk      = exposed ? 30 : 0;

  if(act==='kill'){
    const val=pieceValue(t.type);
    let bonus=0;
    if(t.type==='chef') bonus=80;
    else if(t.type==='assassin'||t.type==='reporter') bonus=30;
    if(isFFA){
      if(weakestEnemy && t.color===weakestEnemy) bonus+=30*oppoMult;
      if(revengeTarget && t.color===revengeTarget) bonus+=40;
      if(dominantEnemy && t.color!==dominantEnemy && myRanking>=3) bonus-=15;
      if(dominantEnemy && t.color===dominantEnemy && myRanking>=3 && t.type!=='chef') bonus-=20;
    }
    s+=(val+bonus)*aggrMult - risk*survMult;
  }
  else if(act==='dipl'){
    let ds=pieceValue(t.type)*0.7;
    if(t.type==='chef') ds+=70;
    if(isFFA) ds*=manipMult;
    s+=ds-risk;
  }
  else if(act==='necro'){
    const inCenter=Math.abs(r-4)<=2&&Math.abs(c-4)<=2;
    const nearEQ=G.order.some(ec=>{
      if(ec===color)return false;
      const ch=G.players[ec]&&G.players[ec].pieces.find(p=>p.type==='chef'&&!p.dead);
      return ch&&Math.max(Math.abs(ch.r-r),Math.abs(ch.c-c))<=2;
    });
    s+=((inCenter?40:10)+(nearEQ?30:0)-risk)*manipMult;
  }
  else { // move
    const vc=cellZoneVal(r,c)*4;
    const ic5=(Math.abs(r-4)<=2&&Math.abs(c-4)<=2)?8:0;
    const pression=nearbyEnemies(r,c,color);
    s+=vc+ic5;
    if(exposed){ s-=50*survMult; if(piece.type==='chef') s-=200; }
    if(piece.type==='chef' && r===LAB.r&&c===LAB.c&&!exposed) s+=70;
    if(piece.type==='reporter'){
      let ae=0;
      for(const[dr,dc]of DIRS8){const nr=r+dr,nc=c+dc;if(!inB(nr,nc))continue;const t2=G.board[nr][nc];if(t2&&!t2.dead&&t2.color!==color)ae++;}
      s+=ae*18;
    }
    if(piece.type==='assassin'){
      for(const ec of G.order){
        if(ec===color)continue;
        const target=isFFA?(personality==='aggressive'?dominantEnemy:personality==='opportunist'?weakestEnemy:revengeTarget||dominantEnemy):ec;
        if(ec!==target)continue;
        const ch=G.players[ec]&&G.players[ec].pieces.find(p=>p.type==='chef'&&!p.dead);
        if(ch){const dist=Math.max(Math.abs(r-ch.r),Math.abs(c-ch.c));s+=Math.max(0,7-dist)*6*aggrMult;}
      }
    }
    if(isFFA && dangerLevel>=2 && personality==='defensive'){
      const myChef=ctx.myChef;
      if(myChef){const dist=Math.max(Math.abs(r-myChef.r),Math.abs(c-myChef.c));if(dist<=2)s+=15;}
    }
    if(isFFA && personality==='opportunist' && ctx.aliveColors.length>3 && pression>2) s-=12;
  }

  s+=Math.random()*4;
  return s;
}

// ── Niveaux IA — utilisent tous scoreMove avec contexte ──
function IA_Level1_Move(color){
  const allMoves=getAllMoves(color);if(!allMoves.length)return null;
  // Niv1 : réactif, pas de contexte FFA, pas de personnalité réelle
  const scored=allMoves.map(mv=>{let s=0;const{piece,act,r,c,t}=mv;
    if(act==='kill'){const safe=!pieceExposed(piece,r,c,color);if(t.type==='chef')s=safe?100:-50;else s=safe?40:-30;}
    else if(act==='dipl'){const safe=!pieceExposed(piece,r,c,color);s=safe?25:-20;}
    else if(act==='necro'){s=10;}
    else{const exposed=pieceExposed(piece,r,c,color);if(exposed)s=-40;if(piece.type==='chef'){if(exposed)s=-100;else s=5;if(r===LAB.r&&c===LAB.c&&!exposed)s=50;}const qt=queenThreat(r,c,color);s-=qt*8;if(!exposed)s+=5;}
    s+=Math.random()*4;return{...mv,score:s};
  });
  const safeMoves=scored.filter(m=>m.score>-30);
  const pool=safeMoves.length>0?safeMoves:scored;
  pool.sort((a,b)=>b.score-a.score);
  const topScore=pool[0].score;
  const tops=pool.filter(m=>m.score>=topScore-5);
  return tops[Math.floor(Math.random()*tops.length)];
}

function IA_Level2_Move(color){
  const allMoves=getAllMoves(color);if(!allMoves.length)return null;
  const ctx = getGameContext(color);
  const personality = _aiPersonalities[color]||'aggressive';
  const myChef=G.players[color].pieces.find(p=>p.type==='chef'&&!p.dead&&p.color===color);

  // Priorité défense : pièces menacées maintenant, par ordre d'importance
  const threatened = getThreatenedPieces(color, 50);
  if(threatened.length>0){
    // Forcer un coup de fuite/protection pour la pièce la plus précieuse
    const priority = threatened[0];
    const escapeMoves = allMoves.filter(mv=>{
      if(mv.piece!==priority) return false;
      if(mv.act!=='move') return false;
      return !wouldBeImmediatelyCaptured(priority,mv.r,mv.c,color);
    });
    if(escapeMoves.length>0){
      // Choisir la fuite qui met le plus loin du danger
      escapeMoves.sort((a,b)=>{
        const da=lookahead1Danger(a.piece,a.r,a.c,color,50);
        const db=lookahead1Danger(b.piece,b.r,b.c,color,50);
        return da-db;
      });
      return escapeMoves[0];
    }
    // Si impossible de fuir : tenter de tuer le menaçant
    const killMoves = allMoves.filter(mv=>{
      if(mv.act!=='kill') return false;
      return cellThreatened(priority.r,priority.c,color) &&
        mv.t && getActions(mv.t).kills.find(k=>k.r===priority.r&&k.c===priority.c);
    });
    if(killMoves.length>0) return killMoves[0];
  }

  const scored=allMoves.map(mv=>{
    let s = scoreMove(mv, color, ctx, personality);
    const{piece,act,r,c}=mv;
    // Pénaliser les coups qui créent un danger T+1 sur une pièce importante
    if(act==='move'||act==='kill'){
      const d1=lookahead1Danger(piece,r,c,color,120);
      if(d1>0) s -= d1*0.4;
    }
    if(act==='move'&&piece.type==='chef'){if(r===LAB.r&&c===LAB.c&&!pieceExposed(piece,r,c,color))s+=20;}
    return{...mv,score:s};
  });
  scored.sort((a,b)=>b.score-a.score);
  return scored[0];
}

function IA_Level3_Move(color){
  const allMoves=getAllMoves(color);if(!allMoves.length)return null;
  const ctx = getGameContext(color);
  const personality = _aiPersonalities[color]||'aggressive';
  const {isFFA,dominantEnemy,weakestEnemy,myRanking,dangerLevel,myCount,aliveColors} = ctx;

  // Phase de jeu
  const myChef = ctx.myChef;
  const queenOnNid = myChef&&myChef.r===LAB.r&&myChef.c===LAB.c;
  let phase='A';
  if(myCount<=5) phase='C';
  else if(queenOnNid||myCount>=6) phase='B';

  const threatCount=(r,c)=>{let n=0;for(const ec of G.order){if(ec===color)continue;if(!G.players[ec].alive)continue;for(const ep of G.players[ec].pieces){if(ep.dead||ep.color!==ec)continue;const a=getActions(ep);if(a.kills.find(k=>k.r===r&&k.c===c))n++;}}return n;};

  // ── PRIORITÉ ABSOLUE : défense par ordre de valeur ──
  // Si une pièce importante est menacée maintenant, on la sauve en priorité
  const threatened = getThreatenedPieces(color, 50);
  if(threatened.length>0){
    const priority = threatened[0]; // pièce la plus précieuse en danger
    // 1. Trouver la meilleure fuite pour cette pièce
    const escapeMoves = allMoves.filter(mv=>
      mv.piece===priority && mv.act==='move' &&
      !wouldBeImmediatelyCaptured(priority,mv.r,mv.c,color)
    );
    if(escapeMoves.length>0){
      // Scorer les fuites : favoriser la case la plus sûre après T+1
      escapeMoves.sort((a,b)=>{
        const da=lookahead1Danger(a.piece,a.r,a.c,color,50);
        const db=lookahead1Danger(b.piece,b.r,b.c,color,50);
        if(da!==db) return da-db;
        // Égalité : préférer la case la plus loin des ennemis
        return threatCount(a.r,a.c)-threatCount(b.r,b.c);
      });
      return escapeMoves[0];
    }
    // 2. Impossible de fuir : tuer le menaçant si possible sans s'exposer
    const killerPieces=[];
    for(const ec of G.order){
      if(ec===color)continue;
      for(const ep of G.players[ec].pieces){
        if(ep.dead||ep.color!==ec)continue;
        const a=getActions(ep);
        if(a.kills.find(k=>k.r===priority.r&&k.c===priority.c)) killerPieces.push(ep);
      }
    }
    const counterKills = allMoves.filter(mv=>
      mv.act==='kill' && killerPieces.includes(mv.t) &&
      !wouldBeImmediatelyCaptured(mv.piece,mv.r,mv.c,color)
    );
    if(counterKills.length>0){
      counterKills.sort((a,b)=>pieceKeepValue(b.t.type)-pieceKeepValue(a.t.type));
      return counterKills[0];
    }
    // 3. Interposer une pièce moins précieuse (bloquer la ligne)
    // (si aucune fuite ni contre-attaque : laisser scorer normalement)
  }

  // ── Reine sur Nid mais vulnérable au T+1 : la faire fuir ──
  if(myChef && queenOnNid){
    const queenDanger = lookahead1Danger(myChef,myChef.r,myChef.c,color,9999);
    if(queenDanger>0){
      // La reine est en danger sur le Nid : chercher une case sûre à proximité
      const queenRetreats = allMoves.filter(mv=>
        mv.piece===myChef && mv.act==='move' &&
        !wouldBeImmediatelyCaptured(myChef,mv.r,mv.c,color) &&
        lookahead1Danger(myChef,mv.r,mv.c,color,9999)===0
      );
      if(queenRetreats.length>0){
        // Préférer rester proche du centre
        queenRetreats.sort((a,b)=>distCenter(a.r,a.c)-distCenter(b.r,b.c));
        return queenRetreats[0];
      }
    }
  }

  const scored=allMoves.map(mv=>{
    let s = scoreMove(mv, color, ctx, personality);
    const{piece,act,r,c,t}=mv;
    const tc = threatCount(r,c);
    const exposed = pieceExposed(piece,r,c,color);

    // ── ÉTAPE 2 : ajustements macro selon contexte FFA ──
    if(isFFA && act==='kill'){
      // Opportuniste : bonus +40 si la cible est le weakest et qu'il reste >2 vivants
      if(weakestEnemy && t.color===weakestEnemy && aliveColors.length>2) s+=40;
      // Ne pas s'exposer pour attaquer le dominant si on est fragile
      if(dominantEnemy && t.color===dominantEnemy && myRanking>=3 && t.type!=='chef') s-=25;
      // Si 2 ennemis sont en train de se battre (tous 2 ont dangerLevel>0), laisser faire
      const theirThreat = ctx.threatScores[t.color]||0;
      const otherThreat = aliveColors.filter(c=>c!==color&&c!==t.color).reduce((mx,c)=>Math.max(mx,ctx.threatScores[c]||0),0);
      if(isFFA && theirThreat<otherThreat*0.5) s+=15; // finir le faible pendant que les forts se battent
    }

    if(isFFA && act==='move'){
      // Défensif en FFA : se replier si danger élevé
      if(dangerLevel>=3 && personality==='defensive'){
        if(myChef){const dist=Math.max(Math.abs(r-myChef.r),Math.abs(c-myChef.c));s+=Math.max(0,3-dist)*10;}
      }
      // Contrôle du tempo : ne pas surexposer si bon classement
      if(myRanking===1 && tc>0) s-=15;
    }

    // Phases A/B/C (inchangées + enrichies)
    if(act==='move'||act==='necro'){
      if(phase==='A'){
        const ic5=(Math.abs(r-4)<=2&&Math.abs(c-4)<=2)?8:0;
        if(ic5>0)s+=ic5*2;
        if(piece.type==='chef'&&r===LAB.r&&c===LAB.c&&!exposed){
          const protectors=G.players[color].pieces.filter(p=>!p.dead&&p.color===color&&p.type!=='chef'&&Math.max(Math.abs(p.r-4),Math.abs(p.c-4))<=2).length;
          if(protectors>=2)s+=80;
        }
      }
      if(phase==='B'){
        if(queenOnNid&&piece.type==='chef')s-=50;
        for(const ec of G.order){if(ec===color)continue;const ch=G.players[ec]&&G.players[ec].pieces.find(p=>p.type==='chef'&&!p.dead);if(ch){const dist=Math.max(Math.abs(r-ch.r),Math.abs(c-ch.c));if(dist<=3)s+=15;}}
      }
      if(phase==='C'){
        if(piece.type==='chef'&&r===LAB.r&&c===LAB.c)s+=60;
        s+=isAdjacentToEnemyPath(r,c,color)?15:0;
      }
    }

    s -= tc*12; // pénalise les cases menacées
    if(act!=='kill'&&exposed){s-=50;if(piece.type==='chef')s-=200;}
    // Lookahead T+1 : pénaliser les coups qui exposent des pièces importantes
    if(act==='move'||act==='kill'){
      const d1=lookahead1Danger(piece,r,c,color,120);
      if(d1>0) s -= d1*0.5;
    }
    return{...mv,score:s};
  });

  scored.sort((a,b)=>b.score-a.score);
  const topN=scored.slice(0,5);
  for(const mv of topN){
    const{act,r,c,piece}=mv;
    if(act==='move'&&piece.type==='chef'){
      if(!cellThreatened(r,c,color)) mv.score+=10;
      // Bonus si la reine quitte une case dangereuse T+1
      if(lookahead1Danger(piece,r,c,color,9999)===0) mv.score+=30;
    }
  }
  topN.sort((a,b)=>b.score-a.score);
  return topN[0];
}

function aiTurn(onDone){if(!G.players[cur()].alive){onDone();return;}showAIT(true);const delay=CONFIG.AI_THINK_MIN+Math.random()*(CONFIG.AI_THINK_MAX-CONFIG.AI_THINK_MIN);setTimeout(()=>{try{runAI(cur(),onDone);}catch(e){console.error('AI error',e);showAIT(false);renderBoard();updateTurnUI();onDone();}},delay);}
function runAI(color,onDone){const pieces=G.players[color].pieces.filter(p=>!p.dead&&p.color===color);if(!pieces.length){showAIT(false);onDone();return;}let best;switch(_aiLevel){case 1:best=IA_Level1_Move(color);break;case 2:best=IA_Level2_Move(color);break;case 3:best=IA_Level3_Move(color);break;default:best=IA_Level2_Move(color);}if(!best){showAIT(false);onDone();return;}execAIMove(best,color,onDone);}

function execReporterNueeAI(reporter,useOrtho){const dirs=useOrtho?DIRS_ORTHO:DIRS_DIAG;const killed=[];for(const[dr,dc]of dirs){const nr=reporter.r+dr,nc=reporter.c+dc;if(!inB(nr,nc))continue;const t=G.board[nr][nc];if(t&&!t.dead&&t.color!==reporter.color){t.dead=true;_gameCaptures++;SAVE.totalCaptures=(SAVE.totalCaptures||0)+1;const pos=getPieceScreenPos(t);if(pos)FX.spawnCapture(pos.x,pos.y,t.color);if(t.type==='chef')elimPlayer(t.color,reporter.color);killed.push(t);}}if(killed.length>0){sfxCapture();boardShake();addLog(`👁️ Nuée IA Niv.${_aiLevel} : ${killed.map(p=>PNAME[p.type]).join(', ')} tué(s)`,'kil');}handleNid(reporter);}

// ════════════════════════════════════════════
// BOARD RENDERING
// ════════════════════════════════════════════
let boardBuilt=false;
function buildBoard(){
  const boardEl=document.getElementById('board');boardEl.innerHTML='';boardBuilt=false;
  const cs=getCellSize(),sz=9*cs;
  boardEl.style.width=sz+'px';boardEl.style.height=sz+'px';
  for(let r=0;r<9;r++)for(let c=0;c<9;c++){
    const cell=document.createElement('div');
    const isLab=(r===LAB.r&&c===LAB.c);
    cell.id=`cell-${r}-${c}`;cell.className='cell '+(isLab?'lab':((r+c)%2===0?'l':'d'));
    cell.style.cssText=`left:${c*cs}px;top:${r*cs}px;width:${cs}px;height:${cs}px`;
    if(isLab){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 100 100');svg.classList.add('labsvg');svg.innerHTML='<circle cx="50" cy="50" r="28" fill="none" stroke="#c9a84c" stroke-width="5"/><line x1="50" y1="22" x2="50" y2="78" stroke="#c9a84c" stroke-width="3"/><line x1="22" y1="50" x2="78" y2="50" stroke="#c9a84c" stroke-width="3"/>';cell.appendChild(svg);}
    cell.addEventListener('click',()=>humanClickCell(r,c));
    boardEl.appendChild(cell);
  }
  const offset=(cs-cs*.84)/2;
  for(const color of G.order)for(const p of G.players[color].pieces){
    const el=document.createElement('div');el.id='p'+p.id;
    el.className=`piece ${p.color}${p.dead?' dead':''}`;
    el.style.cssText=`left:${p.c*cs+offset}px;top:${p.r*cs+offset}px;width:${cs*.84}px;height:${cs*.84}px;font-size:${cs*.5}px`;
    el.innerHTML=`<span class="psym">${SYM[p.type]}</span>`;
    el.addEventListener('click',e=>{e.stopPropagation();humanClickCell(p.r,p.c);});
    boardEl.appendChild(el);
  }
  boardBuilt=true;
}
function renderBoard(){
  if(!boardBuilt)return;
  const cs=getCellSize(),offset=(cs-cs*.84)/2;
  const hl={};
  if(G.sel&&G.phase==='select'){const acts=getActions(G.sel);for(const m of acts.moves)hl[`${m.r},${m.c}`]='vm';for(const k of acts.kills)hl[`${k.r},${k.c}`]='vk';for(const d of acts.diplT)hl[`${d.r},${d.c}`]='vd';for(const n of acts.necroT)hl[`${n.r},${n.c}`]='vnecro';}
  if(G.phase==='reporter-choose'){for(const t of G.repTargets)hl[`${t.r},${t.c}`]=t.ortho?'vrep-o':'vrep-d';}
  if(G.phase==='place-corpse'||G.phase==='place-necro'){for(let r=0;r<9;r++)for(let c=0;c<9;c++){if(!G.board[r][c]&&!(r===LAB.r&&c===LAB.c))hl[`${r},${c}`]='vplace';}}
  if(G.phase==='place-dipl'){for(let r=0;r<9;r++)for(let c=0;c<9;c++){if(!G.board[r][c])hl[`${r},${c}`]='vplace';}}
  for(let r=0;r<9;r++)for(let c=0;c<9;c++){
    const cell=document.getElementById(`cell-${r}-${c}`);if(!cell)continue;
    const isLab=(r===LAB.r&&c===LAB.c);
    const base=isLab?'lab':((r+c)%2===0?'l':'d');
    const hcls=hl[`${r},${c}`]||'';
    const selcls=(G.sel&&G.sel.r===r&&G.sel.c===c&&G.phase==='select')?'sc':'';
    cell.className=`cell ${base} ${hcls} ${selcls}`;
  }
  const allPieces=[];
  for(const color of G.order)for(const p of G.players[color].pieces)allPieces.push(p);
  for(const color in G.players){if(G.players[color].alive)continue;for(const p of G.players[color].pieces)if(!allPieces.includes(p))allPieces.push(p);}
  for(const p of allPieces){
    const el=document.getElementById('p'+p.id);if(!el)continue;
    const onBoard=inB(p.r,p.c);el.style.display=onBoard?'flex':'none';if(!onBoard)continue;
    if(!el.classList.contains('moving')){el.style.left=(p.c*cs+offset)+'px';el.style.top=(p.r*cs+offset)+'px';}
    const isSel=G.sel&&G.sel.id===p.id;
    el.className=`piece ${p.color}${p.dead?' dead':''}${isSel?' selp':''}`;
  }
  renderPlayers();
}
function renderPlayers(){
  const pp=document.getElementById('pp');pp.innerHTML='';
  for(const color of G.order){
    const pl=G.players[color];if(!pl)continue;
    const card=document.createElement('div');
    card.className=`pcard${!pl.alive?' elim':''}`;
    card.style.setProperty('--pc',CCSS[color]);card.style.setProperty('--pg',CGLOW[color]);
    if(cur()===color&&pl.alive)card.classList.add('ap');
    const myPieces=pl.pieces.filter(p=>p.color===color);
    const tag=pl.human?'— Vous':`— IA Niv.${_aiLevel}`;
    card.innerHTML=`<div class="pch"><div class="pdot"></div><div class="pname">${CNAME[color].toUpperCase()}</div><div class="ptag">${tag}</div></div><div class="ppieces">${myPieces.map(p=>`<span class="${p.dead?'ppid':'ppi'}" title="${PNAME[p.type]}">${SYM[p.type]}</span>`).join('')}</div>`;
    pp.appendChild(card);
  }
}
function updateTurnUI(){
  const color=cur();
  document.getElementById('tdot').style.background=CCSS[color];
  document.getElementById('tdot').style.boxShadow=`0 0 10px ${CCSS[color]}`;
  document.getElementById('tban').style.borderColor=CCSS[color]+'55';
  document.getElementById('tban').style.boxShadow=`0 0 14px ${CGLOW[color]}`;
  const t=document.getElementById('ttxt');
  t.textContent=`Tour de ${CNAME[color]}${G.players[color].human?' (Vous)':' (IA)'}`;
  t.style.color=CCSS[color];
  // Phase message — overlay au-dessus du board, ne décale rien
  const phases={'select':'','place-corpse':'💀 Déposez le cadavre sur une case libre','place-dipl':'🐞 Replacez la pièce sur une case vide','place-necro':'🪲 Déposez le cadavre sur une case libre','reporter-choose':'👁️ Choisissez la direction de la nuée'};
  const msg=phases[G.phase]||'';
  const pm=document.getElementById('phase-msg');
  if(pm){
    pm.textContent=msg;
    pm.classList.toggle('visible',!!msg);
    // positionner juste au-dessus du board
    const bw=document.querySelector('.bwrap');
    if(bw){
      const r=bw.getBoundingClientRect();
      pm.style.top=(r.top-4)+'px';
    }
  }
}
function updatePieceInfo(piece){
  document.getElementById('pi').innerHTML=`<div class="pii">${SYM[piece.type]}</div><div><div class="pin" style="color:${CCSS[piece.color]}">${PNAME[piece.type]}</div><div class="pid">${PDESC[piece.type]}</div></div>`;
  document.getElementById('pi').style.borderColor=CCSS[piece.color]+'55';
  document.getElementById('pi').style.boxShadow=`0 0 10px ${CGLOW[piece.color]}`;
}

// ════════════════════════════════════════════
// LOG & TOAST & AI INDICATOR
// ════════════════════════════════════════════
function addLog(msg,type=''){const log=document.getElementById('log');if(!log)return;const e=document.createElement('div');e.className=`le ${type}`;e.textContent=msg;log.appendChild(e);log.scrollTop=log.scrollHeight;}
let _toastTimer;
function toast(msg){document.querySelectorAll('.toast').forEach(e=>e.remove());clearTimeout(_toastTimer);const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);_toastTimer=setTimeout(()=>t.remove(),2800);}
function showAIT(show){const ex=document.getElementById('ait');if(show&&!ex){const el=document.createElement('div');el.id='ait';el.className='ait';el.innerHTML=`<div class="td2"></div><div class="td2"></div><div class="td2"></div><span>Colonie IA Niv.${_aiLevel} réfléchit…</span>`;document.body.appendChild(el);}else if(!show&&ex){ex.remove();}}

// Init
selMode(1);selCol('yellow');selAILevel(1);
</script>




</body>
</html>
