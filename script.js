/* ============================================================
   DATA
   ============================================================ */
const PROJECTS = [
  {
    slug:'wong-metro', num:'01', company:'CENCOSUD PERÚ', name:'Wong &amp; Metro',
    category:'E-commerce · Product Design', platform:'Web + Mobile',
    role:'Diseñadora principal — Wong &amp; Metro (asignación en Cencosud Perú)', period:'2021 — Actualidad',
    desc:'Rediseño y evolución continua de la experiencia de compra en web y app para Wong y Metro (Cencosud Perú), optimizando la navegación, la exploración de productos y el flujo completo de compra.',
    desc2:'El producto evolucionó desde un MVP inicial hacia un ecosistema multicanal en constante crecimiento, incorporando nuevas funcionalidades, servicios y herramientas de autogestión.',
    imgId:'image-wong-metro-hero', imgLabel:'WONG & METRO', imgSub:'Experiencia de compra · Web + App', ratio:'4-5', cover:'images/wong-metro-cover.jpg'
  },
  {
    slug:'fiteo', num:'02', company:'FITEO · SEATTLE, USA', name:'Fiteo',
    category:'Lifestyle · Fashion · E-commerce', platform:'Web + Mobile',
    role:'UX/UI Designer — Consultora', period:'2021 — 2023',
    desc:'Diseño UX/UI de una plataforma lifestyle web y mobile que integra contenido de moda con e-commerce, permitiendo a los usuarios descubrir, guardar y comprar outfits según su estilo y ocasión.',
    desc2:'Participación end-to-end: discovery, entrevistas a usuarios, ideación y validación de soluciones junto al equipo de producto.',
    imgId:'image-fiteo-hero', imgLabel:'FITEO', imgSub:'Discovery, estilo y shopping', ratio:'4-5'
  },
  {
    slug:'globe', num:'03', company:'GLOBE', name:'Globe',
    category:'Remote Talent Platform', platform:'Web · Responsive',
    role:'UX/UI Designer', period:'',
    desc:'Diseño UX/UI de una plataforma de talento remoto centrada en la experiencia de empresas y profesionales, optimizando la creación de perfiles, el descubrimiento de talento y la interacción dentro de un ecosistema de oportunidades laborales.',
    desc2:'',
    imgId:'image-globe-hero', imgLabel:'GLOBE', imgSub:'Empresas y talento remoto', ratio:'4-5'
  }
];

