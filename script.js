
/* ============ MOUVEMENT (dos, animé) ============ */
function polar(cx,cy,r,deg){const a=(deg-90)*Math.PI/180;return[cx+r*Math.cos(a),cy+r*Math.sin(a)];}
function movementSVG(){
  const cx=220,cy=220;
  const bx=150,by=286,BR=52;
  let hair='M';
  for(let i=0;i<=140;i++){const t=i/140;const ang=t*3.3*2*Math.PI;const x=bx+(5+(BR-12)*t)*Math.cos(ang);const y=by+(5+(BR-12)*t)*Math.sin(ang);hair+=(i?' L':'')+x.toFixed(1)+' '+y.toFixed(1);}
  let bscrews='';for(let i=0;i<8;i++){const p=polar(bx,by,BR,i*45);bscrews+=`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4" fill="#d0d4d9" stroke="#6f757c" stroke-width="1"/>`;}
  let bspokes='';for(let i=0;i<3;i++){const p=polar(bx,by,BR-6,i*120);bspokes+=`<line x1="${bx}" y1="${by}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="#aab0b7" stroke-width="4"/>`;}
  const rIn=118,rOut=196,a0=200,a1=380;
  const o1=polar(cx,cy,rOut,a0),o2=polar(cx,cy,rOut,a1),i1=polar(cx,cy,rIn,a1),i2=polar(cx,cy,rIn,a0);
  const rotorPath=`M${o1[0].toFixed(1)} ${o1[1].toFixed(1)} A${rOut} ${rOut} 0 1 1 ${o2[0].toFixed(1)} ${o2[1].toFixed(1)} L${i1[0].toFixed(1)} ${i1[1].toFixed(1)} A${rIn} ${rIn} 0 1 0 ${i2[0].toFixed(1)} ${i2[1].toFixed(1)} Z`;
  let notch='';for(let i=0;i<120;i++){const a=polar(cx,cy,214,i*3),b=polar(cx,cy,208,i*3);notch+=`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="#aab0b7" stroke-width="1" opacity=".5"/>`;}
  const jewels=[[250,175],[276,232],[196,168],[300,286],[168,150],[232,120]];
  let jew='';jewels.forEach(j=>{jew+=`<circle cx="${j[0]}" cy="${j[1]}" r="6.5" fill="#b11e2f"/><circle cx="${j[0]}" cy="${j[1]}" r="6.5" fill="none" stroke="#7d1420" stroke-width="1"/><circle cx="${j[0]-2}" cy="${j[1]-2}" r="1.8" fill="#e8677a"/>`;});
  const bscr=[[300,150],[135,205],[315,330],[110,300]];
  let bsc='';bscr.forEach(s=>{bsc+=`<circle cx="${s[0]}" cy="${s[1]}" r="7" fill="#3a4a7a"/><circle cx="${s[0]}" cy="${s[1]}" r="7" fill="none" stroke="#22305e" stroke-width="1"/><rect x="${s[0]-6}" y="${s[1]-1}" width="12" height="2" fill="#1a2547"/>`;});
  let gears='';[[276,232,20],[196,168,16]].forEach(g=>{let teeth='';for(let i=0;i<28;i++){const p=polar(g[0],g[1],g[2],i*(360/28));teeth+=`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="1.4" fill="#9aa0a8"/>`;}gears+=`<circle cx="${g[0]}" cy="${g[1]}" r="${g[2]}" fill="none" stroke="#9aa0a8" stroke-width="1.5" opacity=".8"/>${teeth}`;});

  return `<svg viewBox="0 0 440 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mouvement automatique vu de dos, balancier en oscillation">
  <defs>
    <radialGradient id="plate" cx="42%" cy="36%" r="78%"><stop offset="0%" stop-color="#eef1f4"/><stop offset="55%" stop-color="#cdd1d6"/><stop offset="100%" stop-color="#a7adb4"/></radialGradient>
    <radialGradient id="cbrim" cx="40%" cy="34%" r="80%"><stop offset="0%" stop-color="#eef1f4"/><stop offset="55%" stop-color="#c0c5cb"/><stop offset="100%" stop-color="#878d95"/></radialGradient>
    <linearGradient id="rotor" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6f757c"/><stop offset="45%" stop-color="#a7adb4"/><stop offset="100%" stop-color="#565c63"/></linearGradient>
    <pattern id="cotes" width="12" height="12" patternTransform="rotate(34)" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#d6dade"/><rect width="5" height="12" fill="#c3c8ce"/></pattern>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,.35)"/><stop offset="40%" stop-color="rgba(255,255,255,0)"/></linearGradient>
    <path id="rimtext" d="M220,220 m-192,0 a192,192 0 1,1 384,0 a192,192 0 1,1 -384,0" fill="none"/>
    
  </defs>

  <circle cx="${cx}" cy="${cy}" r="216" fill="url(#cbrim)"/>
  ${notch}
  <circle cx="${cx}" cy="${cy}" r="205" fill="#e9ecef"/>
  <circle cx="${cx}" cy="${cy}" r="201" fill="none" stroke="#0F7048" stroke-width="3" opacity=".85"/>
  <text font-family="Jost,sans-serif" font-size="11" letter-spacing="4" fill="#0F7048"><textPath href="#rimtext" startOffset="0%">✦ VELIOR ✦ GENÈVE ✦ AUTOMATIQUE ✦ ACIER 904L ✦ VERRE SAPHIR ✦ SÉRIE LIMITÉE ✦</textPath></text>

  <circle cx="${cx}" cy="${cy}" r="196" fill="url(#plate)"/>
  <circle cx="${cx}" cy="${cy}" r="196" fill="none" stroke="rgba(120,95,40,.35)" stroke-width="1"/>
  <circle cx="${cx}" cy="${cy}" r="150" fill="none" stroke="rgba(120,95,40,.14)" stroke-width="1"/>
  <circle cx="${cx}" cy="${cy}" r="96" fill="none" stroke="rgba(120,95,40,.12)" stroke-width="1"/>

  <path d="M240 120 Q330 150 322 250 Q315 320 250 322 Q300 240 260 175 Q250 140 240 120 Z" fill="url(#cotes)" stroke="rgba(120,95,40,.3)" stroke-width="1"/>
  <path d="M120 210 Q150 150 210 160 Q180 210 200 265 Q150 290 128 255 Q112 232 120 210 Z" fill="url(#cotes)" stroke="rgba(120,95,40,.3)" stroke-width="1"/>

  ${gears}
  ${jew}
  ${bsc}

  <g class="vh-rotor">
    <path d="${rotorPath}" fill="url(#rotor)" stroke="#4a4f55" stroke-width="1.5"/>
    <text font-family="Jost,sans-serif" font-size="13" letter-spacing="5" font-weight="500" fill="#eef1f4"><textPath href="#rimtext" startOffset="18%">VELIOR · GENÈVE · AUTOMATIQUE</textPath></text>
    <circle cx="${cx}" cy="${cy}" r="16" fill="url(#cbrim)" stroke="#4a4f55" stroke-width="1.5"/>
    <circle cx="${cx}" cy="${cy}" r="5" fill="#565c63"/>
  </g>

  <path d="M96 214 Q118 250 150 262 L150 240 Q124 232 108 210 Z" fill="url(#plate)" stroke="rgba(120,95,40,.4)" stroke-width="1"/>
  <circle cx="108" cy="212" r="6.5" fill="#3a4a7a" stroke="#22305e" stroke-width="1"/>

  <g class="vh-bal">
    <path d="${hair}" fill="none" stroke="#6f757c" stroke-width="1" opacity=".85"/>
    ${bspokes}
    <circle cx="${bx}" cy="${by}" r="${BR}" fill="none" stroke="#a7adb4" stroke-width="7"/>
    <circle cx="${bx}" cy="${by}" r="${BR}" fill="none" stroke="#6f757c" stroke-width="1"/>
    ${bscrews}
    <circle cx="${bx}" cy="${by}" r="9" fill="#aab0b7" stroke="#565c63" stroke-width="1.5"/>
    <circle cx="${bx}" cy="${by}" r="4" fill="#b11e2f"/>
  </g>
  <circle cx="${bx}" cy="${by}" r="3" fill="#7d1420"/>

  <circle cx="${cx}" cy="${cy}" r="205" fill="url(#glass)" style="pointer-events:none"/>
</svg>`;
}
/* ====== MOUVEMENT EN HAUT (bannière pleine largeur) ======
   Bannière horizontale plein écran, en boucle, cadrée sur le balancier.
   Pour une VRAIE vidéo (balancier qui bouge) : mettez son URL mp4/webm dans MOVEMENT_MEDIA. */
