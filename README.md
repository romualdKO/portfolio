<div align="center">

# 🌐 Portfolio de Konan Konan N'Dri Romuald

**Développeur Full Stack & Étudiant en Master 1 BIHAR (ESTIA × ESATIC)**  
*Concevoir des architectures logicielles fiables, scalables et centrées sur l'utilisateur.*

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

[🚀 Découvrir le site en ligne](#-déploiement-sur-vercel) · [✨ Projets phares](#-projets-phares) · [🛠️ Stack technique](#️-stack-technique) · [📫 Me contacter](#-contact)

</div>

---

## 👨‍💻 À propos

Bienvenue sur le dépôt officiel du portfolio de **Konan Konan N’Dri Romuald**.  
Diplômé en Systèmes Informatiques option **Génie Logiciel (SIGL)** à l'**ESATIC** et actuellement étudiant en **Master BIHAR (Big Data Intelligence for Human Augmented Reality)** en double cursus avec l'**ESTIA**, je conçois des solutions logicielles complètes à la croisée du développement Full Stack, de la Data, de l'Intelligence Artificielle et de l'IoT.

---

## ✨ Projets phares mis en avant

| Projet | Domaine | Stack Technique | Rôle & Réalisations |
| :--- | :--- | :--- | :--- |
| **[NovaSMS](https://github.com/romualdKO/NOVASMS)** | SaaS Marketing Omnicanal | React, TypeScript, NestJS, Tailwind, Docker | Stagiaire Full Stack chez **SANKOFA-LAB**. Conception des interfaces et intégration de la messagerie unifiée (SMS, Email, WhatsApp). |
| **[RespiraBox](https://github.com/romualdKO/respirabox_mobile)** | E-Santé, IoT, IA Prédictive | Flutter, Dart, ESP32, Firebase, IA | Développeur mobile. Station connectée de dépistage respiratoire.<br>🏆 **3ᵉ Prix Hackathon des Journées du Droit Numérique 2026**<br>🥈 **2ᵉ place sur 24 équipes (ESATIC E-Santé 4.0)** |
| **[Don Sang Plus](https://github.com/romualdKO/ROMI/tree/main/dont_sang_plus)** | E-Santé & Engagement Citoyen | Python, Django, SQLite, Bootstrap | Conception et développement Full Stack d'une plateforme d'optimisation des collectes de sang et de gestion des donneurs. |
| **SmartWatt** | IoT, Énergie & USSD | Twilio USSD, IoT, Python, Mobile API | Développeur service USSD via Twilio. Compteur électrique intelligent supervisé et piloté sans connexion internet.<br>🏆 **Projet primé au Hackathon SmartWatt 2025 COM IUA**. |

---

## 🛠️ Stack technique

- **Frontend & Mobile :** Next.js 16 (Turbopack, App Router), React 19, TypeScript, Flutter / Dart, Tailwind CSS 4, Framer Motion, Lucide Icons.
- **Backend & APIs :** Python, Django, Node.js, NestJS, Java, PHP, Architecture REST & Microservices.
- **Data & Stockage :** PostgreSQL, SQLite, Firebase, Spécialisation Big Data (BIHAR).
- **IoT & Systèmes :** ESP32, Capteurs biométriques/qualité de l'air, Services Télécoms USSD (Twilio).
- **DevOps & Outils :** Git, GitHub, Docker, VS Code, Figma, UML, Merise.

---

## ⚡ Démarrage rapide en local

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- npm ou pnpm ou yarn

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/romualdKO/portfolio.git

# 2. Accéder au projet
cd portfolio

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

- `npm run dev` : Démarre le serveur de développement Next.js.
- `npm run build` : Compile et optimise l'application pour la production.
- `npm run start` : Lance l'application de production.
- `npm run lint` : Vérifie la conformité et la qualité du code avec ESLint.

---

## 🚀 Déploiement sur Vercel

Ce projet est optimisé pour un déploiement instantané avec **Vercel** :

### Méthode 1 : Via l'interface web Vercel (Recommandé)
1. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub.
2. Cliquez sur **"Add New..."** > **"Project"**.
3. Sélectionnez le dépôt `romualdKO/portfolio`.
4. Vercel détecte automatiquement le framework **Next.js**.
5. Cliquez sur **"Deploy"** ! Votre site est en ligne en moins d'une minute avec un nom de domaine SSL gratuit (`.vercel.app`) et déploiement continu à chaque push sur `main`.

### Méthode 2 : Via la CLI Vercel
```bash
# Connexion et déploiement
npx vercel
# Pour déployer en production :
npx vercel --prod
```

---

## 📁 Architecture du projet

```
portfolio/
├── public/                 # Fichiers statiques, images et assets
│   ├── certifications/     # Certificats vérifiés (CS50x, Django, Prompt Eng, etc.)
│   ├── projects/           # Visuels et maquettes des projets
│   ├── tech/               # Logos des technologies et frameworks
│   └── romuald-konan-cv.pdf# CV téléchargeable au format PDF
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── favicon.ico     # Favicon
│   │   ├── globals.css     # Styles globaux & Tailwind 4
│   │   ├── experience.css  # Styles des composants et thèmes
│   │   ├── layout.tsx      # Layout racine, SEO, fonts et OpenGraph
│   │   ├── page.tsx        # Point d'entrée de la page d'accueil
│   │   └── not-found.tsx   # Page 404 personnalisée
│   ├── components/         # Composants React interactifs
│   │   └── portfolio-experience.tsx
│   └── data/               # Données structurées (profil, projets, formations)
│       └── portfolio.ts
├── next.config.ts          # Configuration Next.js
├── package.json            # Dépendances et scripts
└── tsconfig.json           # Configuration TypeScript
```

---

## 📜 Certifications

- **Harvard University :** CS50x — Introduction to Computer Science (2025)
- **Coursera Project Network :** Prompt Engineering Generative AI for Marketing & Advertising ([Vérifier](https://coursera.org/verify/7ITG6Q0ZFMH5))
- **OpenClassrooms :** Création d'applications web avec Django (# 6736704653)
- **OpenClassrooms :** Créez vos premières pages web avec HTML & CSS (# 7397892175)
- **Cisco Networking Academy :** Python Essentials 1 (2025)

---

## 📫 Contact

- **Email :** [romualdndri9@gmail.com](mailto:romualdndri9@gmail.com)
- **LinkedIn :** [linkedin.com/in/konan-n-dri-romuald-konan-6347b4327](https://www.linkedin.com/in/konan-n-dri-romuald-konan-6347b4327/)
- **GitHub :** [github.com/romualdKO](https://github.com/romualdKO)
- **Localisation :** Abidjan, Côte d'Ivoire

---

<div align="center">
  <sub>© 2026 Konan Konan N'Dri Romuald. Conçu avec passion et rigueur technique.</sub>
</div>
