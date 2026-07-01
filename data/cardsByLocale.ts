import type { Locale } from "@/lib/i18n/config";
import type { ProjectCard } from "./cards";

const shared = {
  eagle: {
    src: "eagl.webp",
    color: "#1A1D38",
    url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.eagleiot_mobile&pli=1",
      appStore: "https://apps.apple.com/sa/app/eagleiot/id6502992364",
    },
  },
  smartSense: {
    src: "smart-sense.webp",
    color: "#23214A",
    url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.smartsenseapp",
      appStore:
        "https://apps.apple.com/sa/app/smart-sense-eagle-iot/id6749008595",
    },
  },
  apps: {
    src: "apps.webp",
    color: "#2D2B5A",
    url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    storeLinks: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.rmsdriverapp",
      appStore: "https://apps.apple.com/sa/app/driver-eagle-iot/id6752689802",
    },
  },
} as const;

const cardsEn: ProjectCard[] = [
  {
    title: "Eagle-IoT | The Fleet Intelligence Hub",
    description:
      "Eagle-IoT is a TGA-approved command center for regulated fleet operations in Saudi Arabia. It combines real-time visibility, driver behavior intelligence, and automated compliance reporting in one unified platform to reduce risk and improve control.",
    fullDescription:
      "In an environment where fuel costs, driver safety, and strict regulatory standards define your bottom line, Eagle-IoT provides the answer. As a TGA-Approved Service Provider, we move beyond basic GPS to offer a comprehensive, fully compliant command center for mobile assets.\n\nThe Challenge: Eliminating fuel leakage, preventing unauthorized vehicle use, and managing the high-stakes complexity of Wasl and TGA regulatory compliance.\n\nThe Solution: A unified platform delivering real-time visibility, advanced driver behavior analytics, and automated reporting. Our status as an approved provider ensures that your data is transmitted accurately and securely to the relevant Saudi authorities.\n\nCore Capabilities:\n- TGA & Wasl Integration: Seamless, automated data sharing with the Transport General Authority.\n- Fuel & Cost Governance: Real-time monitoring designed to eliminate waste and theft.\n- Safety Intelligence: Driver behavior scoring to reduce accidents and insurance liabilities.\n\nBest for: Logistics providers, government transport authorities, and large-scale commercial fleets requiring certified solutions.",
    ...shared.eagle,
  },
  {
    title: "SmartSense | Connected Asset Intelligence",
    description:
      "When your operational success depends on the precise condition of your assets; not just their location, SmartSense provides the eyes on the ground. This is the intelligence layer for fixed warehouses, cold storage facilities, and high-value environmental assets.",
    fullDescription:
      "When your operational success depends on the precise condition of your assets; not just their location, SmartSense provides the eyes on the ground. This is the intelligence layer for fixed warehouses, cold storage facilities, and high-value environmental assets.\n\nThe Challenge: Maintaining 100% cold chain stability, preventing costly pharmaceutical spoilage, and manually logging data to meet strict Saudi Food and Drug Authority standards.\n\nThe Solution: An advanced sensor-driven ecosystem providing real-time monitoring of environment. SmartSense automates the data-logging process, providing the auditable digital trail required for SFDA compliance and pharmaceutical integrity.\n\nCore Capabilities:\n- Warehouse & Cold Storage: 24/7 monitoring of fixed storage environments.\n- SFDA-Ready Reporting: Automated temperature logs and historical data for regulatory audits.\n- Real-Time Alerts: Immediate notification via SMS/Email the moment temperature or humidity deviates from the safety threshold.\n\nBest for: Healthcare warehouses, pharmaceutical cold storage, food & beverage distributors, and sensitive environmental monitoring.",
    ...shared.smartSense,
  },
  {
    title: "Integrated Mobility Apps | The Last Mile of Intelligence",
    description:
      "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications brings office intelligence to the field—bridging dispatchers and drivers with specialized mobile interfaces built for regulated operations.",
    fullDescription:
      "Data is only valuable if it reaches the people who can act on it. Our suite of mobile applications ensures that the intelligence generated in the office is executed in the field. We bridge the gap between the dispatcher and the driver.\n\nSpecialized mobile interfaces include the Eagle-IoT Fleet Management app, Driver Dispatch app, Bus Transit apps, and the Smart Sense app—each tuned for its role in your operations.",
    ...shared.apps,
  },
];