const CASE_STUDIES = {
  'wong-metro': {
    name:'Wong &amp; Metro', next:'fiteo',
    heroTitle:'Rediseñando la experiencia de compra en Wong &amp; Metro',
    heroDesc:'Optimización continua de la experiencia de compra en web y app para dos de las principales plataformas de e-commerce de Cencosud Perú.',
    meta:[
      {l:'Rol', v:'UX/UI Designer'},
      {l:'Producto', v:'E-commerce'},
      {l:'Plataformas', v:'Web + Mobile'},
      {l:'Período', v:'2021 — Actualidad'}
    ],
    scope:'Discovery · Navegación · Checkout · Post-compra · Fidelización',
    heroImg:{id:'image-wong-hero-full', label:'WONG & METRO', sub:'Hero — plataformas web y mobile', ratio:'21-9', src:'images/wong-metro-hero.jpg', alt:'Rediseñando la experiencia: Wong y Metro, web y app'},
    sections:[
      { side:true, eyebrow:'CONTEXTO', title:'Dos marcas, un ecosistema en evolución',
        body:['Wong y Metro son dos de las plataformas de supermercado más importantes de Perú, ambas parte de Cencosud. Comparten una estructura de negocio similar, pero cada marca tiene su propio posicionamiento y su propia audiencia, con necesidades que no siempre coinciden.',
              'Es un proyecto que nunca "termina": el producto evoluciona de forma iterativa, sumando funcionalidades y mejoras release tras release.'],
        images:[{id:'image-wong-context', label:'WONG & METRO', sub:'Contexto de marca', ratio:'16-10', src:'images/wong-metro-personas.jpg', alt:'User personas: Valeria y Marcos, compradores de Wong y de Metro'}] },
      { side:true, imgFirst:true, eyebrow:'EL DESAFÍO', title:'Escalar una experiencia, no rediseñar pantallas',
        body:['El desafío nunca fue rediseñar pantallas sueltas. Era sostener y hacer crecer una experiencia de supermercado compleja —catálogos enormes, múltiples plataformas, distintos medios de pago, delivery, gestión de pedidos, post-compra, fidelización y dos marcas con identidad propia— sin perder consistencia ni escalabilidad entre Wong y Metro.'],
        images:[{id:'image-wong-challenge', label:'WONG & METRO', sub:'Complejidad del ecosistema', ratio:'16-10'}] },
      { side:true, eyebrow:'COLABORACIÓN', title:'Un proceso que se sostiene en equipo',
        body:['Ningún flujo se diseña en soledad. Trabajo codo a codo con Producto, Tecnología y Negocio para que cada decisión tenga sentido tanto para quien usa el producto como para el negocio.',
              'Con los stakeholders defino objetivos, con los Product Owners priorizo el backlog, y junto al analista funcional valido soluciones y dejo la documentación lista para desarrollo.',
              'Durante la implementación sigo de cerca a desarrollo y QA, para que lo que diseñé llegue así, tal cual, al producto final.'],
        images:[{id:'image-wong-collab', label:'WONG & METRO', sub:'Proceso colaborativo', ratio:'4-3'}] },
      { side:true, imgFirst:true, eyebrow:'A — BÚSQUEDA Y DESCUBRIMIENTO', title:'Distintas formas de encontrar un producto',
        body:['La búsqueda fue mutando para adaptarse al momento de cada usuario: en app sumamos búsqueda por voz, por imagen y multi-producto, y en web trabajamos sugerencias dinámicas y predictivas basadas en preferencias.'],
        images:[{id:'image-wong-search-app', label:'WONG & METRO', sub:'Búsqueda — app y web', ratio:'16-10'}] },
      { side:true, eyebrow:'B — EXPLORACIÓN DE PRODUCTO', title:'Categorías, listado y ficha de producto',
        body:['El sistema de exploración cubre categorías, listado de productos (PLP), ficha de producto (PDP) y toda la información que ayuda a decidir una compra, cuidando que la navegación se sienta consistente entre ambas marcas.'],
        images:[{id:'image-wong-plp', label:'WONG & METRO', sub:'Listado y ficha de producto', ratio:'16-10'}] },
      { side:true, imgFirst:true, eyebrow:'C — CHECKOUT Y PAGOS', title:'Más formas de pagar, mismo estándar de claridad',
        body:['El checkout fue sumando formas de pago sin perder claridad: pago online, pago contra entrega y la integración de Yape vía QR, tanto en web como en app.'],
        images:[{id:'image-wong-checkout', label:'WONG & METRO', sub:'Checkout y pago con Yape', ratio:'16-10'}] },
      { side:true, eyebrow:'D — POST-COMPRA', title:'La experiencia continúa después del pago',
        body:['Sumamos herramientas de seguimiento y autogestión para dar más visibilidad y control sobre los pedidos en curso: notificaciones push y la posibilidad de modificar dirección o tienda, destinatario y productos, dentro de lo que permite cada etapa del pedido.'],
        images:[{id:'image-wong-tracking', label:'WONG & METRO', sub:'Seguimiento y gestión de pedido', ratio:'16-10'}] },
      { side:true, imgFirst:true, eyebrow:'E — PRIME', title:'Suscripción y beneficios',
        body:['Trabajé junto a equipos regionales de Cencosud en el diseño de la membresía Prime: estados de usuario, medios de pago, cupones y beneficios asociados.'],
        images:[{id:'image-wong-prime', label:'WONG & METRO', sub:'Prime — suscripción y beneficios', ratio:'16-10'}] }
    ],
    impact:[
      {t:'Evolución de producto', d:'De un MVP inicial a un ecosistema multicanal en crecimiento constante, sumando funcionalidades de forma iterativa.'},
      {t:'Consistencia multicanal', d:'Una base de diseño compartida entre Wong, Metro, web y app que permite escalar sin perder coherencia de marca.'},
      {t:'Nuevas capacidades', d:'Búsqueda avanzada, nuevos medios de pago y herramientas de autogestión post-compra, incorporadas de forma iterativa.'},
      {t:'Escalabilidad operativa', d:'Participación en iniciativas de innovación orientadas a optimizar procesos internos y ampliar el ecosistema digital.'}
    ],
    learnings:'Diseñar para un producto que nunca deja de evolucionar te obliga a balancear, en cada iteración, lo que necesitan las personas usuarias, los objetivos de negocio y lo que es técnicamente viable. Trabajar en paralelo sobre dos marcas y varios canales me confirmó algo: los sistemas escalables solo funcionan si hay una colaboración cercana y constante con Producto, el equipo funcional, Desarrollo y QA a lo largo de todo el ciclo.'
  },
  'fiteo': {
    name:'Fiteo', next:'globe',
    heroTitle:'Moda y e-commerce en una sola experiencia',
    heroDesc:'Diseño UX/UI de una plataforma lifestyle que integra contenido de moda con e-commerce, para descubrir, guardar y comprar outfits según estilo y ocasión.',
    meta:[
      {l:'Rol', v:'UX/UI Designer — Consultora'},
      {l:'Producto', v:'Lifestyle · Fashion · E-commerce'},
      {l:'Plataformas', v:'Web + Mobile'},
      {l:'Período', v:'2021 — 2023'}
    ],
    scope:'Discovery · Research · Ideación · Validación · UX/UI',
    heroImg:{id:'image-fiteo-hero-full', label:'FITEO', sub:'Hero — plataforma web y mobile', ratio:'21-9'},
    sections:[
      { eyebrow:'CONTEXTO', title:'Un equipo pequeño, un producto ambicioso',
        body:['Fiteo es una plataforma lifestyle con sede en Seattle que mezcla contenido editorial de moda con e-commerce. Entré como parte de un equipo de diseño de solo dos personas, así que trabajaba codo a codo con Producto e Ingeniería en cada decisión.'],
        images:[{id:'image-fiteo-context', label:'FITEO', sub:'Contexto del producto', ratio:'16-10'}] },
      { eyebrow:'EL DESAFÍO', title:'Conectar descubrimiento de estilo con compra',
        body:['El reto era diseñar un flujo de compra pensado en outfits completos —no en productos sueltos— para que la persona pudiera pasar de "me gusta este look" a comprarlo sin fricción, sea cual sea su estilo u ocasión.'],
        images:[{id:'image-fiteo-challenge', label:'FITEO', sub:'Desafío de producto', ratio:'16-10'}] },
      { eyebrow:'DISCOVERY', title:'Entender antes de diseñar',
        body:['Arrancamos con una etapa de discovery para entender cómo compra moda la gente, cómo descubre su propio estilo y qué esperaba de una plataforma que mezcla contenido y compra.'],
        images:[{id:'image-fiteo-discovery', label:'FITEO', sub:'Discovery', ratio:'16-10'}] },
      { eyebrow:'ENTREVISTAS Y RESEARCH', title:'Escuchar a quienes van a usar el producto',
        body:['Hice entrevistas para entender cómo la gente arma y guarda sus outfits, qué información necesita para animarse a comprar y qué fricciones encontraba en otras experiencias de moda.'],
        images:[{id:'image-fiteo-interviews', label:'FITEO', sub:'Entrevistas a usuarios', ratio:'16-10'}] },
      { eyebrow:'IDEACIÓN Y FLUJOS', title:'De insights a flujos de producto',
        body:['Con esos hallazgos armamos los flujos principales —descubrir outfits, guardar looks y comprar— pensando en las particularidades de moda tanto en web como en mobile.'],
        images:[{id:'image-fiteo-user-flow', label:'FITEO', sub:'Flujos de usuario', ratio:'16-10'},
                {id:'image-fiteo-wireframes', label:'FITEO', sub:'Wireframes', ratio:'16-10'}] },
      { eyebrow:'VALIDACIÓN', title:'Poner a prueba las decisiones de diseño',
        body:['Cada propuesta se validó de forma iterativa con el equipo y con usuarios reales, ajustando la solución antes de pasar a la interfaz final.'],
        images:[{id:'image-fiteo-validation', label:'FITEO', sub:'Validación', ratio:'16-10'}] },
      { eyebrow:'SOLUCIÓN Y UI FINAL', title:'Una experiencia coherente entre contenido y compra',
        body:['El resultado integra navegación por estilo y ocasión, guardado de outfits y un flujo de compra directo, con una identidad visual consistente entre el contenido editorial y la parte transaccional, en web y mobile.'],
        images:[{id:'image-fiteo-final-ui', label:'FITEO', sub:'UI final', ratio:'16-10'},
                {id:'image-fiteo-mobile', label:'FITEO', sub:'Mobile', ratio:'3-4'}] },
      { eyebrow:'DESKTOP', title:'Adaptación a escritorio',
        body:['La experiencia se adaptó a escritorio sin perder la lógica de descubrimiento y compra, aprovechando la mayor superficie visual del formato.'],
        images:[{id:'image-fiteo-desktop', label:'FITEO', sub:'Desktop', ratio:'16-10'}] }
    ],
    impact:[
      {t:'Discovery aplicado', d:'Decisiones de diseño sustentadas en entrevistas y research directo con usuarios, no en suposiciones.'},
      {t:'Producto end-to-end', d:'Participación desde la investigación inicial hasta la entrega de la interfaz final.'}
    ],
    learnings:'Trabajar en un equipo de diseño chico me reforzó algo clave: el research tiene que ser la base de cada decisión, y hay que iterar rápido entre ideación, validación y entrega, sobre todo cuando los recursos son acotados, como suele pasar en una startup.'
  },
  'globe': {
    name:'Globe', next:'wong-metro',
    heroTitle:'Talento remoto, del perfil al match',
    heroDesc:'Diseño UX/UI de una plataforma de talento remoto centrada en la experiencia de empresas y profesionales.',
    meta:[
      {l:'Rol', v:'UX/UI Designer'},
      {l:'Producto', v:'Remote Talent Platform'},
      {l:'Plataforma', v:'Web · Responsive'},
      {l:'Período', v:'—'}
    ],
    scope:'Arquitectura de información · Flujos · UI',
    heroImg:{id:'image-globe-hero-full', label:'GLOBE', sub:'Hero — plataforma web responsive', ratio:'21-9'},
    sections:[
      { eyebrow:'CONTEXTO Y PROBLEMA', title:'Dos audiencias, un mismo ecosistema',
        body:['Globe conecta empresas que buscan talento remoto con profesionales que ofrecen sus servicios. El desafío era diseñar una experiencia que funcionara bien para los dos perfiles dentro del mismo sistema, sin que ninguno se sintiera la audiencia secundaria.'],
        images:[{id:'image-globe-context', label:'GLOBE', sub:'Contexto y problema', ratio:'16-10'}] },
      { eyebrow:'TIPOS DE USUARIO', title:'Empresas y profesionales',
        body:['Definimos dos tipos de usuario con objetivos bien distintos: empresas que buscan encontrar y evaluar talento, y profesionales que quieren mostrar su perfil y acceder a oportunidades. Cada uno necesitaba su propia lógica de navegación.'],
        images:[{id:'image-globe-user-types', label:'GLOBE', sub:'Tipos de usuario', ratio:'16-10'}] },
      { eyebrow:'ARQUITECTURA DE INFORMACIÓN', title:'Organizar un ecosistema de oportunidades',
        body:['Pensamos la arquitectura de información para sostener la creación de perfiles, la exploración de talento u oportunidades y la interacción entre ambas partes, cuidando que cada etapa del recorrido se sintiera clara.'],
        images:[{id:'image-globe-ia', label:'GLOBE', sub:'Arquitectura de información', ratio:'16-10'}] },
      { eyebrow:'FLUJO DE EMPRESAS', title:'Descubrir y evaluar talento',
        body:['El flujo de empresas apunta a descubrir talento, evaluar perfiles y avanzar hacia una contratación, optimizando cada paso en el camino.'],
        images:[{id:'image-globe-company-flow', label:'GLOBE', sub:'Flujo — empresas', ratio:'16-10'}] },
      { eyebrow:'FLUJO DE TALENTO', title:'Mostrar el perfil profesional',
        body:['Del lado de los profesionales, el foco está en crear y mostrar un buen perfil, y en acceder a oportunidades dentro del ecosistema de la plataforma.'],
        images:[{id:'image-globe-talent-flow', label:'GLOBE', sub:'Flujo — talento', ratio:'16-10'}] },
      { eyebrow:'PERFILES Y MATCHING', title:'De la información al encuentro',
        body:['El diseño de perfiles y del sistema de matching busca que empresas y profesionales encuentren la contraparte correcta, priorizando la información que realmente ayuda a decidir.'],
        images:[{id:'image-globe-profile-ui', label:'GLOBE', sub:'UI de perfil', ratio:'3-4'},
                {id:'image-globe-matching-ui', label:'GLOBE', sub:'UI de matching', ratio:'3-4'}] },
      { eyebrow:'CONTRATACIÓN Y PAGOS', title:'Cerrar el ciclo dentro de la plataforma',
        body:['Diseñé el flujo de contratación y pagos para que empresas y profesionales pudieran cerrar todo el ciclo —desde el acuerdo inicial hasta el pago— sin salir del ecosistema de Globe.'],
        images:[{id:'image-globe-payments-ui', label:'GLOBE', sub:'UI de pagos', ratio:'16-10'}] },
      { eyebrow:'UI FINAL', title:'Un sistema visual para dos audiencias',
        body:['La interfaz final mantiene un lenguaje visual consistente para las dos audiencias, adaptando la composición según las necesidades de cada flujo.'],
        images:[{id:'image-globe-final-ui', label:'GLOBE', sub:'UI final', ratio:'16-10'}] }
    ],
    impact:[
      {t:'Pensamiento de producto complejo', d:'Diseñar un sistema con dos audiencias y objetivos distintos, conviviendo dentro del mismo ecosistema.'},
      {t:'Arquitectura escalable', d:'Una estructura de información pensada para crecer junto con los perfiles y las oportunidades.'}
    ],
    learnings:'Diseñar para dos tipos de usuario dentro de la misma plataforma exige una arquitectura de información muy cuidada, para que cada audiencia encuentre su camino sin que el sistema pierda coherencia.'
  }
};

