# Delmack Consultoria — Nova Experiência

## Escopo

Redesenhar o site institucional da Delmack Consultoria como uma landing page moderna, premium e orientada à conversão. A experiência deve vender consultoria e transformação operacional ponta a ponta: identificar gaps, gargalos e oportunidades; desenhar processos; implementar automações; desenvolver sistemas; e atuar como softhouse quando necessário. O projeto será desenvolvido e revisado na Manus e ficará pronto para publicação posterior na Vercel.

## Direção de design

- **Movimento:** editorial tech / brutalismo sofisticado, inspirado na energia dos Reels enviados: cortes visuais fortes, ritmo, sobreposição, tipografia grande e sensação de estúdio de transformação.
- **Princípios:** clareza comercial sem linguagem genérica; contraste alto com um acento elétrico; narrativa em camadas (tensão → diagnóstico → construção → resultado); detalhes com comportamento de produto.
- **Cor:** base quase preta e marfim para transmitir precisão e maturidade; verde-lima ácido como assinatura proprietária, representando o momento em que uma operação sai do travamento para o movimento; tons de cinza quente sustentam leitura e confiança.
- **Layout:** composição assimétrica com trilho de navegação lateral/vertical, blocos que atravessam a largura, números grandes e seções em faixas de ritmo alternado em vez de cards centralizados repetitivos.
- **Elementos assinatura:** cursor/label `DEL/WORK`, linhas de blueprint e um “sinal de operação” em forma de círculo/onda, além de números de seção e marcadores de status.
- **Interação:** CTAs sempre próximos do contexto de decisão; navegação âncora com destaque da seção; acordeão de serviços para compactar informação no mobile; formulário de contato com retorno visual imediato e fallback para WhatsApp.
- **Animação:** entrada suave por revelação vertical, marquee horizontal lento, hover com deslocamento curto e transições de 180–400ms; sem excesso de efeitos que prejudiquem performance ou legibilidade.
- **Tipografia:** `Space Grotesk` para títulos e marca (geométrica, técnica e expressiva) + `DM Sans` para corpo e microcopy (leitura, proximidade e precisão). Títulos em caixa baixa/alta com tracking apertado; corpo em linhas curtas.
- **Essência:** “A operação que sua empresa precisa para crescer, construída do diagnóstico ao código.” Personalidade: incisiva, parceira, construtora.
- **Voz:** direta, inteligente e sem jargão vazio. Exemplos: “Seu time não precisa trabalhar mais. Precisa trabalhar melhor.” / “A gente encontra o atrito, desenha o fluxo e coloca para rodar.”
- **Wordmark:** `DELMACK/` em wordmark monoespaciado com barra final e pequeno marcador circular, reforçando a ideia de laboratório/estúdio operacional.
- **Cor de marca:** verde-lima elétrico `#C7F36B`.
- **Logo aplicada:** logo enviada pelo usuário, tratada em verde-lima com transparência e usada no header, na abertura pixelada e no footer, preservando a tipografia original da marca.

## Arquitetura da página

1. **Hero:** posicionamento, CTA principal para diagnóstico e CTA secundário; visual abstrato em CSS com anel de operação e dados curtos.
2. **Marquee de tensão:** frases sobre gargalos, planilhas, retrabalho e crescimento.
3. **Diagnóstico:** lista de sintomas operacionais com um painel visual “antes de escalar, enxergue”.
4. **Frentes de atuação:** processos, automação, desenvolvimento e softhouse; acordeão acessível.
5. **Possibilidades:** workshops de IA, design thinking, hackathons internos e facilitação sob medida, apresentados como portas de entrada complementares ao método.
6. **Jornada:** método em quatro passos, do raio-X ao próximo ciclo.
7. **Impacto:** números e benefícios traduzidos em clareza, velocidade e controle.
8. **Provas/credibilidade:** experiência em tecnologia, soluções personalizadas, sistemas já entregues e dados institucionais preservados.
9. **CTA final + contato:** convite para conversa de diagnóstico, WhatsApp, e-mail e formulário com dados atuais.
10. **Footer:** navegação e CNPJ.

## Encantamento inicial

O primeiro impacto usa uma entrada suave do conteúdo em português, com revelação progressiva do texto e do visual de operação. A tela não bloqueia a navegação, não simula carregamento e não usa uma tela preta que possa parecer quebrada. A linguagem visual pixelada fica como textura e movimento do próprio hero, mantendo a experiência clara e leve na Manus e na Vercel.

## Conversão e escolha do visitante

Depois de Possibilidades, a seção “Qual é o seu próximo movimento?” oferece cinco caminhos de entrada. Cada caminho seleciona automaticamente o assunto correspondente no formulário e leva o visitante ao contato. O assunto do formulário cobre consultoria, transformação, projetos, processos, RPA, sistemas, todos os portfólios atuais, workshops e facilitação; “Outros” abre um campo livre.

O formulário não armazena dados nem envia mensagens automaticamente. Ele monta uma mensagem e abre o WhatsApp oficial da Delmack com o conteúdo preenchido; o visitante ainda precisa tocar em “Enviar”. Esse fluxo é gratuito e não exige integração externa. Automação real de recebimento exigiria WhatsApp Business Platform/API ou outro serviço de automação, com configuração e possível custo.

## Implementação

- Vite + TypeScript sem backend, com uma página estática responsiva em `src/`.
- `index.html` contém a estrutura semântica e metadados; `src/main.ts` controla navegação, acordeão, menu mobile, reveal e formulário; `src/styles.css` concentra tokens visuais, layout e responsividade.
- `public/manus-routes.json` declara a rota `/` exigida pelo runtime.
- O formulário não inventa persistência: valida os campos e abre uma mensagem pré-preenchida no WhatsApp, mantendo o canal comercial atual.
- `app.config.ts` preserva a identidade do projeto e aponta para um ícone HTTPS durável do site atual.
- Build estático em `dist`, preparado para a publicação na Vercel por meio do repositório/conexão escolhida pelo usuário.

## Conteúdo preservado

- WhatsApp: `+55 (41) 98781-8621`.
- E-mail: `delmackconsultoria@gmail.com`.
- CNPJ: `61.887.193/0001-39`.
- Credenciais do site atual reinterpretadas: mais de 10 anos de experiência em tecnologia, soluções personalizadas, tecnologia de ponta, sistemas Pipeline de vendas, RH Lize, Alugue-se e gestão de orçamentos/pedidos.
