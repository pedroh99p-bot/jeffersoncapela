import Image from "next/image";
import {
  authorityMarquees,
  business,
  differentiators,
  links,
  location,
  quickFacts,
  services,
} from "@/data/business";
import { AuthorityMarquee } from "@/components/AuthorityMarquee";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeaturePill } from "@/components/FeaturePill";
import { Footer } from "@/components/Footer";
import { GoldButton } from "@/components/GoldButton";
import { Icon } from "@/components/Icon";
import { Navbar } from "@/components/Navbar";
import { OutlineButton } from "@/components/OutlineButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const serviceIcons = {
  aquisicao: "file",
  posse: "shield",
  "orientacao-porte": "message",
  "renovacao-cr-craf": "clipboard",
  regularizacao: "check",
  transferencia: "swap",
} as const;

export default function Home() {
  const featuredService = services.find((service) => service.featured);
  const otherServices = services.filter((service) => !service.featured);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-background text-foreground">
        <section className="section-shell pt-8 sm:pt-12" id="hero">
          <div className="grid gap-8 pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-16">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[24px] border border-gold/45 bg-[radial-gradient(circle_at_78%_30%,rgba(216,170,60,0.2),transparent_42%),linear-gradient(155deg,#202020,#070707)] p-5 sm:p-7 lg:hidden">
                <div className="relative z-10 max-w-[58%] space-y-5">
                  <SectionHeading
                    as="h1"
                    eyebrow="Assessoria para CR/CAC"
                    title={
                      <>
                        Quer ser CAC?{" "}
                        <span className="text-gold">
                          Comece da forma certa.
                        </span>
                      </>
                    }
                    description="Assessoria especializada para conduzir seu processo documental com orientação em cada etapa."
                  />
                </div>

                <div className="absolute right-[-1.8rem] top-24 h-[21rem] w-[56%]">
                  <Image
                    alt={business.name}
                    className="object-contain object-top"
                    fill
                    priority
                    sizes="58vw"
                    src={business.assets.heroCutout}
                  />
                </div>

                <div className="relative z-10 mt-8 grid gap-3">
                  {quickFacts.map((fact, index) => (
                    <FeaturePill
                      compact
                      icon={
                        index === 0
                          ? "whatsapp"
                          : index === 1
                            ? "clipboard"
                            : index === 2
                              ? "file"
                              : "shield"
                      }
                      key={fact}
                      title={fact}
                    />
                  ))}
                  <GoldButton href="#consulta-rapida" icon="whatsapp">
                    Falar com Jefferson agora
                  </GoldButton>
                  <OutlineButton href="#servicos">Ver investimento</OutlineButton>
                </div>
              </div>

              <div className="hidden space-y-7 lg:block">
                <SectionHeading
                  as="h1"
                  eyebrow="Assessoria para CR/CAC"
                  title={
                    <>
                      Quer ser CAC?{" "}
                      <span className="text-gold">Comece da forma certa.</span>
                    </>
                  }
                  description="Assessoria especializada para conduzir seu processo documental com orientação em cada etapa."
                />

                <div className="grid gap-3 sm:grid-cols-2 lg:max-w-xl">
                  {quickFacts.map((fact, index) => (
                    <FeaturePill
                      compact
                      icon={
                        index === 0
                          ? "whatsapp"
                          : index === 1
                            ? "clipboard"
                            : index === 2
                              ? "file"
                              : "shield"
                      }
                      key={fact}
                      title={fact}
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <GoldButton href="#consulta-rapida" icon="whatsapp">
                    Falar com Jefferson agora
                  </GoldButton>
                  <OutlineButton href="#servicos">Ver investimento</OutlineButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative hidden min-h-[620px] overflow-hidden rounded-[24px] border border-gold/45 bg-[radial-gradient(circle_at_72%_35%,rgba(216,170,60,0.2),transparent_42%),linear-gradient(155deg,#202020,#070707)] lg:block">
                <Image
                  alt={business.name}
                  className="object-contain object-bottom"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  src={business.assets.heroCutout}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/25 to-transparent p-5">
                  <p className="text-2xl font-black uppercase leading-none">
                    {business.name}
                  </p>
                  <p className="mt-1 text-gold">{business.position}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <AuthorityMarquee items={authorityMarquees[0]} />

        <section className="section-shell py-14 sm:py-18" id="consulta-rapida">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Resumo do atendimento"
                title="Chegue organizado para o atendimento"
                description="Preencha os dados principais para abrir uma conversa objetiva no WhatsApp."
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ConsultationForm />
            </ScrollReveal>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-18" id="especialista">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <ScrollReveal>
              <article className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-gold/55 bg-[radial-gradient(circle_at_58%_25%,rgba(216,170,60,0.18),transparent_36%),linear-gradient(145deg,#1e1e1e,#090909)] sm:min-h-[540px] lg:min-h-[660px]">
                <Image
                  alt={business.name}
                  className="object-contain object-bottom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  src={business.assets.specialistPhoto}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 sm:p-7">
                  <h2 className="text-3xl font-black uppercase leading-none text-white sm:text-4xl">
                    {business.name}
                  </h2>
                  <p className="mt-2 border-t border-gold/70 pt-2 text-lg text-gold sm:text-xl">
                    {business.position}
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={100} className="space-y-7">
              <SectionHeading
                eyebrow="Atendimento direto"
                title="Seu processo acompanhado por quem conhece a documentação"
                description="Assessoria para CR/CAC, aquisição, posse, orientação sobre porte, transferência e regularização documental."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <FeaturePill icon="user" title="Atendimento individual" />
                <FeaturePill icon="clipboard" title="Orientação em cada etapa" />
                <FeaturePill icon="file" title="Conferência documental" />
                <FeaturePill icon="whatsapp" title="Suporte pelo WhatsApp" />
              </div>
              <GoldButton
                href={links.specialistWhatsApp}
                icon="message"
                rel="noopener noreferrer"
                target="_blank"
              >
                Falar com o especialista
              </GoldButton>
            </ScrollReveal>
          </div>
        </section>

        <AuthorityMarquee items={authorityMarquees[1]} />

        <section className="section-shell py-14 sm:py-18" id="diferenciais">
          <div className="space-y-8">
            <ScrollReveal>
              <SectionHeading
                title={
                  <>
                    Por que contar com uma assessoria{" "}
                    <span className="text-gold">especializada?</span>
                  </>
                }
              />
            </ScrollReveal>

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <ScrollReveal>
                <article className="rounded-[24px] border border-gold/55 bg-white/[0.04] p-6 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-[112px_1fr] sm:items-center">
                    <span className="flex h-24 w-24 items-center justify-center rounded-[18px] border border-gold/45 bg-gold/10 text-gold">
                      <Icon name="file" className="h-12 w-12" />
                    </span>
                    <div>
                      <h2 className="text-3xl font-black uppercase leading-tight text-white">
                        {differentiators[0].title}
                      </h2>
                      <p className="mt-3 text-lg leading-8 text-white/72">
                        {differentiators[0].description}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {differentiators.slice(1).map((item, index) => (
                  <ScrollReveal delay={index * 70} key={item.title}>
                    <article className="h-full rounded-[18px] border border-gold/35 bg-white/[0.035] p-5">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold">
                        <Icon
                          name={
                            index === 0
                              ? "clipboard"
                              : index === 1
                                ? "user"
                                : "calendar"
                          }
                          className="h-7 w-7"
                        />
                      </span>
                      <h3 className="mt-5 text-xl font-black uppercase leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-white/68">
                        {item.description}
                      </p>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal>
              <p className="rounded-[18px] border border-white/12 bg-white/[0.04] p-5 text-base leading-7 text-white/72">
                {business.legal.deferment}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-18" id="servicos">
          <div className="space-y-8">
            <ScrollReveal>
              <SectionHeading title="Qual processo você precisa resolver?" />
            </ScrollReveal>

            {featuredService ? (
              <ScrollReveal>
                <ServiceCard
                  description={featuredService.description}
                  featured
                  href={links.servicesWhatsApp}
                  installments={featuredService.installments}
                  price={featuredService.price}
                  title={featuredService.title}
                />
              </ScrollReveal>
            ) : null}

            <div className="grid gap-3 lg:grid-cols-2">
              {otherServices.map((service, index) => (
                <ScrollReveal delay={index * 45} key={service.id}>
                  <ServiceCard
                    description={service.description}
                    href={links.servicesWhatsApp}
                    icon={serviceIcons[service.id as keyof typeof serviceIcons]}
                    title={service.title}
                  />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p className="flex gap-3 rounded-[18px] border border-gold/25 bg-black/35 p-5 text-sm leading-6 text-white/62">
                <Icon
                  name="shield"
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                />
                <span>{business.legal.deferment}</span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-18" id="depoimentos">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Depoimentos"
                title="O que dizem sobre o atendimento"
                description="Área preparada para experiências verificadas de clientes, sem inserir nomes ou resultados não confirmados."
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <TestimonialCarousel />
            </ScrollReveal>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-18" id="localizacao">
          <div className="space-y-8">
            <ScrollReveal>
              <SectionHeading
                title="Atendimento presencial e pelo WhatsApp"
                description="Escolha a forma mais conveniente para falar com Jefferson."
              />
            </ScrollReveal>

            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <ScrollReveal>
                <div className="relative min-h-72 overflow-hidden rounded-[24px] border border-gold/45 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015)),repeating-linear-gradient(30deg,rgba(255,255,255,0.06)_0_2px,transparent_2px_44px),repeating-linear-gradient(120deg,rgba(255,255,255,0.04)_0_2px,transparent_2px_54px)]">
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f5cf64,#c99425)] text-black">
                      <Icon name="mapPin" className="h-10 w-10" />
                    </span>
                    <span className="mt-4 rounded-[18px] border border-gold/55 bg-black/70 px-5 py-4 text-lg font-bold text-gold">
                      {location.mapLabel}
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="grid gap-3 rounded-[24px] border border-gold/40 bg-white/[0.035] p-5">
                  {location.items.map((item, index) => (
                    <div
                      className="flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0"
                      key={item.title}
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                        <Icon
                          name={
                            index === 0
                              ? "mapPin"
                              : index === 1
                                ? "calendar"
                                : "globe"
                          }
                          className="h-7 w-7"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-lg font-bold text-white">
                          {item.title}
                        </span>
                        <span className="block text-sm leading-6 text-white/60">
                          {item.description}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                className="inline-flex min-h-14 w-full cursor-not-allowed items-center justify-center gap-3 rounded-2xl border border-white/14 bg-white/[0.04] px-5 py-4 text-center text-sm font-black uppercase text-white/38"
                disabled
                type="button"
              >
                <Icon name="route" className="h-5 w-5" />
                Traçar rota
              </button>
              <GoldButton
                href={links.locationWhatsApp}
                icon="calendar"
                rel="noopener noreferrer"
                target="_blank"
              >
                Agendar atendimento
              </GoldButton>
            </div>
          </div>
        </section>

        <section className="section-shell py-14 sm:py-18" id="faq">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <ScrollReveal>
              <SectionHeading
                title="Dúvidas frequentes sobre os processos"
                description="Encontre respostas rápidas antes de iniciar seu atendimento."
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <FAQAccordion />
            </ScrollReveal>
          </div>
        </section>

        <AuthorityMarquee items={authorityMarquees[2]} />

        <section className="section-shell py-14 sm:py-18" id="oferta-final">
          <ScrollReveal>
            <div className="rounded-[24px] border border-gold/55 bg-[radial-gradient(circle_at_80%_10%,rgba(216,170,60,0.14),transparent_35%),linear-gradient(145deg,#191919,#090909)] p-6 text-center sm:p-8 lg:p-10">
              <span className="inline-flex rounded-full bg-[linear-gradient(135deg,#f5cf64,#c99425)] px-5 py-3 text-sm font-black uppercase text-black">
                Dê o primeiro passo
              </span>
              <SectionHeading
                align="center"
                title="Não sabe qual processo atende à sua situação?"
                description="Conte o que você precisa e receba uma orientação inicial diretamente com Jefferson."
              />

              <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left">
                {["Escolha o serviço", "Informe sua situação", "Continue pelo WhatsApp"].map(
                  (step, index) => (
                    <div
                      className="flex items-center gap-4 rounded-[18px] border border-white/12 bg-white/[0.04] p-4"
                      key={step}
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/65 text-xl font-black text-gold">
                        {index + 1}
                      </span>
                      <Icon
                        name={
                          index === 0
                            ? "clipboard"
                            : index === 1
                              ? "user"
                              : "whatsapp"
                        }
                        className="h-7 w-7 text-gold"
                      />
                      <span className="text-lg font-bold text-white">{step}</span>
                    </div>
                  ),
                )}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <GoldButton href="#consulta-rapida" icon="arrowRight">
                  Iniciar consulta rápida
                </GoldButton>
                <OutlineButton
                  href={links.directWhatsApp}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Falar direto no WhatsApp
                </OutlineButton>
              </div>

              <div className="mx-auto mt-8 max-w-2xl rounded-[24px] border border-gold/45 bg-black/35 p-6">
                <p className="inline-flex rounded-xl bg-[linear-gradient(135deg,#f5cf64,#c99425)] px-4 py-2 text-sm font-black uppercase text-black">
                  Processo de CR/CAC
                </p>
                <p className="mt-5 text-6xl font-black leading-none text-gold sm:text-7xl">
                  {business.offer.price}
                </p>
                <p className="mt-3 text-2xl text-white">
                  {business.offer.installments}
                </p>
              </div>

              <p className="mt-6 text-sm leading-6 text-white/58">
                {business.legal.deferment}
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
      <WhatsAppButton floating href={links.whatsapp} label="Falar pelo WhatsApp" />
    </>
  );
}
