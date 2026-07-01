import type { Locale } from "./config";

const en = {
  nav: {
    home: "Home",
    about: "About",
    whyChoose: "Why Choose Us",
    blog: "Blog",
    contact: "Contact",
    pages: "Pages",
    services: "Services",
    shop: "Shop",
    getInTouch: "Get in Touch",
  },
  language: {
    switchToArabic: "Switch to Arabic",
    switchToEnglish: "Switch to English",
    en: "EN",
    ar: "عربي",
  },
  whatsapp: {
    label: "Chat on WhatsApp",
  },
  common: {
    backToTop: "Go Back Top",
  },
  siteFooter: {
    contactInfo: "Contact Info",
    location: "Location",
    pages: "Pages",
    home: "Home",
    aboutUs: "About Us",
    blogs: "Blogs",
    ourServices: "Our Services",
    fleetManagement: "Fleet Managment",
    assetManagement: "Asset Management",
    coldChainManagement: "Cold Chain Management",
    videoTelematics: "Video Telematics",
    followUs: "Follow Us:",
    allRightsReserved: "All rights reserved",
  },
  externalLinks: {
    eagleIot: "https://avl-ksa.com/en/",
    blogs: "https://avl-ksa.com/en/blogs/",
    contact: "https://avl-ksa.com/en/contact-us/",
  },
  seo: {
    title: "Power Orbit",
    description:
      "Power Orbit delivers IoT infrastructure and telematics intelligence for mission-critical fleet and enterprise operations in Saudi Arabia and beyond.",
  },
  home: {
    slidingText: "Power Orbit — formerly known as Digital Myth Solution",
    banner: {
      slide1: {
        subtitle:
          "Power Orbit (formerly DMS) delivers the high-fidelity Vehicle Tracking & IoT Infrastructure required for mission-critical fleet operations.",
        title: "Power Orbit  | IoT Infrastructure,",
        titleMid: " Fleet Management & Vehicle",
        titleHighlight: " Tracking in KSA",
        text: "and AI-driven intelligence required for mission-critical fleet management and vehicle tracking. We bridge the gap between raw data and executive control.",
        cta1: "Visit Eagle-IoT Platform",
        cta1Href: "https://avl-ksa.com/en/",
        cta2: "Explore the Ecosystem",
        cta2Href: "/#ecosystem",
      },
      slide2: {
        subtitle: "IT Solutions Designed for Your Success",
        titleLine1: "we bridge",
        titleLine2: "the gap between",
        titleLine3: "raw data and executive control.",
        text: 'Power Orbit does not offer a "one-size-fits-all" tool. We provide a modular ecosystem of specialized brands.',
        cta1: "Visit Eagle-IoT Platform",
        cta1Href: "https://avl-ksa.com/en/",
        cta2: "Explore the Ecosystem",
        cta2Href: "/#ecosystem",
      },
      slide3: {
        subtitle: "Trusted Across Regulated Industries",
        title: "Power Orbit,",
        titleHighlight: "formerly Digital Myth Solutions (DMS),",
        titleEnd: "is a Saudi technology company",
        text: "Delivering SFDA- and TGA-approved IoT and telematics solutions for mission-critical operations.",
        cta1: "Visit Eagle-IoT Platform",
        cta1Href: "https://avl-ksa.com/en/",
        cta2: "Explore the Ecosystem",
        cta2Href: "/#ecosystem",
      },
      badges: ["SFDA Approved", "TGA Approved", "Saudi Engineered"],
      stats: [
        { value: "19+", label: "Years of Innovation" },
        { value: "3", label: "Specialized Platforms" },
        { value: "24/7", label: "Operational Visibility" },
      ],
      highlights: [
        "Real-time fleet & asset intelligence",
        "Environmental IoT monitoring",
        "Video telematics & driver safety",
      ],
    },
    about: {
      title: "Two decades of",
      titleHighlight: "telematics innovation",
      lead:
        "Founded in 2006, Power Orbit has spent two decades navigating the complexities of the Saudi landscape. We didn't just witness the digital transformation of the Kingdom; we engineered the systems that made it possible.",
      stats: [
        { value: "20+", label: "Years of Experience" },
        { value: "SFDA", label: "Approved Compliance" },
        { value: "TGA", label: "Certified Provider" },
        { value: "24/7", label: "Operational Visibility" },
      ],
      highlights: [
        "Our evolution from Digital Myth Solutions to Power Orbit reflects a move from simple tracking to unified governance.",
        "We provide the total operational control required by the Kingdom's most demanding enterprises.",
        "We did not adapt to the industry. We helped build it.",
      ],
      callLabel: "Call us for inquiry",
      phoneDisplay: "+966 53 308 5658",
      phoneTel: "+966533085658",
      companyProfile: "Company Profile",
      companyProfileHref: "/Company-Profile-2026-Eng-Version.pdf",
      aboutUs: "About Us",
    },
    stackedCards: {
      title: "A Unified Portfolio",
      titleHighlight: "for Specialized Control",
      description:
        'Whether you require enterprise-grade vehicle tracking across the Kingdom or specialized cold chain monitoring at rest, we provide the dedicated intelligence you need.',
    },
    cardActions: {
      seeMore: "See more",
    },
    cardModal: {
      eyebrow: "Product overview",
      closeLabel: "Close details",
      availableOn: "Available on",
    },
    compliance: {
      title: "Compliance is Our Baseline.",
      titleHighlight: "Performance is Our Standard.",
      description:
        "Power Orbit operates as an approved and compliant service provider across Saudi Arabia's regulatory ecosystem.",
      badges: ["SFDA Approved", "TGA Compliant", "Wasl Integrated", "CITC Licensed"],
      footer:
        "We handle the complexity of Wasl and CITC integration so you can focus on scaling your business.",
    },
    choose: {
      title: "Operational ",
      titleSpan1: "Blind Spots Are",
      titleSpan2: "Expensive",
      titleLine1: "",
      titleLine2: "",
      intro:
        "The true cost of a 'basic' tracking system isn't the subscription fee, it's the fuel theft you didn't see, the SFDA fine you didn't avoid, and the safety risk you couldn't predict. Operational blind spots are the most expensive items on your balance sheet.",
      point1: "The issue is not lack of data.",
      point2: "It is lack of actionable intelligence.",
      aboutUs: "About Us",
      aboutUsHref: "https://avl-ksa.com/en/about-us/",
    },
    solutions: {
      title: "Solutions",
      titleHighlight: "We Provide",
      intro:
        "Certified IoT systems from Power Orbit — built for regulated fleet, asset, and environmental operations across the Kingdom.",
      items: [
        {
          title: "Fleet Management",
          description:
            "Complete command and control over vehicle location, driver behavior, and TGA-certified operational reporting.",
          href: "https://avl-ksa.com/en/fleet-management-solutions/",
          image: "/assets/images/team/fleett.png",
        },
        {
          title: "Diesel Generator Monitoring",
          description:
            "Our system proactively analyzes key performance metrics and alerts you to issues before they cause costly downtime.",
          href: "https://https://avl-ksa.com/en/diesel-generator-monitoring/",
          image: "/assets/images/team/generator.png",
        },
        {
          title: "PWAS Monitoring",
          description:
            "Make your fleet smarter, safer, and legally protected—without adding manual workload.",
          href: "https://avl-ksa.com/en/pwas-monitoring-solution/",
          image: "/assets/images/team/pwas.png",
        },
        {
          title: "Video Telematics (AI-Powered)",
          description:
            "Advanced dash-cam systems utilizing AI to detect driver fatigue, distraction, and road-side incidents.",
          href: "https://avl-ksa.com/en/video-telematics/",
          image: "/assets/images/team/video-1.png",
        },
        {
          title: "Asset Management & RTLS",
          description:
            "Real-time location services (RTLS) for high-value equipment, ensuring your capital assets are always accounted for.",
          href: "https://avl-ksa.com/en/asset-management-platform/",
          image: "/assets/images/team/asset-1.png",
        },
        {
          title: "Cold Chain & Warehouse Monitoring",
          description:
            "Precision temperature and humidity sensors for fixed storage and mobile reefers, fully compliant with SFDA standards.",
          href: "https://avl-ksa.com/en/warehouse-monitoring-solution/",
          image: "/assets/images/team/warehouse1.png",
        },
        {
          title: "Fuel Management Systems",
          description:
            "Eliminate fuel theft and monitor consumption with high-accuracy digital sensors and real-time leakage alerts.",
          href: "https://avl-ksa.com/en/oil-and-gas/",
          image: "/assets/images/team/oil-1.png",
        },
        {
          title: "Ready-Mix Solution",
          description:
            "Specialized IoT integration for concrete mixing monitoring and structural integrity data.",
          href: "https://avl-ksa.com/en/ready-mix-concrete/",
          image: "/assets/images/team/concret.png",
        },
      ],
    },
    process: {
      title: "From Data Collection",
      titleHighlight: "to Decision Intelligence",
      subtitle: "Why choose Power Orbit?",
      capabilityLabel: "Capability",
      conventionalLabel: "Conventional Providers",
      powerOrbitLabel: "Power Orbit",
      rows: [
        {
          capability: "Data Handling",
          conventional: ["Passive"],
          powerOrbit: ["Intelligent"],
        },
        {
          capability: "Visibility",
          conventional: ["Limited"],
          powerOrbit: ["Real-Time"],
        },
        {
          capability: "Compliance",
          conventional: ["Manual"],
          powerOrbit: ["Automated"],
        },
        {
          capability: "Insights",
          conventional: ["Historical"],
          powerOrbit: ["Predictive"],
        },
      ],
      closing:
        "Most systems show you what happened. Power Orbit enables you to control what happens next.",
    },
    industries: {
      title: "Purpose-Built for",
      titleHighlight: "High-Impact Sectors",
      subtitle:
        "Our solutions are tailored for industries where precision directly impacts outcomes:",
      items: [
        {
          title: "Transportation & Logistics",
          description:
            "Optimizing cross-border movement with real-time route intelligence and fuel governance.",
          href: "https://avl-ksa.com/en/smart-ambulance-fleet-monitoring-solution/",
          bg: "/assets/images/project/1.1.png",
        },
        {
          title: "Health Care",
          description:
            "Ensuring life-saving cargo stays within SFDA-mandated temperature thresholds.",
          href: "https://avl-ksa.com/en/smart-ambulance-fleet-monitoring-solution/",
          bg: "/assets/images/project/1.2.png",
        },
        {
          title: "Oil & Gas",
          description:
            "Monitoring remote high-value assets and ensuring fleet safety in high-stakes environments.",
          href: "https://avl-ksa.com/en/oil-and-gas/",
          bg: "/assets/images/project/1.3.png",
        },
        {
          title: "Supply Chain Management",
          description: "End-to-end visibility from warehouse to last-mile delivery.",
          href: "https://avl-ksa.com/en/supply-chain-management/",
          bg: "/assets/images/project/1.4.png",
        },
        {
          title: "Ready-mix Concrete",
          description:
            "Preserving structural integrity through real-time transit and mixing monitoring.",
          href: "https://avl-ksa.com/en/ready-mix-concrete/",
          bg: "/assets/images/project/portfolio-2-1.jpg",
        },
        {
          title: "Construction Machinery & Heavy Equipment",
          description:
            "Managing engine hours, location, and maintenance for mission-critical machinery.",
          href: "https://avl-ksa.com/en/construction-machinery-and-heavy-equipment/",
          bg: "/assets/images/project/portfolio-2-2.jpg",
        },
        {
          title: "Car Rentals",
          description:
            "Protecting vehicle assets and automating returns through smart telematics.",
          href: "https://avl-ksa.com/en/car-rentals/",
          bg: "/assets/images/project/portfolio-2-3.jpg",
        },
        {
          title: "SFDA & TGA-Compliant Cold Chain",
          description:
            "Certified precision for the Kingdom's most regulated logistics operations.",
          href: "https://avl-ksa.com/en/sfda-tga-compliant-cold-chain-monitoring/",
          bg: "/assets/images/project/portfolio-2-4.jpg",
        },
      ],
    },
    blog: {
      title: "Explore Our Latest",
      titleHighlight: "Insights",
      intro:
        "Explore Our Latest Articles, Guides, and Research to Shape Your Strategy and Stay Ahead with Fleet Industry Developments",
      introLink: "",
      loading: "Loading blogs…",
      empty: "No blog posts available right now.",
      readMore: "Read on AVL-KSA",
      loadingArticle: "Loading article…",
    },
    clients: {
      title: "Our Clients & ",
      titleHighlight: "Partners",
      subtitle: "Trusted by businesses and organizations we work with.",
    },
    trustedBy: {
      label: "Trusted by Leading Businesses",
      headline: "Powering Businesses Across Multiple Industries",
      description:
        "Our technology helps organizations improve fleet visibility, operational efficiency, and asset management. Trusted by businesses that rely on secure, scalable, and intelligent IoT solutions.",
      cta: "View Success Stories",
      ctaHref: "/#portfolio",
      ctaAriaLabel: "View client success stories",
      logosLabel: "Trusted partner logos",
    },
  },
} as const;

