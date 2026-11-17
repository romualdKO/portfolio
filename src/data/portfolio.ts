export const profile = {
  name: "Konan Konan N’Dri Romuald",
  title: "Développeur Full Stack & Étudiant Master BIHAR",
  email: "romualdndri9@gmail.com",
  phone: "+225 05 74 43 27 80",
  location: "Abidjan, Côte d’Ivoire",
  github: "https://github.com/romualdKO",
  linkedin: "https://www.linkedin.com/in/konan-n-dri-romuald-konan-6347b4327/",
  novaSms: "https://nova-sms-front.sandbox.sankofa-lab.co/",
  cv: "/romuald-konan-cv.pdf",
  status: "Disponible pour opportunités (Stage / Emploi)",
};

export const interests = [
  "Développement logiciel full stack",
  "Intelligence artificielle & LLM",
  "Big Data & Data Analytics",
  "IoT & Systèmes connectés",
  "Applications web & mobiles",
];

export const techGroups = [
  {
    title: "Frontend & Mobile",
    note: "Technologies maîtrisées pour interfaces web réactives et applications mobiles performantes.",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Flutter", icon: "flutter" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
  },
  {
    title: "Backend & APIs",
    note: "Architecture serveur robuste, APIs REST et logique métier structurée.",
    items: [
      { name: "Python", icon: "python" },
      { name: "Django", icon: "django" },
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "PHP", icon: "php" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    title: "Data & Stockage",
    note: "Bases de données relationnelles, NoSQL et spécialisation Master BIHAR en Big Data.",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Firebase", icon: "firebase" },
      { name: "Big Data · BIHAR", icon: "python" },
    ],
  },
  {
    title: "IoT & Systèmes embarqués",
    note: "Capteurs environnementaux, télémétrie et dispositifs connectés primés en hackathons.",
    items: [
      { name: "ESP32", icon: "arduino" },
      { name: "IoT & Capteurs", icon: "wifi" },
    ],
  },
  {
    title: "Outils, DevOps & Conception",
    note: "Gestion de version, conteneurisation, modélisation UML/Merise et UI/UX.",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
    ],
  },
];

