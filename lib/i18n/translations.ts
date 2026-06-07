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
  home: {
    banner: {
      slide1: {
        subtitle:
          "Engineering Intelligent Mobility for the Kingdom's Leading Fleets",
        title: "Power Orbit (formerly DMS)",
        titleMid: "delivers the high-fidelity",
        titleHighlight: "IoT infrastructure",
        text: "and AI-driven intelligence required for mission-critical operations.",
        cta1: "Visit Eagle-IoT Platform",
        cta2: "Explore the Ecosystem",
      },
      slide2: {
        subtitle: "IT Solutions Designed for Your Success",
        titleLine1: "we bridge",
        titleLine2: "the gap between",
        titleLine3: "raw data and executive control.",
        text: 'Power Orbit does not offer a "one-size-fits-all" tool. We provide a modular ecosystem of specialized brands.',
        cta1: "Visit Eagle-IoT Platform",
        cta2: "Explore the Ecosystem",
      },
      slide3: {
        subtitle: "Trusted Across Regulated Industries",
        title: "Power Orbit,",
        titleHighlight: "formerly Digital Myth Solutions (DMS),",
        titleEnd: "is a Saudi technology company",
        text: "Delivering SFDA- and TGA-approved IoT and telematics solutions for mission-critical operations.",
        cta1: "Visit Eagle-IoT Platform",
        cta2: "Explore the Ecosystem",
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
        "Founded in 2006, Power Orbit has spent two decades navigating the complexity of Saudi operations. We did not just witness the Kingdom's digital transformation — we helped build the systems behind it.",
      stats: [
        { value: "20+", label: "Years of Experience" },
        { value: "SFDA", label: "Approved Compliance" },
        { value: "TGA", label: "Certified Provider" },
        { value: "24/7", label: "Operational Visibility" },
      ],
      highlights: [
        "We engineered the systems that made large-scale fleet digitization possible.",
        "Our evolution from DMS to Power Orbit reflects a shift from basic tracking to unified operational governance.",
        "We did not adapt to the industry — we helped define it.",
        "Today, we deliver the operational control required by the Kingdom's most demanding enterprises.",
      ],
      callLabel: "Call us for inquiry",
      companyProfile: "Company Profile",
      aboutUs: "About Us",
    },
    choose: {
      title: "Operational ",
      titleSpan1: "Blind Spots Are",
      titleSpan2: "Expensive",
      intro:
        "The true cost of a 'basic' tracking system isn't the subscription fee, it's the fuel theft you didn't see, the SFDA fine you didn't avoid, and the safety risk you couldn't predict. Operational blind spots are the most expensive items on your balance sheet",
      point1: "The issue is not lack of data.",
      point2: "It is lack of actionable intelligence.",
      aboutUs: "About Us",
    },
    process: {
      title: "From Data Collection",
      titleHighlight: "to Decision Intelligence",
      subtitle:
        "Operational maturity is not about collecting more data — it is about converting signals into decisions your leadership can act on.",
      capabilityLabel: "Capability",
      conventionalLabel: "Conventional Providers",
      powerOrbitLabel: "Power Orbit",
      rows: [
        {
          capability: "Data Handling & Visibility",
          conventional: ["Passive", "Manual", "Historical"],
          powerOrbit: ["Intelligent", "Real-Time", "Automated"],
        },
        {
          capability: "Compliance Insights",
          conventional: ["Limited", "Reactive"],
          powerOrbit: ["Predictive", "Audit-ready"],
        },
      ],
    },
  },
} as const;

