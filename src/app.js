const main = document.querySelector("main");
const keys = chapters.map(ch => ch.id);
const themes = [
  {group:1, id:"equations-et-inequations", title:"Équations et inéquations", art:"balance", color:"peach", description:"Isoler une inconnue, comparer deux expressions et écrire les solutions sous forme d’intervalle."},
  {group:2, id:"second-degre", title:"Second degré", art:"curve", color:"lilac", description:"Passer d’une forme à l’autre, trouver les racines et lire le signe et les variations d’un trinôme."}
];
const types = [
  {id:"cours", title:"Cours", plural:"Cours", icon:"∑", color:"rose", heading:"Comprendre la notion"},
  {id:"memo", title:"Mémo", plural:"Mémos", icon:"ƒ", color:"lilac", heading:"Formule et mémo"},
  {id:"methode", title:"Méthode", plural:"Méthodes", icon:"≡", color:"sage", heading:"La méthode"},
  {id:"exemples", title:"Exemples", plural:"Exemples", icon:"✎", color:"peach", heading:"Exemples corrigés"},
  {id:"exercices", title:"Exercices", plural:"Exercices", icon:"✓", color:"sand", heading:"À toi de jouer"}
];
const themeOf = ch => themes.find(theme => theme.group === ch.group);
const notions = theme => chapters.filter(ch => ch.group === theme.group);
const resourcesOf = ch => types.filter(type => type.id !== "cours" || revisions[ch.id]?.course?.length);
const themeHref = theme => "#/theme/" + theme.id;
const href = ch => "#/chapitre/" + ch.id;
const canvas = (type,w=300,h=104) => '<canvas aria-hidden="true" data-art="'+type+'" data-width="'+w+'" data-height="'+h+'"></canvas>';
const attempts = {};
let reviewed = [];
try {
  const saved = JSON.parse(localStorage.getItem("carnet-maths-v1"));
  if (Array.isArray(saved)) reviewed = keys.filter(id => saved.includes(id));
} catch {}
function draw(){ document.querySelectorAll("canvas[data-art]").forEach(illustrate) }
function themeIcon(theme){
  return '<span class="theme-icon gridpaper '+theme.color+'">'+canvas(theme.art)+'</span>';
}
function home(){
  const tiles = themes.map(theme => {
    const lessons = notions(theme);
    const done = lessons.filter(ch => reviewed.includes(ch.id)).length;
    return `<a class="theme-tile ${theme.color}" href="${themeHref(theme)}">
      ${themeIcon(theme)}<div class="tile-text"><h2>${theme.title}</h2><p>${theme.description}</p></div>
      <div class="tile-bottom"><span>${lessons.length} notions · ${lessons.reduce((count,ch)=>count+resourcesOf(ch).length,0)} cartes${done ? " · "+done+" révisée"+(done>1?"s":"") : ""}</span><span class="enter">Ouvrir le chapitre →</span></div></a>`;
  }).join("");
  return `<section class="hero library-head"><div class="hero-copy"><p class="eyebrow"><i></i>Mon carnet de révision</p><h1>Mes <em>chapitres.</em></h1><p class="lead">Choisis un chapitre pour retrouver ses méthodes,<br class="wide"> ses exemples corrigés et ses exercices.</p></div><div class="hero-art">${canvas("hero",480,265)}</div></section><div class="theme-grid">${tiles}</div>`;
}
function previewOf(ch,type){
  if (type.id==="cours") return revisions[ch.id].course[0][0];
  if (type.id==="memo") return ch.formula;
  if (type.id==="methode") return ch.method[0];
  if (type.id==="exemples") return ch.examples[0][1];
  return ch.quiz[0][0];
}
function resourceCard(ch,type){
  const extra=revisions[ch.id];
  const captions={cours:"Explications et raisonnements",memo:"Formules et repères",methode:"Étapes et piège à éviter",exemples:(ch.examples.length+(extra?.advanced.length||0))+" exemples pas à pas",exercices:(ch.quiz.length+(extra?.practice.length||0))+" exercices corrigés"};
  return `<a class="resource ${type.color}" href="${href(ch)}/${type.id}">
    <span class="resource-kind"><b aria-hidden="true">${type.icon}</b>${type.title}</span>
    <span class="resource-preview">${previewOf(ch,type)}</span>
    <span class="resource-foot">${captions[type.id]}<span aria-hidden="true">↗</span></span></a>`;
}
function themePage(theme,filter){
  const lessons=notions(theme);
  const filters=[{id:"",plural:"Toutes"},...types].map(type=>{
    const active=(filter?.id||"")===type.id;
    return '<a href="'+themeHref(theme)+(type.id?"/"+type.id:"")+'" '+(active?'aria-current="true"':'')+'>'+type.plural+'</a>';
  }).join("");
  const groups=lessons.map(ch=>{
    const visible=resourcesOf(ch).filter(type=>!filter||filter===type);
    return visible.length?`<section class="notion" id="notion-${ch.id}"><div class="notion-heading"><h2>${ch.title}</h2><a href="${href(ch)}">${reviewed.includes(ch.id)?"✓ Fiche révisée":"Fiche complète"} →</a></div>
      <div class="resource-grid">${visible.map(type=>resourceCard(ch,type)).join("")}</div></section>`:"";
  }).join("");
  const jump=lessons.length>3?'<label class="jump">Aller à une notion <select id="notion-jump"><option value="">Choisir…</option>'+lessons.filter(ch=>!filter||resourcesOf(ch).includes(filter)).map(ch=>'<option value="'+ch.id+'">'+ch.title+'</option>').join("")+'</select></label>':"";
  return `<a class="back" href="#/">← Mes chapitres</a><section class="theme-banner ${theme.color}">${themeIcon(theme)}<div><p class="eyebrow"><i></i>Chapitre · ${lessons.length} notions</p><h1>${theme.title}</h1><p>${theme.description}</p></div></section>
    <div class="chapter-tools"><nav class="type-filter" aria-label="Filtrer les cartes">${filters}</nav>${jump}</div>${groups}`;
}
function note(ch){
 const reminders=revisions[ch.id]?.reminders||[];
 return '<div class="formula"><small>Formule</small><strong>'+ch.formula+'</strong><p>'+ch.condition+'</p></div><div class="memo"><small>À retenir</small><p>'+ch.memo+'</p>'+ (reminders.length?'<ul>'+reminders.map(text=>'<li>'+text+'</li>').join("")+'</ul>':'')+'</div>';
}
function choices(ch,i){
 const q=ch.quiz[i],id=ch.id+"-"+i,v=attempts[id];
 return '<article class="quiz"><small>Exercice '+(i+1)+'</small><h3>'+q[0]+'</h3><div class="options">'+q[1].map((ans,n)=>'<button data-answer="'+n+'" data-ch="'+ch.id+'" data-index="'+i+'" aria-pressed="'+(v===n)+'" class="'+(v===n?(v===q[2]?"correct":"wrong"):"")+'">'+ans+'</button>').join("")+'</div><div aria-live="polite" class="feedback">'+(v===undefined?'':(v===q[2]?'<b>Bonne réponse.</b> '+q[3]:'<b>À revoir.</b> '+q[3]+' Tu peux réessayer.'))+'</div></article>'
}

