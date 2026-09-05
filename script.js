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
    return `
      <div class="nf-ascii">${ascii}</div>
      <div><span class="nf-label">OS:</span> Arch Linux x86_64</div>
      <div><span class="nf-label">Host:</span> BAD APPLE Portfolio</div>
      <div><span class="nf-label">Kernel:</span> 6.8.9-arch1-1</div>
      <div><span class="nf-label">Uptime:</span> <span id="nf-uptime">${uptimeShort()}</span></div>
      <div><span class="nf-label">Packages:</span> 1287 (pacman)</div>
      <div><span class="nf-label">Shell:</span> zsh 5.9</div>
      <div><span class="nf-label">WM:</span> Hyprland</div>
      <div><span class="nf-label">Terminal:</span> kitty</div>
      <div><span class="nf-label">Theme:</span> Catppuccin-Mocha</div>
      <div><span class="nf-label">Icons:</span> Papirus-Dark</div>
      <div><span class="nf-label">Memory:</span> 2414MiB / 7820MiB</div>
      <div class="nf-swatches">
        <span class="swatch" style="background:#f38ba8"></span>
        <span class="swatch" style="background:#a6e3a1"></span>
        <span class="swatch" style="background:#f9e2af"></span>
        <span class="swatch" style="background:#89b4fa"></span>
        <span class="swatch" style="background:#cba6f7"></span>
        <span class="swatch" style="background:#94e2d5"></span>
      </div>`;
  }

  /* ---------------- boot sequence ---------------- */
  const boot = document.getElementById("boot");
  const bootFill = document.getElementById("boot-fill");
  let bootPct = 0;
  function finishBoot(){
    boot.classList.add("done");
    setTimeout(()=>{ boot.style.display="none"; }, 550);
  }
  const bootTimer = setInterval(()=>{
    bootPct += 8 + Math.random()*10;
    if(bootPct >= 100){ bootPct = 100; bootFill.style.width = "100%"; clearInterval(bootTimer); finishBoot(); }
    else bootFill.style.width = bootPct + "%";
  }, 90);
  boot.addEventListener("click", ()=>{ clearInterval(bootTimer); finishBoot(); });

  /* ---------------- workspace switching ---------------- */
  function setWorkspace(n){
    document.querySelectorAll(".workspace").forEach(w=>w.classList.remove("active"));
    const target = document.getElementById("ws-"+n);
    if(target) target.classList.add("active");
    document.querySelectorAll(".ws-pill").forEach(p=>p.classList.toggle("active", p.dataset.ws === String(n)));
  }
  document.querySelectorAll(".ws-pill").forEach(p=>p.addEventListener("click", ()=>setWorkspace(p.dataset.ws)));
  document.querySelectorAll(".dock-btn[data-ws]").forEach(b=>b.addEventListener("click", ()=>setWorkspace(b.dataset.ws)));
  document.getElementById("ws2-code").addEventListener("click", ()=>window.open("https://github.com/8mwk","_blank"));
  document.getElementById("ws2-contact").addEventListener("click", ()=>setWorkspace(1));

  window.addEventListener("keydown", (e)=>{
    if(document.activeElement && document.activeElement.tagName === "INPUT") return;
    if(e.key >= "1" && e.key <= "5") setWorkspace(e.key);
  });

  /* ---------------- clock + stats ---------------- */
  function tick(){
    const d = new Date();
    const hh = String(d.getHours()).padStart(2,"0");
    const mm = String(d.getMinutes()).padStart(2,"0");
    document.querySelectorAll(".clock").forEach(el=>el.textContent = `${hh}:${mm}`);
    const nfUp = document.getElementById("nf-uptime");
    if(nfUp) nfUp.textContent = uptimeShort();
    const valUp = document.getElementById("val-uptime");
    if(valUp) valUp.textContent = uptimeShort();
  }
  tick();
  setInterval(tick, 1000);

  function randomStats(){
    const cpu = 3 + Math.floor(Math.random()*14);
    document.getElementById("stat-cpu").textContent = `Cpu ${cpu}%`;
    const barCpu = document.getElementById("bar-cpu");
    const valCpu = document.getElementById("val-cpu");
    if(barCpu){ barCpu.style.width = cpu + "%"; }
    if(valCpu){ valCpu.textContent = cpu + "%"; }
  }
  randomStats();
  setInterval(randomStats, 3500);

  /* ---------------- workspace 1: sidebar nav ---------------- */
  const ws1Body = document.getElementById("ws1-body");
  ws1Body.innerHTML = neofetchHTML();
  document.querySelectorAll(".ws1-nav[data-panel]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".ws1-nav[data-panel]").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.dataset.panel;
      if(key === "terminal"){
        ws1Body.innerHTML = neofetchHTML();
      } else {
        ws1Body.innerHTML = `<div><span class="nf-label">$</span> cat ${key}.txt</div><br>` + contentHTML(key);
      }
    });
  });
  document.getElementById("ws1-github").addEventListener("click", ()=>window.open("https://github.com/8mwk","_blank"));

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
      ["neofetch","System info"], ["ls","List sections"], ["clear","Clear screen"]
    ].map(([c,d])=>`  <span class="nf-label">${c}</span>${" ".repeat(Math.max(1,12-c.length))}- ${d}`).join("<br>");
  }
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
  document.getElementById("ws3-side-body").innerHTML = neofetchHTML();

  /* ---------------- workspace 4: file manager ---------------- */
  const ws4Preview = document.getElementById("ws4-preview");
  function showPreview(key){
    ws4Preview.hidden = false;
    const title = key.charAt(0).toUpperCase() + key.slice(1);
    ws4Preview.innerHTML = `<span class="close" role="button" tabindex="0">✕</span><h4>${title}</h4>${contentHTML(key)}`;
    ws4Preview.querySelector(".close").addEventListener("click", ()=>{ ws4Preview.hidden = true; });
  }
  document.querySelectorAll(".ws4-item[data-key]").forEach(el=>{
    el.addEventListener("click", ()=>showPreview(el.dataset.key));
  });
  document.querySelectorAll(".ws4-place[data-key]").forEach(el=>{
    el.addEventListener("click", ()=>{
      document.querySelectorAll(".ws4-place").forEach(p=>p.classList.remove("active"));
      el.classList.add("active");
      showPreview(el.dataset.key);
    });
  });

  /* ---------------- workspace 5: recent projects ---------------- */
  document.getElementById("ws5-projlist").innerHTML = CONTENT.projects.slice(0,5).map(p=>`<li>${p.name}</li>`).join("");
})();