const ar = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    whyChoose: "لماذا باور أوربت؟",
    blog: "أحدث المقالات",
    contact: "اتصل بنا",
    pages: "الصفحات",
    services: "الأنظمة",
    shop: "المتجر",
    getInTouch: "تواصل معنا",
  },
  language: {
    switchToArabic: "التبديل إلى العربية",
    switchToEnglish: "التبديل إلى الإنجليزية",
    en: "EN",
    ar: "عربي",
  },
  whatsapp: {
    label: "تواصل عبر واتساب",
  },
  common: {
    backToTop: "اذهب لأعلى الصفحة",
  },
  siteFooter: {
    contactInfo: "اتصل بنا",
    location: "العنوان",
    pages: "الصفحات",
    home: "الصفحة الرئيسية",
    aboutUs: "من نحن؟",
    blogs: "المدونة",
    ourServices: "خدماتنا",
    fleetManagement: "إدارة النقل والمركبات",
    assetManagement: "إدارة الأصول",
    coldChainManagement: "إدارة سلاسل التبريد",
    videoTelematics: "المراقبة بكاميرات الفيديو",
    followUs: "تابعنا:",
    allRightsReserved: "جميع الحقوق محفوظة",
  },
  externalLinks: {
    eagleIot: "https://avl-ksa.com/ar/",
    blogs:
      "https://avl-ksa.com/المدونة-الخاصه-ايغل-آي-او-تي/",
    contact:
      "https://avl-ksa.com/اتصل-بفريق-ايغل-آي-او-تي-لإدارة-أسطولك-و/",
  },
  seo: {
    title:
      "باور أوربت Power Orbit | حلول إنترنت الأشياء لإدارة الأساطيل وتتبع المركبات في السعودية",
    description:
      'هل تبحث عن نظام تتبع مركبات معتمد من هيئة النقل؟ تقدم لك "باور أوربت" Power Orbit نظاماً ذكياً مدعوماً ببنية تحتية متقدمة لإنترنت الأشياء (IoT)، يوفر حلول إدارة الأساطيل وتتبع المركبات والمعدات، ومراقبة البيئة، والخدمات اللوجستية في جميع أنحاء المملكة العربية السعودية.',
  },
  home: {
    slidingText: "باور أوربت — المعروفة سابقاً باسم الأسطورة الرقمية (DMS)",
    banner: {
      slide1: {
        subtitle: "باور أوربت Power Orbit",
        title: "نصمم حلول التنقل الذكي",
        titleMid: "وتتبع المركبات",
        titleHighlight: "بما يلبي احتياجات أكبر أساطيل النقل في المملكة.",
        text: "نوفر لك الذكاء الاصطناعي والبيانات الدقيقة التي تحتاجها لإدارة أسطولك وتتبع مركباتك في أصعب الظروف. نجمع البيانات المبعثرة ونقدمها في لوحة تحكم واحدة تمنحك السيطرة الكاملة.",
        cta1: "اكتشف نظام سمارت سينس SmartSense لسلاسل التبريد ←",
        cta1Href: "https://avl-ksa.com/",
        cta2: "اكتشف نظام ايغل-آى او تي Eagle-IoT لإدارة الأساطيل والمركبات ←",
        cta2Href:
          "https://avl-ksa.com/ايغل-آي-او-تي-لإدارة-أسطول-نظام-تحديد-ال/",
      },
      slide2: {
        subtitle: "حلول تقنية مصممة لنجاحك",
        titleLine1: "نحوّل",
        titleLine2: "البيانات المعقدة إلى",
        titleLine3: "قرارات تشغيلية دقيقة.",
        text: "تأتي هذه الأنظمة كجزء من منظومة ايغل-آى او تي Eagle-IoT الذكية. يمكنكم التعرف على المزيد حول المزايا، ومواصفات الأجهزة، وأنظمة التكامل عبر موقعنا الإلكتروني.",
        cta1: "تفضل بزيارة Eagle-IoT",
        cta1Href: "https://avl-ksa.com/",
        cta2: "تعرّف على المنظومة الكاملة",
        cta2Href:
          "https://avl-ksa.com/ايغل-آي-او-تي-لإدارة-أسطول-نظام-تحديد-ال/",
      },
      slide3: {
        subtitle: "أنظمة معتمدة من الهيئات الرقابية والتنظيمية",
        title: "باور أوربيت",
        titleHighlight: "(Power Orbit)",
        titleEnd: "شركة تقنية سعودية",
        text: "تقدم أنظمة تتبع واتصال عن بُعد معتمدة من الهيئة العامة للغذاء (SFDA) والهيئة العامة للنقل (TGA)، لدعم العمليات اللوجستية و مزايا التتبع والمراقبة والاتصال عن بُعد.",
        cta1: "تفضل بزيارة Eagle-IoT",
        cta1Href: "https://avl-ksa.com/",
        cta2: "تعرّف على المنظومة الكاملة",
        cta2Href:
          "https://avl-ksa.com/ايغل-آي-او-تي-لإدارة-أسطول-نظام-تحديد-ال/",
      },
      badges: ["معتمد SFDA", "متوافق TGA", "هندسة سعودية"],
      stats: [
        { value: "19+", label: "عاماً من الابتكار" },
        { value: "3", label: "منصات متخصصة" },
        { value: "24/7", label: "رؤية تشغيلية" },
      ],
      highlights: [
        "ذكاء الأساطيل والأصول الفوري",
        "مراقبة بيئية عبر IoT",
        "تيلماتيك فيديو وسلامة السائق",
      ],
    },
    about: {
      title: "عشرون عاماً من",
      titleHighlight: "الابتكار في تتبع وإدارة النقل والمركبات",
      lead:
        "توفر شركة باور أوربت Power Orbit (DMS سابقاً) حلول تتبع المركبات مدعومة ببنية تحتية متقدمة لإنترنت الأشياء (IoT)، تمنحك الدقة والكفاءة العالية اللازمة لإدارة أسطولك في العمليات الحساسة والمعقدة.",
      stats: [
        { value: "20+", label: "عاماً من الخبرة" },
        { value: "SFDA", label: "معتمد من الهيئة العامة للغذاء والدواء" },
        { value: "TGA", label: "معتمد من الهيئة العامة للنقل" },
        { value: "24/7", label: "مراقبة مستمرة على مدار الساعة" },
      ],
      highlights: [
        "معتمد من الهيئة العامة للغذاء والدواء",
        "معتمد من الهيئة العامة للنقل",
        "مراقبة مستمرة على مدار الساعة",
      ],
      callLabel: "اتصل بنا للاستفسار",
      phoneDisplay: "+966 53 308 5658",
      phoneTel: "+966533085658",
      companyProfile: "الملف التعريفي للشركة",
      companyProfileHref:
        "https://avl-ksa.com/wp-content/uploads/2026/04/Company-Profile-2026.pdf",
      aboutUs: "من نحن",
    },
    stackedCards: {
      title: "منظومة موحدة",
      titleHighlight: "ومتكاملة للتحكم الاستثنائي",
      description:
        "سواء كنت بحاجة إلى نظام متقدم لتتبع المركبات في جميع أنحاء المملكة، أو حلول متخصصة لمراقبة سلاسل التبريد والتخزين، فنحن نقدم لك أنظمة ذكية مصممة لدعم نجاح أعمالك.",
    },
    cardActions: {
      seeMore: "اعرف المزيد",
    },
    cardModal: {
      eyebrow: "نظرة عامة على المنتج",
      closeLabel: "إغلاق التفاصيل",
      availableOn: "متوفر على",
    },
    compliance: {
      title: "تحقيق الامتثال هو دافعنا.",
      titleHighlight: "والأداء المتميز هو هدفنا",
      description:
        "تعمل باور أوربت (Power Orbit) كمزود خدمة معتمد ومتوافق تماماً مع الأنظمة واللوائح الرسمية في المملكة العربية السعودية.",
      badges: [
        "معتمد من هيئة الغذاء والدواء (SFDA)",
        "متوافق مع شروط هيئة النقل (TGA)",
        'مرتبط ومدمج مع منصة "وصل"',
        "مرخص من هيئة الاتصالات والفضاء والتقنية (CITC)",
      ],
      footer:
        'نحن نتولى عنك كل التعقيدات التقنية للربط مع منصة "وصل" وهيئة الاتصالات، لكي تتفرغ لتطوير أعمالك.',
    },
    choose: {
      title: "النقاط العمياء",
      titleSpan1: "والتفاصيل الخفية",
      titleSpan2: "تكلفك الكثير!",
      titleLine1: "النقاط العمياء والتفاصيل الخفية",
      titleLine2: "تكلفك الكثير!",
      intro:
        "التكلفة الحقيقية لنظام التتبع «العادي والبدائي» ليست رسوم الاشتراك الشهري، بل هي سرقة الوقود التي لم ترَها، ومخالفات هيئة الغذاء والدواء التي لم تتجنبها، ومخاطر السلامة التي لم تتوقعها. إن النقاط العمياء التي لا تراها هي البند الأكثر تكلفة في ميزانيتك.",
      point1:
        "المشكلة ليست في نقص البيانات، بل في صعوبة استخلاص المعلومات المفيدة التي تدعم الرؤية الذكية والقرارات السليمة.",
      point2: "",
      aboutUs: "من نحن",
      aboutUsHref:
        "https://avl-ksa.com/ايغل-آي-او-تي-لإدارة-أسطول-نظام-تحديد-ال/",
    },
    solutions: {
      title: "الحلول",
      titleHighlight: "والخدمات",
      intro: "أنظمة تقدمها باور أوربت (POWER ORBIT):",
      items: [
        {
          title: "إدارة أساطيل النقل والمركبات",
          description:
            "تحكم وإشراف كامل على مواقع السيارات ومراقبة سلوك السائقين أثناء القيادة مع تقارير تشغيلية معتمدة من هيئة النقل.",
          href: "https://avl-ksa.com/ar/fleet-management-solutions/",
          image: "/assets/images/team/fleett.png",
        },
        {
          title: "مراقبة مولدات الديزل",
          description:
            "يحلل نظامنا مؤشرات الأداء الرئيسية وينبهك إلى المشكلات قبل أن تسبب توقفاً مكلفاً.",
          href: "https://avl-ksa.com/ar/fleet-management-solutions/",
          image: "/assets/images/team/generator.png",
        },
        {
          title: "نظام الإنذار لمنع الاصطدام PWAS",
          description:
            "اضمن بيئة عمل آمنة مع أسطول من المعدات والآلات الذكية بدون تعقيدات ",
          href: "https://avl-ksa.com/ar/fleet-management-solutions/",
          image: "/assets/images/team/pwas.png",
        },
        {
          title: "كاميرات التتبع الذكية (المدعومة بالذكاء الاصطناعي)",
          description:
            "أنظمة كاميرات مراقبة متطورة للسيارات تستخدم الذكاء الاصطناعي لكشف علامات إرهاق السائق أو تشتته ورصد الحوادث على الطريق فوراً.",
          href: "https://avl-ksa.com/ar/video-telematics/",
          image: "/assets/images/team/video-1.png",
        },
        {
          title: "إدارة الأصول والمراقبة الفورية",
          description:
            "خدمات تتبع مواقع المعدات والأجهزة بدقة وفي أي وقت، لضمان حمايتها.",
          href: "https://avl-ksa.com/ar/asset-management-platform/",
          image: "/assets/images/team/asset-1.png",
        },
        {
          title: "مراقبة المستودعات وسلسلة التبريد",
          description:
            "أجهزة استشعار وحساسات دقيقة لقياس الحرارة والرطوبة في المخازن الثابتة وشاحنات التبريد، ومتوافقة تماماً مع معايير هيئة الغذاء والدواء.",
          href: "https://avl-ksa.com/ar/warehouse-monitoring-solution/",
          image: "/assets/images/team/warehouse1.png",
        },
        {
          title: "أنظمة إدارة الوقود",
          description:
            "منع سرقة الوقود ومراقبة الاستهلاك بدقة متناهية عبر حساسات رقمية متطورة وتنبيهات فورية عند حدوث أي تسريب.",
          href: "https://avl-ksa.com/ar/oil-and-gas/",
          image: "/assets/images/team/oil-1.png",
        },
        {
          title: "حلول شاحنات الخرسانة الجاهزة",
          description:
            "نظام ربط ذكي (IoT) مخصص لمراقبة خلط الأسمنت وتوفير بيانات دقيقة تضمن سلامة وجودة البناء.",
          href: "https://avl-ksa.com/ar/ready-mix-concrete/",
          image: "/assets/images/team/concret.png",
        },
      ],
    },
    process: {
      title: "لماذا",
      titleHighlight: "تختار باور أوربت؟",
      subtitle:
        "ليست أنظمة لجمع البيانات، بل منظومة ذكية شاملة تدعم اتخاذ القرار",
      capabilityLabel: "الميزة / القدرة",
      conventionalLabel: "الشركات التقليدية",
      powerOrbitLabel: "باور أوربت (Power Orbit)",
      rows: [
        {
          capability: "التعامل مع البيانات",
          conventional: ["مجرد استقبال للبيانات"],
          powerOrbit: ["تعامل ذكي وتفاعلي مع البيانات وتحليل دقيق"],
        },
        {
          capability: "وضوح الرؤية والمتابعة",
          conventional: ["محدود وضئيل"],
          powerOrbit: ["فوري ومباشر (في نفس اللحظة)"],
        },
        {
          capability: "الالتزام بالقوانين واللوائح",
          conventional: ["يدوي وتقليدي"],
          powerOrbit: ["تلقائي بالكامل (أتمتة المراقبة وتسجيل البيانات)"],
        },
        {
          capability: "التحليلات والنتائج",
          conventional: ["ماضية (تخبرك بما حدث)"],
          powerOrbit: ["رؤى مستقبلية وتوقعات دقيقة تساعدك على التخطيط"],
        },
      ],
      closing:
        'تعرض لك الأنظمة التقليدية ما حدث بالفعل في الماضي، أما "باور أوربت" فتمنحك القدرة على التحكم واستشراف المستقبل وتوقع المشكلات قبل وقوعها لتجنبها.',
    },
    industries: {
      title: "حلول صُممت",
      titleHighlight: "خصيصاً لخدمة القطاعات الحيوية",
      subtitle:
        "نقدم حلولاً مخصصة للمجالات والأنشطة التي يؤثر فيها التدقيق والتحكم المباشر على النتائج والأرباح:",
      items: [
        {
          title: "النقل والخدمات اللوجستية",
          description:
            "تحسين مسارات النقل والشحن الدولي عبر الحدود من خلال معرفة الطرق فورياً وإدارة وتوفير الوقود.",
          href: "https://avl-ksa.com/ar/smart-ambulance-fleet-monitoring-solution/",
          bg: "/assets/images/project/1.1.png",
        },
        {
          title: "الرعاية الصحية والطبية",
          description:
            "ضمان بقاء الشحنات والأدوية الحيوية المنقذة للحياة ضمن درجات الحرارة المحددة والمطلوبة من هيئة الغذاء والدواء.",
          href: "https://avl-ksa.com/ar/smart-ambulance-fleet-monitoring-solution/",
          bg: "/assets/images/project/1.2.png",
        },
        {
          title: "النفط والغاز",
          description:
            "مراقبة المعدات الثمينة في المواقع البعيدة، وضمان سلامة السيارات والسائقين في البيئات عالية الخطورة.",
          href: "https://avl-ksa.com/ar/oil-and-gas/",
          bg: "/assets/images/project/1.3.png",
        },
        {
          title: "إدارة سلاسل الإمداد",
          description:
            "رؤية ومتابعة كاملة للشحنات من أول دخولها المستودع وحتى وصولها ليد العميل النهائي.",
          href: "https://avl-ksa.com/ar/supply-chain-management/",
          bg: "/assets/images/project/1.4.png",
        },
        {
          title: "الخرسانة الجاهزة",
          description:
            "الحفاظ على جودة وتماسك الخرسانة من خلال مراقبة عملية الخلط وحركة الشاحنات بدقة أثناء النقل.",
          href: "https://avl-ksa.com/ar/ready-mix-concrete/",
          bg: "/assets/images/project/portfolio-2-1.jpg",
        },
        {
          title: "آلات ومعدات البناء الثقيلة",
          description:
            "متابعة ساعات عمل المحركات ومواقع المعدات وجداول الصيانة لآلات الأساسية في المشاريع.",
          href: "https://avl-ksa.com/ar/construction-machinery-and-heavy-equipment/",
          bg: "/assets/images/project/portfolio-2-2.jpg",
        },
        {
          title: "تأجير السيارات",
          description:
            "حماية السيارات والأصول، وتسهيل أتمتة عملية استلام وتسليم السيارات عبر أنظمة التتبع الذكية.",
          href: "https://avl-ksa.com/ar/car-rentals/",
          bg: "/assets/images/project/portfolio-2-3.jpg",
        },
        {
          title: "مراقبة سلسلة التبريد (المطابقة لشروط الغذاء والدواء وهيئة النقل)",
          description:
            "دقة موثقة ومعتمدة لجميع عمليات النقل والتخزين في المملكة.",
          href: "https://avl-ksa.com/ar/sfda-tga-compliant-cold-chain-monitoring/",
          bg: "/assets/images/project/portfolio-2-4.jpg",
        },
      ],
    },
    blog: {
      title: "أحدث",
      titleHighlight: "المقالات والمعلومات",
      intro: "كن على علم بأحدث مستجدات قطاع النقل واحجز مكانك في الصدارة مع",
      introLink: "AVL-KSA",
      loading: "جاري تحميل المقالات…",
      empty: "لا توجد مقالات متاحة حالياً.",
      readMore: "اقرأ على AVL-KSA",
      loadingArticle: "جاري تحميل المقال…",
    },
    clients: {
      title: "عملاؤنا و",
      titleHighlight: "شركاؤنا",
      subtitle: "موثوق بنا من قبل الشركات والمؤسسات التي نعمل معها.",
    },
    trustedBy: {
      label: "موثوق من قِبَل رواد الأعمال",
      headline: "نُمكِّن الشركات في مختلف القطاعات",
      description:
        "تساعد تقنياتنا المؤسسات على تحسين رؤية الأسطول والكفاءة التشغيلية وإدارة الأصول. موثوق بنا من قبل الشركات التي تعتمد على حلول IoT آمنة وقابلة للتوسع وذكية.",
      cta: "عرض قصص النجاح",
      ctaHref: "/#portfolio",
      ctaAriaLabel: "عرض قصص نجاح العملاء",
      logosLabel: "شعارات الشركاء الموثوقين",
    },
  },
} as const;

