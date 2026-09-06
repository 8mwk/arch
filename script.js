(function(){
"use strict";

  /* ---------------- content ---------------- */
  const CONTENT = {
    about: "Hi, I'm Dazai.\nA developer who builds Discord bots and web things — mostly from a phone.\n\nI run BAD APPLE: whatever I'm shipping this week. Antinuke systems, music bots, AI voice chat, gacha games, the occasional Minecraft mod.\n\nTermux is my terminal. MongoDB is my memory. Lavalink never stops buffering.",
    specializing: ["Discord Bots","Backend Development","Linux & Open Source"],
    skills: {
      "Languages": ["JavaScript","Node.js","Java","HTML / CSS"],
      "Backend & Data": ["MongoDB","PostgreSQL","Supabase","Express"],
      "Discord": ["discord.js v14","Slash Commands","Components v2","OAuth2"],
      "Audio": ["Lavalink","lavalink-client","Custom Filters"],
      "Environment": ["Termux","Git","Pterodactyl / WispByte","tmux"],
      "Other": ["Three.js","Canvas Rendering","LLM Integration"]
    },
    projects: [
      {name:"Eris AntiNuke", desc:"Zero-tolerance Discord security bot — instant-ban protections, invite tracking, XP leveling.", tags:["discord.js","Node.js"]},
      {name:"NexafyreZ", desc:"Community & leveling bot with MongoDB-backed XP for messages and voice time.", tags:["discord.js","MongoDB"]},
      {name:"Gacha Bot", desc:"AniList-powered character collector with live canvas card generation and rarity pulls.", tags:["discord.js","AniList API"]},
      {name:"Velvet", desc:"Voice AI companion bot using Gemini for real-time speech in voice channels.", tags:["discord.js","Gemini"]},
      {name:"iris", desc:"Full-featured Lavalink music bot — 25 commands, audio filters, favorites.", tags:["discord.js","Lavalink"]},
      {name:"fpsboost", desc:"Fabric mod that trims particles, animations and entities for smoother mobile Minecraft.", tags:["Java","Fabric"]},
      {name:"Termux Agent", desc:"A coding agent for the terminal — pluggable LLMs, plan/build modes, session memory.", tags:["Node.js","LLM"]},
      {name:"BAD APPLE", desc:"This site. Three.js showcase, live GitHub feed, a boot sequence that glitches on purpose.", tags:["HTML/CSS/JS","Three.js"]}
    ],
    experience: [
      {when:"Now", what:"Building and maintaining a handful of production Discord bots, entirely from Termux on Android."},
      {when:"Ongoing", what:"Hardening antinuke systems against race conditions — atomic DB writes, audit-log verification."},
      {when:"Ongoing", what:"Running a self-hosted Lavalink node over Termux with persistent tmux sessions."}
    ],
    contact: [
      {label:"GitHub", value:"8mwk", href:"https://github.com/8mwk"},
      {label:"Instagram", value:"@daza1.py", href:"https://instagram.com/daza1.py"},
      {label:"Site", value:"b4d-4pple.netlify.app", href:"https://b4d-4pple.netlify.app"}
    ]
  };

  const bootTime = Date.now();
  function esc(s){ return s.replace(/&/g,"&amp;").replace(/</g,"&lt;"); }
  function uptimeParts(){
    const s = Math.floor((Date.now()-bootTime)/1000);
    const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = s%60;
    return {h,m,sec};
  }
  function uptimeShort(){
    const {h,m,sec} = uptimeParts();
    return h>0 ? `${h}h ${m}m` : `${m}m ${sec}s`;
  }

  function contentHTML(key){
    switch(key){
      case "about": {
        const paras = esc(CONTENT.about).split("\n\n").map(p=>`<p>${p.replace(/\n/g,"<br>")}</p>`).join("");
        const spec = `<p><span class="nf-label">Specializing in</span></p><p>${CONTENT.specializing.map(s=>"• "+s).join("<br>")}</p>`;
        return paras + spec;
      }
      case "skills":
        return Object.entries(CONTENT.skills).map(([cat,items])=>
          `<div style="margin-bottom:8px"><span class="nf-label">${cat}</span><br>${items.join(" · ")}</div>`
        ).join("");
      case "projects":
        return CONTENT.projects.map(p=>
          `<div style="margin-bottom:10px"><span style="color:var(--green)">${p.name}</span> — ${p.desc}<br>${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>`
        ).join("");
      case "experience":
        return CONTENT.experience.map(e=>`<div style="margin-bottom:6px"><span class="nf-label">${e.when}</span> — ${e.what}</div>`).join("");
      case "contact":
        return CONTENT.contact.map(c=>`<div><span class="nf-label">${c.label}:</span> <a href="${c.href}" target="_blank" rel="noopener">${c.value}</a></div>`).join("");
      case "certificates":
        return `<p style="color:var(--text-dim)">Empty for now — check back later.</p>`;
      case "assets":
        return `<p style="color:var(--text-dim)">Empty for now — this folder is where project screenshots, banners, and icons will live.</p>`;
      case "readme":
        return `<p># BAD APPLE<br><br>Portfolio OS for Dazai. Built with HTML, CSS and JS.<br>Press 1–5 to switch workspaces.</p>`;
      default: return "";
    }
  }

  function neofetchHTML(){
    const ascii =
`        /\\
       /  \\
      /    \\
     /------\\
    /        \\
   /  /\\  /\\  \\
  /  /  \\/  \\  \\
 /--/--------\\--\\
/__/          \\__\\`;
    const lines = [
      `<div class="nf-ascii">${ascii}</div>`,
      `<div><span class="nf-label">OS:</span> Arch Linux x86_64</div>`,
      `<div><span class="nf-label">Host:</span> BAD APPLE Portfolio</div>`,
      `<div><span class="nf-label">Kernel:</span> 6.8.9-arch1-1</div>`,
      `<div><span class="nf-label">Uptime:</span> <span id="nf-uptime">${uptimeShort()}</span></div>`,
      `<div><span class="nf-label">Packages:</span> 1287 (pacman)</div>`,
      `<div><span class="nf-label">Shell:</span> zsh 5.9</div>`,
      `<div><span class="nf-label">WM:</span> Hyprland</div>`,
      `<div><span class="nf-label">Terminal:</span> kitty</div>`,
      `<div><span class="nf-label">Theme:</span> Catppuccin-Mocha</div>`,
      `<div><span class="nf-label">Icons:</span> Papirus-Dark</div>`,
      `<div><span class="nf-label">Memory:</span> 2414MiB / 7820MiB</div>`,
      `<div class="nf-swatches"><span class="swatch" style="background:#f38ba8"></span><span class="swatch" style="background:#a6e3a1"></span><span class="swatch" style="background:#f9e2af"></span><span class="swatch" style="background:#89b4fa"></span><span class="swatch" style="background:#cba6f7"></span><span class="swatch" style="background:#94e2d5"></span></div>`
    ];
    return lines.join("");
  }

  /* ---------------- boot sequence: kernel log ---------------- */
  const state = { booted:false };
  const kernelOverlay = document.getElementById("boot-kernel");
  const kernelLog = document.getElementById("kernel-log");
  const loginOverlay = document.getElementById("boot-login");
  const loginPass = document.getElementById("login-pass");
  const loginBtn = document.getElementById("login-btn");

  const KERNEL_LINES = [
    "[    0.000000] Booting Linux on physical CPU 0x0000000000 [0x413fd0c1]",
    "[    0.000000] Linux version 6.8.9-arch1-1 (linux@archlinux) #1 SMP PREEMPT_DYNAMIC",
    "[    0.000000] Command line: BOOT_IMAGE=/vmlinuz-linux root=UUID=3f2a-91cd rw quiet",
    "[    0.041233] ACPI: Core revision 20230628",
    "[    0.203481] Kernel command line contains ftrace filter",
    "[    0.512044] Initializing cgroup subsys cpuset",
    "[    0.876120] Freeing initrd memory: 15436K",
    "[    1.203441] Loading Arch Linux kernel modules&hellip;",
    '[ <span class="boot-ok">OK</span> ] Started Journal Service.',
    '[ <span class="boot-ok">OK</span> ] Mounted /boot.',
    '[ <span class="boot-ok">OK</span> ] Started udev Kernel Device Manager.',
    '[ <span class="boot-ok">OK</span> ] Reached target Local File Systems.',
    '[ <span class="boot-ok">OK</span> ] Started Load/Save Random Seed.',
    '[ <span class="boot-ok">OK</span> ] Started Network Manager.',
    '[ <span class="boot-ok">OK</span> ] Started Bluetooth Service.',
    '[ <span class="boot-ok">OK</span> ] Reached target Network.',
    '[ <span class="boot-ok">OK</span> ] Started NTP Client/Server.',
    '[ <span class="boot-ok">OK</span> ] Reached target System Time Synchronized.',
    '[ <span class="boot-ok">OK</span> ] Started Hyprland Session Manager.',
    '[ <span class="boot-ok">OK</span> ] Reached target Graphical Interface.',
    "Starting Simple Desktop Display Manager&hellip;",
    '[ <span class="boot-ok">OK</span> ] Started Simple Desktop Display Manager.'
  ];

  let kIdx = 0;
  function printNextKernelLine(){
    if(kIdx >= KERNEL_LINES.length){
      setTimeout(showLogin, 450);
      return;
    }
    kernelLog.insertAdjacentHTML("beforeend", KERNEL_LINES[kIdx] + "<br>");
    kernelLog.scrollTop = kernelLog.scrollHeight;
    kIdx++;
    const delay = kIdx < 8 ? 30 + Math.random()*30 : 95 + Math.random()*90;
    setTimeout(printNextKernelLine, delay);
  }

  function showLogin(){
    kernelOverlay.classList.add("hide");
    setTimeout(()=>{ kernelOverlay.style.display = "none"; }, 380);
    loginOverlay.hidden = false;
    loginPass.focus();
  }

  function completeLogin(){
    if(state.booted) return;
    state.booted = true;
    loginOverlay.classList.add("done");
    setTimeout(()=>{ loginOverlay.style.display = "none"; }, 550);
    applyHashWorkspace();
  }

  function applyHashWorkspace(){
    const m = location.hash.match(/ws=(\d)/);
    if(m){ setWorkspace(m[1], {noPersist:true}); return; }
    if(!document.body.classList.contains("embedded-window")){
      try{
        const saved = localStorage.getItem("dazai_last_ws");
        if(saved) setWorkspace(saved);
      }catch(e){}
    }
  }
  function getHashParam(name){
    const m = location.hash.match(new RegExp(name+"=([\\w.-]+)"));
    return m ? decodeURIComponent(m[1]) : null;
  }

  kernelOverlay.addEventListener("click", ()=>{ kIdx = KERNEL_LINES.length; showLogin(); });
  loginBtn.addEventListener("click", completeLogin);
  loginPass.addEventListener("keydown", (e)=>{ if(e.key === "Enter") completeLogin(); });

  if(/boot=skip/.test(location.hash)){
    kernelOverlay.style.display = "none";
    loginOverlay.style.display = "none";
    state.booted = true;
    document.body.classList.add("embedded-window");
    applyHashWorkspace();
  } else {
    setTimeout(printNextKernelLine, 300);
  }

  /* ---------------- workspace switching (with Hyprland-style slide transition) ---------------- */
  const WS_TITLES = {1:"~/portfolio",2:"~/portfolio (tiled)",3:"~/portfolio/terminal",4:"~/portfolio (files)",5:"~/portfolio/dashboard"};
  let currentWs = 1;
  function setWorkspace(n, opts){
    n = Number(n);
    if(!n || n === currentWs) return;
    opts = opts || {};
    const dir = n > currentWs ? "right" : "left";
    const prev = document.querySelector(".workspace.active");
    const target = document.getElementById("ws-"+n);
    if(!target){ return; }
    document.querySelectorAll(".workspace").forEach(w=>w.classList.remove("ws-exit-left","ws-exit-right","ws-enter-left","ws-enter-right"));
    if(prev && prev !== target){
      prev.classList.add(dir === "right" ? "ws-exit-left" : "ws-exit-right");
      setTimeout(()=>{ prev.classList.remove("active","ws-exit-left","ws-exit-right"); }, 210);
    }
    target.classList.add(dir === "right" ? "ws-enter-right" : "ws-enter-left");
    target.classList.add("active");
    requestAnimationFrame(()=>{ requestAnimationFrame(()=>{ target.classList.remove("ws-enter-left","ws-enter-right"); }); });
    document.querySelectorAll(".ws-pill").forEach(p=>p.classList.toggle("active", p.dataset.ws === String(n)));
    const titleEl = document.getElementById("active-window-title");
    if(titleEl) titleEl.textContent = WS_TITLES[n] || "~/portfolio";
    currentWs = n;
    if(!opts.noPersist){
      try{ localStorage.setItem("dazai_last_ws", String(n)); }catch(e){}
    }
  }
  document.querySelectorAll(".ws-pill").forEach(p=>p.addEventListener("click", ()=>setWorkspace(p.dataset.ws)));
  document.querySelectorAll(".dock-btn[data-ws]").forEach(b=>b.addEventListener("click", ()=>setWorkspace(b.dataset.ws)));
  document.getElementById("ws1-dock-terminal")?.addEventListener("click", ()=>{
    toggleFloatWin("ws1-floatwin-terminal", 3);
  });
  document.getElementById("ws1-dock-filemanager")?.addEventListener("click", toggleFileManager);
  function toggleFloatWin(id, wsNum){
    const win = document.getElementById(id);
    if(!win) return;
    if(!win.hidden){ win.hidden = true; return; }
    const frame = win.querySelector(".ws1-floatwin-frame");
    if(frame && !frame.dataset.loaded){
      frame.src = window.location.pathname + `#ws=${wsNum}&boot=skip`;
      frame.dataset.loaded = "1";
    }
    win.hidden = false;
  }
  function toggleFileManager(){
    const win = document.getElementById("ws1-floatwin-filemanager");
    if(!win) return;
    if(!win.hidden){ win.hidden = true; return; }
    openFileManagerPath(null);
  }
  function openFileManagerPath(key){
    const win = document.getElementById("ws1-floatwin-filemanager");
    if(!win) return;
    const frame = win.querySelector(".ws1-floatwin-frame");
    let src = window.location.pathname + "#ws=4&boot=skip";
    if(key) src += "&path=" + encodeURIComponent(key);
    frame.src = src;
    frame.dataset.loaded = "1";
    win.hidden = false;
  }
  document.querySelectorAll(".ws1-floatwin-close").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const target = document.getElementById(btn.dataset.target);
      if(target) target.hidden = true;
    });
  });
  document.getElementById("ws2-code").addEventListener("click", ()=>window.open("https://github.com/8mwk","_blank"));
  document.getElementById("ws2-contact").addEventListener("click", ()=>setWorkspace(1));

  window.addEventListener("keydown", (e)=>{
    if(!state.booted) return;
    if(document.activeElement && document.activeElement.tagName === "INPUT") return;
    if(e.key >= "1" && e.key <= "5") setWorkspace(e.key);
  });

  /* ---------------- clock + stats ---------------- */
  const WEEKDAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  function tick(){
    const d = new Date();
    const hh = String(d.getHours()).padStart(2,"0");
    const mm = String(d.getMinutes()).padStart(2,"0");
    document.querySelectorAll(".clock").forEach(el=>el.textContent = `${hh}:${mm}`);
    const loginTime = document.getElementById("login-time");
    const loginDate = document.getElementById("login-date");
    if(loginTime) loginTime.textContent = `${hh}:${mm}`;
    if(loginDate) loginDate.textContent = `${WEEKDAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
    const lockTime = document.getElementById("lock-time");
    const lockDate = document.getElementById("lock-date");
    if(lockTime) lockTime.textContent = `${hh}:${mm}`;
    if(lockDate) lockDate.textContent = `${WEEKDAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
    const nfUp = document.getElementById("nf-uptime");
    if(nfUp) nfUp.textContent = uptimeShort();
    const valUp = document.getElementById("val-uptime");
    if(valUp) valUp.textContent = uptimeShort();
    if(typeof updateGreeting === "function") updateGreeting();
  }
  tick();
  setInterval(tick, 1000);

  function randomStats(){
    const cpu = 3 + Math.floor(Math.random()*14);
    document.getElementById("stat-cpu").textContent = `Cpu ${cpu}%`;
    [document.getElementById("bar-cpu"), document.getElementById("ws1-bar-cpu")].forEach(el=>{ if(el) el.style.width = cpu + "%"; });
    [document.getElementById("val-cpu"), document.getElementById("ws1-val-cpu")].forEach(el=>{ if(el) el.textContent = cpu + "%"; });
  }
  randomStats();
  setInterval(randomStats, 3500);

  /* ---------------- workspace 1: desktop icons + widgets ---------------- */
  const FILE_META = {
    about: "about.py",
    projects: "projects.json",
    skills: "skills.js",
    experience: "experience.ts",
    contact: "contact.jsx",
    certificates: "certificates.yml",
    readme: "README.md"
  };
  let fileWinZ = 10;
  function openFileWindow(key){
    const layer = document.getElementById("ws1-filewin-layer");
    if(!layer) return;
    let win = document.getElementById("ws1-filewin-" + key);
    if(win){
      win.style.zIndex = ++fileWinZ;
      return;
    }
    const openCount = layer.querySelectorAll(".ws1-filewin").length;
    const offset = (openCount % 5) * 22;
    win = document.createElement("div");
    win.className = "window ws1-filewin";
    win.id = "ws1-filewin-" + key;
    win.style.top = `calc(16% + ${offset}px)`;
    win.style.left = `calc(50% - 210px + ${offset}px)`;
    win.style.zIndex = ++fileWinZ;
    win.innerHTML = `
      <div class="window-titlebar">
        <span class="dots"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span></span>
        <span>${FILE_META[key] || key}</span>
        <button class="ws1-filewin-close" aria-label="Close">✕</button>
      </div>
      <div class="window-body">${contentHTML(key)}</div>`;
    win.addEventListener("mousedown", ()=>{ win.style.zIndex = ++fileWinZ; });
    win.querySelector(".ws1-filewin-close").addEventListener("click", ()=>{ win.remove(); });
    layer.appendChild(win);
  }
  document.querySelectorAll(".ws1-icon[data-key]").forEach(el=>{
    el.addEventListener("click", ()=>openFileWindow(el.dataset.key));
  });
  document.getElementById("ws1-icon-github").addEventListener("click", ()=>window.open("https://github.com/8mwk","_blank"));
  document.getElementById("ws1-dock-github").addEventListener("click", ()=>window.open("https://github.com/8mwk","_blank"));
  document.getElementById("ws1-dock-discord")?.addEventListener("click", ()=>window.open("https://discord.com","_blank"));

  document.getElementById("ws1-skillbars").innerHTML = Object.entries(CONTENT.skills).map(([cat,items])=>{
    const max = Math.max(...Object.values(CONTENT.skills).map(v=>v.length));
    const pct = Math.round(items.length / max * 100);
    return `<div class="skillbar-row"><span class="bar-label">${cat}</span><span class="bar-track"><span class="bar-fill" style="width:${pct}%"></span></span><span class="bar-val">${items.length} tools</span></div>`;
  }).join("");

  function updateGreeting(){
    const h = new Date().getHours();
    const icon = document.getElementById("greeting-icon");
    const big = document.getElementById("greeting-big");
    if(!icon || !big) return;
    if(h < 5){ icon.textContent = "☾"; big.textContent = "Still up"; }
    else if(h < 12){ icon.textContent = "☀"; big.textContent = "Good morning"; }
    else if(h < 18){ icon.textContent = "☀"; big.textContent = "Good afternoon"; }
    else if(h < 21){ icon.textContent = "☾"; big.textContent = "Good evening"; }
    else { icon.textContent = "☾"; big.textContent = "Good night"; }
  }
  updateGreeting();

  /* ---------------- workspace 2: whoami + projects ---------------- */
  document.getElementById("ws2-body").innerHTML = `
    <div><span class="nf-label">$</span> whoami</div>
    <div>dazai</div>
    <div style="margin-top:10px"><span class="nf-label">$</span> cat about.txt</div>
    <br>${contentHTML("about")}
    <br><span class="nf-label">$</span> <span style="animation:blink 1s step-end infinite">▌</span>
  `;
  document.getElementById("ws2-projlist").innerHTML = CONTENT.projects.map(p=>`
    <div class="proj-card">
      <div class="pname">${p.name}</div>
      <div class="pdesc">${p.desc}</div>
    </div>
  `).join("");

  /* ---------------- workspace 3: interactive terminal ---------------- */
  const ws3Log = document.getElementById("ws3-log");
  const ws3Input = document.getElementById("ws3-input");
  function printLine(html){
    ws3Log.insertAdjacentHTML("beforeend", `<div>${html}</div>`);
    ws3Log.scrollTop = ws3Log.scrollHeight;
  }
  function helpText(){
    return [
      ["about","About me"], ["skills","My skills"], ["projects","My projects"],
      ["experience","Experience"], ["contact","Contact me"], ["socials","Social links"],
      ["neofetch","System info"], ["ls","List sections"], ["clear","Clear screen"],
      ["wallpaper <url>","Set desktop wallpaper"], ["theme <name>","mocha/latte/frappe/macchiato"],
      ["lock","Lock the session"], ["hyprctl","Monitor & layout info"], ["pactl","Audio status"],
      ["achievements","List unlocked achievements"]
    ].map(([c,d])=>`  <span class="nf-label">${c}</span>${" ".repeat(Math.max(1,16-c.length))}- ${d}`).join("<br>");
  }
  const WALLPAPER_KEY = "dazai_wallpaper_url";
  function setWallpaper(url){
    const wp = document.getElementById("ws1-wallpaper");
    if(!wp) return;
    wp.style.backgroundImage = `url("${url}")`;
    wp.classList.add("custom-bg");
  }
  function resetWallpaper(){
    const wp = document.getElementById("ws1-wallpaper");
    if(!wp) return;
    wp.style.backgroundImage = "";
    wp.classList.remove("custom-bg");
  }
  (function restoreWallpaper(){
    try{
      const saved = localStorage.getItem(WALLPAPER_KEY);
      if(saved) setWallpaper(saved);
    }catch(e){ /* localStorage unavailable, ignore */ }
  })();
  function runCommand(raw){
    const cmd = raw.trim();
    printLine(`<span class="ws3-prompt">dazai@portfolio:~$</span> ${esc(cmd)}`);
    const base = cmd.split(" ")[0].toLowerCase();
    switch(base){
      case "": break;
      case "help": printLine("Available commands:<br>" + helpText()); break;
      case "about": printLine(contentHTML("about")); break;
      case "skills": printLine(contentHTML("skills")); break;
      case "projects": printLine(contentHTML("projects")); break;
      case "experience": printLine(contentHTML("experience")); break;
      case "contact": case "socials": printLine(contentHTML("contact")); break;
      case "neofetch": printLine(neofetchHTML()); break;
      case "whoami": printLine("dazai"); break;
      case "ls": printLine("about  projects  skills  experience  contact  README.md"); break;
      case "clear": ws3Log.innerHTML = ""; break;
      case "sudo": printLine("Nice try. This incident will be reported to /dev/null."); break;
      case "date": printLine(new Date().toString()); break;
      case "wallpaper": {
        const arg = cmd.slice(base.length).trim();
        if(!arg || arg === "reset" || arg === "clear" || arg === "default"){
          resetWallpaper();
          try{ localStorage.removeItem(WALLPAPER_KEY); }catch(e){}
          printLine(arg ? "Wallpaper reset to default." : "Usage: wallpaper &lt;url&gt;  (or 'wallpaper reset')");
        } else if(!/^https?:\/\/.+\..+/i.test(arg)){
          printLine(`wallpaper: not a valid url: ${esc(arg)}`);
        } else {
          const img = new Image();
          img.onload = ()=>{
            setWallpaper(arg);
            try{ localStorage.setItem(WALLPAPER_KEY, arg); }catch(e){}
            printLine("Wallpaper updated. (Switch to the Home workspace to see it.)");
          };
          img.onerror = ()=>{ printLine(`wallpaper: couldn't load image from ${esc(arg)}`); };
          img.src = arg;
        }
        break;
      }
      default: printLine(`zsh: command not found: ${esc(base)}`);
    }
  }
  printLine(`<span style="color:var(--green);font-weight:700">Welcome to Dazai's Portfolio</span>`);
  printLine(`Type 'help' to see available commands`);
  printLine("");
  ws3Input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
      const v = ws3Input.value; ws3Input.value = ""; runCommand(v);
    }
  });
  document.getElementById("ws-3").addEventListener("click", ()=>ws3Input.focus());
  printLine(neofetchHTML());

  /* ---------------- workspace 4: file manager ---------------- */
  const ws4Preview = document.getElementById("ws4-preview");
  const ws4List = document.getElementById("ws4-list");
  const ws4ItemCount = document.getElementById("ws4-itemcount");
  const ws4BackBtn = document.getElementById("ws4-back");
  const ws4UpBtn = document.getElementById("ws4-up");

  const FS_ITEMS = [
    {key:"about", name:"About", type:"File folder", date:"9/1/2026 8:14 AM"},
    {key:"projects", name:"Projects", type:"File folder", date:"9/3/2026 11:02 PM"},
    {key:"skills", name:"Skills", type:"File folder", date:"8/29/2026 6:47 PM"},
    {key:"experience", name:"Experience", type:"File folder", date:"8/30/2026 2:19 PM"},
    {key:"contact", name:"Contact", type:"File folder", date:"9/2/2026 9:55 AM"},
    {key:"certificates", name:"Certificates", type:"File folder", date:"7/12/2026 4:03 PM"},
    {key:"assets", name:"Assets", type:"File folder", date:"9/4/2026 10:21 AM"},
    {key:"readme", name:"README.md", type:"Markdown Document", date:"6/9/2026 1:30 PM"}
  ];

  function rowIconHTML(key){
    return key === "readme" ? `<span class="file-icon"></span>` : `<span class="folder-icon"></span>`;
  }

  function renderFileList(items){
    if(!items.length){
      ws4List.innerHTML = `<div class="ws4-row-empty">No items match your search.</div>`;
    } else {
      ws4List.innerHTML = items.map(it=>`
        <div class="ws4-row" data-key="${it.key}" tabindex="0">
          <span class="ws4-row-name"><span class="ws4-row-icon">${rowIconHTML(it.key)}</span>${it.name}</span>
          <span class="ws4-row-date">${it.date}</span>
          <span class="ws4-row-type">${it.type}</span>
        </div>`).join("");
    }
    const folders = items.filter(i=>i.key!=="readme").length;
    const files = items.length - folders;
    ws4ItemCount.textContent = `${items.length} item${items.length===1?"":"s"}`;
    ws4List.querySelectorAll(".ws4-row[data-key]").forEach(row=>{
      row.addEventListener("click", ()=>{
        ws4List.querySelectorAll(".ws4-row").forEach(r=>r.classList.remove("selected"));
        row.classList.add("selected");
        openFileEntry(row.dataset.key);
      });
      row.addEventListener("keydown", (e)=>{ if(e.key === "Enter") openFileEntry(row.dataset.key); });
    });
  }

  function openFileEntry(key){
    showPreview(key);
    document.querySelectorAll(".ws4-place").forEach(p=>p.classList.toggle("active", p.dataset.key === key));
    if(ws4BackBtn) ws4BackBtn.disabled = false;
  }

  function showPreview(key){
    ws4Preview.hidden = false;
    const title = key === "readme" ? "README.md" : key.charAt(0).toUpperCase() + key.slice(1);
    ws4Preview.innerHTML = `<span class="close" role="button" tabindex="0">✕</span><h4>${title}</h4>${contentHTML(key)}`;
    ws4Preview.querySelector(".close").addEventListener("click", ()=>{ ws4Preview.hidden = true; });
  }

  renderFileList(FS_ITEMS);

  document.querySelectorAll(".ws4-place[data-key]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const key = el.dataset.key;
      document.querySelectorAll(".ws4-place").forEach(p=>p.classList.remove("active"));
      el.classList.add("active");
      if(key){
        openFileEntry(key);
      } else {
        ws4Preview.hidden = true;
        if(ws4BackBtn) ws4BackBtn.disabled = true;
      }
    });
  });

  ws4UpBtn?.addEventListener("click", ()=>{
    ws4Preview.hidden = true;
    document.querySelectorAll(".ws4-place").forEach(p=>p.classList.toggle("active", !p.dataset.key));
    if(ws4BackBtn) ws4BackBtn.disabled = true;
  });
  ws4BackBtn?.addEventListener("click", ()=>{
    if(ws4BackBtn.disabled) return;
    ws4Preview.hidden = true;
    document.querySelectorAll(".ws4-place").forEach(p=>p.classList.toggle("active", !p.dataset.key));
    ws4BackBtn.disabled = true;
  });
  document.querySelectorAll(".ws4-crumb").forEach(el=>{
    el.addEventListener("click", ()=>{
      ws4Preview.hidden = true;
      document.querySelectorAll(".ws4-place").forEach(p=>p.classList.toggle("active", !p.dataset.key));
      if(ws4BackBtn) ws4BackBtn.disabled = true;
    });
  });

  document.getElementById("ws4-search-input")?.addEventListener("input", (e)=>{
    const q = e.target.value.trim().toLowerCase();
    renderFileList(q ? FS_ITEMS.filter(i=>i.name.toLowerCase().includes(q)) : FS_ITEMS);
  });

  document.querySelectorAll(".ws4-action[data-action]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(btn.dataset.action === "select"){
        ws4List.querySelectorAll(".ws4-row").forEach(r=>r.classList.add("selected"));
      }
    });
  });

  const pendingPath = getHashParam("path");
  if(pendingPath){
    document.querySelectorAll(".ws4-place").forEach(p=>p.classList.toggle("active", p.dataset.key === pendingPath));
    openFileEntry(pendingPath);
  }

  /* ---------------- workspace 5: recent projects ---------------- */
  document.getElementById("ws5-projlist").innerHTML = CONTENT.projects.slice(0,5).map(p=>`<li>${p.name}</li>`).join("");

  /* ================================================================
     HYPRLAND EXTENSIONS
     Notifications · OSD · Quick Settings · Launcher · Overview ·
     Lock screen · Screensaver · Keybinds · Window drag/resize/max ·
     Themes · DND · Achievements · Easter eggs
     ================================================================ */

  /* ---------- helpers ---------- */
  function prefGet(key, fallback){ try{ const v = localStorage.getItem(key); return v === null ? fallback : v; }catch(e){ return fallback; } }
  function prefSet(key, val){ try{ localStorage.setItem(key, val); }catch(e){} }

  /* ---------- notifications (dunst-style) ---------- */
  const notifStack = document.getElementById("notif-stack");
  function showNotification(title, body, ms){
    if(!notifStack) return;
    if(document.body.classList.contains("dnd-on")) return;
    ms = ms || 4200;
    const el = document.createElement("div");
    el.className = "notif";
    el.innerHTML = `<button class="notif-close">✕</button><div class="notif-head">🔔 ${esc(title)}</div><div class="notif-body">${esc(body||"")}</div><div class="notif-bar" style="animation-duration:${ms}ms"></div>`;
    notifStack.appendChild(el);
    const kill = ()=>{ el.classList.add("notif-out"); setTimeout(()=>el.remove(), 220); };
    el.querySelector(".notif-close").addEventListener("click", kill);
    setTimeout(kill, ms);
  }
  window.showNotification = showNotification;

  /* ---------- copy-to-clipboard toasts on contact links ---------- */
  function toast(msg){
    const el = document.createElement("div");
    el.className = "copy-toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(), 1650);
  }
  document.addEventListener("click", (e)=>{
    const link = e.target.closest && e.target.closest('.window-body a[href^="http"], .ws4-preview a[href^="http"]');
    if(link && e.altKey){
      e.preventDefault();
      navigator.clipboard?.writeText(link.href).then(()=>toast("Copied: "+link.href)).catch(()=>{});
    }
  });

  /* ---------- DND ---------- */
  const dndIndicator = document.getElementById("dnd-indicator");
  function setDnd(on){
    document.body.classList.toggle("dnd-on", on);
    if(dndIndicator) dndIndicator.hidden = !on;
    prefSet("dazai_dnd", on ? "1" : "0");
    document.querySelectorAll('.qs-toggle[data-toggle="dnd"]').forEach(b=>b.classList.toggle("on", on));
  }
  setDnd(prefGet("dazai_dnd","0") === "1");

  /* ---------- theming ---------- */
  const THEMES = [
    {id:"mocha", name:"Mocha", swatch:"#7ee787"},
    {id:"latte", name:"Latte", swatch:"#40a02b"},
    {id:"frappe", name:"Frappé", swatch:"#a6d189"},
    {id:"macchiato", name:"Macchiato", swatch:"#a6da95"}
  ];
  function applyTheme(id){
    THEMES.forEach(t=>document.body.classList.remove("theme-"+t.id));
    if(id !== "mocha") document.body.classList.add("theme-"+id);
    prefSet("dazai_theme", id);
    document.querySelectorAll(".qs-theme-dot").forEach(d=>d.classList.toggle("active", d.dataset.theme === id));
  }
  const qsThemes = document.getElementById("qs-themes");
  if(qsThemes){
    qsThemes.innerHTML = THEMES.map(t=>`<span class="qs-theme-dot" data-theme="${t.id}" style="background:${t.swatch}" title="${t.name}"></span>`).join("");
    qsThemes.querySelectorAll(".qs-theme-dot").forEach(d=>d.addEventListener("click", ()=>applyTheme(d.dataset.theme)));
  }
  applyTheme(prefGet("dazai_theme","mocha"));

  /* ---------- quick settings panel ---------- */
  const qsPanel = document.getElementById("quicksettings-panel");
  function toggleQS(force){
    if(!qsPanel) return;
    qsPanel.hidden = typeof force === "boolean" ? !force : !qsPanel.hidden;
  }
  document.getElementById("tray-volume")?.addEventListener("click", ()=>toggleQS());
  document.getElementById("tray-wifi")?.addEventListener("click", ()=>toggleQS());
  document.getElementById("tray-bluetooth")?.addEventListener("click", ()=>toggleQS());
  document.getElementById("tray-battery")?.addEventListener("click", ()=>toggleQS());
  document.getElementById("btn-clock")?.addEventListener("click", ()=>toggleQS());
  document.addEventListener("click", (e)=>{
    if(qsPanel && !qsPanel.hidden && !qsPanel.contains(e.target) && !e.target.closest(".tray-btn")){
      qsPanel.hidden = true;
    }
  });
  ["wifi","bluetooth","dnd","nightlight"].forEach(key=>{
    const btn = qsPanel?.querySelector(`.qs-toggle[data-toggle="${key}"]`);
    if(!btn) return;
    const stored = prefGet("dazai_qs_"+key, key==="wifi"||key==="bluetooth" ? "1" : "0");
    const on = stored === "1";
    if(key === "dnd"){ /* handled by setDnd */ }
    else btn.classList.toggle("on", on);
    if(key === "nightlight") document.body.classList.toggle("nightlight-on", on);
    btn.addEventListener("click", ()=>{
      if(key === "dnd"){
        setDnd(!document.body.classList.contains("dnd-on"));
        showNotification("Do Not Disturb", document.body.classList.contains("dnd-on") ? "Notifications silenced." : "Notifications resumed.");
        return;
      }
      const nowOn = !btn.classList.contains("on");
      btn.classList.toggle("on", nowOn);
      prefSet("dazai_qs_"+key, nowOn ? "1" : "0");
      if(key === "nightlight") document.body.classList.toggle("nightlight-on", nowOn);
      if(key === "wifi") showNotification("Network", nowOn ? "Wi-Fi enabled." : "Wi-Fi disabled.");
      if(key === "bluetooth") showNotification("Bluetooth", nowOn ? "Bluetooth enabled." : "Bluetooth disabled.");
    });
  });
  document.getElementById("qs-lock-btn")?.addEventListener("click", ()=>{ toggleQS(false); lockSession(); });

  /* ---------- OSD (volume / brightness) ---------- */
  let volumeLevel = Number(prefGet("dazai_volume", "70"));
  let brightnessLevel = Number(prefGet("dazai_brightness", "100"));
  let mutedState = prefGet("dazai_muted","0") === "1";
  const qsVolume = document.getElementById("qs-volume"), qsVolumeVal = document.getElementById("qs-volume-val");
  const qsBrightness = document.getElementById("qs-brightness"), qsBrightnessVal = document.getElementById("qs-brightness-val");
  function applyVolume(v, showOsd){
    volumeLevel = Math.max(0, Math.min(100, v));
    prefSet("dazai_volume", String(volumeLevel));
    if(qsVolume) qsVolume.value = volumeLevel;
    if(qsVolumeVal) qsVolumeVal.textContent = (mutedState ? "Muted" : volumeLevel + "%");
    if(showOsd) showOsd_("osd-volume","osd-volume-fill", mutedState ? 0 : volumeLevel, mutedState ? "🔇" : (volumeLevel>50?"🔊":volumeLevel>0?"🔉":"🔈"));
  }
  function applyBrightness(v, showOsd){
    brightnessLevel = Math.max(30, Math.min(100, v));
    prefSet("dazai_brightness", String(brightnessLevel));
    if(qsBrightness) qsBrightness.value = brightnessLevel;
    if(qsBrightnessVal) qsBrightnessVal.textContent = brightnessLevel + "%";
    document.body.style.filter = brightnessLevel < 100 ? `brightness(${0.55 + brightnessLevel/100*0.45})` : "";
    if(showOsd) showOsd_("osd-brightness","osd-brightness-fill", brightnessLevel, "☀");
  }
  function showOsd_(elId, fillId, pct, icon){
    const el = document.getElementById(elId), fill = document.getElementById(fillId);
    if(!el || !fill) return;
    fill.style.width = pct + "%";
    el.querySelector(".osd-icon").textContent = icon;
    el.hidden = false;
    el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
    clearTimeout(el._t);
    el._t = setTimeout(()=>{ el.hidden = true; }, 1550);
  }
  qsVolume?.addEventListener("input", (e)=>{ mutedState = false; applyVolume(Number(e.target.value), true); });
  qsBrightness?.addEventListener("input", (e)=>applyBrightness(Number(e.target.value), true));
  applyVolume(volumeLevel,false); applyBrightness(brightnessLevel,false);

  /* ---------- app launcher (wofi-style) ---------- */
  const LAUNCHER_APPS = [
    {icon:"🏠", name:"Home Desktop", sub:"Workspace 1", action:()=>setWorkspace(1)},
    {icon:"⬡", name:"Tiled Workspace", sub:"Workspace 2", action:()=>setWorkspace(2)},
    {icon:"❯_", name:"Terminal", sub:"Workspace 3", action:()=>setWorkspace(3)},
    {icon:"📁", name:"File Manager", sub:"Workspace 4", action:()=>setWorkspace(4)},
    {icon:"📊", name:"Dashboard", sub:"Workspace 5", action:()=>setWorkspace(5)},
    {icon:"PY", name:"about.py", sub:"About me", action:()=>openFileWindow("about")},
    {icon:"JSON", name:"projects.json", sub:"Projects", action:()=>openFileWindow("projects")},
    {icon:"JS", name:"skills.js", sub:"Skills", action:()=>openFileWindow("skills")},
    {icon:"TS", name:"experience.ts", sub:"Experience", action:()=>openFileWindow("experience")},
    {icon:"JSX", name:"contact.jsx", sub:"Contact", action:()=>openFileWindow("contact")},
    {icon:"", name:"GitHub", sub:"github.com/8mwk", action:()=>window.open("https://github.com/8mwk","_blank")},
    {icon:"⏻", name:"Lock Session", sub:"Alt+L", action:()=>lockSession()},
    {icon:"⚙", name:"Quick Settings", sub:"Wi-Fi, volume, theme", action:()=>toggleQS(true)},
    {icon:"⌨", name:"Keybind Cheatsheet", sub:"Alt+/", action:()=>toggleKeycheat(true)},
    {icon:"⊞", name:"Workspace Overview", sub:"Alt+Tab", action:()=>toggleOverview(true)}
  ];
  const launcherOverlay = document.getElementById("launcher-overlay");
  const launcherInput = document.getElementById("launcher-input");
  const launcherResults = document.getElementById("launcher-results");
  let launcherSel = 0, launcherFiltered = LAUNCHER_APPS.slice();
  function renderLauncher(){
    if(!launcherFiltered.length){
      launcherResults.innerHTML = `<div class="launcher-empty">No matches.</div>`;
      return;
    }
    launcherResults.innerHTML = launcherFiltered.map((a,i)=>
      `<button class="launcher-item${i===launcherSel?" sel":""}" data-i="${i}"><span class="li-icon">${a.icon}</span>${esc(a.name)}<span class="li-sub">${esc(a.sub)}</span></button>`
    ).join("");
    launcherResults.querySelectorAll(".launcher-item").forEach(btn=>{
      btn.addEventListener("click", ()=>runLauncherItem(Number(btn.dataset.i)));
    });
  }
  function runLauncherItem(i){
    const app = launcherFiltered[i];
    if(!app) return;
    toggleLauncher(false);
    app.action();
  }
  function toggleLauncher(force){
    if(!launcherOverlay) return;
    const willShow = typeof force === "boolean" ? force : launcherOverlay.hidden;
    launcherOverlay.hidden = !willShow;
    if(willShow){
      launcherInput.value = ""; launcherFiltered = LAUNCHER_APPS.slice(); launcherSel = 0;
      renderLauncher();
      setTimeout(()=>launcherInput.focus(), 20);
    }
  }
  document.getElementById("btn-launcher")?.addEventListener("click", ()=>toggleLauncher(true));
  launcherInput?.addEventListener("input", ()=>{
    const q = launcherInput.value.trim().toLowerCase();
    launcherFiltered = !q ? LAUNCHER_APPS.slice() : LAUNCHER_APPS.filter(a => a.name.toLowerCase().includes(q) || a.sub.toLowerCase().includes(q));
    launcherSel = 0;
    renderLauncher();
  });
  launcherInput?.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowDown"){ e.preventDefault(); launcherSel = Math.min(launcherFiltered.length-1, launcherSel+1); renderLauncher(); }
    else if(e.key === "ArrowUp"){ e.preventDefault(); launcherSel = Math.max(0, launcherSel-1); renderLauncher(); }
    else if(e.key === "Enter"){ runLauncherItem(launcherSel); }
    else if(e.key === "Escape"){ toggleLauncher(false); }
  });
  launcherOverlay?.addEventListener("click", (e)=>{ if(e.target === launcherOverlay) toggleLauncher(false); });

  /* ---------- workspace overview (exposé) ---------- */
  const overviewOverlay = document.getElementById("overview-overlay");
  const overviewGrid = document.getElementById("overview-grid");
  const WS_NAMES = {1:"Home",2:"Tiled",3:"Terminal",4:"Files",5:"Dashboard"};
  function buildOverview(){
    if(!overviewGrid) return;
    overviewGrid.innerHTML = [1,2,3,4,5].map(n=>
      `<button class="overview-card${n===currentWs?" current":""}" data-ws="${n}"><span class="oc-num">${n}</span><span>${WS_NAMES[n]}</span></button>`
    ).join("");
    overviewGrid.querySelectorAll(".overview-card").forEach(c=>{
      c.addEventListener("click", ()=>{ toggleOverview(false); setWorkspace(c.dataset.ws); });
    });
  }
  function toggleOverview(force){
    if(!overviewOverlay) return;
    const willShow = typeof force === "boolean" ? force : overviewOverlay.hidden;
    if(willShow) buildOverview();
    overviewOverlay.hidden = !willShow;
  }
  document.getElementById("btn-overview")?.addEventListener("click", ()=>toggleOverview());
  overviewOverlay?.addEventListener("click", (e)=>{ if(e.target === overviewOverlay) toggleOverview(false); });

  /* ---------- lock screen ---------- */
  const lockScreen = document.getElementById("lock-screen");
  function lockSession(){
    if(!lockScreen) return;
    lockScreen.hidden = false;
    lockScreen.classList.remove("hide");
  }
  function unlockSession(){
    if(!lockScreen || lockScreen.hidden) return;
    lockScreen.classList.add("hide");
    setTimeout(()=>{ lockScreen.hidden = true; }, 350);
  }
  lockScreen?.addEventListener("click", unlockSession);
  window.addEventListener("keydown", (e)=>{
    if(lockScreen && !lockScreen.hidden && (e.key === "Enter" || e.key === " ")) unlockSession();
  });

  /* ---------- keybind cheatsheet ---------- */
  const keycheatOverlay = document.getElementById("keycheat-overlay");
  const KEYBINDS = [
    ["1 – 5","Switch workspace"],["Alt+D","Open app launcher"],["Alt+Tab","Workspace overview"],
    ["Alt+L","Lock session"],["Alt+E","Open file manager"],["Alt+Return","Open terminal"],
    ["Alt+Q","Close focused window"],["Alt+F","Toggle maximize focused window"],
    ["Alt+Shift+W","Cycle wallpaper"],["Alt+Shift+P / PrtSc","Screenshot flash"],
    ["Alt+, / Alt+.","Volume down / up"],["Alt+M","Mute toggle"],
    ["Alt+Shift+, / .","Brightness down / up"],["Alt+N","Toggle Do Not Disturb"],
    ["Alt+Shift+T","Cycle theme"],["Alt+/","This cheatsheet"],["Esc","Close overlay"]
  ];
  document.getElementById("keycheat-grid").innerHTML = KEYBINDS.map(([k,d])=>`<div class="kc-row"><span>${esc(d)}</span><span class="kc-key">${esc(k)}</span></div>`).join("");
  function toggleKeycheat(force){
    if(!keycheatOverlay) return;
    keycheatOverlay.hidden = typeof force === "boolean" ? !force : !keycheatOverlay.hidden;
  }
  keycheatOverlay?.addEventListener("click", (e)=>{ if(e.target === keycheatOverlay) toggleKeycheat(false); });

  /* ---------- screenshot flash ---------- */
  const screenshotFlash = document.getElementById("screenshot-flash");
  function takeScreenshot(){
    if(!screenshotFlash) return;
    screenshotFlash.classList.remove("flash"); void screenshotFlash.offsetWidth; screenshotFlash.classList.add("flash");
    showNotification("Screenshot", "Saved to ~/Pictures/Screenshots (simulated).");
  }

  /* ---------- idle screensaver ---------- */
  const screensaver = document.getElementById("screensaver");
  const screensaverClock = document.getElementById("screensaver-clock");
  let idleTimer = null;
  function resetIdle(){
    if(screensaver && !screensaver.hidden){ screensaver.hidden = true; }
    clearTimeout(idleTimer);
    idleTimer = setTimeout(()=>{
      if(!screensaver || !state.booted) return;
      if(!lockScreen.hidden || !launcherOverlay.hidden || !overviewOverlay.hidden) { resetIdle(); return; }
      screensaver.hidden = false;
    }, 90000);
  }
  function tickScreensaverClock(){
    if(screensaverClock) screensaverClock.textContent = document.querySelector(".clock")?.textContent || "";
  }
  setInterval(tickScreensaverClock, 1000);
  ["mousemove","mousedown","keydown","touchstart","scroll"].forEach(evt=>window.addEventListener(evt, resetIdle, {passive:true}));
  resetIdle();

  /* ---------- global keybinds (Hyprland-style, using Alt as the "Super" modifier) ---------- */
  window.addEventListener("keydown", (e)=>{
    if(!state.booted) return;
    if(document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")){
      if(e.key === "Escape") document.activeElement.blur();
      return;
    }
    if(e.key === "Escape"){
      if(!launcherOverlay.hidden) toggleLauncher(false);
      else if(!overviewOverlay.hidden) toggleOverview(false);
      else if(!keycheatOverlay.hidden) toggleKeycheat(false);
      else if(!qsPanel.hidden) toggleQS(false);
      return;
    }
    if(!e.altKey && e.key === "?") { toggleKeycheat(); return; }
    if(!e.altKey) return;
    switch(e.key){
      case "d": case "D": e.preventDefault(); toggleLauncher(); break;
      case "Tab": e.preventDefault(); toggleOverview(); break;
      case "l": case "L": e.preventDefault(); lockSession(); break;
      case "e": case "E": e.preventDefault(); setWorkspace(4); break;
      case "Enter": e.preventDefault(); setWorkspace(3); break;
      case "/": e.preventDefault(); toggleKeycheat(); break;
      case "m": case "M": e.preventDefault(); mutedState = !mutedState; prefSet("dazai_muted", mutedState?"1":"0"); applyVolume(volumeLevel, true); break;
      case "n": case "N": e.preventDefault(); setDnd(!document.body.classList.contains("dnd-on")); showNotification("Do Not Disturb", document.body.classList.contains("dnd-on") ? "Notifications silenced." : "Notifications resumed."); break;
      case ",": e.preventDefault();
        if(e.shiftKey) applyBrightness(brightnessLevel-10, true); else { mutedState=false; applyVolume(volumeLevel-10, true); } break;
      case ".": e.preventDefault();
        if(e.shiftKey) applyBrightness(brightnessLevel+10, true); else { mutedState=false; applyVolume(volumeLevel+10, true); } break;
      case "q": case "Q": {
        e.preventDefault();
        const wins = Array.from(document.querySelectorAll(".ws1-filewin"));
        if(wins.length) wins[wins.length-1].remove();
        break;
      }
      case "f": case "F": {
        e.preventDefault();
        const wins = Array.from(document.querySelectorAll(".ws1-filewin"));
        if(wins.length) toggleMaximize(wins[wins.length-1]);
        break;
      }
      case "w": case "W":
        if(e.shiftKey){ e.preventDefault(); cycleWallpaper(); }
        break;
      case "p": case "P":
        if(e.shiftKey){ e.preventDefault(); takeScreenshot(); }
        break;
      case "t": case "T":
        if(e.shiftKey){
          e.preventDefault();
          const ids = THEMES.map(t=>t.id);
          const cur = prefGet("dazai_theme","mocha");
          applyTheme(ids[(ids.indexOf(cur)+1) % ids.length]);
          showNotification("Theme", "Switched to " + THEMES[(ids.indexOf(cur)+1) % ids.length].name);
        }
        break;
    }
  });
  window.addEventListener("keydown", (e)=>{ if(e.key === "PrintScreen") takeScreenshot(); });

  /* ---------- wallpaper cycling ---------- */
  const WALLPAPER_PRESETS = [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=60",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=60",
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1200&q=60"
  ];
  let wallpaperIdx = -1;
  function cycleWallpaper(){
    wallpaperIdx = (wallpaperIdx + 1) % (WALLPAPER_PRESETS.length + 1);
    if(wallpaperIdx === WALLPAPER_PRESETS.length){
      resetWallpaper(); try{ localStorage.removeItem("dazai_wallpaper_url"); }catch(e){}
      showNotification("Wallpaper", "Reset to default.");
      return;
    }
    const url = WALLPAPER_PRESETS[wallpaperIdx];
    setWallpaper(url);
    try{ localStorage.setItem("dazai_wallpaper_url", url); }catch(e){}
    showNotification("Wallpaper", "Cycled to preset " + (wallpaperIdx+1) + ".");
  }

  /* ---------- draggable / resizable / maximizable floating windows ---------- */
  function makeDraggable(win){
    const bar = win.querySelector(".window-titlebar");
    if(!bar) return;
    let sx=0, sy=0, ox=0, oy=0, dragging=false;
    bar.addEventListener("mousedown", (e)=>{
      if(e.target.closest("button")) return;
      dragging = true;
      const rect = win.getBoundingClientRect();
      sx = e.clientX; sy = e.clientY; ox = rect.left; oy = rect.top;
      win.style.position = "fixed"; win.style.left = ox+"px"; win.style.top = oy+"px"; win.style.margin = "0";
      document.body.style.userSelect = "none";
    });
    window.addEventListener("mousemove", (e)=>{
      if(!dragging) return;
      win.style.left = Math.max(0, ox + (e.clientX-sx)) + "px";
      win.style.top = Math.max(38, oy + (e.clientY-sy)) + "px";
    });
    window.addEventListener("mouseup", ()=>{ dragging=false; document.body.style.userSelect=""; });
  }
  function makeResizable(win){
    const handle = document.createElement("div");
    handle.className = "ws1-filewin-resize";
    handle.innerHTML = "◢";
    win.appendChild(handle);
    let sx=0, sy=0, sw=0, sh=0, resizing=false;
    handle.addEventListener("mousedown", (e)=>{
      e.stopPropagation(); resizing = true;
      const rect = win.getBoundingClientRect();
      sx=e.clientX; sy=e.clientY; sw=rect.width; sh=rect.height;
    });
    window.addEventListener("mousemove", (e)=>{
      if(!resizing) return;
      win.style.width = Math.max(260, sw + (e.clientX-sx)) + "px";
      win.style.maxHeight = "none";
      win.style.height = Math.max(160, sh + (e.clientY-sy)) + "px";
    });
    window.addEventListener("mouseup", ()=>{ resizing=false; });
  }
  function toggleMaximize(win){
    win.classList.toggle("maximized");
  }
  function enhanceFileWindow(win){
    makeDraggable(win);
    makeResizable(win);
    win.addEventListener("mousedown", ()=>{
      document.querySelectorAll(".ws1-filewin").forEach(w=>w.classList.remove("win-focused"));
      win.classList.add("win-focused");
    });
    const bar = win.querySelector(".window-titlebar");
    if(bar && !bar.querySelector(".ws1-filewin-max")){
      const maxBtn = document.createElement("button");
      maxBtn.className = "ws1-filewin-max";
      maxBtn.textContent = "▢";
      maxBtn.title = "Maximize (Alt+F)";
      maxBtn.addEventListener("click", (e)=>{ e.stopPropagation(); toggleMaximize(win); });
      const closeBtn = bar.querySelector(".ws1-filewin-close");
      bar.insertBefore(maxBtn, closeBtn);
    }
  }
  // wrap the original openFileWindow to enhance any newly created window
  const _origOpenFileWindow = openFileWindow;
  openFileWindow = function(key){
    const existed = document.getElementById("ws1-filewin-" + key);
    _origOpenFileWindow(key);
    const win = document.getElementById("ws1-filewin-" + key);
    if(win && !existed) enhanceFileWindow(win);
  };
  /* ---------- easter eggs & achievements ---------- */
  const ACHIEVEMENTS_KEY = "dazai_achievements";
  function unlockAchievement(id, title){
    let list = [];
    try{ list = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || "[]"); }catch(e){}
    if(list.includes(id)) return;
    list.push(id);
    try{ localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(list)); }catch(e){}
    showNotification("🏆 Achievement Unlocked", title, 5000);
  }
  // Konami code
  const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let konamiIdx = 0;
  window.addEventListener("keydown", (e)=>{
    konamiIdx = (e.key === KONAMI[konamiIdx]) ? konamiIdx+1 : (e.key === KONAMI[0] ? 1 : 0);
    if(konamiIdx === KONAMI.length){
      konamiIdx = 0;
      unlockAchievement("konami", "Found the Konami code.");
      document.body.style.animation = "none";
    }
  });

  /* ---------- extra terminal commands ---------- */
  const _origRunCommand = runCommand;
  runCommand = function(raw){
    const trimmed = raw.trim();
    const base = trimmed.split(" ")[0].toLowerCase();
    const extra = {
      "hyprctl": ()=>printLine("Monitor eDP-1: 1920x1080@60Hz, active workspace 1<br>Layout: dwindle · Gaps: 6px · Border: 2px"),
      "pactl": ()=>printLine(`Volume: ${mutedState?"muted":volumeLevel+"%"} · Brightness: ${brightnessLevel}%`),
      "lock": ()=>{ lockSession(); printLine("Locking session…"); },
      "matrix": ()=>{ printLine('<span style="color:var(--green)">Wake up, Neo…</span>'); unlockAchievement("matrix","Took the red pill (typed 'matrix')."); },
      "achievements": ()=>{
        let list = [];
        try{ list = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || "[]"); }catch(e){}
        printLine(list.length ? `Unlocked: ${list.join(", ")}` : "No achievements yet — try 'matrix', the Konami code, or explore.");
      }
    };
    if(base === "theme"){
      printLine(`<span class="ws3-prompt">dazai@portfolio:~$</span> ${esc(trimmed)}`);
      const arg = trimmed.slice(5).trim().toLowerCase();
      const ids = THEMES.map(t=>t.id);
      if(ids.includes(arg)){ applyTheme(arg); printLine(`Theme set to ${arg}.`); }
      else printLine(`Usage: theme &lt;${ids.join("|")}&gt;`);
      return;
    }
    if(base === "sudo" && /rm\s+-rf\s+\//.test(trimmed)){
      printLine(`<span class="ws3-prompt">dazai@portfolio:~$</span> ${esc(trimmed)}`);
      printLine('<span class="boot-fail">Permission denied — nice try. 🙂</span>');
      unlockAchievement("rm-rf","Tried to rm -rf / (bold move).");
      return;
    }
    if(extra[base]){
      printLine(`<span class="ws3-prompt">dazai@portfolio:~$</span> ${esc(trimmed)}`);
      extra[base]();
      return;
    }
    _origRunCommand(raw);
  };

  /* ---------- respect persisted quick-toggles: apply on load without duplicate notifications ---------- */
  document.querySelectorAll(".qs-toggle").forEach(btn=>{
    const key = btn.dataset.toggle;
    if(key === "dnd"){ btn.classList.toggle("on", document.body.classList.contains("dnd-on")); }
  });

})();
