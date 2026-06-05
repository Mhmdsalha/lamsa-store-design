import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CreditCard,
  Headphones,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

export type LamsaSectionId = "skincare" | "makeup" | "perfume" | "hair";

export interface LamsaNavItem {
  label: string;
  href: string;
}

export interface LamsaCategory {
  id: LamsaSectionId;
  label: string;
  imageAlt: string;
  tone: string;
}

export interface LamsaProduct {
  id: number;
  sectionId: LamsaSectionId;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  imageAlt: string;
  objectPosition: string;
}

export interface LamsaSection {
  id: LamsaSectionId;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  bannerImage: string;
  imageAlt: string;
  accent: string;
}

export interface LamsaTrustItem {
  label: string;
  icon: LucideIcon;
}

export interface CartItem {
  productId: number;
  quantity: number;
}

export const navItems: LamsaNavItem[] = [
  { label: "العناية بالبشرة", href: "/#skincare" },
  { label: "المكياج", href: "/#makeup" },
  { label: "العطور", href: "/#perfume" },
  { label: "العروض", href: "/#offers" },
];

export const categories: LamsaCategory[] = [
  {
    id: "skincare",
    label: "العناية بالبشرة",
    imageAlt: "عبوات عناية بالبشرة بلمسة فاخرة",
    tone: "from-[#F7D8E3] to-[#FFF8F0]",
  },
  {
    id: "makeup",
    label: "المكياج",
    imageAlt: "أحمر شفاه وبودرة بلمسات وردية",
    tone: "from-[#F3E5D8] to-[#FFFFFF]",
  },
  {
    id: "perfume",
    label: "العطور",
    imageAlt: "زجاجة عطر أنيقة بلمعان ذهبي",
    tone: "from-[#F4D4BD] to-[#FFF8F0]",
  },
  {
    id: "hair",
    label: "العناية بالشعر",
    imageAlt: "مستحضرات عناية بالشعر بتصميم ناعم",
    tone: "from-[#F2DCE2] to-[#FFFFFF]",
  },
];

export const products: LamsaProduct[] = [
  {
    id: 1,
    sectionId: "skincare",
    brand: "Lamsa Lab",
    name: "سيروم الورد المضيء",
    price: 149,
    originalPrice: 189,
    imageAlt: "سيروم ورد فاخر",
    objectPosition: "48% 42%",
  },
  {
    id: 2,
    sectionId: "skincare",
    brand: "Nour Atelier",
    name: "كريم ترطيب حريري",
    price: 119,
    originalPrice: 155,
    imageAlt: "كريم ترطيب فاخر",
    objectPosition: "65% 48%",
  },
  {
    id: 3,
    sectionId: "makeup",
    brand: "Velvet Muse",
    name: "أحمر شفاه مخملي",
    price: 79,
    originalPrice: 99,
    imageAlt: "أحمر شفاه مخملي",
    objectPosition: "35% 54%",
  },
  {
    id: 4,
    sectionId: "skincare",
    brand: "Ritual Glow",
    name: "ماسك النعومة الليلي",
    price: 135,
    originalPrice: 170,
    imageAlt: "ماسك عناية ليلي",
    objectPosition: "54% 64%",
  },
  {
    id: 5,
    sectionId: "makeup",
    brand: "Satin Skin",
    name: "بودرة تثبيت شفافة",
    price: 92,
    originalPrice: 120,
    imageAlt: "بودرة تثبيت شفافة",
    objectPosition: "44% 57%",
  },
  {
    id: 6,
    sectionId: "perfume",
    brand: "Amber Veil",
    name: "عطر زهري ناعم",
    price: 215,
    originalPrice: 260,
    imageAlt: "عطر زهري ناعم",
    objectPosition: "70% 40%",
  },
  {
    id: 7,
    sectionId: "makeup",
    brand: "Pearl Touch",
    name: "هايلايتر لؤلؤي",
    price: 88,
    originalPrice: 115,
    imageAlt: "هايلايتر لؤلؤي",
    objectPosition: "30% 42%",
  },
  {
    id: 8,
    sectionId: "makeup",
    brand: "Dew Ritual",
    name: "رذاذ تثبيت منعش",
    price: 105,
    originalPrice: 139,
    imageAlt: "رذاذ تثبيت منعش",
    objectPosition: "58% 38%",
  },
  {
    id: 9,
    sectionId: "perfume",
    brand: "Noor Oud",
    name: "مسك وردي فاخر",
    price: 240,
    originalPrice: 295,
    imageAlt: "عطر مسك وردي فاخر",
    objectPosition: "62% 46%",
  },
  {
    id: 10,
    sectionId: "perfume",
    brand: "Sahar Notes",
    name: "عطر عنبر ناعم",
    price: 229,
    originalPrice: 279,
    imageAlt: "عطر عنبر ناعم",
    objectPosition: "38% 44%",
  },
  {
    id: 11,
    sectionId: "hair",
    brand: "Silk Ritual",
    name: "زيت لمعان للشعر",
    price: 97,
    originalPrice: 129,
    imageAlt: "زيت لمعان للشعر",
    objectPosition: "50% 52%",
  },
  {
    id: 12,
    sectionId: "hair",
    brand: "Dew Hair",
    name: "ماسك تغذية عميق",
    price: 112,
    originalPrice: 149,
    imageAlt: "ماسك تغذية للشعر",
    objectPosition: "72% 50%",
  },
  {
    id: 13,
    sectionId: "perfume",
    brand: "Rose Dunes",
    name: "عطر بتلات الورد",
    price: 198,
    originalPrice: 245,
    imageAlt: "عطر بتلات الورد",
    objectPosition: "44% 46%",
  },
  {
    id: 14,
    sectionId: "hair",
    brand: "Velvet Hair",
    name: "سيروم أطراف حريري",
    price: 89,
    originalPrice: 119,
    imageAlt: "سيروم أطراف حريري للشعر",
    objectPosition: "42% 48%",
  },
  {
    id: 15,
    sectionId: "hair",
    brand: "Glow Roots",
    name: "بخاخ ترطيب خفيف",
    price: 76,
    originalPrice: 99,
    imageAlt: "بخاخ ترطيب خفيف للشعر",
    objectPosition: "64% 50%",
  },

];

