import { siteData } from "../data/siteData";

const fallbackRoute = "/";

const homePreviewServiceIds = ["cabg", "minimally-invasive", "aorta"];
const blogCardIcons = [
  "fas fa-heartbeat",
  "fas fa-project-diagram",
  "fas fa-exclamation-triangle",
  "fas fa-user-injured",
  "fas fa-percentage",
  "fas fa-baby"
];
const blogCardGradients = [
  "linear-gradient(135deg, #1565c0, #1a3a5c)",
  "linear-gradient(135deg, #00796b, #004d40)",
  "linear-gradient(135deg, #c62828, #b71c1c)",
  "linear-gradient(135deg, #ff6f00, #e65100)",
  "linear-gradient(135deg, #546e7a, #263238)",
  "linear-gradient(135deg, #00838f, #006064)"
];
const storyBadgeClasses = [
  "bg-primary",
  "bg-warning text-dark",
  "bg-info text-dark",
  "bg-danger",
  "bg-success",
  "bg-secondary"
];
const diseaseSymptoms = {
  "Ürəyin İşemik Xəstəliyi": ["Sinə ağrısı", "Nəfəs darlığı", "Halsızlıq"],
  "Aorta Anevrizması": ["Bel ağrısı", "Pulsasiya", "Şişkinlik"],
  "Qapaq Xəstəlikləri": ["Bayılma", "Sinə sıxılması", "Ayaqlarda şiş"],
  "Anadangəlmə Ürək Qüsurları": ["Mavi dodaqlar", "Təngnəfəslik", "Yorulma"],
  Hipertoniya: ["Baş ağrısı", "Başgicəllənmə", "Yorğunluq"],
  "Periferik Damar Xəstəlikləri": ["Ağrılı yeriş", "Soyuq ayaqlar", "Yara"],
  "Ürək Şişləri (Miksoma)": ["Təngnəfəslik", "Bayılma", "Emboliya riski"],
  "Damar Trombozu": ["Şişlik", "Ağrı", "Qan axını azalması"]
};

