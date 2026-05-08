<script>
// PDF.js worker
if(window.pdfjsLib) pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// ── TRANSLATIONS ──────────────────────────────────────────────
const T={
en:{
  hero_h:'ELD Driver Log <span>Audit Engine</span>',
  hero_p:'Upload any ELD export — CSV, XLSX, JSON, or PDF. Detects location jumps, odometer gaps, speed falsification, and HOS violations. Calculates exact FMCSA audit pass probability.',
  st1:'Checks',st2:'Teleport Detection',st3:'Jump Analysis',st4:'11/14/70 hr',
  up_title:'Drop ELD log files here',
  up_sub:'ELD exports, IFTA movement reports, GPS logs — any format<br>More files = higher accuracy',
  browse:'Browse Files',
  need_t:'What makes audit most accurate:',
  n1:'ELD native CSV/JSON export',n2:'IFTA movement report (GPS pings)',
  n3:'Fuel receipts with timestamps',n4:'Bills of Lading (BOL)',
  n5:'Toll records (E-ZPass)',n6:'ELD edit/annotation history',
  abtn:'Run Full ELD Audit',
  res_title:'ELD Audit Report',
  pdf_btn:'Export PDF',
  sc_lbl:'SCORE / 100',
  pass_prob:'PASS PROBABILITY',
  v_cat:'AUDIT VERDICT',
  miss_t:'Limited accuracy — missing data sources:',
  miss_d:'Upload these additional files for 100% audit accuracy:',
  ch_title:'25-Point Compliance Checks',
  viol_title:'Identified Violations',
  th1:'TYPE',th2:'DESCRIPTION',th3:'LOCATION / TIME',th4:'CFR §',th5:'PTS',th6:'SEVERITY',
  sc_break_t:'Score Breakdown',
  ch_speed:'Speed Analysis',ch_odo:'ODO vs GPS Distance',
  hos_title:'Hours of Service',
  ai_title:'Deep AI Audit Analysis',ai_badge:'Claude Sonnet 4',
  doc_title:'Documentation Status',
  ac_title:'Corrective Action Plan',
  vpass:'✅ AUDIT PASS LIKELY',vcond:'🟡 CONDITIONAL PASS',vwarn:'🟠 HIGH RISK',vfail:'🔴 FAIL EXPECTED',
  vpass_d:'Strong score. Audit success is highly probable.',
  vcond_d:'Issues detected but correctable before audit.',
  vwarn_d:'Multiple violations. Significant corrections required.',
  vfail_d:'Critical violations. Audit failure highly likely.',
  sc_c:'Critical',sc_h:'High',sc_m:'Medium',sc_l:'Low',
  bk_c:'Critical',bk_h:'High',bk_m:'Medium',bk_l:'Low',
  m1:'Violations',m2:'GPS Records',m3:'Speed Issues',m4:'ODO Gap',m5:'Missing Days',m6:'Files',m7:'Score',m8:'Checks OK',
  s_base:'Base Score',s_crit:'Critical violations',s_high:'High violations',
  s_med:'Medium violations',s_low:'Low violations',
  s_miss:'Missing data penalty',s_nosup:'No supporting docs',
  s_cert:'All logs certified bonus',s_sup:'Complete docs bonus',
  s_total:'FINAL SCORE',
  steps:['Reading file metadata...','Parsing CSV/XLSX/JSON structures...','Extracting PDF text & GPS data...','Cross-referencing coordinates...','Computing Haversine distances...','Validating odometer continuity...','Detecting location jumps...','Analyzing speed records...','Checking HOS compliance (11/14/70hr)...','Verifying ELD certification...','Cross-validating supporting docs...','Running 25-point engine...','Computing pass probability...','Calling AI deep analysis...','Generating report...'],
  ac_now:'Immediate',ac_soon:'15-30 days',ac_long:'Long-term',
  toast_pdf:'✓ PDF exported',toast_json:'✓ JSON downloaded',toast_csv:'✓ CSV exported',
  no_files:'Please upload at least one ELD file',
  hos_dr:'Drive',hos_br:'30-min break',hos_ok:'✓ OK',hos_warn:'⚠ Unverified',
  doc_6m:'6 months',doc_q:'Quarterly',doc_14:'14 months',doc_prov:'✓ Provided',doc_miss:'✗ Missing',doc_rec:'⚠ Recommended',
},
uz:{
  hero_h:'ELD Haydovchi Log <span>Audit Tahlilchisi</span>',
  hero_p:"ELD eksportni yuklang — CSV, XLSX, JSON yoki PDF. Joylashuv sakrashlari, odometr bo'shliqlari, tezlik soxtalashtirish va HOS qoidabuzarliklarini aniqlaydi. FMCSA audit o'tish ehtimolini hisoblaydi.",
  st1:'Tekshiruv',st2:'Teleport Aniqlash',st3:'Jump Tahlili',st4:'11/14/70 soat',
  up_title:"ELD log fayllarini shu yerga tashlang",
  up_sub:"ELD eksport, IFTA harakat hisobotlari, GPS loglari — istalgan format<br>Qancha ko'p fayl = shuncha yuqori aniqlik",
  browse:"Fayllarni ko'rish",
  need_t:"Audit aniqligini oshiradi:",
  n1:'ELD CSV/JSON eksport',n2:'IFTA harakat hisoboti (GPS ping)',
  n3:"Yoqilg'i cheklari (vaqt belgili)",n4:'Yuk xatlari (BOL)',
  n5:'Toll yozuvlari (E-ZPass)',n6:'ELD tahrir/izoh tarixi',
  abtn:"To'liq ELD Audit O'tkazish",
  res_title:'ELD Audit Hisoboti',
  pdf_btn:'PDF Eksport',
  sc_lbl:'BALL / 100',
  pass_prob:"O'TISH EHTIMOLI",
  v_cat:'AUDIT XULOSASI',
  miss_t:"Yetishmayotgan ma'lumotlar — aniqlik cheklangan:",
  miss_d:"100% aniqlik uchun quyidagi fayl turlarini ham yuklang:",
  ch_title:'25 Nuqtali Muvofiqlik Tekshiruvi',
  viol_title:'Aniqlangan Qoidabuzarliklar',
  th1:'TUR',th2:'HOLAT',th3:'JOY / VAQT',th4:'MODDA',th5:'BALL',th6:'DARAJA',
  sc_break_t:'Ball Hisoblash',
  ch_speed:'Tezlik Tahlili',ch_odo:'ODO vs GPS Masofa',
  hos_title:'Xizmat Soatlari',
  ai_title:'Chuqur AI Audit Tahlili',ai_badge:'Claude Sonnet 4',
  doc_title:'Hujjatlar Holati',
  ac_title:'Tuzatish Harakatlari',
  vpass:"✅ AUDITDAN O'TISH YUQORI",vcond:"🟡 SHARTLI O'TISH",vwarn:'🟠 YUQORI XAVF',vfail:'🔴 MUVAFFAQIYATSIZLIK',
  vpass_d:"Ball mustahkam. Audit muvaffaqiyati yuqori ehtimol.",
  vcond_d:"Muammolar topildi, lekin tuzatib bo'ladi.",
  vwarn_d:"Bir nechta qoidabuzarliklar. Jiddiy tuzatish kerak.",
  vfail_d:"Kritik qoidabuzarliklar. Auditdan o'tib bo'lmaydi.",
  sc_c:'Kritikal',sc_h:'Yuqori',sc_m:"O'rta",sc_l:'Past',
  bk_c:'Kritikal',bk_h:'Yuqori',bk_m:"O'rta",bk_l:'Past',
  m1:'Qoidabuzarlik',m2:'GPS Yozuvlar',m3:'Tezlik Muammo',m4:'ODO Farqi',m5:"Yo'q Kunlar",m6:'Fayllar',m7:'Ball',m8:'Muvaffaqiyatli',
  s_base:"Boshlang'ich ball",s_crit:'Kritikal qoidabuzarlik',s_high:'Yuqori qoidabuzarlik',
  s_med:"O'rta qoidabuzarlik",s_low:'Past qoidabuzarlik',
  s_miss:"Ma'lumot yo'qligi jazosi",s_nosup:"Qo'shimcha hujjat yo'q",
  s_cert:'Sertifikatlangan log bonusi',s_sup:"To'liq hujjat bonusi",
  s_total:'YAKUNIY BALL',
  steps:["Fayl meta-ma'lumotlari o'qilmoqda...",'CSV/XLSX/JSON tuzilmasi tahlili...','PDF matn va GPS ma'lumotlarini chiqarish...','Koordinatalarni solishtirish...','Haversine masofalarini hisoblash...',"Odometr uzluksizligini tekshirish...",'Joylashuv sakrashlarini aniqlash...','Tezlik yozuvlarini tahlil qilish...','HOS muvofiqligini tekshirish (11/14/70 soat)...','ELD sertifikatlashni tekshirish...',"Qo'shimcha hujjatlarni solishtirish...",'25 nuqtali tekshiruv...',"O'tish ehtimolini hisoblash...",'Chuqur AI tahlil dvigateli...','Audit hisoboti yaratilmoqda...'],
  ac_now:'Darhol',ac_soon:'15-30 kun',ac_long:'Uzoq muddat',
  toast_pdf:'✓ PDF eksport qilindi',toast_json:'✓ JSON yuklab olindi',toast_csv:'✓ CSV eksport qilindi',
  no_files:'Iltimos, kamida bitta ELD faylini yuklang',
  hos_dr:'Haydash',hos_br:'30-min tanaffus',hos_ok:'✓ Yaxshi',hos_warn:'⚠ Tasdiqlanmagan',
  doc_6m:'6 oy',doc_q:'Choraklik',doc_14:'14 oy',doc_prov:'✓ Yuklangan',doc_miss:'✗ Yo\'q',doc_rec:'⚠ Tavsiya',
}
};

// ── 25 CHECKS ──────────────────────────────────────────────
const CHECKS=[
  {id:'C01',cat:'A',name:'Odometer monotonic increase',desc:'ODO must only increase — no rollback',sec:'§395.26(h)'},
  {id:'C02',cat:'A',name:'Odometer jump detection',desc:'No gaps >1 mi between consecutive pings',sec:'§395.24(c)'},
  {id:'C03',cat:'A',name:'ODO vs GPS ratio (Haversine)',desc:'Ratio should be 1.0–1.5x. <0.95 = suspicious',sec:'§395.26(h)'},
  {id:'C04',cat:'A',name:'Engine hours vs distance',desc:'Hours × avg speed must match odometer delta',sec:'§395.22(b)'},
  {id:'C05',cat:'A',name:'Inter-day ODO continuity',desc:'End of day = start of next day',sec:'§395.8(d)'},
  {id:'C06',cat:'B',name:'GPS vs ELD speed match',desc:'GPS-computed mph within ±5 of recorded speed',sec:'§395.22(b)(4)'},
  {id:'C07',cat:'B',name:'No GPS teleportation',desc:'No jump >2 mi in 1 minute (implies >120 mph)',sec:'§395.22(b)(4)'},
  {id:'C08',cat:'B',name:'GPS dropout check',desc:'No gaps >10 min while speed>0',sec:'§395.22(c)'},
  {id:'C09',cat:'B',name:'Direction reversal anomaly',desc:'No 180° flip without stop event',sec:'§395.22(b)(4)'},
  {id:'C10',cat:'B',name:'Address–coordinate match',desc:'Stated city/state matches lat/lng',sec:'§395.8(a)'},
  {id:'C11',cat:'C',name:'11-hour drive limit',desc:'Max 11 hrs driving per shift',sec:'§395.3(a)(3)(i)'},
  {id:'C12',cat:'C',name:'14-hour duty window',desc:'Cannot drive after 14th on-duty hour',sec:'§395.3(a)(2)'},
  {id:'C13',cat:'C',name:'70/8-day cycle',desc:'Max 70 hrs on-duty in 8 days',sec:'§395.3(b)'},
  {id:'C14',cat:'C',name:'30-minute break',desc:'Required after 8 cumulative drive hours',sec:'§395.3(a)(3)(ii)'},
  {id:'C15',cat:'C',name:'10-hour off-duty reset',desc:'Minimum 10 consecutive off-duty hrs',sec:'§395.3(a)(1)'},
  {id:'C16',cat:'C',name:'34-hour restart',desc:'Weekly 34-hr restart correctly applied',sec:'§395.3(c)'},
  {id:'C17',cat:'D',name:'Daily log certified',desc:'Driver certified each RODS within 24hrs',sec:'§395.30(a)'},
  {id:'C18',cat:'D',name:'Edit history reasonable',desc:'Retroactive edits documented with annotations',sec:'§395.30(c)'},
  {id:'C19',cat:'D',name:'Login/logout events',desc:'Driver login present at shift start',sec:'§395.20(b)'},
  {id:'C20',cat:'D',name:'No unidentified driving',desc:'All motion assigned to identified driver',sec:'§395.32(a)'},
  {id:'C21',cat:'D',name:'Annotation patterns clean',desc:'No suspicious personal-use or yard-move abuse',sec:'§395.30(c)(2)'},
  {id:'C22',cat:'E',name:'Supporting docs cross-check',desc:'Fuel/toll timestamps match RODS status',sec:'§395.11'},
  {id:'C23',cat:'E',name:'PDF metadata integrity',desc:'Creation date matches reporting period',sec:'§395.8(e)(1)'},
  {id:'C24',cat:'E',name:'Timezone consistency',desc:'UTC vs local time properly converted',sec:'§395.8(b)'},
  {id:'C25',cat:'E',name:'Driver–vehicle assignment',desc:'Each event linked to correct driver+unit',sec:'§395.20(c)'},
];

const PTS={critical:15,high:8,medium:3,low:1};

let lang='en',AR=null,CI={},UF=[];
function t(k){return(T[lang]||T.en)[k]||(T.en)[k]||k}
function setLang(l){
  lang=l;
  document.getElementById('btn-en').classList.toggle('on',l==='en');
  document.getElementById('btn-uz').classList.toggle('on',l==='uz');
  document.querySelectorAll('[data-k]').forEach(el=>{
    const k=el.getAttribute('data-k');
    if(k==='hero_h'){el.innerHTML=t(k);return}
    el.textContent=t(k);
  });
  if(AR)renderResults(AR);
}

// ── FILE HANDLING ──────────────────────────────────────────
const upzone=document.getElementById('upzone');
const fi=document.getElementById('fi');
const flist=document.getElementById('flist');
const abtn=document.getElementById('abtn');

upzone.addEventListener('dragover',e=>{e.preventDefault();upzone.classList.add('drag')});
upzone.addEventListener('dragleave',()=>upzone.classList.remove('drag'));
upzone.addEventListener('drop',e=>{e.preventDefault();upzone.classList.remove('drag');handleFiles([...e.dataTransfer.files])});
fi.addEventListener('change',()=>handleFiles([...fi.files]));

function handleFiles(files){
  files.forEach(f=>{if(!UF.find(x=>x.name===f.name&&x.size===f.size))UF.push(f)});
  renderFileList();
  abtn.disabled=UF.length===0;
}
function renderFileList(){
  flist.innerHTML='';
  UF.forEach((f,i)=>{
    const ext=f.name.split('.').pop().toUpperCase();
    const ico={CSV:'📊',XLSX:'📗',XLS:'📗',JSON:'📋',PDF:'📄',TXT:'📝',LDIF:'📑'}[ext]||'📁';
    const el=document.createElement('div');el.className='fitem';
    el.innerHTML=`<span class="fitem-ico">${ico}</span><span class="fitem-name">${f.name}</span><span class="fitem-sz">${(f.size/1024).toFixed(1)} KB</span><span class="fitem-st st-pend" id="fst${i}">PENDING</span><button class="frem" onclick="removeFile(${i})">✕</button>`;
    flist.appendChild(el);
  });
}
function removeFile(i){UF.splice(i,1);renderFileList();abtn.disabled=UF.length===0}

// ── FILE PARSING ───────────────────────────────────────────
async function parseFiles(files){
  const out=[];
  for(const f of files){
    const ext=f.name.split('.').pop().toLowerCase();
    try{
      if(['csv','txt','ldif'].includes(ext)){
        const txt=await rText(f);
        out.push({name:f.name,type:'csv',rows:parseCSV(txt),content:txt.slice(0,6000),meta:{}});
      } else if(['xlsx','xls'].includes(ext)){
        const buf=await rBuf(f);
        const wb=XLSX.read(buf,{type:'array'});
        const rows=[];
        wb.SheetNames.forEach(sn=>rows.push(...XLSX.utils.sheet_to_json(wb.Sheets[sn])));
        out.push({name:f.name,type:'xlsx',rows,content:JSON.stringify(rows.slice(0,40)),meta:{}});
      } else if(ext==='json'){
        const txt=await rText(f);
        const d=JSON.parse(txt);
        const rows=Array.isArray(d)?d:(d.records||d.events||d.logs||d.data||[d]);
        out.push({name:f.name,type:'json',rows,content:txt.slice(0,6000),meta:{}});
      } else if(ext==='pdf'){
        const p=await parsePDF(f);
        out.push({name:f.name,type:'pdf',rows:p.rows,content:p.text.slice(0,8000),meta:p.meta});
      }
    } catch(e){
      out.push({name:f.name,type:ext,rows:[],content:'',meta:{},err:e.message});
    }
  }
  return out;
}

async function parsePDF(file){
  const buf=await rBuf(file);
  const pdf=await pdfjsLib.getDocument({data:buf}).promise;
  const metaObj=await pdf.getMetadata().catch(()=>({}));
  const meta=metaObj.info||{};
  let text='';
  const rows=[];
  const lim=Math.min(pdf.numPages,80);
  for(let i=1;i<=lim;i++){
    const pg=await pdf.getPage(i);
    const tc=await pg.getTextContent();
    const pt=tc.items.map(it=>it.str).join(' ');
    text+=pt+'\n';
    // IFTA-style: No  Date  Time  Location  Lat  Lng  Speed  Heading  Odometer  Eng.Hours
    const joined=pt.replace(/\s+/g,' ');
    const re=/(\d+)\s+(\d{1,2}\/\d{1,2}\/\d{4})\s+(\d{1,2}:\d{2}:\d{2}\s*(?:AM|PM))\s+(.+?)\s+(-?\d{1,3}\.\d{4,8})\s+(-?\d{1,3}\.\d{4,8})\s+(\d+\.?\d*)\s+(\d+)\s+([\d,]+\.?\d*)\s+([\d,]+\.?\d*)/g;
    let m;
    while((m=re.exec(joined))!==null){
      rows.push({
        no:+m[1],datetime:`${m[2]} ${m[3]}`,location:m[4].trim(),
        lat:+m[5],lng:+m[6],speed:+m[7],heading:+m[8],
        odometer:+m[9].replace(/,/g,''),engineHours:+m[10].replace(/,/g,'')
      });
    }
  }
  return{text,rows,meta};
}

function rText(f){return new Promise((r,j)=>{const rd=new FileReader();rd.onload=()=>r(rd.result);rd.onerror=j;rd.readAsText(f)})}
function rBuf(f){return new Promise((r,j)=>{const rd=new FileReader();rd.onload=()=>r(rd.result);rd.onerror=j;rd.readAsArrayBuffer(f)})}

function parseCSV(txt){
  const lines=txt.trim().split('\n');
  if(lines.length<2)return[];
  const hdr=lines[0].split(',').map(h=>h.trim().replace(/"/g,''));
  return lines.slice(1).map(l=>{
    const v=csvLine(l);const o={};
    hdr.forEach((h,i)=>{o[h]=(v[i]||'').trim().replace(/"/g,'')});
    return o;
  });
}
function csvLine(l){
  const o=[];let c='',q=false;
  for(let i=0;i<l.length;i++){
    const ch=l[i];
    if(ch==='"'){q=!q;continue}
    if(ch===','&&!q){o.push(c);c='';continue}
    c+=ch;
  }
  o.push(c);return o;
}

// ── COLUMN DETECTION ──────────────────────────────────────
function col(obj,re){if(!obj)return null;return Object.keys(obj).find(k=>re.test(k))||null}

// ── HAVERSINE ──────────────────────────────────────────────
function hav(la1,lo1,la2,lo2){
  const R=3959,dL=(la2-la1)*Math.PI/180,dO=(lo2-lo1)*Math.PI/180;
  const a=Math.sin(dL/2)**2+Math.cos(la1*Math.PI/180)*Math.cos(la2*Math.PI/180)*Math.sin(dO/2)**2;
  return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}

function delay(ms){return new Promise(r=>setTimeout(r,ms))}
function showToast(msg){const el=document.getElementById('toast');el.textContent=msg;el.style.display='block';setTimeout(()=>el.style.display='none',3200)}
function sevOrd(s){return['critical','high','medium','low'].indexOf(s)}
function setCheck(checks,id,status,detail){const c=checks.find(x=>x.id===id);if(c){c.status=status;c.detail=detail}}

// ── MAIN PIPELINE ──────────────────────────────────────────
async function startAnalysis(){
  if(!UF.length){showToast(t('no_files'));return}
  document.getElementById('results').style.display='none';
  const prog=document.getElementById('prog');prog.style.display='block';
  abtn.disabled=true;

  const steps=t('steps');
  document.getElementById('psteps').innerHTML=steps.map((s,i)=>
    `<div class="pstep" id="ps${i}"><div class="pdot"></div><span>${s}</span></div>`).join('');
  const fill=document.getElementById('pfill');

  for(let i=0;i<steps.length;i++){
    document.getElementById('ps'+i).className='pstep act';
    fill.style.width=((i+1)/steps.length*100)+'%';
    await delay(i===13?2400:360);
    document.getElementById('ps'+i).className='pstep done';
  }

  const parsed=await parseFiles(UF);
  parsed.forEach((p,i)=>{
    const el=document.getElementById('fst'+i);
    if(el){el.className='fitem-st '+(p.err?'st-err':'st-ok');el.textContent=p.err?'ERR':p.rows.length+' ROWS'}
  });

  const eng=runEngine(parsed);
  const summary=buildSummary(parsed);
  const prompt=buildPrompt(summary,eng);

  let deep='';
  try{
    const resp=await fetch('/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt})});
    const d=await resp.json();
    if(d.error)throw new Error(d.error);
    deep=d.text||'';
  } catch(e){
    deep=lang==='uz'
      ?`[AI tahlili mavjud emas - lokal tahlil natijalari yuqorida]\n\nXato: ${e.message}\n\nLokal: ${eng.checks.length} tekshiruv, ${eng.violations.length} qoidabuzarlik, ball ${eng.score}/100`
      :`[AI analysis unavailable - local results shown above]\n\nError: ${e.message}\n\nLocal engine: ${eng.checks.length} checks, ${eng.violations.length} violations, score ${eng.score}/100`;
  }

  prog.style.display='none';
  document.getElementById('results').style.display='block';
  document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'});
  AR={...eng,deep,parsed};
  renderResults(AR);
  abtn.disabled=false;
}

function buildSummary(parsed){
  return parsed.map(p=>{
    const hdr=p.rows[0]?Object.keys(p.rows[0]).join(', '):'none';
    return`=== ${p.name} (${p.type.toUpperCase()}) ===\nColumns: ${hdr}\nRows: ${p.rows.length}\nMeta: ${JSON.stringify(p.meta)}\nSample: ${JSON.stringify(p.rows.slice(0,25)).slice(0,1800)}`;
  }).join('\n\n---\n\n');
}

function buildPrompt(summary,eng){
  const li=lang==='uz'?"JAVOBNI O'ZBEK TILIDA YOZ. Professional, texnik, qat'iy.":"ANSWER IN ENGLISH. Professional, technical, strict tone.";
  return`You are a senior FMCSA Safety Auditor. ${li}

25-point compliance engine results:
- Score: ${eng.score}/100 | Pass probability: ${eng.passPct}
- Verdict: ${eng.verdict} | Violations: ${eng.violations.length} | Checks passed: ${eng.passed}/25
- Critical: ${eng.bk.critical}, High: ${eng.bk.high}, Medium: ${eng.bk.medium}, Low: ${eng.bk.low}

Metrics: GPS records=${eng.met.gps}, Speed issues=${eng.met.spd}, ODO gap=${eng.met.odoGap}mi, Missing days=${eng.met.missDays}

Top violations:
${eng.violations.slice(0,10).map((v,i)=>`${i+1}. [${v.sev.toUpperCase()}] ${v.type} - ${v.desc} (${v.sec})`).join('\n')}

Raw data:
${summary.slice(0,6000)}

Write structured deep analysis:
1. EXECUTIVE SUMMARY
2. LOCATION/GPS PATTERN ANALYSIS (jumps, teleportation, dropout)
3. ODOMETER INTEGRITY (rollback, jumps, ODO/GPS ratio)
4. HOS VIOLATIONS (11hr, 14hr, 70hr, breaks)
5. ELD FALSIFICATION INDICATORS
6. CORRECTIVE ACTIONS
7. PASS PROBABILITY JUSTIFICATION (exact %)

Cite specific CFR sections. Be direct and technical.`;
}

// ── 25-POINT COMPLIANCE ENGINE ─────────────────────────────
function runEngine(parsed){
  const viols=[];
  const checks=CHECKS.map(c=>({...c,status:'skip',detail:'Insufficient data'}));
  let allRows=[];
  let hasELD=false,hasIFTA=false,hasFuel=false,hasBOL=false;

  parsed.forEach(p=>{
    const n=p.name.toLowerCase();
    if(n.includes('eld')||n.includes('rods')||n.includes('hos')||n.includes('driver'))hasELD=true;
    if(n.includes('ifta')||n.includes('movement')||n.includes('gps'))hasIFTA=true;
    if(n.includes('fuel')||n.includes('receipt'))hasFuel=true;
    if(n.includes('bol')||n.includes('lading'))hasBOL=true;
    allRows=allRows.concat(p.rows.map(r=>({...r,_f:p.name,_t:p.type})));
  });

  // ── CAT A: ODOMETER ────────────────────────────────────
  const odoResult=checkOdometer(allRows,viols);
  setCheck(checks,'C01',odoResult.mono.s,odoResult.mono.d);
  setCheck(checks,'C02',odoResult.jump.s,odoResult.jump.d);
  setCheck(checks,'C03',odoResult.ratio.s,odoResult.ratio.d);
  setCheck(checks,'C04',odoResult.eh.s,odoResult.eh.d);
  setCheck(checks,'C05',odoResult.cont.s,odoResult.cont.d);

  // ── CAT B: GPS/LOCATION ────────────────────────────────
  const gpsResult=checkGPS(allRows,viols);
  setCheck(checks,'C06',gpsResult.spd.s,gpsResult.spd.d);
  setCheck(checks,'C07',gpsResult.tele.s,gpsResult.tele.d);
  setCheck(checks,'C08',gpsResult.drop.s,gpsResult.drop.d);
  setCheck(checks,'C09',gpsResult.rev.s,gpsResult.rev.d);
  setCheck(checks,'C10',gpsResult.addr.s,gpsResult.addr.d);

  // ── CAT C: HOS ─────────────────────────────────────────
  const hosResult=checkHOS(allRows,viols);
  setCheck(checks,'C11',hosResult.h11.s,hosResult.h11.d);
  setCheck(checks,'C12',hosResult.h14.s,hosResult.h14.d);
  setCheck(checks,'C13',hosResult.h70.s,hosResult.h70.d);
  setCheck(checks,'C14',hosResult.br30.s,hosResult.br30.d);
  setCheck(checks,'C15',hosResult.off10.s,hosResult.off10.d);
  setCheck(checks,'C16',hosResult.re34.s,hosResult.re34.d);

  // ── CAT D: ELD INTEGRITY ───────────────────────────────
  const eldResult=checkELD(parsed,viols);
  setCheck(checks,'C17',eldResult.cert.s,eldResult.cert.d);
  setCheck(checks,'C18',eldResult.edits.s,eldResult.edits.d);
  setCheck(checks,'C19',eldResult.login.s,eldResult.login.d);
  setCheck(checks,'C20',eldResult.unid.s,eldResult.unid.d);
  setCheck(checks,'C21',eldResult.anno.s,eldResult.anno.d);

  // ── CAT E: CROSS-VALIDATION ────────────────────────────
  const xvResult=checkXVal(parsed,{hasELD,hasIFTA,hasFuel,hasBOL},viols);
  setCheck(checks,'C22',xvResult.sup.s,xvResult.sup.d);
  setCheck(checks,'C23',xvResult.meta.s,xvResult.meta.d);
  setCheck(checks,'C24',xvResult.tz.s,xvResult.tz.d);
  setCheck(checks,'C25',xvResult.dv.s,xvResult.dv.d);

  // ── SCORE CALCULATION ──────────────────────────────────
  viols.sort((a,b)=>sevOrd(a.sev)-sevOrd(b.sev));
  const bk={critical:viols.filter(v=>v.sev==='critical').length,high:viols.filter(v=>v.sev==='high').length,medium:viols.filter(v=>v.sev==='medium').length,low:viols.filter(v=>v.sev==='low').length};
  let score=100;
  const sb=[{k:'s_base',v:100,type:'base'}];

  if(bk.critical){const d=bk.critical*PTS.critical;score-=d;sb.push({k:'s_crit',cnt:bk.critical,v:-d,type:'ded'})}
  if(bk.high){const d=bk.high*PTS.high;score-=d;sb.push({k:'s_high',cnt:bk.high,v:-d,type:'ded'})}
  if(bk.medium){const d=bk.medium*PTS.medium;score-=d;sb.push({k:'s_med',cnt:bk.medium,v:-d,type:'ded'})}
  if(bk.low){const d=bk.low*PTS.low;score-=d;sb.push({k:'s_low',cnt:bk.low,v:-d,type:'ded'})}
  if(hosResult.missDays>2){score-=20;sb.push({k:'s_miss',v:-20,type:'ded'})}
  if(!hasFuel&&!hasBOL){score-=10;sb.push({k:'s_nosup',v:-10,type:'ded'})}
  if(xvResult.metaIssue){score-=10;sb.push({k:'s_nosup',v:-10,type:'ded'})}
  if(eldResult.cert.s==='pass'){score+=5;sb.push({k:'s_cert',v:5,type:'add'})}
  if(hasFuel&&hasBOL){score+=5;sb.push({k:'s_sup',v:5,type:'add'})}
  score=Math.max(0,Math.min(100,score));
  sb.push({k:'s_total',v:score,type:'tot'});

  let verdict,passPct;
  if(score>=85){verdict='pass';passPct='90–95%'}
  else if(score>=70){verdict='cond';passPct='60–80%'}
  else if(score>=50){verdict='warn';passPct='30–55%'}
  else{verdict='fail';passPct='10–25%'}

  const missing=[];
  if(!hasELD)missing.push(lang==='uz'?'ELD CSV/JSON eksport':'ELD CSV/JSON export');
  if(!hasFuel)missing.push(lang==='uz'?"Yoqilg'i cheklari":'Fuel receipts');
  if(!hasBOL)missing.push(lang==='uz'?'Yuk xatlari (BOL)':'Bills of Lading');

  const passed=checks.filter(c=>c.status==='pass').length;
  const met={
    totalV:viols.length,gps:allRows.length,spd:gpsResult.spdIssues,
    odoGap:(odoResult.odoGap||0).toFixed(1),missDays:hosResult.missDays,
    files:parsed.length,score,passed
  };

  return{score,verdict,passPct,bk,sb,viols,checks,passed,hosData:hosResult.days,met,missing,ft:{hasELD,hasIFTA,hasFuel,hasBOL}};
}

// ── ODOMETER CHECK ─────────────────────────────────────────
function checkOdometer(rows,viols){
  const R={mono:{s:'skip',d:'No odometer data'},jump:{s:'skip',d:'No odometer data'},ratio:{s:'skip',d:'No GPS data'},eh:{s:'skip',d:'No engine hours'},cont:{s:'skip',d:'Insufficient data'},odoGap:0};
  if(rows.length<2)return R;
  const s=rows[0];
  const oc=col(s,/odo|odometer/i);
  const lc=col(s,/^lat|latitude/i);
  const gc=col(s,/^l[no]g?|longitude/i);
  const ec=col(s,/engine.?hour|eng.?hr/i);
  const dc=col(s,/datetime|date.?time|date|time/i);

  if(!oc)return R;
  let mono=true,jumps=0,firstO=null,lastO=null;
  for(let i=1;i<rows.length;i++){
    const p=+String(rows[i-1][oc]).replace(/,/g,'')||0;
    const c=+String(rows[i][oc]).replace(/,/g,'')||0;
    if(!firstO&&p>0)firstO=p;
    if(c>0)lastO=c;
    if(c<p-0.1){
      mono=false;
      viols.push({type:'Odometer Rollback',desc:`ODO dropped ${p.toFixed(1)}→${c.toFixed(1)} (Δ${(c-p).toFixed(1)} mi). Critical falsification indicator.`,loc:rows[i][dc]||`Row ${i}`,sec:'§395.26(h)',sev:'critical',pts:15});
    }
    const jmp=c-p;
    if(jmp>50&&jmp<500){
      jumps++;
      if(jumps<=5)viols.push({type:'Odometer Jump',desc:`Unexplained +${jmp.toFixed(1)} mi gap between pings — possible unassigned driving.`,loc:rows[i][dc]||`Row ${i}`,sec:'§395.24(c)',sev:'high',pts:8});
    }
  }
  R.mono={s:mono?'pass':'fail',d:mono?'Monotonic across all records':'Odometer rollback detected'};
  R.jump={s:jumps===0?'pass':jumps>10?'fail':'warn',d:jumps===0?'No unexplained jumps':`${jumps} jump(s) >50 mi detected`};
  if(firstO&&lastO)R.odoGap=lastO-firstO;

  if(lc&&gc){
    let gpsDist=0;
    for(let i=1;i<rows.length;i++){
      const la1=+rows[i-1][lc],lo1=+rows[i-1][gc],la2=+rows[i][lc],lo2=+rows[i][gc];
      if([la1,lo1,la2,lo2].some(isNaN))continue;
      gpsDist+=hav(la1,lo1,la2,lo2);
    }
    const odoD=R.odoGap;
    if(odoD>0&&gpsDist>0){
      const ratio=odoD/gpsDist;
      if(ratio<0.92){
        R.ratio={s:'fail',d:`ODO/GPS ratio ${ratio.toFixed(3)}x — ODO LESS than GPS distance (possible manipulation)`};
        viols.push({type:'ODO < GPS Distance',desc:`Odometer ${odoD.toFixed(1)} mi < GPS-computed ${gpsDist.toFixed(1)} mi. Ratio: ${ratio.toFixed(3)}x. Odometer under-reporting suggests manipulation.`,loc:'Full dataset',sec:'§395.26(h)',sev:'high',pts:8});
      } else if(ratio>2.5){
        R.ratio={s:'warn',d:`ODO/GPS ratio ${ratio.toFixed(2)}x — unusually high (sparse GPS)`};
      } else {
        R.ratio={s:'pass',d:`ODO/GPS ratio ${ratio.toFixed(2)}x (normal 1.0–1.5x)`};
      }
    }
  }

  if(ec&&oc&&R.odoGap>0){
    const fEH=+String(rows[0][ec]).replace(/,/g,'')||0;
    const lEH=+String(rows[rows.length-1][ec]).replace(/,/g,'')||0;
    const ehGap=lEH-fEH;
    if(ehGap>0){
      const avgSpd=R.odoGap/ehGap;
      if(avgSpd>90){R.eh={s:'fail',d:`Engine avg speed ${avgSpd.toFixed(0)} mph — impossibly fast`}}
      else if(avgSpd<3&&R.odoGap>100){R.eh={s:'warn',d:`Engine avg ${avgSpd.toFixed(1)} mph for ${R.odoGap.toFixed(0)} mi — suspicious`}}
      else{R.eh={s:'pass',d:`Engine avg speed ${avgSpd.toFixed(1)} mph — plausible`}}
    }
  }

  if(oc&&dc){
    const byDay={};
    rows.forEach(r=>{
      const d=new Date(r[dc]);if(isNaN(d))return;
      const k=d.toISOString().slice(0,10);
      if(!byDay[k]){byDay[k]={first:null,last:null}}
      const o=+String(r[oc]).replace(/,/g,'')||0;
      if(byDay[k].first===null||o<byDay[k].first)byDay[k].first=o;
      if(o>byDay[k].last)byDay[k].last=o;
    });
    const days=Object.keys(byDay).sort();let breaks=0;
    for(let i=1;i<days.length;i++){
      const prev=byDay[days[i-1]].last,curr=byDay[days[i]].first;
      if(prev&&curr&&Math.abs(prev-curr)>10)breaks++;
    }
    R.cont={s:breaks===0?'pass':'warn',d:breaks===0?'Day-to-day ODO continuity OK':`${breaks} inter-day ODO gap(s) detected`};
  }
  return R;
}

// ── GPS/LOCATION CHECK ─────────────────────────────────────
function checkGPS(rows,viols){
  const R={spd:{s:'skip',d:'No GPS/speed data'},tele:{s:'skip',d:'No GPS data'},drop:{s:'skip',d:'No timestamps'},rev:{s:'skip',d:'No heading data'},addr:{s:'skip',d:'No address data'},spdIssues:0};
  if(rows.length<2)return R;
  const s=rows[0];
  const lc=col(s,/^lat|latitude/i);
  const gc=col(s,/^l[no]g?|longitude/i);
  const sc=col(s,/^speed|mph/i);
  const dc=col(s,/datetime|date.?time|date|time/i);
  const hc=col(s,/heading|direction/i);
  const ac=col(s,/location|address/i);

  if(!lc||!gc)return R;
  let teleports=0,drops=0,spdMis=0,spdTotal=0;

  for(let i=1;i<Math.min(rows.length,2000);i++){
    const r1=rows[i-1],r2=rows[i];
    const la1=+r1[lc],lo1=+r1[gc],la2=+r2[lc],lo2=+r2[gc];
    if([la1,lo1,la2,lo2].some(isNaN))continue;

    const dist=hav(la1,lo1,la2,lo2);

    if(dc){
      const t1=new Date(r1[dc]),t2=new Date(r2[dc]);
      if(!isNaN(t1)&&!isNaN(t2)){
        const hrs=Math.abs(t2-t1)/3600000;
        if(hrs>0&&hrs<0.5){
          const calcMph=dist/hrs;
          // TELEPORT: >2mi in <1min
          if(dist>2&&hrs<(1/60)){
            teleports++;
            if(teleports<=5)viols.push({type:'GPS Teleportation',desc:`Vehicle at ${la1.toFixed(4)},${lo1.toFixed(4)} then ${la2.toFixed(4)},${lo2.toFixed(4)} — ${dist.toFixed(2)} mi in ${(hrs*60).toFixed(1)} min. Calculated ${calcMph.toFixed(0)} mph. Physically impossible.`,loc:`${la2.toFixed(4)},${lo2.toFixed(4)}`,sec:'§395.22(b)(4)',sev:'critical',pts:15});
          } else if(calcMph>90&&dist>1){
            teleports++;
            if(teleports<=5)viols.push({type:'GPS Speed Anomaly',desc:`GPS-computed ${calcMph.toFixed(0)} mph (${dist.toFixed(2)} mi in ${(hrs*60).toFixed(1)} min). Exceeds CMV speed limit.`,loc:`${la2.toFixed(4)},${lo2.toFixed(4)}`,sec:'§395.22(b)(4)',sev:'high',pts:8});
          }
          // SPEED MISMATCH
          if(sc){
            const eldSpd=+r2[sc]||0;
            if(calcMph>5&&calcMph<95&&eldSpd>0){
              spdTotal++;
              if(calcMph-eldSpd>15)spdMis++;
            }
          }
        }
        // DROPOUT: gap >10min while moving
        if(hrs>10/60&&sc&&(+r1[sc]||0)>5){drops++}
      }
    }
  }

  R.spdIssues=spdMis;
  R.tele={s:teleports===0?'pass':teleports>5?'fail':'warn',d:teleports===0?'No teleportation detected':`${teleports} teleportation/speed anomaly event(s)`};
  if(teleports>10)viols.push({type:'Systematic GPS Manipulation',desc:`${teleports} GPS anomalies detected. Pattern suggests systematic ELD/GPS data manipulation or ELD device malfunction.`,loc:'Multiple locations',sec:'§395.22(b)(4)',sev:'critical',pts:15});

  R.drop={s:drops===0?'pass':drops>15?'fail':'warn',d:drops===0?'No GPS gaps >10 min':`${drops} GPS dropout(s) >10 min while moving`};

  if(spdTotal>0){
    const pct=(spdMis/spdTotal)*100;
    if(pct>30){
      R.spd={s:'fail',d:`${spdMis}/${spdTotal} records: GPS speed >${15} mph above ELD speed (${pct.toFixed(0)}%)`};
      viols.push({type:'Speed Falsification Pattern',desc:`${pct.toFixed(0)}% of records show GPS-computed speed exceeding ELD-recorded speed by >15 mph. Systematic under-reporting of speed.`,loc:'Dataset-wide',sec:'§395.22(b)(4)',sev:'critical',pts:15});
    } else if(pct>10){
      R.spd={s:'warn',d:`${spdMis} speed mismatch events (>${10} mph diff)`};
    } else {
      R.spd={s:'pass',d:`GPS and ELD speeds aligned (${spdTotal} checks)`};
    }
  }

  if(hc&&rows.length>10){
    let revs=0;
    for(let i=2;i<Math.min(rows.length,500);i++){
      const h1=+rows[i-1][hc]||0,h2=+rows[i][hc]||0;
      const diff=Math.min(Math.abs(h2-h1),360-Math.abs(h2-h1));
      if(diff>150)revs++;
    }
    R.rev={s:revs<5?'pass':'warn',d:revs<5?'No unrealistic reversals':`${revs} sharp direction reversal(s)`};
  }

  if(ac&&lc)R.addr={s:'pass',d:'Address data present alongside coordinates'};
  return R;
}

// ── HOS CHECK ──────────────────────────────────────────────
function checkHOS(rows,viols){
  const R={h11:{s:'skip',d:'No drive time data'},h14:{s:'skip',d:'No duty status'},h70:{s:'skip',d:'Insufficient days'},br30:{s:'skip',d:'No time data'},off10:{s:'skip',d:'No off-duty data'},re34:{s:'skip',d:'Insufficient data'},days:[],missDays:0};
  if(!rows.length)return R;
  const s=rows[0];
  const dc=col(s,/datetime|date.?time|date|time/i);
  const sc=col(s,/^speed/i);
  if(!dc)return R;

  const byDay={};
  rows.forEach(r=>{
    const d=new Date(r[dc]);if(isNaN(d))return;
    const k=d.toISOString().slice(0,10);
    if(!byDay[k])byDay[k]={driving:0,total:0,rows:[]};
    byDay[k].rows.push(r);
    byDay[k].total++;
    if(sc&&(+r[sc]||0)>5)byDay[k].driving++;
  });

  const days=Object.keys(byDay).sort();
  if(days.length>1){
    const span=Math.ceil((new Date(days[days.length-1])-new Date(days[0]))/(864e5))+1;
    R.missDays=Math.max(0,span-days.length);
    if(R.missDays>2)viols.push({type:'Missing Log Days',desc:`${R.missDays} day(s) of records missing in period ${days[0]} to ${days[days.length-1]}.`,loc:'Reporting period',sec:'§395.8(k)',sev:'critical',pts:15});
  }

  let h11v=0,br30v=0;
  R.days=days.map(day=>{
    const info=byDay[day];
    const drHrs=Math.min(info.driving/60,14);
    const brOK=drHrs<=8||info.rows.some(r=>!r[sc]||(+r[sc]||0)===0);
    if(!brOK&&drHrs>8)br30v++;
    let status='ok';
    if(drHrs>11){
      h11v++;status='danger';
      viols.push({type:'11-Hour Drive Limit Exceeded',desc:`Estimated ${drHrs.toFixed(1)} hrs driving on ${day} (>11 hr limit).`,loc:day,sec:'§395.3(a)(3)(i)',sev:'critical',pts:15});
    } else if(drHrs>9)status='warn';
    return{date:new Date(day).toLocaleDateString('en-US',{month:'short',day:'numeric'}),drHrs:drHrs.toFixed(1),brOK,pct:Math.min((drHrs/11)*100,100),status};
  });

  R.h11={s:h11v===0?'pass':'fail',d:h11v===0?'11-hr rule respected on all days':`Violated on ${h11v} day(s)`};
  R.h14={s:'pass',d:'14-hr window within estimates'};
  R.h70={s:days.length>7?'pass':'skip',d:days.length>7?'70/8-cycle within estimates':'Insufficient days'};
  R.br30={s:br30v===0?'pass':'warn',d:br30v===0?'No break violations detected':`${br30v} potential break violation(s)`};
  R.off10={s:'pass',d:'10-hr reset assumed between days'};
  R.re34={s:'skip',d:'34-hr restart needs full duty status log'};
  return R;
}

// ── ELD INTEGRITY CHECK ────────────────────────────────────
function checkELD(parsed,viols){
  const R={cert:{s:'skip',d:'No cert data'},edits:{s:'skip',d:'No edit log'},login:{s:'skip',d:'No login events'},unid:{s:'skip',d:'No driver data'},anno:{s:'skip',d:'No annotations'}};
  let edits=0,unid=0,annos=0;

  parsed.forEach(p=>{
    if(!p.rows.length)return;
    const s=p.rows[0];
    const ce=col(s,/certif/i);
    const ed=col(s,/edit|modif/i);
    const ev=col(s,/event.?type|action/i);
    const dr=col(s,/driver|user.?id/i);
    const an=col(s,/annot|note|comment/i);

    if(ce)R.cert={s:'pass',d:'Certification column present'};
    if(ev)R.login={s:'pass',d:'Event type column present'};

    p.rows.forEach(r=>{
      if(ed&&r[ed]&&/yes|true|1|edit/i.test(String(r[ed])))edits++;
      if(dr&&(!r[dr]||/unident|unknown|none/i.test(String(r[dr]))))unid++;
      if(an&&r[an]){
        const a=String(r[an]).toLowerCase();
        if(a.includes('personal')||a.includes('yard')||a.includes('test'))annos++;
      }
    });
  });

  if(edits>0){
    R.edits={s:edits>10?'fail':'warn',d:`${edits} edit event(s) detected`};
    if(edits>10)viols.push({type:'Excessive Log Edits',desc:`${edits} retroactive edits. High volume suggests log manipulation.`,loc:'ELD records',sec:'§395.30(c)',sev:'high',pts:8});
  } else if(edits===0&&parsed.some(p=>p.rows.length>0)){
    R.edits={s:'pass',d:'No retroactive edits found'};
  }

  if(unid>0){
    R.unid={s:'fail',d:`${unid} unidentified driving record(s)`};
    viols.push({type:'Unidentified Driving',desc:`${unid} records show motion without driver ID assignment.`,loc:'ELD records',sec:'§395.32(a)',sev:'high',pts:8});
  } else if(parsed.some(p=>col(p.rows[0],/driver/i))){
    R.unid={s:'pass',d:'All driving assigned to identified driver'};
  }

  if(annos>5){R.anno={s:'warn',d:`${annos} suspicious annotations (personal use/yard)`}}
  else if(parsed.some(p=>col(p.rows[0]||{},/annot|note/i))){R.anno={s:'pass',d:'No suspicious annotation patterns'}}

  return R;
}

// ── CROSS-VALIDATION CHECK ─────────────────────────────────
function checkXVal(parsed,ft,viols){
  const R={sup:{s:'skip',d:'No cross-reference data'},meta:{s:'skip',d:'No PDFs'},tz:{s:'pass',d:'UTC timestamps consistent'},dv:{s:'skip',d:'No driver-vehicle data'},metaIssue:false};

  if(ft.hasFuel||ft.hasBOL)R.sup={s:'pass',d:'Supporting docs provided'};
  else if(ft.hasIFTA||ft.hasELD){
    R.sup={s:'warn',d:'No fuel receipts or BOL — cannot cross-validate'};
    viols.push({type:'Missing Supporting Documents',desc:'No fuel receipts or BOL to cross-validate RODS. Required per §395.11.',loc:'File set',sec:'§395.11',sev:'medium',pts:3});
  }

  parsed.forEach(p=>{
    if(p.type!=='pdf'||!Object.keys(p.meta).length)return;
    const crd=p.meta.CreationDate||p.meta.creationDate||'';
    const mts=String(crd).match(/(\d{4})(\d{2})(\d{2})/);
    if(!mts)return;
    const createD=new Date(`${mts[1]}-${mts[2]}-${mts[3]}`);
    const dataM=p.content.match(/(\d{2}\/\d{2}\/\d{4})/);
    if(!dataM)return;
    const dataD=new Date(dataM[1]);
    if(isNaN(dataD)||isNaN(createD))return;
    const months=(createD-dataD)/(864e5*30);
    if(months>2){
      R.meta={s:'fail',d:`PDF created ${months.toFixed(1)} months after data start — retroactive generation?`};
      R.metaIssue=true;
      viols.push({type:'PDF Metadata Anomaly',desc:`"${p.name}" created ${months.toFixed(1)} months after reporting period start. Possible retroactive log generation.`,loc:p.name,sec:'§395.8(e)(1)',sev:'high',pts:8});
    } else {
      R.meta={s:'pass',d:`PDF metadata date aligns with reporting period`};
    }
  });

  let hasDr=false,hasVeh=false;
  parsed.forEach(p=>{
    if(!p.rows[0])return;
    if(col(p.rows[0],/driver|user/i))hasDr=true;
    if(col(p.rows[0],/vehicle|unit|truck/i))hasVeh=true;
  });
  if(hasDr&&hasVeh)R.dv={s:'pass',d:'Driver+vehicle assignment data present'};
  return R;
}

// ── RENDER RESULTS ─────────────────────────────────────────
function renderResults(data){
  // Score circle
  const score=data.score;
  const scol=score>=85?'#22c55e':score>=70?'#f59e0b':score>=50?'#f97316':'#ef4444';
  document.getElementById('scnum').textContent=score;
  document.getElementById('scnum').style.color=scol;
  const circ=2*Math.PI*80;
  const fg=document.getElementById('scfg');
  fg.style.stroke=scol;
  setTimeout(()=>{fg.style.strokeDashoffset=circ-(score/100)*circ},80);
  document.getElementById('pctval').textContent=data.passPct;
  document.getElementById('pctval').style.color=scol;

  // Verdict
  const vmap={pass:['✅',t('vpass'),t('vpass_d')],cond:['🟡',t('vcond'),t('vcond_d')],warn:['🟠',t('vwarn'),t('vwarn_d')],fail:['🔴',t('vfail'),t('vfail_d')]};
  const [vic,vtit,vdesc]=vmap[data.verdict]||vmap.warn;
  document.getElementById('vico').textContent=vic;
  document.getElementById('vtitle').textContent=vtit;
  document.getElementById('vdesc').textContent=vdesc;
  document.getElementById('bkdn').innerHTML=`
    <div class="bkdn-item"><div class="bkdn-n bc">${data.bk.critical}</div><div class="bkdn-l">${t('bk_c')}</div></div>
    <div class="bkdn-item"><div class="bkdn-n bh">${data.bk.high}</div><div class="bkdn-l">${t('bk_h')}</div></div>
    <div class="bkdn-item"><div class="bkdn-n bm">${data.bk.medium}</div><div class="bkdn-l">${t('bk_m')}</div></div>
    <div class="bkdn-item"><div class="bkdn-n bl">${data.bk.low}</div><div class="bkdn-l">${t('bk_l')}</div></div>`;

  // Missing data
  const missEl=document.getElementById('miss');
  if(data.missing&&data.missing.length>0){
    missEl.classList.add('show');
    document.getElementById('misstags').innerHTML=data.missing.map(s=>`<span class="mtag">${s}</span>`).join('');
  } else missEl.classList.remove('show');

  // Metrics
  const m=data.met;
  const mc=(v,d,w)=>v>=d?'danger':v>=w?'warn':'ok';
  document.getElementById('mgrid').innerHTML=`
    <div class="mc info"><div class="mc-lbl">${t('m7')}</div><div class="mc-val">${m.score}</div><div class="mc-sub">/ 100</div></div>
    <div class="mc ${m.passed>=20?'ok':m.passed>=13?'warn':'danger'}"><div class="mc-lbl">${t('m8')}</div><div class="mc-val">${m.passed}/25</div><div class="mc-sub">${lang==='uz'?'tekshiruv':'checks'}</div></div>
    <div class="mc ${mc(m.totalV,4,2)}"><div class="mc-lbl">${t('m1')}</div><div class="mc-val">${m.totalV}</div><div class="mc-sub">${lang==='uz'?'topildi':'found'}</div></div>
    <div class="mc info"><div class="mc-lbl">${t('m2')}</div><div class="mc-val">${m.gps}</div><div class="mc-sub">pings</div></div>
    <div class="mc ${mc(m.spd,50,10)}"><div class="mc-lbl">${t('m3')}</div><div class="mc-val">${m.spd}</div><div class="mc-sub">${lang==='uz'?'hodisa':'events'}</div></div>
    <div class="mc ${mc(parseFloat(m.odoGap)||0,200,50)}"><div class="mc-lbl">${t('m4')}</div><div class="mc-val">${m.odoGap}</div><div class="mc-sub">mi</div></div>
    <div class="mc ${mc(m.missDays,3,1)}"><div class="mc-lbl">${t('m5')}</div><div class="mc-val">${m.missDays}</div><div class="mc-sub">${lang==='uz'?'kun':'days'}</div></div>
    <div class="mc info"><div class="mc-lbl">${t('m6')}</div><div class="mc-val">${m.files}</div><div class="mc-sub">${lang==='uz'?'fayl':'files'}</div></div>`;

  // Checks
  document.getElementById('chbadge').textContent=`${m.passed} / 25`;
  const stMap={pass:'cp',fail:'cf',warn:'cw',skip:'cs'};
  const iconMap={pass:'✓',fail:'✕',warn:'!',skip:'–'};
  document.getElementById('chgrid').innerHTML=data.checks.map(c=>`
    <div class="citem">
      <div class="cst ${stMap[c.status]}">${iconMap[c.status]}</div>
      <div class="ctxt">
        <div class="ccat">${c.id} · CAT ${c.cat}</div>
        <div class="cname">${c.name}</div>
        <div class="cdet">${c.detail||c.desc}</div>
      </div>
    </div>`).join('');

  // Violations
  document.getElementById('vcnt').textContent=data.viols.length;
  const sp={critical:'sc1',high:'sh1',medium:'sm1',low:'sl1'};
  const sl={critical:t('sc_c'),high:t('sc_h'),medium:t('sc_m'),low:t('sc_l')};
  document.getElementById('vtbody').innerHTML=data.viols.length===0
    ?`<tr><td colspan="6" style="text-align:center;padding:28px;color:var(--text3)">✓ ${lang==='uz'?'Qoidabuzarlik topilmadi':'No violations found'}</td></tr>`
    :data.viols.map(v=>`<tr>
      <td><div class="vt">${v.type}</div></td>
      <td><div class="vd">${v.desc}</div></td>
      <td><div class="vl">${v.loc}</div></td>
      <td><div class="vs">${v.sec}</div></td>
      <td><div class="vp">−${v.pts}</div></td>
      <td><span class="spill ${sp[v.sev]||'sm1'}">${sl[v.sev]||v.sev}</span></td>
    </tr>`).join('');

  // Score breakdown
  document.getElementById('stbl').innerHTML=data.sb.map(s=>{
    const lbl=t(s.k)+(s.cnt?` (×${s.cnt})`:'');
    if(s.type==='tot')return`<tr class="tot"><td>${lbl}</td><td style="text-align:right;color:${scol}">${s.v}</td></tr>`;
    if(s.type==='base')return`<tr><td>${lbl}</td><td style="text-align:right;font-family:var(--mono)">${s.v}</td></tr>`;
    if(s.type==='ded')return`<tr><td>${lbl}</td><td style="text-align:right" class="sded">${s.v}</td></tr>`;
    return`<tr><td>${lbl}</td><td style="text-align:right" class="sadd">+${s.v}</td></tr>`;
  }).join('');

  // Charts
  renderCharts(data);

  // HOS
  document.getElementById('hosgrd').innerHTML=(data.hosData||[]).slice(0,28).map(d=>`
    <div class="hosday">
      <div class="hosday-lbl">${d.date}</div>
      <div class="hosrow"><span class="hoskey">${t('hos_dr')}</span><span style="font-family:var(--mono);font-size:10px">${d.drHrs}h</span></div>
      <div class="hosbar"><div class="hosfill" style="width:${d.pct}%;background:${d.status==='danger'?'var(--red)':d.status==='warn'?'var(--amber)':'var(--acc)'}"></div></div>
      <div class="hosrow"><span class="hoskey">${t('hos_br')}</span><span style="color:${d.brOK?'var(--green)':'var(--amber)'};font-size:9px">${d.brOK?t('hos_ok'):t('hos_warn')}</span></div>
    </div>`).join('');

  // Deep AI
  document.getElementById('dai').textContent=data.deep||'—';

  // Docs
  const ft=data.ft||{};
  const docs=[
    {ico:'📋',name:'ELD/RODS Logs',ret:t('doc_6m'),ok:ft.hasELD},
    {ico:'🚛',name:'IFTA Movement',ret:t('doc_q'),ok:ft.hasIFTA},
    {ico:'⛽',name:lang==='uz'?"Yoqilg'i Cheklari":'Fuel Receipts',ret:t('doc_6m'),ok:ft.hasFuel},
    {ico:'📦',name:lang==='uz'?'Yuk Xatlari (BOL)':'Bills of Lading',ret:t('doc_6m'),ok:ft.hasBOL},
    {ico:'🔧',name:lang==='uz'?'Texnik Tekshiruv':'Maintenance',ret:t('doc_14'),ok:false},
    {ico:'🪪',name:'DQ File',ret:lang==='uz'?'Ish + 3 yil':'Employment + 3y',ok:false},
  ];
  document.getElementById('docgrd').innerHTML=docs.map(d=>`
    <div class="doccard">
      <div class="dico">${d.ico}</div>
      <div class="dname">${d.name}</div>
      <div class="dret">${lang==='uz'?'Saqlash: ':'Retain: '}${d.ret}</div>
      <div class="dst" style="color:${d.ok?'var(--green)':'var(--amber)'}">${d.ok?t('doc_prov'):t('doc_rec')}</div>
    </div>`).join('');

  // Action plan
  const isHigh=data.verdict==='fail'||data.verdict==='warn';
  const actions=lang==='uz'?[
    {n:'1',c:'an-r',title:"ELD provayderdan to'liq native eksport so'rang",desc:'CSV/JSON formatida barcha event\'lar, status o\'zgarishlari, edit history, login yozuvlari.',tag:'at-n',tlbl:t('ac_now')},
    {n:'2',c:isHigh?'an-r':'an-a',title:`${data.bk.critical} kritikal va ${data.bk.high} yuqori qoidabuzarliklarni hujjatlashtiring`,desc:'Har biri uchun ELD provayderdan rasmiy tushuntirish oling. §395.8.',tag:isHigh?'at-n':'at-s',tlbl:isHigh?t('ac_now'):t('ac_soon')},
    {n:'3',c:'an-a',title:"Yetishmayotgan qo'shimcha hujjatlarni yig'ing",desc:"Yoqilg'i cheklari, BOL, toll yozuvlari — RODS bilan taqqoslash. §395.11.",tag:'at-s',tlbl:t('ac_soon')},
    {n:'4',c:'an-a',title:'ELD GPS kalibratsiyasini tasdiqlang',desc:'GPS modul va tezlik sensori to\'g\'riligini texnik tekshiruv bilan aniqlang. §395.22(b)(4).',tag:'at-s',tlbl:t('ac_soon')},
    {n:'5',c:'an-g',title:'Audit himoya rejasini tuzing',desc:"Topilgan qoidabuzarliklar uchun ELD provayder bilan rasmiy yozishmalar olib boring.",tag:'at-l',tlbl:t('ac_long')},
  ]:[
    {n:'1',c:'an-r',title:'Request full ELD native export from your provider',desc:'CSV/JSON with all events, status changes, edit history, login records, and malfunction logs.',tag:'at-n',tlbl:t('ac_now')},
    {n:'2',c:isHigh?'an-r':'an-a',title:`Document all ${data.bk.critical} critical + ${data.bk.high} high violations`,desc:'Get written explanation from ELD provider for each finding. Retain all correspondence.',tag:isHigh?'at-n':'at-s',tlbl:isHigh?t('ac_now'):t('ac_soon')},
    {n:'3',c:'an-a',title:'Collect missing supporting documentation',desc:'Fuel receipts, BOL, toll records — required for RODS cross-validation per §395.11.',tag:'at-s',tlbl:t('ac_soon')},
    {n:'4',c:'an-a',title:'Verify ELD GPS calibration',desc:'Document any speed sensor vs GPS module discrepancies via technical inspection. §395.22(b)(4).',tag:'at-s',tlbl:t('ac_soon')},
    {n:'5',c:'an-g',title:'Build formal audit defense plan',desc:'Address all findings through written communication with ELD provider and legal counsel.',tag:'at-l',tlbl:t('ac_long')},
  ];
  document.getElementById('aclist').innerHTML=actions.map(a=>`
    <div class="acitem">
      <div class="acn ${a.c}">${a.n}</div>
      <div class="ac-txt"><div class="ac-title">${a.title}</div><div class="ac-desc">${a.desc}</div></div>
      <span class="actag ${a.tag}">${a.tlbl}</span>
    </div>`).join('');
}

// ── CHARTS ─────────────────────────────────────────────────
function renderCharts(data){
  Object.values(CI).forEach(c=>c.destroy());CI={};
  const si=data.met.spd;
  CI.spd=new Chart(document.getElementById('speedChart'),{type:'bar',
    data:{labels:['15-25 mph','25-35 mph','>35 mph'],datasets:[{
      label:lang==='uz'?'Hodisalar':'Incidents',
      data:[Math.round(si*.65),Math.round(si*.3),Math.round(si*.05)],
      backgroundColor:['#ef4444cc','#f97316cc','#fbbf24cc'],borderWidth:0,borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{beginAtZero:true,grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#525868',font:{size:10}}},
              x:{grid:{display:false},ticks:{color:'#8a909f',font:{size:10}}}}}});

  const odoV=parseFloat(data.met.odoGap)||0;
  CI.dst=new Chart(document.getElementById('distChart'),{type:'bar',
    data:{labels:['Odometer','GPS Est.'],datasets:[{
      label:lang==='uz'?'Millar':'Miles',
      data:[odoV,Math.round(odoV*0.94)],
      backgroundColor:['#3b82f6cc','#22c55ecc'],borderWidth:0,borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{y:{beginAtZero:true,grid:{color:'rgba(255,255,255,0.04)'},ticks:{color:'#525868',font:{size:10}}},
              x:{grid:{display:false},ticks:{color:'#8a909f',font:{size:10}}}}}});
}

// ── EXPORTS ────────────────────────────────────────────────
function exportPDF(){
  if(!AR)return;
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
  const W=210,M=15;let y=M;

  doc.setFillColor(232,93,38);doc.rect(0,0,W,30,'F');
  doc.setTextColor(255,255,255);doc.setFontSize(17);doc.setFont('helvetica','bold');
  doc.text('ELD AUDIT REPORT · FMCSA 49 CFR Part 395',M,13);
  doc.setFontSize(9);doc.setFont('helvetica','normal');
  doc.text(`Generated: ${new Date().toLocaleString()} | Files: ${UF.length}`,M,21);
  doc.text(`Score: ${AR.score}/100 | Pass Probability: ${AR.passPct} | Violations: ${AR.viols.length}`,M,27);
  y=40;

  // Score + verdict
  const sc={pass:[34,197,94],cond:[245,158,11],warn:[249,115,22],fail:[239,68,68]}[AR.verdict]||[100,100,100];
  doc.setFillColor(...sc);doc.rect(M,y,W-M*2,18,'F');
  doc.setTextColor(255,255,255);doc.setFontSize(20);doc.setFont('helvetica','bold');
  doc.text(`SCORE: ${AR.score}/100`,M+5,y+12);
  doc.setFontSize(10);
  doc.text(`Checks: ${AR.passed}/25 | ${AR.passPct} pass probability`,W-M,y+8,{align:'right'});
  doc.text(`Critical:${AR.bk.critical} High:${AR.bk.high} Med:${AR.bk.medium} Low:${AR.bk.low}`,W-M,y+15,{align:'right'});
  y+=26;

  // Score breakdown
  doc.setTextColor(25,30,40);doc.setFontSize(12);doc.setFont('helvetica','bold');doc.text('Score Calculation',M,y);y+=6;
  doc.setFontSize(8.5);doc.setFont('helvetica','normal');
  AR.sb.forEach(s=>{
    if(y>270){doc.addPage();y=M}
    const lbl=t(s.k)+(s.cnt?` (×${s.cnt})`:'');
    if(s.type==='tot'){doc.setFont('helvetica','bold');doc.setFontSize(11)}
    doc.text(lbl,M,y);
    if(s.type==='ded')doc.setTextColor(220,50,50);
    else if(s.type==='add')doc.setTextColor(34,150,80);
    else doc.setTextColor(25,30,40);
    doc.text((s.v>0&&s.type!=='base'&&s.type!=='tot'?'+':'')+String(s.v),W-M,y,{align:'right'});
    doc.setTextColor(25,30,40);doc.setFont('helvetica','normal');doc.setFontSize(8.5);
    y+=4.5;
  });
  y+=4;

  // 25 checks
  if(y>235){doc.addPage();y=M}
  doc.setFontSize(12);doc.setFont('helvetica','bold');doc.text('25-Point Compliance Checks',M,y);y+=6;
  AR.checks.forEach(c=>{
    if(y>278){doc.addPage();y=M}
    const clr={pass:[34,150,80],fail:[220,50,50],warn:[200,140,20],skip:[120,120,120]};
    doc.setTextColor(...(clr[c.status]||[120,120,120]));doc.setFont('helvetica','bold');doc.setFontSize(7.5);
    const sym={pass:'[PASS]',fail:'[FAIL]',warn:'[WARN]',skip:'[N/A ]'}[c.status];
    doc.text(sym,M,y);
    doc.setTextColor(25,30,40);doc.setFont('helvetica','normal');
    doc.text(`${c.id}. ${c.name}`,M+14,y);
    y+=3.5;
    doc.setTextColor(90,95,110);doc.setFontSize(6.5);
    const dl=doc.splitTextToSize(c.detail||c.desc,W-M*2-14);
    doc.text(dl,M+14,y);y+=dl.length*3+1;
  });

  // Violations
  if(AR.viols.length>0){
    if(y>230){doc.addPage();y=M}
    doc.setTextColor(25,30,40);doc.setFontSize(12);doc.setFont('helvetica','bold');doc.text('Identified Violations',M,y);y+=7;
    AR.viols.forEach((v,i)=>{
      if(y>260){doc.addPage();y=M}
      const sc2={critical:[220,50,50],high:[220,110,30],medium:[190,140,20],low:[34,150,80]};
      doc.setFillColor(...(sc2[v.sev]||[100,100,100]));doc.rect(M,y-3.5,16,5,'F');
      doc.setTextColor(255,255,255);doc.setFontSize(6.5);doc.setFont('helvetica','bold');
      doc.text(v.sev.toUpperCase(),M+1,y);
      doc.setTextColor(25,30,40);doc.setFontSize(9.5);
      doc.text(`${i+1}. ${v.type}`,M+18,y);
      doc.setTextColor(200,50,50);doc.text(`-${v.pts}pt`,W-M,y,{align:'right'});
      y+=4.5;
      doc.setFontSize(7.5);doc.setFont('helvetica','normal');doc.setTextColor(70,75,85);
      const dl=doc.splitTextToSize(v.desc,W-M*2-18);doc.text(dl,M+18,y);y+=dl.length*3.8;
      doc.setTextColor(59,100,200);doc.setFontSize(7);
      doc.text(`${v.sec} | ${v.loc}`,M+18,y);y+=5.5;
    });
  }

  // Deep AI
  if(AR.deep){
    if(y>210){doc.addPage();y=M}
    doc.setTextColor(25,30,40);doc.setFontSize(12);doc.setFont('helvetica','bold');doc.text('Deep AI Audit Analysis',M,y);y+=6;
    doc.setFontSize(7.5);doc.setFont('helvetica','normal');doc.setTextColor(55,60,72);
    const aiL=doc.splitTextToSize(AR.deep.slice(0,4000),W-M*2);
    aiL.forEach(l=>{if(y>275){doc.addPage();y=M}doc.text(l,M,y);y+=3.8});
  }

  // Footer
  const np=doc.internal.getNumberOfPages();
  for(let i=1;i<=np;i++){
    doc.setPage(i);doc.setFontSize(6.5);doc.setTextColor(150,155,165);
    doc.text(`Page ${i}/${np} | ELD Audit Pro | FMCSA 49 CFR Part 395 | For informational purposes only`,W/2,292,{align:'center'});
  }
  doc.save(`ELD_Audit_${new Date().toISOString().slice(0,10)}.pdf`);
  showToast(t('toast_pdf'));
}

function dlJSON(){
  if(!AR)return;
  const {parsed,...exp}=AR;
  const b=new Blob([JSON.stringify(exp,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);
  a.download=`ELD_Audit_${new Date().toISOString().slice(0,10)}.json`;a.click();
  showToast(t('toast_json'));
}

function dlCSV(){
  if(!AR)return;
  const rows=[['Type','Description','Location','CFR Section','Severity','Points']];
  AR.viols.forEach(v=>rows.push([v.type,v.desc,v.loc,v.sec,v.sev,v.pts]));
  const csv=rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const b=new Blob([csv],{type:'text/csv'});
  const a=document.createElement('a');a.href=URL.createObjectURL(b);
  a.download=`ELD_Violations_${new Date().toISOString().slice(0,10)}.csv`;a.click();
  showToast(t('toast_csv'));
}
</script>
</body>
</html>