const TESTIMONIALS = [
  { name:'Ana Barrios Marchán', role:'Analista Funcional en Coderio | Liderazgo de equipos, Ejecución de proyectos', relationship:'Ana trabajó con Maria Carolina en el mismo equipo.', date:'9 de septiembre de 2026', photo:'images/img-01-fc93d226.jpg',
    quote:'"Trabajé con Carolina en distintos proyectos de producto y puedo recomendarla sin dudarlo. Es una profesional integral que combina muy buenas habilidades blandas con una sólida capacidad técnica en la creación de productos digitales. Se destaca por su organización y su fuerte sentido de ownership: cada proyecto que lidera lo sigue de principio a fin con total responsabilidad. Tiene además una gran capacidad de adaptación para trabajar con diferentes equipos bajo metodologías ágiles, integrándose rápido y aportando valor desde el primer momento."' },
  { name:'Juan Pablo Artigas', role:'Insights Practitioner | Market Research Expert & Professor | Passionate about lifelong learning & innovation', relationship:'Juan Pablo supervisaba directamente a Maria Carolina.', date:'16 de mayo de 2026', photo:'images/img-02-d376ec19.jpg',
    quote:'"Tuve el placer de trabajar con Carolina hace unos años en Kantar, coordinando de cerca sus tareas del día a día. Durante ese tiempo, Caro demostró ser una profesional excepcionalmente dedicada, responsable y con una gran atención al detalle en cada proyecto que se le asignaba. Además de su sólido compromiso técnico, su calidad humana hace que trabajar con ella sea un verdadero gusto. La recomiendo sin dudarlo para cualquier equipo que busque talento y confiabilidad."' },
  { name:'Gisela Olmedo', role:'Brand Director · Especialista en Consumer Insights · Investigación de Mercado · Análisis de Datos y Comportamiento del Consumidor · Data Storytelling', relationship:'Gisela supervisó directamente a Maria Carolina.', date:'14 de mayo de 2026', photo:'images/img-03-dd867a45.jpg',
    quote:'"Una de las grandes fortalezas de Caro es el trabajo en equipo. Su compromiso y responsabilidad para lograr los objetivos es impecable. Más valioso aún: siempre dispuesta con una sonrisa a dar lo mejor, a aprender y a enseñar. En mi equipo fue un eslabón muy valioso para llegar a clientes con un delivery perfecto. Caro además es curiosa y activa. Propone formas alternativas y más eficientes cuando los tiempos son escasos. Trabajar con ella fue un gran placer."' },
  { name:'Sergey Podlazov', role:'Engineering Leader — Chewy Advertising', relationship:'Sergey supervisó directamente a Maria Carolina.', date:'28 de julio de 2023', photo:'images/img-04-6ca9fa79.jpg',
    quote:"\"I had an opportunity to work with Maria for about a year. As a member of a 2-person design team, Maria designed an end-to-end experience for an outfit-based shopping portal. She was easy to work with, came up with great ideas, and impressed me with her design skills. I wouldn't hesitate to recommend Maria to anyone who is looking for a mid-level UX designer.\"" }
];

/* ============================================================
   PLACEHOLDER COMPONENT
   ============================================================ */
function ph(id, label, sub, ratio){
  ratio = ratio || '16-10';
  return `<div class="placeholder placeholder-ratio-${ratio} reveal-img" data-reveal>
    <span class="placeholder-tag">${ratio.replace('-',':')}</span>
    <div class="placeholder-body">
      <div class="placeholder-label">${label}</div>
      <div class="placeholder-sublabel">${sub}</div>
    </div>
    <span class="placeholder-id">${id}</span>
  </div>`;
}

function phMotion(id, label, sub, ratio){
  ratio = ratio || '3-4';
  return `<div class="placeholder placeholder-motion placeholder-ratio-${ratio} reveal-img" data-reveal>
    <svg class="motion-svg" viewBox="0 0 300 375" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id="blurA-${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="16"/></filter>
        <filter id="blurB-${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>
      <ellipse cx="172" cy="238" rx="66" ry="152" fill="#171717" opacity="0.14" filter="url(#blurA-${id})"/>
      <ellipse cx="150" cy="226" rx="58" ry="150" fill="#171717" opacity="0.26" filter="url(#blurA-${id})"/>
      <ellipse cx="132" cy="220" rx="48" ry="146" fill="#171717" opacity="0.40" filter="url(#blurB-${id})"/>
      <ellipse cx="147" cy="118" rx="35" ry="42" fill="#171717" opacity="0.30" filter="url(#blurB-${id})"/>
      <line x1="34" y1="92" x2="234" y2="68" stroke="#E2371F" stroke-width="2" opacity="0.32"/>
    </svg>
    <span class="placeholder-tag">${ratio.replace('-',':')}</span>
    <div class="placeholder-body">
      <div class="placeholder-label">${label}</div>
      <div class="placeholder-sublabel">${sub}</div>
    </div>
    <span class="placeholder-id">${id}</span>
  </div>`;
}

/* ============================================================
   HOME RENDER
   ============================================================ */
