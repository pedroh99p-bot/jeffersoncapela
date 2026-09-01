export const business = {
  name: "Jefferson Capela",
  position: "Despachante Armamentista",
  instagram: {
    handle: "@jefferson020220",
    url: "https://www.instagram.com/jefferson020220/",
  },
  whatsapp: {
    number: "5521974930171",
    display: "(21) 97493-0171",
    baseUrl: "https://wa.me/5521974930171",
    messages: {
      primary:
        "Olá, Jefferson. Quero orientação sobre assessoria para concessão de CR/CAC. Meu nome é [NOME], sou do estado [UF] e minha situação atual é [SITUACAO].",
      specialist:
        "Olá, Jefferson. Quero falar com o especialista sobre um processo de documentação armamentista.",
      services:
        "Olá, Jefferson. Quero iniciar meu processo de assessoria documental.",
      testimonial:
        "Olá, Jefferson. Quero receber orientação sobre assessoria documental.",
      location:
        "Olá, Jefferson. Quero agendar um atendimento e confirmar a melhor forma de contato.",
      faq: "Olá, Jefferson. Fiquei com uma dúvida e quero orientação para o meu caso.",
      direct:
        "Olá, Jefferson. Não sei qual processo atende à minha situação e quero uma orientação inicial.",
    },
  },
  offer: {
    main: "Assessoria para concessão de CR/CAC",
    price: "R$ 1.999",
    installments: "Até 18x no cartão",
    approvalDisclaimer:
      "Aprovação sujeita aos requisitos e à análise do órgão responsável.",
  },
  legal: {
    deferment:
      "A contratação da assessoria não garante o deferimento. A análise e a decisão competem aos órgãos responsáveis e dependem do cumprimento dos requisitos aplicáveis.",
    privacy:
      "Os dados informados no formulário são usados somente para montar a mensagem enviada pelo WhatsApp.",
  },
  assets: {
    specialistPhoto: "/assets/specialist.png",
    logo: "/assets/logo.webp",
    heroCutout: "/assets/hero-cutout.webp",
    googleLogo: "/assets/google-g.png",
    whatsappGlyph: "/assets/whatsapp-glyph.svg",
  },
} as const;

export const authorityProof = {
  approvedCases: null as number | null,
  experienceYears: null as number | null,
  google: {
    rating: 5,
    reviewCount: null as number | null,
    profileUrl: null as string | null,
  },
} as const;

export const services = [
  {
    id: "concessao-cr-cac",
    title: "Concessão de CR/CAC",
    description: "Assessoria para atiradores desportivos e colecionadores.",
    featured: true,
    price: business.offer.price,
    installments: business.offer.installments,
  },
  {
    id: "aquisicao",
    title: "Aquisição",
    description: "Orientação documental para processo de aquisição.",
    featured: false,
  },
  {
    id: "posse",
    title: "Posse",
    description: "Apoio para organizar requisitos e documentos.",
    featured: false,
  },
  {
    id: "orientacao-porte",
    title: "Orientação sobre porte",
    description: "Direcionamento inicial conforme a situação informada.",
    featured: false,
  },
  {
    id: "renovacao-cr-craf",
    title: "Renovação de CR/CRAF",
    description: "Acompanhamento para processos de renovação documental.",
    featured: false,
  },
  {
    id: "regularizacao",
    title: "Regularização",
    description: "Análise inicial para organizar pendências documentais.",
    featured: false,
  },
  {
    id: "transferencia",
    title: "Transferência",
    description: "Orientação para preparar a documentação necessária.",
    featured: false,
  },
] as const;

export const quickFacts = [
  "WhatsApp",
  "Orientação",
  "Conferência",
  "Análise responsável",
] as const;

export const specialistFacts = [
  { icon: "user", title: "Atendimento individual" },
  { icon: "clipboard", title: "Orientação em cada etapa" },
  { icon: "file", title: "Conferência documental" },
  { icon: "whatsapp", title: "Suporte pelo WhatsApp" },
] as const;

export const differentiators = [
  {
    title: "Orientação do início ao protocolo",
    description: "Entenda documentos, avaliações e etapas antes de seguir.",
  },
  {
    title: "Conferência documental",
    description: "Reduza pendências evitáveis com revisão do material.",
  },
  {
    title: "Atendimento direto",
    description: "Fale com Jefferson sem intermediários no atendimento.",
  },
  {
    title: "Acompanhamento",
    description: "Receba orientação durante a etapa contratada.",
  },
] as const;

export const consultationOptions = {
  states: [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ],
  services: services.map((service) => service.title),
} as const;

export const placeholders = {
  address: "Confirmar antes da publicação",
  routeUrl: null,
  locationEmbed: null,
  credentials: [],
  additionalServices: [],
} as const;

export const testimonials = [
  {
    id: "placeholder-cr-cac",
    quote: "Depoimento real pendente de envio pelo cliente.",
    author: "Cliente atendido",
    service: "Processo de CR/CAC",
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: "placeholder-documentacao",
    quote: "Espaço reservado para experiência verificada de atendimento.",
    author: "Cliente atendido",
    service: "Orientação documental",
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: "placeholder-renovacao",
    quote: "Conteúdo provisório até receber autorização e texto real.",
    author: "Cliente atendido",
    service: "Renovação de CR/CRAF",
    rating: 5,
    isPlaceholder: true,
  },
] as const;

