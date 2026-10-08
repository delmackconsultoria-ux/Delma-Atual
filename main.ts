import './styles.css';

type Service = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  text: string;
  tags: string[];
};

const whatsappNumber = '5541987818621';
const whatsappBase = `https://wa.me/${whatsappNumber}`;

const iconArrow = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 4l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const iconPlus = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 4v12M4 10h12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const iconCheck = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const services: Service[] = [
  {
    id: 'processos',
    number: '01',
    eyebrow: 'Operação',
    title: 'Processos que fazem sentido',
    text: 'Mapeamos o trabalho real — não o que está no organograma — e desenhamos um fluxo que reduz retrabalho, ruído e dependência de heróis.',
    tags: ['Mapeamento', 'Playbooks', 'Indicadores']
  },
  {
    id: 'automacao',
    number: '02',
    eyebrow: 'Eficiência',
    title: 'Automação que devolve tempo',
    text: 'Tiramos a operação do modo manual com integrações e automações que conectam dados, pessoas e decisões no momento certo.',
    tags: ['RPA', 'Integrações', 'IA aplicada']
  },
  {
    id: 'desenvolvimento',
    number: '03',
    eyebrow: 'Produto digital',
    title: 'Sistemas para o seu jeito de operar',
    text: 'Quando a ferramenta pronta não resolve, construímos a tecnologia que encaixa na sua operação — do MVP ao produto em produção.',
    tags: ['MVPs', 'Dashboards', 'SaaS']
  },
  {
    id: 'softhouse',
    number: '04',
    eyebrow: 'Construção',
    title: 'Uma softhouse dentro do seu time',
    text: 'Squads sob medida para tirar projetos do backlog e colocar novas capacidades para rodar, com visão de negócio e execução técnica.',
    tags: ['Squads', 'Sustentação', 'Evolução']
  }
];

const serviceMarkup = services.map((service, index) => `
  <article class="service-row reveal ${index === 0 ? 'is-open' : ''}" data-service="${service.id}">
    <button class="service-trigger" type="button" aria-expanded="${index === 0}" aria-controls="service-${service.id}">
      <span class="service-number">${service.number}</span>
      <span class="service-heading">
        <span class="eyebrow">${service.eyebrow}</span>
        <span class="service-title">${service.title}</span>
      </span>
      <span class="service-toggle" aria-hidden="true">${iconPlus}</span>
    </button>
    <div class="service-details" id="service-${service.id}" ${index === 0 ? '' : 'hidden'}>
      <div class="service-details-inner">
        <p>${service.text}</p>
        <div class="tag-list">${service.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      </div>
    </div>
  </article>
`).join('');

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('Aplicação não encontrada.');

