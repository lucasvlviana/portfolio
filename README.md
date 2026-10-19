# Portfólio — Lucas Viana

Portfólio profissional com foco em redes, telecomunicações e transição para Cibersegurança/SOC Jr., além de projetos web freelancer.

## Stack

- **Frontend:** React, Vite e Lucide React
- **Servidor/API:** Node.js 22+ e Express
- **Banco:** SQLite com `better-sqlite3`
- **Segurança HTTP:** cabeçalhos e Content Security Policy via Helmet

## Desenvolvimento local

```bash
npm install
npm run dev
```

O Vite inicia o site em `http://localhost:5173` e encaminha `/api` para o Express em `http://localhost:3001`.

## Produção

```bash
npm run build
npm start
```

O Express serve a compilação em `dist/` e a API pela mesma origem. Use hospedagem Node.js com volume gravável e persistente para o SQLite. Defina `DATABASE_PATH` para o caminho do arquivo do banco nesse volume. Hospedagem apenas de arquivos estáticos não executa a API nem persiste o SQLite.

## API

- `GET /api/health` — estado do servidor
- `GET /api/portfolio` — projetos, laboratórios e writeups públicos

Na primeira inicialização, o servidor cria `data/portfolio.sqlite` e insere os projetos e laboratórios iniciais. As tabelas SQLite são `projects`, `labs` e `writeups`. O repositório não oferece endpoints de escrita públicos.

## Conteúdo

- O currículo está em `src/assets/Curriculo_Lucas_Viana_SOC_Jr_CTC.pdf`.
- Os textos da trajetória, competências e plano de estudos ficam em `src/data/content.js`.
- Os registros públicos de projetos e laboratórios são inicializados em `server/db.js`.
- Writeups concluídos podem ser inseridos na tabela `writeups` usando uma ferramenta SQLite local. Publique apenas links de laboratórios autorizados.
- O plano de estudos aparece como planejamento; as certificações não são apresentadas como concluídas.

## Projetos web

- [Mais Engenharia & Arquitetura](https://maisarquitetura.netlify.app/)
- [The Rokz Burger](https://therokz.netlify.app/)
- [Barbearia Modelo](https://modelodebarbearia2026.netlify.app/)
- [Studio Modelo Nails](https://studionailsmodelo.netlify.app/)