const MOVEMENT_MEDIA='images/mouvement.mp4';   // ← vidéo intégrée (prioritaire)
const MOVEMENT_PHOTO='images/mouvement.jpg';   // ← image intégrée
(function(){
  const box=document.getElementById('mvt');
  const src=MOVEMENT_MEDIA||MOVEMENT_PHOTO;
  if(src && src.indexOf('%%')===-1){
    const isVideo=/^data:video\//i.test(src)||/\.(mp4|webm|mov)(\?|$)/i.test(src);
    const media=isVideo
      ? `<video src="${src}" muted autoplay loop playsinline webkit-playsinline preload="auto" disablepictureinpicture></video>`
      : `<img class="mvthero__anim" src="${src}" alt="Mouvement mécanique">`;
    box.innerHTML=`<div class="mvthero">${media}<span class="mvthero__glint"></span><span class="mvthero__vig"></span></div>`;
    const v=box.querySelector('video');
    if(v){ v.muted=true; v.defaultMuted=true; v.setAttribute('muted',''); v.playsInline=true;
      const go=()=>{ v.muted=true; const p=v.play(); if(p&&p.catch) p.catch(()=>{}); };
      go(); v.addEventListener('loadeddata',go); v.addEventListener('canplay',go);
      let tries=0; const iv=setInterval(()=>{ go(); if(++tries>12||!v.paused) clearInterval(iv); },300);
      ['click','touchstart','scroll','keydown','mousemove','pointerdown'].forEach(ev=>document.addEventListener(ev,go,{once:true,passive:true})); }
  } else {
    box.innerHTML=movementSVG();
  }
})();

/* ============ 14 MODÈLES ============ */
/* ============================================================
   PHOTOS — À REMPLIR PAR VOUS
   • Photo d'un MODÈLE (vignette du carrousel) : champ img:'URL' ci-dessous
   • Photo d'une VERSION précise (page modèle, best-seller, panier) :
       IMAGES['idmodele__cle'] = 'URL'   (clés de version : onyx, marine, foret, givre, sable, ardoise)
   • Photo d'un ACCESSOIRE : champ img:'URL' dans ACCESSORIES
   Laisser vide ('') affiche le visuel provisoire.
   ============================================================ */
const MODELS=[
  {id:'daytona', name:'Daytona', tag:'Chronographe', price:210, mvt:'Quartz (pile)', img:''},
  {id:'gmt', name:'GMT Master II', tag:'Double fuseau', price:245, img:''},
  {id:'datejust', name:'Datejust', tag:'Classique', price:210, img:''},
  {id:'daydate', name:'Day-Date', tag:'Jour & date', price:210, img:''},
  {id:'submariner', name:'Submariner', tag:'Plongée', price:210, img:''},
  {id:'landdweller', name:'Land-Dweller / Sky-Dweller', tag:'Sport-chic', price:230, img:''},
  {id:'santos', name:'Santos', tag:'Carré iconique', price:210, img:''},
  {id:'aquanaut', name:'Aquanaut', tag:'Sportive', price:210, img:''},
  {id:'nautilus', name:'Nautilus', tag:'Silhouette marine', price:210, img:''},
  {id:'royaloak', name:'Royal Oak', tag:'Octogone', price:210, img:''},
  {id:'speedmaster', name:'Speedmaster / Seamaster', tag:'Chronographe · Plongée', price:230, mvt:'Quartz (pile)', img:''},
  {id:'rm', name:'RM', tag:'Squelette', price:265, img:''},
  {id:'gshock', name:'G-Shock', tag:'Baroudeuse', price:265, mvt:'Quartz (pile)', img:''},
  {id:'oysterperpetual', name:'Oyster Perpetual', tag:'Épurée', price:210, img:''},
  {id:'oysterfemme', name:'Modèle Femme', tag:'Femme · 34 mm', price:210, img:''},
];
/* Pack Duo — section dédiée entre modèles et best-sellers (hors carrousel) */
const DUO={ id:'duo', name:'Pack Duo — Homme & Femme', tag:'Homme & Femme', price:380, orig:420, img:'' };
/* Descriptions & sous-titres par modèle (fiche produit) */
const DESCRIPTIONS={
  santos:{sub:"L'élégance iconique",txt:"La Santos incarne l'élégance intemporelle et le savoir-faire horloger. Son boîtier aux lignes distinctives, associé à son cadran raffiné et son bracelet intégré, lui confère une présence unique au poignet. Une pièce emblématique, pensée pour celles et ceux qui recherchent un style à la fois luxueux et sophistiqué."},
  santosskeleton:{sub:"L'horlogerie à cœur ouvert",txt:"La Santos Skeleton dévoile toute la beauté de son mouvement à travers un cadran ajouré. Son design architectural et ses finitions raffinées offrent un équilibre parfait entre modernité et tradition horlogère. Une pièce spectaculaire qui attire immédiatement le regard."},
  datejust:{sub:"L'intemporelle",txt:"Symbole d'élégance et de précision, la Datejust se distingue par son cadran raffiné, son affichage de la date et ses lignes parfaitement équilibrées. Une montre polyvalente qui s'adapte aussi bien aux grandes occasions qu'au quotidien."},
  daydate:{sub:"Le prestige au poignet",txt:"La Day-Date incarne le luxe et le prestige horloger. Son cadran sophistiqué, son affichage du jour et de la date ainsi que son bracelet emblématique lui donnent une allure particulièrement élégante. Une pièce conçue pour imposer son style avec discrétion."},
  nautilus:{sub:"L'élégance sportive",txt:"Avec sa silhouette immédiatement reconnaissable, la Nautilus associe sophistication et esprit sportif. Ses lignes fluides, son boîtier travaillé et son bracelet intégré créent une esthétique moderne et luxueuse. Une véritable référence de l'horlogerie contemporaine."},
  arabic:{sub:"Un cadran d'exception",txt:"Le cadran Arabic Dial apporte une touche unique et sophistiquée à cette pièce horlogère. Ses chiffres arabes apportent caractère et originalité, tandis que ses finitions soignées soulignent son allure luxueuse. Une montre idéale pour ceux qui recherchent une pièce différente et remarquable."},
  submariner:{sub:"L'icône sportive",txt:"Pensée pour les amateurs de montres au caractère affirmé, la Submariner associe robustesse, précision et élégance. Son design sportif et son allure intemporelle en font une pièce aussi adaptée à l'aventure qu'au quotidien."},
  gmt:{sub:"L'esprit voyageur",txt:"La GMT est pensée pour accompagner les voyageurs au quotidien. Son affichage d'un second fuseau horaire apporte une fonctionnalité particulièrement appréciée, tandis que son design emblématique lui confère une allure sportive et sophistiquée."},
  oysterperpetual:{sub:"L'essentiel du luxe",txt:"Avec son design épuré et intemporel, l'Oyster Perpetual mise sur la simplicité et l'élégance. Une montre polyvalente, facile à porter au quotidien, qui séduit par ses lignes équilibrées et son caractère iconique."},
  royaloak:{sub:"L'icône octogonale",txt:"Reconnaissable entre toutes, la Royal Oak se distingue par son célèbre boîtier octogonal, son cadran travaillé et son bracelet intégré. Une alliance parfaite entre architecture, sport-chic et haute horlogerie."},
  daytona:{sub:"L'adrénaline horlogère",txt:"Inspirée de l'univers automobile, la Daytona affiche une allure sportive et racée. Son design chronographe, ses compteurs et ses lignes dynamiques en font une pièce incontournable pour les passionnés de vitesse et d'horlogerie."},
  gshock:{sub:"L'attitude urbaine",txt:"Conçue pour accompagner tous les défis du quotidien, la G-Shock associe robustesse, caractère et style contemporain. Son design affirmé et sa construction résistante en font une montre idéale pour un look sportif et urbain."},
  landdweller:{sub:"L'innovation horlogère",txt:"La Land-Dweller associe une esthétique moderne à une approche innovante de l'horlogerie. Ses lignes contemporaines, son bracelet intégré et ses finitions sophistiquées lui offrent une présence remarquable au poignet."},
  skydweller:{sub:"Le luxe des grands voyageurs",txt:"La Sky-Dweller combine élégance, sophistication et fonctionnalités pensées pour les voyageurs. Son affichage de plusieurs informations essentielles et son design raffiné en font une pièce aussi technique que prestigieuse."},
  speedmaster:{sub:"La légende chronographe",txt:"La Speedmaster est une véritable référence dans l'univers des chronographes. Son design inspiré de la course automobile, son cadran caractéristique et son héritage sportif lui confèrent une identité unique. Une montre chargée d'histoire et de caractère."},
  rm:{sub:"L'excellence avant-gardiste",txt:"RM repousse les limites de l'horlogerie traditionnelle avec des designs spectaculaires et des matériaux de pointe. Son architecture complexe et son esthétique ultra-moderne en font une pièce immédiatement reconnaissable, destinée aux amateurs d'horlogerie d'exception."},
  aquanaut:{sub:"L'esprit nautique",txt:"Sportive et décontractée, l'Aquanaut mêle lignes fluides et caractère marqué. Son bracelet souple et son cadran texturé en font une compagne idéale, du bord de mer à la ville."},
  oysterfemme:{sub:"L'élégance au féminin",txt:"Pensé pour le poignet féminin, le Modèle Femme allie finesse et raffinement. Boîtier 34 mm, cadran délicat et finitions soignées : une pièce élégante à porter au quotidien comme aux grandes occasions."},
  seamaster:{sub:"L'appel du large",txt:"La Seamaster respire l'esprit marin : lignes nettes, lisibilité parfaite et caractère sportif. Une compagne robuste, aussi à l'aise en ville qu'au bord de l'eau."},
  duo:{sub:"Pour elle & pour lui",txt:"Deux montres assorties, une pour elle et une pour lui, réunies dans un coffret. Le cadeau parfait pour les couples — même esprit d'atelier, deux poignets. Offre de lancement : 420 € 380 €."},
};
/* Tailles proposées (fiche produit) */
const SIZES={ datejust:['36','39'], daydate:['36','39'] };
/* Écrins proposés (option dans le panier) */
const BOXES=[ {key:'duo', name:'Boîte Duo', cap:'2 montres', price:35}, {key:'coffret3', name:'Coffret Trio', cap:'3 montres', price:45}, {key:'coffret6', name:'Coffret x6', cap:'6 montres', price:65} ];
/* ===== Promo de lancement : -15% sur toutes les montres pendant 3 semaines =====
   Mettre active:false pour désactiver après la période. */