/** Widen literal strings so EN and AR share the same shape. */
type DeepStringMap<T> = T extends readonly string[]
  ? readonly string[]
  : T extends object
    ? { readonly [K in keyof T]: DeepStringMap<T[K]> }
    : string;

export type Messages = DeepStringMap<typeof en>;

export const translations: Record<Locale, Messages> = { en, ar };

/** Dot-path lookup, e.g. `nav.home` */
export function getMessage(
  locale: Locale,
  path: string
): string | readonly string[] | undefined {
  const parts = path.split(".");
  let current: unknown = translations[locale];
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current as string | readonly string[] | undefined;
}

export function t(locale: Locale, path: string): string {
  const value = getMessage(locale, path);
  if (typeof value === "string") return value;
  return path;
}

/** Arabic section headings used in card full descriptions */
export const CARD_SECTION_HEADINGS =
  /^(The Challenge|The Solution|Core Capabilities|Best for|التحدي|الحل|الهدف):\s*([\s\S]*)/;

export function translateCardSectionHeading(
  locale: Locale,
  heading: string
): string {
  if (locale === "en") return heading;
  const map: Record<string, string> = {
    "The Challenge": "التحدي",
    "The Solution": "الحل",
    "Core Capabilities": "المزايا الأساسية",
    "Best for": "مثالي لخدمة",
    الهدف: "الهدف",
  };
  return map[heading] ?? heading;
}