function renderHome(){
  const projectRows = PROJECTS.map((p)=>`
    <article class="project-card ui-card reveal" data-reveal onclick="Router.go('projects/${p.slug}')" tabindex="0" role="link" aria-label="Ver caso de estudio: ${p.name}" onkeydown="if(event.key==='Enter')Router.go('projects/${p.slug}')">
      <div class="project-card-head"><h3 class="ui-card-title">${p.name}</h3><span class="project-card-company">${p.company}</span></div>
      <div class="ui-card-divider"></div>
      <div class="ui-card-text">${p.category} · ${p.platform}</div>
      <div class="project-card-media">
        ${p.cover ? `<img class="project-card-cover" src="${p.cover}" alt="${p.name}: web y app" loading="lazy">` : ph(p.imgId, p.imgLabel, p.imgSub, p.ratio)}
        <a href="#" class="project-card-btn" onclick="event.stopPropagation();Router.go('projects/${p.slug}');return false;">Ver más</a>
      </div>
    </article>
  `).join('');

  const innovationItems = [
    {n:'01', t:'Supervisión de pedidos', tag:'IA', d:'Herramienta interna para el equipo de supervisión que audita pedidos ya empacados. Un modelo de IA calcula el riesgo de error de cada pedido y <strong>prioriza automáticamente los casos que requieren revisión manual</strong>, optimizando el tiempo de control de calidad sin perder precisión operativa.', imgId:'image-innovation-ai-order', imgLabel:'SUPERVISIÓN DE PEDIDOS', imgSub:'Panel de supervisión', img:'images/img-05-581ddba2.jpg'},
    {n:'02', t:'CMS', tag:'Control', d:'Diseño de un CMS interno que centraliza la gestión de contenido del sitio de e-commerce. <strong>Le da autonomía al equipo de marketing para publicar banners, campañas y categorías sin depender de desarrollo.</strong>', imgId:'image-innovation-cms', imgLabel:'CMS', imgSub:'Panel de gestión de contenido', img:'images/img-06-d849ddd1.jpg'},
    {n:'03', t:'Backoffice', tag:'Flow', d:'Mejora continua de la UX/UI de las herramientas operativas de backoffice, con foco en <strong>reducir la fricción de tareas repetitivas</strong> y elevar la eficiencia del equipo interno día a día.', imgId:'image-innovation-backoffice', imgLabel:'BACKOFFICE', imgSub:'Herramienta operativa', img:'images/img-07-60b68604.jpg'},
    {n:'04', t:'Restaurante Wong', tag:'Autoservicio', d:'Diseño de un kiosco de autoservicio para el área de restaurante de tiendas Wong: un flujo end-to-end para explorar el menú, seleccionar productos, definir preferencias, ordenar y pagar. <strong>Pensado para reducir tiempos de espera y liberar al staff para otras tareas.</strong>', imgId:'image-innovation-wong-restaurant', imgLabel:'WONG RESTAURANT', imgSub:'Kiosco de autoservicio', img:'images/img-08-3640a3c1.jpg'},
    {n:'05', t:'Expovino', tag:'Evento', d:'Kiosco interactivo diseñado para el evento anual Expovino de Wong: un flujo que permite escanear vinos, explorar y seleccionar productos, armar la compra y coordinar el delivery a domicilio. <strong>Una experiencia diseñada para un evento presencial de alto tráfico, sin fricción en el punto de interacción.</strong>', imgId:'image-innovation-expovino', imgLabel:'EXPOVINO', imgSub:'Kiosco interactivo', img:'images/img-09-2a3a97b4.jpg'},
    {n:'06', t:'Venta Empresas', tag:'GiftCard', d:'Diseño de una experiencia B2B de e-commerce para tarjetas de regalo corporativas: selección de paquetes, personalización de diseño, definición de cantidades y checkout para colaboradores. <strong>Incluye un panel de gestión donde la empresa compradora monitorea el uso de las tarjetas emitidas.</strong>', imgId:'image-innovation-venta-empresas', imgLabel:'VENTA EMPRESAS', imgSub:'Tarjetas de regalo B2B', img:'images/img-10-b8499f11.jpg'},
    {n:'07', t:'B2B Metro', tag:'Mayorista', d:'Ideación y diseño de una experiencia B2B adaptada a proveedores y ventas mayoristas de Metro. <strong>Un flujo pensado desde cero para las necesidades de compra corporativa, distintas a las del consumidor final.</strong>', imgId:'image-innovation-b2b-metro', imgLabel:'B2B METRO', imgSub:'Portal de proveedores', img:'images/img-11-34689bb4.jpg'}
  ];
  const innovationHtml = innovationItems.map(it=>`
    <div class="innovation-item ui-card reveal" data-reveal>
      <div class="innovation-text">
        <div class="ui-card-num">${it.n}</div>
        <div class="innovation-item-head">
          <h4 class="ui-card-title">${it.t}</h4>
          <span class="innovation-sticker">${it.tag}</span>
        </div>
        <div class="ui-card-divider"></div>
        <p class="innovation-desc ui-card-text">${it.d}</p>
      </div>
      <div class="innovation-img">${it.img ? `<img src="${it.img}" alt="${it.imgLabel}" loading="lazy" class="zoomable-img" onclick="Lightbox.open('${it.img}','${it.imgLabel}')">` : ph(it.imgId, it.imgLabel, it.imgSub, '16-10')}</div>
    </div>`).join('') + `
    <div class="innovation-item ui-card reveal" data-reveal>
      <div class="innovation-text">
        <div class="ui-card-num">08</div>
        <div class="innovation-item-head">
          <h4 class="ui-card-title">E-commerce</h4>
          <span class="innovation-sticker">Pronto</span>
        </div>
        <div class="ui-card-divider"></div>
        <p class="innovation-desc ui-card-text">Actualmente participo en el diseño de una nueva experiencia e-commerce dentro del ecosistema Wong. <strong>Todavía en fase de diseño — más detalles, próximamente.</strong></p>
      </div>
      <div class="innovation-img"><div class="build-anim" role="img" aria-label="Animación de una pantalla de e-commerce que se está diseñando">
        <div class="build-screen">
          <div class="b-bar"><span></span><span></span><span></span><em></em></div>
          <div class="b-hero"></div>
          <div class="b-line b-l1"></div><div class="b-line b-l2"></div><div class="b-line b-l3"></div>
          <div class="b-btn"></div>
          <div class="b-card b-c1"></div><div class="b-card b-c2"></div><div class="b-card b-c3"></div>
          <svg class="b-cursor" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 8-6 1.6L10 19z"/></svg>
        </div>
        <span class="b-status">Diseñando<i>.</i><i>.</i><i>.</i></span>
      </div></div>
    </div>`;

  const processSteps = [
    {n:'01', t:'Entender', tags:['Stakeholders','Requerimientos de negocio','Contexto']},
    {n:'02', t:'Explorar', tags:['Research','Datos','Experiencia existente','Oportunidades']},
    {n:'03', t:'Definir', tags:['User flows','Arquitectura','Requerimientos','Hipótesis']},
    {n:'04', t:'Diseñar', tags:['Wireframes','Interacción','Prototipo','UI']},
    {n:'05', t:'Validar', tags:['Usuarios','Stakeholders','Viabilidad técnica']},
    {n:'06', t:'Entregar', tags:['Documentación','Handoff','Desarrollo']},
    {n:'07', t:'QA', tags:['Revisión de implementación','Validación UX/UI']},
    {n:'08', t:'Iterar', tags:['Feedback','Datos','Nuevos requerimientos']}
  ];
  const processHtml = processSteps.map(s=>`
    <div class="process-item reveal" data-reveal>
      <div class="process-item-head">
        <span class="process-step-num">${s.n}</span>
        <h4 class="process-step-title">${s.t}</h4>
      </div>
      <div class="process-step-tags">${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </div>`).join('');

  const edu = [
    {y:'2026', n:'Accesibilidad', i:'Educación IT'},
    {y:'2025', n:'Inteligencia Artificial y Productividad', i:'Educación IT'},
    {y:'2025', n:'Design Systems', i:'Repensar'},
    {y:'2023', n:'Product Design', i:'Edison'},
    {y:'2023', n:'UX/UI Design', i:'UTN FRBA'},
    {y:'2021', n:'Web Development', i:'Coderhouse'},
    {y:'2014', n:'Diseño Gráfico', i:'Iditec'},
    {y:'2012', n:'Comunicación y Diseño Visual', i:'Dr. Graphic'}
  ];
  const eduIcons = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12.5l2.5 2.5L16 9"/><circle cx="12" cy="12" r="9"/></svg>',
    '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2c.6 3.2 1.6 4.2 4.8 4.8-3.2.6-4.2 1.6-4.8 4.8-.6-3.2-1.6-4.2-4.8-4.8C10.4 6.2 11.4 5.2 12 2z"/><path d="M19 13c.3 1.6.8 2.1 2.4 2.4-1.6.3-2.1.8-2.4 2.4-.3-1.6-.8-2.1-2.4-2.4 1.6-.3 2.1-.8 2.4-2.4z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/></svg>',
    '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M6 3l14 8-6 1.3L11 19z"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4"/><path d="M20 9.5v5"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><path d="M8.1 10.8 15.9 7.2M8.1 13.2l7.8 3.6"/></svg>'
  ];
  const eduCircleColors = [
    {bg:'var(--yellow)', fg:'var(--ink)'},
    {bg:'var(--yellow-deep)', fg:'var(--ink)'},
    {bg:'var(--ink)', fg:'var(--yellow)'}
  ];
  const eduHtml = edu.map((e,i)=>{
    const c = eduCircleColors[i % eduCircleColors.length];
    return `
    <div class="edu-item">
      <div class="edu-icon" style="background:${c.bg}; color:${c.fg};">${eduIcons[i % eduIcons.length]}</div>
      <div>
        <div class="edu-name">${e.n}</div>
        <div class="edu-inst">${e.i}</div>
        <div class="edu-year">${e.y}</div>
      </div>
    </div>`;
  }).join('');

  const tools = ['Figma','Sketch','Miro','Maze','Hotjar','Optimal Workshop','Google Analytics','Notion','Trello','Jira','Confluence','Zeplin','Storybook','ChatGPT','Claude','Gemini','Figma AI','Dovetail','Uizard'];
  const marqueeSet = tools.map(t=>`<span><em>·</em>${t}</span>`).join('');

  const testimonialsHtml = TESTIMONIALS.map((t,i)=>`
    <div class="testi-card ui-card testi-card-${i+1}">
      <div class="testi-card-head">
        <div class="testi-avatar">${t.photo ? `<img src="${t.photo}" alt="${t.name}">` : t.name.split(' ').map(n=>n[0]).join('')}</div>
        <div>
          <div class="ui-card-title testi-name">${t.name}</div>
          <div class="ui-card-text testi-role">${t.role} · ${t.relationship}</div>
        </div>
      </div>
      <div class="ui-card-divider"></div>
      <p class="testi-quote ui-card-text">${t.quote}</p>
    </div>`).join('');

  document.getElementById('app').innerHTML = `
  <!-- HERO -->
  <section class="hero wrap" id="top">
    <div class="hero-grid">
      <div class="hero-text">
        <h1 class="display-xxl hero-name reveal" data-reveal><span id="heroTw1"></span><img class="hero-inline-photo" id="heroPhoto" alt="Carolina Soto" src="images/img-12-63110801.png"><span id="heroTw2"></span><span class="typewriter-cursor">|</span></h1>
        <span class="section-sticker sticker-a sticker-hero">No soy un bot 🤖</span>
        <p class="body-lg reveal" data-reveal style="margin-top:20px; max-width:48ch;">Diseño productos digitales intuitivos que conectan las necesidades de las personas con los objetivos del negocio.</p>

        <div class="hero-meta-row reveal" data-reveal>
          <div class="hero-meta-item">
            <span style="font-size:15px;font-weight:500;">Argentina · LATAM</span>
          </div>
          <div class="hero-meta-item hero-status">
            <span class="status-online" style="font-size:15px;font-weight:500;"><span class="status-dot" aria-hidden="true"></span>Online · Disponible para trabajar</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section class="section-pad divider" id="sobre-mi">
    <div class="wrap about-grid">
      <div>
        <div class="section-heading about-sticker-row"><h2 class="sr-only">Sobre mí</h2><span class="section-sticker sticker-b sticker-alt sticker-static sticker-on-card">Mi trayectoria en 3 números 😏</span></div>
        <p class="body-lg about-copy reveal" data-reveal style="max-width:62ch;">Mi trabajo vive donde se cruzan las personas, el negocio y la tecnología. Diseño productos digitales de punta a punta —discovery, research, UI, validación, handoff— buscando siempre soluciones claras y escalables.</p>
        <p class="body-md about-copy reveal" data-reveal style="margin-top:16px;">Hoy combino Product Design, Design Systems e IA para explorar nuevas formas de crear productos y optimizar procesos.</p>
      </div>
      <div class="stats-grid reveal" data-reveal>
        <div class="stat-card ui-card">
          <div class="stat-num-row"><div class="stat-num ui-card-num">5+</div><div class="years-anim" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
          <div class="stat-title ui-card-title">Años de experiencia</div>
          <div class="stat-divider ui-card-divider"></div>
          <div class="stat-content ui-card-text">Creando productos digitales y +10 años como Diseñadora Gráfica.</div>
        </div>
        <div class="stat-card ui-card">
          <div class="stat-num-row"><div class="stat-num ui-card-num">17+</div><div class="folders-anim" aria-hidden="true"><span><svg viewBox="0 0 32 24" aria-hidden="true"><path d="M2 5a2 2 0 0 1 2-2h8l3 3h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/></svg></span><span><svg viewBox="0 0 32 24" aria-hidden="true"><path d="M2 5a2 2 0 0 1 2-2h8l3 3h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/></svg></span><span><svg viewBox="0 0 32 24" aria-hidden="true"><path d="M2 5a2 2 0 0 1 2-2h8l3 3h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/></svg></span><span><svg viewBox="0 0 32 24" aria-hidden="true"><path d="M2 5a2 2 0 0 1 2-2h8l3 3h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/></svg></span><span><svg viewBox="0 0 32 24" aria-hidden="true"><path d="M2 5a2 2 0 0 1 2-2h8l3 3h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/></svg></span></div></div>
          <div class="stat-title ui-card-title">Proyectos</div>
          <div class="stat-divider ui-card-divider"></div>
          <div class="stat-tags">
            <span class="stat-tag">E-commerce</span><span class="stat-tag">·</span>
            <span class="stat-tag">SaaS</span><span class="stat-tag">·</span>
            <span class="stat-tag">Fintech</span><span class="stat-tag">·</span>
            <span class="stat-tag">Gaming</span><span class="stat-tag">·</span>
            <span class="stat-tag">B2B</span><span class="stat-tag">·</span>
            <span class="stat-tag">B2C</span><span class="stat-tag">·</span>
            <span class="stat-tag">Autoservicio</span>
          </div>
        </div>
        <div class="stat-card ui-card">
          <div class="stat-num-row"><div class="stat-num ui-card-num" data-stat="usuarios-impactados">2,3M+</div><div class="people-anim" aria-hidden="true"><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span></div></div>
          <div class="stat-title ui-card-title">Usuarios impactados</div>
          <div class="stat-divider ui-card-divider"></div>
          <div class="stat-content ui-card-text">En todo el ecosistema digital de Cencosud Perú: Wong, Metro y más.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SELECTED WORK -->
  <section class="section-pad divider" id="proyectos">
    <div class="wrap">
      <div class="projects-head reveal" data-reveal style="position:relative;">
        <span class="section-sticker sticker-c sticker-static sticker-by-copy">Favoritos, no me juzguen 😏</span>
        <div>
          <h2 class="display-lg">Proyectos<br>seleccionados</h2>
        </div>
        <p class="body-md">Un recorrido por productos digitales que diseñé y evolucioné en contextos reales, desde e-commerce a gran escala hasta plataformas B2B y B2C.</p>
      </div>
      <div class="projects-grid">${projectRows}</div>
    </div>
  </section>

  <!-- EXPERIENCE -->
  <section class="section-pad divider" id="experiencia">
    <div class="wrap">
      <div class="section-heading" style="height:0;"><h2 class="sr-only">Experiencia</h2><span class="section-sticker sticker-a sticker-alt sticker-static sticker-on-card">Más de 5 años diseñando 💼</span></div>
      <div class="timeline" id="experienceAccordion">
        <div class="accordion-item ui-card reveal" data-reveal>
          <div class="accordion-trigger" role="button" tabindex="0" aria-expanded="false" onclick="Experience.toggle(0)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();Experience.toggle(0);}">
            <div class="accordion-trigger-main"><span class="job-icon job-logo" aria-hidden="true"><img src="images/img-13-9310db29.png" alt="Coderio"></span>
              <h3 class="timeline-role ui-card-title">Ssr. UX/UI Designer</h3>
              <div class="timeline-company ui-card-text"><a class="company-link" href="https://www.coderio.com/" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" aria-label="Visitar el sitio de Coderio (se abre en una pestaña nueva)">Coderio<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg></a></div>
            </div>
            <div class="accordion-trigger-meta">
              <span class="timeline-period ui-card-text">Ago 2021 — Actualidad</span>
              <span class="accordion-icon" aria-hidden="true"></span>
            </div>
          </div>
          <div class="accordion-panel">
            <div class="accordion-panel-inner">
              <p class="timeline-summary ui-card-text">Diseñadora principal para las experiencias e-commerce de Wong y Metro en web y mobile: sigo de cerca la evolución del producto y sumo nuevas iniciativas digitales para Cencosud Perú.</p>
              <div class="evolution">
                <div class="evolution-item"><span class="evolution-year">2021</span><span class="evolution-text">Me incorporé al proyecto para el desarrollo de las aplicaciones móviles, participando en el diseño y lanzamiento del MVP.</span></div>
                <div class="evolution-item"><span class="evolution-year">2022</span><span class="evolution-text">Asumí como referente de diseño para Apps, sumando mejoras continuas y nuevas funcionalidades.</span></div>
                <div class="evolution-item"><span class="evolution-year">2023</span><span class="evolution-text">Amplié mi alcance al canal web como diseñadora principal, con foco en requerimientos multicanal para Wong y Metro.</span></div>
                <div class="evolution-item"><span class="evolution-year">Hoy</span><span class="evolution-text">Además de las experiencias e-commerce, formo parte del equipo de innovación de Cencosud Perú: evalúo procesos y diseño soluciones para mejorar la operación y potenciar el negocio.</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item ui-card reveal" data-reveal>
          <button class="accordion-trigger" type="button" aria-expanded="false" onclick="Experience.toggle(1)">
            <div class="accordion-trigger-main"><span class="job-icon job-logo job-logo-photo" aria-hidden="true"><img src="images/img-14-762fc6dc.jpg" alt="Fiteo"></span>
              <h3 class="timeline-role ui-card-title">UX/UI Designer — Consultant</h3>
              <div class="timeline-company ui-card-text">Fiteo Inc.</div>
            </div>
            <div class="accordion-trigger-meta">
              <span class="timeline-period ui-card-text">Abr 2021 — May 2023</span>
              <span class="accordion-icon" aria-hidden="true"></span>
            </div>
          </button>
          <div class="accordion-panel">
            <div class="accordion-panel-inner">
              <p class="timeline-summary ui-card-text">Participé en iniciativas de diseño desde discovery hasta entrega final, trabajando con investigación, análisis de mercado, prototipado, validación y colaboración con ingeniería.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item ui-card reveal" data-reveal>
          <button class="accordion-trigger" type="button" aria-expanded="false" onclick="Experience.toggle(2)">
            <div class="accordion-trigger-main"><span class="job-icon" style="background:var(--ink);color:var(--yellow);" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/></svg></span>
              <h3 class="timeline-role ui-card-title">UX/UI Designer</h3>
              <div class="timeline-company ui-card-text">Freelance</div>
            </div>
            <div class="accordion-trigger-meta">
              <span class="timeline-period ui-card-text">Nov 2020 — Actualidad</span>
              <span class="accordion-icon" aria-hidden="true"></span>
            </div>
          </button>
          <div class="accordion-panel">
            <div class="accordion-panel-inner">
              <p class="timeline-summary ui-card-text">Lidero proyectos UX/UI end-to-end para clientes B2B y B2C, desde discovery y research hasta prototipos de alta fidelidad, sistemas visuales, validación y handoff.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- INNOVATION -->
  <section class="section-pad-sm divider innovation-section" id="innovationSection">
    <div class="wrap">
      <div class="section-heading"><h2 class="display-lg reveal" data-reveal>Cencosud ~ Innovación &amp; otros productos</h2><span class="section-sticker sticker-b">De ideas a pases de producción 💡</span></div>
      <p class="body-md reveal" data-reveal style="margin-top:8px; font-size:14px;">Como parte del equipo de innovación, diseño soluciones para optimizar operaciones y ampliar el ecosistema digital: herramientas internas, experiencias de autoservicio y productos B2B.</p>
      <div class="innovation-track-viewport" id="innovationViewport">
        <div class="innovation-list" id="innovationTrack">${innovationHtml}</div>
      </div>
      <div class="carousel-nav">
        <button class="carousel-arrow" type="button" aria-label="Proyecto anterior" onclick="InnoNav.prev()">←</button>
        <button class="carousel-arrow" type="button" aria-label="Siguiente proyecto" onclick="InnoNav.next()">→</button>
      </div>
    </div>
  </section>

  <!-- HOW I WORK (oculta temporalmente) -->
  <section class="section-pad divider" style="display:none;">
    <div class="wrap">
      <p class="eyebrow reveal" data-reveal>Proceso</p>
      <h2 class="display-lg reveal" data-reveal>Cómo trabajo</h2>
      <p class="body-md reveal" data-reveal style="margin-top:16px;">No hay dos proyectos iguales, pero mi forma de encararlos sí se repite: ocho pasos que voy recorriendo (a veces en loop) entre research, diseño y desarrollo, siempre cerca de Producto, Ingeniería y QA.</p>
      <div class="process-list">${processHtml}</div>

    </div>
  </section>

  <!-- EDUCATION -->
  <section class="section-pad-sm divider">
    <div class="wrap">
      <div class="edu-heading">
        <h2 class="display-lg reveal" data-reveal>Aprendizajes desbloqueados</h2>
        <span class="edu-sticker sticker-right">Estudiante crónica 🤓</span>
      </div>
      <div class="edu-slider" id="eduSlider" aria-roledescription="carrusel" aria-label="Educación">
        <div class="edu-track" id="eduTrack">${eduHtml}</div>
        <div class="edu-dots" id="eduDots" role="tablist">${edu.map((e,i)=>`<button type="button" class="edu-dot" role="tab" aria-label="${e.n}" onclick="EduSlider.go(${i})"></button>`).join('')}</div>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section class="section-pad-sm divider">
    <div class="wrap">
      <div class="section-heading"><h2 class="display-lg reveal" data-reveal>Habilidades adquiridas</h2><span class="section-sticker sticker-c sticker-alt sticker-static sticker-right">Modestia aparte 😌</span></div>
      <div class="skills-cards reveal" data-reveal id="skillsCards"><div class="skill-card ui-card"><div class="skill-card-head"><h3 class="ui-card-title">Product Design</h3><div class="skill-anim sk-wire" aria-hidden="true"><i></i><i></i><i></i></div></div><div class="ui-card-divider"></div><div class="skill-card-chips"><span class="skill-pill">Diseño de producto end-to-end</span><span class="skill-pill">Arquitectura de información</span><span class="skill-pill">Diseño de interacción</span><span class="skill-pill">Prototipado</span></div></div><div class="skill-card ui-card"><div class="skill-card-head"><h3 class="ui-card-title">UX Research</h3><div class="skill-anim sk-research" aria-hidden="true"><svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="12" cy="12" r="7.5" fill="none" stroke-width="2.6"/><path d="M18 18l7 7" stroke-width="3.2" stroke-linecap="round"/></svg></div></div><div class="ui-card-divider"></div><div class="skill-card-chips"><span class="skill-pill">User Research</span><span class="skill-pill">Usability Testing</span><span class="skill-pill">A/B Testing</span><span class="skill-pill">Análisis de datos</span></div></div><div class="skill-card ui-card"><div class="skill-card-head"><h3 class="ui-card-title">Design Systems</h3><div class="skill-anim sk-system" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div><div class="ui-card-divider"></div><div class="skill-card-chips"><span class="skill-pill">Componentes</span><span class="skill-pill">Documentación</span><span class="skill-pill">Accesibilidad</span><span class="skill-pill">UI escalable</span></div></div><div class="skill-card ui-card"><div class="skill-card-head"><h3 class="ui-card-title">Colaboración</h3><div class="skill-anim sk-collab" aria-hidden="true"><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span></div></div><div class="ui-card-divider"></div><div class="skill-card-chips"><span class="skill-pill">Colaboración cross-funcional</span><span class="skill-pill">Stakeholders</span><span class="skill-pill">Handoff</span><span class="skill-pill">Entornos ágiles</span></div></div><div class="skill-card ui-card"><div class="skill-card-head"><h3 class="ui-card-title">AI &amp; Productividad</h3><div class="skill-anim sk-ai" aria-hidden="true"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5c.7 5.2 2.3 8.1 6.1 8.9-3.8.9-5.4 3.7-6.1 8.9-.7-5.2-2.3-8-6.1-8.9 3.8-.8 5.4-3.7 6.1-8.9z"/></svg></span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5c.7 5.2 2.3 8.1 6.1 8.9-3.8.9-5.4 3.7-6.1 8.9-.7-5.2-2.3-8-6.1-8.9 3.8-.8 5.4-3.7 6.1-8.9z"/></svg></span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5c.7 5.2 2.3 8.1 6.1 8.9-3.8.9-5.4 3.7-6.1 8.9-.7-5.2-2.3-8-6.1-8.9 3.8-.8 5.4-3.7 6.1-8.9z"/></svg></span></div></div><div class="ui-card-divider"></div><div class="skill-card-chips"><span class="skill-pill">ChatGPT</span><span class="skill-pill">Claude</span><span class="skill-pill">Gemini</span><span class="skill-pill">Figma AI</span></div></div></div>
      <div class="carousel-nav skills-mobile-nav">
        <button class="carousel-arrow" type="button" aria-label="Skills anteriores" onclick="SkillsNav.prev()">←</button>
        <button class="carousel-arrow" type="button" aria-label="Skills siguientes" onclick="SkillsNav.next()">→</button>
      </div>

      <div class="marquee reveal" data-reveal aria-hidden="true">
        <div class="marquee-track">${marqueeSet}${marqueeSet}</div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="section-pad divider">
    <div class="wrap">
      <div class="testi-heading">
        <h2 class="display-lg reveal" data-reveal>Lo que dicen quienes trabajaron conmigo</h2>
        <span class="testi-sticker">No pagué por esto 😉</span>
      </div>
      <div class="testi-stack" id="testiStack">${testimonialsHtml}</div>
      <div class="carousel-nav testi-mobile-nav">
        <button class="carousel-arrow" type="button" aria-label="Testimonio anterior" onclick="TestiNav.prev()">←</button>
        <button class="carousel-arrow" type="button" aria-label="Testimonio siguiente" onclick="TestiNav.next()">→</button>
      </div>
    </div>
  </section>

  <!-- CONTACT (oculta temporalmente) -->
  <section class="section-pad contact-section" id="contacto" style="display:none;">
    <div class="wrap">
      <p class="eyebrow reveal" data-reveal>Contacto</p>
      <h2 class="display-lg contact-title reveal" data-reveal>¿Hacemos algo juntos?</h2>
      <p class="body-lg contact-body reveal" data-reveal>Estoy abierta a conversar sobre nuevos desafíos, productos digitales y oportunidades de colaboración.</p>
      <div class="contact-links reveal" data-reveal>
        <a class="btn btn-invert primary" href="mailto:carolinasotogomez1991@gmail.com">Hablemos</a>
        <a class="btn btn-invert" href="https://www.linkedin.com/in/mariacarolinasotogomez/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <p class="contact-email reveal" data-reveal><a href="mailto:carolinasotogomez1991@gmail.com">carolinasotogomez1991@gmail.com</a></p>
    </div>
  </section>

  `;

  Reveal.observe();
  InnoNav.init();
  Experience.init();
  EduSlider.init();
  SkillsTabs.init();
  Typewriter.init();
}