export const sections: LamsaSection[] = [
  {
    id: "skincare",
    eyebrow: "روتين هادئ",
    title: "العناية بالبشرة",
    description:
      "سيرومات وكريمات مختارة تمنح البشرة ترطيبًا ناعمًا وإشراقة يومية بلمسة بوتيكية.",
    cta: "تسوقي العناية",
    bannerImage: "/images/lamsa/skincare-makeup-banner.png",
    imageAlt: "بنر فاخر لمنتجات العناية بالبشرة",
    accent: "#C9748F",
  },
  {
    id: "makeup",
    eyebrow: "لمسة نهائية",
    title: "المكياج",
    description:
      "درجات وردية وملمس حريري لروتين يومي راقٍ، من أحمر الشفاه إلى البودرة المضيئة.",
    cta: "اكتشفي المكياج",
    bannerImage: "/images/lamsa/skincare-makeup-banner.png",
    imageAlt: "بنر فاخر لمنتجات المكياج",
    accent: "#D4AF87",
  },
  {
    id: "perfume",
    eyebrow: "أثر لا ينسى",
    title: "العطور",
    description:
      "نفحات وردية وعنبرية ناعمة، مصممة لتترك حضورًا هادئًا وفاخرًا طوال اليوم.",
    cta: "اختاري عطرك",
    bannerImage: "/images/lamsa/perfume-banner.png",
    imageAlt: "بنر فاخر لزجاجات عطر",
    accent: "#B98573",
  },
  {
    id: "hair",
    eyebrow: "نعومة يومية",
    title: "العناية بالشعر",
    description:
      "زيوت وماسكات مغذية تمنح الشعر لمعانًا طبيعيًا وملمسًا ناعمًا دون ثقل.",
    cta: "تسوقي الشعر",
    bannerImage: "/images/lamsa/skincare-makeup-banner.png",
    imageAlt: "بنر فاخر للعناية بالشعر",
    accent: "#8E445D",
  },
];

export const cartItems: CartItem[] = [
  { productId: 1, quantity: 1 },
  { productId: 6, quantity: 1 },
  { productId: 7, quantity: 2 },
];

export const trustItems: LamsaTrustItem[] = [
  { label: "شحن سريع خلال 24 ساعة", icon: Truck },
  { label: "منتجات أصلية 100%", icon: BadgeCheck },
  { label: "إرجاع مجاني خلال 14 يوم", icon: RefreshCw },
  { label: "دفع آمن ومشفر", icon: ShieldCheck },
];

export const footerColumns = [
  {
    title: "روابط سريعة",
    links: ["عن لمسة", "العروض", "الأسئلة الشائعة", "سياسة الإرجاع"],
  },
  {
    title: "تواصل معنا",
    links: ["الرياض، المملكة العربية السعودية", "hello@lamsa.demo", "9200 000 00"],
  },
];

export const badgeItems = [
  { label: "استشارة جمال", icon: Headphones },
  { label: "اختيار آمن", icon: CreditCard },
  { label: "توهج يومي", icon: Sparkles },
];