const ar = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    whyChoose: "لماذا نحن",
    blog: "المدونة",
    contact: "اتصل بنا",
    pages: "الصفحات",
    services: "الخدمات",
    shop: "المتجر",
    getInTouch: "تواصل معنا",
  },
  language: {
    switchToArabic: "التبديل إلى العربية",
    switchToEnglish: "التبديل إلى الإنجليزية",
    en: "EN",
    ar: "عربي",
  },
  home: {
    banner: {
      slide1: {
        subtitle: "هندسة التنقل الذكي لأبرز أساطيل المملكة",
        title: "باور أوربت (سابقاً DMS)",
        titleMid: "تقدّم",
        titleHighlight: "بنية تحتية لإنترنت الأشياء",
        text: "والذكاء الاصطناعي اللازم للعمليات الحرجة.",
        cta1: "زيارة منصة Eagle-IoT",
        cta2: "استكشف النظام البيئي",
      },
      slide2: {
        subtitle: "حلول تقنية مصممة لنجاحك",
        titleLine1: "نربط",
        titleLine2: "الفجوة بين",
        titleLine3: "البيانات الخام والتحكم التنفيذي.",
        text: "لا تقدم باور أوربت أداة واحدة للجميع. نقدم نظاماً بيئياً معيارياً من علامات متخصصة.",
        cta1: "زيارة منصة Eagle-IoT",
        cta2: "استكشف النظام البيئي",
      },
      slide3: {
        subtitle: "موثوقون في القطاعات الخاضعة للرقابة",
        title: "باور أوربت،",
        titleHighlight: "سابقاً الأسطورة للحلول الرقمية (DMS)،",
        titleEnd: "شركة سعودية للتكنولوجيا",
        text: "نقدم حلول إنترنت الأشياء والتيلماتيك المعتمدة من SFDA وTGA للعمليات الحرجة.",
        cta1: "زيارة منصة Eagle-IoT",
        cta2: "استكشف النظام البيئي",
      },
      badges: ["معتمد SFDA", "معتمد TGA", "هندسة سعودية"],
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
      title: "عقدان من",
      titleHighlight: "ابتكار التيليماتيكس",
      lead:
        "تأسست باور أوربت عام 2006، وقضت عقدين في مواجهة تعقيد العمليات السعودية. لم نشهد التحول الرقمي للمملكة فحسب — بل ساهمنا في بناء الأنظمة التي تقف وراءه.",
      stats: [
        { value: "20+", label: "عاماً من الخبرة" },
        { value: "SFDA", label: "امتثال معتمد" },
        { value: "TGA", label: "مزود معتمد" },
        { value: "24/7", label: "رؤية تشغيلية" },
      ],
      highlights: [
        "صممنا الأنظمة التي جعلت رقمنة الأساطيل على نطاق واسع ممكنة.",
        "يعكس انتقالنا من DMS إلى باور أوربت التحول من التتبع الأساسي إلى الحوكمة التشغيلية الموحدة.",
        "لم نتكيف مع الصناعة — ساعدنا في تعريفها.",
        "اليوم نقدم التحكم التشغيلي الذي تتطلبه أكثر المؤسسات تطلباً في المملكة.",
      ],
      callLabel: "اتصل بنا للاستفسار",
      companyProfile: "الملف التعريفي للشركة",
      aboutUs: "من نحن",
    },
    choose: {
      title: "النقاط العمياء",
      titleSpan1: "التشغيلية",
      titleSpan2: "مكلفة",
      intro:
        "التكلفة الحقيقية لنظام تتبع «أساسي» ليست رسوم الاشتراك، بل سرقة الوقود التي لم ترها، وغرامة الهيئة التي لم تتجنبها، ومخاطر السلامة التي لم تتوقعها. النقاط العمياء التشغيلية هي أغلى بنود ميزانيتك.",
      point1: "المشكلة ليست نقص البيانات.",
      point2: "بل نقص الذكاء القابل للتنفيذ.",
      aboutUs: "من نحن",
    },
    process: {
      title: "من جمع البيانات",
      titleHighlight: "إلى ذكاء القرار",
      subtitle:
        "النضج التشغيلي لا يتعلق بجمع المزيد من البيانات — بل بتحويل الإشارات إلى قرارات يمكن لقيادتك التصرف بناءً عليها.",
      capabilityLabel: "القدرة",
      conventionalLabel: "المزودون التقليديون",
      powerOrbitLabel: "باور أوربت",
      rows: [
        {
          capability: "معالجة البيانات والرؤية",
          conventional: ["سلبي", "يدوي", "تاريخي"],
          powerOrbit: ["ذكي", "فوري", "آلي"],
        },
        {
          capability: "رؤى الامتثال",
          conventional: ["محدود", "تفاعلي"],
          powerOrbit: ["تنبؤي", "جاهز للتدقيق"],
        },
      ],
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
