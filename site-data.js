window.SITE_DATA = {
  identity: {
    fullName: "Zhengyang Wang",
    chineseName: "王正旸",
    shortTitle: "Research-oriented undergraduate in Computer Science",
    affiliation: "Beijing Normal University - Hong Kong Baptist University (BNBU)",
    location: "Zhuhai, Guangdong, China",
    email: "t330031281@mail.bnbu.edu.cn",
    altEmail: "1658652500@qq.com",
    github: "https://github.com/Yang1107-wzy",
    linkedin: "https://www.linkedin.com/in/%E6%AD%A3%E6%97%B8-%E7%8E%8B-49a128408",
    website: "https://wzhengyang.com",
    cvPdf: "/assets/Zhengyang_WANG_Alvin_CV.pdf",
    profileImage: "/assets/profile-display.webp",
    intro: {
      en: "I work at the intersection of medical image analysis, multimodal reasoning, sensing systems, and deployable computer vision. My current portfolio spans cardiac ultrasound benchmarking, BLE indoor asset tracking, multimodal metaphor datasets, Olympic archery analytics, and motion-sensor study design.",
      zh: "我的工作主要围绕医学图像分析、多模态推理、传感系统和可落地的计算机视觉系统展开。当前项目组合覆盖心脏超声分割基准、BLE 室内资产追踪、多模态隐喻 benchmark、奥运备战射箭分析，以及运动健康传感器研究筹备。"
    },
    researchInterests: [
      "Medical Image Analysis",
      "Computer Vision",
      "Multimodal LLM Benchmarking",
      "Indoor Localization & Sensing",
      "Sports Analytics"
    ]
  },
  stats: [
    { label: "Research Tracks", value: "6+" },
    { label: "Active Year", value: "2026" },
    { label: "Under Review", value: "NeurIPS line" }
  ],
  featuredProjects: [
    {
      slug: "cardiac-ultrasound",
      title: "Cardiac Ultrasound Benchmark and ST-CardioSeg",
      status: "Primary Research",
      category: "Medical Imaging",
      image: "/assets/project-cardiac-ultrasound-display.webp",
      summary: "Unified CAMUS 4CH local-validation benchmark with ST-CardioSeg, MemSAM, CA-Net, MISSFormer, TransUNet, and MT-UNet under a shared evaluation protocol.",
      bullets: [
        "Main reportable setting is CAMUS 4CH official training subset local validation.",
        "ST-CardioSeg reaches Dice 0.8902 and ASSD 2.2952 in the current local validation summary.",
        "The site will distinguish CAMUS ultrasound from the separate ACDC MRI line."
      ],
      metrics: ["Dice 0.8902", "HD95 6.6658", "ASSD 2.2952"],
      links: [
        { label: "Workspace README", href: "file:///Users/alvin/Desktop/4D%20%E5%8C%BB%E5%AD%A6%E5%9B%BE%E5%83%8F%E5%88%86%E6%9E%90%E9%A1%B9%E7%9B%AE/README.md" }
      ]
    },
    {
      slug: "fyp-ble-llm",
      title: "BLE Asset Tracking with LLM-Assisted Diagnosis",
      status: "Current FYP",
      category: "Sensing System",
      image: "/assets/project-fyp-ble-llm-display.webp",
      summary: "Final year project around BLE-based real-time asset tracking, with LLM modules placed in calibration, anomaly diagnosis, and natural-language operations rather than direct coordinate regression.",
      bullets: [
        "Grounded in a BNBU FYP topic focused on indoor asset tracking.",
        "Targets RSSI-based localization, signal anomaly explanation, and a web dashboard.",
        "Keeps the定位核心 in reproducible RSSI pipelines instead of handing coordinates to an LLM."
      ],
      metrics: ["BLE RSSI", "Dashboard", "LLM diagnostics"],
      links: [
        { label: "FYP Main Draft", href: "file:///Users/alvin/Desktop/FYP/FYP_%E5%AE%A4%E5%86%85%E5%AE%9A%E4%BD%8D_LLM_%E6%95%B4%E5%90%88%E6%80%BB%E7%A8%BF.md" }
      ]
    },
    {
      slug: "metavision-db",
      title: "MetaVision-DB for Multimodal Metaphor Games",
      status: "Dataset Build",
      category: "Benchmark",
      image: "/assets/project-metavision-db-display.webp",
      summary: "Dataset substrate for multimodal metaphor generation and reasoning in multi-agent games, with policies, schemas, quotas, provenance logs, validation scripts, and staged image-review workflows.",
      bullets: [
        "Phase 1 benchmark scaffold already includes schemas, protocols, seed tables, and validation.",
        "Visual Undercover quotas are designed as 50 / 50 / 80 / 50 across four categories.",
        "Current bottleneck is image generation plus multi-stage manual review, not schema design."
      ],
      metrics: ["240 rows", "Schema + protocol", "Phase 1 complete"],
      links: [
        { label: "MetaVision README", href: "file:///Users/alvin/Desktop/%E9%9A%90%E5%96%BB%E8%AF%AD%E4%B9%89%20LLM%20%E9%A1%B9%E7%9B%AE/MetaVision-DB/README.md" }
      ]
    }
  ],
  allProjects: [
    {
      slug: "archery",
      title: "Competition Arrow Performance Evaluation & Intelligent Selection",
      status: "Ongoing",
      category: "Sports Analytics",
      summary: "Supports the Olympic key project on smart arrow selection equipment and system R&D for LA 2028 preparation through shooting setup operation, release analysis, impact-score linkage, and straightness tracking.",
      metrics: ["High-speed camera", "Trajectory tracking", "LA 2028 prep"],
      image: "/assets/project-archery-display.webp",
      accent: "status"
    },
    {
      slug: "hydrology",
      title: "Flood Forecasting and Hydrological Modelling",
      status: "Ongoing",
      category: "Remote Sensing + ML",
      summary: "Processes remote-sensing imagery and builds machine-learning pipelines for station discharge prediction and land-surface runoff integration in collaboration with UIC, Sun Yat-sen University, and Huawei.",
      metrics: ["Remote sensing", "Spatiotemporal ML", "Forecasting"],
      image: "/assets/project-hydrology-display.webp",
      accent: "status"
    },
    {
      slug: "cgf-height",
      title: "RGB-D Cargo Height Estimation (CGF-Height)",
      status: "System + Paper",
      category: "Applied Vision",
      summary: "Mobile-friendly RGB-D cargo height estimation system using center-guided segmentation and local ground-aware fusion for iOS depth sensing deployment.",
      metrics: ["RGB-D", "iOS", "HeightScanner API"],
      image: "/assets/project-cgf-height-display.webp",
      accent: "status"
    },
    {
      slug: "startup-posture",
      title: "Beijing Undergraduate Innovation Competition on Posture Health",
      status: "In Preparation",
      category: "Startup / Health Tech",
      summary: "Project line around multimodal sensor-based posture health monitoring, movement-library matching, and real-time feedback optimization, currently represented by technical route maps and single-page materials.",
      metrics: ["Multimodal sensors", "Posture health", "Route design"],
      image: "/assets/project-startup-posture-display.webp",
      accent: "status"
    },
    {
      slug: "wearable-sensor",
      title: "ActiGraph-based Motion and Sleep Sensor Study",
      status: "Preparation",
      category: "Sensor Research",
      summary: "Preparation line focused on ActiGraph devices, 24-hour activity behavior analysis, wear-time validation, sleep screening algorithms, and study protocol design.",
      metrics: ["ActiGraph", "24-hour behavior", "Sleep screening"],
      image: "/assets/project-actigraph-sensor-display.webp",
      accent: "status"
    }
  ],
  news: [
    {
      date: "2026-05-13",
      title: "Started full rebuild of personal site for wzhengyang.com",
      text: "The personal site is being rebuilt into a multi-page academic portfolio with bilingual content, data-driven project sections, and full migration of the latest project lines."
    },
    {
      date: "2026-05-08",
      title: "MetaVision-DB Phase 1 benchmark scaffold audited",
      text: "Policies, schemas, quotas, provenance logs, validation scripts, and staged review files were confirmed locally; the next bottleneck is full image generation and review."
    },
    {
      date: "2026-05-04",
      title: "NeurIPS-track cardiac segmentation line remains under review",
      text: "The existing site already lists the 4D cardiac segmentation paper as under review; the rebuilt site will preserve that status without overstating claims."
    },
    {
      date: "2026-04-29",
      title: "CAMUS 4CH local-validation comparison table finalized",
      text: "ST-CardioSeg, CA-Net, MISSFormer, TransUNet, and MT-UNet were summarized under the same local-validation protocol."
    },
    {
      date: "2026-03-27",
      title: "FYP indoor localization and LLM plan consolidated",
      text: "The previously split research pack was folded into a single main draft focused on BLE asset tracking plus LLM-assisted diagnostics."
    },
    {
      date: "2025-10-01",
      title: "Received MCM/ICM Meritorious Winner",
      text: "Mathematical Contest in Modeling remained one of the most formalized competition outcomes already present in the CV material."
    }
  ],
  publications: [
    {
      title: "Decoupling Morphology and Coherence for High-Fidelity 4D Cardiac Segmentation",
      venue: "NeurIPS 2026",
      note: "Under review",
      accent: "neurips",
      authors: "Ruijie Huang, Weifeng Su, Yuxiang He, Zhengyang Wang, Xingyu Chen, and collaborators",
      image: "/assets/st-net-display.webp",
      links: [
        { label: "OpenReview", href: "https://openreview.net/forum?id=Nw0WyiydFA" }
      ]
    }
  ],
  cv: {
    education: [
      {
        period: "2023 - Present",
        title: "BNBU, Computer Science and Technology",
        text: "Cumulative GPA 3.25/4.00. Coursework includes DSA, Algorithms, OS, DBMS, Machine Learning, Neural Nets and Deep Learning, Software Engineering, Deep Learning for Computer Vision, and 3D Computer Vision."
      }
    ],
    research: [
      {
        period: "2026",
        title: "Cardiac Ultrasound Benchmark and ST-CardioSeg",
        text: "Built a shared cardiac ultrasound benchmark package, aligned reportable CAMUS 4CH local-validation protocol, and maintained evidence-traceable metric summaries for segmentation baselines."
      },
      {
        period: "2026",
        title: "MetaVision-DB",
        text: "Constructed benchmark schemas, policies, quota design, validation scripts, and staged review assets for multimodal metaphor generation and reasoning games."
      },
      {
        period: "2026",
        title: "BLE Asset Tracking FYP",
        text: "Defined a realistic BLE RSSI tracking system where LLM modules assist calibration and anomaly diagnosis rather than replace the localization engine."
      },
      {
        period: "2025 - Present",
        title: "Competition Arrow Performance Evaluation",
        text: "Operated shooting experiments, linked kinematic factors to impact points and scores, and supported arrow straightness analysis with vision-based tracking."
      },
      {
        period: "2025 - Present",
        title: "Flood Forecasting and Hydrological Modelling",
        text: "Processed remote-sensing data and contributed to machine-learning pipelines for discharge prediction and runoff modeling."
      }
    ],
    awards: [
      "Mathematical Contest in Modeling (MCM/ICM), Meritorious Winner, 2025",
      "ICBC Cup Business Competition, Excellence Award"
    ],
    skills: [
      "Python, Java, C, SQL",
      "LaTeX, GitHub, AI-assisted research workflows, Office",
      "Computer vision prototyping, evaluation pipelines, structured dataset curation"
    ]
  },
  lifeGallery: [
    { src: "/assets/life-1.jpg", caption: "Study and project moments" },
    { src: "/assets/life-2.jpg", caption: "Team activities and daily records" },
    { src: "/assets/life-3.jpg", caption: "Snapshots outside the lab" }
  ]
};
