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
        titlePrefix: "we bridge",
        title: "the gap between raw data and executive control.",
        text: 'Power Orbit does not offer a "one-size-fits-all" tool. We provide a modular ecosystem of specialized brands.',
        cta1: "Visit Eagle-IoT Platform",
        cta2: "Explore the Ecosystem",
      },
    },
    about: {
      title: "Two decades of",
      titleHighlight: "telematics innovation",
      lead:
        "Founded in 2006, Power Orbit has spent two decades navigating the complexity of Saudi operations. We did not just witness the Kingdom's digital transformation — we helped build the systems behind it.",
      highlights: [
        "We engineered the systems that made large-scale fleet digitization possible.",
        "Our evolution from DMS to Power Orbit reflects a shift from basic tracking to unified operational governance.",
        "We did not adapt to the industry — we helped define it.",
        "Today, we deliver the operational control required by the Kingdom's most demanding enterprises.",
      ],
      aboutUs: "About Us",
    },
    choose: {
      title: "Operational Blind",
      titleSpan1: "Spots Are",
      titleSpan2: "Expensive",
      intro:
        "The true cost of a 'basic' tracking system isn't the subscription fee, it's the fuel theft you didn't see, the SFDA fine you didn't avoid, and the safety risk you couldn't predict. Operational blind spots are the most expensive items on your balance sheet",
      point1: "The issue is not lack of data.",
      point2: "It is lack of actionable intelligence.",
      aboutUs: "About Us",
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
        titlePrefix: "نربط",
        title: "الفجوة بين البيانات الخام والتحكم التنفيذي.",
        text: "لا تقدم باور أوربت أداة واحدة للجميع. نقدم نظاماً بيئياً معيارياً من علامات متخصصة.",
        cta1: "زيارة منصة Eagle-IoT",
        cta2: "استكشف النظام البيئي",
      },
    },
    about: {
      title: "عقدان من",
      titleHighlight: "ابتكار التيليماتيكس",
      lead:
        "تأسست باور أوربت عام 2006، وقضت عقدين في مواجهة تعقيد العمليات السعودية. لم نشهد التحول الرقمي للمملكة فحسب — بل ساهمنا في بناء الأنظمة التي تقف وراءه.",
      highlights: [
        "صممنا الأنظمة التي جعلت رقمنة الأساطيل على نطاق واسع ممكنة.",
        "يعكس انتقالنا من DMS إلى باور أوربت التحول من التتبع الأساسي إلى الحوكمة التشغيلية الموحدة.",
        "لم نتكيف مع الصناعة — ساعدنا في تعريفها.",
        "اليوم نقدم التحكم التشغيلي الذي تتطلبه أكثر المؤسسات تطلباً في المملكة.",
      ],
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
