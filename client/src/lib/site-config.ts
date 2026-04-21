export const SITE = {
  name: "Moon Shadow",
  arabicName: "مساج ظل القمر",
  tagline: "سبا رجالي فاخر بإطلالة بحرية في الدمام",
  subtagline: "داخل فندق Tripper Inn — حجز سريع عبر واتساب وتجربة هادئة مصممة للراحة والاسترخاء.",
  phone: "0569216868",
  tel: "tel:0569216868",
  whatsapp:
    "https://wa.me/966569216868?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%AD%D8%A7%D8%A8%20%D8%A7%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%81%D9%8A%20%D9%85%D8%B3%D8%A7%D8%AC%20%D8%B8%D9%84%20%D8%A7%D9%84%D9%82%D9%85%D8%B1",
  maps:
    "https://www.google.com/maps/place/%D9%85%D8%B3%D8%A7%D8%AC+%D8%B8%D9%84+%D8%A7%D9%84%D9%82%D9%85%D8%B1+%7C+%D9%85%D8%B3%D8%A7%D8%AC+%D8%B1%D8%AC%D8%A7%D9%84%D9%8A+%D8%A7%D9%84%D8%AF%D9%85%D8%A7%D9%85+%7C+%D8%AD%D9%85%D8%A7%D9%85+%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%E2%80%AD/@26.4852877,50.1257837,17z/data=!3m1!4b1!4m6!3m5!1s0x3e49f9cb5090fdb7:0xaa28ac5b5c36d0e2!8m2!3d26.4852877!4d50.1283586!16s%2Fg%2F11l37hwbqn?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
  address: "داخل فندق Tripper Inn، شارع الياقوت، حي الشاطئ الشرقي، الدمام 32412",
  mapCenter: { lat: 26.4852877, lng: 50.1283586 },
  rating: "4.5",
  reviewCount: "107",
  hours: {
    daily: "يوميًا: 9 صباحًا — 4 صباحًا",
    friday: "الجمعة: 4 عصرًا — 5 فجرًا",
  },
} as const;

export const ASSETS = {
  logo: "/manus-storage/moonshadow_logo_transparent_edb3902d.png",
  heroVideo: "/manus-storage/pasted_file_TiI2Hs_تصميمبدونعنوان(8)_ff7df55a.mp4",
  heroIntroVideo: "/manus-storage/hero-intro-correct_90415d50.mp4",
  galleryFeatureVideo: "/manus-storage/pasted_file_efJVON_تصميمبدونعنوان(8)_c19b04b0.mp4",
  galleryOne: "/manus-storage/pasted_file_9iaWqB_20251221_172518_82d00966.jpg",
  galleryTwo: "/manus-storage/pasted_file_MOVki8_20251221_174245_64ebb93b.jpg",
  galleryThree: "/manus-storage/pasted_file_oG2Tfq_20251221_172048_9adfcf80.jpg",
  realRoomOne: "/manus-storage/moon-shadow-room-authentic-1.jpg",
  realRoomTwo: "/manus-storage/moon-shadow-room-authentic-2.jpg",
  realTreatmentVideo: "/manus-storage/moon-shadow-treatment-closeup.mp4",
  ambientVideo: "/manus-storage/pasted_file_QgwfZJ_20260116_170003_d2f9d85b.mp4",
  generatedHeroOverlay:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663030376366/Bc4kNPawbexfShxLmsB87w/moonshadow_hero_overlay_art-ZKhSAEMK4Ui2mFNmpsoEUG.webp",
  generatedPackages:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663030376366/Bc4kNPawbexfShxLmsB87w/moonshadow_package_backdrop-Nu3AX5gs2gYp7h643jYDy2.webp",
  generatedCta:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663030376366/Bc4kNPawbexfShxLmsB87w/moonshadow_cta_glow-Bfq5wMB4FGXpWaW69rW7WM.webp",
} as const;

export const TRUST_ITEMS = [
  "إطلالة بحرية تمنحك هدوءًا مختلفًا من أول دقيقة.",
  "خدمة رجالية باحترافية عالية وخصوصية كاملة.",
  "موقع واضح داخل الفندق مع وصول سريع وسهل.",
  "تقييم Google 4.5 من 107 تقييمات حقيقية.",
] as const;