const comparisonTables={
  signe:{caption:"Exemple de tableau de signes pour (x + 1)(x − 3)",head:["x","x < −1","−1","−1 < x < 3","3","x > 3"],rows:[["x + 1","−","0","+","+","+"],["x − 3","−","−","−","0","+"],["Produit","+","0","−","0","+"]]},
  variations:{caption:"Variations de f(x) = (x − 2)² + 1 sur [0 ; 5]",head:["Abscisse","0","De 0 à 2","2","De 2 à 5","5"],rows:[["f(x)","5","↘ décroît","1","↗ croît","10"]]}
};
function courseBody(ch,extra){
  const paragraphs=extra.course.map(([title,text])=>'<article class="course-part"><h3>'+title+'</h3><p>'+text+'</p></article>').join("");
  const table=comparisonTables[ch.id];
  const figure=table?`<div class="math-table" tabindex="0" role="region" aria-label="${table.caption}"><table><caption>${table.caption}</caption><thead><tr>${table.head.map(col=>'<th scope="col">'+col+'</th>').join("")}</tr></thead><tbody>${table.rows.map(([label,...cells])=>'<tr><th scope="row">'+label+'</th>'+cells.map(cell=>'<td>'+cell+'</td>').join("")+'</tr>').join("")}</tbody></table></div>`:"";
  const links=extra.related.map(id=>chapters.find(item=>item.id===id)).filter(Boolean).map(item=>'<a href="'+href(item)+'">'+item.title+' →</a>').join("");
  return paragraphs+figure+'<div class="related"><b>Notions liées</b>'+links+'</div>';
}
function exerciseBody(ch){
  const questions=ch.quiz.map((_,i)=>choices(ch,i)).join("");
  const written=revisions[ch.id]?.practice||[];
  if(!written.length)return questions;
  const problems=written.map(({level,question,hint,steps,result})=>`<article class="written"><small>${level}</small><h3>${question}</h3>
    <details><summary>Voir un indice</summary><p>${hint}</p></details>
    <details class="solution"><summary>Voir le corrigé détaillé</summary><ol class="steps">${steps.map(step=>'<li>'+step+'</li>').join("")}</ol><p class="result">${result}</p></details></article>`).join("");
  return '<h3 class="subhead">Questions rapides</h3>'+questions+'<h3 class="subhead">À résoudre sur papier</h3>'+problems;
}
function exampleCard([title,expr,steps,result],i){
  return `<details class="example" ${i===0?"open":""}><summary><span>${title}</span></summary><div><strong class="expr">${expr}</strong><ol class="steps">${steps.map(t=>"<li>"+t+"</li>").join("")}</ol><p class="result">${result}</p></div></details>`;
}
function sectionBody(ch,type){
  const extra=revisions[ch.id];
  if(type.id==="cours") return courseBody(ch,extra);
  if(type.id==="memo") return note(ch);
  if(type.id==="methode") return '<ol class="steps">'+ch.method.map(t=>'<li>'+t+'</li>').join("")+'</ol><div class="trap"><b>Le piège à éviter</b><p>'+ch.trap+'</p></div>';
  if(type.id==="exercices") return exerciseBody(ch);
  const advanced=extra?.advanced||[];
  return '<h3 class="subhead">Exemples guidés</h3>'+ch.examples.map(exampleCard).join("")+(advanced.length?'<h3 class="subhead">Approfondissement</h3>'+advanced.map(exampleCard).join(""):"");
}
function detail(ch,type){
  const theme=themeOf(ch);
  const sections=type?[type]:resourcesOf(ch);
  const intro=type?ch.desc:ch.intro;
  const next=notions(theme)[notions(theme).indexOf(ch)+1];
  const navigation=resourcesOf(ch).map(t=>'<a href="'+href(ch)+'/'+t.id+'" '+(t===type?'aria-current="page"':'')+'>'+t.heading+' →</a>').join("");
  const content=sections.map(t=>'<section><h2>'+t.heading+'</h2>'+sectionBody(ch,t)+'</section>').join("");
  const end=type?'<a class="back" href="'+href(ch)+'">Lire la fiche complète →</a>':
    '<div class="end"><button class="primary" data-review="'+ch.id+'" aria-pressed="'+reviewed.includes(ch.id)+'">'+(reviewed.includes(ch.id)?"✓ Notion révisée":"Marquer la notion comme révisée")+'</button><a class="back" href="'+(next?href(next):themeHref(theme))+'">'+(next?"Notion suivante":"Retour au chapitre")+' →</a></div>';
  return `<a class="back" href="${themeHref(theme)}">← ${theme.title}</a>
    <section class="lesson-head ${ch.color}"><div><p class="eyebrow"><i></i>${type?type.title:"Fiche complète"} · ${theme.title}</p><h1>${ch.title}</h1><p>${intro}</p></div><div class="lesson-art gridpaper">${canvas(ch.art)}</div></section>
    <div class="reading"><aside><b>Cartes de la notion</b>${navigation}</aside><div class="lesson-body">${content}${end}</div></div>`;
}
function collection(mode){
  const memo=mode==="memos";
  const options=themes.map(theme=>'<optgroup label="'+theme.title+'">'+notions(theme).map(ch=>'<option value="'+ch.id+'">'+ch.title+'</option>').join("")+'</optgroup>').join("");
  return '<section class="collection"><p class="eyebrow"><i></i>Mon espace de révision</p><h1>'+(memo?"Mes mémos":"Mes exercices")+'<span class="brand-dot">.</span></h1><p class="lead">'+(memo?"Les formules et les idées à retenir, classées par notion.":"Choisis une notion, essaie les exercices puis découvre leur correction.")+'</p></section><div class="collection-body"><label for="chapter-select">Choisir une notion</label><select id="chapter-select">'+options+'</select><div id="collection-item"></div></div>';
}
function collectionItem(id){
 const ch=chapters.find(c=>c.id===id)||chapters[0], memo=location.hash.startsWith("#/memos");
 document.querySelector("#collection-item").innerHTML='<h2>'+ch.title+'</h2>'+(memo?note(ch):exerciseBody(ch))+'<a class="back" href="'+href(ch)+'">Lire la fiche complète →</a>'
}