export const skillGroups = [
  { number: "01", title: "Front-end & Mobile", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Flutter"] },
  { number: "02", title: "Back-end & Microservices", items: ["Python", "Django", "Node.js", "NestJS", "Java", "PHP", "APIs REST"] },
  { number: "03", title: "Data, IoT & IA", items: ["PostgreSQL", "SQLite", "Firebase", "ESP32", "Twilio USSD", "Prompt Engineering"] },
  { number: "04", title: "DevOps & Méthodes", items: ["Git", "GitHub", "Docker", "Figma", "UML", "Merise"] },
];

export const projects = [
  {
    number: "01",
    name: "NovaSMS / NovaMessenger",
    category: "SaaS · Marketing omnicanal",
    period: "Mars — Juin 2026",
    description: "Une plateforme SaaS de communication marketing unifiée centralisant la gestion des campagnes SMS, email et WhatsApp à large échelle.",
    problem: "Les entreprises doivent jongler avec des outils dispersés et des processus cloisonnés pour piloter leurs canaux de communication clients.",
    solution: "Une plateforme SaaS centralisée et réactive offrant routage haute disponibilité, suivi analytique en temps réel et planification de campagnes multicanales.",
    role: "Stagiaire développeur Full Stack chez SANKOFA-LAB (Cocody Angré). Conception d’interfaces interactives React/TypeScript et intégration des endpoints NestJS.",
    results: ["Plateforme SaaS déployée en environnement sandbox opérationnel pour les tests clients."],
    github: "https://github.com/romualdKO/NOVASMS",
    website: profile.novaSms,
    image: "/projects/novasms-live.png",
    imageAlt: "Capture de la plateforme NovaSMS en ligne",
    imageFit: "cover",
    technologies: ["React", "TypeScript", "NestJS", "Tailwind CSS", "Docker"],
  },
  {
    number: "02",
    name: "RespiraBox",
    category: "E-santé · IoT · IA prédictive",
    period: "Nov. 2025 — Juin 2026",
    description: "Dispositif médical connecté intelligent pour le dépistage préliminaire des affections respiratoires (Tuberculose, Pneumonie) et la surveillance de l’air.",
    problem: "Démocratiser un premier dépistage rapide, accessible et non invasif des risques pulmonaires tout en assurant une veille continue sur la qualité de l'air.",
    solution: "Une box connectée multi-capteurs mesurant constantes physiologiques et environnementales 24/7, couplée à une application mobile dotée d'une IA d'aide au diagnostic et d'un chatbot.",
    role: "Chargé du développement de l’application mobile en Flutter/Dart, intégration des flux de données IoT (ESP32/Firebase) et couplage avec l’IA d’assistance.",
    results: [
      "3ᵉ Prix · Hackathon des Journées du Droit Numérique (JDN) 2026 (Ministère de la Transition Numérique et de l'Innovation Technologique)",
      "2ᵉ place sur 24 équipes · Apprentissage par Projet 3 (E-Santé 4.0 · ESATIC)",
    ],
    github: "https://github.com/romualdKO/respirabox_mobile",
    image: "/projects/respirabox-app-logo.png",
    imageAlt: "Logo et interface de l’application mobile RespiraBox",
    imageFit: "contain",
    technologies: ["Flutter", "Dart", "ESP32", "Firebase", "IA prédictive", "Chatbot"],
  },
  {
    number: "03",
    name: "Don Sang Plus",
    category: "Santé numérique · Engagement citoyen",
    period: "Projet personnel · Open Source",
    description: "Solution web dédiée à la digitalisation du parcours des donneurs de sang et à l’optimisation des approvisionnements hospitaliers en Côte d'Ivoire.",
    problem: "Pénurie critique et coordination laborieuse des stocks de poches de sang lors des urgences médicales, couplées à l'absence de suivi personnalisé des donneurs.",
    solution: "Application web centralisant le profil médical des donneurs, la planification des collectes mobiles, la gestion des alertes d'urgence et le matching par compatibilité sanguine.",
    role: "Conception architecturale, modélisation de la base de données relationnelle et développement full stack de la solution web.",
    results: ["Dépôt open source documenté avec gestion des utilisateurs, notifications et espace administrateur."],
    github: "https://github.com/romualdKO/ROMI/tree/main/dont_sang_plus",
    image: "/projects/don-sang-plus-cover.png",
    imageAlt: "Illustration Don Sang Plus issue du projet",
    imageFit: "cover",
    technologies: ["Python", "Django", "SQLite", "Bootstrap", "HTML/CSS"],
  },
  {
    number: "04",
    name: "SmartWatt",
    category: "IoT · E-Énergie · Service USSD",
    period: "Juin 2025 · Hackathon COM IUA",
    description: "Système connecté intelligent de surveillance et d’optimisation de la consommation électrique basé sur un compteur simulé avec accès universel sans internet.",
    problem: "Rendre le suivi et la gestion de l'énergie électrique accessibles aux populations et ménages ne disposant ni de smartphone ni d'accès internet permanent.",
    solution: "Compteur connecté communicant avec une application mobile et doublé d'un service USSD interactif via Twilio, permettant la consultation de solde, la recharge et la coupure d'urgence par simple code mobile.",
    role: "Conception et implémentation du service interactif USSD via l'API Twilio, intégration avec le simulateur IoT et la logique de facturation/coupure.",
    results: ["Projet primé et finaliste au Hackathon SmartWatt 2025 COM IUA."],
    image: "/projects/smartwatt-cover.svg",
    imageAlt: "Interface SmartWatt : compteur intelligent IoT et passerelle USSD Twilio",
    imageFit: "cover",
    technologies: ["Twilio", "USSD", "IoT", "Python", "Mobile", "API REST"],
  },
];

export const additionalProjects = [
  {
    name: "Collecte intelligente des déchets (MapMakers)",
    period: "Mars — Mai 2025 · ESATIC APP 2",
    description: "Poubelle connectée avec tri automatique des déchets et application web de gratification citoyenne des dépôts. Rôle : développement back-end de l’application web.",
    technologies: ["Backend web", "IoT", "Python", "API REST"],
  },
  {
    name: "ROMIX Parking",
    period: "Février 2025 · ESATIC",
    description: "Application logicielle de supervision de parking avec gestion automatisée des accès véhicules, horodatage et interface graphique moderne sous JavaFX.",
    technologies: ["Java", "JavaFX", "POO", "Bases de données SQL"],
  },
  {
    name: "Élevage intelligent",
    period: "Recherche appliquée",
    description: "Modélisation de capteurs IoT et télémétrie pour le suivi sanitaire et l'optimisation des parcours pastoraux en élevage.",
    technologies: ["IoT", "Capteurs", "Python"],
  },
];

export const experiences = [
  {
    period: "Mars — Juin 2026",
    role: "Stagiaire Développeur Full Stack",
    organization: "SANKOFA-LAB · NOVASEND",
    location: "Cocody Angré, Abidjan",
    detail: "Stage école autour de la plateforme SaaS de marketing omnicanal unifiée (SMS, Email, WhatsApp).",
  },
  {
    period: "Juillet — Août 2024",
    role: "Stagiaire Réseaux & Télécoms",
    organization: "M2K GROUP",
    location: "Abidjan Nord",
    detail: "Installation et configuration de réseaux Wi-Fi CanalBox chez des particuliers et entreprises.",
  },
];

export const education = [
  {
    period: "Depuis 2026",
    title: "Master 1 BIHAR",
    subtitle: "Big Data Intelligence for Human Augmented Reality",
    school: "ESTIA (France) × ESATIC (Abidjan)",
  },
  {
    period: "2023 — 2026",
    title: "Licence en Systèmes Informatiques",
    subtitle: "Option Génie Logiciel (SIGL)",
    school: "ESATIC · Abidjan",
  },
  {
    period: "2023",
    title: "Baccalauréat Scientifique · Série C",
    subtitle: "Mathématiques & Sciences Physiques",
    school: "Lycée Municipal de Port-Bouët",
  },
];

export const certifications = [
  {
    title: "CS50x — Introduction to Computer Science",
    issuer: "Harvard University · 2025",
    file: "/certifications/cs50x.pdf",
  },
  {
    title: "Prompt Engineering Generative AI for Marketing & Advertising",
    issuer: "Coursera Project Network · 2025",
    file: "/certifications/prompt-engineering.pdf",
    link: "https://coursera.org/verify/7ITG6Q0ZFMH5",
  },
  {
    title: "Create a Web Application With Django",
    issuer: "OpenClassrooms · 2025 · Certificat # 6736704653",
    file: "/certifications/django.pdf",
  },
  {
    title: "Build Your First Web Pages With HTML and CSS",
    issuer: "OpenClassrooms · 2025 · Certificat # 7397892175",
    file: "/certifications/html-css.pdf",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy · 2025",
    file: "/certifications/python-essentials.pdf",
  },
];