const PROMO={ active:true, rate:0.15 };
function promoPrice(p){ return PROMO.active ? Math.round(p*(1-PROMO.rate)) : p; }
/* HTML d'un prix montre (barré + promo si active) */
function priceTag(p){
  return PROMO.active
    ? `<span class="was">${p} €</span> <span class="now">${promoPrice(p)} €</span>`
    : `${p} €`;
}
/* HTML d'un prix "pack" (barré manuel orig -> price), sans promo -15% */
function packTag(price,orig){ return `<span class="was">${orig} €</span> <span class="now">${price} €</span>`; }
/* Angles affichés sur la fiche produit (dans l'ordre) */
const ANGLES=['Face'];
/* Photos par version précise : un tableau d'URL dans l'ordre des ANGLES.
   Ex : IMAGES['submariner__marine']=['url-face','url-gauche','url-droite','url-dos']; */
const IMAGES={
  // 'submariner__marine':['https://…/face.jpg','https://…/gauche.jpg','https://…/droite.jpg','https://…/dos.jpg'],
};
function baseId(pid){ const p=(pid||'').split('__'); return p[0]+'__'+(p[1]||''); }
function galleryFor(pid){
  const arr=IMAGES[baseId(pid)]||[];
  const mid=(pid||'').split('__')[0];
  const m=MODELS.find(x=>x.id===mid);
  return ANGLES.map((label,i)=>({label, url: arr[i] || (i===0 && m && m.img ? m.img : '')}));
}
function imgFor(pid){ const p=(pid||'').split('__'); if(p[0]==='box') return ''; if(p[0]==='duo') return p[1]?imgFor('datejust__'+p[1]):''; const g=galleryFor(pid); const f=g.find(s=>s.url); return f?f.url:''; }

