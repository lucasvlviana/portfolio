import {
  Activity,
  ArrowUpRight,
  Code2,
  Download,
  GraduationCap,
  MonitorCog,
  Network,
  Radar,
  Shield,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { roadmap, skills, tools } from "../data/content.js";
import profileImage from "../assets/Profile.png";
import resumePdf from "../assets/Curriculo_Lucas_Viana_SOC_Jr_CTC.pdf";

const icons = {
  radar: Radar,
  network: Network,
  "monitor-cog": MonitorCog,
  "graduation-cap": GraduationCap,
};

function ArrowLink({ children, href, className = "text-link" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children} <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Lucas Viana, início">
        <span className="brand-mark">LV</span>
        <span>Lucas Viana<span className="brand-dot">.</span></span>
      </a>
      <nav aria-label="Navegação principal">
        <a href="#trajetoria">Trajetória</a>
        <a href="#competencias">Competências</a>
        <a href="#laboratorios">Laboratórios</a>
        <a href="#projetos">Projetos</a>
      </nav>
      <a className="header-contact" href="mailto:lucasvitorlv@gmail.com">
        Vamos conversar <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="hero section-wrap" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> BELO HORIZONTE, MG <span className="eyebrow-sep">/</span> ABERTO A OPORTUNIDADES</p>
        <h1>Redes por dentro.<br /><span>Segurança em foco.</span></h1>
        <p className="hero-lede">Sou Lucas Viana, profissional de redes e telecomunicações em transição para Cibersegurança. Quero levar minha experiência de infraestrutura para uma equipe de <strong>SOC</strong>.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={resumePdf} download>
            Baixar currículo <Download size={16} aria-hidden="true" />
          </a>
          <a className="button button-quiet" href="https://www.linkedin.com/in/lucasvlviana/" target="_blank" rel="noopener noreferrer">
            LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-proof">
          <img className="profile-thumb" src={profileImage} alt="Lucas Viana" />
          <p><strong>Desde 2016</strong><span>em infraestrutura, redes e telecomunicações</span></p>
        </div>
      </div>
      <div className="hero-visual" aria-label="Resumo profissional">
        <div className="visual-top"><span>PERFIL // 001</span><span className="live-indicator">DISPONÍVEL</span></div>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="visual-core"><div className="core-symbol"><ShieldCheck size={32} strokeWidth={1.2} aria-hidden="true" /></div><span>DEFESA<br />EM CAMADAS</span></div>
        <div className="orbit-label label-net"><Network size={13} aria-hidden="true" /> REDES</div>
        <div className="orbit-label label-sec"><Shield size={13} aria-hidden="true" /> SECURITY</div>
        <div className="orbit-label label-ops"><Activity size={13} aria-hidden="true" /> OPERAÇÕES</div>
        <div className="visual-bottom"><span>INFRAESTRUTURA + ANÁLISE</span><span>BH · BR</span></div>
      </div>
      <a className="scroll-cue" href="#trajetoria"><span /> CONHEÇA MINHA TRAJETÓRIA</a>
    </section>
  );
}

export function JourneySection() {
  return (
    <section className="section-wrap journey section-block" id="trajetoria">
      <div className="section-heading"><p className="eyebrow">01 / DE ONDE VENHO</p><h2>Base técnica sólida.<br /><span>Próximo passo: SOC.</span></h2></div>
      <div className="journey-copy">
        <p className="body-large">Sou bacharel em Ciência da Computação e trabalho com redes e telecomunicações desde 2016. Minha experiência combina suporte técnico, infraestrutura e acompanhamento de operações.</p>
        <p>Agora direciono essa bagagem para a Cibersegurança. Estou cursando pós-graduação em Cibersegurança Ofensiva na Acadi-TI, com formação em abordagens Blue, Red e Green Team, e busco minha primeira oportunidade em SOC.</p>
        <p>Quero contribuir com triagem de alertas, resposta inicial a incidentes e documentação cuidadosa — somando conhecimento de redes, atendimento e comunicação clara com usuários.</p>
        <p>Também concluí o MBA em Desenvolvimento Full Stack da Rocketseat. A experiência com desenvolvimento web complementa minha base de infraestrutura e meus estudos em segurança.</p>
        <ArrowLink href={resumePdf}>Ver currículo completo</ArrowLink>
      </div>
      <div className="career-strip">
        <div><span className="strip-number">2016</span><span>início da trajetória<br />em redes e telecom</span></div>
        <div><span className="strip-number">SOC</span><span>objetivo<br />profissional</span></div>
        <div><span className="strip-number">BH</span><span>Minas Gerais<br />Brasil</span></div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section-wrap skills section-block" id="competencias">
      <div className="section-heading">
        <p className="eyebrow">02 / CONHECIMENTOS</p><h2>O que levo<br /><span>para a equipe.</span></h2>
        <p className="section-intro">Experiência prática em infraestrutura e suporte, em desenvolvimento contínuo na área de segurança.</p>
      </div>
      <div className="skill-grid">
        {skills.map((skill) => {
          const Icon = icons[skill.icon];
          return (
            <article className="skill-card" key={skill.title}>
              <div className="skill-icon"><Icon size={16} aria-hidden="true" /></div>
              <p className="card-index">{skill.index}</p><h3>{skill.title}</h3><p>{skill.description}</p>
            </article>
          );
        })}
      </div>
      <div className="roadmap">
        <p className="tool-label">TRILHA PLANEJADA</p>
        <div className="roadmap-steps">
          {roadmap.map((step) => <div key={step.number}><span>{step.number}</span><strong>{step.title}</strong></div>)}
        </div>
        <p className="roadmap-note">Cronograma pessoal sujeito a ajustes. Nenhuma certificação é apresentada como concluída.</p>
      </div>
      <div className="tool-row"><span className="tool-label">FERRAMENTAS & BASE</span><div className="tool-tags">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
    </section>
  );
}

