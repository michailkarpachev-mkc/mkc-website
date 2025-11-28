export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About us",
      references: "References",
      services: "Services",
      articles: "Articles",
      contact: "Contact"
    },
    hero: {
      title: "Plan. Price. Protect.",
      subtitle: "MKC delivers expert guidance to real estate developers for smooth, on-budget project execution.",
      cta: "Learn More"
    },
    services: {
      title: "Our Services",
      description: "Value engineering, budget optimisation, and delivery management to de‑risk development from day one.",
      valueEngineering: {
        title: "Value Engineering",
        description: "Improve design, reduce project costs and time lags, keep technical specification right and tidy."
      },
      preConstruction: {
        title: "Pre-Construction Management",
        description: "Plan, budget, design management, tender, procure – be securely prepared for construction."
      },
      projectManagement: {
        title: "Project Management",
        description: "Build, mitigate risk, manage teams and processes, have your project delivered as planned."
      },
      retrofitting: {
        title: "Retrofitting of buildings",
        description: "Upgrade old buildings for energy efficiency, meeting new standards and increase capital value."
      }
    },
    whyUs: {
      title: "Why us",
      paragraph1: "Our approach is built on 18+ years of experience in consulting, construction, and leadership across multiple industries. We cut through jargon and avoid unnecessary complexity.",
      paragraph2: "At mkc we stand for transparency and trust, earned through measurable results.",
      howWeWork: "How We Work",
      paragraph3: "Tell us more about your project and needs, and we will work on to outline a clear road  map with scope, timing and specifics.",
      ctaTitle: "Get a complimentary project assessment",
      ctaButton: "Send Request"
    },
    footer: {
      newsletterTitle: "Stay Updated",
      newsletterDescription: "Subscribe to our newsletter for the latest updates and insights.",
      emailPlaceholder: "Enter your email",
      subscribeButton: "Subscribe",
      aboutTitle: "About MKC",
      aboutDescription: "Expert construction consulting and project management services for real estate developers.",
      quickLinksTitle: "Quick Links",
      legalTitle: "Legal",
      contactTitle: "Contact",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      gdpr: "GDPR Compliance",
      allRightsReserved: "All rights reserved.",
      address: "Sofia, Bulgaria"
    }
  },
  bg: {
    nav: {
      home: "Начало",
      about: "За нас",
      references: "Референции",
      services: "Услуги",
      articles: "Статии",
      contact: "Контакти"
    },
    hero: {
      title: "Планирай. Оценявай. Защитавай.",
      subtitle: "MKC предоставя експертни консултации на инвеститори в недвижими имоти за гладко и бюджетно изпълнение на проекти.",
      cta: "Научете повече"
    },
    services: {
      title: "Нашите услуги",
      description: "Оптимизация на стойността, бюджета и управление на доставката за минимизиране на риска от първия ден.",
      valueEngineering: {
        title: "Оптимизация на стойността",
        description: "Подобряване на дизайна, намаляване на разходите и забавянията, поддържане на техническата спецификация правилна и подредена."
      },
      preConstruction: {
        title: "Управление преди строителство",
        description: "Планиране, бюджетиране, управление на проектирането, търг, снабдяване – бъдете сигурно подготвени за строителство."
      },
      projectManagement: {
        title: "Управление на проекти",
        description: "Изграждане, намаляване на риска, управление на екипи и процеси, доставяне на проекта според плана."
      },
      retrofitting: {
        title: "Реконструкция на сгради",
        description: "Модернизиране на стари сгради за енергийна ефективност, съответствие с нови стандарти и увеличаване на капиталовата стойност."
      }
    },
    whyUs: {
      title: "Защо ние",
      paragraph1: "Нашият подход е изграден върху 18+ години опит в консултирането, строителството и лидерството в множество индустрии. Избягваме жаргона и ненужната сложност.",
      paragraph2: "В mkc заставаме за прозрачност и доверие, спечелени чрез измерими резултати.",
      howWeWork: "Как работим",
      paragraph3: "Разкажете ни повече за вашия проект и нужди, и ние ще разработим ясна пътна карта с обхват, времева рамка и конкретни детайли.",
      ctaTitle: "Получете безплатна оценка на проекта",
      ctaButton: "Изпрати запитване"
    },
    footer: {
      newsletterTitle: "Бъдете информирани",
      newsletterDescription: "Абонирайте се за нашия бюлетин за последни новини и прозрения.",
      emailPlaceholder: "Въведете вашия имейл",
      subscribeButton: "Абонирай се",
      aboutTitle: "За MKC",
      aboutDescription: "Експертни консултантски услуги в строителството и управление на проекти за инвеститори в недвижими имоти.",
      quickLinksTitle: "Бързи връзки",
      legalTitle: "Правна информация",
      contactTitle: "Контакти",
      privacyPolicy: "Политика за поверителност",
      termsOfService: "Условия за ползване",
      cookiePolicy: "Политика за бисквитки",
      gdpr: "GDPR съответствие",
      allRightsReserved: "Всички права запазени.",
      address: "София, България"
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
