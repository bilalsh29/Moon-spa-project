/*
Style reminder — Neo-Arabian Nocturne:
Keep the layout luxurious, asymmetrical, Arabic-first, mobile-focused, and conversion-driven with restrained motion and clear CTA hierarchy.
*/
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUp,
  Clock3,
  MapPinned,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapView } from "@/components/Map";
import { ASSETS, FAQS, PACKAGES, REVIEWS, REVIEW_TOPICS, SERVICES, SITE, TRUST_ITEMS } from "@/lib/site-config";
import { getSnapPixelId, installSnapPixel, SNAP_EVENTS, trackCallClick, trackSnapEvent, trackWhatsAppClick } from "@/lib/tracking";

const navItems = [
  { label: "المميزات", href: "#why-us" },
  { label: "الخدمات", href: "#services" },
  { label: "الباقات", href: "#packages" },
  { label: "التقييمات", href: "#reviews" },
  { label: "التواصل", href: "#contact" },
] as const;

const whyCards = [
  {
    icon: Waves,
    title: "إطلالة بحرية هادئة",
    text: "أجواء مختلفة تضيف للزيارة إحساسًا أهدأ وأكثر رفاهية من أول لحظة.",
  },
  {
    icon: ShieldCheck,
    title: "خصوصية وراحة",
    text: "بيئة مرتبة وخدمة راقية مصممة لرحلة استرخاء هادئة وواضحة.",
  },
  {
    icon: Sparkles,
    title: "تجربة نظيفة وفاخرة",
    text: "تفاصيل عناية مرتبة، إضاءة مدروسة، ولمسة فندقية ترفع جودة الزيارة.",
  },
] as const;

