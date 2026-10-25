import { ArrowUpRight, Download, Mail, MapPin, Menu } from 'lucide-react'
import { TypewriterTitle } from '@/components/typewriter-title'

const projects = [
  {
    number: '01',
    title: 'Bilhetes online',
    description: 'Plataforma para compra e venda de ingressos digitais desenvolvida em colaboração com a empresa Zelosos.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    type: 'Plataforma web',
    link: 'https://bilhetesonline.co.mz/#/',
  },
  {
    number: '02',
    title: 'Sindsul',
    description: 'Portal corporativo e sistema para sindicato desenvolvido em colaboração com a empresa Webtagger Brasil.',
    tags: ['React', 'JavaScript', 'CSS3'],
    type: 'Portal institucional',
    link: 'https://portal.sindsul.org.br/',
  },
  {
    number: '03',
    title: 'Colégio Foch',
    description: 'Sistema web de gestão de informações escolares desenvolvido em colaboração com a Webtagger Brasil.',
    tags: ['React', 'Web App', 'TypeScript'],
    type: 'Gestor escolar',
    link: 'https://colegiofoch.com.br/',
  },
  {
    number: '04',
    title: 'Clima API',
    description: 'Aplicação web interativa de previsão meteorológica em tempo real consumindo API REST pública.',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    type: 'Aplicação web',
    link: 'https://github.com/mauriciocosta404/Clima-js-API',
  },
  {
    number: '05',
    title: 'Oncolavras',
    description: 'Site institucional e apresentação para clínica médica oncológica em colaboração com a Webtagger Brasil.',
    tags: ['React', 'UI Design', 'CSS3'],
    type: 'Site institucional',
    link: 'https://github.com/mauriciocosta404',
  },
  {
    number: '06',
    title: 'Calculadora JS',
    description: 'Aplicação interativa de cálculos matemáticos com layout responsivo desenvolvida com JavaScript moderno.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    type: 'Projeto pessoal',
    link: 'https://github.com/mauriciocosta404/Calculadora-js.git',
  },
]

const skills = [
  'React / Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Tailwind CSS',
  'SASS / CSS3',
  'HTML5',
  'APIs & Integrações',
  'Git & GitHub',
  'Figma',
]

export default function Page() {
  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Maurício Costa — início">
          <span className="brand-mark">MC</span>
          <span className="brand-name">Maurício Costa</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
          <a href="/MauricioCV.pdf" download="MauricioCV.pdf">Currículo</a>
        </nav>
        <a className="nav-cta" href="mailto:mc611641@gmail.com">
          Vamos conversar <ArrowUpRight aria-hidden="true" />
        </a>
        <button className="mobile-menu" aria-label="Abrir menu"><Menu aria-hidden="true" /></button>
      </header>

      <div id="top" className="hero section-container">
        <div className="hero-copy">
          <TypewriterTitle />
          <p className="hero-intro">
            Sou Maurício Costa, desenvolvedor focado em Frontend e soluções web modernas (React, Next.js e TypeScript), transformando ideias e necessidades em produtos digitais claros, rápidos e funcionais.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Ver projetos <ArrowUpRight aria-hidden="true" /></a>
            <a className="button" style={{ border: '1px solid var(--line)', color: 'var(--foreground)' }} href="/MauricioCV.pdf" download="MauricioCV.pdf">
              Baixar CV <Download aria-hidden="true" />
            </a>
            <a className="text-link" href="#sobre">Mais sobre mim <span>↓</span></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Resumo profissional">
          <figure className="portrait-wrap">
            <img className="portrait" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%2016.53.52-Ohk1Kow8NgQYNewFLrGvVeFRFW9yTb.jpeg" alt="Maurício Costa, desenvolvedor de software" />
            <figcaption>desenvolvedor<br />frontend / web</figcaption>
          </figure>
          <div className="location"><MapPin aria-hidden="true" /> <span>Remoto · Aberto a projetos<br />globais</span></div>
        </div>
      </div>

      <div className="ticker" aria-hidden="true"><div>DESIGN · CODE · PRODUCT <span>✦</span> DESIGN · CODE · PRODUCT <span>✦</span> DESIGN · CODE · PRODUCT <span>✦</span></div></div>

      <section id="sobre" className="about section-container section-grid">
        <div className="section-label"><span>01</span> Sobre</div>
        <div className="about-content">
          <h2>Entre o problema<br />e a <em>possibilidade.</em></h2>
          <div className="about-columns">
            <p>
              Sou desenvolvedor web ambicioso e focado no ecossistema Frontend e JavaScript/TypeScript. Gosto de compreender o contexto do negócio e construir soluções funcionais com código limpo e arquitetura sustentável.
            </p>
            <p>
              Tenho experiência colaborando no desenvolvimento de plataformas digitais, portais institucionais e aplicações web (como Zelosos e Webtagger Brasil), unindo interface, boas práticas e integração de APIs.
            </p>
          </div>
          <div className="skills-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </section>

      <section id="projetos" className="projects section-container section-grid">
        <div className="section-label"><span>02</span> Projetos selecionados</div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
                style={{ display: 'block', color: 'inherit' }}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                  <ArrowUpRight className="project-arrow" aria-hidden="true" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="contact section-container">
        <p className="eyebrow">03 / Contato</p>
        <h2>Tem uma ideia?<br /><em>Vamos construir.</em></h2>
        <p className="contact-copy">
          Se você precisa de um desenvolvedor para o seu projeto ou time, quer modernizar uma solução ou trocar uma ideia, estou à disposição.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
          <a className="email-link" href="mailto:mc611641@gmail.com">
            mc611641@gmail.com <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="email-link" href="https://wa.me/244921129586" target="_blank" rel="noopener noreferrer">
            WhatsApp: +244 921129586 <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="footer section-container">
        <span>© 2026 Maurício António da Costa</span>
        <div className="socials">
          <a href="https://github.com/mauriciocosta404" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/mauricio-costa-216bb1235" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:mc611641@gmail.com" aria-label="Email">
            <Mail aria-hidden="true" />
          </a>
        </div>
        <span>Feito com intenção.</span>
      </footer>
    </main>
  )
}