/* ============================================================
   CASE STUDY RENDER
   ============================================================ */
function renderCaseStudy(slug){
  const cs = CASE_STUDIES[slug];
  if(!cs){ Router.go(''); return; }
  const next = CASE_STUDIES[cs.next];

  const hasHeroImg = !!cs.heroImg.src;
  const scopeSet = cs.scope.split(' · ').map(t=>`<span><em>·</em>${t}</span>`).join('');
  const metaHtml = cs.meta.map(m=>`
    <div><div class="cs-meta-label">${m.l}</div><div class="cs-meta-value">${m.v}</div></div>`).join('');

  const sectionsHtml = cs.sections.map(s=>{
    const bodyHtml = s.body.map(b=>`<p class="body-md" style="margin-bottom:14px;">${b}</p>`).join('');
    const gridClass = s.images.length>1 ? '' : 'single';
    const imgsHtml = s.images.map(im=> im.src ? `<img class="cs-img" src="${im.src}" alt="${im.alt || ''}" loading="lazy">` : ph(im.id, im.label, im.sub, im.ratio)).join('');
    if(s.side){
      return `
    <section class="cs-section">
      <div class="wrap">
        <div class="cs-side${s.imgFirst ? ' cs-side-rev' : ''}">
          <div class="cs-side-text">
            <p class="eyebrow reveal" data-reveal>${s.eyebrow}</p>
            <div class="reveal" data-reveal>
              <h3 class="display-lg" style="margin-bottom:18px;">${s.title}</h3>
              ${bodyHtml}
            </div>
          </div>
          <div class="cs-side-img">${imgsHtml}</div>
        </div>
      </div>
    </section>`;
    }
    return `
    <section class="cs-section">
      <div class="wrap">
        <div class="cs-section-head">
          <p class="eyebrow reveal" data-reveal>${s.eyebrow}</p>
          <div class="reveal" data-reveal>
            <h3 class="display-lg" style="margin-bottom:18px;">${s.title}</h3>
            ${bodyHtml}
          </div>
        </div>
        <div class="cs-img-grid ${gridClass}">${imgsHtml}</div>
      </div>
    </section>`;
  }).join('');

  const impactIcons = ['<div class="skill-anim" aria-hidden="true"><div class="years-anim"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>', '<div class="skill-anim sk-system" aria-hidden="true"><i></i><i></i><i></i><i></i></div>', '<div class="skill-anim sk-ai" aria-hidden="true"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5c.7 5.2 2.3 8.1 6.1 8.9-3.8.9-5.4 3.7-6.1 8.9-.7-5.2-2.3-8-6.1-8.9 3.8-.8 5.4-3.7 6.1-8.9z"/></svg></span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5c.7 5.2 2.3 8.1 6.1 8.9-3.8.9-5.4 3.7-6.1 8.9-.7-5.2-2.3-8-6.1-8.9 3.8-.8 5.4-3.7 6.1-8.9z"/></svg></span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5c.7 5.2 2.3 8.1 6.1 8.9-3.8.9-5.4 3.7-6.1 8.9-.7-5.2-2.3-8-6.1-8.9 3.8-.8 5.4-3.7 6.1-8.9z"/></svg></span></div>', '<div class="skill-anim sk-collab" aria-hidden="true"><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span><span><svg viewBox="0 0 20 24" aria-hidden="true"><circle cx="10" cy="7" r="4.6"/><path d="M1.5 23c0-5 3.8-8.3 8.5-8.3s8.5 3.3 8.5 8.3z"/></svg></span></div>'];
  const impactHtml = cs.impact.map((i,k)=>`
    <div class="cs-impact-item ui-card">
      <div class="skill-card-head"><h4 class="ui-card-title">${i.t}</h4>${impactIcons[k % impactIcons.length]}</div>
      <div class="ui-card-divider"></div>
      <p class="ui-card-text">${i.d}</p>
    </div>`).join('');

  document.getElementById('app').innerHTML = `
  <section class="cs-hero wrap">
    <a href="#" class="cs-back link-anim reveal" data-reveal onclick="Router.go('');return false;">← Volver al inicio</a>
    ${hasHeroImg ? `<h1 class="sr-only">${cs.heroTitle}</h1>` : `<h1 class="display-xl cs-hero-title reveal" data-reveal>${cs.heroTitle}</h1>
    <p class="body-lg reveal" data-reveal>${cs.heroDesc}</p>`}
    <div class="cs-hero-img reveal-img" data-reveal>${cs.heroImg.src ? `<img src="${cs.heroImg.src}" alt="${cs.heroImg.alt || ''}">` : ph(cs.heroImg.id, cs.heroImg.label, cs.heroImg.sub, cs.heroImg.ratio)}</div>
    <div class="cs-meta-grid reveal" data-reveal>${metaHtml}</div>
    ${hasHeroImg ? `<div class="marquee cs-scope-marquee reveal" data-reveal role="img" aria-label="Alcance: ${cs.scope}"><div class="marquee-track" aria-hidden="true">${scopeSet}${scopeSet}${scopeSet}${scopeSet}</div></div>` : `<p class="meta reveal" data-reveal>Alcance: ${cs.scope}</p>`}
  </section>

  ${sectionsHtml}

  <section class="cs-section">
    <div class="wrap">
      <div class="section-heading">
        <div class="cs-section-head">
          <p class="eyebrow reveal" data-reveal>Impacto</p>
          <p class="body-md reveal" data-reveal>Sin métricas de negocio disponibles para publicar, estas son las áreas de impacto cualitativo del proyecto.</p>
        </div>
        <span class="section-sticker sticker-b sticker-alt sticker-static sticker-right">Impacto sin humo 😌</span>
      </div>
      <div class="cs-impact" id="csImpact">${impactHtml}</div>
      <div class="carousel-nav cs-impact-nav">
        <button class="carousel-arrow" type="button" aria-label="Impacto anterior" onclick="CsImpactNav.prev()">←</button>
        <button class="carousel-arrow" type="button" aria-label="Impacto siguiente" onclick="CsImpactNav.next()">→</button>
      </div>
    </div>
  </section>

  <section class="cs-section" style="border-bottom:1px solid var(--line);">
    <div class="wrap">
      <div class="cs-section-head">
        <p class="eyebrow reveal" data-reveal>Aprendizajes</p>
        <p class="body-md reveal" data-reveal>${cs.learnings}</p>
      </div>
    </div>
  </section>

  <section class="cs-next">
    <div class="wrap">
      <a href="#" onclick="Router.go('projects/${cs.next}');return false;">
        <div>
          <div class="cs-next-label">Siguiente proyecto</div>
          <div class="cs-next-title">${next.name}</div>
        </div>
        <div class="cs-next-arrow">→</div>
      </a>
    </div>
  </section>
  `;

  Reveal.observe();
  window.scrollTo(0,0);
  requestAnimationFrame(()=>CsImpactNav.sync());
}