export const normalizeRoute = (hash = window.location.hash) => {
  if (!hash || hash === "#") {
    return fallbackRoute;
  }

  const route = hash.replace(/^#/, "") || fallbackRoute;
  return siteData.routes[route] ? route : fallbackRoute;
};

const isActiveRoute = (itemPath, currentRoute) => itemPath.replace(/^#/, "") === currentRoute;

const renderNav = (currentRoute) =>
  siteData.nav
    .map(
      (item) => `
        <li class="nav-item">
          <a class="nav-link ${isActiveRoute(item.path, currentRoute) ? "active" : ""}" href="${item.path}">
            ${item.label}
          </a>
        </li>
      `
    )
    .join("");

const renderStats = () =>
  siteData.stats
    .map((item, index) => {
      const visual =
        index === 2
          ? '<div class="stat-number stat-number--icon"><i class="fas fa-map-marker-alt"></i></div>'
          : `
            <div class="stat-number">
              <span class="odometer" data-count="${item.value}">0</span>${item.suffix || ""}
            </div>
          `;

      return `
        <div class="col-md-3 col-6 stat-item wow animate__animated animate__fadeInUp" data-wow-delay="${0.08 * index}s">
          ${visual}
          <div class="stat-label">${item.label}</div>
        </div>
      `;
    })
    .join("");

const renderServiceCards = (services, detailed = false) =>
  services
    .map(
      (service, index) => `
        <div class="col-lg-${detailed ? "6" : "4"} col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="${0.1 * index}s">
          <article class="service-card ${detailed ? "service-card--detailed" : ""}">
            <div class="service-icon">
              <i class="bi ${service.icon}"></i>
            </div>
            <h4>${service.title}</h4>
            <p>${service.summary}</p>
            ${
              detailed
                ? `
                  <p class="service-card__detail">${service.details}</p>
                  <ul class="service-list">
                    ${service.bullets.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                `
                : ""
            }
          </article>
        </div>
      `
    )
    .join("");

const renderTestimonialSlides = () =>
  siteData.testimonials
    .map((item) => {
      const initials = item.author
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

      return `
        <div>
          <article class="testimonial-card">
            <p class="testimonial-text">${item.quote}</p>
            <div class="testimonial-author">
              <div class="author-avatar">${initials}</div>
              <div class="author-info">
                <h5>${item.author}</h5>
                <span>Ürək-damar cərrahiyyəsi pasiyenti</span>
              </div>
            </div>
          </article>
        </div>
      `;
    })
    .join("");

const renderAboutPreviewList = () =>
  siteData.usp
    .slice(0, 5)
    .map((item) => `<li><i class="fas fa-check-circle"></i>${item.title} - ${item.text}</li>`)
    .join("");

const renderPageHero = (routeKey) => {
  if (routeKey === "/" || routeKey === "/elaqe") {
    return "";
  }

  const route = siteData.routes[routeKey];

  return `
    <section class="hero-section hero-section--inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center hero-content">
            <h1 class="wow animate__animated animate__fadeInDown">${route.title}</h1>
            <p class="subtitle wow animate__animated animate__fadeInUp">${route.description}</p>
          </div>
        </div>
      </div>
    </section>
  `;
};

const renderHomePage = () => {
  const previewServices = homePreviewServiceIds
    .map((id) => siteData.services.find((service) => service.id === id))
    .filter(Boolean);

  return `
    <section class="home-page">
      <div class="hero-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 hero-content wow animate__animated animate__fadeInLeft">
              <h1>${siteData.brand.tagline}</h1>
              <p class="subtitle">
                ${siteData.brand.name} - ${siteData.brand.role}<br />
                <strong>Açıq və Qapalı Ürək Əməliyyatları</strong>
              </p>
              <p class="hero-description">
                ${siteData.brand.subheading}
              </p>
              <div class="cta-buttons">
                <a class="btn btn-primary-custom" href="${siteData.brand.ctaPrimary.href}">
                  <i class="fas fa-calendar-check me-2"></i>${siteData.brand.ctaPrimary.label.toUpperCase()}
                </a>
                <a class="btn btn-secondary-custom" href="${siteData.brand.ctaSecondary.href}">
                  <i class="fas fa-stethoscope me-2"></i>${siteData.brand.ctaSecondary.label.toUpperCase()}
                </a>
                <a href="${siteData.brand.ctaCall.href}" class="btn btn-phone">
                  <i class="fas fa-phone-alt me-2"></i>${siteData.brand.ctaCall.label.toUpperCase()}
                </a>
              </div>
            </div>
            <div class="col-lg-5 wow animate__animated animate__fadeInRight">
              <div class="hero-artwork">
                <svg viewBox="0 0 400 400" aria-hidden="true">
                  <defs>
                    <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#C62828" />
                      <stop offset="100%" style="stop-color:#e57373" />
                    </linearGradient>
                  </defs>
                  <path d="M200 350 C200 350 50 230 50 140 C50 70 110 30 170 60 C190 70 200 95 200 120 C200 95 210 70 230 60 C290 30 350 70 350 140 C350 230 200 350 200 350 Z" fill="url(#heartGrad)" opacity="0.92"></path>
                  <path d="M150 180 Q175 160 200 180 Q225 160 250 180" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"></path>
                  <circle cx="165" cy="145" r="8" fill="white" opacity="0.85"></circle>
                  <circle cx="235" cy="145" r="8" fill="white" opacity="0.85"></circle>
                  <g transform="translate(280, 260)">
                    <circle cx="0" cy="0" r="35" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="2"></circle>
                    <path d="M-12 0 L12 0 M0 -12 L0 12" stroke="white" stroke-width="3" stroke-linecap="round"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="stats-section row">
          ${renderStats()}
        </div>
      </div>

      <section class="section-padding">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="section-title wow animate__animated animate__fadeInUp">Xidmətlərimiz</h2>
            <p class="section-subtitle mx-auto wow animate__animated animate__fadeInUp">
              Müasir texnologiya və beynəlxalq standartlarla ürək-damar cərrahiyyəsi xidmətləri
            </p>
          </div>
          <div class="row g-4">
            ${renderServiceCards(previewServices)}
          </div>
          <div class="text-center mt-5">
            <a class="btn btn-primary-custom" href="#/xidmetler">
              Bütün Xidmətləri Gör <i class="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-6 wow animate__animated animate__fadeInLeft">
              <div class="about-image-wrapper">
                <svg viewBox="0 0 500 600" aria-hidden="true">
                  <rect width="500" height="600" fill="url(#aboutPreviewGradient)"></rect>
                  <defs>
                    <linearGradient id="aboutPreviewGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#1A3A5C"></stop>
                      <stop offset="100%" stop-color="#1565C0"></stop>
                    </linearGradient>
                  </defs>
                  <rect x="50" y="100" width="400" height="450" rx="20" fill="rgba(255,255,255,0.1)"></rect>
                  <circle cx="250" cy="220" r="80" fill="rgba(255,255,255,0.2)" stroke="white" stroke-width="3"></circle>
                  <text x="250" y="240" text-anchor="middle" fill="white" font-size="48" font-weight="bold">BA</text>
                  <rect x="100" y="340" width="300" height="20" rx="10" fill="rgba(255,255,255,0.3)"></rect>
                  <rect x="130" y="380" width="240" height="15" rx="7" fill="rgba(255,255,255,0.2)"></rect>
                  <rect x="130" y="410" width="200" height="15" rx="7" fill="rgba(255,255,255,0.2)"></rect>
                  <rect x="130" y="440" width="220" height="15" rx="7" fill="rgba(255,255,255,0.2)"></rect>
                </svg>
                <div class="experience-badge">
                  <span class="number">15+</span>
                  <span class="text">İl Təcrübə</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow animate__animated animate__fadeInRight">
              <h2 class="section-title">Niyə Dr. Beyrək?</h2>
              <p class="content-muted">
                ${siteData.about.bio[0]}
              </p>
              <ul class="about-list list-unstyled">
                ${renderAboutPreviewList()}
              </ul>
              <a class="btn btn-primary-custom mt-4" href="#/haqqinda">
                Daha Çox Öyrən <i class="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="section-title wow animate__animated animate__fadeInUp">Pasiyent Rəyləri</h2>
            <p class="section-subtitle mx-auto wow animate__animated animate__fadeInUp">
              Real klinik nəticələr və güvən yaradan müsbət təcrübələr
            </p>
          </div>
          <div class="testimonial-slider wow animate__animated animate__fadeInUp">
            ${renderTestimonialSlides()}
          </div>
        </div>
      </section>
    </section>
  `;
};

const renderAboutPage = () => `
  <section class="section-padding bg-white">
    <div class="container">
      <div class="row align-items-center g-5 mb-5">
        <div class="col-lg-6 wow animate__animated animate__fadeInLeft">
          <h2 class="section-title">Profesional Bioqrafiya</h2>
          ${siteData.about.bio.map((item) => `<p class="content-muted">${item}</p>`).join("")}
          <h4 class="subsection-title">
            <i class="fas fa-star text-warning me-2"></i>İxtisas Sahələri
          </h4>
          <ul class="about-list list-unstyled">
            ${siteData.about.specializations
              .map((item) => `<li><i class="fas fa-chevron-right"></i>${item}</li>`)
              .join("")}
          </ul>
        </div>
        <div class="col-lg-6 wow animate__animated animate__fadeInRight">
          <div class="about-image-wrapper">
            <svg viewBox="0 0 500 600" aria-hidden="true">
              <defs>
                <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#1A3A5C"></stop>
                  <stop offset="100%" style="stop-color:#00796B"></stop>
                </linearGradient>
              </defs>
              <rect width="500" height="600" fill="url(#docGrad)"></rect>
              <circle cx="250" cy="180" r="90" fill="rgba(255,255,255,0.15)" stroke="white" stroke-width="4"></circle>
              <text x="250" y="200" text-anchor="middle" fill="white" font-size="56" font-weight="bold">Dr.B</text>
              <rect x="100" y="320" width="300" height="25" rx="12" fill="rgba(255,255,255,0.25)"></rect>
              <rect x="120" y="365" width="260" height="18" rx="9" fill="rgba(255,255,255,0.15)"></rect>
              <rect x="120" y="395" width="230" height="18" rx="9" fill="rgba(255,255,255,0.15)"></rect>
              <rect x="120" y="425" width="250" height="18" rx="9" fill="rgba(255,255,255,0.15)"></rect>
              <g transform="translate(370, 480)">
                <circle cx="0" cy="0" r="45" fill="rgba(198,40,40,0.9)"></circle>
                <text x="0" y="8" text-anchor="middle" fill="white" font-size="24" font-weight="bold">15+</text>
              </g>
              <text x="370" y="540" text-anchor="middle" fill="white" font-size="14">İl Təcrübə</text>
            </svg>
          </div>
        </div>
      </div>

      <div class="row g-4 mt-5">
        ${siteData.about.education
          .map(
            (item, index) => `
              <div class="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="${0.1 * (index + 1)}s">
                <article class="clinic-card clinic-card--about clinic-card--accent-${(index % 4) + 1}">
                  <h4><i class="fas fa-award"></i>${item.title}</h4>
                  <p>${item.text}</p>
                </article>
              </div>
            `
          )
          .join("")}
        <div class="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
          <article class="clinic-card clinic-card--about clinic-card--accent-4">
            <h4><i class="fas fa-trophy"></i>Nailiyyətlər</h4>
            <p>${siteData.about.achievements[0].text}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
`;

const renderServicesPage = () => `
  <section class="section-padding">
    <div class="container">
      <div class="row g-4">
        ${renderServiceCards(siteData.services, true)}
      </div>
    </div>
  </section>
`;

const renderConditionsPage = () => `
  <section class="section-padding">
    <div class="container">
      <div class="alert alert-danger alert-dismissible fade show rounded-4 mb-5 warning-banner" role="alert">
        <h4 class="alert-heading"><i class="fas fa-exclamation-triangle me-2"></i>Əsas Xəbərdarlıq Siqnalları</h4>
        <hr />
        <div class="row">
          ${siteData.warnings.slice(0, 4).map((item) => `
            <div class="col-md-6">
              <h6><i class="fas fa-heartbeat text-danger me-2"></i>${item.title}</h6>
              <p>${item.text}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <h3 class="section-title mb-4">Ürəyinizi Təhlükəyə Atan Risk Faktorları</h3>
      <div class="row g-4 mb-5">
        ${siteData.risks
          .map(
            (item, index) => `
              <div class="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="${0.05 * index}s">
                <div class="risk-factor">
                  <h6><i class="fas fa-circle me-2"></i>${item}</h6>
                  <p>${siteData.warnings[index % siteData.warnings.length].text}</p>
                </div>
              </div>
            `
          )
          .join("")}
      </div>

      <h3 class="section-title mb-4">Əsas Ürək-Damar Xəstəlikləri</h3>
      <div class="row g-4">
        ${siteData.diseases
          .map(
            (item, index) => `
              <div class="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="${0.05 * index}s">
                <article class="disease-card">
                  <h5><i class="fas fa-heart text-primary"></i>${item.title}</h5>
                  <p>${item.text}</p>
                  <div class="mt-3">
                    ${(diseaseSymptoms[item.title] || ["Erkən diaqnoz", "Müayinə", "Müalicə"])
                      .map((symptom) => `<span class="symptom-tag">${symptom}</span>`)
                      .join("")}
                  </div>
                </article>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderStoriesPage = () => `
  <section class="section-padding bg-white">
    <div class="container">
      <div class="row g-4">
        ${siteData.stories
          .map(
            (story, index) => `
              <div class="col-lg-6 wow animate__animated animate__fadeInUp" data-wow-delay="${0.06 * index}s">
                <article class="testimonial-card story-card h-100">
                  <div class="d-flex align-items-center mb-3">
                    <span class="badge fs-6 me-2 ${storyBadgeClasses[index % storyBadgeClasses.length]}">KLİNİK HAL ${index + 1}</span>
                    <span class="text-muted">${story.label}</span>
                  </div>
                  <h5 class="story-card__title">${story.title}</h5>
                  <p class="text-muted mb-3"><strong>Klinik mənzərə:</strong> ${story.snapshot}</p>
                  <div class="alert alert-success mb-0">
                    <strong><i class="fas fa-check-circle me-2"></i>Nəticə:</strong> ${story.outcome}
                  </div>
                </article>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderFaqPage = () => `
  <section class="section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="accordion" id="faqAccordion">
            ${siteData.faq
              .map(
                (item, index) => `
                  <div class="accordion-item wow animate__animated animate__fadeInUp">
                    <h2 class="accordion-header">
                      <button class="accordion-button ${index === 0 ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${index}">
                        <i class="fas fa-question-circle me-3 text-primary"></i>${item.question}
                      </button>
                    </h2>
                    <div id="faq${index}" class="accordion-collapse collapse ${index === 0 ? "show" : ""}" data-bs-parent="#faqAccordion">
                      <div class="accordion-body">${item.answer}</div>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderClinicsPage = () => `
  <section class="section-padding">
    <div class="container">
      <div class="row g-4">
        ${siteData.clinics
          .map(
            (clinic, index) => `
              <div class="col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="${0.1 * index}s">
                <article class="clinic-card clinic-card--accent-${(index % 3) + 1}">
                  <h4><i class="fas ${index === 0 ? "fa-hospital" : index === 1 ? "fa-clinic-medical" : "fa-stethoscope"}"></i>${clinic.name}</h4>
                  <address><i class="fas fa-map-marker-alt me-2"></i>${clinic.location}</address>
                  <div class="clinic-contact">
                    <p>${clinic.details}</p>
                    <p>${clinic.phone}</p>
                    ${clinic.email ? `<p><i class="fas fa-envelope me-2"></i><a href="mailto:${clinic.email}">${clinic.email}</a></p>` : ""}
                    ${clinic.link ? `<p><i class="fas fa-globe me-2"></i><a href="${clinic.link}" target="_blank" rel="noreferrer">${clinic.link.replace("https://", "")}</a></p>` : ""}
                  </div>
                </article>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="row mt-5 pt-5">
        <div class="col-lg-8 mx-auto">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden schedule-panel">
            <div class="card-body p-4">
              <h4 class="card-title text-primary mb-4">
                <i class="fas fa-clock me-2"></i>Randevu Saatları
              </h4>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="schedule-item">
                    <div class="schedule-icon bg-primary text-white">
                      <i class="fas fa-calendar-day fa-lg"></i>
                    </div>
                    <div>
                      <strong>Həftə içi:</strong><br />
                      <span class="text-muted">09:00 - 18:00</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="schedule-item">
                    <div class="schedule-icon bg-success text-white">
                      <i class="fas fa-sun fa-lg"></i>
                    </div>
                    <div>
                      <strong>Cümə axşamı:</strong><br />
                      <span class="text-muted">09:00 - 17:00</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="alert alert-info mb-0">
                <i class="fas fa-info-circle me-2"></i>
                <strong>Təcili müraciət üçün:</strong> ${siteData.contact.emergency}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderBlogPage = () => `
  <section class="section-padding bg-white">
    <div class="container">
      <div class="row g-4">
        ${siteData.blog.topics
          .slice(0, 6)
          .map(
            (topic, index) => `
              <div class="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="${0.1 * index}s">
                <article class="blog-card">
                  <div class="blog-image" style="background:${blogCardGradients[index % blogCardGradients.length]}">
                    <i class="${blogCardIcons[index % blogCardIcons.length]}"></i>
                  </div>
                  <div class="blog-content">
                    <div class="blog-meta">
                      <span><i class="fas fa-calendar"></i> ${index + 1}-ci Məqalə</span>
                      <span><i class="fas fa-clock"></i> ${[5, 7, 6, 8, 6, 7][index] || 6} dəq</span>
                    </div>
                    <h4>${topic.title}</h4>
                    <p>${topic.reason}</p>
                    <a href="#/elaqe" class="read-more">Daha çox oxu <i class="fas fa-arrow-right"></i></a>
                  </div>
                </article>
              </div>
            `
          )
          .join("")}
        <div class="col-12 text-center mt-5">
          <p class="text-muted mb-4">Və daha çox məqalə planı mövcuddur...</p>
          <a class="btn btn-primary-custom" href="#/elaqe">
            Kontent Planı Haqqında Soruş <i class="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>

      <div class="row g-4 mt-5 blog-planner">
        ${siteData.blog.calendar
          .map(
            (item, index) => `
              <div class="col-md-4 wow animate__animated animate__fadeInUp" data-wow-delay="${0.08 * index}s">
                <article class="planner-card">
                  <span class="planner-card__month">${item.month}</span>
                  <h5>${item.first}</h5>
                  <p>${item.second}</p>
                </article>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderContactPage = () => `
  <section class="contact-section section-padding">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title wow animate__animated animate__fadeInUp">Bizimlə Əlaqə</h2>
        <p class="contact-section__lead mx-auto">
          ${siteData.contact.lead}
        </p>
      </div>
      <div class="row g-5">
        <div class="col-lg-5 wow animate__animated animate__fadeInLeft">
          <div class="contact-info-item">
            <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
            <div class="contact-details">
              <h5>Ünvan</h5>
              <p>${siteData.contact.mainClinic.name}<br />${siteData.contact.mainClinic.address}</p>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
            <div class="contact-details">
              <h5>Qısa Nömrə</h5>
              <p><a href="tel:+994123060">${siteData.contact.mainClinic.shortPhone}</a></p>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon"><i class="fas fa-mobile-alt"></i></div>
            <div class="contact-details">
              <h5>Telefon</h5>
              <p><a href="tel:+994125993060">${siteData.contact.mainClinic.phone1}</a></p>
              <p><a href="tel:+994508003060">${siteData.contact.mainClinic.phone2}</a></p>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon"><i class="fas fa-envelope"></i></div>
            <div class="contact-details">
              <h5>E-poçt</h5>
              <p><a href="mailto:${siteData.contact.mainClinic.email}">${siteData.contact.mainClinic.email}</a></p>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-icon"><i class="fas fa-globe"></i></div>
            <div class="contact-details">
              <h5>Vebsayt</h5>
              <p><a href="${siteData.contact.mainClinic.website}" target="_blank" rel="noreferrer">${siteData.contact.mainClinic.website.replace("https://", "")}</a></p>
            </div>
          </div>
          <div class="mt-4">
            <h5 class="text-white mb-3">Sosial Media</h5>
            <div class="social-links">
              <a href="${siteData.contact.socials[0].href}" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
              <a href="${siteData.contact.socials[1].href}" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
              <a href="${siteData.contact.socials[2].href}" target="_blank" rel="noreferrer"><i class="fab fa-threads"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 wow animate__animated animate__fadeInRight">
          <div class="card border-0 shadow-lg rounded-4">
            <div class="card-body p-4 p-lg-5">
              <h4 class="card-title text-primary mb-4">
                <i class="fas fa-calendar-check me-2"></i>Randevu Formu
              </h4>
              <form id="appointmentForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label text-dark" for="fullName">Ad Soyad *</label>
                    <input id="fullName" name="fullName" type="text" class="form-control form-control-light" placeholder="Adınızı daxil edin" required />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-dark" for="phone">Telefon Nömrəsi *</label>
                    <input id="phone" name="phone" type="tel" class="form-control form-control-light" placeholder="+994 XX XXX XX XX" required />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-dark" for="email">E-poçt</label>
                    <input id="email" name="email" type="email" class="form-control form-control-light" placeholder="email@example.com" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-dark" for="birthDate">Doğum Tarixi</label>
                    <input id="birthDate" name="birthDate" type="date" class="form-control form-control-light" />
                  </div>
                  <div class="col-12">
                    <label class="form-label text-dark" for="complaint">Şikayət / Diaqnoz</label>
                    <textarea id="complaint" name="complaint" class="form-control form-control-light" rows="3" placeholder="Şikayətinizi qısa izah edin..."></textarea>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-dark" for="clinic">Hansı klinika?</label>
                    <select id="clinic" name="clinic" class="form-select form-control-light">
                      <option value="">Seçin...</option>
                      <option value="Bakı">Lux International Hospital (Bakı)</option>
                      <option value="Şirvan">Şirvan Diaqnostik Mərkəz</option>
                      <option value="Hər ikisi">Hər ikisi</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label text-dark" for="preferredDate">Uyğun Tarix</label>
                    <input id="preferredDate" name="preferredDate" type="date" class="form-control form-control-light" />
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="consentCheck" required />
                      <label class="form-check-label text-dark" for="consentCheck">
                        Məlumatlarımın işlənməsinə razıyam. 24 saat ərzində geri zəng tövsiyə olunur.
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary-custom w-100 py-3">
                      <i class="fas fa-paper-plane me-2"></i>RANDEVU AL
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const renderPage = (routeKey) => {
  switch (routeKey) {
    case "/haqqinda":
      return renderAboutPage();
    case "/xidmetler":
      return renderServicesPage();
    case "/xestelikler":
      return renderConditionsPage();
    case "/hekayeler":
      return renderStoriesPage();
    case "/faq":
      return renderFaqPage();
    case "/klinikalar":
      return renderClinicsPage();
    case "/bloq":
      return renderBlogPage();
    case "/elaqe":
      return renderContactPage();
    default:
      return renderHomePage();
  }
};

const renderFooter = () => `
  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <h5><i class="fas fa-heartbeat me-2"></i>${siteData.brand.name}</h5>
          <p class="mb-3">${siteData.about.bio[0]}</p>
          <div class="social-links">
            <a href="${siteData.contact.socials[0].href}" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
            <a href="${siteData.contact.socials[1].href}" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
            <a href="${siteData.contact.socials[2].href}" target="_blank" rel="noreferrer"><i class="fab fa-threads"></i></a>
          </div>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5>Səhifələr</h5>
          <ul class="footer-links">
            ${siteData.nav
              .slice(0, 5)
              .map((item) => `<li><a href="${item.path}"><i class="fas fa-chevron-right"></i>${item.label}</a></li>`)
              .join("")}
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5>Xidmətlər</h5>
          <ul class="footer-links">
            ${siteData.services
              .slice(0, 5)
              .map((service) => `<li><a href="#/xidmetler"><i class="fas fa-chevron-right"></i>${service.title}</a></li>`)
              .join("")}
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <h5>Əlaqə Məlumatları</h5>
          <ul class="footer-links footer-links--plain">
            <li><i class="fas fa-phone me-2"></i>${siteData.contact.mainClinic.phone1}</li>
            <li><i class="fas fa-phone me-2"></i>${siteData.contact.mainClinic.phone2}</li>
            <li><i class="fas fa-envelope me-2"></i>${siteData.contact.mainClinic.email}</li>
            <li><i class="fas fa-map-marker-alt me-2"></i>${siteData.contact.mainClinic.address}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="mb-0">&copy; 2025 ${siteData.brand.name} | ${siteData.brand.role} | Bütün hüquqlar qorunur.</p>
        <p class="mb-0 mt-2 small">Hazırlanma tarixi: 2025 | Dil: Azərbaycan</p>
      </div>
    </div>
  </footer>
`;

export const renderApp = (routeKey = fallbackRoute) => `
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#/">
        <i class="fas fa-heartbeat me-2"></i>Dr. Beyrək
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNav" aria-controls="primaryNav" aria-expanded="false" aria-label="Navigasiyanı aç">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="primaryNav">
        <ul class="navbar-nav ms-auto">
          ${renderNav(routeKey)}
        </ul>
      </div>
    </div>
  </nav>

  <main>
    ${renderPageHero(routeKey)}
    ${renderPage(routeKey)}
  </main>

  ${renderFooter()}

  <button class="back-to-top" id="backToTop" type="button" aria-label="Yuxarı qalx">
    <i class="fas fa-arrow-up"></i>
  </button>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="formToast" class="toast border-0" role="status" aria-live="polite" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Randevu Formu</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Bağla"></button>
      </div>
      <div class="toast-body">
        Sorğu hazırlandı. E-poçt proqramı açılmasa, məlumatları klinika ilə birbaşa paylaşa bilərsiniz.
      </div>
    </div>
  </div>
`;