/* Variantes propres à un modèle (avec vraies photos). Si absent → variantes génériques. */
const MODEL_VARIANTS={"datejust": [{"key": "v1", "label": "Wimbledon", "price": 210, "color": "#3d4045"}, {"key": "v9", "label": "Rose · Arabe", "price": 210, "color": "#ecb0c4"}, {"key": "v6", "label": "Full Black · Arabe or", "price": 210, "color": "#1a1a16"}, {"key": "v14", "label": "Or · Champagne", "price": 210, "color": "#d9c07a"}, {"key": "v24", "label": "Who Cares · Rouge", "price": 210, "color": "#d21f1f"}, {"key": "v13", "label": "Rouge coquelicot", "price": 210, "color": "#c8402f"}, {"key": "v17", "label": "Vert", "price": 210, "color": "#1f6b3a"}, {"key": "v3", "label": "Aubergine", "price": 210, "color": "#5a2350"}, {"key": "v12", "label": "Bleu givré", "price": 210, "color": "#bfe6e6"}, {"key": "v11", "label": "Or rose · Chocolat", "price": 210, "color": "#5a3b2c"}, {"key": "v18", "label": "Nacre · Diamants", "price": 210, "color": "#ece8ee"}, {"key": "v2", "label": "Ardoise · Bâtons", "price": 210, "color": "#3d4045"}, {"key": "v25", "label": "Who Cares · Or", "price": 210, "color": "#cfa53a"}, {"key": "v15", "label": "Turquoise · Arabe", "price": 210, "color": "#86d3ce"}, {"key": "v10", "label": "Noir · Bâtons", "price": 210, "color": "#101012"}, {"key": "v8", "label": "Acier & or · Romains", "price": 210, "color": "#ece9e0"}, {"key": "v21", "label": "Vert · President", "price": 210, "color": "#2f5e3a"}, {"key": "v7", "label": "Argent · Romains", "price": 210, "color": "#cfcfce"}, {"key": "v19", "label": "Acier & or rose · Olive", "price": 210, "color": "#5f6b3a"}, {"key": "v20", "label": "Arabe · Blanc 200 m", "price": 210, "color": "#eae7de"}, {"key": "v23", "label": "Arabe · Noir 200 m", "price": 210, "color": "#141410"}, {"key": "v26", "label": "Who Cares · Noir", "price": 210, "color": "#1a1a1a"}, {"key": "v22", "label": "Bleu roi · President", "price": 210, "color": "#1b3b6b"}, {"key": "v16", "label": "Acier & or rose · Diamants", "price": 210, "color": "#dfe0e2"}], "oysterfemme": [{"key": "fv2", "label": "Rose · Plongeuse", "price": 210, "color": "#f4b8cf"}, {"key": "fv1", "label": "Blanc", "price": 210, "color": "#eef0f2"}, {"key": "fv5", "label": "Or rose · Noir diamants", "price": 210, "color": "#141410"}, {"key": "fv6", "label": "Or · Nacre diamants", "price": 210, "color": "#efe7d6"}, {"key": "fv3", "label": "Rose", "price": 210, "color": "#f2a9c2"}, {"key": "fv8", "label": "Acier & or · Diamants", "price": 210, "color": "#e9e4d2"}, {"key": "fv4", "label": "Acier & or rose · Diamants", "price": 210, "color": "#dfe0e2"}, {"key": "fv7", "label": "Blanc · Diamants", "price": 210, "color": "#eef0f2"}], "oysterperpetual": [{"key": "op1", "label": "Turquoise · Lisse", "price": 210, "color": "#86d3ce"}, {"key": "op2", "label": "Arabe · Rouge", "price": 210, "color": "#9e1b22"}], "santos": [{"key": "s1", "label": "Full Black · Squelette", "price": 230, "color": "#14140f"}, {"key": "s16", "label": "Blanc · Romains", "price": 210, "color": "#eef0f2"}, {"key": "s2", "label": "Bleu · Arabe (cuir)", "price": 210, "color": "#1b3b6b"}, {"key": "s5", "label": "Or rose · Chocolat", "price": 230, "color": "#5a3b2c"}, {"key": "s6", "label": "Graffiti · Time is Money", "price": 210, "color": "#d21f1f"}, {"key": "s7", "label": "Vert · Romains", "price": 210, "color": "#1f6b3a"}, {"key": "s9", "label": "Full Black · Romains", "price": 210, "color": "#14140f"}, {"key": "s4", "label": "Acier & or · Romains", "price": 230, "color": "#ece9e0"}, {"key": "s3", "label": "Vert · Arabe (cuir)", "price": 210, "color": "#1f6b3a"}, {"key": "s10", "label": "Chocolat · Romains (cuir)", "price": 210, "color": "#5a3b2c"}, {"key": "s13", "label": "Blanc · Romains (cuir blanc)", "price": 210, "color": "#eef0f2"}, {"key": "s15", "label": "Bleu · Romains", "price": 210, "color": "#1b3b6b"}, {"key": "s8", "label": "Argent · Squelette", "price": 230, "color": "#cfcfce"}, {"key": "s12", "label": "Blanc · Romains (cuir bleu)", "price": 210, "color": "#1b3b6b"}, {"key": "s14", "label": "Or rose · Squelette", "price": 230, "color": "#b87333"}, {"key": "s11", "label": "Graffiti · Fuck 9-5", "price": 210, "color": "#d21f1f"}], "gshock": [{"key": "g1", "label": "Acier · Bracelet vert", "price": 265, "color": "#cfcfce"}, {"key": "g2", "label": "Carbone · Vert militaire", "price": 265, "color": "#1f6b3a"}, {"key": "g6", "label": "Carbone · Orange", "price": 265, "color": "#e07b1f"}, {"key": "g5", "label": "Noir · Rouge", "price": 265, "color": "#c8202a"}, {"key": "g3", "label": "Frosted · Or rose", "price": 265, "color": "#d9d9de"}, {"key": "g7", "label": "Blanc · Turquoise", "price": 265, "color": "#7fd4d0"}, {"key": "g4", "label": "Carbone · Noir", "price": 265, "color": "#1a1a16"}], "rm": [{"key": "r4", "label": "Or rose · Squelette", "price": 265, "color": "#b87333"}, {"key": "r1", "label": "Céramique · Bracelet blanc", "price": 265, "color": "#14140f"}, {"key": "r3", "label": "Noir · Cadran blanc", "price": 265, "color": "#e9e9ec"}, {"key": "r2", "label": "Titane · Bracelet rouge", "price": 265, "color": "#7a7a80"}, {"key": "r5", "label": "Carbone · Full black", "price": 265, "color": "#1a1a16"}], "nautilus": [{"key": "n1", "label": "Noir · Arabe", "price": 210, "color": "#14140f"}], "submariner": [{"key": "sub1", "label": "Cosmos · Terre", "price": 210, "color": "#14181f"}], "daytona": [{"key": "d1", "label": "Rainbow Pink", "price": 220, "color": "#d21f6f"}]};
const PHOTO_IMAGES={"datejust__v1": ["images/datejust__v1.jpg"], "datejust__v9": ["images/datejust__v9.jpg"], "datejust__v6": ["images/datejust__v6.jpg"], "datejust__v14": ["images/datejust__v14.jpg"], "datejust__v24": ["images/datejust__v24.jpg"], "datejust__v13": ["images/datejust__v13.jpg"], "datejust__v17": ["images/datejust__v17.jpg"], "datejust__v3": ["images/datejust__v3.jpg"], "datejust__v12": ["images/datejust__v12.jpg"], "datejust__v11": ["images/datejust__v11.jpg"], "datejust__v18": ["images/datejust__v18.jpg"], "datejust__v2": ["images/datejust__v2.jpg"], "datejust__v25": ["images/datejust__v25.jpg"], "datejust__v15": ["images/datejust__v15.jpg"], "datejust__v10": ["images/datejust__v10.jpg"], "datejust__v8": ["images/datejust__v8.jpg"], "datejust__v21": ["images/datejust__v21.jpg"], "datejust__v7": ["images/datejust__v7.jpg"], "datejust__v19": ["images/datejust__v19.jpg"], "datejust__v20": ["images/datejust__v20.jpg"], "datejust__v23": ["images/datejust__v23.jpg"], "datejust__v26": ["images/datejust__v26.jpg"], "datejust__v22": ["images/datejust__v22.jpg"], "datejust__v16": ["images/datejust__v16.jpg"], "oysterfemme__fv2": ["images/oysterfemme__fv2.jpg"], "oysterfemme__fv1": ["images/oysterfemme__fv1.jpg"], "oysterfemme__fv5": ["images/oysterfemme__fv5.jpg"], "oysterfemme__fv6": ["images/oysterfemme__fv6.jpg"], "oysterfemme__fv3": ["images/oysterfemme__fv3.jpg"], "oysterfemme__fv8": ["images/oysterfemme__fv8.jpg"], "oysterfemme__fv4": ["images/oysterfemme__fv4.jpg"], "oysterfemme__fv7": ["images/oysterfemme__fv7.jpg"], "oysterperpetual__op1": ["images/oysterperpetual__op1.jpg"], "oysterperpetual__op2": ["images/oysterperpetual__op2.jpg"], "santos__s1": ["images/santos__s1.jpg"], "santos__s16": ["images/santos__s16.jpg"], "santos__s2": ["images/santos__s2.jpg"], "santos__s5": ["images/santos__s5.jpg"], "santos__s6": ["images/santos__s6.jpg"], "santos__s7": ["images/santos__s7.jpg"], "santos__s9": ["images/santos__s9.jpg"], "santos__s4": ["images/santos__s4.jpg"], "santos__s3": ["images/santos__s3.jpg"], "santos__s10": ["images/santos__s10.jpg"], "santos__s13": ["images/santos__s13.jpg"], "santos__s15": ["images/santos__s15.jpg"], "santos__s8": ["images/santos__s8.jpg"], "santos__s12": ["images/santos__s12.jpg"], "santos__s14": ["images/santos__s14.jpg"], "santos__s11": ["images/santos__s11.jpg"], "gshock__g1": ["images/gshock__g1.jpg"], "gshock__g2": ["images/gshock__g2.jpg"], "gshock__g6": ["images/gshock__g6.jpg"], "gshock__g5": ["images/gshock__g5.jpg"], "gshock__g3": ["images/gshock__g3.jpg"], "gshock__g7": ["images/gshock__g7.jpg"], "gshock__g4": ["images/gshock__g4.jpg"], "rm__r4": ["images/rm__r4.jpg"], "rm__r1": ["images/rm__r1.jpg"], "rm__r3": ["images/rm__r3.jpg"], "rm__r2": ["images/rm__r2.jpg"], "rm__r5": ["images/rm__r5.jpg"], "nautilus__n1": ["images/nautilus__n1.jpg"], "submariner__sub1": ["images/submariner__sub1.jpg"], "daytona__d1": ["images/daytona__d1.jpg"]};
Object.assign(IMAGES, PHOTO_IMAGES);
(function(){ Object.keys(MODEL_VARIANTS).forEach(mid=>{ const m=MODELS.find(x=>x.id===mid); const v0=MODEL_VARIANTS[mid]&&MODEL_VARIANTS[mid][0]; if(m&&v0&&IMAGES[mid+'__'+v0.key]) m.img=IMAGES[mid+'__'+v0.key][0]; }); })();
function variantsFor(mid){ return MODEL_VARIANTS[mid] || VARIANTS; }
function priceOf(m,v){ return (v && v.price!=null) ? v.price : m.price+((v&&v.delta)||0); }
/* ============ CARROUSEL MODÈLES (coverflow) ============ */
const stage=document.getElementById('stage');
const ccards=[];
let cur=0;
const N=MODELS.length;
MODELS.forEach((m,i)=>{
  const el=document.createElement('article');
  el.className='ccard';
  const imgStyle=m.img?`style="background-image:url('${m.img}')"`:'';
  const hasImg=m.img?'has-img':'';
  el.innerHTML=`<div class="ccard__frame">
    <div class="ccard__img">${m.img?`<span class="ccard__shot" ${imgStyle}></span>`:''}</div>
    <div class="ccard__name">${m.name}</div>
    <div class="ccard__tag">${m.tag}</div>
  </div>`;
  el.addEventListener('click',()=>{ i===cur ? (m.pack?openDuo():openModel(m.id)) : goTo(i); });
  stage.appendChild(el);
  ccards.push(el);
});
function layout(){
  ccards.forEach((el,i)=>{
    let off=i-cur;
    if(off>N/2)off-=N; if(off<-N/2)off+=N;
    const a=Math.abs(off);
    const tx=off*178;
    const ry=Math.max(-42,Math.min(42,-off*24));
    let sc=1,op=1;
    if(a===1){sc=.84;op=.9;}
    else if(a===2){sc=.68;op=.5;}
    else if(a>2){sc=.54;op=0;}
    el.style.transform=`translate(-50%,-50%) translateX(${tx}px) scale(${sc}) rotateY(${ry}deg)`;
    el.style.opacity=op;
    el.style.zIndex=40-a;
    el.style.pointerEvents=a>2?'none':'auto';
    el.classList.toggle('is-active',a===0);
  });
  const m=MODELS[cur];
  const meta=document.getElementById('carMeta');
  const priceHtml = m.pack
    ? `<span class="price price--pack">${packTag(m.price,m.orig)}</span>`
    : `<span class="price">Dès ${priceTag(m.price)}<small>selon la version</small></span>`;
  meta.innerHTML=`<span class="carcount">${String(cur+1).padStart(2,'0')} / ${N}</span>
    ${priceHtml}
    <button class="btn" id="carOpen">${m.pack?'Découvrir le pack':'Voir les versions'}</button>`;
  document.getElementById('carOpen').addEventListener('click',()=>{ m.pack ? openDuo() : openModel(m.id); });
}
function goTo(i){cur=((i%N)+N)%N;layout();}
function stepC(d){goTo(cur+d);}
document.getElementById('prev').addEventListener('click',()=>stepC(-1));
document.getElementById('next').addEventListener('click',()=>stepC(1));
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')stepC(-1);else if(e.key==='ArrowRight')stepC(1);});
let _sx=null;
stage.addEventListener('touchstart',e=>_sx=e.touches[0].clientX,{passive:true});
stage.addEventListener('touchend',e=>{if(_sx===null)return;const dx=e.changedTouches[0].clientX-_sx;if(Math.abs(dx)>40)stepC(dx<0?1:-1);_sx=null;},{passive:true});
layout();