const cardsAr: ProjectCard[] = [
  {
    title: "ايغل-آى او تي Eagle-IoT | المنصة المتكاملة لإدارة الأساطيل وتتبع المركبات",
    description:
      "تقدم منصة ايغل-آى او تي Eagle-IoT المعتمدة من الهيئة العامة للنقل (TGA) حلول إدارة الأساطيل وتتبع المركبات في المملكة العربية السعودية. تجمع المنصة بين التتبع اللحظي للمركبات (GPS)، وتحليل سلوك السائقين، وإصدار تقارير الامتثال بما يتوافق مع المتطلبات الحكومية بشكل تلقائي وسلس.",
    fullDescription:
      "تقدم منصة ايغل-آى او تي Eagle-IoT المعتمدة من الهيئة العامة للنقل (TGA) حلول إدارة الأساطيل وتتبع المركبات في المملكة العربية السعودية. تجمع المنصة بين التتبع اللحظي للمركبات (GPS)، وتحليل سلوك السائقين، وإصدار تقارير الامتثال بما يتوافق مع المتطلبات الحكومية بشكل تلقائي وسلس.\n\nالتحدي: تواجه الشركات العديد من التحديات التشغيلية المحورية والمؤثرة مثل هدر الوقود وسرقته والاستخدام غير المصّرح به للسيارات والمتطلبات المعقدة للهيئة العامة للنقل ومنصة «وصل».\n\nالحل: تقدم Eagle-IoT منصة موحدة تمنحك رؤية فورية ومباشرة لكل ما يحدث، مع تحليل تفصيلي لأداء السائق وسلوكه على الطريق وتقارير دقيقة تستعرض جميع التفاصيل بما يلبي شروط الامتثال للهيئات المعنية.\n\nCore Capabilities:\n- الربط مع هيئة النقل ومنصة «وصل»: مشاركة البيانات تلقائياً وبسلاسة مع الهيئة العامة للنقل.\n- إدارة وتوفير الوقود والتكاليف: مراقبة حية ومباشرة للوقود للقضاء على الهدر والسرقة.\n- أنظمة السلامة الذكية: تقييم سلوك السائقين لتقليل الحوادث وأقساط التأمين.\n\nBest for: شركات الخدمات اللوجستية وهيئات النقل الحكومية وأساطيل النقل التجاري الكبرى التي تحتاج إلى أنظمة وحلول معتمدة.",
    ...shared.eagle,
  },
  {
    title: "سمارت سينس SmartSense | النظام الذكي لمراقبة سلاسل التبريد ودرجات الحرارة",
    description:
      "عندما يعتمد نجاح أعمالك على الالتزام الصارم باشتراطات هيئة الغذاء والدواء (SFDA) والحفاظ على سلامة المنتجات المخزنة، توفر لك سمارت سينس SmartSense رؤية شاملة وتحكماً كاملاً. يراقب النظام درجات الحرارة والرطوبة بشكل لحظي، وهو مصمم لمرافق التخزين الثابتة، وسلاسل التبريد، والمرافق اللوجستية، ومخازن التبريد في جميع أنحاء المملكة.",
    fullDescription:
      "عندما يعتمد نجاح أعمالك على الالتزام الصارم باشتراطات هيئة الغذاء والدواء (SFDA) والحفاظ على سلامة المنتجات المخزنة، توفر لك سمارت سينس SmartSense رؤية شاملة وتحكماً كاملاً. يراقب النظام درجات الحرارة والرطوبة بشكل لحظي، وهو مصمم لمرافق التخزين الثابتة، وسلاسل التبريد، والمرافق اللوجستية، ومخازن التبريد في جميع أنحاء المملكة.\n\nالتحدي: يواجه القائمون على إدارة سلاسل التبريد والتخزين صعوبات شتى في الحفاظ على استقرار التبريد ومنع تلف الأدوية والمستحضرات الطبية، بالإضافة إلى مخاطر التسجيل اليدوي للبيانات، بما يعوق تحقيق معايير هيئة الغذاء والدواء السعودية.\n\nالحل: منظومة متطورة تعتمد على حساسات وأجهزة استشعار ذكية لمراقبة البيئة المحيطة فورياً. يقدم سمارت سينس أتمتة وتسجيل آلي للبيانات، مما يوفر سجلاً رقمياً جاهزاً للمراجعة والتفتيش لضمان التوافق مع هيئة الغذاء والدواء وسلامة الأدوية.\n\nCore Capabilities:\n- المستودعات وثلاجات التخزين: مراقبة بيئة التخزين على مدار الساعة (24/7).\n- تقارير جاهزة تلبي شروط هيئة الغذاء والدواء: تقارير تفصيلية تستعرض بيانات التخزين بدقة، بما يستوفي شروط الامتثال والتفتيش الرسمية.\n- تنبيهات فورية: إشعارات فورية عبر الرسائل النصية (SMS) أو البريد الإلكتروني بمجرد حدوث أي تغيير في درجات الحرارة أو الرطوبة أو تجاوز الحد الآمن.\n\nBest for: مخازن الأدوية وأدوات الرعاية الصحية ومنافذ توزيع الأغذية والمشروبات ومراقبة البيئات الحساسة.",
    ...shared.smartSense,
  },
  {
    title: "تطبيقات التنقل المتكاملة | أحدث الأدوات التكنولوجية للإدارة الذكية",
    description:
      "تضمن لك التطبيقات الذكية وصول المعلومة فوراً للشخص المسؤول لاتخاذ القرار السليم في الوقت المناسب، وتنقل القرارات الصادرة من الإدارة إلى السائقين والعمال في موقع العمل بكل سلاسة.   ",
    fullDescription:
      "الهدف: استمرار العمليات من البداية وحتى النهاية بسلاسة ودون انقطاع.\n\nتضمن لك التطبيقات الذكية وصول المعلومة فوراً للشخص المسؤول لاتخاذ القرار السليم في الوقت المناسب، وعبر التطبيقات تنتقل القرارات الصادرة من الإدارة إلى السائقين والعمال في موقع العمل بكل سلاسة في غمضة عين، بما يضمن التواصل المستمر بين الإدارة والسائق.\n\nCore Capabilities:\n- تطبيق Eagle-IoT لإدارة المركبات (Eagle-IoT Fleet Management App)\n- تطبيق Eagle-IoT لتوجيه السائقين (Driver Dispatch App)\n- تطبيقات النقل العام والحافلات (Bus Transit Apps)\n- تطبيق سمارت سينس",
    ...shared.apps,
  },
];

export function getCards(locale: Locale): ProjectCard[] {
  return locale === "ar" ? cardsAr : cardsEn;
}