app.innerHTML = `
  <div class="site-shell">
    <div class="grain" aria-hidden="true"></div>
    <header class="site-header" data-header>
      <a class="wordmark" href="#top" aria-label="Delmack, voltar ao topo">
        <img class="brand-logo" src="/assets/delmack-logo-green.png" alt="Delmack Consultoria" />
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#diagnostico">Diagnóstico</a>
        <a href="#frentes">Frentes</a>
        <a href="#possibilidades">Possibilidades</a>
        <a href="#metodo">Método</a>
        <a href="#contato">Contato</a>
      </nav>
      <a class="header-cta" href="#contato">Falar com a Delmack <span>${iconArrow}</span></a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-toggle><span></span><span></span></button>
    </header>

    <div class="mobile-menu" data-mobile-menu>
      <nav aria-label="Navegação mobile">
        <a href="#diagnostico">Diagnóstico <span>01</span></a>
        <a href="#frentes">Frentes <span>02</span></a>
        <a href="#possibilidades">Possibilidades <span>03</span></a>
        <a href="#metodo">Método <span>04</span></a>
        <a href="#contato">Contato <span>05</span></a>
      </nav>
      <div class="mobile-menu-foot"><span>DEL/WORK · 2026</span><span>Curitiba · Brasil</span></div>
    </div>

    <main id="top">
      <section class="hero section-pad" aria-labelledby="hero-title">
        <div class="hero-grid-bg" aria-hidden="true"></div>
        <div class="hero-copy reveal">
          <div class="eyebrow eyebrow-pill"><span class="status-dot"></span> Consultoria + tecnologia</div>
          <h1 id="hero-title">Sua operação<br /><em>pode ir mais longe.</em></h1>
          <p class="hero-lede">A gente encontra o atrito, desenha o fluxo e coloca para rodar. Do diagnóstico ao código, construímos a operação que o seu crescimento pede.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contato">Destravar minha operação <span>${iconArrow}</span></a>
            <a class="text-link" href="#metodo">Ver como funciona <span>${iconArrow}</span></a>
          </div>
        </div>
        <div class="hero-art reveal" aria-label="Visual abstrato de uma operação conectada">
          <div class="hero-art-top"><span>DEL/OPS–001</span><span>ATIVO <i></i></span></div>
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="orbit-core"><span>GO</span></div>
          <div class="orbit-label label-top">GAP<br /><b>ENCONTRADO</b></div>
          <div class="orbit-label label-right">FLUXO<br /><b>PRONTO</b></div>
          <div class="orbit-label label-bottom">SISTEMA<br /><b>ATIVO</b></div>
          <div class="axis axis-h"></div><div class="axis axis-v"></div>
          <div class="hero-art-bottom"><span>lat 25°25'42" S</span><span>long 49°16'24" W</span></div>
        </div>
        <div class="hero-index"><span>01</span><span class="line"></span><span>06</span></div>
        <div class="scroll-cue"><span class="scroll-line"></span><span>desça para mover</span></div>
      </section>

      <section class="ticker" aria-label="O que a Delmack resolve">
        <div class="ticker-track"><span>menos ruído</span><b>✳</b><span>mais operação</span><b>✳</b><span>menos retrabalho</span><b>✳</b><span>mais clareza</span><b>✳</b><span>menos ruído</span><b>✳</b><span>mais operação</span><b>✳</b></div>
      </section>

      <section class="diagnostic section-pad" id="diagnostico" aria-labelledby="diagnostic-title">
        <div class="section-kicker reveal"><span>02</span><span class="line"></span><span>O diagnóstico</span></div>
        <div class="diagnostic-layout">
          <div class="diagnostic-intro reveal">
            <p class="eyebrow">Antes de escalar, enxergue.</p>
            <h2 id="diagnostic-title">O problema raramente é falta de esforço.</h2>
            <p class="body-large">É uma operação cheia de atalhos, decisões sem dono e ferramentas que não conversam. A Delmack transforma esse emaranhado em um sistema que seu time entende e consegue sustentar.</p>
            <a class="text-link" href="#contato">Quero um olhar de fora <span>${iconArrow}</span></a>
          </div>
          <div class="symptoms reveal">
            <div class="symptoms-top"><span>signal / 04</span><span>diagnóstico inicial</span></div>
            <div class="symptom-item"><span class="symptom-icon">01</span><span>O time trabalha muito, mas o resultado não escala.</span><span class="symptom-status">alerta</span></div>
            <div class="symptom-item"><span class="symptom-icon">02</span><span>Planilhas viraram o sistema mais importante da empresa.</span><span class="symptom-status">alerta</span></div>
            <div class="symptom-item"><span class="symptom-icon">03</span><span>As mesmas tarefas são refeitas em vários lugares.</span><span class="symptom-status">alerta</span></div>
            <div class="symptom-item"><span class="symptom-icon">04</span><span>As decisões chegam antes dos dados — ou depois deles.</span><span class="symptom-status">alerta</span></div>
            <div class="symptoms-bottom"><span>Se você reconheceu 2 ou mais, vamos conversar.</span><span class="pulse-ring"></span></div>
          </div>
        </div>
      </section>

      <section class="services section-pad" id="frentes" aria-labelledby="services-title">
        <div class="section-kicker reveal"><span>03</span><span class="line"></span><span>As frentes</span></div>
        <div class="services-head reveal"><div><p class="eyebrow">Uma parceria sem gavetas.</p><h2 id="services-title">O que precisa ser feito,<br /><em>a gente constrói.</em></h2></div><p class="services-note">Não acreditamos em solução empacotada. Começamos pelo que o negócio precisa — e conectamos estratégia, processo e tecnologia para fazer acontecer.</p></div>
        <div class="service-list">${serviceMarkup}</div>
      </section>

      <section class="possibilities section-pad" id="possibilidades" aria-labelledby="possibilities-title">
        <div class="section-kicker reveal"><span>04</span><span class="line"></span><span>As possibilidades</span></div>
        <div class="possibilities-head reveal"><div><p class="eyebrow">Facilitar também é transformar.</p><h2 id="possibilities-title">Nem toda solução<br /><em>começa no código.</em></h2></div><p class="possibilities-note">Às vezes, o próximo salto está em criar espaço para o time pensar junto, experimentar e encontrar respostas que já existem dentro da empresa.</p></div>
        <div class="possibilities-grid">
          <article class="possibility-card possibility-card-featured reveal"><span class="possibility-index">01 / FACILITAÇÃO</span><div class="possibility-symbol">✳</div><h3>Workshops de IA</h3><p>Do primeiro contato ao uso real: ensinamos seu time a transformar inteligência artificial em ferramenta de trabalho.</p><a href="#contato" class="text-link">Levar IA para o time <span>${iconArrow}</span></a></article>
          <article class="possibility-card reveal"><span class="possibility-index">02 / COCRIAÇÃO</span><div class="possibility-symbol">⌁</div><h3>Design thinking</h3><p>Sessões para entender problemas por outros ângulos e construir soluções com quem vive a operação.</p><a href="#contato" class="possibility-arrow" aria-label="Falar sobre design thinking">${iconArrow}</a></article>
          <article class="possibility-card reveal"><span class="possibility-index">03 / EXPERIMENTO</span><div class="possibility-symbol">↗</div><h3>Hackathons internos</h3><p>Um sprint de energia, repertório e protótipos para tirar boas ideias da conversa e colocar na mesa.</p><a href="#contato" class="possibility-arrow" aria-label="Falar sobre hackathons internos">${iconArrow}</a></article>
          <article class="possibility-card reveal"><span class="possibility-index">04 / ESTRATÉGIA</span><div class="possibility-symbol">◌</div><h3>Facilitação sob medida</h3><p>Dinâmicas, encontros e rituais desenhados para o momento que sua empresa está vivendo agora.</p><a href="#contato" class="possibility-arrow" aria-label="Falar sobre facilitação sob medida">${iconArrow}</a></article>
          <article class="possibility-card reveal"><span class="possibility-index">05 / CAPACITAÇÃO</span><div class="possibility-symbol">＋</div><h3>Cultura de inovação</h3><p>Capacitamos pessoas e lideranças para transformar curiosidade em prática, repertório e movimento.</p><a href="#contato" class="possibility-arrow" aria-label="Falar sobre cultura de inovação">${iconArrow}</a></article>
        </div>
        <div class="possibilities-foot reveal"><span>Não existe uma única porta de entrada.</span><a class="text-link" href="#contato">Encontrar a sua <span>${iconArrow}</span></a></div>
      </section>

      <section class="next-move section-pad" id="proximo-movimento" aria-labelledby="next-move-title">
        <div class="section-kicker reveal"><span>05</span><span class="line"></span><span>Comece por aqui</span></div>
        <div class="next-move-head reveal"><p class="eyebrow">Cada negócio tem um ponto de partida.</p><h2 id="next-move-title">Qual é o seu<br /><em>próximo movimento?</em></h2></div>
        <div class="move-options reveal">
          <button type="button" class="move-option" data-subject="Diagnóstico operacional"><span>01</span><strong>Destravar a operação</strong><small>Encontrar gargalos e organizar o fluxo.</small>${iconArrow}</button>
          <button type="button" class="move-option" data-subject="Workshops de IA"><span>02</span><strong>Levar IA para o time</strong><small>Aprender a usar IA de forma prática.</small>${iconArrow}</button>
          <button type="button" class="move-option" data-subject="Desenvolvimento de sistema"><span>03</span><strong>Tirar uma ideia do papel</strong><small>Construir um produto ou sistema próprio.</small>${iconArrow}</button>
          <button type="button" class="move-option" data-subject="Hackathons internos"><span>04</span><strong>Criar com o próprio time</strong><small>Facilitar um sprint para encontrar soluções.</small>${iconArrow}</button>
          <button type="button" class="move-option" data-subject="Outros"><span>05</span><strong>Ainda não sei</strong><small>Vamos descobrir juntos por onde começar.</small>${iconArrow}</button>
        </div>
      </section>

      <section class="method section-pad" id="metodo" aria-labelledby="method-title">
        <div class="section-kicker light reveal"><span>06</span><span class="line"></span><span>O método</span></div>
        <div class="method-head reveal"><p class="eyebrow">Sem salto de fé.</p><h2 id="method-title">Do primeiro sinal<br />ao <em>próximo nível.</em></h2></div>
        <div class="method-grid">
          <article class="method-step reveal"><span class="step-number">01</span><div class="step-marker">●</div><h3>Raio-X</h3><p>Entendemos a operação no detalhe: pessoas, processos, dados e os pontos onde o crescimento trava.</p><span class="step-label">enxergar</span></article>
          <article class="method-step reveal"><span class="step-number">02</span><div class="step-marker">↗</div><h3>Desenho</h3><p>Transformamos achados em um plano claro, priorizado e possível de executar sem parar o negócio.</p><span class="step-label">decidir</span></article>
          <article class="method-step reveal"><span class="step-number">03</span><div class="step-marker">⌁</div><h3>Construção</h3><p>Colocamos a mão na massa para implementar processos, automações, sistemas e novas rotinas.</p><span class="step-label">fazer</span></article>
          <article class="method-step reveal"><span class="step-number">04</span><div class="step-marker">✳</div><h3>Evolução</h3><p>Medimos, ajustamos e deixamos a capacidade instalada para sua operação seguir avançando.</p><span class="step-label">mover</span></article>
        </div>
      </section>

      <section class="impact section-pad" aria-labelledby="impact-title">
        <div class="section-kicker reveal"><span>07</span><span class="line"></span><span>O impacto</span></div>
        <div class="impact-layout">
          <div class="impact-copy reveal"><p class="eyebrow">Tecnologia com contexto.</p><h2 id="impact-title">Não é sobre ter<br /><em>mais ferramentas.</em></h2><p class="body-large">É sobre tomar decisões melhores, mais rápido. É tirar peso do time e devolver espaço para o que faz o negócio crescer.</p></div>
          <div class="impact-stats reveal"><div class="impact-stat"><strong>10<span>+</span></strong><span>anos de experiência<br />em tecnologia</span></div><div class="impact-stat"><strong>4</strong><span>frentes conectadas<br />ao seu negócio</span></div><div class="impact-stat"><strong>1</strong><span>parceiro para tirar<br />do papel</span></div></div>
        </div>
        <div class="credibility-strip reveal"><span>Delmack em movimento</span><div class="client-list"><span>PIPELINE DE VENDAS</span><span>RH LIZE</span><span>ALUGUE-SE</span><span>TECKPLAST</span><span>ORÇAMENTOS &amp; PEDIDOS</span></div></div>
      </section>

      <section class="contact section-pad" id="contato" aria-labelledby="contact-title">
        <div class="contact-grid-bg" aria-hidden="true"></div>
        <div class="section-kicker light reveal"><span>08</span><span class="line"></span><span>O próximo passo</span></div>
        <div class="contact-layout">
          <div class="contact-copy reveal"><p class="eyebrow">Vamos tirar o peso da operação.</p><h2 id="contact-title">O que está<br /><em>travando aí?</em></h2><p>Conte um pouco do momento da sua empresa. A primeira conversa é direta, sem apresentação pronta e sem compromisso.</p><div class="contact-details"><a href="mailto:delmackconsultoria@gmail.com">delmackconsultoria@gmail.com</a><a href="https://wa.me/5541987818621" target="_blank" rel="noreferrer">+55 (41) 98781-8621 <span>${iconArrow}</span></a></div></div>
          <form class="contact-form reveal" data-contact-form>
            <div class="field-row"><label><span>Seu nome</span><input name="name" type="text" placeholder="Como podemos te chamar?" required /></label><label><span>Seu e-mail</span><input name="email" type="email" placeholder="voce@empresa.com" required /></label></div>
            <div class="field-row"><label><span>Telefone</span><input name="phone" type="tel" placeholder="(00) 00000-0000" minlength="10" required /></label><label><span>Assunto</span><select name="subject" data-subject-select><option value="Diagnóstico operacional">Diagnóstico operacional</option><option value="Consultoria estratégica">Consultoria estratégica</option><option value="Transformação digital">Transformação digital</option><option value="Gestão de projetos">Gestão de projetos</option><option value="Processos e automações">Processos e automações</option><option value="Automações (RPA)">Automações (RPA)</option><option value="Desenvolvimento de sistema">Desenvolvimento de sistema</option><option value="Pipeline de vendas">Pipeline de vendas</option><option value="RH Lize">RH Lize</option><option value="Alugue-se">Alugue-se</option><option value="Gestão de orçamentos e pedidos">Gestão de orçamentos e pedidos</option><option value="Workshops de IA">Workshops de IA</option><option value="Design thinking">Design thinking</option><option value="Hackathons internos">Hackathons internos</option><option value="Facilitação sob medida">Facilitação sob medida</option><option value="Cultura de inovação">Cultura de inovação</option><option value="Softhouse / squad">Softhouse / squad</option><option value="Outros">Outros</option></select></label></div>
            <label class="other-subject-field" data-other-subject hidden><span>Qual assunto?</span><input name="otherSubject" type="text" placeholder="Escreva o que você precisa" /></label>
            <label><span>O que está acontecendo?</span><textarea name="message" rows="4" placeholder="Pode ser em poucas linhas — a gente quer entender o contexto." minlength="10" required></textarea></label>
            <button class="button button-lime" type="submit">Iniciar conversa <span>${iconArrow}</span></button>
            <p class="form-feedback" data-form-feedback role="status"></p>
          </form>
        </div>
      </section>
    </main>

    <footer class="site-footer section-pad"><div class="footer-top"><a class="wordmark" href="#top"><img class="brand-logo" src="/assets/delmack-logo-green.png" alt="Delmack Consultoria" /></a><p>A operação que sua empresa<br />precisa para crescer.</p><a class="footer-back" href="#top">Voltar ao topo <span>↑</span></a></div><div class="footer-bottom"><span>© 2026 Delmack Consultoria</span><span>Curitiba · Brasil</span><span>CNPJ 61.887.193/0001-39</span><span>DEL/WORK</span></div></footer>
  </div>
`;

