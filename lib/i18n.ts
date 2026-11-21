export const locales = ["en", "uk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** English is served at "/", every other locale at "/<locale>/". */
export const localePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}/`);

const en = {
  meta: {
    title: "Aurora Academy — Where curiosity finds its orbit",
    description:
      "Aurora Academy is a small, warm and intellectually ambitious private school for ages 6–18. Explore our programs, faculty and campus life.",
  },
  nav: {
    programs: "Programs",
    faculty: "Faculty",
    campus: "Campus life",
    admissions: "Admissions",
  },
  cta: "Book a visit",
  hero: {
    eyebrow: "Private day & boarding school · Ages 6–18",
    titleStart: "Where curiosity",
    titleEmph: "finds its orbit.",
    lead: "A small, warm, intellectually ambitious school. We pair rigorous teaching with room to wonder — so every student leaves with knowledge, character and a direction of their own.",
    primary: "Book a campus visit",
    secondary: "Explore programs",
    scroll: "Scroll",
    stats: [
      { value: "12:1", label: "students per teacher" },
      { value: "40+", label: "clubs & studios" },
      { value: "28", label: "nationalities on campus" },
    ],
  },
  marquee: [
    "Mathematics",
    "Literature",
    "Robotics",
    "Marine biology",
    "Debate",
    "Music",
    "Design",
    "Languages",
    "Astronomy",
    "Theatre",
  ],
  programs: {
    eyebrow: "Programs",
    title: "A path for every stage of growing up",
    lead: "Four connected programs share one philosophy: learn deeply, ask boldly, and finish what you start.",
    items: [
      {
        age: "Ages 6–9",
        title: "Early Explorers",
        text: "Play-led literacy and numeracy, daily outdoor learning and the first taste of music, art and a second language.",
        tags: ["Bilingual", "Forest school", "Reading studio"],
      },
      {
        age: "Ages 10–13",
        title: "Discovery Years",
        text: "Project-based science and humanities, coding foundations and mentors who help students find their questions.",
        tags: ["Projects", "Coding", "Mentoring"],
      },
      {
        age: "Ages 14–18",
        title: "Diploma & Pathways",
        text: "Advanced academics, independent research and university counselling tailored to each student’s ambitions.",
        tags: ["IB-style core", "Research", "University guidance"],
      },
      {
        age: "All ages",
        title: "Evening & Summer Studios",
        text: "Short intensive courses in robotics, creative writing, chess, ceramics and marine science — open to guests too.",
        tags: ["Robotics", "Writing", "Arts"],
      },
    ],
  },
  faculty: {
    eyebrow: "Faculty",
    title: "Teachers who still get excited on Monday",
    lead: "Our educators are practitioners — scientists, composers, writers — chosen as much for their warmth as for their expertise.",
    people: [
      {
        name: "Dr. Elena Marsh",
        role: "Head of Sciences",
        bio: "Former research chemist. Turns the school observatory into a weekly night class.",
        initials: "EM",
      },
      {
        name: "Tomás Reyes",
        role: "Music & Composition",
        bio: "Conducts three ensembles and believes every child can compose a melody by Friday.",
        initials: "TR",
      },
      {
        name: "Amara Okafor",
        role: "Humanities & Debate",
        bio: "Award-winning debate coach who teaches students to disagree beautifully.",
        initials: "AO",
      },
    ],
    quote: {
      text: "Aurora gave my daughter the confidence to say “I don’t know yet” — and then go find out.",
      by: "Parent, class of 2025",
    },
    more: "Meet the full team",
  },
  campus: {
    eyebrow: "Campus life",
    title: "A campus designed for wandering minds",
    lead: "Light-filled studios, quiet reading corners and a garden that doubles as a classroom.",
    tiles: [
      {
        title: "Observatory & Makerspace",
        text: "A rooftop telescope above a workshop with laser cutters, 3D printers and soldering benches.",
        meta: "Open every evening",
      },
      {
        title: "Garden Library",
        text: "30,000 books, hammocks and a glass reading room facing the orchard.",
        meta: "30,000 volumes",
      },
      {
        title: "Concert Hall",
        text: "A 300-seat hall with real acoustics and student-run recitals each month.",
        meta: "300 seats",
      },
      {
        title: "Clubs & Studios",
        text: "From chess and fencing to film and marine biology.",
        meta: "40+ clubs",
      },
      {
        title: "Boarding House",
        text: "Small family-style houses with resident tutors, shared dinners and weekend trips.",
        meta: "Grades 7–12",
      },
    ],
  },
  admissions: {
    eyebrow: "Admissions",
    title: "Come and see how learning feels here",
    lead: "Admissions are open for the next academic year. Visit the campus, meet teachers and decide together.",
    steps: [
      { title: "Visit", text: "A relaxed 90-minute tour and lunch with students." },
      { title: "Apply", text: "A short form, a school report and an informal conversation." },
      { title: "Welcome", text: "A personal plan and a buddy to guide your first weeks." },
    ],
    button: "Start your application",
    secondary: "Download prospectus",
    note: "Scholarships available for gifted students.",
  },
  footer: {
    tagline: "Where curiosity finds its orbit.",
    demo: "Demo website for a fictional school. All names and figures are illustrative.",
    rights: "© 2026 Aurora Academy",
    language: "Language",
  },
};

export type Dict = typeof en;

const uk: Dict = {
  meta: {
    title: "Aurora Academy — Де цікавість знаходить свою орбіту",
    description:
      "Aurora Academy — невелика, тепла й інтелектуально амбітна приватна школа для дітей 6–18 років. Програми, викладачі та життя кампусу.",
  },
  nav: {
    programs: "Програми",
    faculty: "Викладачі",
    campus: "Життя кампусу",
    admissions: "Вступ",
  },
  cta: "Записатися на візит",
  hero: {
    eyebrow: "Приватна школа · денне та пансіонне навчання · 6–18 років",
    titleStart: "Де цікавість",
    titleEmph: "знаходить свою орбіту.",
    lead: "Невелика, тепла й амбітна школа. Ми поєднуємо вимогливе викладання з простором для здивування — щоб кожен учень випускався зі знаннями, характером і власним напрямом.",
    primary: "Записатися на візит",
    secondary: "Переглянути програми",
    scroll: "Вниз",
    stats: [
      { value: "12:1", label: "учнів на одного вчителя" },
      { value: "40+", label: "гуртків і студій" },
      { value: "28", label: "національностей у кампусі" },
    ],
  },
  marquee: [
    "Математика",
    "Література",
    "Робототехніка",
    "Морська біологія",
    "Дебати",
    "Музика",
    "Дизайн",
    "Мови",
    "Астрономія",
    "Театр",
  ],
  programs: {
    eyebrow: "Програми",
    title: "Свій шлях для кожного етапу дорослішання",
    lead: "Чотири взаємопов’язані програми об’єднує одна філософія: вчитися глибоко, сміливо питати й доводити почате до кінця.",
    items: [
      {
        age: "6–9 років",
        title: "Малі дослідники",
        text: "Грамотність і математика через гру, щоденне навчання просто неба, перші кроки в музиці, мистецтві та другій мові.",
        tags: ["Двомовність", "Лісова школа", "Читальна студія"],
      },
      {
        age: "10–13 років",
        title: "Роки відкриттів",
        text: "Проєктні природничі та гуманітарні курси, основи програмування й наставники, які допомагають знайти власні питання.",
        tags: ["Проєкти", "Кодинг", "Менторство"],
      },
      {
        age: "14–18 років",
        title: "Диплом і траєкторії",
        text: "Поглиблені предмети, самостійні дослідження та супровід вступу до університету під амбіції кожного учня.",
        tags: ["Міжнародне ядро", "Дослідження", "Вступ до вишів"],
      },
      {
        age: "Для всіх віків",
        title: "Вечірні та літні студії",
        text: "Короткі інтенсиви з робототехніки, творчого письма, шахів, кераміки та морської науки — відкриті і для гостей.",
        tags: ["Роботи", "Письмо", "Мистецтво"],
      },
    ],
  },
  faculty: {
    eyebrow: "Викладачі",
    title: "Вчителі, які й у понеділок із захопленням",
    lead: "Наші педагоги — практики: науковці, композитори, письменники. Ми обираємо їх і за теплоту, і за експертизу.",
    people: [
      {
        name: "Др Олена Марш",
        role: "Керівниця природничого напряму",
        bio: "Колишня дослідниця-хімік. Перетворила шкільну обсерваторію на щотижневий нічний урок.",
        initials: "ОМ",
      },
      {
        name: "Томас Рейєс",
        role: "Музика та композиція",
        bio: "Диригує трьома ансамблями й упевнений, що кожна дитина складе мелодію до п’ятниці.",
        initials: "ТР",
      },
      {
        name: "Амара Окафор",
        role: "Гуманітарні науки та дебати",
        bio: "Відзначена тренерка з дебатів, яка вчить учнів красиво не погоджуватися.",
        initials: "АО",
      },
    ],
    quote: {
      text: "Aurora дала моїй доньці впевненість казати «я ще не знаю» — і йти шукати відповідь.",
      by: "Батьки, випуск 2025",
    },
    more: "Уся команда",
  },
  campus: {
    eyebrow: "Життя кампусу",
    title: "Кампус для допитливих умів",
    lead: "Світлі студії, тихі куточки для читання та сад, що слугує класом.",
    tiles: [
      {
        title: "Обсерваторія та мейкерспейс",
        text: "Телескоп на даху над майстернею з лазерним різаком, 3D-принтерами та паяльними столами.",
        meta: "Щовечора відкрито",
      },
      {
        title: "Бібліотека в саду",
        text: "30 000 книжок, гамаки та скляна читальня з видом на яблуневий сад.",
        meta: "30 000 томів",
      },
      {
        title: "Концертна зала",
        text: "Зала на 300 місць зі справжньою акустикою та щомісячними учнівськими концертами.",
        meta: "300 місць",
      },
      {
        title: "Гуртки та студії",
        text: "Від шахів і фехтування до кіно та морської біології.",
        meta: "40+ гуртків",
      },
      {
        title: "Пансіон",
        text: "Невеликі родинні будинки з тьюторами, спільними вечерями та поїздками на вихідні.",
        meta: "7–12 класи",
      },
    ],
  },
  admissions: {
    eyebrow: "Вступ",
    title: "Приходьте й відчуйте, як тут вчаться",
    lead: "Триває набір на наступний навчальний рік. Відвідайте кампус, познайомтеся з вчителями й ухваліть рішення разом.",
    steps: [
      { title: "Візит", text: "Невимушена 90-хвилинна екскурсія та обід з учнями." },
      { title: "Заявка", text: "Коротка анкета, шкільна довідка й неформальна розмова." },
      { title: "Вітаємо", text: "Індивідуальний план і наставник-друг на перші тижні." },
    ],
    button: "Подати заявку",
    secondary: "Завантажити проспект",
    note: "Для обдарованих учнів доступні стипендії.",
  },
  footer: {
    tagline: "Де цікавість знаходить свою орбіту.",
    demo: "Демонстраційний сайт вигаданої школи. Усі імена й цифри ілюстративні.",
    rights: "© 2026 Aurora Academy",
    language: "Мова",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, uk };
export const getDict = (locale: Locale): Dict => dictionaries[locale];
