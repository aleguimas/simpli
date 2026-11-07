# Modernização de /solucoes/simpli-crm

Escopo corrigido pelo usuário: página comercial do CRM. A home e seus componentes foram restaurados ao estado anterior à intervenção; preservar public/17.png, public/18.png, public/20.png e .claude.

Referência: linguagem do Agentic Office, adaptada ao Simplí CRM. Hero com tela grande; demonstrações de atendimento, evolução do lead no Kanban e editor visual de campanhas; catálogo de recursos acessível; perfis Varejo/Serviços e implantação preservados. CTAs de contato: https://wa.link/cpk8xf. Canonical e rota existentes preservados.

Origem visual: /Users/caiosouza/Documents/simplicrm-(saas). Ambiente de captura separado em /private/tmp/simpli-crm-capture, importando páginas/componentes originais e CSS original, com adapters de dados fictícios em memória. Nenhuma autenticação, banco, conversa ou campanha real é alterada. KanbanPage e CampanhaFlowBuilderPage originais. Atendimento renderizado pelos painéis ConversationSidebar e ConversationPanel originais, incluindo MessageList e MessageComposer originais, com os mesmos contratos de props da tela do aplicativo e adapters de dados em memória. Legenda de dados de demonstração junto às imagens. Não reutilizar a captura antiga que contém dados privados.

Movimento: sequência de estados capturados do Kanban, controle manual e pausa; parar fora da viewport e com prefers-reduced-motion. Capturas sempre legíveis em repouso, ampliação com rolagem local. Animações de entrada e foco, sem informação dependente de movimento.

Validação: build, tipos, lint dos arquivos alterados, diff; revisão desktop/celular; CTAs, âncoras, imagens e console; controles, sequência, pausa e movimento reduzido. Sem commit, push ou deploy.

## Resultado verificado em 07/11/2026

- Build de produção, TypeScript, ESLint dos arquivos alterados e git diff --check concluídos sem erros.
- Preview de produção em http://localhost:4173/solucoes/simpli-crm. Revisão em 1280, 768, 390 e 320 px; sem rolagem horizontal da página nem imagens quebradas. As 14 capturas respondem HTTP 200 como image/jpeg.
- Abas por teclado, âncoras, catálogo expansível, menu móvel e ampliação conferidos. Sequência do Kanban pausa fora da tela e ao ampliar. Emulação real de prefers-reduced-motion desativa reprodução e mantém os controles manuais.
- Capturas refeitas via Playwright local, autorizado pelo usuário, usando os componentes originais do aplicativo com dados fictícios. Nenhuma alteração no código do aplicativo de origem.
- Home, componentes compartilhados e CSS global conferidos byte a byte contra HEAD. Alterações preexistentes do usuário preservadas.
- Console do preview sem erros. Permanecem avisos preexistentes de bundle/Browserslist e de dependência. Auditoria: 22 vulnerabilidades nas dependências existentes (16 altas, 6 moderadas); pacotes e lockfiles não alterados. Lint global anterior aponta problemas em arquivos fora deste escopo; lint focado passou.
- Sem commit, push ou deploy. Regras de hospedagem não alteradas; validação pública depende de publicação posterior.