/* ============ PAGE MODÈLE (variantes) ============ */
const VARIANTS=[
  {key:'onyx',    label:'Noir Onyx',    delta:0, color:'#14151a'},
  {key:'marine',  label:'Bleu Marine',  delta:0, color:'#17325c'},
  {key:'foret',   label:'Vert Forêt',   delta:0, color:'#123c2a'},
  {key:'givre',   label:'Blanc Givre',  delta:0, color:'#e9e6dd'},
  {key:'sable',   label:'Champagne',    delta:0, color:'#cbb488'},
  {key:'ardoise', label:'Gris Ardoise', delta:0, color:'#3a3d43'},
];
function productFromId(pid){
  const parts=pid.split('__');
  if(parts[0]==='box'){ const b=BOXES.find(x=>x.key===parts[1]); return b?{id:pid,name:b.name,tag:'Boîte',price:b.price,initial:'B'}:null; }
  if(parts[0]==='duo'){
    const his=parts[1], her=parts[2]; let name=DUO.name;
    if(his&&her){ const dj=variantsFor('datejust').find(v=>v.key===his), of=variantsFor('oysterfemme').find(v=>v.key===her); name='Pack Duo — '+(dj?dj.label:'?')+' + '+(of?of.label:'?'); }
    return {id:pid,name,tag:'Homme & Femme',price:DUO.price,initial:'D'};
  }
  const mid=parts[0], vkey=parts[1], size=parts[2];
  const m=MODELS.find(x=>x.id===mid), v=variantsFor(mid).find(x=>x.key===vkey);
  if(!m||!v) return null;
  const suff=size?' · '+size+' mm':'';
  return {id:pid, name:m.name+' · '+v.label+suff, tag:v.label+suff, price:promoPrice(priceOf(m,v)), initial:m.name[0]};
}
const modelPage=document.getElementById('modelPage');
function openModel(id){
  const m=MODELS.find(x=>x.id===id); if(!m) return;
  document.getElementById('mpName').textContent=m.name;
  document.getElementById('mpDesc').textContent='Toutes nos versions du modèle '+m.name+'. Choisissez votre modèle et ajoutez-le au panier.';
  const grid=document.getElementById('mpGrid');
  grid.innerHTML=variantsFor(m.id).map(v=>{
    const pid=m.id+'__'+v.key, price=priceOf(m,v), img=imgFor(pid);
    const shot=img
      ? `<div class="mpcard__shot" style="background-image:url('${img}')"></div>`
      : `<span class="mpcard__disc" style="background:${v.color}"></span>`;
    return `<article class="mpcard" data-v="${v.key}">
      <div class="mpcard__niche"><span class="mpcard__ring"></span>${shot}</div>
      <div class="mpcard__meta"><span class="mpcard__name">${v.label}</span><span class="mpcard__price">${priceTag(price)}</span></div>
    </article>`;
  }).join('');
  grid.querySelectorAll('.mpcard').forEach(card=>card.addEventListener('click',()=>openProduct(m.id,card.dataset.v)));
  modelPage.classList.add('open'); modelPage.setAttribute('aria-hidden','false');
  modelPage.scrollTop=0; document.body.style.overflow='hidden';
}
function closeModel(){ modelPage.classList.remove('open'); modelPage.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
document.getElementById('mpBack').addEventListener('click',closeModel);
document.getElementById('mpCart').addEventListener('click',openDrawer);

/* ============ FICHE PRODUIT (PDP) ============ */
const productPage=document.getElementById('productPage');
const pdpMain=document.getElementById('pdpMain');
const pdpThumbs=document.getElementById('pdpThumbs');
const pdpInfo=document.getElementById('pdpInfo');
let pdpAngle=0;
function renderPdpGallery(slots,disc){
  const cur=slots[pdpAngle]||slots[0]||{label:'',url:''};
  pdpMain.innerHTML=cur.url
    ? `<span class="pdp__shot" style="background-image:url('${cur.url}')"></span>`
    : `<div class="pdp__ph"><span class="pdp__disc" style="background:${disc}"></span><span class="pdp__phlabel">${cur.label}</span></div>`;
  if(slots.length<2){ pdpThumbs.innerHTML=''; return; }
  pdpThumbs.innerHTML=slots.map((s,i)=>`<button class="pdp__thumb ${i===pdpAngle?'is-active':''}" data-i="${i}" type="button">${s.url?`<span class="t" style="background-image:url('${s.url}')"></span>`:`<span class="t t--ph" style="background:${disc}"></span>`}<em>${s.label}</em></button>`).join('');
  pdpThumbs.querySelectorAll('.pdp__thumb').forEach(b=>b.addEventListener('click',()=>{pdpAngle=+b.dataset.i;renderPdpGallery(slots,disc);}));
}
function descFor(m){
  const d=DESCRIPTIONS[m.id];
  if(d) return d.txt;
  return `Inspirée de la silhouette « ${m.name} », cette pièce en reprend l'esprit — ${m.tag.toLowerCase()} — dans une exécution Velior : boîtier et bracelet en acier 904L, verre saphir et mouvement automatique, assemblés et réglés à la main dans nos ateliers à Genève. Chaque montre est produite en série limitée et numérotée.`;
}
function openProduct(mid,vkey,sizeKey){
  productPage.classList.remove('duo-mode');
  const m=MODELS.find(x=>x.id===mid), list=variantsFor(mid), v=list.find(x=>x.key===vkey);
  if(!m||!v) return;
  const sizes=SIZES[mid]||null;
  const size=sizes ? (sizeKey && sizes.indexOf(sizeKey)>=0 ? sizeKey : sizes[0]) : null;
  const pid=mid+'__'+vkey+(size?'__'+size:'');
  const price=priceOf(m,v);
  const sizeDisp=size?size+' mm':(mid==='oysterfemme'?'34 mm':'40 mm');
  const d=DESCRIPTIONS[mid]||{};
  pdpAngle=0;
  renderPdpGallery(galleryFor(mid+'__'+vkey), v.color);
  pdpInfo.innerHTML=`
    <span class="eyebrow">Collection Velior</span>
    <h2 class="pdp__name">${m.name}</h2>
    ${d.sub?`<div class="pdp__sub">${d.sub}</div>`:''}
    <div class="pdp__price">${priceTag(price)}</div>
    <p class="pdp__desc">${descFor(m)}</p>
    ${sizes?`<div class="pdp__sizes"><span class="pdp__opt">Taille</span><div class="pdp__sizebtns" id="pdpSizes">${sizes.map(s=>`<button class="pdp__size ${s===size?'is-active':''}" data-s="${s}" type="button">${s} mm</button>`).join('')}</div></div>`:''}
    <ul class="pdp__specs">
      <li><span>Mouvement</span><span>${m.mvt||'Automatique'}</span></li>
      <li><span>Boîtier</span><span>Acier 904L · ${sizeDisp}</span></li>
      <li><span>Verre</span><span>Saphir anti-reflet</span></li>
      <li><span>Étanchéité</span><span>10 ATM (~100 m)</span></li>
      <li><span>Bracelet</span><span>Acier 904L</span></li>
      <li><span>Assemblage</span><span>À la main, à Genève</span></li>
    </ul>
    <button class="pdp__add" id="pdpAdd">Ajouter au panier — ${promoPrice(price)} €</button>
    <p class="pdp__note">Livraison offerte · Paiement en € ou en CHF</p>`;
  if(sizes){ document.querySelectorAll('#pdpSizes .pdp__size').forEach(b=>b.addEventListener('click',()=>openProduct(mid,vkey,b.dataset.s))); }
  document.getElementById('pdpAdd').addEventListener('click',()=>addToCart(pid,true));
  productPage.classList.add('open'); productPage.setAttribute('aria-hidden','false'); productPage.scrollTop=0; document.body.style.overflow='hidden';
}
/* ===== Pack Duo ===== */
/* ===== Pack Duo (composeur : une Datejust + un Modèle Femme) ===== */
let duoHis=null, duoHer=null;
function renderDuo(){
  const dj=variantsFor('datejust'), of=variantsFor('oysterfemme');
  if(!duoHis||!dj.find(v=>v.key===duoHis)) duoHis=dj[0].key;
  if(!duoHer||!of.find(v=>v.key===duoHer)) duoHer=of[0].key;
  const hisImg=imgFor('datejust__'+duoHis), herImg=imgFor('oysterfemme__'+duoHer);
  const hisLbl=dj.find(v=>v.key===duoHis).label, herLbl=of.find(v=>v.key===duoHer).label;
  pdpMain.innerHTML=''; pdpThumbs.innerHTML='';
  pdpInfo.innerHTML=`
    <div class="duo-c">
      <span class="eyebrow">Composez votre duo</span>
      <h2 class="pdp__name">Pack Duo</h2>
      <div class="pdp__sub">Pour elle &amp; pour lui</div>
      <div class="duo-preview">
        <div class="duo-preview__one"><span class="duo-niche"><span class="duo-niche__shot" style="background-image:url('${hisImg}')"></span></span><em>Lui · ${hisLbl}</em></div>
        <span class="duo-amp">&amp;</span>
        <div class="duo-preview__one"><span class="duo-niche"><span class="duo-niche__shot" style="background-image:url('${herImg}')"></span></span><em>Elle · ${herLbl}</em></div>
      </div>
      <div class="duo-price">${packTag(DUO.price,DUO.orig)}</div>
      <p class="duo-desc">Une montre de chaque collection, réunies dans un coffret. Choisissez la sienne et la vôtre — l'aperçu se compose sous vos yeux.</p>
      <div class="duo-pick"><div class="duo-pick__label"><span>Pour lui</span><small>Datejust</small></div><div class="duo-pick__grid" id="duoHis"></div></div>
      <div class="duo-pick"><div class="duo-pick__label"><span>Pour elle</span><small>Modèle Femme</small></div><div class="duo-pick__grid" id="duoHer"></div></div>
      <button class="pdp__add" id="pdpAdd" type="button">Ajouter le duo au panier — ${DUO.price} €</button>
      <p class="pdp__note">Livraison offerte · Paiement en € ou en CHF</p>
    </div>`;
  const hc=document.getElementById('duoHis');
  hc.innerHTML=dj.map(v=>`<button class="duo-thumb ${v.key===duoHis?'is-sel':''}" data-v="${v.key}" type="button" title="${v.label}"><span class="duo-thumb__shot" style="background-image:url('${imgFor('datejust__'+v.key)}')"></span></button>`).join('');
  hc.querySelectorAll('.duo-thumb').forEach(b=>b.addEventListener('click',()=>{duoHis=b.dataset.v;renderDuo();}));
  const rc=document.getElementById('duoHer');
  rc.innerHTML=of.map(v=>`<button class="duo-thumb ${v.key===duoHer?'is-sel':''}" data-v="${v.key}" type="button" title="${v.label}"><span class="duo-thumb__shot" style="background-image:url('${imgFor('oysterfemme__'+v.key)}')"></span></button>`).join('');
  rc.querySelectorAll('.duo-thumb').forEach(b=>b.addEventListener('click',()=>{duoHer=b.dataset.v;renderDuo();}));
  document.getElementById('pdpAdd').addEventListener('click',()=>addToCart('duo__'+duoHis+'__'+duoHer,true));
}
function openDuo(){
  renderDuo();
  productPage.classList.add('duo-mode');
  productPage.classList.add('open'); productPage.setAttribute('aria-hidden','false'); productPage.scrollTop=0; document.body.style.overflow='hidden';
}
function openAccessory(id){
  const a=ACCESSORIES.find(x=>x.id===id); if(!a) return;
  productPage.classList.remove('duo-mode');
  pdpAngle=0;
  const imgs=a.imgs||[];
  const slots=['Vue 1','Vue 2','Vue 3','Vue 4'].map((label,i)=>({label,url:imgs[i]||''}));
  renderPdpGallery(slots, '#2E9065');
  const boxHtml=(a.id==='boites')
    ? `<div class="pdp__opt">Choisissez votre boîte</div>${BOXES.map(b=>`<div class="upsell__row"><span class="upsell__name">${b.name}</span><span class="upsell__price">${b.price} €</span><button class="upsell__add" data-b="${b.key}" type="button">Ajouter</button></div>`).join('')}`
    : '';
  pdpInfo.innerHTML=`
    <span class="eyebrow">Accessoires</span>
    <h2 class="pdp__name">${a.name}</h2>
    <p class="pdp__desc">${a.desc}</p>
    ${boxHtml}
    <ul class="pdp__specs">${(a.specs||[]).map(s=>`<li><span>${s[0]}</span><span>${s[1]}</span></li>`).join('')}</ul>
    <p class="pdp__note">Livraison dans toute l'Europe · Paiement en € ou en CHF</p>`;
  pdpInfo.querySelectorAll('.upsell__add').forEach(b=>b.addEventListener('click',()=>addToCart('box__'+b.dataset.b,true)));
  productPage.classList.add('open'); productPage.setAttribute('aria-hidden','false'); productPage.scrollTop=0; document.body.style.overflow='hidden';
}
function closeProduct(){
  productPage.classList.remove('open'); productPage.setAttribute('aria-hidden','true');
  if(!modelPage.classList.contains('open')) document.body.style.overflow='';
}
document.getElementById('pdpBack').addEventListener('click',closeProduct);
document.getElementById('pdpCart').addEventListener('click',openDrawer);

/* ============ GARANTIES (accordéon) ============ */
const GUAR=[
  {ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
   t:'Garantie mécanique 2 ans', chip:'24 mois',
   d:['Le mouvement automatique et l\'assemblage de votre montre sont couverts pendant deux ans à compter de la réception. Défaut de marche, arrêt anormal, jeu dans le remontage : nous réparons ou remplaçons le mouvement, sans frais.',
      'La garantie couvre le mécanisme et la main-d\'œuvre. Elle ne couvre pas l\'usure normale, la casse accidentelle, ni les interventions faites hors de notre atelier.']},
  {ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3s6 6.5 6 10.2A6 6 0 0 1 6 13.2C6 9.5 12 3 12 3z"/></svg>',
   t:'Garantie étanchéité jusqu\'à 10 ATM', chip:'≈ 100 m',
   d:['Chaque montre est testée pour résister à une pression de 10 ATM, soit environ 100 mètres. Elle supporte la pluie, les éclaboussures, le lavage de mains et la nage.',
      '10 ATM n\'est pas une étanchéité de plongée : évitez la douche chaude, le sauna et la nage prolongée, qui abîment les joints. Un contrôle d\'étanchéité annuel prolonge la protection.']},
  {ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 12a8 8 0 1 1 2.4 5.7"/><path d="M4 20v-5h5"/></svg>',
   t:'Satisfait ou remboursé 30 jours', chip:'30 jours',
   d:['Vous avez 30 jours après réception pour changer d\'avis. Si le modèle ne vous convient pas, renvoyez-le dans son état d\'origine et nous vous remboursons intégralement le prix de la montre.',
      'Le retour est simple : écrivez-nous, nous vous envoyons l\'étiquette. La montre doit revenir non portée, complète et dans sa boîte.']},
];
const guarList=document.getElementById('guarList');
GUAR.forEach((g,i)=>{
  const item=document.createElement('div');
  item.className='gitem';
  item.innerHTML=`
    <button class="gitem__head" aria-expanded="false">
      <span class="gitem__ic">${g.ic}</span>
      <span class="gitem__title">${g.t}</span>
      <span class="gitem__plus"></span>
    </button>
    <div class="gitem__body"><div class="gitem__inner">
      ${g.d.map(p=>`<p>${p}</p>`).join('')}
      <span class="chip">${g.chip}</span>
    </div></div>`;
  const head=item.querySelector('.gitem__head');
  const body=item.querySelector('.gitem__body');
  head.addEventListener('click',()=>{
    const open=item.classList.contains('open');
    document.querySelectorAll('#guarList .gitem').forEach(o=>{o.classList.remove('open');o.querySelector('.gitem__body').style.maxHeight=null;o.querySelector('.gitem__head').setAttribute('aria-expanded','false');});
    if(!open){item.classList.add('open');body.style.maxHeight=body.scrollHeight+'px';head.setAttribute('aria-expanded','true');}
  });
  guarList.appendChild(item);
});

/* ============ FAQ (accordéon, sincérité) ============ */
const IC={
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  cog:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M4.4 4.4l2.1 2.1M17.5 17.5l2.1 2.1M2.5 12h3M18.5 12h3M4.4 19.6l2.1-2.1M17.5 6.5l2.1-2.1"/></svg>',
  tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 12l-8 8-8-8V4h8z"/><circle cx="8.8" cy="8.8" r="1.3"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="7" width="12" height="9"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18.5" r="1.6"/><circle cx="18" cy="18.5" r="1.6"/></svg>',
  sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="8" cy="17" r="2"/></svg>',
};
const FAQ=[
  {ic:IC.shield, t:'Est-ce que ce sont des copies de grandes marques ?',
   d:['Non, et on ne le cachera jamais. Ce sont des montres moddées : on part d\'une base automatique authentique et on la retravaille. Les noms de modèles décrivent des styles hommage — aucune de nos montres n\'est affiliée à une marque existante, ne porte son logo, ni ne cherche à vous faire croire le contraire.']},
  {ic:IC.cog, t:'C\'est quoi, exactement, une montre moddée ?',
   d:['Une montre reconstruite à partir d\'un mouvement automatique fiable, sur laquelle on change boîtier, cadran, aiguilles, lunette, verre et bracelet. Chaque pièce est choisie et posée à la main. Le résultat est unique, mais reste une vraie montre mécanique — pas une contrefaçon.']},
  {ic:IC.tag, t:'Pourquoi ce prix, entre 210 et 265 € ?',
   d:['Parce que vous ne payez ni un logo ni un rêve. Vous payez des composants sérieux — acier 904L, verre saphir, mouvement automatique — le temps d\'assemblage et le réglage à la main. Rien de plus, pas de marge de prestige artificielle.']},
  {ic:IC.truck, t:'Combien de temps pour recevoir ma montre ?',
   d:['Comptez 15 jours ouvrés. Chaque pièce est assemblée à la commande dans nos ateliers à Genève : on préfère prendre le temps de bien faire plutôt que d\'expédier à la chaîne.']},
  {ic:IC.sliders, t:'Puis-je personnaliser ma montre ?',
   d:['Souvent oui. Écrivez-nous votre idée (cadran, aiguilles, bracelet) : si c\'est réalisable proprement, on vous fait un devis honnête. Sinon, on vous le dira franchement.']},
];
const faqList=document.getElementById('faqList');
FAQ.forEach((g,i)=>{
  const item=document.createElement('div');
  item.className='gitem';
  item.innerHTML=`
    <button class="gitem__head" aria-expanded="false">
      <span class="gitem__ic">${g.ic}</span>
      <span class="gitem__title">${g.t}</span>
      <span class="gitem__plus"></span>
    </button>
    <div class="gitem__body"><div class="gitem__inner">
      ${g.d.map(p=>`<p>${p}</p>`).join('')}
    </div></div>`;
  const head=item.querySelector('.gitem__head');
  const body=item.querySelector('.gitem__body');
  head.addEventListener('click',()=>{
    const open=item.classList.contains('open');
    document.querySelectorAll('#faqList .gitem').forEach(o=>{o.classList.remove('open');o.querySelector('.gitem__body').style.maxHeight=null;o.querySelector('.gitem__head').setAttribute('aria-expanded','false');});
    if(!open){item.classList.add('open');body.style.maxHeight=body.scrollHeight+'px';head.setAttribute('aria-expanded','true');}
  });
  faqList.appendChild(item);
});

/* ============ PANIER ============ */
let cart={};
const overlay=document.getElementById('overlay'),drawer=document.getElementById('drawer');
function openDrawer(){overlay.classList.add('open');drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');}
function closeDrawer(){overlay.classList.remove('open');drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.getElementById('payMsg').classList.remove('show');}
document.getElementById('cartBtn').addEventListener('click',openDrawer);
document.getElementById('drawerClose').addEventListener('click',closeDrawer);
overlay.addEventListener('click',closeDrawer);
function addToCart(pid,open){
  cart[pid]=(cart[pid]||0)+1;renderCart();
  const c=document.getElementById('count');c.classList.add('pop');setTimeout(()=>c.classList.remove('pop'),300);
  const p=productFromId(pid); if(p) toast(p.name+' ajoutée au panier');
  if(open)openDrawer();
}
function setQty(id,d){cart[id]+=d;if(cart[id]<=0)delete cart[id];renderCart();}
function removeItem(id){delete cart[id];renderCart();}
function renderCart(){
  const body=document.getElementById('drawerBody'),foot=document.getElementById('drawerFoot');
  const ids=Object.keys(cart),totalQty=ids.reduce((s,id)=>s+cart[id],0);
  document.querySelectorAll('.count').forEach(c=>c.textContent=totalQty);
  if(ids.length===0){
    body.innerHTML=`<div class="drawer__empty"><svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><p>Votre panier est vide.<br>La bonne heure n'attend pas.</p></div>`;
    foot.style.display='none';return;
  }
  let subtotal=0;
  body.innerHTML=ids.map(id=>{
    const p=productFromId(id); if(!p) return '';
    const line=p.price*cart[id];subtotal+=line;
    const img=imgFor(id);
    const media=img?`<div class="line__media" style="background-image:url('${img}')"></div>`:`<div class="line__mono">${p.initial}</div>`;
    return `<div class="line">
      ${media}
      <div class="line__info">
        <div class="line__name">${p.name}</div>
        <div class="line__ref">${p.tag}</div>
        <div class="qty"><button onclick="setQty('${id}',-1)" aria-label="Retirer un">−</button><span>${cart[id]}</span><button onclick="setQty('${id}',1)" aria-label="Ajouter un">+</button></div>
      </div>
      <div><div class="line__price">${line} €</div><button class="line__rm" onclick="removeItem('${id}')">Retirer</button></div>
    </div>`;
  }).join('')
   + `<div class="upsell"><div class="upsell__title">Complétez avec une boîte</div>${BOXES.map(b=>{const inCart=cart['box__'+b.key]?' · ajouté':''; return `<div class="upsell__row"><span class="upsell__name">${b.name}${inCart}</span><span class="upsell__price">${b.price} €</span><button class="upsell__add" onclick="addToCart('box__${b.key}')" type="button">+</button></div>`;}).join('')}</div>`;
  document.getElementById('subtotal').textContent=subtotal+' €';
  document.getElementById('total').textContent=subtotal+' €';
  foot.style.display='block';
}
document.getElementById('checkout').addEventListener('click',()=>document.getElementById('payMsg').classList.add('show'));

/* ============ CONTACT ============ */
function sendContact(e){
  e.preventDefault();
  const mail=document.getElementById('cmail').value.trim();
  const msg=document.getElementById('cmsg').value.trim();
  const to='contact@velior-watch.com';
  const link='mailto:'+to+'?subject='+encodeURIComponent('Question — Velior Watch')+'&body='+encodeURIComponent(msg+'\n\n— '+mail);
  window.location.href=link;
  toast('Votre message est prêt dans votre logiciel mail.');
  e.target.reset();return false;
}

/* ============ TOAST ============ */
let toastT;
function toast(m){const t=document.getElementById('toast');document.getElementById('toastMsg').textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2400);}

/* ============ ANNONCES (rotation) ============ */
const msgs=document.querySelectorAll('.announce__msg');let mi=0;
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&msgs.length>1){
  setInterval(()=>{msgs[mi].classList.remove('on');mi=(mi+1)%msgs.length;msgs[mi].classList.add('on');},3800);
}