function route(){
  const [page,id,kind]=location.hash.slice(2).split("/");
  const theme=themes.find(t=>t.id===id), ch=chapters.find(c=>c.id===id);
  const type=types.find(t=>t.id===kind);
  const mode=page==="memos"||page==="exercices"?page:"chapters";
  let title="Mes chapitres";
  if(mode!=="chapters"){main.innerHTML=collection(mode);collectionItem(keys[0]);title=mode==="memos"?"Mes mémos":"Mes exercices"}
  else if(page==="theme"&&theme){main.innerHTML=themePage(theme,type);title=theme.title}
  else if(page==="chapitre"&&ch){const card=resourcesOf(ch).includes(type)?type:null;main.innerHTML=detail(ch,card);title=ch.title+(card?" · "+card.title:"")}
  else main.innerHTML=home();
  document.title=title+" · Carnet de maths";
  document.querySelectorAll("header nav a").forEach(a=>{
    if(a.dataset.page===mode)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  draw();window.scrollTo(0,0);
}
main.addEventListener("click",ev=>{
 const b=ev.target.closest("button");if(!b)return;
 if(b.dataset.review){
  const id=b.dataset.review;reviewed=reviewed.includes(id)?reviewed.filter(x=>x!==id):[...reviewed,id];
  try{localStorage.setItem("carnet-maths-v1",JSON.stringify(reviewed))}catch{}
  b.textContent=reviewed.includes(id)?"✓ Notion révisée":"Marquer la notion comme révisée";b.setAttribute("aria-pressed",String(reviewed.includes(id)))
 }
 if(b.dataset.answer!==undefined){const ch=chapters.find(c=>c.id===b.dataset.ch),i=Number(b.dataset.index),n=Number(b.dataset.answer);attempts[ch.id+"-"+i]=n;
 const old=b.closest(".quiz"),holder=document.createElement("div");holder.innerHTML=choices(ch,i);
 const updated=holder.firstElementChild;old.replaceWith(updated);updated.querySelector('[data-answer="'+n+'"]').focus({preventScroll:true})}
});
main.addEventListener("change",ev=>{
  if(ev.target.id==="chapter-select")collectionItem(ev.target.value);
  if(ev.target.id==="notion-jump"&&ev.target.value){
    const section=document.getElementById("notion-"+ev.target.value);
    section?.scrollIntoView({block:"start"});section?.querySelector("a")?.focus({preventScroll:true});
    ev.target.value="";
  }
});
window.addEventListener("hashchange",()=>{route();main.focus({preventScroll:true})});route();
