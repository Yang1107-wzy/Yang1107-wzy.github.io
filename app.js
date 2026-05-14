(function () {
  const data = window.SITE_DATA;
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("wzy-theme");
  const savedLang = localStorage.getItem("wzy-lang");
  root.dataset.theme = savedTheme || "dark";
  root.lang = savedLang || root.lang || "en";

  function t(entry) {
    const lang = root.lang.startsWith("zh") ? "zh" : "en";
    if (typeof entry === "string") return entry;
    return entry?.[lang] || entry?.en || "";
  }

  function imgMarkup(src, alt, eager = false) {
    const loading = eager ? "eager" : "lazy";
    return `<img src="${src}" alt="${alt}" loading="${loading}" decoding="async" />`;
  }

  function accentClass(value) {
    return value ? ` accent-${value}` : "";
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
        const label = root.lang.startsWith("zh") ? zh : en;
        return `<a class="nav-link${active}" href="${href}">${label}</a>`;
      })
      .join("");
  }

  function shell(pathname, main) {
    const isZh = root.lang.startsWith("zh");
    return `
      <div class="site-shell">
        <nav class="site-nav">
          <a class="brand-lockup" href="/">
            <span class="brand-title">Zhengyang Wang / 王正旸</span>
            <span class="brand-subtitle">${isZh ? "研究型本科生 · 计算机科学" : "Research-oriented undergraduate · Computer Science"}</span>
          </a>
          <div class="nav-links">${nav(pathname)}</div>
          <div class="nav-tools">
            <button class="lang-button" id="lang-toggle">${isZh ? "EN" : "中文"}</button>
            <button class="icon-button" id="theme-toggle">${isZh ? "明暗" : "Theme"}</button>
          </div>
        </nav>
        ${main}
        <footer class="footer">
          <div>© 2026 Zhengyang Wang · ${isZh ? "基于真实桌面项目材料整理" : "Grounded in real local project materials"}</div>
          <div><a class="text-link" href="${data.identity.github}" target="_blank" rel="noreferrer">GitHub</a> · <a class="text-link" href="mailto:${data.identity.email}">Email</a></div>
        </footer>
      </div>
    `;
  }

  function homePage() {
    const isZh = root.lang.startsWith("zh");
    return shell(
      "/",
      `
      <main>
        <section class="hero section">
          <div class="panel hero-photo-card panel-strong">
            <div class="hero-photo">
              <img src="${data.identity.profileImage}" alt="Zhengyang Wang portrait" />
            </div>
            <div class="hero-badges">
              <span class="badge">BNBU</span>
              <span class="badge">Medical Imaging</span>
              <span class="badge">Multimodal LLM</span>
            </div>
          </div>
          <div class="panel hero-copy panel-strong">
            <span class="eyebrow">${isZh ? "当前在建站升级" : "Site rebuild in progress"}</span>
            <h1 class="hero-title">Zhengyang Wang<br />王正旸</h1>
            <p class="hero-kicker">${t(data.identity.intro)}</p>
            <div class="hero-actions">
              <a class="button primary" href="/projects/">${isZh ? "查看项目全景" : "View projects"}</a>
              <a class="button" href="/cv/">${isZh ? "查看新版 CV" : "Open CV"}</a>
              <a class="button" href="mailto:${data.identity.email}">${isZh ? "联系我" : "Contact"}</a>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="grid-3">
            ${data.stats
              .map(
                (item) => `
                <article class="panel stat-card">
                  <div class="card-tag">${item.label}</div>
                  <h2 class="hero-title" style="font-size:2.3rem;margin:14px 0 0;">${item.value}</h2>
                </article>`
              )
              .join("")}
          </div>
        </section>
        <section class="section">
          <div class="section-header">
            <div>
              <h2 class="section-title">${isZh ? "精选项目" : "Featured Projects"}</h2>
              <p class="section-description">${isZh ? "不是课程作业堆砌，而是当前真正持续推进的研究与系统线。" : "These are the lines I am actively pushing forward, not just archived coursework."}</p>
            </div>
            <a class="text-link" href="/projects/">${isZh ? "查看全部项目" : "All projects"}</a>
          </div>
          <div class="grid-3">
            ${data.featuredProjects
              .map(
                (project) => `
                <article class="panel project-card">
                  ${imgMarkup(project.image, project.title, true)}
                  <span class="card-tag accent-status">${project.status}</span>
                  <h3 class="card-title project-title">${project.title}</h3>
                  <p class="card-text">${project.summary}</p>
                  <div class="metric-row">${project.metrics.map((m) => `<span class="metric-pill">${m}</span>`).join("")}</div>
                </article>`
              )
              .join("")}
          </div>
        </section>
        <section class="section split-layout">
          <div>
            <div class="section-header">
              <div>
                <h2 class="section-title">${isZh ? "最近动态" : "Recent News"}</h2>
                <p class="section-description">${isZh ? "只保留能和本地文件、实验或明确进度对应的动态。" : "Only timeline items that can be tied back to local files, experiments, or concrete milestones."}</p>
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
                      <h3 class="card-title" style="margin-top:0;">${item.title}</h3>
                      <p class="timeline-text">${item.text}</p>
                    </div>
                  </article>`
                )
                .join("")}
            </div>
          </div>
          <aside class="sticky-side">
            <article class="panel publication-card">
              ${imgMarkup(data.publications[0].image, data.publications[0].title)}
              <div>
                <span class="card-tag${accentClass(data.publications[0].accent)}">${data.publications[0].venue}</span>
                <h3 class="card-title" style="margin-top:12px;max-width:14ch;line-height:1.12;font-size:1.15rem;">${data.publications[0].title}</h3>
                <p class="publication-meta">${data.publications[0].authors}</p>
                <p class="publication-meta" style="margin-top:10px;">${data.publications[0].note}</p>
                <div class="link-row">
                  ${data.publications[0].links
                    .map((link) => `<a class="button" target="_blank" rel="noreferrer" href="${link.href}">${link.label}</a>`)
                    .join("")}
                </div>
              </div>
            </article>
          </aside>
        </section>
      </main>`
    );
  }

  function aboutPage() {
    const isZh = root.lang.startsWith("zh");
    return shell(
      "/about/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh ? "关于我" : "About"}</h1>
              <p class="section-description">${t(data.identity.intro)}</p>
            </div>
          </div>
          <div class="split-layout">
            <article class="panel detail-card panel-strong">
              <h2 class="card-title">${isZh ? "研究主线" : "Current Research Lines"}</h2>
              <ul class="card-list">
                <li>Cardiac ultrasound benchmarking and reportable local-validation evidence chains.</li>
                <li>BLE asset tracking systems where LLMs assist diagnosis and calibration instead of replacing signal models.</li>
                <li>MetaVision-DB for multimodal metaphor reasoning games and benchmark construction.</li>
                <li>Sports analytics and arrow-quality evaluation for Olympic preparation workflows.</li>
                <li>ActiGraph-based motion and sleep sensing study preparation.</li>
              </ul>
            </article>
            <article class="panel detail-card">
              <h2 class="card-title">${isZh ? "基本信息" : "At a Glance"}</h2>
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
          </div>
        </section>
      </main>`
    );
  }

  function projectsPage() {
    const isZh = root.lang.startsWith("zh");
    const projects = [...data.featuredProjects, ...data.allProjects];
    return shell(
      "/projects/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh ? "项目地图" : "Projects"}</h1>
              <p class="section-description">${isZh ? "当前站点中的项目全部来自本地真实目录、CV、README、阶段性报告和结果摘要。" : "Each project entry is grounded in actual local folders, CV material, READMEs, and evidence-bearing summaries."}</p>
            </div>
          </div>
          <div class="grid-2">
            ${projects
              .map(
                (project) => `
                <article class="panel project-card">
                  ${imgMarkup(project.image, project.title)}
                  <span class="card-tag accent-status">${project.category} · ${project.status}</span>
                  <h2 class="card-title project-title">${project.title}</h2>
                  <p class="card-text">${project.summary}</p>
                  <div class="metric-row">${(project.metrics || []).map((m) => `<span class="metric-pill">${m}</span>`).join("")}</div>
                  ${project.bullets ? `<ul class="card-list" style="margin-top:14px;">${project.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
                </article>`
              )
              .join("")}
          </div>
        </section>
      </main>`
    );
  }

  function newsPage() {
    const isZh = root.lang.startsWith("zh");
    return shell(
      "/news/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh ? "时间线动态" : "News"}</h1>
              <p class="section-description">${isZh ? "只记录可验证的节点：论文状态、项目里程碑、站点重建、实验协议和正式奖项。" : "The timeline keeps only verifiable milestones: paper status, project checkpoints, site rebuilds, formal awards, and protocol-level changes."}</p>
            </div>
          </div>
          <div class="timeline">
            ${data.news
              .map(
                (item) => `
                <article class="timeline-item">
                  <div class="timeline-date">${item.date}</div>
                  <div>
                    <h2 class="card-title" style="margin-top:0;">${item.title}</h2>
                    <p class="timeline-text">${item.text}</p>
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
    const isZh = root.lang.startsWith("zh");
    return shell(
      "/publications/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh ? "论文与在审工作" : "Publications"}</h1>
              <p class="section-description">${isZh ? "这里不会夸大未落地结果；只保留已明确存在的条目和状态。" : "This page avoids inflating claims. It only lists items that are explicitly present in current local or online materials."}</p>
            </div>
          </div>
          ${data.publications
            .map(
              (pub) => `
              <article class="panel publication-card">
                ${imgMarkup(pub.image, pub.title)}
                <div>
                  <span class="card-tag${accentClass(pub.accent)}">${pub.venue}</span>
                  <h2 class="card-title" style="margin-top:12px;max-width:16ch;line-height:1.12;">${pub.title}</h2>
                  <p class="publication-meta">${pub.authors}</p>
                  <p class="publication-meta" style="margin-top:10px;">${pub.note}</p>
                  <div class="link-row">
                    ${pub.links.map((link) => `<a class="button" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}
                  </div>
                </div>
              </article>`
            )
            .join("")}
        </section>
      </main>`
    );
  }

  function cvPage() {
    const isZh = root.lang.startsWith("zh");
    return shell(
      "/cv/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh ? "新版简历" : "Curriculum Vitae"}</h1>
              <p class="section-description">${isZh ? "网页版 CV 已补入心脏项目、MetaVision、FYP、大创赛和传感器筹备线。PDF 下载会在发布版里同步提供。" : "The web CV now reflects the cardiac benchmark line, MetaVision, the BLE FYP, the startup competition, and the motion-sensor preparation track."}</p>
            </div>
          </div>
          <div class="split-layout">
            <div class="panel detail-card panel-strong">
              <h2 class="card-title">${isZh ? "教育经历" : "Education"}</h2>
              ${data.cv.education.map((item) => `<div style="margin-bottom:20px;"><div class="card-tag">${item.period}</div><h3 class="card-title">${item.title}</h3><p class="card-text">${item.text}</p></div>`).join("")}
              <h2 class="card-title">${isZh ? "研究与项目" : "Research and Projects"}</h2>
              ${data.cv.research.map((item) => `<div style="margin-bottom:20px;"><div class="card-tag">${item.period}</div><h3 class="card-title">${item.title}</h3><p class="card-text">${item.text}</p></div>`).join("")}
            </div>
            <div class="panel detail-card">
              <h2 class="card-title">${isZh ? "奖项" : "Awards"}</h2>
              <ul class="card-list">${data.cv.awards.map((item) => `<li>${item}</li>`).join("")}</ul>
              <h2 class="card-title" style="margin-top:26px;">${isZh ? "技能" : "Skills"}</h2>
              <ul class="card-list">${data.cv.skills.map((item) => `<li>${item}</li>`).join("")}</ul>
              <div class="hero-actions" style="margin-top:26px;">
                <a class="button primary" href="/assets/Zhengyang_WANG_Alvin_CV.pdf">${isZh ? "下载 PDF" : "Download PDF"}</a>
              </div>
            </div>
          </div>
        </section>
      </main>`
    );
  }

  function lifePage() {
    const isZh = root.lang.startsWith("zh");
    return shell(
      "/life/",
      `
      <main>
        <section class="section">
          <div class="section-header">
            <div>
              <h1 class="section-title">${isZh ? "生活切片" : "Life"}</h1>
              <p class="section-description">${isZh ? "按照你的要求，这一页只放生活图集，不混项目说明。现在先用本地可确认的照片做第一版占位，后续可以继续替换精选图片。" : "Per your decision, this page stays as a life gallery rather than a project log. The current version uses verifiable local photos and can be curated further later."}</p>
            </div>
          </div>
          <div class="gallery-grid">
            ${data.lifeGallery
              .map(
                (item) => `
                <article class="panel gallery-card">
                  <img src="${item.src}" alt="${item.caption}" />
                  <p class="card-text" style="margin-top:12px;">${item.caption}</p>
                </article>`
              )
              .join("")}
          </div>
        </section>
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
    document.getElementById("theme-toggle")?.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem("wzy-theme", root.dataset.theme);
    });
    document.getElementById("lang-toggle")?.addEventListener("click", () => {
      root.lang = root.lang.startsWith("zh") ? "en" : "zh-CN";
      localStorage.setItem("wzy-lang", root.lang);
      render();
    });
  }

  render();
})();