export function LabsSection({ labs, writeups, loading, error }) {
  return (
    <section className="section-wrap labs section-block" id="laboratorios">
      <div className="projects-heading">
        <div className="section-heading"><p className="eyebrow">03 / PRÁTICA EM SEGURANÇA</p><h2>Estudo que vira<br /><span>evidência prática.</span></h2></div>
        <p className="section-intro">O plano prevê laboratórios controlados e writeups para documentar cada etapa. Os itens abaixo ainda estão planejados.</p>
      </div>
      {error && <p className="api-notice" role="status">API indisponível. Projetos e laboratórios estão sendo exibidos pelo conteúdo local.</p>}
      <div className="lab-grid" aria-live="polite">
        {labs.map((lab) => (
          <article className="lab-card" key={lab.slug}>
            <div className="lab-card-top"><span className="lab-status">{lab.status}</span><span className="lab-date">{lab.period}</span></div>
            <h3>{lab.title}</h3><p>{lab.description}</p><div className="lab-tags">{lab.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
        {loading && labs.length === 0 && <p className="api-notice">Carregando laboratórios…</p>}
      </div>
      <div className="writeups">
        <div><p className="eyebrow">WRITEUPS PÚBLICOS</p>
          {writeups.length === 0
            ? <p className="writeup-empty">Ainda não há writeups publicados. Esta área será atualizada conforme os laboratórios forem concluídos.</p>
            : <ul className="writeup-list">{writeups.map((item) => <li key={item.slug}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}<ArrowUpRight size={14} aria-hidden="true" /></a><span>{[item.platform, item.tools, item.publishedAt].filter(Boolean).join(" · ")}</span></li>)}</ul>}
        </div>
        <ArrowLink className="text-link" href="https://github.com/lucasvlviana">Acompanhar no GitHub</ArrowLink>
      </div>
    </section>
  );
}

export function ProjectsSection({ projects, loading }) {
  return (
    <section className="section-wrap projects section-block" id="projetos">
      <div className="projects-heading">
        <div className="section-heading"><p className="eyebrow">04 / DESENVOLVIMENTO WEB</p><h2>Código e rede.<br /><span>Sites no mundo real.</span></h2></div>
        <p className="section-intro">Além da transição para Cibersegurança, desenvolvo sites e experiências digitais como freelancer.</p>
      </div>
      <div className="project-list" aria-live="polite">
        {projects.map((project, index) => (
          <a className="project-card" href={project.url} target="_blank" rel="noopener noreferrer" key={project.slug}>
            <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="project-info"><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div>
            <div className="project-arrow"><ArrowUpRight size={15} aria-hidden="true" /></div>
          </a>
        ))}
        {loading && projects.length === 0 && <p className="api-notice">Carregando projetos…</p>}
      </div>
      <p className="projects-note"><Terminal size={14} aria-hidden="true" /> Laboratórios e repositórios de segurança em construção no GitHub.</p>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact section-wrap" id="contato">
      <div><p className="eyebrow">05 / CONTATO</p><h2>Vamos conversar<br /><span>sobre segurança?</span></h2><p>Estou aberto a oportunidades em Cibersegurança e SOC, presencial, híbrido ou remoto.</p></div>
      <div className="contact-actions">
        <a className="button button-primary" href="mailto:lucasvitorlv@gmail.com">Enviar um e-mail <ArrowUpRight size={16} aria-hidden="true" /></a>
        <a className="button button-outline" href="https://www.linkedin.com/in/lucasvlviana/" target="_blank" rel="noopener noreferrer">Conectar no LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
        <a className="github-link" href="https://github.com/lucasvlviana" target="_blank" rel="noopener noreferrer"><Code2 size={15} aria-hidden="true" /> github.com/lucasvlviana</a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#inicio"><span className="brand-mark">LV</span><span>Lucas Viana<span className="brand-dot">.</span></span></a>
      <span>REDES · SEGURANÇA · CIBERSEGURANÇA</span><span>© {new Date().getFullYear()} LUCAS VIANA</span>
    </footer>
  );
}