/* ============================================================
   ROUTER
   ============================================================ */
const Router = {
  go(route){
    location.hash = route ? '#'+route : '#/';
  },
  render(){
    const hash = location.hash.replace(/^#\/?/, '');
    if(hash.startsWith('projects/')){
      renderCaseStudy(hash.replace('projects/',''));
    } else {
      renderHome();
    }
  }
};
window.addEventListener('hashchange', Router.render);
window.addEventListener('resize', ()=>CsImpactNav.sync());

/* ============================================================
   NAV BEHAVIOR
   ============================================================ */
const Nav = {
  toSection(id){
    Nav.closeMobile();
    const goAndScroll = ()=>{
      requestAnimationFrame(()=>{
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth', block:'start'});
      });
    };
    if(location.hash.replace(/^#\/?/,'').startsWith('projects/')){
      location.hash = '#/';
      setTimeout(goAndScroll, 60);
    } else {
      goAndScroll();
    }
  },
  openMobile(){
    document.getElementById('mobileMenu').classList.add('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded','true');
    document.body.style.overflow='hidden';
  },
  closeMobile(){
    document.getElementById('mobileMenu').classList.remove('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
    document.body.style.overflow='';
  }
};

window.addEventListener('scroll', ()=>{
  document.getElementById('siteNav').classList.toggle('scrolled', window.scrollY > 8);
}, {passive:true});

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
/* ============================================================
   IMAGE LIGHTBOX
   ============================================================ */
const Lightbox = {
  open(src, alt){
    const el = document.getElementById('imgLightbox');
    const img = document.getElementById('imgLightboxImg');
    if(!el || !img) return;
    img.src = src;
    img.alt = alt || '';
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
    if(!this._escBound){
      document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') this.close(); });
      this._escBound = true;
    }
  },
  close(event){
    if(event && event.target && event.target.tagName === 'IMG' && event.target.id === 'imgLightboxImg') return;
    const el = document.getElementById('imgLightbox');
    if(!el) return;
    el.classList.remove('open');
    document.body.style.overflow = '';
  }
};

/* ============================================================
   EXPERIENCE ACCORDION
   ============================================================ */
const Experience = {
  activeIndex:-1,
  toggle(idx){
    const items = document.querySelectorAll('#experienceAccordion .accordion-item');
    if(!items.length) return;
    if(this.activeIndex === idx){
      this.activeIndex = -1;
    } else {
      this.activeIndex = idx;
    }
    this.render();
  },
  render(){
    const items = document.querySelectorAll('#experienceAccordion .accordion-item');
    items.forEach((item,i)=>{
      const panel = item.querySelector('.accordion-panel');
      const trigger = item.querySelector('.accordion-trigger');
      const isOpen = i === this.activeIndex;
      panel.classList.toggle('open', isOpen);
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  },
  init(){
    this.activeIndex = -1;
    this.render();
  }
};

/* ============================================================
   HERO TYPEWRITER
   ============================================================ */
const EduSlider = {
  i:0, timer:null, paused:false,
  go(n){
    const track = document.getElementById('eduTrack'); if(!track) return;
    const count = track.children.length;
    const vis = this.visible();
    const steps = count - vis + 1;
    this.i = ((n % steps) + steps) % steps;
    track.style.transform = 'translateX(' + (-(100 / vis) * this.i) + '%)';
    document.querySelectorAll('#eduDots .edu-dot').forEach((d,k)=>{ d.style.display = k < steps ? '' : 'none'; d.classList.toggle('active', k === this.i); });
    this.restart();
  },
  visible(){ return window.matchMedia('(min-width:901px)').matches ? 3 : 1; },
  restart(){
    clearInterval(this.timer);
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.timer = setInterval(()=>{
      if(!document.getElementById('eduTrack')){ clearInterval(this.timer); return; }
      if(!this.paused) this.go(this.i + 1);
    }, 4000);
  },
  init(){
    const el = document.getElementById('eduSlider'); if(!el) return;
    el.addEventListener('mouseenter', ()=>{ this.paused = true; });
    el.addEventListener('mouseleave', ()=>{ this.paused = false; });
    window.addEventListener('resize', ()=>{ if(document.getElementById('eduTrack')) this.go(this.i); });
    this.i = 0; this.go(0);
  }
};

const SkillsTabs = {
  i:0, timer:null, paused:false,
  go(n, manual){
    const tabs = document.querySelectorAll('#skillsTabs .skill-tab'); if(!tabs.length) return;
    const panels = document.querySelectorAll('#skillsTabs .skill-panel');
    this.i = (n + tabs.length) % tabs.length;
    tabs.forEach((t,k)=>{ t.classList.toggle('active', k===this.i); t.setAttribute('aria-selected', k===this.i ? 'true':'false'); });
    panels.forEach((p,k)=>{
      const on = k===this.i; p.classList.toggle('active', on);
      if(on){ p.querySelectorAll('.skill-chip').forEach(c=>{ c.style.animation='none'; void c.offsetWidth; c.style.animation=''; }); }
    });
    if(manual) this.paused = true;
  },
  init(){
    const el = document.getElementById('skillsTabs'); if(!el) return;
    clearInterval(this.timer); this.paused = false; this.i = 0;
    el.addEventListener('mouseenter', ()=>{ this.paused = true; });
    el.addEventListener('mouseleave', ()=>{ this.paused = false; });
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.timer = setInterval(()=>{
      if(!document.getElementById('skillsTabs')){ clearInterval(this.timer); return; }
      if(!this.paused) this.go(this.i + 1);
    }, 5000);
  }
};

const Typewriter = {
  part1:'¡Hola!',
  part2:'Mi nombre es Carolina Soto',
  init(){
    const a = document.getElementById('heroTw1'), b = document.getElementById('heroTw2'), ph = document.getElementById('heroPhoto');
    if(!a || !b || !ph) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced){ a.textContent = this.part1; b.textContent = ' ' + this.part2; ph.classList.add('show'); return; }
    a.textContent = ''; b.textContent = ''; ph.classList.remove('show');
    let i = 0, k = 0;
    const type2 = () => {
      if(k <= this.part2.length){ b.textContent = (k ? ' ' : '') + this.part2.slice(0, k); k++; setTimeout(type2, 45); }
    };
    const type1 = () => {
      if(i <= this.part1.length){ a.textContent = this.part1.slice(0, i); i++; setTimeout(type1, 45); }
      else { ph.classList.add('show'); setTimeout(type2, 350); }
    };
    type1();
  }
};

const Reveal = {
  observe(){
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});
    els.forEach(el=>io.observe(el));
  }
};

/* ============================================================
   TESTIMONIALS MOBILE NAV
   ============================================================ */
const TestiNav = {
  next(){
    const el = document.getElementById('testiStack');
    if(!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + el.clientWidth, behavior:'smooth' });
  },
  prev(){
    const el = document.getElementById('testiStack');
    if(!el) return;
    const atStart = el.scrollLeft <= 4;
    el.scrollTo({ left: atStart ? el.scrollWidth : el.scrollLeft - el.clientWidth, behavior:'smooth' });
  }
};

const SkillsNav = {
  next(){
    const el = document.getElementById('skillsCards'); if(!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    const step = (el.firstElementChild ? el.firstElementChild.offsetWidth : el.clientWidth) + 16;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior:'smooth' });
  },
  prev(){
    const el = document.getElementById('skillsCards'); if(!el) return;
    const step = (el.firstElementChild ? el.firstElementChild.offsetWidth : el.clientWidth) + 16;
    el.scrollTo({ left: el.scrollLeft <= 4 ? el.scrollWidth : el.scrollLeft - step, behavior:'smooth' });
  }
};