export const location = {
  address: placeholders.address,
  routeUrl: placeholders.routeUrl,
  mapLabel: "Endereço do escritório a confirmar",
  items: [
    {
      title: "Endereço do escritório",
      description: placeholders.address,
    },
    {
      title: "Atendimento com agendamento",
      description: "Confirmar disponibilidade pelo WhatsApp.",
    },
    {
      title: "Atendimento online para todo o Brasil",
      description: "Orientação inicial pelo WhatsApp.",
    },
  ],
} as const;

export const faq = [
  {
    question: "Qual é a diferença entre CR, posse e porte?",
    answer:
      "São autorizações com finalidades e requisitos diferentes. Jefferson orienta sobre o tipo de processo adequado conforme a situação informada.",
  },
  {
    question: "Quem pode solicitar o CR/CAC?",
    answer:
      "A solicitação depende do cumprimento dos requisitos legais e documentais aplicáveis. A análise inicial ajuda a identificar quais etapas fazem sentido para o caso.",
  },
  {
    question: "Quais documentos são necessários?",
    answer:
      "A lista pode variar conforme o processo e o órgão responsável. A assessoria organiza a conferência documental antes do encaminhamento.",
  },
  {
    question: "O processo garante aprovação?",
    answer: business.legal.deferment,
  },
  {
    question: "É possível fazer o atendimento à distância?",
    answer:
      "Sim, a orientação inicial pode ser feita pelo WhatsApp. Quando houver necessidade presencial, o atendimento deve ser combinado previamente.",
  },
  {
    question: "Como funciona o parcelamento em até 18x?",
    answer:
      "A oferta informada prevê possibilidade de parcelamento em até 18x no cartão. Condições finais devem ser confirmadas diretamente no atendimento.",
  },
  {
    question: "Vocês realizam renovação e regularização?",
    answer:
      "Sim, renovação de CR/CRAF e regularização estão entre os assuntos atendidos, com orientação conforme a situação documental informada.",
  },
] as const;

export const authorityMarquees = [
  [
    "Assessoria especializada em CR/CAC",
    "Atendimento direto com Jefferson",
    "Orientação documental em cada etapa",
  ],
  [
    "Aquisição",
    "Posse",
    "Porte",
    "Regularização",
    "Atendimento pelo WhatsApp",
  ],
  [
    "Processos conduzidos com clareza",
    "Atendimento para todo o Brasil",
    "Sem promessa de aprovação",
  ],
] as const;

export const internalLinks = [
  { label: "Início", href: "#hero" },
  { label: "Consulta", href: "#consulta-rapida" },
  { label: "Especialista", href: "#especialista" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const links = {
  instagram: business.instagram.url,
  whatsapp: buildWhatsAppUrl(business.whatsapp.messages.primary),
  specialistWhatsApp: buildWhatsAppUrl(business.whatsapp.messages.specialist),
  servicesWhatsApp: buildWhatsAppUrl(business.whatsapp.messages.services),
  testimonialWhatsApp: buildWhatsAppUrl(business.whatsapp.messages.testimonial),
  locationWhatsApp: buildWhatsAppUrl(business.whatsapp.messages.location),
  faqWhatsApp: buildWhatsAppUrl(business.whatsapp.messages.faq),
  directWhatsApp: buildWhatsAppUrl(business.whatsapp.messages.direct),
} as const;

export const sectionMap = [
  {
    order: 1,
    id: "hero",
    label: "Hero",
    objective: "Apresentar oferta principal, especialista e CTA para WhatsApp.",
    assets: [business.assets.logo, business.assets.heroCutout],
    reference: "/references/01-hero.png",
  },
  {
    order: 2,
    id: "consulta-rapida",
    label: "Consulta rapida",
    objective: "Coletar dados minimos para uma mensagem qualificada no WhatsApp.",
    assets: [],
    reference: "/references/02-consulta-rapida.png",
  },
  {
    order: 3,
    id: "especialista",
    label: "Especialista",
    objective: "Apresentar Jefferson Capela sem inventar credenciais.",
    assets: [business.assets.specialistPhoto],
    reference: "/references/03-especialista.png",
  },
  {
    order: 4,
    id: "diferenciais",
    label: "Diferenciais",
    objective: "Explicar o valor da assessoria sem prometer aprovacao.",
    assets: [],
    reference: "/references/04-diferenciais.png",
  },
  {
    order: 5,
    id: "servicos",
    label: "Servicos",
    objective: "Organizar servicos confirmados e placeholders futuros.",
    assets: [business.assets.specialistPhoto],
    reference: "/references/05-servicos.png",
  },
  {
    order: 6,
    id: "depoimentos",
    label: "Depoimentos",
    objective: "Reservar area para depoimentos reais quando fornecidos.",
    assets: [],
    reference: "/references/06-depoimentos.png",
  },
  {
    order: 7,
    id: "localizacao",
    label: "Localizacao",
    objective: "Reservar area para endereco ou atendimento nacional quando confirmado.",
    assets: [],
    reference: "/references/07-localizacao.png",
  },
  {
    order: 8,
    id: "faq",
    label: "FAQ",
    objective: "Responder duvidas frequentes com linguagem responsavel.",
    assets: [],
    reference: "/references/08-faq.png",
  },
  {
    order: 9,
    id: "oferta-final",
    label: "Oferta final",
    objective: "Reforcar investimento, parcelamento e CTA para WhatsApp.",
    assets: [business.assets.logo],
    reference: "/references/09-oferta-final.png",
  },
  {
    order: 10,
    id: "contato",
    label: "Footer",
    objective: "Exibir contato, redes e avisos legais basicos.",
    assets: [business.assets.logo],
    reference: "/references/10-footer.png",
  },
] as const;

export function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `${business.whatsapp.baseUrl}?text=${text}`;
}