const header = document.querySelector<HTMLElement>('[data-header]');
const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.toggle('is-open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  document.body.classList.toggle('menu-open', isOpen);
});

document.querySelectorAll<HTMLAnchorElement>('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

document.querySelectorAll<HTMLButtonElement>('.service-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const row = trigger.closest<HTMLElement>('.service-row');
    const details = row?.querySelector<HTMLElement>('.service-details');
    const willOpen = !row?.classList.contains('is-open');
    document.querySelectorAll<HTMLElement>('.service-row').forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector<HTMLButtonElement>('.service-trigger')?.setAttribute('aria-expanded', 'false');
      const panel = item.querySelector<HTMLElement>('.service-details');
      if (panel) panel.hidden = true;
    });
    if (willOpen && row && details) {
      row.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      details.hidden = false;
    }
  });
});

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver?.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }) : null;

document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add('is-visible');
});

const subjectSelect = document.querySelector<HTMLSelectElement>('[data-subject-select]');
const otherSubjectField = document.querySelector<HTMLElement>('[data-other-subject]');
const otherSubjectInput = document.querySelector<HTMLInputElement>('input[name="otherSubject"]');
subjectSelect?.addEventListener('change', () => {
  const isOther = subjectSelect.value === 'Outros';
  if (otherSubjectField) otherSubjectField.hidden = !isOther;
  if (otherSubjectInput) otherSubjectInput.required = isOther;
});

