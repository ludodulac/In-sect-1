const docs=[
['État du projet','compte-rendu/ETAT-DU-PROJET.md','Compte rendu'],
['Vision de vie','content/01-vision/vision-de-vie.md','Vision'],
['Avatar client','content/02-positionnement/avatar-client.md','Positionnement'],
['Territoire : accords','content/02-positionnement/territoire-accords.md','Positionnement'],
['Accompagnement WhatsApp','content/03-offre/accompagnement-whatsapp.md','Offre'],
['Funnel simple','content/03-offre/funnel-simple.md','Offre'],
['Machine Shorts','content/04-acquisition/machine-shorts.md','Acquisition'],
['Formats récurrents','content/04-acquisition/formats-recurrents.md','Acquisition'],
['Hooks façon Brieuc','content/04-acquisition/hooks-brieuc-style.md','Acquisition'],
['Analyse page actuelle','content/05-marketing/page-actuelle-analyse.md','Marketing'],
['Style personnel','content/06-identite/style-personnel.md','Identité'],
['Analyse Brieuc','content/07-recherche/analyse-brieuc.md','Recherche'],
['Plan 30 Shorts','content/08-plan-action/plan-30-shorts.md','Plan d’action'],
['Idées à développer','content/09-bibliotheque/idees-a-developper.md','Bibliothèque']
];
const nav=document.querySelector('.nav'),cards=document.querySelector('.cards'),doc=document.querySelector('.doc'),hero=document.querySelector('.hero'),search=document.querySelector('.search');
function esc(s){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}
function md(s){let x=esc(s);x=x.replace(/^### (.*)$/gm,'<h3>$1</h3>').replace(/^## (.*)$/gm,'<h2>$1</h2>').replace(/^# (.*)$/gm,'<h1>$1</h1>').replace(/^> (.*)$/gm,'<blockquote>$1</blockquote>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>');let lines=x.split('\n'),out=[],list=null;for(const line of lines){if(/^[-*] /.test(line)){if(list!=='ul'){if(list)out.push(`</${list}>`);out.push('<ul>');list='ul'}out.push(`<li>${line.slice(2)}</li>`)}else if(/^\d+\. /.test(line)){if(list!=='ol'){if(list)out.push(`</${list}>`);out.push('<ol>');list='ol'}out.push(`<li>${line.replace(/^\d+\. /,'')}</li>`)}else{if(list){out.push(`</${list}>`);list=null}if(line.startsWith('<h')||line.startsWith('<blockquote'))out.push(line);else if(line.trim())out.push(`<p>${line}</p>`)}}if(list)out.push(`</${list}>`);return out.join('\n')}
function renderList(filter=''){nav.innerHTML='';cards.innerHTML='';const groups={};docs.filter(d=>d.join(' ').toLowerCase().includes(filter.toLowerCase())).forEach(d=>(groups[d[2]]??=[]).push(d));for(const [group,items] of Object.entries(groups)){const t=document.createElement('div');t.className='nav-title';t.textContent=group;nav.appendChild(t);items.forEach(d=>{const b=document.createElement('button');b.textContent=d[0];b.onclick=()=>openDoc(d,b);nav.appendChild(b);const c=document.createElement('article');c.className='card';c.innerHTML=`<small>${group}</small><h3>${d[0]}</h3><p>Ouvrir la fiche</p>`;c.onclick=()=>openDoc(d,b);cards.appendChild(c)})}}
async function openDoc(d,b){document.querySelectorAll('.nav button').forEach(x=>x.classList.remove('active'));if(b)b.classList.add('active');hero.style.display='none';cards.style.display='none';doc.style.display='block';doc.innerHTML='<p>Chargement…</p>';try{const r=await fetch(d[1]);if(!r.ok)throw Error();doc.innerHTML=md(await r.text());history.replaceState(null,'','#'+encodeURIComponent(d[1]))}catch(e){doc.innerHTML='<div class="empty">Impossible de charger cette fiche. Ouvre le site via GitHub Pages ou un serveur web.</div>'}}
search.oninput=e=>renderList(e.target.value);document.querySelector('#home').onclick=()=>{hero.style.display='block';cards.style.display='grid';doc.style.display='none';document.querySelectorAll('.nav button').forEach(x=>x.classList.remove('active'));history.replaceState(null,'',' ')};document.querySelector('#print').onclick=()=>window.print();renderList();const initial=decodeURIComponent(location.hash.slice(1));if(initial){const d=docs.find(x=>x[1]===initial);if(d)openDoc(d)}