"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Download,
  Mail,
  MapPin,
  Moon,
  Phone,
  Radio,
  Sun,
  Wifi,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { FormEvent, ReactNode } from "react";
import {
  additionalProjects,
  certifications,
  education,
  experiences,
  interests,
  profile,
  projects,
  techGroups,
} from "@/data/portfolio";

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.48,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioExperience() {
  const projectsTrack = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("romuald-theme");
    document.documentElement.dataset.theme =
      storedTheme === "light" ? "light" : "dark";
  }, []);

  function toggleTheme() {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("romuald-theme", nextTheme);
  }

  function scrollProjects(direction: -1 | 1) {
    const track = projectsTrack.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.82,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }

  function copyToClipboard() {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";

    const subject = encodeURIComponent(`Contact Portfolio — ${name}`);
    const body = encodeURIComponent(
      `Bonjour Romuald,\n\n${message}\n\n---\nExpéditeur : ${name}\nEmail : ${email}`
    );
    setFormSent(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="portfolio-v3">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <header className="site-header-v3">
        <a
          className="identity-lockup"
          href="#accueil"
          aria-label="Romuald Konan, accueil"
        >
          <span className="identity-monogram">RK</span>
          <span className="identity-text">
            ROMUALD KONAN<span>PORTFOLIO · 2026</span>
          </span>
        </a>
        <nav className="main-nav-v3" aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
          <a href="#technologies">Technologies</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions-v3">
          <a className="header-availability-v3" href="#contact" title={profile.status}>
            <span /> Disponible
          </a>
          <a
            className="header-cv"
            href={profile.cv}
            download
            aria-label="Télécharger le CV"
            title="Télécharger le CV (PDF)"
          >
            <Download size={16} />
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label="Basculer entre le thème clair et sombre"
            onClick={toggleTheme}
          >
            <Sun className="theme-icon-sun" size={17} />
            <Moon className="theme-icon-moon" size={17} />
          </button>
        </div>
      </header>

      <section
        className="hero-v3 section-shell"
        id="accueil"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy-v3" id="contenu">
          <div>
            <p className="eyebrow-v3">
              <span /> DÉVELOPPEUR LOGICIEL & MASTER BIHAR · ABIDJAN, CI
            </p>
            <p className="hero-kicker">KONAN KONAN N’DRI ROMUALD</p>
            <h1 id="hero-title">
              Je ne me contente pas de coder.
              <br />
              <em>Je construis ce qui vient ensuite.</em>
            </h1>
            <p className="hero-intro-v3">
              Développeur Full Stack diplômé en Génie Logiciel (ESATIC) et
              étudiant en Master BIHAR (ESTIA × ESATIC). Je conçois des solutions
              innovantes à la croisée du logiciel, de la data, de l&apos;IA et des
              objets connectés (IoT).
            </p>
            <div className="hero-actions-v3">
              <a className="button-v3 button-v3-primary" href="#projets">
                Explorer mes projets <ArrowDownRight size={17} />
              </a>
              <a className="button-v3 button-v3-quiet" href="#parcours">
                Découvrir mon parcours <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-socials-v3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={15} /> LinkedIn <ArrowUpRight size={12} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 size={15} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={15} /> Email <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-portrait-v3">
          <div className="portrait-orbit-stage" aria-hidden="true">
            <span className="portrait-orbit-ring" />
            <motion.span
              className="portrait-orbit-tag orbit-tag-sigl"
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            >
              SIGL <i /> LOGICIEL
            </motion.span>
            <motion.span
              className="portrait-orbit-tag orbit-tag-bihar"
              animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              BIHAR <i /> DATA
            </motion.span>
            <motion.span
              className="portrait-orbit-tag orbit-tag-iot"
              animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
            >
              ESP32 <i /> IoT
            </motion.span>
          </div>
          <div className="portrait-label-v3">
            <span>01 / PROFIL</span>
            <span>05°20′N · 04°01′W</span>
          </div>
          <div className="portrait-image-v3">
            <Image
              src="/romuald-konon-profile.png"
              alt="Portrait de Romuald Konan"
              width={800}
              height={800}
              priority
              sizes="(max-width: 700px) 78vw, 36vw"
            />
          </div>
          <div className="portrait-caption-v3">
            <span>MASTER 1 BIHAR</span>
            <span>ESATIC × ESTIA</span>
          </div>
          <span className="portrait-index-v3">RK — 2026</span>
        </div>
        <a className="scroll-hint-v3" href="#apropos">
          <span /> DÉFILER POUR EXPLORER
        </a>
      </section>

      <section
        className="about-v3 section-shell"
        id="apropos"
        aria-labelledby="about-title"
      >
        <Reveal className="about-heading-v3">
          <p className="eyebrow-v3">
            <span /> 01 / VISION &amp; EXPERTISE
          </p>
          <h2 id="about-title">
            Du génie logiciel
            <br />
            aux <em>systèmes intelligents.</em>
          </h2>
        </Reveal>
        <Reveal className="about-content-v3" delay={0.08}>
          <p className="about-manifesto-v3">
            Je pars d’un besoin réel, j’analyse avec rigueur les contraintes,
            puis je développe une solution robuste, scalable et centrée utilisateur.
          </p>
          <p>
            Après une Licence en Systèmes Informatiques option Génie Logiciel
            (SIGL) à l’ESATIC, je poursuis un Master BIHAR (Big Data
            Intelligence for Human Augmented Reality) en double cursus ESTIA ×
            ESATIC. Mon profil combine maîtrise du développement full stack
            (React, Next.js, Django, NestJS), de la data et des systèmes
            connectés IoT (ESP32, Twilio USSD).
          </p>
          <div className="interest-strip-v3">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </Reveal>
        <div className="about-index-v3">
          <span>SIGL</span>
          <i />
          <span>BIHAR</span>
          <i />
          <span>INNOVATION</span>
        </div>
      </section>

      <section
        className="projects-v3 section-shell"
        id="projets"
        aria-labelledby="projects-title"
      >
        <div className="section-head-v3">
          <Reveal>
            <p className="eyebrow-v3">
              <span /> 02 / ÉTUDES DE CAS
            </p>
            <h2 id="projects-title">
              Projets majeurs &amp;
              <br />
              <em>réalisations primées.</em>
            </h2>
          </Reveal>
          <div className="projects-controls-v3">
            <p>
              Quatre projets emblématiques conçus, primés en hackathons ou déployés en production.
            </p>
            <div>
              <button
                type="button"
                onClick={() => scrollProjects(-1)}
                aria-label="Projet précédent"
                title="Précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollProjects(1)}
                aria-label="Projet suivant"
                title="Suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="project-track-v3"
          ref={projectsTrack}
          aria-label="Carrousel des projets"
        >
          {projects.map((project, index) => (
            <Reveal
              className="case-card-v3"
              key={project.number}
              delay={index * 0.045}
            >
              <div
                className={`case-cover-v3 ${
                  project.imageFit === "contain" ? "case-cover-contain" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={760}
                  sizes="(max-width: 700px) 86vw, (max-width: 1050px) 48vw, 36vw"
                  priority={index === 0}
                />
                <span className="case-number-v3">{project.number} / 04</span>
              </div>
              <div className="case-body-v3">
                <p className="case-category-v3">{project.category}</p>
                <div className="case-title-line">
                  <h3>{project.name}</h3>
                  <span>{project.period}</span>
                </div>
                <p className="case-description-v3">{project.description}</p>
                <details className="case-details-v3" open={index === 0}>
                  <summary>
                    Étude de cas détaillée <ArrowDown size={14} />
                  </summary>
                  <dl>
                    <div>
                      <dt>Problème</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>Solution</dt>
                      <dd>{project.solution}</dd>
                    </div>
                    <div>
                      <dt>Mon rôle</dt>
                      <dd>{project.role}</dd>
                    </div>
                  </dl>
                  {project.results.length > 0 && (
                    <div className="case-results-v3">
                      <span>RÉSULTATS &amp; DISTINCTIONS</span>
                      {project.results.map((result) => (
                        <p key={result}>★ {result}</p>
                      ))}
                    </div>
                  )}
                  <div className="case-technologies-v3">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </details>
                <div className="case-links-v3">
                  {"github" in project && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dépôt GitHub <ArrowUpRight size={14} />
                    </a>
                  )}
                  {"website" in project && project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir la plateforme <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <details className="other-work-v3">
          <summary>
            Autres réalisations académiques &amp; prototypes <ArrowDown size={15} />
          </summary>
          <div className="other-work-list-v3">
            {additionalProjects.map((project) => (
              <article key={project.name}>
                <div>
                  <span>{project.period}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </details>
      </section>

      <section
        className="stack-v3 section-shell"
        id="technologies"
        aria-labelledby="stack-title"
      >
        <Reveal className="stack-intro-v3">
          <p className="eyebrow-v3">
            <span /> 03 / TECHNOLOGIES &amp; OUTILS
          </p>
          <h2 id="stack-title">
            Des outils éprouvés pour
            <br />
            <em>concrétiser les idées.</em>
          </h2>
          <p>
            Stack technique mise en pratique dans mes projets professionnels,
            académiques et dépôts open source.
          </p>
        </Reveal>
        <div className="stack-groups-v3">
          {techGroups.map((group, index) => (
            <details
              className="stack-group-v3"
              key={group.title}
              open={index === 0 || index === 1}
            >
              <summary>
                <span className="stack-index-v3">0{index + 1}</span>
                <strong>{group.title}</strong>
                <span>{group.items.length} technologies</span>
                <ArrowDown size={15} />
              </summary>
              <p>{group.note}</p>
              <div className="tech-logo-grid-v3">
                {group.items.map((item) => (
                  <div
                    className="tech-logo-card-v3"
                    key={item.name}
                    title={item.name}
                  >
                    {item.icon === "wifi" || item.icon === "arduino" ? (
                      <span className="tech-glyph-v3">
                        {item.icon === "wifi" ? (
                          <Wifi size={24} />
                        ) : (
                          <Radio size={24} />
                        )}
                      </span>
                    ) : (
                      <span className="tech-logo-wrap-v3" data-icon={item.icon}>
                        <Image
                          src={`/tech/${item.icon}.svg`}
                          alt={item.name}
                          width={27}
                          height={27}
                        />
                      </span>
                    )}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        className="journey-v3 section-shell"
        id="parcours"
        aria-labelledby="journey-title"
      >
        <Reveal className="journey-heading-v3">
          <p className="eyebrow-v3">
            <span /> 04 / EXPÉRIENCE &amp; FORMATION
          </p>
          <h2 id="journey-title">
            Apprendre avec méthode.
            <br />
            <em>Construire avec impact.</em>
          </h2>
        </Reveal>
        <div className="journey-columns-v3">
          <div>
            <h3>Expériences professionnelles</h3>
            {experiences.map((item) => (
              <article className="journey-entry-v3" key={item.organization}>
                <span>{item.period}</span>
                <h4>{item.role}</h4>
                <p className="journey-org-v3">{item.organization}</p>
                <p>{item.detail}</p>
                <small>
                  <MapPin size={12} /> {item.location}
                </small>
              </article>
            ))}
          </div>
          <div>
            <h3>Parcours académique</h3>
            {education.map((item) => (
              <article className="journey-entry-v3" key={item.title}>
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                {item.subtitle && <p>{item.subtitle}</p>}
                <p className="journey-org-v3">{item.school}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="certifications-v3 section-shell"
        aria-labelledby="certifications-title"
      >
        <Reveal>
          <p className="eyebrow-v3">
            <span /> 05 / CERTIFICATIONS
          </p>
          <h2 id="certifications-title">
            Apprendre, <em>valider et partager.</em>
          </h2>
        </Reveal>
        <div className="cert-list-v3">
          {certifications.map((certificate, index) => (
            <article className="cert-row-v3" key={certificate.title}>
              <span className="cert-index-v3">0{index + 1}</span>
              <div>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </div>
              <div className="cert-links-v3">
                <a
                  href={certificate.file}
                  download
                  aria-label={`Télécharger le certificat ${certificate.title}`}
                  title="Télécharger le certificat PDF"
                >
                  <Download size={16} />
                </a>
                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Vérifier le certificat ${certificate.title}`}
                    title="Vérifier l'authenticité en ligne"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <a className="cv-download-v3" href={profile.cv} download>
          <Download size={16} /> Télécharger mon CV complet (PDF)
        </a>
      </section>

      <section
        className="contact-v3 section-shell"
        id="contact"
        aria-labelledby="contact-title"
      >
        <Reveal className="contact-copy-v3">
          <p className="eyebrow-v3">
            <span /> 06 / CONTACT &amp; OPPORTUNITÉS
          </p>
          <h2 id="contact-title">
            Une opportunité ou un projet ?
            <br />
            <em>Construisons la suite.</em>
          </h2>
          <p>
            Actuellement ouvert aux opportunités en développement logiciel Full
            Stack, ingénierie de données et projets IoT / IA. N&apos;hésitez pas à me
            contacter pour échanger !
          </p>
          <div className="contact-quick-actions" style={{ display: "flex", gap: "10px", alignItems: "center", margin: "18px 0" }}>
            <a className="contact-email-v3" href={`mailto:${profile.email}`} style={{ margin: 0 }}>
              {profile.email}
              <ArrowUpRight size={17} />
            </a>
            <button
              type="button"
              onClick={copyToClipboard}
              className="copy-email-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 12px",
                fontSize: "11px",
                background: "var(--theme-raised)",
                color: copiedEmail ? "var(--accent)" : "var(--paper-dim)",
                border: "1px solid var(--line)",
                cursor: "pointer",
                borderRadius: "4px",
                transition: "all 0.2s ease",
              }}
              title="Copier l'adresse email"
            >
              {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedEmail ? "Email copié !" : "Copier"}</span>
            </button>
          </div>
          <div className="contact-links-v3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={13} />
            </a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              <Phone size={13} /> {profile.phone}
            </a>
            <span>
              <MapPin size={13} /> {profile.location}
            </span>
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap-v3" delay={0.08}>
          <form onSubmit={handleContactSubmit}>
            <label htmlFor="contact-name">Votre nom</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Nom et prénom ou entreprise"
            />
            <label htmlFor="contact-email">Votre email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="vous@exemple.com"
            />
            <label htmlFor="contact-message">Votre message</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder="Décrivez votre besoin, opportunité de stage/emploi ou projet..."
            />
            <button className="button-v3 button-v3-primary" type="submit">
              Envoyer un message <ArrowRight size={16} />
            </button>
            {formSent && (
              <p
                style={{
                  color: "var(--accent)",
                  fontSize: "12px",
                  marginTop: "12px",
                  fontWeight: 500,
                }}
              >
                ✓ Votre application de messagerie s&apos;ouvre avec votre message pré-rempli.
              </p>
            )}
            <p>Le message sera ouvert dans votre messagerie par défaut.</p>
          </form>
        </Reveal>
      </section>

      <footer className="footer-v3 section-shell">
        <a className="identity-lockup" href="#accueil">
          <span className="identity-monogram">RK</span>
          <span className="identity-text">
            ROMUALD KONAN<span>ABIDJAN · CÔTE D’IVOIRE</span>
          </span>
        </a>
        <a href="#accueil">
          Retour en haut <ArrowUpRight size={14} />
        </a>
        <span>© 2026 · KONAN KONAN N’DRI ROMUALD · Conçu avec Next.js &amp; Tailwind CSS</span>
      </footer>
    </main>
  );
}
