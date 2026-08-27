export const business = {
  name: "Jefferson Capela",
  position: "Despachante Armamentista",
  instagram: {
    handle: "@jefferson020220",
    url: "https://www.instagram.com/jefferson020220/",
  },
  whatsapp: {
    number: "5521974930171",
    baseUrl: "https://wa.me/5521974930171",
    messages: {
      primary:
        "Olá, Jefferson. Quero orientação sobre assessoria para concessão de CR/CAC. Meu nome é [NOME], sou do estado [UF] e minha situação atual é [SITUACAO].",
      specialist:
        "Olá, Jefferson. Quero falar com o especialista sobre um processo de documentação armamentista.",
      services:
        "Olá, Jefferson. Quero iniciar meu processo de assessoria documental.",
    },
  },
  offer: {
    main: "Assessoria para concessao de CR/CAC",
    price: "R$ 1.999",
    installments: "Até 18x no cartão",
    approvalDisclaimer:
      "Aprovação sujeita aos requisitos e à análise do órgão responsável.",
  },
  assets: {
    specialistPhoto: "/assets/specialist.png",
    logo: "/assets/logo.webp",
    heroCutout: "/assets/hero-cutout.webp",
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
  "Atendimento direto pelo WhatsApp",
  "Orientação documental em cada etapa",
  "Conferência antes do protocolo",
  "Processo sujeito à análise do órgão responsável",
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
  address: null,
  locationEmbed: null,
  testimonials: [],
  credentials: [],
  additionalServices: [],
} as const;

export const links = {
  instagram: business.instagram.url,
  whatsapp: buildWhatsAppUrl(business.whatsapp.messages.primary),
  specialistWhatsApp: buildWhatsAppUrl(business.whatsapp.messages.specialist),
  servicesWhatsApp: buildWhatsAppUrl(business.whatsapp.messages.services),
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
    reference: null,
  },
  {
    order: 7,
    id: "localizacao",
    label: "Localizacao",
    objective: "Reservar area para endereco ou atendimento nacional quando confirmado.",
    assets: [],
    reference: null,
  },
  {
    order: 8,
    id: "faq",
    label: "FAQ",
    objective: "Responder duvidas frequentes com linguagem responsavel.",
    assets: [],
    reference: null,
  },
  {
    order: 9,
    id: "oferta-final",
    label: "Oferta final",
    objective: "Reforcar investimento, parcelamento e CTA para WhatsApp.",
    assets: [business.assets.logo],
    reference: null,
  },
  {
    order: 10,
    id: "footer",
    label: "Footer",
    objective: "Exibir contato, redes e avisos legais basicos.",
    assets: [business.assets.logo],
    reference: null,
  },
] as const;

export function buildWhatsAppUrl(message: string) {
  const text = encodeURIComponent(message);
  return `${business.whatsapp.baseUrl}?text=${text}`;
}