/* ============ NAV SCROLL + REVEAL ============ */
addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>30));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(drawer.classList.contains('open'))closeDrawer();else if(productPage.classList.contains('open'))closeProduct();else if(modelPage.classList.contains('open'))closeModel();}});

/* ============ BEST-SELLERS (montres précises → fiche produit) ============ */
const BEST=[
  {m:'datejust',    v:'v1'},
  {m:'daytona',     v:'d1'},
  {m:'gshock',      v:'g3'},
  {m:'rm',          v:'r5'},
  {m:'nautilus',    v:'n1'},
  {m:'submariner',  v:'sub1'},
];
/* ============ PACK DUO (carte dédiée) ============ */
(function(){
  const card=document.getElementById('duoCard'); if(!card) return;
  const dj=variantsFor('datejust'), of=variantsFor('oysterfemme');
  const hisImg=imgFor('datejust__'+dj[0].key), herImg=imgFor('oysterfemme__'+of[0].key);
  card.innerHTML=`<div class="duo__img"><div class="duo__stage"><span class="duo__niche"><span class="duo__nshot" style="background-image:url('${hisImg}')"></span></span><span class="duo__amp">&amp;</span><span class="duo__niche"><span class="duo__nshot" style="background-image:url('${herImg}')"></span></span></div></div>`
    +`<div class="duo__info"><div class="duo__price">${packTag(DUO.price,DUO.orig)}</div><button class="duo__btn" type="button">Composer mon duo</button></div>`;
  card.addEventListener('click',openDuo);
})();