const stats = [
  { value: SITE.rating, label: "تقييم Google" },
  { value: SITE.reviewCount, label: "تقييم حقيقي" },
  { value: "واتساب", label: "حجز سريع" },
  { value: "حتى الفجر", label: "ساعات عمل" },
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [showWhyUsVideo, setShowWhyUsVideo] = useState(true);
  const [showHeroIntroVideo, setShowHeroIntroVideo] = useState(true);

  useEffect(() => {
    installSnapPixel();

    const onScroll = () => {
      const y = window.scrollY;
      setShowTop(y > 640);
      setHeaderSolid(y > 60);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setShowHeroIntroVideo(true);
  }, [ASSETS.heroIntroVideo]);

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleWhatsAppTrack = (location: string) => {
    trackWhatsAppClick(location);
  };

  const handleCallTrack = (location: string) => {
    trackCallClick(location);
  };

  const formatArabicPrice = (value: string) => new Intl.NumberFormat("ar-SA").format(Number(value));

  const handleSharePackage = async (packageName: string) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#packages`;
    const shareText = `شاهد باقة ${packageName} في ${SITE.arabicName}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${SITE.arabicName} — ${packageName}`,
          text: shareText,
          url: shareUrl,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      }
      trackSnapEvent(SNAP_EVENTS.SHARE_CLICK, { package_name: packageName });
    } catch {
      // Ignore share cancellation to preserve a smooth mobile flow.
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10rem] top-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.18),transparent_62%)] blur-3xl" />
        <div className="absolute left-[-10rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,88,181,0.22),transparent_64%)] blur-3xl" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          headerSolid ? "border-b border-white/8 bg-[#070b16]/88 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between gap-4 py-4">
            <button
              type="button"
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a84c]/25 bg-[#0c1224]/70 text-[#d9b764] shadow-[0_10px_30px_rgba(0,0,0,0.25)] lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <a href="#top" className="mr-auto flex items-center gap-3 text-right lg:mr-0" onClick={() => setMenuOpen(false)}>
              <img src={ASSETS.logo} alt="Moon Shadow logo" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
              <div>
                <p className="font-display text-xl font-semibold tracking-[0.18em] text-[#dfc173] sm:text-2xl">
                  MOON SHADOW
                </p>
                <p className="text-xs text-white/65 sm:text-sm">{SITE.arabicName}</p>
              </div>
            </a>

            <nav className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/78 transition hover:text-[#ebcb7a]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => handleWhatsAppTrack("hero_whatsapp_header") }
              className="hidden rounded-full border border-[#d5b46a]/30 bg-[#12192d]/80 px-5 py-2.5 text-sm font-bold text-[#f3dfaf] transition hover:-translate-y-0.5 hover:bg-[#182038] lg:inline-flex"
            >
              احجز عبر واتساب
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/8 bg-[#080d19]/96 backdrop-blur-xl lg:hidden">
            <div className="container py-4">
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl border border-white/8 bg-white/3 px-4 py-3 text-sm font-semibold text-white/85"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="pb-28 pt-24 sm:pt-28">
        <section className="container">
          <div className="section-shell soft-noise relative min-h-[calc(100vh-7rem)] rounded-[2rem] px-5 pb-8 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pb-10">
            <div className="decor-ring left-[-10%] top-[12%] h-48 w-48 opacity-50" />
            <div className="decor-ring bottom-[10%] right-[-6%] h-60 w-60 opacity-40" />

            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={ASSETS.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="hero-video-mask" />

            <div className="relative grid min-h-[calc(100vh-10rem)] items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="max-w-3xl pt-12 sm:pt-16 lg:pt-20">
                <div className="fade-up section-kicker">Luxury Men&apos;s Spa in Dammam</div>
                <div className="fade-up-delayed mt-5 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100">
                  <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-red-400" />
                  الأماكن محدودة — الحجز الأسرع عبر واتساب
                </div>
                <h1 className="fade-up-delayed mt-6 max-w-3xl text-4xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-6xl">
                  {SITE.tagline}
                </h1>
                <p className="fade-up-delayed-2 mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  {SITE.subtagline}
                </p>

                <div className="fade-up-delayed-2 mt-7 max-w-xl">
                  <div className="glass-panel overflow-hidden rounded-[1.7rem] border border-[#d4b36a]/18 p-3 sm:p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.24em] text-[#dfc173]">جولة سريعة داخل المكان</p>
                        <p className="mt-1 text-sm text-white/60">تعريف بصري مختصر قبل الحجز والتواصل.</p>
                      </div>
                      <div className="rounded-full border border-[#d4b36a]/20 bg-[#141b2e]/80 px-3 py-1 text-xs font-bold text-[#efd89d]">
                        فيديو قصير
                      </div>
                    </div>
                    {showHeroIntroVideo ? (
                      <video
                        key={ASSETS.heroIntroVideo}
                        src={ASSETS.heroIntroVideo}
                        className="h-44 w-full rounded-[1.2rem] object-cover sm:h-52"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onError={() => setShowHeroIntroVideo(false)}
                      />
                    ) : (
                      <img src={ASSETS.galleryOne} alt="صورة احتياطية للمكان عند تعذر تشغيل الفيديو" className="h-44 w-full rounded-[1.2rem] object-cover sm:h-52" />
                    )}
                  </div>
                </div>

                <div className="fade-up-delayed-2 mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer" onClick={() => handleWhatsAppTrack("hero_whatsapp") }>
                    <Button className="gold-button h-12 min-w-[190px] rounded-full px-6 text-base font-extrabold">
                      <MessageCircle className="ms-2 h-5 w-5" />
                      احجز الآن عبر واتساب
                    </Button>
                  </a>
                  <a href={SITE.tel} onClick={() => handleCallTrack("hero_call") }>
                    <Button className="outline-button h-12 min-w-[170px] rounded-full px-6 text-base font-bold">
                      <Phone className="ms-2 h-5 w-5" />
                      اتصل الآن
                    </Button>
                  </a>
                </div>

                <div className="fade-up-delayed-2 mt-5 flex flex-wrap items-center gap-3 text-sm text-white/75">
                  <a
                    href={SITE.tel}
                    onClick={() => handleCallTrack("hero_phone_chip_call") }
                    className="inline-flex items-center gap-2 rounded-full border border-[#d7b76a]/30 bg-black/20 px-4 py-2 font-semibold text-[#f5dfaf]"
                  >
                    <Phone className="h-4 w-4" />
                    {SITE.phone}
                  </a>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/6 px-4 py-2">
                    <Star className="h-4 w-4 fill-[#d4ad55] text-[#d4ad55]" />
                    {SITE.rating} من {SITE.reviewCount} تقييم
                  </span>
                </div>
              </div>

              <div className="fade-up-delayed-2 lg:justify-self-end">
                <div className="glass-panel relative rounded-[1.8rem] p-5 sm:p-6 lg:max-w-md">
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d6ba71] to-transparent" />
                  <div className="section-kicker">مؤشرات ثقة سريعة</div>
                  <div className="mt-5 grid gap-3">
                    {TRUST_ITEMS.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/80"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-[1.5rem] border border-[#d1b162]/18 bg-[#0d1325]/80 p-4 text-right">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#d9bd79]">Snap Pixel</p>
                    <p className="mt-2 text-sm text-white/72">مركب بطريقة منظمة وقابل للتغيير لاحقًا من ملف واحد.</p>
                    <p className="mt-3 text-xs text-white/45">Pixel ID: {getSnapPixelId()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="metric-card rounded-[1.6rem] px-5 py-5 text-center">
                <div className="font-display text-3xl font-bold text-[#e3c57a]">{stat.value}</div>
                <div className="mt-2 text-sm text-white/65">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="why-us" className="container mt-8">
          <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="section-kicker">لماذا يختارنا العملاء</div>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">تجربة مصممة للراحة، لا مجرد زيارة سريعة</h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/72">
                  بنينا النسخة الجديدة بحيث يفهم الزائر قيمة المكان بسرعة: موقع واضح، حجز سهل، ثقة حقيقية، وصور تعكس الأجواء بدل أن تشتت القرار.
                </p>
                <div className="mt-6 grid gap-4">
                  {whyCards.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="glass-panel rounded-[1.5rem] p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d2af5e]/12 text-[#debe74]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{title}</h3>
                          <p className="mt-2 text-sm leading-7 text-white/70">{text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-panel overflow-hidden rounded-[1.8rem] p-3 sm:col-span-2">
                  {showWhyUsVideo ? (
                    <video
                      key={ASSETS.galleryFeatureVideo}
                      src={ASSETS.galleryFeatureVideo}
                      poster={ASSETS.galleryOne}
                      className="h-72 w-full rounded-[1.3rem] object-cover sm:h-80"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onError={() => setShowWhyUsVideo(false)}
                    />
                  ) : (
                    <img src={ASSETS.galleryOne} alt="إطلالة وأجواء Moon Shadow" className="h-72 w-full rounded-[1.3rem] object-cover sm:h-80" />
                  )}
                </div>
                <div className="glass-panel overflow-hidden rounded-[1.8rem] p-3">
                  <img src={ASSETS.galleryTwo} alt="تفاصيل داخلية من المكان" className="h-56 w-full rounded-[1.3rem] object-cover" />
                </div>
                <div className="glass-panel overflow-hidden rounded-[1.8rem] p-3">
                  <img src={ASSETS.galleryThree} alt="جانب آخر من تجربة Moon Shadow" className="h-56 w-full rounded-[1.3rem] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="container mt-8">
          <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <div className="section-kicker">الخدمات الأساسية</div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">خدمات أوضح، قرار أسهل، وحجز أسرع</h2>
              <p className="mt-4 text-base leading-8 text-white/72">
                اعتمدنا عرضًا مختصرًا وواضحًا للخدمات حتى يصل العميل بسرعة إلى ما يناسبه، ثم يتحرك مباشرة إلى الباقة أو الحجز.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {SERVICES.map((service) => (
                <div key={service.title} className="glass-panel rounded-[1.7rem] p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d1b261]/10 text-[#e0c47d]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="container mt-8">
          <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="section-kicker">الباقات الحالية</div>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">اختر باقتك الآن واستفد من التوفير الحالي قبل الحجز</h2>
                <p className="mt-4 text-base leading-8 text-white/72">
                  حافظنا على الباقات الأصلية نفسها، ثم أضفنا إبرازًا أوضح للتوفير داخل كل باقة مع عرض أقرب لتجربة الجوال القديمة حتى يلتقط الزائر الفرق بسرعة ويضغط الحجز مباشرة.
                </p>
              </div>
              <div className="rounded-full border border-[#d7b86b]/25 bg-[#161f35]/70 px-4 py-2 text-sm font-semibold text-[#ead496]">
                على الجوال تظهر الباقات بشكل رأسي أوضح للمقارنة السريعة ثم الحجز فورًا
              </div>
            </div>

            <div className="featured-package-callout mt-6 rounded-[1.6rem] p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.24em] text-[#f0d795]">ترشيح سريع</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">الباقة الأكثر طلبًا: البداية الذكية</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-white/74 sm:text-base">
                    إذا كان العميل يدخل لأول مرة ويريد قرارًا سريعًا بسعر أوضح، فهذه هي الباقة التي نبرزها أولًا لتقليل التردد وتسريع الحجز.
                  </p>
                </div>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleWhatsAppTrack("featured_package_callout") }
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#d9b96c]/35 bg-[#5b340d] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#6d3f11]"
                >
                  ابدأ بهذه الباقة
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
              {PACKAGES.map((pkg, index) => {
                const badgeStyles =
                  pkg.badgeTone === "blue"
                    ? "border-blue-400/40 bg-blue-600/85 text-white shadow-[0_10px_25px_rgba(37,99,235,0.28)]"
                    : pkg.badgeTone === "red"
                      ? "border-red-400/40 bg-red-600/90 text-white shadow-[0_10px_25px_rgba(220,38,38,0.28)]"
                      : "border-[#d5b46a]/35 bg-[#6d4013] text-white shadow-[0_10px_25px_rgba(153,102,36,0.24)]";

                const mobileOrderClass =
                  index === 1 ? "order-1 md:order-none" : index === 0 ? "order-2 md:order-none" : index === 2 ? "order-3 md:order-none" : "order-4 md:order-none";

                return (
                  <article
                    key={pkg.name}
                    className={`package-card ${index === 1 ? "featured" : ""} ${mobileOrderClass} flex min-h-[37rem] w-full flex-col rounded-[2rem] p-5 sm:min-h-[40rem] sm:p-6`}
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(6, 8, 22, 0.94), rgba(6, 10, 26, 0.98)), url(${ASSETS.generatedPackages})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex min-h-12 justify-end">
                      {pkg.badge ? (
                        <div className={`inline-flex rounded-full border px-4 py-2 text-sm font-extrabold ${badgeStyles}`}>
                          {pkg.badgeTone === "blue" ? "⚡ " : pkg.badgeTone === "red" ? "🔥 " : "💎 "}
                          {pkg.badge}
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-5 text-center">
                      {index === 0 ? (
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#f2d792]/28 bg-[#f0c96a]/12 px-4 py-2 text-sm font-extrabold text-[#f4dfa5] shadow-[0_12px_30px_rgba(196,145,43,0.16)]">
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f0c96a]" />
                          ترشيحنا الأسرع للحجز الأول
                        </div>
                      ) : null}
                      <h3 className="text-[1.9rem] font-bold leading-tight text-white sm:text-[2.45rem]">{pkg.name}</h3>
                      <div className="mt-5 flex items-end justify-center gap-2">
                        <span className="font-display text-5xl font-bold leading-none text-[#d2a84a] sm:text-7xl">{formatArabicPrice(pkg.price)}</span>
                        <span className="mb-2 text-2xl text-white/55">ريال</span>
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <div className="text-lg font-semibold text-white/28 line-through decoration-white/28 decoration-2">
                        {formatArabicPrice(pkg.originalPrice)} ريال
                      </div>
                    </div>

                    <div className="mt-3 flex justify-center">
                      <div className="rounded-full border border-emerald-400/18 bg-emerald-500/10 px-4 py-2 text-sm font-extrabold text-emerald-200 shadow-[0_10px_25px_rgba(16,185,129,0.14)]">
                        {pkg.savings}
                      </div>
                    </div>

                    <p className="mt-6 text-center text-base leading-8 text-white/56 sm:mt-8 sm:text-lg sm:leading-9">{pkg.summary}</p>

                    <div className="mt-8 space-y-4 text-center sm:mt-10 sm:space-y-5">
                      {pkg.features.map((feature) => (
                        <div key={feature} className="flex flex-row-reverse items-center justify-center gap-3 text-[1.1rem] font-semibold text-white sm:text-[1.25rem]">
                          <Sparkles className="h-4 w-4 shrink-0 fill-[#d1a84b] text-[#d1a84b]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-10">
                        <div dir="ltr" className="grid grid-cols-[84px_1fr] gap-3 sm:grid-cols-[92px_1fr]">

                        <button
                          type="button"
                          onClick={() => handleSharePackage(pkg.name)}
                          className="inline-flex h-13 items-center justify-center rounded-[1.2rem] border border-[#c9a84c]/45 bg-transparent text-lg font-bold text-[#d8b96c] transition hover:border-[#dfc171] hover:text-[#f2ddad] sm:h-14 sm:text-xl"
                        >
                          شارك
                        </button>
                        <a
                          href={SITE.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => handleWhatsAppTrack(`package_${index + 1}_${pkg.name}_${pkg.savings}`) }
                          className="inline-flex h-13 items-center justify-center rounded-[1.2rem] bg-[#56310b] text-xl font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#6b3d10] sm:h-14 sm:text-2xl"
                        >
                          احجز الآن
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container mt-8">
          <div
            className="section-shell overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(7, 10, 22, 0.8), rgba(7, 10, 22, 0.54)), url(${ASSETS.generatedCta})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="section-kicker">دعوة للحجز</div>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">جاهز للاسترخاء؟ احجز موعدك الآن خلال ثوانٍ</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/76">
                  أقصر طريق للحجز هو رسالة مباشرة عبر واتساب. الموقع واضح، الرقم ظاهر، والقرار أصبح أسهل بكثير من النسخة السابقة.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer" onClick={() => handleWhatsAppTrack("mid_cta_whatsapp") }>
                  <Button className="gold-button h-12 min-w-[220px] rounded-full px-6 text-base font-extrabold">
                    <MessageCircle className="ms-2 h-5 w-5" />
                    ابدأ الحجز عبر واتساب
                  </Button>
                </a>
                <a href={SITE.tel} onClick={() => handleCallTrack("mid_cta_call") }>
                  <Button className="outline-button h-12 min-w-[220px] rounded-full px-6 text-base font-bold">
                    <Phone className="ms-2 h-5 w-5" />
                    اتصل مباشرة الآن
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="container mt-8">
          <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <div className="section-kicker">تقييمات العملاء</div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">ثقة حقيقية من Google، لا مجرد كلام تسويقي</h2>
              <p className="mt-4 text-base leading-8 text-white/72">
                يظهر التقييم بشكل أوضح في هذه النسخة مع بطاقات قراءة مريحة على الجوال، بدل التزاحم الذي كان يغطي جزءًا من المحتوى في الصفحة السابقة.
              </p>
            </div>

            <div className="review-summary-panel mt-8 rounded-[1.8rem] p-5 sm:p-6">
              <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold tracking-[0.24em] text-[#f0d795]">Google Reviews</p>
                  <div className="mt-3 flex items-end gap-3">
                    <span className="font-display text-5xl font-bold text-white sm:text-6xl">{SITE.rating}</span>
                    <div className="pb-2">
                      <div className="flex items-center gap-1 text-[#d7b45b]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-white/68">بناءً على {SITE.reviewCount} تقييمات حقيقية على Google</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {REVIEW_TOPICS.map((topic) => (
                    <span key={topic} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/78">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {REVIEWS.map((review) => (
                <article key={review.name} className="review-card rounded-[1.7rem] p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1 text-[#d7b45b]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="rounded-full border border-[#d5b46a]/20 bg-[#d5b46a]/10 px-3 py-1 text-xs font-bold text-[#f0daa1]">موثق من Google</span>
                  </div>
                  <p className="mt-5 text-lg leading-9 text-white">“{review.text}”</p>
                  <p className="mt-6 text-sm font-bold tracking-wide text-[#e3c77b]">{review.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container mt-8">
          <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <div className="section-kicker">الإطلالة والموقع</div>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">إحساس المكان يبدأ من الإطلالة قبل الجلسة</h2>
                <p className="mt-4 text-base leading-8 text-white/72">
                  تم ربط هذا القسم بالفيديو المعتمد لإبراز الواجهة والإطلالة بشكل أقرب لما يبحث عنه الزائر قبل الحجز، مع الحفاظ على سرعة العرض على الجوال.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="glass-panel overflow-hidden rounded-[1.7rem] p-3 sm:col-span-2">
                    <video
                      className="h-64 w-full rounded-[1.2rem] object-cover sm:h-72"
                      src={ASSETS.ambientVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <div className="glass-panel overflow-hidden rounded-[1.7rem] p-3">
                    <img src={ASSETS.galleryTwo} alt="صورة إضافية من داخل السبا" className="h-48 w-full rounded-[1.2rem] object-cover" />
                  </div>
                  <div className="glass-panel overflow-hidden rounded-[1.7rem] p-3">
                    <img src={ASSETS.galleryThree} alt="تفاصيل إضافية من أجواء المكان" className="h-48 w-full rounded-[1.2rem] object-cover" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="glass-panel rounded-[1.5rem] p-5 group">
                    <summary className="list-none text-lg font-bold text-white marker:hidden">
                      <div className="flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#dfc171] transition group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-white/72">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container mt-8">
          <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="section-kicker">التواصل والموقع</div>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">احجز ملاذك الخاص</h2>
                <p className="mt-4 text-base leading-8 text-white/72">
                  تواصل معنا أو تفضل بزيارتنا في الموقع. كل البيانات الأساسية موضوعة بشكل أوضح لتسهيل الوصول والحجز من الجوال.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="glass-panel rounded-[1.5rem] p-5">
                    <div className="flex items-start gap-3">
                      <MapPinned className="mt-1 h-5 w-5 text-[#d9b96d]" />
                      <div>
                        <h3 className="text-lg font-bold text-white">العنوان</h3>
                        <p className="mt-2 text-sm leading-7 text-white/72">{SITE.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel rounded-[1.5rem] p-5">
                    <div className="flex items-start gap-3">
                      <Clock3 className="mt-1 h-5 w-5 text-[#d9b96d]" />
                      <div>
                        <h3 className="text-lg font-bold text-white">ساعات العمل</h3>
                        <p className="mt-2 text-sm leading-7 text-white/72">{SITE.hours.daily}</p>
                        <p className="text-sm leading-7 text-white/72">{SITE.hours.friday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[1.8rem] p-6 sm:p-7">
                <div className="overflow-hidden rounded-[1.5rem] border border-[#d5b667]/18 bg-[#0a1020]/80 p-2">
                  <MapView
                    className="h-[18rem] rounded-[1.15rem] sm:h-[21rem]"
                    initialCenter={SITE.mapCenter}
                    initialZoom={16}
                    onMapReady={(map) => {
                      const markerLibrary = window.google?.maps?.marker;
                      if (markerLibrary?.AdvancedMarkerElement) {
                        new markerLibrary.AdvancedMarkerElement({
                          map,
                          position: SITE.mapCenter,
                          title: SITE.arabicName,
                        });
                      }
                    }}
                  />
                </div>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  خريطة مباشرة للموقع داخل الفندق، مع إمكانية فتح المسار فورًا في Google Maps من الزر التالي.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleWhatsAppTrack("contact_whatsapp") }
                    className="rounded-[1.5rem] border border-[#27d466]/22 bg-[#25d366]/14 p-5 text-center transition hover:-translate-y-1"
                  >
                    <MessageCircle className="mx-auto h-7 w-7 text-[#25d366]" />
                    <h3 className="mt-3 text-lg font-bold text-white">واتساب</h3>
                    <p className="mt-2 text-sm leading-7 text-white/72">أسرع وسيلة للحجز والاستفسار عن العروض الحالية.</p>
                  </a>
                  <a
                    href={SITE.tel}
                    onClick={() => handleCallTrack("contact_call") }
                    className="rounded-[1.5rem] border border-[#d7b96b]/22 bg-[#d7b96b]/10 p-5 text-center transition hover:-translate-y-1"
                  >
                    <Phone className="mx-auto h-7 w-7 text-[#d8bb72]" />
                    <h3 className="mt-3 text-lg font-bold text-white">اتصال مباشر</h3>
                    <p className="mt-2 text-sm leading-7 text-white/72">{SITE.phone}</p>
                  </a>
                </div>
                <a
                  href={SITE.maps}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackSnapEvent(SNAP_EVENTS.SHARE_CLICK, { location: "contact_maps" })}
                  className="mt-4 flex items-center justify-center gap-2 rounded-[1.5rem] border border-[#d5b667]/30 bg-transparent px-5 py-4 text-base font-extrabold text-[#e1c57e] transition hover:bg-[#141b30]"
                >
                  <MapPinned className="h-5 w-5" />
                  افتح الموقع على الخرائط
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container pb-10 text-center text-sm text-white/48">
        <div className="rounded-[1.4rem] border border-white/6 bg-white/[0.03] px-4 py-5">
          <p>© {year} {SITE.name}. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      <div className="floating-stack">
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          onClick={() => handleWhatsAppTrack("floating_whatsapp") }
          className="floating-button bg-[#25d366] text-white"
          aria-label="واتساب"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={SITE.tel}
          onClick={() => handleCallTrack("floating_call") }
          className="floating-button bg-[linear-gradient(135deg,#d7b969,#9d7220)] text-[#0b0f19]"
          aria-label="اتصال"
        >
          <Phone className="h-5 w-5" />
        </a>
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="floating-button border border-[#d7b969]/30 bg-[#12182b]/88 text-[#dfc474]"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
