(function () {
  const data = window.SITE_DATA;
  const root = document.documentElement;
  const savedLang = localStorage.getItem("wzy-lang");
  root.dataset.theme = "dark";
  root.lang = savedLang || root.lang || "en";

  function t(entry) {
    const lang = root.lang.startsWith("zh") ? "zh" : "en";
    if (typeof entry === "string") return entry;
    return entry?.[lang] || entry?.en || "";
  }

  function isZh() {
    return root.lang.startsWith("zh");
  }

  function imgMarkup(src, alt, eager = false) {
    const loading = eager ? "eager" : "lazy";
    return `<img src="${src}" alt="${alt}" loading="${loading}" decoding="async" />`;
  }

  function nav(pathname) {
    const items = [
      ["Home", "/", "首页"],
      ["About", "/about/", "关于"],
      ["Projects", "/projects/", "项目"],
      ["News", "/news/", "动态"],
      ["Publications", "/publications/", "论文"],
      ["CV", "/cv/", "简历"],
      ["Life", "/life/", "生活"]
    ];
    return items
      .map(([en, href, zh]) => {
        const active = pathname === href ? " active" : "";
        return `<a class="nav-link${active}" href="${href}">${isZh() ? zh : en}</a>`;
      })
      .join("");
  }

  function shell(pathname, main) {
    return `
      <div class="site-shell">
        <nav class="site-nav">
          <a class="brand-lockup" href="/">
            <span class="brand-title">Zhengyang Wang / 王正旸</span>
            <span class="brand-subtitle">${data.identity.affiliation}</span>
          </a>
          <div class="nav-links">${nav(pathname)}</div>
          <div class="nav-tools">
            <button class="lang-button" id="lang-toggle">${isZh() ? "EN" : "中文"}</button>
          </div>
        </nav>
        ${main}
        <footer class="footer">
          <div>© 2026 Zhengyang Wang</div>
          <div>
            <a class="text-link" href="${data.identity.github}" target="_blank" rel="noreferrer">GitHub</a>
            ·
            <a class="text-link" href="mailto:${data.identity.email}">Email</a>
          </div>
        </footer>
      </div>
    `;
  }

  function renderProjectCard(project, headingTag, eager = false) {
    const heading = headingTag || "h3";
    return `
      <article class="panel project-card">
        ${imgMarkup(project.image, project.title, eager)}
        <span class="card-tag">${project.category} · ${project.status}</span>
        <${heading} class="card-title project-title">${project.title}</${heading}>
        <p class="card-text">${t(project.summary)}</p>
        <div class="metric-row">${(project.metrics || []).map((item) => `<span class="metric-pill">${item}</span>`).join("")}</div>
        ${
          project.bullets
            ? `<ul class="card-list" style="margin-top:14px;">${project.bullets.map((item) => `<li>${t(item)}</li>`).join("")}</ul>`
            : ""
        }
      </article>
    `;
  }

  function renderHomeProjectCard(project, eager = false) {
    return `
      <article class="panel home-project-card">
        ${imgMarkup(project.image, project.title, eager)}
        <div class="home-project-copy">
          <span class="card-tag">${project.category} · ${project.status}</span>
          <h3 class="card-title project-title home-project-title">${project.title}</h3>
        </div>
      </article>
    `;
  }

  function renderPublication(pub, compact = false) {
    const extraClass = compact ? "sidebar-publication-card" : "publication-list-card";
    const titleTag = compact ? "h3" : "h2";
    const tag = [pub.venue, pub.status].filter(Boolean).join(" · ");
    const links = pub.links || [];
    return `
      <article class="panel publication-card ${extraClass}">
        ${imgMarkup(pub.image, pub.title)}
        <div>
          <span class="card-tag">${tag}</span>
          <${titleTag} class="card-title publication-title">${pub.title}</${titleTag}>
          <p class="publication-meta">${pub.authors}</p>
          ${pub.date ? `<p class="publication-meta" style="margin-top:8px;">${pub.date}</p>` : ""}
          <p class="publication-meta" style="margin-top:10px;">${t(pub.note)}</p>
          ${pub.summary ? `<p class="card-text" style="margin-top:10px;">${t(pub.summary)}</p>` : ""}
          ${
            links.length
              ? `<div class="link-row">${links.map((link) => `<a class="button" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}</div>`
              : ""
          }
        </div>
      </article>
    `;
  }

  function homePage() {
    return shell(
      "/",
      `
      <main>
        <section class="hero section">
          <div class="panel hero-photo-card panel-strong">
            <div class="hero-photo">
              ${imgMarkup(data.identity.profileImage, "Zhengyang Wang portrait", true)}
            </div>
            <div class="hero-badges">
              <span class="badge">BNBU</span>
              <span class="badge">Medical Image Analysis</span>
              <span class="badge">Computer Vision</span>
            </div>
          </div>
          <div class="panel hero-copy panel-strong">
            <h1 class="hero-title">Zhengyang Wang (Alvin)<br />王正旸</h1>
            <p class="hero-kicker">${t(data.identity.intro)}</p>
            <div class="hero-actions">
              <a class="button primary" href="/projects/">${isZh() ? "查看项目" : "View Projects"}</a>
              <a class="button" href="/publications/">${isZh() ? "查看论文" : "View Publications"}</a>
              <a class="button" href="/cv/">${isZh() ? "查看简历" : "View CV"}</a>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <div>
              <h2 class="section-title">${isZh() ? "代表项目" : "Selected Projects"}</h2>
              <p class="section-description">${isZh() ? "以下内容概括当前持续推进的研究与系统工作。" : "The following entries summarize current research and system work."}</p>
            </div>
            <a class="text-link" href="/projects/">${isZh() ? "全部项目" : "All Projects"}</a>
          </div>
          <div class="grid-3">
            ${data.featuredProjects.map((project, index) => renderHomeProjectCard(project, index === 0)).join("")}
          </div>
        </section>

        <section class="section split-layout">
          <div>
            <div class="section-header">
              <div>
                <h2 class="section-title">${isZh() ? "近期动态" : "Recent Updates"}</h2>
                <p class="section-description">${isZh() ? "仅保留能够与论文、项目、实验或正式成果对应的节点。" : "Only milestones that correspond to papers, projects, experiments, or formal outcomes are listed here."}</p>
              </div>
            </div>
            <div class="timeline">
              ${data.news
                .slice(0, 5)
                .map(
                  (item) => `
                  <article class="timeline-item">
                    <div class="timeline-date">${item.date}</div>
                    <div>
                      <h3 class="card-title" style="margin-top:0;">${t(item.title)}</h3>
                      <p class="timeline-text">${t(item.text)}</p>
                    </div>
                  </article>`
                )
                .join("")}
            </div>
          </div>
          <aside class="sticky-side">
            ${renderPublication(data.publications[0], true)}
          </aside>
        </section>
      </main>`
    );
  }

  function aboutPage() {
    return shell(
      "/about/",
      `
      <main>
        <section class="section about-page">
          <div class="section-header about-header">
            <div>
              <h1 class="section-title">${isZh() ? "关于我" : "About"}</h1>
              <p class="section-description">${t(data.identity.intro)}</p>
            </div>
          </div>
          <div class="about-stack">
            <article class="panel detail-card about-card">
              <h2 class="card-title">${isZh() ? "基本信息" : "At a Glance"}</h2>
              <table>
                <tbody>
                  <tr><th>Name</th><td>${data.identity.fullName}</td></tr>
                  <tr><th>Chinese</th><td>${data.identity.chineseName}</td></tr>
                  <tr><th>Affiliation</th><td>${data.identity.affiliation}</td></tr>
                  <tr><th>Location</th><td>${data.identity.location}</td></tr>
                  <tr><th>Email</th><td><a class="text-link" href="mailto:${data.identity.email}">${data.identity.email}</a></td></tr>
                  <tr><th>Website</th><td><a class="text-link" href="${data.identity.website}">${data.identity.website}</a></td></tr>
                </tbody>
              </table>
            </article>
            <article class="panel detail-card panel-strong about-card">
              <h2 class="card-title">${isZh() ? "研究方向" : "Research Directions"}</h2>
              <ul class="card-list">
                ${data.about.researchLines.map((item) => `<li>${t(item)}</li>`).join("")}
              </ul>
            </article>
          </div>
        </section>
      </main>`
    );
  }

  function projectsPage() {
    const projects = [...data.featuredProjects, ...data.allProjects];
    return shell(
      "/projects/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh() ? "项目" : "Projects"}</h1>
              <p class="section-description">${isZh() ? "项目条目基于本地项目目录、报告、README 与阶段性结果整理。" : "Project entries are compiled from local workspaces, reports, READMEs, and stage summaries."}</p>
            </div>
          </div>
          <div class="grid-2">
            ${projects.map((project) => renderProjectCard(project, "h2")).join("")}
          </div>
        </section>
      </main>`
    );
  }

  function newsPage() {
    return shell(
      "/news/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh() ? "动态" : "News"}</h1>
              <p class="section-description">${isZh() ? "本页记录近期与研究、项目、论文和正式成果相关的节点。" : "This page records recent milestones related to research, projects, papers, and formal outcomes."}</p>
            </div>
          </div>
          <div class="timeline">
            ${data.news
              .map(
                (item) => `
                <article class="timeline-item">
                  <div class="timeline-date">${item.date}</div>
                  <div>
                    <h2 class="card-title" style="margin-top:0;">${t(item.title)}</h2>
                    <p class="timeline-text">${t(item.text)}</p>
                  </div>
                </article>`
              )
              .join("")}
          </div>
        </section>
      </main>`
    );
  }

  function publicationsPage() {
    return shell(
      "/publications/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh() ? "论文与在审工作" : "Publications"}</h1>
              <p class="section-description">${isZh() ? "仅列出当前已明确存在的论文条目与状态。" : "Only publication entries and statuses that are currently explicit are listed."}</p>
            </div>
          </div>
          ${data.publications.map((pub) => renderPublication(pub, false)).join("")}
        </section>
      </main>`
    );
  }

  function cvPage() {
    return shell(
      "/cv/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh() ? "简历" : "Curriculum Vitae"}</h1>
              <p class="section-description">${isZh() ? "网页版本概括当前教育背景、研究与项目经历、奖项与技能。" : "The web version summarizes current education, research and project experience, awards, and skills."}</p>
            </div>
          </div>
          <div class="split-layout">
            <div class="panel detail-card panel-strong">
              <h2 class="card-title">${isZh() ? "教育经历" : "Education"}</h2>
              ${data.cv.education.map((item) => `<div style="margin-bottom:20px;"><div class="card-tag">${item.period}</div><h3 class="card-title">${item.title}</h3><p class="card-text">${t(item.text)}</p></div>`).join("")}
              ${
                data.cv.publications
                  ? `<h2 class="card-title">${isZh() ? "论文与投稿" : "Publications and Submissions"}</h2>${data.cv.publications
                      .map((item) => `<div style="margin-bottom:20px;"><div class="card-tag">${item.period}</div><h3 class="card-title">${item.title}</h3><p class="card-text">${t(item.text)}</p></div>`)
                      .join("")}`
                  : ""
              }
              <h2 class="card-title">${isZh() ? "研究与项目" : "Research and Projects"}</h2>
              ${data.cv.research.map((item) => `<div style="margin-bottom:20px;"><div class="card-tag">${item.period}</div><h3 class="card-title">${item.title}</h3><p class="card-text">${t(item.text)}</p></div>`).join("")}
              ${
                data.cv.campusLeadership
                  ? `<h2 class="card-title">${isZh() ? "校园经历" : "Campus Leadership"}</h2>${data.cv.campusLeadership
                      .map((item) => `<div style="margin-bottom:20px;"><div class="card-tag">${item.period}</div><h3 class="card-title">${item.title}</h3><p class="card-text">${t(item.text)}</p></div>`)
                      .join("")}`
                  : ""
              }
            </div>
            <div class="panel detail-card">
              <h2 class="card-title">${isZh() ? "奖项" : "Awards"}</h2>
              <ul class="card-list">${data.cv.awards.map((item) => `<li>${item}</li>`).join("")}</ul>
              <h2 class="card-title" style="margin-top:26px;">${isZh() ? "技能" : "Skills"}</h2>
              <ul class="card-list">${data.cv.skills.map((item) => `<li>${item}</li>`).join("")}</ul>
              <div class="hero-actions" style="margin-top:26px;">
                <a class="button primary" href="${data.identity.cvPdf}">${isZh() ? "下载 PDF" : "Download PDF"}</a>
              </div>
            </div>
          </div>
        </section>
      </main>`
    );
  }

  function renderLifeGroup(title, items) {
    if (!items || !items.length) return "";
    return `
      <section class="interest-section">
        <h2 class="card-title interest-title">${title}</h2>
        <div class="interest-grid">
          ${items
            .map(
              (item) => `
              <article class="panel interest-card">
                <h3 class="card-title interest-card-title">${item.name}</h3>
                <p class="card-text">${t(item.description)}</p>
              </article>`
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function lifePage() {
    const entries = data.life.map.entries || [];
    return shell(
      "/life/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">Life</h1>
              <p class="section-description">${t(data.life.overview)}</p>
            </div>
          </div>
          <div class="travel-layout">
            <div class="panel travel-map-shell">
              <div class="map-copy">
                <span class="card-tag">${isZh() ? "地理足迹" : "Geographic Footprint"}</span>
                <p class="card-text map-intro">${t(data.life.map.intro)}</p>
              </div>
              <div id="travel-map"></div>
            </div>
            <div class="travel-cards">
              ${entries
                .map(
                  (item) => `
                  <article class="panel travel-card">
                    <div class="travel-card-head">
                      <span class="travel-dot"></span>
                      <div>
                        <h3 class="card-title travel-card-title">${item.city}, ${item.province}</h3>
                        <p class="travel-card-meta">${item.label || item.province}</p>
                      </div>
                    </div>
                    <p class="card-text">${t(item.description)}</p>
                    ${
                      item.photo
                        ? `<div class="travel-photo-frame">${imgMarkup(item.photo, `${item.city} photo`)}</div>`
                        : `<div class="travel-note">${isZh() ? "照片位已预留，可后续补充。" : "Photo slot reserved for future updates."}</div>`
                    }
                  </article>`
                )
                .join("")}
            </div>
          </div>
        </section>

        ${renderLifeGroup("Sports", data.life.sports)}
        ${renderLifeGroup("Games", data.life.games)}
        ${renderLifeGroup(isZh() ? "其他兴趣" : "Other Interests", data.life.otherInterests)}
      </main>`
    );
  }

  const routes = {
    "/": homePage,
    "/about/": aboutPage,
    "/projects/": projectsPage,
    "/news/": newsPage,
    "/publications/": publicationsPage,
    "/cv/": cvPage,
    "/life/": lifePage
  };

  function normalizePath() {
    const path = window.location.pathname.endsWith("/")
      ? window.location.pathname
      : `${window.location.pathname}/`;
    return routes[path] ? path : "/";
  }

  function render() {
    const path = normalizePath();
    document.body.innerHTML = routes[path]();
    document.getElementById("lang-toggle")?.addEventListener("click", () => {
      root.lang = root.lang.startsWith("zh") ? "en" : "zh-CN";
      localStorage.setItem("wzy-lang", root.lang);
      render();
    });
    if (path === "/life/") {
      initializeTravelMap();
    }
  }

  function initializeTravelMap() {
    function boot() {
      const mapNode = document.getElementById("travel-map");
      if (!mapNode || !window.L) return;
      if (mapNode.dataset.ready === "1") return;
      mapNode.dataset.ready = "1";
      const map = window.L.map(mapNode, {
        zoomControl: true,
        attributionControl: true
      }).setView([data.life.map.center.lat, data.life.map.center.lng], data.life.map.zoom);
      window.L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
      }).addTo(map);
      (data.life.map.entries || []).forEach((entry) => {
        const marker = window.L.circleMarker([entry.lat, entry.lng], {
          radius: 7,
          color: "#f5f7fa",
          weight: 1.2,
          fillColor: "#cfd5dd",
          fillOpacity: 0.9
        }).addTo(map);
        marker.bindPopup(`<strong>${entry.city}, ${entry.province}</strong><br/>${t(entry.description)}`);
      });
    }

    if (window.L) {
      boot();
      return;
    }

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("leaflet-js")) {
      const script = document.createElement("script");
      script.id = "leaflet-js";
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = boot;
      document.head.appendChild(script);
    }
  }

  render();
})();
