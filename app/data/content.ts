export const portfolioData = {
hero: {
greeting: "Olá, meu nome é",
name: "João Vitor",
title: "Desenvolvedor Full Stack",
cta: "Conheça meu trabalho",
},
about: {
title: "Sobre mim",
description: [
    "Sou Desenvolvedor Full Stack apaixonado por transformar problemas complexos em soluções de software eficientes. Graduando em Análise e Desenvolvimento de Sistemas pelo UNIFIP, combino embasamento teórico com experiência prática em projetos reais, atuando tanto no Backend quanto no Frontend.",
    "Minha especialidade técnica abrange o ecossistema JavaScript moderno (Next.js 15, TypeScript, React) e o desenvolvimento robusto com Python (Django 5.1, FastAPI). Tenho um forte compromisso com a qualidade de código, aplicando princípios de Clean Architecture e testes automatizados (BDD) para garantir aplicações escaláveis e de fácil manutenção.",
    "Nos projetos ValidaCheck e Encanto Kids, desenvolvi não apenas interfaces de alta performance, mas também APIs REST seguras e integrações complexas. Sou movido por aprendizado contínuo e estou pronto para colaborar em equipes que valorizam inovação e excelência técnica.",
],
resumeLink: "/resume.pdf", 
image: "/profile.jpg",    
},
projects: [
{
    title: "ValidaCheck",
    description:
    "Plataforma Full Stack para submissão e validação de horas extracurriculares. Sistema robusto com autenticação OAuth2, filas de processamento e dashboards em tempo real.",
    tech: ["Django 5", "Next.js 15", "TypeScript", "PostgreSQL", "Docker"],
    repoLink: "https://github.com/Guilherme0Medeiros/ValidaCheck.git",
    liveLink: "https://www.linkedin.com/posts/jo%C3%A3o-vitor-mac%C3%AAdo-552b04354_fullstackdeveloper-codingjourney-django-activity-7401689124094500864-QKMN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFhw4g4B4Af5ha9PqZgTVqVgmE3YpyO8TUs",
    image: "/projects/validacheck.png",
},
{
    title: "Encanto Kids",
    description:
    "Sistema de gestão escolar e financeira. Focado em performance mobile-first e SEO, com painéis administrativos para acompanhamento de KPIs financeiros e acadêmicos.",
    tech: ["Next.js", "Tailwind CSS v4", "SSR", "SEO"],
    repoLink: "https://github.com/Jvitorr-macedo/encanto-kids.git",
    liveLink: "#",
    image: "/projects/encantokids.png",
},
{
    title: "BookSwap API",
    description:
    "API RESTful desenvolvida para facilitar a troca de livros entre usuários. Arquitetura escalável com autenticação JWT, documentação Swagger e alta cobertura de testes.",
    tech: ["Python", "Django DRF", "API REST", "SQL"],
    repoLink: "https://github.com/Jvitorr-macedo/react-api-rest.git",
    liveLink: "#",
    image: "/projects/bookswap.png",
},
],
contact: {
title: "Contato",
text: "Estou disponível para novos desafios profissionais. Vamos conversar sobre como posso agregar valor ao seu time?",
cta: "Enviar E-mail",
email: "mailto:jvitormaced@gmail.com",
social: {
    github: "https://github.com/Jvitorr-macedo",
    linkedin: "https://linkedin.com/in/joaovitor-macedo",
},
},
};