const CsImpactNav = {
  sync(){
    const el = document.getElementById('csImpact'); const nav = document.querySelector('.cs-impact-nav'); if(!el || !nav) return;
    nav.style.display = (el.scrollWidth > el.clientWidth + 4) ? '' : 'none';
  },
  step(el){ return (el.firstElementChild ? el.firstElementChild.offsetWidth : el.clientWidth) + 16; },
  next(){
    const el = document.getElementById('csImpact'); if(!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + this.step(el), behavior:'smooth' });
  },
  prev(){
    const el = document.getElementById('csImpact'); if(!el) return;
    el.scrollTo({ left: el.scrollLeft <= 4 ? el.scrollWidth : el.scrollLeft - this.step(el), behavior:'smooth' });
  }
};

const InnoNav = {
  init(){
    const vp = document.getElementById('innovationViewport');
    if(vp) vp.scrollLeft = 0;
  },
  cardStep(){
    const item = document.querySelector('#innovationTrack .innovation-item');
    if(!item) return 0;
    return item.getBoundingClientRect().width + 16;
  },
  next(){
    const vp = document.getElementById('innovationViewport');
    if(!vp) return;
    const atEnd = vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - 4;
    vp.scrollTo({ left: atEnd ? 0 : vp.scrollLeft + this.cardStep(), behavior:'smooth' });
  },
  prev(){
    const vp = document.getElementById('innovationViewport');
    if(!vp) return;
    const atStart = vp.scrollLeft <= 4;
    vp.scrollTo({ left: atStart ? vp.scrollWidth : vp.scrollLeft - this.cardStep(), behavior:'smooth' });
  }
};

/* ============================================================
   INIT
   ============================================================ */
Router.render();
