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

O frontend inclui uma cópia local dos projetos e laboratórios iniciais. Assim, essas seções continuam visíveis quando o site é publicado como arquivos estáticos ou quando a API está indisponível. Writeups publicados dependem da API e do banco SQLite.

## API

- `GET /api/health` — estado do servidor
- `GET /api/portfolio` — projetos, laboratórios e writeups públicos

Na primeira inicialização, o servidor cria `data/portfolio.sqlite` e insere os projetos e laboratórios iniciais. As tabelas SQLite são `projects`, `labs` e `writeups`. O repositório não oferece endpoints de escrita públicos.

## Conteúdo

- O currículo está em `src/assets/Curriculo_Lucas_Viana_SOC_Jr_CTC.pdf`.
- Os textos da trajetória, competências e plano de estudos ficam em `src/data/content.js`.
- A lista compartilhada de projetos e laboratórios fica em `src/data/portfolioFallback.js`; o mesmo conteúdo alimenta a interface e os dados iniciais do SQLite.
- Para registrar ou atualizar um writeup concluído no banco local, use `npm run writeup:add -- --slug sala-exemplo --title "Nome da sala" --url https://exemplo.com/writeup --platform TryHackMe --tools "Nmap, Wireshark" --published-at 2027-03`. `slug`, `title` e `url` são obrigatórios; a URL deve usar HTTPS. O mesmo slug atualiza o registro existente.
- Publique apenas writeups e links de laboratórios autorizados. O script altera somente o banco local; o backend não oferece endpoints de escrita públicos.
- O plano de estudos aparece como planejamento; as certificações não são apresentadas como concluídas.

## Projetos web

- [Mais Engenharia & Arquitetura](https://maisarquitetura.netlify.app/)
- [The Rokz Burger](https://therokz.netlify.app/)
- [Barbearia Modelo](https://modelodebarbearia2026.netlify.app/)
- [Studio Modelo Nails](https://studionailsmodelo.netlify.app/)