const bestGrid=document.getElementById('bestGrid');
BEST.forEach(b=>{
  const m=MODELS.find(x=>x.id===b.m), v=variantsFor(b.m).find(x=>x.key===b.v);
  if(!m||!v) return;
  const pid=m.id+'__'+v.key, price=priceOf(m,v), img=imgFor(pid);
  const media=img
    ? `<div class="bcard__img"><span class="bcard__shot" style="background-image:url('${img}')"></span></div>`
    : `<div class="bcard__img"><span class="bcard__disc" style="background:${v.color}"></span></div>`;
  const el=document.createElement('article');el.className='bcard';el.style.cursor='pointer';
  el.innerHTML=`<span class="bcard__badge">★ Best-seller</span>
    ${media}
    <div class="bcard__name">${m.name}</div>
    <div class="bcard__tag">${v.label}</div>
    <div class="bcard__foot"><span class="bcard__price">${priceTag(price)}</span><button class="bcard__add" type="button">Voir</button></div>`;
  el.addEventListener('click',()=>openProduct(m.id,v.key));
  bestGrid.appendChild(el);
});

/* ============ ACCESSOIRES (galerie multi-photos + fiche) ============ */
/* ============ ACCESSOIRES — 3 boîtes côte à côte ============ */
const BOX_ICON='<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 11h18M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>';
const accGrid=document.getElementById('accGrid');
if(accGrid) BOXES.forEach(b=>{
  const el=document.createElement('article');el.className='acc__card';
  el.innerHTML=`<div class="acc__img"><div class="ph">${BOX_ICON}<span>${b.cap}</span></div></div>
    <div class="acc__name">${b.name}</div>
    <div class="acc__tag">${b.cap}</div>
    <div class="acc__foot"><span class="acc__price">${b.price} €</span><button class="acc__add" type="button">Ajouter</button></div>`;
  el.querySelector('.acc__add').addEventListener('click',()=>addToCart('box__'+b.key,true));
  accGrid.appendChild(el);
});

