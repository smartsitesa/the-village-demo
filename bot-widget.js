(function(){
  const cfg = window.SmartSiteBotConfig || {};
  const businessName = cfg.businessName || 'Business';
  const generic = cfg.genericMessage || `Hi ${businessName}, I need assistance.`;
  const params = Array.isArray(cfg.parameters) ? cfg.parameters : [];
  const siteAnswers = Array.isArray(cfg.siteAnswers) ? cfg.siteAnswers : [];

  function escapeHtml(v){return String(v||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
  function waUrl(text){
    const num = String(cfg.whatsappNumber || '').replace(/\D/g,'');
    return `https://wa.me/${num}?text=${encodeURIComponent(text || generic)}`;
  }
  function footer(){return '<div class="aiFooter"><span>🔒</span> Your data is secure. <a href="#">Privacy Policy</a></div>'}
  function iconChat(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8"/><path d="M8 13h6"/></svg>'}
  function iconPhone(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.27-1.27a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z"/></svg>'}
  function iconMail(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>'}
  function iconBot(){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>'}
  function iconWa(){return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0 11.9 11.9 0 0 0 1.8 17.9L0 24l6.3-1.7A11.9 11.9 0 0 0 24 12.1a11.8 11.8 0 0 0-3.5-8.6ZM12.1 22a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12.1 22Z"/></svg>'}

  document.body.insertAdjacentHTML('beforeend', `
    <button class="aiFab" id="aiFab" aria-label="Open ${escapeHtml(businessName)} contact widget">${iconChat()}<span>AI Help</span></button>
    <div class="aiPanel" id="aiPanel" role="dialog" aria-label="${escapeHtml(businessName)} contact widget" hidden>
      <div class="aiHead">
        <button class="aiBack" id="aiBack" aria-label="Back" hidden>‹</button>
        <div class="aiHeadMain"><div class="aiLogo">${escapeHtml((businessName[0]||'B').toUpperCase())}</div><span><b id="aiTitle"></b><small id="aiSubtitle"></small></span></div>
        <button id="aiClose" aria-label="Close assistant">×</button>
      </div>
      <div class="aiBody" id="aiBody"></div>
    </div>`);

  const body=document.getElementById('aiBody'), panel=document.getElementById('aiPanel'), title=document.getElementById('aiTitle'), subtitle=document.getElementById('aiSubtitle'), back=document.getElementById('aiBack');
  function setHead(t,s,showBack=true){title.textContent=t; subtitle.textContent=s||''; back.hidden=!showBack;}
  function menu(){
    setHead(cfg.title||businessName, cfg.subtitle||'How can we help you today?', false);
    body.innerHTML=`<button class="contactOption" data-view="whatsapp"><span class="contactIcon whatsapp">${iconWa()}</span>WhatsApp</button><button class="contactOption" data-view="call"><span class="contactIcon">${iconPhone()}</span>Call</button><button class="contactOption" data-view="email"><span class="contactIcon">${iconMail()}</span>Email</button><button class="contactOption" data-view="bot"><span class="contactIcon">${iconBot()}</span>${escapeHtml(cfg.botTitle||'Website Bot')}</button>${footer()}`;
    body.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>render(b.dataset.view));
  }
  function contact(kind){
    setHead(kind==='email'?'Send an Email':kind==='call'?'Start your Call':'Start WhatsApp Chat',kind==='email'?'Please fill in your details to send an email.':kind==='call'?'Please fill in your details to start a call.':'Please fill in your details to start a chat.');
    const fields=kind==='email'?'<div class="aiField"><label>Your Name</label><input class="aiInput" id="cName" placeholder="Enter your name"></div><div class="aiField"><label>Email Address</label><input class="aiInput" id="cEmail" placeholder="Enter your email address"></div>':'';
    body.innerHTML=`<p>${kind==='email'?'Please fill in your details to send an email.':kind==='call'?'Please fill in your details to start a call.':'Please fill in your details to start a chat.'}</p>${fields}<div class="aiField"><label>Message</label><textarea class="aiTextarea" id="cMsg" placeholder="How can we help?">${kind==='whatsapp'?escapeHtml(generic):''}</textarea></div><button class="aiSubmit" id="cSubmit">${kind==='email'?'Send Email':kind==='call'?'Start Call':'Start Chat'}</button><div id="cNotice"></div>${footer()}`;
    document.getElementById('cSubmit').onclick=()=>{const msg=document.getElementById('cMsg').value.trim(); const name=document.getElementById('cName')?.value.trim(); const email=document.getElementById('cEmail')?.value.trim(); if(kind==='email' && !name){document.getElementById('cNotice').innerHTML='<div class="aiNotice">Please enter your name.</div>';return} if(kind==='email'){location.href='mailto:?subject='+encodeURIComponent(cfg.emailSubject||`${businessName} enquiry`)+'&body='+encodeURIComponent(`Name: ${name}\nEmail: ${email||'Not supplied'}\n\n${msg||generic}`)} else if(kind==='call'){location.href='#contact'} else {window.open(waUrl(msg||generic),'_blank','noreferrer')}};
  }
  function bot(){
    let lang='af';
    try { lang = localStorage.getItem('theVillageLanguage') || cfg.defaultLanguage || 'af'; } catch(e) { lang = cfg.defaultLanguage || 'af'; }
    if(!cfg.languages || !cfg.languages[lang]) lang='af';
    const L=()=>cfg.languages?.[lang] || {};
    setHead(cfg.botTitle||'Website Bot',cfg.botSubtitle||'Parameter-based assistant');
    const messages=[];
    let activeOptions = L().quickReplies || cfg.quickReplies || [];
    const followUpOptions = () => [L().backLabel || 'Back to menu', L().agentLabel || 'Speak to someone'];
    function replyText(reply){return typeof reply==='object' ? (reply[lang] || reply.af || reply.en || '') : reply}
    function add(type,text,extra=''){messages.push({type,text,extra}); draw();}
    function langHtml(){return cfg.languages ? `<div class="botLang"><button data-lang="af" class="${lang==='af'?'active':''}">AF</button><button data-lang="en" class="${lang==='en'?'active':''}">EN</button></div>` : ''}
    function optionHtml(){return activeOptions.length ? `<div class="chatChoices inChat">${activeOptions.map(q=>`<button data-quick="${escapeHtml(q)}">${escapeHtml(q)}</button>`).join('')}</div>` : ''}
    function draw(){body.innerHTML=langHtml()+'<div class="aiChat">'+messages.map(m=>`<div class="chatMsg ${m.type}">${escapeHtml(m.text)}${m.extra||''}</div>`).join('')+optionHtml()+'</div><div class="chatInputRow"><input id="botInput" placeholder="'+escapeHtml(L().inputPlaceholder||'Type your message...')+'"><button id="botSend">'+escapeHtml(L().sendLabel||'Send')+'</button></div>'+footer(); const chat=body.querySelector('.aiChat'); chat.scrollTop=chat.scrollHeight; const inp=document.getElementById('botInput'); document.getElementById('botSend').onclick=submit; body.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>switchLang(b.dataset.lang)); body.querySelectorAll('[data-quick]').forEach(b=>b.onclick=()=>{ const text=b.dataset.quick; b.classList.add('selected'); setTimeout(()=>submitText(text),90); }); inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();submit()}}; setTimeout(()=>inp.focus(),20)}
    function switchLang(next){lang=next; try { localStorage.setItem('theVillageLanguage', lang); } catch(e) {} activeOptions=L().quickReplies || []; messages.length=0; add('bot', L().introMessage || `Hello 👋 How can I assist you with ${businessName}?`);}
    function findReply(text){
      const t=text.toLowerCase();
      const pool=[...params,...siteAnswers];
      for(const p of pool){if((p.keywords||[]).some(k=>t.includes(String(k).toLowerCase()))) return replyText(p.reply)}
      const words=t.split(/[^a-z0-9áéíóúèêëîïôöûüàâäçñ]+/i).filter(w=>w.length>3);
      let best=null,score=0;
      for(const p of pool){
        const hay=[...(p.keywords||[]), replyText(p.reply)].join(' ').toLowerCase();
        const hit=words.reduce((n,w)=>n+(hay.includes(w)?1:0),0);
        if(hit>score){score=hit;best=p;}
      }
      if(score>=2 && best) return replyText(best.reply);
      return null;
    }
    function setNextOptions(options){activeOptions=options; draw();}
    function showMainMenu(){activeOptions=L().quickReplies || []; add('bot',L().introMessage || `Hello 👋 How can I assist you with ${businessName}?`);}
    function agentReply(text){const label=L().whatsappLabel || 'Speak on WhatsApp'; const link=`<br><br><a target="_blank" rel="noreferrer" style="color:#0b7d16;font-weight:900" href="${waUrl('Hi '+businessName+', I need help with: '+text)}">${escapeHtml(label)}</a>`; setTimeout(()=>{add('bot',L().agentPrompt || 'No problem — would you like to speak to someone on WhatsApp?',link); setNextOptions([L().backLabel || 'Back to menu']);},250)}
    /* contextual option button sends message into bot, then disappears */
    function submitText(text){
      if(!text)return;
      activeOptions=[];
      add('user',text);
      const lower=text.toLowerCase();
      if(lower===(L().backLabel||'Back to menu').toLowerCase() || lower==='back to menu' || lower==='terug na menu'){setTimeout(()=>showMainMenu(),180);return}
      if(lower===(L().agentLabel||'Speak to someone').toLowerCase() || lower==='speak to an agent' || lower==='whatsapp anne'){agentReply(text);return}
      const reply=findReply(text);
      if(reply){setTimeout(()=>{add('bot',reply); setNextOptions(followUpOptions());},250)}
      else{const label=L().whatsappLabel || 'Speak on WhatsApp'; const link=`<br><br><a target="_blank" rel="noreferrer" style="color:#0b7d16;font-weight:900" href="${waUrl('Hi '+businessName+', I need help with: '+text)}">${escapeHtml(label)}</a>`; setTimeout(()=>{add('bot',L().fallback||cfg.fallback||'I am not sure about that. Do you want to speak to an agent?',link); setNextOptions([L().backLabel || 'Back to menu']);},250)}
    }
    function submit(){const inp=document.getElementById('botInput'); const text=inp.value.trim(); inp.value=''; submitText(text)}
    add('bot',L().introMessage || `Hello 👋 How can I assist you with ${businessName}?`);
  }
  function render(v){if(v==='menu')menu(); if(v==='email'||v==='call'||v==='whatsapp')contact(v); if(v==='bot')bot();}
  document.getElementById('aiFab').onclick=()=>{panel.hidden=false;render('menu')};
  document.getElementById('aiClose').onclick=()=>{panel.hidden=true};
  back.onclick=()=>render('menu');
})();