document.querySelectorAll<HTMLButtonElement>('.move-option').forEach((option) => {
  option.addEventListener('click', () => {
    const subject = option.dataset.subject ?? 'Diagnóstico operacional';
    if (subjectSelect) {
      subjectSelect.value = subject;
      subjectSelect.dispatchEvent(new Event('change'));
    }
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => document.querySelector<HTMLInputElement>('input[name="name"]')?.focus(), 650);
  });
});

const contactForm = document.querySelector<HTMLFormElement>('[data-contact-form]');
const formFeedback = document.querySelector<HTMLElement>('[data-form-feedback]');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const subject = String(formData.get('subject') ?? '').trim();
  const otherSubject = String(formData.get('otherSubject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();
  const finalSubject = subject === 'Outros' && otherSubject ? `Outros — ${otherSubject}` : subject;
  const text = [`Olá! Sou ${name}.`, `Assunto: ${finalSubject}.`, `Meu e-mail: ${email}.`, phone ? `Meu telefone: ${phone}.` : '', message ? `Contexto: ${message}` : ''].filter(Boolean).join('\n');
  if (formFeedback) formFeedback.textContent = 'Abrindo o WhatsApp para continuar a conversa...';
  window.open(`${whatsappBase}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});

const anchors = [...document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const id = anchor.getAttribute('href');
    if (!id || id === '#top') return;
    const target = document.querySelector(id);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