/* ============ AVIS (défilement auto) ============ */
const REVIEWS=[
  {n:'Marc D.',s:5,t:'Finitions bluffantes pour le prix. Le cadran capte super bien la lumière et le bracelet 904L est vraiment rigide, pas cheap. Livrée en 12 jours, très bien emballée.'},
  {n:'Sophie L.',s:5,t:'J\'avais peur d\'un rendu « toc » : pas du tout. Le poids, le cliquet de la lunette, le mouvement qui repart au poignet… ça respire le sérieux.'},
  {n:'Karim B.',s:4,t:'Très belle montre, réglage nickel. Seul bémol : j\'aurais aimé plus de choix de bracelets à la commande. Le SAV répond vite, rien à redire.'},
  {n:'Émilie R.',s:5,t:'Deuxième commande. La première a un an, aucune dérive à l\'heure, saphir toujours nickel. Pour ce tarif, difficile de trouver mieux.'},
  {n:'Thomas V.',s:5,t:'Le rendu hommage est réussi sans être vulgaire, aucune inscription trompeuse. On sent une vraie honnêteté dans la démarche.'},
  {n:'Laura M.',s:4,t:'Superbe pièce, conforme aux photos. Livraison un poil plus longue (15 j) mais annoncée d\'avance. La montre valait l\'attente.'},
];
const rstars=n=>'★'.repeat(n)+'☆'.repeat(5-n);
document.getElementById('reviewTrack').innerHTML=
  REVIEWS.concat(REVIEWS).map(r=>`<div class="rcard"><div class="rcard__stars" aria-label="${r.s} sur 5">${rstars(r.s)}</div><div class="rcard__text">« ${r.t} »</div><div class="rcard__name"><b>${r.n}</b> · Achat vérifié</div></div>`).join('');

/* ============ DÉCOR ANIMÉ (discret, horloger) ============ */
function decoRing(size){
  let ticks='';
  for(let i=0;i<60;i++){const a=i*6*Math.PI/180,r1=48,r2=i%5===0?39:44;
    ticks+=`<line x1="${(50+r1*Math.sin(a)).toFixed(1)}" y1="${(50-r1*Math.cos(a)).toFixed(1)}" x2="${(50+r2*Math.sin(a)).toFixed(1)}" y2="${(50-r2*Math.cos(a)).toFixed(1)}" stroke="currentColor" stroke-width="${i%5===0?1.4:.7}"/>`;}
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" stroke="currentColor" stroke-width="1"/><circle cx="50" cy="50" r="30" stroke="currentColor" stroke-width=".6"/>${ticks}</svg>`;
}
[
  {sel:'#collection',size:460,top:'-150px',left:'-160px',cls:'deco--spin'},
  {sel:'#bestsellers',size:300,bottom:'-100px',right:'-90px',cls:'deco--rev'},
  {sel:'#avis',size:380,top:'-130px',right:'-130px',cls:'deco--spin'},
  {sel:'#faq',size:340,bottom:'-120px',left:'-120px',cls:'deco--rev'},
  {sel:'#contact',size:300,top:'-100px',left:'-110px',cls:'deco--spin'},
].forEach(d=>{const s=document.querySelector(d.sel);if(!s)return;const el=document.createElement('div');el.className='deco '+d.cls;el.style.width=el.style.height=d.size+'px';['top','bottom','left','right'].forEach(k=>{if(d[k])el.style[k]=d[k];});el.innerHTML=decoRing(d.size);s.appendChild(el);});

renderCart();
