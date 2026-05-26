window.SITE_DATA = {
  identity: {
    fullName: "Zhengyang Wang",
    chineseName: "王正旸",
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
      en: "I am an undergraduate in Computer Science at BNBU. My current work centers on medical image analysis, computer vision, multimodal reasoning, sensing systems, and the engineering of deployable research prototypes.",
      zh: "我目前就读于北京师范大学-香港浸会大学联合国际学院（BNBU）计算机科学专业。当前工作主要围绕医学图像分析、计算机视觉、多模态推理、传感系统，以及可落地研究原型的工程实现展开。"
    }
  },
  about: {
    researchLines: [
      {
        en: "Medical image analysis with an emphasis on cardiac ultrasound benchmarking, segmentation protocols, and evidence-traceable evaluation.",
        zh: "医学图像分析，重点关注心脏超声基准、分割协议与可追溯评测。"
      },
      {
        en: "Computer vision systems for sensing, measurement, and structured decision support in practical environments.",
        zh: "面向实际场景的计算机视觉系统，包括感知、测量与结构化决策支持。"
      },
      {
        en: "Multimodal reasoning and benchmark construction for metaphor-related generation and analysis tasks.",
        zh: "面向隐喻相关生成与分析任务的多模态推理与 benchmark 构建。"
      },
      {
        en: "Sports analytics and motion-related data workflows that combine domain operations with technical pipelines.",
        zh: "结合领域操作与技术流程的体育分析与运动数据工作流。"
      },
      {
        en: "AI-assisted research and engineering workflows for dataset construction, reporting, and lightweight prototype development.",
        zh: "面向数据集构建、研究报告与轻量原型开发的 AI 辅助研究与工程工作流。"
      }
    ]
  },
  stats: [
    { label: "Research Areas", value: "6+" },
    { label: "Active Projects", value: "7" },
    { label: "Current Focus", value: "Research and Systems" }
  ],
  featuredProjects: [
    {
      slug: "cardiac-ultrasound",
      title: "Cardiac Ultrasound Benchmark and ST-CardioSeg",
      status: "Primary Research",
      category: "Medical Imaging",
      image: "/assets/project-cardiac-ultrasound-display.webp",
      summary: {
        en: "A unified CAMUS 4CH local-validation benchmark covering ST-CardioSeg, MemSAM, CA-Net, MISSFormer, TransUNet, and MT-UNet under a shared evaluation protocol.",
        zh: "围绕 CAMUS 4CH local validation 搭建的统一评测基准，纳入 ST-CardioSeg、MemSAM、CA-Net、MISSFormer、TransUNet 与 MT-UNet，并使用一致的评测协议。"
      },
      bullets: [
        {
          en: "The reportable setting is the CAMUS 4CH official training subset with local validation.",
          zh: "当前可报告设置为 CAMUS 4CH 官方训练子集上的 local validation。"
        },
        {
          en: "The current local summary records Dice 0.8902 and ASSD 2.2952 for ST-CardioSeg.",
          zh: "当前本地汇总中，ST-CardioSeg 记录到 Dice 0.8902、ASSD 2.2952。"
        },
        {
          en: "The ultrasound line is kept separate from the ACDC MRI line throughout the site.",
          zh: "站点中始终将超声线与 ACDC MRI 线区分展示。"
        }
      ],
      metrics: ["Dice 0.8902", "HD95 6.6658", "ASSD 2.2952"]
    },
    {
      slug: "fyp-ble-llm",
      title: "BLE Asset Tracking with LLM-Assisted Diagnosis",
      status: "Current FYP",
      category: "Sensing System",
      image: "/assets/project-fyp-ble-llm-display.webp",
      summary: {
        en: "A final year project on BLE-based asset tracking in which LLM modules are positioned in calibration, anomaly diagnosis, and operator-facing interpretation rather than direct coordinate regression.",
        zh: "一个围绕 BLE 资产追踪展开的毕业设计项目，其中 LLM 模块用于校准、异常诊断与面向操作者的解释，而非直接回归坐标。"
      },
      bullets: [
        {
          en: "The system focus remains RSSI-based localization and supporting diagnostics.",
          zh: "系统重点仍然是基于 RSSI 的定位流程及其辅助诊断。"
        },
        {
          en: "The project combines signal processing, system integration, and web-facing presentation.",
          zh: "项目结合了信号处理、系统集成与面向网页的展示接口。"
        },
        {
          en: "The LLM component is used as a support layer rather than a replacement for the localization engine.",
          zh: "LLM 组件被定位为辅助层，而不是对定位引擎的替代。"
        }
      ],
      metrics: ["BLE RSSI", "Dashboard", "LLM diagnostics"]
    },
    {
      slug: "metavision-db",
      title: "MetaVision-DB for Multimodal Metaphor Games",
      status: "Dataset Build",
      category: "Benchmark",
      image: "/assets/project-metavision-db-display.webp",
      summary: {
        en: "A multimodal benchmark line for metaphor-related generation and reasoning games, including schemas, policies, quotas, provenance logs, validation scripts, and staged review workflows.",
        zh: "一个面向隐喻生成与推理游戏的多模态 benchmark 方向，包含 schema、策略、配额、溯源日志、验证脚本与分阶段审核流程。"
      },
      bullets: [
        {
          en: "Phase 1 already includes schemas, protocols, seed tables, and validation routines.",
          zh: "第一阶段已包含 schema、protocol、seed table 与验证流程。"
        },
        {
          en: "Current effort is concentrated on image generation quality control and manual review.",
          zh: "当前主要精力集中在图像生成质量控制与人工审核。"
        },
        {
          en: "The work is organized around reproducible data handling rather than one-off dataset curation.",
          zh: "该工作围绕可复现的数据流程组织，而非一次性数据整理。"
        }
      ],
      metrics: ["300 pairs", "600 images", "Schema + protocol"]
    }
  ],
  allProjects: [
    {
      slug: "archery",
      title: "Competition Arrow Performance Evaluation & Intelligent Selection",
      status: "Ongoing",
      category: "Sports Analytics",
      summary: {
        en: "A project supporting intelligent arrow selection for competition preparation, involving shooting operations, release analysis, impact-score linkage, and straightness tracking.",
        zh: "面向比赛备战的智能箭支筛选项目，涉及射击操作、释放分析、落点与分数关联，以及直度跟踪。"
      },
      metrics: ["High-speed camera", "Trajectory tracking", "LA 2028 prep"],
      image: "/assets/project-archery-display.webp"
    },
    {
      slug: "hydrology",
      title: "Flood Forecasting and Hydrological Modelling",
      status: "Ongoing",
      category: "Remote Sensing + ML",
      summary: {
        en: "A hydrological modelling line combining remote-sensing imagery, machine-learning pipelines, and discharge prediction tasks.",
        zh: "一个结合遥感影像、机器学习流程与流量预测任务的水文建模方向。"
      },
      metrics: ["Remote sensing", "Spatiotemporal ML", "Forecasting"],
      image: "/assets/project-hydrology-display.webp"
    },
    {
      slug: "cgf-height",
      title: "RGB-D Cargo Height Estimation (CGF-Height)",
      status: "System + Paper",
      category: "Applied Vision",
      summary: {
        en: "An RGB-D cargo height estimation system for mobile deployment, built around center-guided segmentation and local ground-aware fusion.",
        zh: "一个面向移动端部署的 RGB-D 货物高度估计系统，核心方法为中心引导分割与局部地面感知融合。"
      },
      metrics: ["RGB-D", "iOS", "HeightScanner API"],
      image: "/assets/project-cgf-height-display.webp"
    },
    {
      slug: "startup-posture",
      title: "Jingcai Dachuang Posture Health Startup Plan",
      status: "Preliminary Competition",
      category: "Entrepreneurship Competition",
      summary: {
        en: "An early-stage Beijing university innovation competition plan on motion-sensing posture correction, movement-library matching, and real-time feedback; currently at proposal and PPT level.",
        zh: "一个北京大学生创新创业竞赛初赛阶段方案，围绕运动传感体态矫正、动作库匹配与实时反馈展开，目前为创业方案与 PPT 阶段。"
      },
      metrics: ["Startup plan", "Posture feedback", "PPT proposal"],
      image: "/assets/project-startup-posture-display.webp"
    }
  ],
  news: [
    {
      date: "2026-05-13",
      title: {
        en: "Research presentation materials updated",
        zh: "研究展示材料更新"
      },
      text: {
        en: "The presentation materials were reorganized to align research, project, publication, and personal sections under a consistent structure.",
        zh: "相关展示材料已重新整理，以统一结构呈现研究、项目、论文与个人部分。"
      }
    },
    {
      date: "2026-05-08",
      title: {
        en: "MetaVision-DB Phase 1 scaffold reviewed",
        zh: "MetaVision-DB 第一阶段框架完成审查"
      },
      text: {
        en: "Policies, schemas, quotas, provenance logs, validation scripts, and staged review files were checked locally.",
        zh: "已在本地检查相关策略、schema、配额、溯源日志、验证脚本与分阶段审核文件。"
      }
    },
    {
      date: "2026-05-04",
      title: {
        en: "Cardiac segmentation paper remains under review",
        zh: "心脏分割论文仍处于审稿阶段"
      },
      text: {
        en: "The current site records the status of the 4D cardiac segmentation work without extending claims beyond the available evidence.",
        zh: "当前站点仅依据现有证据记录 4D 心脏分割工作的状态，不延伸超出已确认范围的表述。"
      }
    },
    {
      date: "2026-04-29",
      title: {
        en: "CAMUS 4CH local-validation comparison updated",
        zh: "CAMUS 4CH local validation 对比结果更新"
      },
      text: {
        en: "The comparison summary for ST-CardioSeg, CA-Net, MISSFormer, TransUNet, and MT-UNet was updated under the same evaluation protocol.",
        zh: "在统一评测协议下更新了 ST-CardioSeg、CA-Net、MISSFormer、TransUNet 与 MT-UNet 的对比汇总。"
      }
    },
    {
      date: "2026-03-27",
      title: {
        en: "FYP localization draft consolidated",
        zh: "毕业设计定位方案草稿完成整合"
      },
      text: {
        en: "The indoor localization and LLM-assisted diagnosis plan was consolidated into a single working draft.",
        zh: "室内定位与 LLM 辅助诊断方案已整理为统一工作草稿。"
      }
    },
    {
      date: "2025-10-01",
      title: {
        en: "MCM/ICM Meritorious Winner recorded",
        zh: "MCM/ICM Meritorious Winner 奖项记录"
      },
      text: {
        en: "The MCM/ICM result remains one of the formal competition outcomes represented in the current materials.",
        zh: "MCM/ICM 成绩是当前材料中明确保留的一项正式竞赛成果。"
      }
    }
  ],
  publications: [
    {
      title: "Decoupling Morphology and Coherence for High-Fidelity 4D Cardiac Segmentation",
      venue: "NeurIPS 2026",
      note: {
        en: "Under review",
        zh: "审稿中"
      },
      authors: "Ruijie Huang, Weifeng Su, Yuxiang He, Zhengyang Wang, Xingyu Chen, and collaborators",
      image: "/assets/project-cardiac-ultrasound-display.webp",
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
        text: {
          en: "Cumulative GPA 3.25/4.00. Coursework includes data structures, algorithms, operating systems, database systems, machine learning, neural networks, software engineering, deep learning for computer vision, and 3D computer vision.",
          zh: "累计 GPA 为 3.25/4.00。相关课程包括数据结构、算法、操作系统、数据库系统、机器学习、神经网络与深度学习、软件工程、深度学习与计算机视觉，以及 3D 计算机视觉。"
        }
      }
    ],
    research: [
      {
        period: "2026",
        title: "Cardiac Ultrasound Benchmark and ST-CardioSeg",
        text: {
          en: "Built a shared cardiac ultrasound benchmark package, aligned the reportable CAMUS 4CH local-validation protocol, and maintained evidence-traceable metric summaries for segmentation baselines.",
          zh: "构建了统一的心脏超声 benchmark 包，整理了可报告的 CAMUS 4CH local validation 协议，并维护了可追溯的分割基线指标汇总。"
        }
      },
      {
        period: "2026",
        title: "MetaVision-DB",
        text: {
          en: "Constructed benchmark schemas, policies, quota design, validation scripts, and staged review assets for multimodal metaphor generation and reasoning games.",
          zh: "为多模态隐喻生成与推理游戏构建了 benchmark schema、策略、配额设计、验证脚本与分阶段审核材料。"
        }
      },
      {
        period: "2026",
        title: "BLE Asset Tracking FYP",
        text: {
          en: "Defined a BLE RSSI tracking system in which LLM modules support calibration and anomaly diagnosis without replacing the localization core.",
          zh: "设计了一个 BLE RSSI 追踪系统，其中 LLM 模块用于辅助校准与异常诊断，而不替代定位核心。"
        }
      },
      {
        period: "2025 - Present",
        title: "Competition Arrow Performance Evaluation",
        text: {
          en: "Participated in shooting experiments, linked kinematic factors to impact points and scores, and supported arrow straightness analysis with vision-based tracking.",
          zh: "参与射击实验，建立运动学因素与落点分数之间的联系，并利用视觉跟踪支持箭支直度分析。"
        }
      },
      {
        period: "2025 - Present",
        title: "Flood Forecasting and Hydrological Modelling",
        text: {
          en: "Processed remote-sensing data and contributed to machine-learning workflows for discharge prediction and runoff modelling.",
          zh: "处理遥感数据，并参与面向流量预测与径流建模的机器学习流程。"
        }
      }
    ],
    awards: [
      "Mathematical Contest in Modeling (MCM/ICM), Meritorious Winner, 2025",
      "ICBC Cup Business Competition, Excellence Award"
    ],
    skills: [
      "Python, Java, C, SQL",
      "LaTeX, GitHub, Office, technical writing, simple static website prototyping",
      "AI-assisted research and development with Codex, ChatGPT Pro, Claude, and Gemini",
      "Computer vision prototyping, evaluation pipelines, structured dataset curation"
    ]
  },
  life: {
    overview: {
      en: "Beyond research work, I also value travel, sports, and everyday interests as part of a sustained personal context rather than a separate showcase.",
      zh: "除研究工作之外，我也重视旅行、运动与日常兴趣，它们构成了长期个人状态的一部分，而不是与学术完全割裂的展示内容。"
    },
    map: {
      center: { lat: 35.8617, lng: 104.1954 },
      zoom: 4,
      intro: {
        en: "This map records places I have visited in China and can be extended with additional cities, notes, and photos over time.",
        zh: "这张地图记录了我在中国去过的地点，后续可以继续补充更多城市、说明与照片。"
      },
      entries: [
        {
          city: "Zhuhai",
          province: "Guangdong",
          lat: 22.2710,
          lng: 113.5767,
          label: "BNBU",
          description: {
            en: "Zhuhai is the main location of my current undergraduate study and daily academic work.",
            zh: "珠海是我当前本科阶段学习与日常学术工作的主要所在地。"
          },
          photo: ""
        },
        {
          city: "Guangzhou",
          province: "Guangdong",
          lat: 23.1291,
          lng: 113.2644,
          label: "Internship / Travel",
          description: {
            en: "Guangzhou is associated with internship experience and repeated city visits over time.",
            zh: "广州与实习经历以及多次往返的城市活动相关。"
          },
          photo: ""
        },
        {
          city: "Beijing",
          province: "Beijing",
          lat: 39.9042,
          lng: 116.4074,
          label: "Competition / Project Travel",
          description: {
            en: "Beijing is linked to project-related travel and competition activity in my recent records.",
            zh: "北京与我近期记录中的项目出行和竞赛活动相关。"
          },
          photo: ""
        }
      ]
    },
    sports: [
      {
        name: "Archery",
        description: {
          en: "Archery is both a technical project context and a sustained personal interest connected to training and competition workflows.",
          zh: "射箭既是技术项目语境的一部分，也是与训练和竞赛流程长期相关的个人兴趣。"
        }
      },
      {
        name: "Ball Sports",
        description: {
          en: "This section is reserved for additional sports interests and can be expanded with specific activities later.",
          zh: "该部分预留给更多运动兴趣，后续可以继续补充具体项目。"
        }
      }
    ],
    games: [
      {
        name: "Games",
        description: {
          en: "This section is reserved for games and related interests that may be added in future updates.",
          zh: "该部分预留给游戏及相关兴趣内容，可在后续更新中继续补充。"
        }
      }
    ],
    otherInterests: [
      {
        name: "Travel Notes",
        description: {
          en: "Future updates may add photos, short notes, and further cities to this section while keeping the same structure.",
          zh: "后续可以在保持当前结构不变的前提下，继续补充照片、简短说明与更多城市。"
        }
      }
    ]
  }
};