export const REVIEW_TOPICS = ["النظافة", "الاستقبال المحترم", "الهدوء", "الحمام المغربي"] as const;

export const SERVICES = [
  {
    title: "مساج استرخائي",
    description: "جلسة مريحة تساعدك على فك التوتر واستعادة الهدوء الذهني والجسدي.",
  },
  {
    title: "مساج علاجي",
    description: "تركيز أعمق على مناطق الشد والإجهاد للعضلات بعد يوم طويل أو مجهود متكرر.",
  },
  {
    title: "حمام مغربي",
    description: "تنظيف وتجديد للبشرة بإحساس نظافة وانتعاش يدوم بعد الزيارة.",
  },
  {
    title: "باقات متكاملة",
    description: "خيارات مجمعة مصممة لتمنحك تجربة أهدأ وأشمل في زيارة واحدة.",
  },
];

export const PACKAGES = [
  {
    name: "عرض أول زيارة",
    badge: "لفترة محدودة",
    badgeTone: "red",
    originalPrice: null,
    price: "99",
    savings: null,
    summary: "المدخل الأسرع للتجربة الأولى بسعر واضح وحجز أسهل بدون تفكير طويل.",
    features: ["45 دقيقة مساج", "عرض أول زيارة فقط"],
  },
  {
    name: "جلسة أطول",
    badge: "60 دقيقة",
    badgeTone: "blue",
    originalPrice: null,
    price: "119",
    savings: null,
    summary: "خيار بسيط لمن يفضل وقتًا أطول مع نفس الأسلوب الهادئ والواضح في الحجز.",
    features: ["60 دقيقة مساج", "جلسة أطول بسعر مباشر"],
  },
  {
    name: "الصفوة VIP",
    badge: "أفضل قيمة",
    badgeTone: "amber",
    originalPrice: "270",
    price: "199",
    savings: "وفر 71 ريال",
    summary: "خيار فاخر لمن يريد جلسة أطول وعناية أعمق مع أفضل قيمة وسط الباقات",
    features: ["60 دقيقة مساج", "حمام مغربي", "حمام كريم", "سفرة للجسم", "جلسة بخار", "عناية بفروة الرأس"],
  },
  {
    name: "الملكي الشامل",
    badge: null,
    badgeTone: null,
    originalPrice: "420",
    price: "299",
    savings: "وفر 121 ريال",
    summary: "الباقة الأشمل لمن يريد تجربة ملكية متكاملة من الرأس للقدم مع أعلى توفير",
    features: [
      "50 دقيقة مساج",
      "حمام مغربي ملكي",
      "حمام كريم",
      "سفرة للجسم",
      "باديكير كامل",
      "فحم للوجه",
      "جلسة بخار",
    ],
  },
] as const;

export const REVIEWS = [
  {
    name: "Ahmed Alswwilam",
    text: "الاستقبال محترم جدًا، والعامل ممتاز، والشغل متقن ويعطي إحساسًا حقيقيًا بالراحة.",
  },
  {
    name: "عبدالله الحمدان",
    text: "المكان مرتب وأجواؤه هادئة والخدمة ممتازة، وتجربة الزيارة مريحة من الدخول حتى النهاية.",
  },
  {
    name: "Mo",
    text: "المركز نظيف، والإطلالة البحرية جميلة، والعمال ممتازون، والمساج عندهم ممتاز جدًا.",
  },
] as const;

export const FAQS = [
  {
    question: "كيف أحجز موعد؟",
    answer: "يمكنك الحجز مباشرة عبر واتساب أو الاتصال على الرقم الظاهر في الصفحة وسيتم تأكيد الموعد بسرعة.",
  },
  {
    question: "أين يقع المركز؟",
    answer: "يقع Moon Shadow داخل فندق Tripper Inn في شارع الياقوت بحي الشاطئ الشرقي في الدمام.",
  },
  {
    question: "هل أوقات العمل مناسبة للمساء؟",
    answer: "نعم، أوقات العمل ممتدة يوميًا حتى ساعات متأخرة لتناسب من يفضلون الزيارات المسائية والليلية.",
  },
  {
    question: "هل أستطيع معرفة العرض الحالي قبل الزيارة؟",
    answer: "نعم، يكفي أن ترسل رسالة عبر واتساب وسيصلك الرد بأقرب وقت مع الباقات والعروض المتاحة.",
  },
] as const;
