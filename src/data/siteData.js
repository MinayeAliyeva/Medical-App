export const siteData = {
  seo: {
    title: "Dr. Beyrək Abbaszadə | Ürək-Damar Cərrahı",
    description:
      "Dr. Beyrək Abbaszadə üçün hazırlanmış SPA vebsayt: koronar bypass, aorta cərrahiyyəsi, qapaq əməliyyatları, minimal invaziv yanaşmalar, pasiyent hekayələri və əlaqə.",
    keywords: [
      "ürək əməliyyatı Bakı",
      "koronar bypass Azərbaycan",
      "açıq ürək əməliyyatı",
      "ürək damar cərrahı Bakı",
      "minimal invaziv ürək cərrahiyyəsi",
      "Dr Beyrək Abbaszadə"
    ]
  },
  brand: {
    name: "Dr. Beyrək Abbaszadə",
    role: "Ürək-Damar Cərrahı",
    tagline: "Ürəyinizi Peşəkarlara Etibar Edin",
    subheading:
      "Açıq və qapalı ürək əməliyyatları, koronar bypass, aorta cərrahiyyəsi və anadangəlmə qüsurlar üçün beynəlxalq protokollara uyğun cərrahi yanaşma.",
    quickNote:
      "Lux International Hospital, Mərkəzi Klinika və Şirvan Diaqnostik Mərkəzdə aktiv klinik fəaliyyət.",
    ctaPrimary: {
      label: "Randevu Al",
      href: "#/elaqe"
    },
    ctaSecondary: {
      label: "Xidmətlərə Bax",
      href: "#/xidmetler"
    },
    ctaCall: {
      label: "3060 Zəng Et",
      href: "tel:+994123060"
    }
  },
  nav: [
    { id: "home", label: "Ana Səhifə", path: "#/" },
    { id: "about", label: "Haqqında", path: "#/haqqinda" },
    { id: "services", label: "Xidmətlər", path: "#/xidmetler" },
    { id: "conditions", label: "Xəstəliklər", path: "#/xestelikler" },
    { id: "stories", label: "Pasiyent Hekayələri", path: "#/hekayeler" },
    { id: "faq", label: "Tez-tez Suallar", path: "#/faq" },
    { id: "clinics", label: "Klinikalar", path: "#/klinikalar" },
    { id: "blog", label: "Bloq", path: "#/bloq" },
    { id: "contact", label: "Əlaqə", path: "#/elaqe" }
  ],
  routes: {
    "/": {
      navId: "home",
      title: "Ana Səhifə",
      seoTitle: "Dr. Beyrək Abbaszadə | Ana Səhifə",
      description:
        "Koronar bypass, aorta cərrahiyyəsi, qapaq əməliyyatları və minimal invaziv ürək cərrahiyyəsi üzrə əsas məlumatlar."
    },
    "/haqqinda": {
      navId: "about",
      title: "Haqqında",
      seoTitle: "Dr. Beyrək Abbaszadə | Haqqında",
      description:
        "Dr. Beyrək Abbaszadənin peşəkar bioqrafiyası, nailiyyətləri, mentorluğu və beynəlxalq fəaliyyəti."
    },
    "/xidmetler": {
      navId: "services",
      title: "Xidmətlər",
      seoTitle: "Dr. Beyrək Abbaszadə | Xidmətlər",
      description:
        "Açıq ürək əməliyyatları, koronar bypass, minimal invaziv cərrahiyyə, aorta və periferik damar xidmətləri."
    },
    "/xestelikler": {
      navId: "conditions",
      title: "Xəstəliklər və Əlamətlər",
      seoTitle: "Dr. Beyrək Abbaszadə | Xəstəliklər və Əlamətlər",
      description:
        "Ürək-damar xəstəliklərinin əsas əlamətləri, risk faktorları və klinik xəbərdarlıq siqnalları."
    },
    "/hekayeler": {
      navId: "stories",
      title: "Pasiyent Hekayələri",
      seoTitle: "Dr. Beyrək Abbaszadə | Pasiyent Hekayələri",
      description:
        "Real klinik hallar, mürəkkəb əməliyyat nümunələri və pasiyent nəticələri."
    },
    "/faq": {
      navId: "faq",
      title: "Tez-tez Sorulan Suallar",
      seoTitle: "Dr. Beyrək Abbaszadə | FAQ",
      description:
        "Ürək əməliyyatları, sağalma müddəti, hazırlıq və sığorta ilə bağlı ən çox sorulan suallar."
    },
    "/klinikalar": {
      navId: "clinics",
      title: "Klinikalar",
      seoTitle: "Dr. Beyrək Abbaszadə | Klinikalar",
      description:
        "Lux International Hospital, Mərkəzi Klinika və Şirvan Diaqnostik Mərkəz üzrə fəaliyyət və qəbul məlumatları."
    },
    "/bloq": {
      navId: "blog",
      title: "Bloq",
      seoTitle: "Dr. Beyrək Abbaszadə | Bloq",
      description:
        "Ürək-damar cərrahiyyəsi, pasiyent maarifləndirilməsi və lokal SEO üçün planlaşdırılmış bloq mövzuları."
    },
    "/elaqe": {
      navId: "contact",
      title: "Əlaqə və Randevu",
      seoTitle: "Dr. Beyrək Abbaszadə | Əlaqə",
      description:
        "Lux International Hospital üzrə əlaqə məlumatları, qəbul saatları və randevu formu."
    }
  },
  stats: [
    {
      label: "Uğurlu əməliyyat",
      value: 150,
      suffix: "+",
      detail: "Açıq və minimal invaziv ürək-damar müdaxilələri"
    },
    {
      label: "Tibb müəssisəsi",
      value: 3,
      suffix: "",
      detail: "Bakı və Şirvan üzrə aktiv klinik fəaliyyət"
    },
    {
      label: "Şirvanda ilk açıq ürək",
      value: 1,
      suffix: "",
      detail: "21 fevral 2024 tarixli tarixi klinik mərhələ"
    },
    {
      label: "Peşəkar komanda",
      value: 100,
      suffix: "%",
      detail: "Pasiyent yönümlü, multidissiplinar yanaşma"
    }
  ],
  intro: {
    eyebrow: "Qısa Tanıtım",
    title: "Şirvandan Bakıya qədər yüksək riskli ürək-damar halları üçün etibarlı cərrahi yanaşma",
    paragraphs: [
      "Dr. Beyrək Abbaszadə Azərbaycanda ürək-damar cərrahiyyəsi sahəsinin aparıcı mütəxəssislərindən biridir. Lux International Hospital, Mərkəzi Klinika və Şirvan Diaqnostik Mərkəzdə fəaliyyət göstərir.",
      "Şirvan bölgəsində ilk açıq ürək əməliyyatını icra etməsi, minimal invaziv yanaşmaları tətbiq etməsi və xaricdə imtina edilmiş pasiyentlərdə uğurlu nəticələr qazanması bu klinik təcrübənin əsas göstəriciləridir."
    ]
  },
  usp: [
    {
      icon: "bi-award",
      title: "Azərbaycanda İlk",
      text: "Şirvan bölgəsinin tibb tarixinə 21 fevral 2024-cü ildə ilk açıq ürək əməliyyatını yazan cərrah."
    },
    {
      icon: "bi-globe2",
      title: "Beynəlxalq Görünürlük",
      text: "AÜDCC üzvlüyü, Bakı Ürək Günləri konqresləri və Daşkənddə qonaq cərrah fəaliyyəti."
    },
    {
      icon: "bi-heart-pulse",
      title: "Mürəkkəb Hallar",
      text: "Yüksək riskli, çoxşaxəli və xaricdə imtina edilmiş klinik vəziyyətlərdə effektiv cərrahi müdaxilələr."
    },
    {
      icon: "bi-bezier2",
      title: "Minimal İnvaziv",
      text: "Endoskopik qapaq təmiri və kiçik kəsikli bypass yanaşmaları ilə daha sürətli sağalma."
    }
  ],
  clinics: [
    {
      icon: "bi-hospital",
      name: "Lux International Hospital",
      location: "146A Faiq Yusifov küç., Bakı, AZ1052",
      details: "Əsas klinika və randevu mərkəzi",
      phone: "3060 · 012 599 30 60 · 050 800 30 60",
      email: "info@luxhospital.az",
      link: "https://luxhospital.az/"
    },
    {
      icon: "bi-building",
      name: "Mərkəzi Klinika",
      location: "Bakı",
      details: "Ürək-damar cərrahiyyəsi şöbəsi",
      phone: "Qəbul üçün Lux International Hospital ilə əlaqə",
      email: "",
      link: ""
    },
    {
      icon: "bi-geo-alt",
      name: "Şirvan Diaqnostik Mərkəz",
      location: "Şirvan",
      details: "İcbari Tibbi Sığorta ilə regionlarda kardio-cərrahiyyə xidməti",
      phone: "Regionlardan qəbul mövcuddur",
      email: "",
      link: ""
    }
  ],
  testimonials: [
    {
      quote:
        "Xaricdə əməliyyatdan imtina etdilər. Dr. Beyrək bizi qurtardı. İki ay sonra həyatımıza qayıtdıq.",
      author: "Pasiyent ailəsi"
    },
    {
      quote: "82 yaşında bypass keçirdim. 6 gün sonra evə getdim. Çox sağ olun, həkimim.",
      author: "Hüseynqulu baba"
    },
    {
      quote: "4 damar bypass çox peşəkar aparıldı. Bütün göstəricilər normaldır.",
      author: "Biləsuvar pasiyenti"
    },
    {
      quote: "32 yaşında ASD ilə gəldim. 5 gün sonra evə yazıldım. Gözəl komanda.",
      author: "Gənc pasiyent"
    }
  ],
  about: {
    meta:
      "Bakıda ürək-damar cərrahı Dr. Beyrək Abbaszadənin təhsil, mentorluq, klinik fəaliyyət və beynəlxalq təcrübəsi haqqında məlumat.",
    bio: [
      "Dr. Beyrək Abbaszadə Azərbaycanın aparıcı ürək-damar cərrahlarından biridir. O, müasir cərrahi texnologiyaları tətbiq etməsi, mürəkkəb klinik halları həll etməsi və yüksək pasiyent məmnuniyyəti ilə seçilir.",
      "Lux International Hospital, Mərkəzi Klinika və Şirvan Diaqnostik Mərkəzdə aktiv fəaliyyət göstərən Dr. Abbaszadə Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyətinin tam üzvüdür."
    ],
    specializations: [
      "Açıq ürək əməliyyatları: koronar bypass, qapaq təmiri və dəyişdirilməsi",
      "Qapalı və minimal invaziv ürək əməliyyatları",
      "Anadangəlmə ürək qüsurlarının korreksiyası: uşaq və böyüklər",
      "Aorta cərrahiyyəsi: anevrizma, diseksiya və arkus replasmanı",
      "Periferik damar xəstəlikləri və varikoz vena müalicəsi"
    ],
    education: [
      {
        title: "Mentorluq",
        text: "Prof. Kamran Kazımoğlu Musayev, Azərbaycanda ürək-damar cərrahiyyəsinin əsas nüfuzlarından biri."
      },
      {
        title: "Elmi Cəmiyyət",
        text: "Azərbaycan Ürək-Damar Cərrahiyyəsi Cəmiyyəti (AÜDCC) – tam üzv."
      },
      {
        title: "Beynəlxalq Fəaliyyət",
        text: "Shox Med Hospital, Daşkənd çərçivəsində qonaq cərrah və konsultant fəaliyyəti."
      }
    ],
    achievements: [
      {
        year: "21.02.2024",
        title: "Şirvanda tarixi ilk açıq ürək əməliyyatı",
        text: "TƏBİB nəzarəti və icbari tibbi sığorta çərçivəsində 55 yaşlı pasiyentdə uğurlu müdaxilə."
      },
      {
        year: "2024",
        title: "AÜDCC 20 illik yubiley tədbiri",
        text: "Azərbaycan ürək-damar cərrahiyyəsinin peşəkar platformalarında aktiv iştirak."
      },
      {
        year: "2024",
        title: "Bakı Ürək Günləri VIII və IX",
        text: "Beynəlxalq kongreslərdə iştirak və peşəkar elmi təmsilçilik."
      },
      {
        year: "17.05.2024",
        title: "Aorta patologiyaları üzrə seminar",
        text: "Mürəkkəb aorta qövsünün əvəzlənməsi mövzusunda elmi-praktiki mühazirə."
      },
      {
        year: "09.2024",
        title: "Daşkənddə qonaq cərrah fəaliyyəti",
        text: "Shox Med Hospital klinikasında pasiyentlər üçün beynəlxalq konsultasiya proqramı."
      },
      {
        year: "Nadir hal",
        title: "CABG x4 + nefrektomiya + trombektomiya",
        text: "Eyni seansda üç müxtəlif cərrahi istiqaməti birləşdirən kompleks müdaxilə."
      }
    ],
    philosophy: [
      {
        quote: "Əsərinin üzərində imzası olmayan yeganə sənətkar müəllimdir.",
        author: "M.K. Atatürk"
      },
      {
        quote:
          "Hər bir həyat bizim üçün dəyərlidir. Pasiyentin üzündəki gülüş bizim ən böyük mükafatımızdır.",
        author: "Dr. Beyrək Abbaszadə"
      }
    ]
  },
  services: [
    {
      id: "open-heart",
      icon: "bi-heart-pulse-fill",
      title: "Açıq Ürək Əməliyyatı",
      slug: "/ureyin-qapaq-emeliyyati",
      summary:
        "Qapaq təmiri və dəyişdirilməsi, ASD/VSD korreksiyası və ciddi ürək qüsurlarının cərrahi həlli.",
      details:
        "Kardiopulmoner bypass aparatı altında icra olunan açıq əməliyyatlar üçün tam komanda və yüksək risk idarəetməsi.",
      bullets: [
        "Mitral və aorta qapaqlarının təmiri və ya əvəzlənməsi",
        "ASD/VSD və digər struktur defektlərin cərrahi korreksiyası",
        "Kompleks qüsurlar üçün multidissiplinar hazırlıq"
      ]
    },
    {
      id: "cabg",
      icon: "bi-activity",
      title: "Koronar Bypass (CABG)",
      slug: "/koronar-bypass-emeliyyati",
      summary:
        "2-dən 4-ə qədər damar şuntlaması və tam arterial revaskulyarizasiya yanaşması.",
      details:
        "LIMA, radial arteriya və safen vena istifadə olunaraq çoxdamarlı xəstəliklərdə cərrahi seçim tətbiq edilir.",
      bullets: [
        "EF 30% kimi ağır hallarda belə cərrahi strategiya",
        "LMCA 80-85% stenozunda bypass üstün seçənəkdir",
        "Uzunmüddətli nəticə üçün arterial greft prioriteti"
      ]
    },
    {
      id: "minimally-invasive",
      icon: "bi-bezier",
      title: "Minimal İnvaziv Cərrahiyyə",
      slug: "/minimal-invaziv-urek-cerrahiyyesi",
      summary:
        "Endoskopik qapaq təmiri, kiçik kəsiklərlə bypass və qapalı ürək yanaşmaları.",
      details:
        "Döş sümüyü tam kəsilmədən aparılan prosedurlar ilə daha az qan itkisi və daha sürətli reabilitasiya mümkün olur.",
      bullets: [
        "Estetik üstünlük və daha qısa stasionar qalma müddəti",
        "ASD qapama və seçilmiş qapaq halları üçün uyğun",
        "Daha az ağrı və daha tez gündəlik həyata dönüş"
      ]
    },
    {
      id: "congenital",
      icon: "bi-diagram-3-fill",
      title: "Anadangəlmə Ürək Qüsurları",
      slug: "/anadangelme-urek-qusurlari-asd-vsd",
      summary:
        "ASD, VSD, sinus venosus və parsial pulmonar venoz dönüş anomaliyalarının korreksiyası.",
      details:
        "Uşaq və böyüklərdə struktur qüsurların öz perikardı və ya uyğun cərrahi materiallarla təhlükəsiz bağlanması.",
      bullets: [
        "Low sinus venosus ASD üçün cərrahi yanaşma",
        "Pulmonar venaların doğru axına yönləndirilməsi",
        "Uzunmüddətli sağ ürək yüklənməsinin qarşısının alınması"
      ]
    },
    {
      id: "aorta",
      icon: "bi-diagram-2-fill",
      title: "Aorta Cərrahiyyəsi",
      slug: "/aorta-anevrizmasinin-cerrahi-mualicesi",
      summary:
        "Abdominal və torasik anevrizmalar, diseksiya, kompleks arkus replasmanı və endovaskulyar həllər.",
      details:
        "Aorta-bifemoral bypass, açıq rezeksiyalar və uyğun hallarda EVAR/TEVAR yanaşmaları ilə risklərin idarə olunması.",
      bullets: [
        "65 mm və daha böyük anevrizmalarda cərrahi müdaxilə",
        "Tromblu və simptomatik anevrizmalar üçün operativ həll",
        "Açıq və endovaskulyar variantların klinik seçimi"
      ]
    },
    {
      id: "peripheral",
      icon: "bi-person-walking",
      title: "Periferik Damar Cərrahiyyəsi",
      slug: "/periferik-damar-cerrahiyyesi",
      summary:
        "Karotid endarterektomiya, aorta-bifemoral bypass və periferik oklüziv xəstəliklərin müalicəsi.",
      details:
        "Alt ətrafların qan dövranını bərpa edən və insult riskini azaldan damar müdaxilələri.",
      bullets: [
        "Klodikasiya və iskemik ətraf ağrılarında qiymətləndirmə",
        "Karotid stenozunda insult profilaktikası",
        "Alt ətraf perfuziyasının cərrahi bərpası"
      ]
    },
    {
      id: "varicose",
      icon: "bi-droplet-half",
      title: "Varikoz Vena Müalicəsi",
      slug: "/varikoz-vena-mualicesi",
      summary:
        "EVLA lazer ablasiyası, skleroterapiya və fleboektomiya kimi seçilmiş yanaşmalar.",
      details:
        "Ultrasəs müayinəsinə əsasən damar anatomiyasına uyğun individual müalicə planı hazırlanır.",
      bullets: [
        "Ambulator və minimal invaziv müalicə variantları",
        "Ağrı, şişlik və estetik narahatlığın azaldılması",
        "Təkrarlanma riskinə qarşı düzgün protokol seçimi"
      ]
    },
    {
      id: "combined",
      icon: "bi-link-45deg",
      title: "Birləşdirilmiş Əməliyyatlar",
      slug: "/birlesdirilmis-emeliyyatlar",
      summary:
        "Eyni seansda bir neçə orqan sistemini əhatə edən nadir və yüksək riskli kompleks müdaxilələr.",
      details:
        "CABG x4 + nefrektomiya + trombektomiya kimi multi-specialty əməliyyatlar üçün güclü planlama və intensiv nəzarət tələb olunur.",
      bullets: [
        "Kardioloq, urolog və damar komandası ilə ortaq planlama",
        "Bir mərhələdə riskin və vaxtın optimallaşdırılması",
        "Çoxsaylı yanaşı diaqnozlarda fərdiləşdirilmiş qərarvermə"
      ]
    }
  ],
  warnings: [
    {
      icon: "bi-heartbreak",
      title: "Sinə ağrısı və sıxılma",
      text: "Yanma, ağırlıq və təzyiq hissi sol qol, boyun, çənə və kürəyə yayıla bilər."
    },
    {
      icon: "bi-lungs",
      title: "Nəfəs darlığı",
      text: "Gündəlik fəaliyyətdə belə nəfəs çatmaması ürəyin nasos gücündə zəifləməni göstərə bilər."
    },
    {
      icon: "bi-battery-half",
      title: "Tez yorulma",
      text: "Səbəbsiz halsızlıq və enerji azalması erkən ürək çatışmazlığının siqnalı ola bilər."
    },
    {
      icon: "bi-activity",
      title: "Ürəkdöyünmə və ritm pozğunluğu",
      text: "Sürətli və nizamsız döyünmə aritmiya üçün təcili kardioloji qiymətləndirmə tələb edir."
    },
    {
      icon: "bi-water",
      title: "Ayaqlarda şişkinlik",
      text: "Topuq və baldır nahiyəsində şişkinlik venoz çatışmazlıq və ya ürək yüklənməsini göstərə bilər."
    },
    {
      icon: "bi-exclamation-triangle",
      title: "Başgicəllənmə və huş itməsi",
      text: "Beyinə gedən qanın azalması ciddi ritm pozğunluğu və ya karotid stenozla əlaqəli ola bilər."
    }
  ],
  risks: [
    "Siqaret",
    "Yüksək xolesterin",
    "Hipertoniya",
    "Şəkərli diabet",
    "Piylənmə",
    "Fiziki hərəkətsizlik",
    "Stress",
    "İrsi meyillilik"
  ],
  diseases: [
    {
      title: "Ürəyin İşemik Xəstəliyi",
      text: "Koronar arteriyaların daralması nəticəsində ürək əzələsinin qan təchizatı azalır. KAQ diaqnostik qızıl standart sayılır."
    },
    {
      title: "Aorta Anevrizması",
      text: "Aortanın diametri 55 mm-i keçdikdə risk kəskin artır, 65 mm səviyyəsində cərrahiyyə zəruri sayılır."
    },
    {
      title: "Qapaq Xəstəlikləri",
      text: "Aorta, mitral və trikuspid qapaqların stenozu və çatışmazlığı sinə ağrısı və nəfəs darlığı ilə özünü göstərə bilər."
    },
    {
      title: "Anadangəlmə Ürək Qüsurları",
      text: "ASD, VSD və pulmonar venoz anomaliyalar hər yaşda aşkar oluna və cərrahi korreksiya oluna bilər."
    },
    {
      title: "Hipertoniya",
      text: "Uzunmüddətli yüksək təzyiq ürək, beyin və böyrəklərə zərər verir. Hədəf səviyyə 120/80 mmHg ətrafıdır."
    },
    {
      title: "Periferik Damar Xəstəlikləri",
      text: "Ayaqlarda ağrı, soyuqluq və rəng dəyişiklikləri damar tıxanıqlığına işarə edə bilər."
    },
    {
      title: "Ürək Şişləri (Miksoma)",
      text: "Nadir, lakin ciddi ağırlaşmalara səbəb ola bilən ürək şişləri erkən mərhələdə cərrahi müalicə tələb edir."
    },
    {
      title: "Damar Trombozu",
      text: "Renal vena və ya aşağı boş vena trombozu kimi hallar xüsusi trombektomiya planlaması tələb edə bilər."
    }
  ],
  stories: [
    {
      title: "38 yaşlı bypass pasiyenti",
      label: "Çoxlu risk faktoru",
      snapshot:
        "Qeyri-stabil stenokardiya, EF 30%, əvvəlki infarkt, diabet və piylənmə fonunda 4 damar xəstəliyi.",
      outcome:
        "Tam arterial CABG 4 uğurla icra edildi, pasiyent stabil şəkildə evə yazıldı."
    },
    {
      title: "67 yaşlı abdominal aorta anevrizması",
      label: "65 mm anevrizma",
      snapshot:
        "İnfrarenal seqmentdə 65 mm fuziform anevrizma və tromb ilə müşayiət olunan kəskin qarın ağrısı.",
      outcome:
        "Aorta-bifemoral bypass sonrası iki həftəlik nəzarətdə bütün göstəricilər normal oldu."
    },
    {
      title: "32 yaşlı ASD və pulmonar venoz anomaliya",
      label: "Anadangəlmə qüsur",
      snapshot:
        "Tənginəfəslik, sağ boşluqların genişlənməsi və low sinus venosus tipli ASD ilə müraciət.",
      outcome:
        "Perikard yamağı ilə defekt bağlandı, 5 gün sonra stabil vəziyyətdə evə yazıldı."
    },
    {
      title: "63 yaşlı üçlü diaqnoz",
      label: "CABG + Nefrektomiya + Trombektomiya",
      snapshot:
        "LMCA stenozu, böyrək karsinoması və aşağı boş vena trombozu eyni pasiyentdə aşkarlandı.",
      outcome:
        "Eyni seansda üç mərhələli kompleks əməliyyat icra olunaraq 6 gün sonra evə buraxıldı."
    },
    {
      title: "Şirvanda icbari sığorta ilə ilk bypass",
      label: "21 fevral 2024",
      snapshot:
        "55 yaşlı pasiyentdə Şirvan Diaqnostik Mərkəzdə 3 saatlıq ilk açıq ürək əməliyyatı icra olundu.",
      outcome:
        "TƏBİB nəzarəti və multidissiplinar dəstək ilə pasiyent göstəriciləri stabilləşdi."
    },
    {
      title: "Xaricdə imtina edilmiş pasiyent",
      label: "Yüksək riskli hal",
      snapshot:
        "Böyük xarici mərkəzlər tərəfindən əməliyyatdan imtina edilən ağır klinik vəziyyət.",
      outcome:
        "Kompleks cərrahi müdaxilədən sonra tam sağlamlaşma və uğurlu reabilitasiya."
    }
  ],
  faq: [
    {
      question: "Açıq ürək əməliyyatı nədir və nə vaxt lazımdır?",
      answer:
        "Açıq ürək əməliyyatı döş sümüyü açılaraq və kardiopulmoner bypass dəstəyi ilə aparılan cərrahiyyədir. Çoxdamarlı koronar xəstəlik, qapaq xəstəlikləri, aorta anevrizması və anadangəlmə qüsurlarda tətbiq olunur."
    },
    {
      question: "Açıq və minimal invaziv əməliyyat arasındakı fərq nədir?",
      answer:
        "Açıq əməliyyatda döş sümüyü tam ayrılır və cərraha geniş sahə açılır. Minimal invaziv yanaşmada isə kiçik kəsiklər və endoskopik kamera ilə daha az ağrı, qısa hospital qalma müddəti və daha sürətli sağalma əldə edilir."
    },
    {
      question: "Koronar bypass əməliyyatında damar haradan alınır?",
      answer:
        "Ən çox daxili döş arteriyası, radial arteriya və ya safena vena istifadə edilir. Gənc və uyğun xəstələrdə tam arterial revaskulyarizasiya uzunmüddətli nəticə baxımından üstün ola bilər."
    },
    {
      question: "Bypass əməliyyatı nə vaxt tələb olunur?",
      answer:
        "Çoxdamarlı tıxanıqlıq, LMCA 80-85% stenozu və dərman və ya stentlə kifayət etməyən hallarda bypass cərrahiyyəsi tövsiyə edilir."
    },
    {
      question: "Aorta anevrizması nə vaxt təhlükəlidir?",
      answer:
        "Abdominal aortanın diametri 55 mm-i keçdikdə risk artır. 65 mm və daha böyük anevrizmalarda yırtılma riski kritikdir və cərrahiyyə üstünlük qazanır."
    },
    {
      question: "Anadangəlmə ürək qüsurları hansı yaşda müalicə edilə bilər?",
      answer:
        "Həm uşaqlarda, həm də böyüklərdə cərrahi müalicə mümkündür. ASD kimi bəzi qüsurlar 30-40 yaşlarında aşkar edilə bilər."
    },
    {
      question: "EF 30% olduqda əməliyyat mümkündürmü?",
      answer:
        "Bəli, mümkündür. Bu yüksək risk qrupu hesab olunur, lakin uyğun planlama ilə cərrahi müdaxilə uzunmüddətli proqnozu yaxşılaşdıra bilər."
    },
    {
      question: "Varikoz venalar üçün hansı müalicə üsulları var?",
      answer:
        "EVLA lazer ablasiyası, skleroterapiya və fleboektomiya əsas yanaşmalardır. Ən uyğun seçim damar ultrasəsinə əsasən müəyyən edilir."
    },
    {
      question: "Karotid endarterektomiya nədir?",
      answer:
        "Karotid arteriyada yağ plakının əməliyyatla çıxarılmasıdır. İnsult riskini azaltmaq üçün adətən 70%-dən artıq daralmada tövsiyə olunur."
    },
    {
      question: "Ürək əməliyyatından sonra sağalma müddəti nə qədərdir?",
      answer:
        "Standart bypass əməliyyatından sonra xəstəxanada qalma 5-10 gün, tam reabilitasiya isə təxminən 6-12 həftə çəkə bilər. Minimal invaziv hallarda bu müddət daha qısa olur."
    },
    {
      question: "Əməliyyatı icbari tibbi sığorta ilə etdirmək olurmu?",
      answer:
        "Bəli. Şirvan Diaqnostik Mərkəzdə icbari tibbi sığorta çərçivəsində açıq ürək əməliyyatları artıq icra olunur."
    },
    {
      question: "Ürək əməliyyatına hazırlaşarkən nə etməliyəm?",
      answer:
        "Qan analizi, EKQ, ExoKQ, KAQ və KT nəticələri hazırlanmalıdır. Daimi istifadə olunan dərmanların siyahısı, xüsusilə qan durulaşdırıcılar, həkimlə bölüşülməlidir."
    }
  ],
  contact: {
    lead:
      "Sağlamlığınız üçün addımı sabaha saxlamayın. Randevu və ilkin dəyərləndirmə üçün aşağıdakı kanallardan istifadə edin.",
    mainClinic: {
      name: "Lux International Hospital",
      address: "146A Faiq Yusifov küç., Bakı, Azərbaycan, AZ1052",
      shortPhone: "*3060 (daxili)",
      phone1: "012 599 30 60",
      phone2: "050 800 30 60",
      email: "info@luxhospital.az",
      website: "https://luxhospital.az/"
    },
    secondaryClinics: [
      "Mərkəzi Klinika, Bakı: ürək-damar cərrahiyyəsi şöbəsi",
      "Şirvan Diaqnostik Mərkəz: regionlardan qəbul və İcbari Tibbi Sığorta xidməti",
      "Shox Med Hospital, Daşkənd: beynəlxalq konsultasiya və qonaq cərrah fəaliyyəti"
    ],
    socials: [
      { label: "Instagram", value: "@dr.beyrek", href: "https://www.instagram.com/dr.beyrek/" },
      {
        label: "Facebook",
        value: "Dr. Beyrək Abbaszadə",
        href: "https://www.facebook.com/61550082035111"
      },
      { label: "Threads", value: "@dr.beyrek", href: "https://www.threads.com/@dr.beyrek" }
    ],
    schedule: "Həftə içi 09:00 - 18:00 | Cümə axşamı 09:00 - 17:00",
    emergency: "*3060 - 24/7 Lux International Hospital növbətçi xidməti"
  },
  appointmentFields: [
    "Ad Soyad",
    "Telefon nömrəsi",
    "E-poçt",
    "Doğum tarixi",
    "Şikayət / Diaqnoz",
    "Hansı klinika?",
    "Üstünlük verilən tarix"
  ],
  appointmentDocs: [
    "Şəxsiyyət vəsiqəsi",
    "DOST kartı və ya icbari tibbi sığorta kartı",
    "Əvvəlki EKQ, ExoKQ və Holter monitorinq nəticələri",
    "KAQ nəticəsi (varsa)",
    "Kompüter tomoqrafiyası nəticəsi (varsa)",
    "Daimi istifadə olunan dərmanların siyahısı",
    "Qan analizi: tam qan sayı, biokimya, koaquloqramma",
    "Əvvəlki əməliyyat epikrizləri"
  ],
  blog: {
    intro:
      "Mütəmadi bloq məzmunu həm Google axtarış nəticələrində görünürlüğü artırır, həm də pasiyentdə etibarı gücləndirir. Tövsiyə olunan intensivlik ayda 2-4 məqalədir.",
    topics: [
      {
        title: "Açıq Ürək Əməliyyatı Necə İcra Edilir?",
        keywords: "açıq ürək əməliyyatı, bypass necə edilir",
        reason: "Ən çox axtarılan sual və featured snippet potensialı."
      },
      {
        title: "Koronar Bypass: Damarlar Haradan Alınır?",
        keywords: "koronar bypass damar, LIMA bypass, safen vena",
        reason: "Pasiyent marağı yüksək olan konkret sual."
      },
      {
        title: "Aorta Anevrizması – Səssiz Saatlı Bomba",
        keywords: "aorta anevrizması, anevrizma simptomları, 5.5 sm",
        reason: "Maarifləndirici və geniş auditoriyaya açıq mövzu."
      },
      {
        title: "38 Yaşında İnfarkt: Ürək Xəstəliyi Cavanlaşır",
        keywords: "gənc yaşda infarkt, ürək xəstəliyi yaş, risk faktorları",
        reason: "Sosial mediada viral potensialı olan xəbərdarlıq məzmunu."
      },
      {
        title: "EF 30% – Əməliyyat Mümkündürmü?",
        keywords: "EF 30% bypass, ürək çatışmazlığı əməliyyatı",
        reason: "Nadir, yüksək dəyərli və rəqabəti aşağı sorğu."
      },
      {
        title: "ASD Əməliyyatı: Anadangəlmə Qüsurun Cərrahi Müalicəsi",
        keywords: "ASD əməliyyatı, qulaqcıqlar arası çəpər, sinus venosus",
        reason: "Valideynlər və gənc pasiyentlər üçün hədəf məzmun."
      },
      {
        title: "Varikoz Venaların Lazer Müalicəsi vs Cərrahiyyə",
        keywords: "varikoz lazer, skleroterapiya, EVLA, fleboektomiya",
        reason: "Yüksək axtarış həcmi və praktik qərar mərhələsi."
      },
      {
        title: "Karotid Endarterektomiya – İnsultu Necə Önləyər?",
        keywords: "karotid endarterektomiya, insult, karotid stenozu",
        reason: "Yaşlı auditoriya üçün güclü maarifləndirmə mövzusu."
      },
      {
        title: "Ürək Qapağı Əməliyyatı: Təmir mi, Əvəzetmə mi?",
        keywords: "qapaq əməliyyatı, mitral qapaq, aorta qapaq",
        reason: "Qapaq xəstələri üçün qərarverici kontent."
      },
      {
        title: "Hipertoniya: Səssiz Qatil",
        keywords: "hipertoniya, yüksək qan təzyiqi simptomları, 120/80",
        reason: "Ən geniş auditoriyaya toxunan yüksək trafikli mövzu."
      },
      {
        title: "Açıq Ürək Əməliyyatından Sonra Həyat",
        keywords: "bypass sonrası həyat, sağalma müddəti, reabilitasiya",
        reason: "Qərar ərəfəsində olan pasiyent üçün güvən yaradan məqalə."
      },
      {
        title: "LMCA Stenozu: Ana Koronar Arteriya Daralması",
        keywords: "LMCA stenozu, ana koronar bypass, sol ana koronar",
        reason: "Niş və rəqabəti aşağı, tibbi dəyəri yüksək mövzu."
      },
      {
        title: "Şirvanda Açıq Ürək Cərrahiyyəsi – Tarixi Hadisə",
        keywords: "Şirvan ürək əməliyyatı, region kardio cərrahiyyə, TƏBİB",
        reason: "PR və lokal SEO baxımından güclü mövzu."
      },
      {
        title: "Eyni Seansda 3 Əməliyyat: Mümkündürmü?",
        keywords: "birləşdirilmiş əməliyyat, CABG nefrektomiya, kombinə",
        reason: "Nadir klinik hal əsasında yüksək diqqət cəlb edən kontent."
      },
      {
        title: "Qan Dövranı Pozğunluğu: Alt Ətrafların Damarlarını Necə Qoruyaq?",
        keywords: "periferik damar xəstəliyi, alt ətraflar, klodikasiya",
        reason: "Yaşlı auditoriya üçün praktik maarifləndirmə məqaləsi."
      },
      {
        title: "Xaricdə Rədd Edilmişdim – Azərbaycanda Xilas Oldum",
        keywords: "xaricdə imtina, bypass Azərbaycan, ikinci rəy",
        reason: "Emosional gücü yüksək və paylaşım potensialı olan hekayə."
      }
    ],
    calendar: [
      {
        month: "1-ci Ay",
        first: "Açıq Ürək Əməliyyatı Necə İcra Edilir?",
        second: "38 Yaşında İnfarkt: Cavanlaşma Problemi"
      },
      {
        month: "2-ci Ay",
        first: "Aorta Anevrizması – Səssiz Saatlı Bomba",
        second: "ASD Əməliyyatı: Anadangəlmə Qüsurun Müalicəsi"
      },
      {
        month: "3-cü Ay",
        first: "Hipertoniya: Səssiz Qatil",
        second: "Varikoz Venaların Lazer vs Cərrahiyyə"
      }
    ]
  },
  social: {
    intro:
      "Instagram hesabı artıq aktivdir. Strategiya klinik hekayələr, maarifləndirmə və peşəkar nüfuzun paralel idarə olunmasına fokuslanır.",
    platforms: [
      {
        platform: "Instagram @dr.beyrek",
        type: "Klinik hekayələr, reels, infoqrafika, pasiyent rəyləri, konqres materialları",
        cadence: "Həftədə 3-5 post"
      },
      {
        platform: "Facebook",
        type: "Bloq paylaşımları, məlumat videoları, uzun formatlı uğur hekayələri",
        cadence: "Həftədə 2-3 post"
      },
      {
        platform: "Threads @dr.beyrek",
        type: "Qısa tibbi faktlar, sual-cavab və gündəlik müşahidələr",
        cadence: "Gündə 1-2 post"
      },
      {
        platform: "YouTube",
        type: "Behind-the-scenes, maarifləndirici videolar, seminar çıxışları",
        cadence: "Ayda 2-4 video"
      },
      {
        platform: "LinkedIn",
        type: "Elmi nailiyyətlər, AÜDCC fəaliyyəti və beynəlxalq əməkdaşlıq",
        cadence: "Həftədə 1-2 post"
      }
    ],
    hashtags: {
      main: ["#drbeyrək", "#ürəkdamarcərrahı", "#bakıürəkdamar", "#luxhospital", "#aüdcc"],
      operations: [
        "#koronarbypass",
        "#açıqürəkəməliyyatı",
        "#aortaanevrizması",
        "#ASDəməliyyatı",
        "#qapaqəməliyyatı",
        "#varikozmüalicəsi"
      ],
      education: [
        "#ürəksağlamlığı",
        "#cardiovascularsurgery",
        "#heartsurgery",
        "#kardiocərrahiyyə"
      ],
      trending: ["#sağlamlıq", "#tibb", "#cərrah", "#bakı", "#azərbaycan", "#təbib"],
      global: ["#cardiacsurgeon", "#cardiosurgery", "#openheartsurgery", "#bypasssurgery", "#aorticsurgery"]
    },
    posts: [
      "82 yaşlı Hüseynqulu babamıza aorta-koronar şuntlama x3 əməliyyatı icra etdik. Yaş yalnız rəqəmdir, ürəyinizi peşəkarlara etibar edin.",
      "Sinə ağrısı, nəfəs darlığı, tez yorulma kimi əlamətlər koronar arter xəstəliyinin xəbərdarlıq siqnalları ola bilər. Erkən diaqnoz həyat qurtarır.",
      "Daşkənddə Şox Med Hospital çərçivəsində beynəlxalq konsultasiyalar təşkil etdik. Azərbaycan təbabəti regional səviyyədə görünürlük qazanır.",
      "38 yaşında ağır bypass keçirmiş pasiyentimizin kontrol müayinəsində göstəricilər tam normaldır. Pasiyent məmnuniyyəti ən güclü nəticədir."
    ],
    localSeo: [
      "Google Business Profile profilini tam doldurun",
      "NAP məlumatını bütün platformalarda eyni formatda saxlayın",
      "Google Maps xəritə və yol tarifi linki əlavə edin",
      "AÜDCC və Lux International Hospital saytlarında profil linkləri qurun",
      "Instagram bio hissəsinə sayt linkini əlavə edin",
      "TƏBİB və yerli tibbi direktoriyalarda görünürlüğü yoxlayın"
    ]
  },
  keywords: {
    primary: [
      { term: "ürək əməliyyatı Bakı", volume: "Yüksək", competition: "Orta", priority: "5/5" },
      { term: "koronar bypass Azərbaycan", volume: "Orta-Yüksək", competition: "Aşağı", priority: "5/5" },
      { term: "açıq ürək əməliyyatı", volume: "Yüksək", competition: "Orta", priority: "5/5" },
      { term: "aorta anevrizması cərrahiyyəsi", volume: "Orta", competition: "Aşağı", priority: "4/5" },
      { term: "ürək damar cərrahı Bakı", volume: "Orta-Yüksək", competition: "Orta", priority: "5/5" },
      { term: "varikoz venaların müalicəsi", volume: "Yüksək", competition: "Yüksək", priority: "4/5" },
      { term: "ASD əməliyyatı Azərbaycan", volume: "Orta", competition: "Aşağı", priority: "4/5" },
      { term: "minimal invaziv ürək cərrahiyyəsi", volume: "Orta", competition: "Aşağı", priority: "4/5" }
    ],
    longTail: [
      "dr beyrək abbaszadə",
      "dr beyrek bakı ürək cərrahı",
      "Lux International Hospital bypass əməliyyatı",
      "Şirvanda ürək əməliyyatı",
      "anadangəlmə ürək qüsuru müalicəsi Bakı",
      "koronar angioqrafiya qızıl standart",
      "ürək çatışmazlığı cərrahi müalicə",
      "xaricdə imtina edilmiş pasiyent Azərbaycan",
      "LMCA stenozu bypass",
      "karotid endarterektomiya Bakı",
      "EF 30% bypass əməliyyatı",
      "sinus venosus ASD korreksiyası"
    ]
  },
  mediaSpecs: [
    {
      asset: "Hero portret foto",
      size: "1600x2000 px",
      ratio: "4:5",
      format: "AVIF və WEBP",
      note: "Təmiz fonlu, yuxarı bədən portreti, sağ tərəfdə boşluq saxlanılsın."
    },
    {
      asset: "Klinika və əməliyyat mühiti foto",
      size: "1920x1080 px",
      ratio: "16:9",
      format: "AVIF və WEBP",
      note: "Veb üçün optimallaşdırılmış, 300 KB-dan aşağı variant hazırlanmalıdır."
    },
    {
      asset: "Pasiyent hekayəsi cover şəkli",
      size: "1400x900 px",
      ratio: "14:9",
      format: "WEBP",
      note: "Pasiyent məxfiliyinə uyğun anonim və ya razılıq əsasında material."
    },
    {
      asset: "Qısa reel və ya klinik video",
      size: "1080x1920 px",
      ratio: "9:16",
      format: "MP4 H.264",
      note: "Sosial media və sayt üçün ayrıca poster görüntüsü hazırlanmalıdır."
    }
  ],
  sources: [
    {
      label: "Instagram profili",
      href: "https://www.instagram.com/dr.beyrek/"
    },
    {
      label: "Facebook səhifəsi",
      href: "https://www.facebook.com/61550082035111"
    },
    {
      label: "Threads hesabı",
      href: "https://www.threads.com/@dr.beyrek"
    },
    {
      label: "AÜDCC: Şirvanda ilk açıq ürək əməliyyatı",
      href: "https://audcc.org.az/new/sirvan-ur%C9%99k-m%C9%99rk%C9%99zind%C9%99-ilk-d%C9%99f%C9%99-aciq-ur%C9%99k-%C9%99m%C9%99liyyati-icra-olunub"
    },
    {
      label: "AÜDCC: Aorta seminari",
      href: "https://audcc.org.az/new/aorta-patologiyalarinin-mualic%C9%99sind%C9%99-multidissiplinar-muasir-yanasma-movzusunda-elmi-praktiki-seminar-kecirilib"
    },
    {
      label: "Lux International Hospital",
      href: "https://luxhospital.az/"
    },
    {
      label: "Modern.az xəbəri",
      href: "https://modern.az/az/aktual/457054/shirvanda-ilk-defe-achiq-urek-emelivyati-edilib/"
    },
    {
      label: "Bayraqdar.info xəbəri",
      href: "https://www.bayraqdar.info/2024/02/21/sirvan-ur%C9%99k-m%C9%99rk%C9%99zind%C9%99-bir-ilk/"
    },
    {
      label: "Qafqazinfo.az xəbəri",
      href: "https://qafqazinfo.az/news/detail/sirvan-urek-merkezinde-ilk-defe-aciq-urek-emelivyati-edildi-fotolar-427834"
    }
  ]
};
