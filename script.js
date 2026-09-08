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
    if(m) setWorkspace(m[1]);
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

  /* ---------------- workspace switching ---------------- */
  function setWorkspace(n){
    document.querySelectorAll(".workspace").forEach(w=>w.classList.remove("active"));
    const target = document.getElementById("ws-"+n);
    if(target) target.classList.add("active");
    document.querySelectorAll(".ws-pill").forEach(p=>p.classList.toggle("active", p.dataset.ws === String(n)));
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
    if(typeof wmFocus === "function") wmFocus(win);
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
    if(typeof wmFocus === "function") wmFocus(win);
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

    if(document.activeElement && document.activeElement.tagName === "INPUT"){
      if(e.key === "Escape") document.activeElement.blur();
      return;
    }

    if(e.key >= "1" && e.key <= "5") setWorkspace(e.key);

    if(e.key === "Escape"){
      const menu = document.getElementById("wm-contextmenu");
      if(menu && !menu.hidden) menu.hidden = true;
    }

    if(e.altKey && !e.ctrlKey){
      const focused = document.querySelector(".wm-window.wm-focused:not([hidden])");
      switch(e.key){
        case "Enter": e.preventDefault(); openTerminalWindow(); break;
        case "e": case "E": e.preventDefault(); openFileManagerWindow(); break;
        case "q": case "Q": if(focused){ e.preventDefault(); wmCloseWindow(focused); } break;
        case "f": case "F":
          if(focused){
            e.preventDefault();
            wmApplySnap(focused, focused.dataset.wmSnap === "max" ? "float" : "max");
          }
          break;
        case "ArrowLeft": if(focused){ e.preventDefault(); wmApplySnap(focused, "left"); } break;
        case "ArrowRight": if(focused){ e.preventDefault(); wmApplySnap(focused, "right"); } break;
        case "ArrowUp": if(focused){ e.preventDefault(); wmApplySnap(focused, "max"); } break;
        case "ArrowDown": if(focused){ e.preventDefault(); wmApplySnap(focused, "float"); } break;
        case "Tab": e.preventDefault(); wmCycleFocus(); break;
        case "S":
          if(e.shiftKey){ e.preventDefault(); takeScreenshot(); }
          break;
      }
    }
    if(e.ctrlKey && e.altKey){
      if(e.key === "ArrowUp"){ e.preventDefault(); showVolumeOSD(10); }
      else if(e.key === "ArrowDown"){ e.preventDefault(); showVolumeOSD(-10); }
    }
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

  document.getElementById("stat-wifi")?.addEventListener("click", function(){
    const off = this.classList.toggle("stat-off");
    notify(off ? "Wi-Fi disconnected" : "Wi-Fi connected", off ? "You are now offline" : "Reconnected to portfolio-5G");
  });
  document.getElementById("stat-volume")?.addEventListener("click", function(){
    wmVolume = wmVolume > 0 ? 0 : 80;
    showVolumeOSD(0);
    notify(wmVolume === 0 ? "Muted" : "Unmuted", `Volume ${wmVolume}%`);
  });
  document.getElementById("stat-battery")?.addEventListener("click", ()=>{
    notify("Battery", "61% — 3h 40m remaining (estimated)");
  });

  /* ================= WINDOW MANAGER ================= */
  const desktopEl = document.querySelector(".ws1-desktop");
  let wmZ = 10;
  let wmVolume = 80;
  let wmPendingSnap = null;
  let wmOsdTimer = null;
  let wmSwitcherTimer = null;
  let WM_GAP = 10;

  function wmOpenWindows(){
    return Array.from(document.querySelectorAll(".wm-window")).filter(w=>!w.hidden);
  }
  function wmFocus(win){
    if(!win) return;
    document.querySelectorAll(".wm-window").forEach(w=>w.classList.remove("wm-focused"));
    win.classList.add("wm-focused");
    win.style.zIndex = ++wmZ;
  }
  function wmDetach(win){
    if(win.dataset.wmDetached) return;
    const deskRect = desktopEl.getBoundingClientRect();
    const rect = win.getBoundingClientRect();
    win.style.left = (rect.left - deskRect.left) + "px";
    win.style.top = (rect.top - deskRect.top) + "px";
    win.style.width = rect.width + "px";
    win.style.height = rect.height + "px";
    win.style.transform = "none";
    win.dataset.wmDetached = "1";
  }
  function wmCloseWindow(win){
    if(!win) return;
    if(win.classList.contains("ws1-filewin")) win.remove();
    else win.hidden = true;
  }
  function wmTitleOf(win){
    if(win.dataset.wmTitle) return win.dataset.wmTitle;
    const span = win.querySelector(".window-titlebar span:not(.dots)");
    return span ? span.textContent : "Window";
  }
  function wmIconOf(win){
    if(win.id === "ws1-floatwin-terminal") return ">_";
    if(win.id === "ws1-floatwin-filemanager") return "📁";
    return "📄";
  }

  function geomForZone(zone, deskRect){
    const g = WM_GAP;
    switch(zone){
      case "left": return {left:g, top:g, width:(deskRect.width/2)-g*1.5, height:deskRect.height-g*2};
      case "right": return {left:deskRect.width/2+g/2, top:g, width:(deskRect.width/2)-g*1.5, height:deskRect.height-g*2};
      case "max": return {left:g, top:g, width:deskRect.width-g*2, height:deskRect.height-g*2};
      default: return null;
    }
  }
  function snapGhost(){
    let ghost = document.getElementById("wm-snap-ghost");
    if(!ghost){
      ghost = document.createElement("div");
      ghost.id = "wm-snap-ghost";
      ghost.className = "wm-snap-preview";
      ghost.hidden = true;
      desktopEl.appendChild(ghost);
    }
    return ghost;
  }
  function showSnapPreview(zone, deskRect){
    const g = geomForZone(zone, deskRect);
    if(!g) return;
    const ghost = snapGhost();
    ghost.style.left = g.left+"px"; ghost.style.top = g.top+"px";
    ghost.style.width = g.width+"px"; ghost.style.height = g.height+"px";
    ghost.hidden = false;
  }
  function hideSnapPreview(){
    const ghost = document.getElementById("wm-snap-ghost");
    if(ghost) ghost.hidden = true;
    wmPendingSnap = null;
  }
  function wmApplySnap(win, zone){
    const deskRect = desktopEl.getBoundingClientRect();
    wmDetach(win);
    if(zone === "float"){
      const stored = win.dataset.wmFloatGeom;
      if(stored){
        const g = JSON.parse(stored);
        win.style.left = g.left+"px"; win.style.top = g.top+"px";
        win.style.width = g.width+"px"; win.style.height = g.height+"px";
      }
      win.classList.remove("wm-fullscreen");
      win.dataset.wmSnap = "";
      return;
    }
    if(!win.dataset.wmSnap){
      win.dataset.wmFloatGeom = JSON.stringify({
        left: parseFloat(win.style.left)||0, top: parseFloat(win.style.top)||0,
        width: win.offsetWidth, height: win.offsetHeight
      });
    }
    const g = geomForZone(zone, deskRect);
    if(!g) return;
    win.style.left = g.left+"px"; win.style.top = g.top+"px";
    win.style.width = g.width+"px"; win.style.height = g.height+"px";
    win.classList.toggle("wm-fullscreen", zone === "max");
    win.dataset.wmSnap = zone;
  }

  function wmInit(win){
    if(win.dataset.wmInit) return;
    win.dataset.wmInit = "1";
    win.addEventListener("pointerdown", ()=>wmFocus(win));
    const handle = win.querySelector(".wm-drag-handle");
    if(handle){
      handle.addEventListener("pointerdown", (e)=>{
        if(e.target.closest(".wm-close")) return;
        e.preventDefault();
        wmDetach(win);
        wmFocus(win);
        win.classList.add("wm-dragging");
        const deskRect = desktopEl.getBoundingClientRect();
        const rect = win.getBoundingClientRect();
        const offX = e.clientX - rect.left, offY = e.clientY - rect.top;
        function onMove(ev){
          let x = ev.clientX - deskRect.left - offX;
          let y = ev.clientY - deskRect.top - offY;
          x = Math.max(-win.offsetWidth+60, Math.min(x, deskRect.width-60));
          y = Math.max(0, Math.min(y, deskRect.height-40));
          win.style.left = x+"px"; win.style.top = y+"px";
          const px = ev.clientX-deskRect.left, py = ev.clientY-deskRect.top;
          const margin = 46;
          let zone = null;
          if(px < margin) zone = "left";
          else if(px > deskRect.width-margin) zone = "right";
          else if(py < margin) zone = "max";
          wmPendingSnap = zone;
          if(zone) showSnapPreview(zone, deskRect); else hideSnapPreview();
        }
        function onUp(){
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerup", onUp);
          win.classList.remove("wm-dragging");
          if(wmPendingSnap) wmApplySnap(win, wmPendingSnap);
          hideSnapPreview();
        }
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
      });
    }
    const resizer = win.querySelector(".wm-resize-handle");
    if(resizer){
      resizer.addEventListener("pointerdown", (e)=>{
        e.preventDefault(); e.stopPropagation();
        wmDetach(win);
        wmFocus(win);
        win.classList.add("wm-resizing");
        win.dataset.wmSnap = "";
        const startW = win.offsetWidth, startH = win.offsetHeight;
        const startX = e.clientX, startY = e.clientY;
        function onMove(ev){
          const w = Math.max(280, startW + (ev.clientX-startX));
          const h = Math.max(200, startH + (ev.clientY-startY));
          win.style.width = w+"px"; win.style.height = h+"px";
        }
        function onUp(){
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerup", onUp);
          win.classList.remove("wm-resizing");
        }
        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
      });
    }
  }

  function openTerminalWindow(){
    const win = document.getElementById("ws1-floatwin-terminal");
    if(win.hidden) toggleFloatWin("ws1-floatwin-terminal", 3);
    wmFocus(win);
  }
  function openFileManagerWindow(){
    const win = document.getElementById("ws1-floatwin-filemanager");
    if(win.hidden) toggleFileManager();
    wmFocus(win);
  }

  function wmCycleFocus(){
    const wins = wmOpenWindows();
    if(!wins.length) return;
    const current = document.querySelector(".wm-window.wm-focused");
    let idx = current ? wins.indexOf(current) : -1;
    idx = (idx+1) % wins.length;
    wmFocus(wins[idx]);
    const overlay = document.getElementById("wm-switcher");
    overlay.innerHTML = wins.map(w=>
      `<div class="wm-switcher-item ${w===wins[idx]?"active":""}"><span class="wm-switcher-icon">${wmIconOf(w)}</span>${wmTitleOf(w)}</div>`
    ).join("");
    overlay.hidden = false;
    clearTimeout(wmSwitcherTimer);
    wmSwitcherTimer = setTimeout(()=>{ overlay.hidden = true; }, 1100);
  }

  /* ---------------- notifications ---------------- */
  let wmNotifyId = 0;
  function notify(title, body){
    const layer = document.getElementById("wm-notify-layer");
    if(!layer) return;
    const toast = document.createElement("div");
    toast.className = "wm-toast";
    toast.id = "wm-toast-" + (++wmNotifyId);
    toast.innerHTML = `<div class="wm-toast-title">${esc(title)}</div><div class="wm-toast-body">${esc(body||"")}</div>`;
    layer.appendChild(toast);
    setTimeout(()=>{
      toast.classList.add("wm-toast-out");
      setTimeout(()=>toast.remove(), 260);
    }, 3200);
  }

  /* ---------------- volume OSD ---------------- */
  function showVolumeOSD(delta){
    wmVolume = Math.max(0, Math.min(100, wmVolume + delta));
    const osd = document.getElementById("wm-osd");
    const fill = document.getElementById("wm-osd-fill");
    const val = document.getElementById("wm-osd-val");
    const icon = document.getElementById("wm-osd-icon");
    if(!osd) return;
    fill.style.width = wmVolume + "%";
    val.textContent = wmVolume + "%";
    icon.textContent = wmVolume === 0 ? "🔇" : wmVolume < 50 ? "🔉" : "🔊";
    osd.hidden = false;
    clearTimeout(wmOsdTimer);
    wmOsdTimer = setTimeout(()=>{ osd.hidden = true; }, 1400);
  }

  /* ---------------- screenshot ---------------- */
  function takeScreenshot(){
    const flash = document.getElementById("wm-flash");
    if(flash){
      flash.classList.remove("wm-flash-active");
      void flash.offsetWidth;
      flash.classList.add("wm-flash-active");
    }
    notify("Screenshot captured", "Saved to ~/Pictures/Screenshots");
  }

  /* ---------------- right-click context menu ---------------- */
  const contextMenuItems = [
    {label:"New Terminal", action:()=>openTerminalWindow()},
    {label:"New File Manager", action:()=>openFileManagerWindow()},
    {sep:true},
    {label:"Toggle Blur", action:()=>{
      document.body.classList.toggle("wm-blur-on");
      notify("Compositor", document.body.classList.contains("wm-blur-on") ? "Blur enabled" : "Blur disabled");
    }},
    {label:"Take Screenshot", action:()=>takeScreenshot()},
    {sep:true},
    {label:"Refresh Desktop", action:()=>{ notify("Desktop", "Refreshed"); }}
  ];
  function showContextMenu(x, y){
    const menu = document.getElementById("wm-contextmenu");
    if(!menu) return;
    menu.innerHTML = contextMenuItems.map(it=>
      it.sep ? `<div class="wm-contextmenu-sep"></div>` : `<button class="wm-contextmenu-item" data-idx="${contextMenuItems.indexOf(it)}">${it.label}</button>`
    ).join("");
    const deskRect = desktopEl.getBoundingClientRect();
    menu.style.left = Math.min(x - deskRect.left, deskRect.width-200) + "px";
    menu.style.top = Math.min(y - deskRect.top, deskRect.height-260) + "px";
    menu.hidden = false;
    menu.querySelectorAll(".wm-contextmenu-item").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const item = contextMenuItems[+btn.dataset.idx];
        if(item && item.action) item.action();
        menu.hidden = true;
      });
    });
  }
  desktopEl?.addEventListener("contextmenu", (e)=>{
    if(e.target.closest(".wm-window") || e.target.closest(".ws1-dock") || e.target.closest(".ws1-icon")) return;
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY);
  });
  document.addEventListener("click", (e)=>{
    const menu = document.getElementById("wm-contextmenu");
    if(menu && !menu.hidden && !menu.contains(e.target)) menu.hidden = true;
  });

  /* ---------------- terminal-facing WM controls ---------------- */
  const WM_THEMES = { green:"#5ad68c", blue:"#5ab8d6", purple:"#b892f5", red:"#f5716e", yellow:"#f0d264", pink:"#f792c9", cyan:"#6fe3d6" };
  function setTheme(name){
    const c = WM_THEMES[name];
    if(!c) return false;
    document.documentElement.style.setProperty("--green", c);
    return true;
  }
  function setGaps(n){
    n = Math.max(0, Math.min(40, Math.round(n)));
    WM_GAP = n;
    return n;
  }
  function setBlurMode(on){ document.body.classList.toggle("wm-blur-on", !!on); return on; }
  function toggleBlurMode(){ return document.body.classList.toggle("wm-blur-on"); }
  function wmSnapFocused(dir){
    const focused = document.querySelector(".wm-window.wm-focused:not([hidden])");
    if(!focused) return false;
    wmApplySnap(focused, dir);
    return true;
  }
  function wmListWindows(){ return wmOpenWindows().map(wmTitleOf); }
  function playMatrixRain(ms){
    let canvas = document.getElementById("wm-matrix-canvas");
    if(!canvas){
      canvas = document.createElement("canvas");
      canvas.id = "wm-matrix-canvas";
      canvas.className = "wm-matrix-canvas";
      desktopEl.appendChild(canvas);
    }
    const rect = desktopEl.getBoundingClientRect();
    canvas.width = rect.width; canvas.height = rect.height;
    canvas.hidden = false;
    const ctx = canvas.getContext("2d");
    const cols = Math.floor(canvas.width / 14);
    const drops = new Array(cols).fill(0);
    const chars = "アイウエオカキクケコ0123456789ABCDEF";
    const timer = setInterval(()=>{
      ctx.fillStyle = "rgba(0,0,0,.08)";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "#5ad68c";
      ctx.font = "13px monospace";
      drops.forEach((y,i)=>{
        const ch = chars[Math.floor(Math.random()*chars.length)];
        ctx.fillText(ch, i*14, y*14);
        drops[i] = (y*14 > canvas.height && Math.random() > .975) ? 0 : y+1;
      });
    }, 45);
    setTimeout(()=>{ clearInterval(timer); canvas.hidden = true; }, ms || 4000);
  }

  /* ---------------- register existing WM windows ---------------- */
  document.querySelectorAll(".wm-window").forEach(wmInit);

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
  function openFileWindow(key){
    const layer = document.getElementById("ws1-filewin-layer");
    if(!layer) return;
    let win = document.getElementById("ws1-filewin-" + key);
    if(win){
      wmFocus(win);
      return;
    }
    const openCount = layer.querySelectorAll(".ws1-filewin").length;
    const offset = (openCount % 5) * 22;
    win = document.createElement("div");
    win.className = "window ws1-filewin wm-window";
    win.id = "ws1-filewin-" + key;
    win.dataset.wmTitle = FILE_META[key] || key;
    win.style.top = `calc(16% + ${offset}px)`;
    win.style.left = `calc(50% - 210px + ${offset}px)`;
    win.style.zIndex = ++wmZ;
    win.innerHTML = `
      <div class="window-titlebar wm-drag-handle">
        <span class="dots"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span></span>
        <span>${FILE_META[key] || key}</span>
        <button class="ws1-filewin-close wm-close" aria-label="Close">✕</button>
      </div>
      <div class="window-body">${contentHTML(key)}</div>
      <span class="wm-resize-handle" aria-hidden="true"></span>`;
    win.querySelector(".ws1-filewin-close").addEventListener("click", ()=>{ win.remove(); });
    layer.appendChild(win);
    wmInit(win);
    wmFocus(win);
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
    const groups = [
      ["Portfolio", [
        ["about","About me"], ["skills","My skills"], ["projects","My projects"],
        ["experience","Experience"], ["contact","Contact me"], ["socials","Social links"],
        ["open <file>","Open a desktop file"], ["ls","List sections"], ["neofetch","System info"]
      ]],
      ["System", [
        ["pwd","Print working dir"], ["hostname","Show hostname"], ["uname -a","Kernel info"],
        ["whoami","Current user"], ["date","Current date"], ["cal","Calendar"],
        ["uptime","Session uptime"], ["history","Command history"], ["htop","Process monitor"],
        ["ps","Process list"], ["df -h","Disk usage"], ["free -h","Memory usage"]
      ]],
      ["Window manager", [
        ["theme <name>","green/blue/purple/red/yellow/pink/cyan"], ["gaps <n>","Tile gap size 0-40"],
        ["blur on|off","Toggle window blur"], ["snap <dir>","left/right/max/float"],
        ["windows","List open windows"], ["screenshot","Take a screenshot"]
      ]],
      ["Fun", [
        ["cowsay <text>","Cow says text"], ["fortune","Random quote"], ["joke","Programmer joke"],
        ["banner <text>","ASCII banner"], ["matrix","Enter the matrix"], ["sl","Steam locomotive"],
        ["weather <city>","Local forecast"], ["hyprctl","Compositor status"]
      ]],
      ["Utilities", [
        ["calc <expr>","Calculator"], ["base64 <text>","Encode base64"], ["unbase64 <text>","Decode base64"],
        ["rot13 <text>","ROT13 cipher"], ["reverse <text>","Reverse text"], ["upper/lower <text>","Change case"],
        ["wc <text>","Word/char count"], ["echo <text>","Print text"]
      ]],
      ["Misc", [
        ["wallpaper <url>","Set desktop wallpaper"], ["notify <text>","Send a notification"],
        ["credits","About this build"], ["version","Site version"], ["man <cmd>","Manual for a command"],
        ["clear","Clear screen"], ["exit","Close this window"]
      ]]
    ];
    return groups.map(([title,cmds])=>
      `<div class="nf-label" style="margin-top:6px">${title}</div>` +
      cmds.map(([c,d])=>`  <span class="nf-label">${c}</span>${" ".repeat(Math.max(1,16-c.length))}- ${d}`).join("<br>")
    ).join("<br>");
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
  function wmBridge(){
    try{
      if(window.parent && window.parent !== window && window.parent.wmAPI) return window.parent.wmAPI;
    }catch(e){ /* cross-origin or unavailable */ }
    return window.wmAPI || null;
  }
  const cmdHistory = [];
  let historyIdx = -1;

  const FORTUNES = [
    "The best code is no code at all.",
    "There are only two hard things in CS: cache invalidation and naming things.",
    "It works on my machine.",
    "Weeks of coding can save you hours of planning.",
    "A bug in production is worth two in staging.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency."
  ];
  const JOKES = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "There are 10 types of people: those who understand binary, and those who don't.",
    "I would tell you a UDP joke, but you might not get it.",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "Why did the developer go broke? Because he used up all his cache.",
    "!false — it's funny because it's true."
  ];

  function runCommand(raw){
    const cmd = raw.trim();
    printLine(`<span class="ws3-prompt">dazai@portfolio:~$</span> ${esc(cmd)}`);
    if(cmd){ cmdHistory.push(cmd); historyIdx = cmdHistory.length; }
    const base = cmd.split(" ")[0].toLowerCase();
    const arg = cmd.slice(base.length).trim();
    const api = wmBridge();
    switch(base){
      case "": break;
      case "help": case "commands": printLine("Available commands:<br>" + helpText()); break;
      case "about": printLine(contentHTML("about")); break;
      case "skills": printLine(contentHTML("skills")); break;
      case "projects": printLine(contentHTML("projects")); break;
      case "experience": printLine(contentHTML("experience")); break;
      case "contact": case "socials": printLine(contentHTML("contact")); break;
      case "neofetch": printLine(neofetchHTML()); break;
      case "whoami": printLine("dazai"); break;
      case "ls": printLine("about.py  projects.json  skills.js  experience.ts  contact.jsx  certificates.yml  README.md"); break;
      case "clear": case "cls": ws3Log.innerHTML = ""; break;
      case "sudo": printLine("Nice try. This incident will be reported to /dev/null."); break;
      case "date": printLine(new Date().toString()); break;
      case "pwd": printLine("/home/dazai/portfolio"); break;
      case "hostname": printLine("portfolio"); break;
      case "uname": printLine(arg.includes("-a") ? "Linux portfolio 6.8.9-arch1-1 x86_64 GNU/Linux" : "Linux"); break;
      case "uptime": printLine(`up ${uptimeShort()}, 1 user, load average: 0.31, 0.22, 0.18`); break;
      case "history": printLine(cmdHistory.map((c,i)=>`  ${i+1}  ${esc(c)}`).join("<br>") || "(empty)"); break;
      case "alias": printLine("ll='ls -la'<br>gs='git status'<br>..='cd ..'"); break;
      case "cal": printLine(calendarHTML()); break;
      case "echo": printLine(esc(arg)); break;
      case "cowsay": printLine(cowsayHTML(arg || "moo")); break;
      case "fortune": printLine(FORTUNES[Math.floor(Math.random()*FORTUNES.length)]); break;
      case "joke": printLine(JOKES[Math.floor(Math.random()*JOKES.length)]); break;
      case "banner": printLine(bannerHTML(arg || "dazai")); break;
      case "sl": printLine(`    ====        ________                ___________<br> _D _|  |_______/        \\__I_I_____===__|_________|<br>  |(_)---  |   H\\________/ |   |        =|___ ___|<br>  /     |  |   H  |  |     |   |         ||_| |_||<br> |      |  |   H  |__--------------------| [___] |<br> | ________|___H__/__|_____/[][]~\\_______|       |<br> |/ |   |-----------I_____I [][] []  D   |=======|__`); break;
      case "htop": printLine(htopHTML()); break;
      case "ps": printLine("  PID TTY          TIME CMD<br> 1024 pts/0    00:00:01 zsh<br> 2048 pts/0    00:00:00 node<br> 3072 pts/0    00:00:00 ps"); break;
      case "df": printLine("Filesystem      Size  Used Avail Use% Mounted on<br>/dev/sda1        50G   32G   18G  64% /<br>tmpfs           3.9G     0  3.9G   0% /tmp"); break;
      case "free": printLine(`              total        used        free<br>Mem:           7.8G        2.4G        5.4G<br>Swap:          2.0G        0.0G        2.0G`); break;
      case "ping": {
        if(!arg){ printLine("Usage: ping &lt;host&gt;"); break; }
        const host = esc(arg);
        for(let i=0;i<4;i++){ printLine(`64 bytes from ${host}: icmp_seq=${i+1} ttl=57 time=${(8+Math.random()*30).toFixed(1)} ms`); }
        printLine(`--- ${host} ping statistics ---<br>4 packets transmitted, 4 received, 0% packet loss`);
        break;
      }
      case "curl": printLine(arg ? `curl: (6) Could not resolve host: ${esc(arg)}` : "Usage: curl &lt;url&gt;"); break;
      case "rm":
        if(/-rf\s+\/(\s|$)/.test(cmd) || arg === "/"){ printLine("Nice try. This filesystem is read-only (and this is a portfolio, not your root partition)."); }
        else { printLine("rm: this filesystem is read-only."); }
        break;
      case "touch": case "mkdir": case "cp": case "mv":
        printLine(`${base}: this filesystem is read-only.`); break;
      case "exit":
        if(api && api !== window.wmAPI){ printLine("Closing session…"); setTimeout(()=>{ try{ window.parent.postMessage("wm-close-terminal","*"); }catch(e){} }, 300); }
        else printLine("Cannot exit login session.");
        break;
      case "reboot":
        printLine("Restarting system…");
        setTimeout(()=>printLine("[  OK  ] Stopped target Graphical Interface."), 300);
        setTimeout(()=>printLine("[  OK  ] Reached target Reboot."), 700);
        setTimeout(()=>printLine("System going down for reboot NOW. (This is a portfolio — nothing actually happened.)"), 1100);
        break;
      case "shutdown":
        printLine("System going down for shutdown NOW.");
        setTimeout(()=>printLine("(Relax — this is just a portfolio. Nothing was harmed.)"), 500);
        break;
      case "theme": {
        if(api && api.setTheme(arg)) printLine(`Theme accent set to ${esc(arg)}.`);
        else printLine("Usage: theme &lt;green|blue|purple|red|yellow|pink|cyan&gt;");
        break;
      }
      case "gaps": {
        const n = parseInt(arg,10);
        if(api && !isNaN(n)) printLine(`Gap size set to ${api.setGaps(n)}px.`);
        else printLine("Usage: gaps &lt;0-40&gt;");
        break;
      }
      case "blur": {
        if(!api){ printLine("blur: window manager unavailable."); break; }
        if(arg === "on") { api.setBlurMode(true); printLine("Blur enabled."); }
        else if(arg === "off") { api.setBlurMode(false); printLine("Blur disabled."); }
        else { printLine(api.toggleBlurMode() ? "Blur enabled." : "Blur disabled."); }
        break;
      }
      case "snap": {
        const dir = arg.toLowerCase();
        if(api && ["left","right","max","float"].includes(dir)){
          printLine(api.wmSnapFocused(dir) ? `Snapped to ${dir}.` : "No focused window to snap.");
        } else printLine("Usage: snap &lt;left|right|max|float&gt;");
        break;
      }
      case "windows": case "wmctrl": {
        if(!api){ printLine("windows: window manager unavailable."); break; }
        const list = api.wmListWindows();
        printLine(list.length ? list.map(t=>`  • ${esc(t)}`).join("<br>") : "No windows open.");
        break;
      }
      case "screenshot": if(api){ api.takeScreenshot(); printLine("Screenshot saved."); } break;
      case "notify": if(api){ api.notify("Terminal", arg || "Hello!"); printLine("Notification sent."); } break;
      case "matrix": if(api){ api.playMatrixRain(4000); printLine("Wake up, Neo…"); } break;
      case "open": {
        const keys = ["about","projects","skills","experience","contact","certificates","readme"];
        const key = keys.find(k=>k===arg.toLowerCase());
        if(api && key){ api.openFileWindow(key); printLine(`Opening ${esc(arg)}…`); }
        else printLine(`open: unknown file '${esc(arg)}'. Try: ${keys.join(", ")}`);
        break;
      }
      case "hyprctl": printLine(`monitor: DP-1 (1920x1080@60Hz)<br>active workspace: 1<br>windows: ${api ? api.wmListWindows().length : 0}<br>compositor: Hyprland 0.42.0`); break;
      case "calc": {
        try{
          if(!/^[0-9+\-*/().\s]+$/.test(arg)) throw new Error("bad expr");
          // eslint-disable-next-line no-new-func
          const result = Function(`"use strict";return (${arg})`)();
          printLine(`${esc(arg)} = ${result}`);
        }catch(e){ printLine("calc: invalid expression"); }
        break;
      }
      case "base64": printLine(arg ? btoa(arg) : "Usage: base64 &lt;text&gt;"); break;
      case "unbase64": try{ printLine(atob(arg)); }catch(e){ printLine("unbase64: invalid input"); } break;
      case "rot13": printLine(esc(rot13(arg))); break;
      case "reverse": printLine(esc([...arg].reverse().join(""))); break;
      case "upper": printLine(esc(arg.toUpperCase())); break;
      case "lower": printLine(esc(arg.toLowerCase())); break;
      case "wc": printLine(`${arg.split(/\s+/).filter(Boolean).length} words, ${arg.length} chars`); break;
      case "yes": {
        const word = arg || "y";
        printLine(new Array(15).fill(esc(word)).join("<br>") + "<br>… (truncated)");
        break;
      }
      case "credits": printLine("Built by dazai — HTML, CSS &amp; vanilla JS. No frameworks were harmed."); break;
      case "version": printLine("BAD APPLE Portfolio OS — v2.0 'Hyprland Edition'"); break;
      case "man": printLine(arg ? `No manual entry for ${esc(arg)}. Try 'help' instead.` : "What manual page do you want?"); break;
      case "weather": {
        if(!arg){ printLine("Usage: weather &lt;city&gt;"); break; }
        let h=0; for(const c of arg) h = (h*31 + c.charCodeAt(0)) % 997;
        const conditions = ["Clear","Cloudy","Rainy","Windy","Partly cloudy","Foggy"];
        printLine(`${esc(arg)}: ${conditions[h%conditions.length]}, ${10+h%22}°C, humidity ${30+h%50}%`);
        break;
      }
      case "wallpaper": {
        const wpArg = arg;
        if(!wpArg || wpArg === "reset" || wpArg === "clear" || wpArg === "default"){
          resetWallpaper();
          try{ localStorage.removeItem(WALLPAPER_KEY); }catch(e){}
          printLine(wpArg ? "Wallpaper reset to default." : "Usage: wallpaper &lt;url&gt;  (or 'wallpaper reset')");
        } else if(!/^https?:\/\/.+\..+/i.test(wpArg)){
          printLine(`wallpaper: not a valid url: ${esc(wpArg)}`);
        } else {
          const img = new Image();
          img.onload = ()=>{
            setWallpaper(wpArg);
            try{ localStorage.setItem(WALLPAPER_KEY, wpArg); }catch(e){}
            printLine("Wallpaper updated. (Switch to the Home workspace to see it.)");
          };
          img.onerror = ()=>{ printLine(`wallpaper: couldn't load image from ${esc(wpArg)}`); };
          img.src = wpArg;
        }
        break;
      }
      default: printLine(`zsh: command not found: ${esc(base)}`);
    }
  }
  function rot13(s){
    return s.replace(/[a-zA-Z]/g, (c)=>{
      const base = c <= "Z" ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
    });
  }
  function calendarHTML(){
    const d = new Date();
    const y = d.getFullYear(), m = d.getMonth();
    const first = new Date(y,m,1).getDay();
    const days = new Date(y,m+1,0).getDate();
    const monthName = MONTHS[m];
    let out = `<span class="nf-label">${monthName} ${y}</span><br>Su Mo Tu We Th Fr Sa<br>` + "   ".repeat(first);
    for(let i=1;i<=days;i++){
      out += (i===d.getDate() ? `<span style="background:var(--green);color:#05070a">${String(i).padStart(2)}</span>` : String(i).padStart(2)) + " ";
      if((i+first) % 7 === 0) out += "<br>";
    }
    return out;
  }
  function cowsayHTML(text){
    const line = esc(text);
    const bar = "-".repeat(Math.min(line.length+2, 40));
    return ` ${bar}<br>&lt; ${line} &gt;<br> ${bar}<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||`;
  }
  function bannerHTML(text){
    const line = esc(text.toUpperCase());
    const bar = "#".repeat(line.length + 4);
    return `${bar}<br># ${line} #<br>${bar}`;
  }
  function htopHTML(){
    return `PID   USER   CPU%  MEM%  COMMAND<br>1024  dazai  ${(2+Math.random()*8).toFixed(1)}   3.2   node index.js<br>2048  dazai  ${(1+Math.random()*4).toFixed(1)}   1.1   zsh<br>3072  dazai  0.3   0.4   htop`;
  }
  printLine(`<span style="color:var(--green);font-weight:700">Welcome to Dazai's Portfolio</span>`);
  printLine(`Type 'help' to see available commands`);
  printLine("");
  ws3Input.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
      const v = ws3Input.value; ws3Input.value = ""; runCommand(v);
    } else if(e.key === "ArrowUp"){
      if(cmdHistory.length){
        historyIdx = Math.max(0, historyIdx-1);
        ws3Input.value = cmdHistory[historyIdx] || "";
        e.preventDefault();
      }
    } else if(e.key === "ArrowDown"){
      if(cmdHistory.length){
        historyIdx = Math.min(cmdHistory.length, historyIdx+1);
        ws3Input.value = cmdHistory[historyIdx] || "";
        e.preventDefault();
      }
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

  /* ---------------- expose WM control bridge for embedded Terminal ---------------- */
  window.wmAPI = {
    notify, showVolumeOSD, takeScreenshot,
    setTheme, setGaps, toggleBlurMode, setBlurMode,
    wmSnapFocused, wmListWindows, openFileWindow, wmFocus, playMatrixRain
  };
  window.addEventListener("message", (e)=>{
    if(e.data === "wm-close-terminal"){
      const win = document.getElementById("ws1-floatwin-terminal");
      if(win) win.hidden = true;
    }
  });
})();
