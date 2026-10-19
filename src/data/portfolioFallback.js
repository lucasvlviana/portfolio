// Conteúdo compartilhado entre a interface estática e a carga inicial do SQLite.
export const initialProjects = [
  {
    slug: "mais-engenharia-arquitetura",
    title: "Mais Engenharia & Arquitetura",
    category: "INSTITUCIONAL · FREELANCER",
    description: "Site para escritório de engenharia e arquitetura, apresentando serviços, projetos e canais de contato.",
    url: "https://maisarquitetura.netlify.app/",
  },
  {
    slug: "the-rokz-burger",
    title: "The Rokz Burger",
    category: "MARCA · FREELANCER",
    description: "Presença digital para hamburgueria artesanal de Belo Horizonte.",
    url: "https://therokz.netlify.app/",
  },
  {
    slug: "barbearia-modelo",
    title: "Barbearia Modelo",
    category: "AGENDAMENTO · DEMONSTRAÇÃO",
    description: "Experiência de agendamento online para serviços de barbearia.",
    url: "https://modelodebarbearia2026.netlify.app/",
  },
  {
    slug: "studio-modelo-nails",
    title: "Studio Modelo Nails",
    category: "AGENDAMENTO · DEMONSTRAÇÃO",
    description: "Catálogo de serviços e fluxo de agendamento para um estúdio de unhas.",
    url: "https://studionailsmodelo.netlify.app/",
  },
];

export const initialLabs = [
  {
    slug: "ambiente-pentest",
    title: "Ambiente para Pentest",
    description: "Preparar um laboratório com Kali Linux e máquina-alvo para praticar enumeração e análise em ambiente controlado.",
    status: "PLANEJADO",
    period: "OUT 2026",
    tags: ["Kali Linux", "Linux", "Lab local"],
  },
  {
    slug: "tryhackme-jr-penetration-tester",
    title: "TryHackMe: Jr Penetration Tester",
    description: "Trilha prática introdutória, com salas guiadas e writeups publicados após a conclusão de cada laboratório.",
    status: "PLANEJADO",
    period: "NOV 2026 – FEV 2027",
    tags: ["Nmap", "Enumeração", "Writeups"],
  },
  {
    slug: "tryhackme-soc-level-1",
    title: "TryHackMe: SOC Level 1",
    description: "Prática orientada a monitoramento e investigação, como complemento aos estudos de operações e resposta a incidentes.",
    status: "PLANEJADO",
    period: "MAR – JUN 2027",
    tags: ["Blue Team", "Triagem", "Incidentes"],
  },
  {
    slug: "soc-lab-siem-wazuh",
    title: "SOC Lab com SIEM Wazuh",
    description: "Montar um ambiente controlado para coletar eventos, criar alertas e investigar atividade suspeita com Wazuh.",
    status: "PLANEJADO",
    period: "MAR – JUN 2027",
    tags: ["Wazuh", "SIEM", "Logs", "Blue Team"],
  },
  {
    slug: "rede-segmentada-firewall-acl",
    title: "Rede Segmentada com Firewall e ACL",
    description: "Projetar uma rede de laboratório segmentada e validar regras de firewall e ACL por meio de testes controlados.",
    status: "PLANEJADO",
    period: "MAR – JUN 2027",
    tags: ["Redes", "Firewall", "ACL", "Segmentação"],
  },
];

export const fallbackPortfolio = {
  projects: initialProjects,
  labs: initialLabs,
  writeups: [],
};
