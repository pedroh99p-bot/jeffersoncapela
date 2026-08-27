import Image from "next/image";
import {
  business,
  differentiators,
  links,
  quickFacts,
  services,
} from "@/data/business";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FeaturePill } from "@/components/FeaturePill";
import { GoldButton } from "@/components/GoldButton";
import { Icon } from "@/components/Icon";
import { Navbar } from "@/components/Navbar";
import { OutlineButton } from "@/components/OutlineButton";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionProgress } from "@/components/SectionProgress";
import { ServiceCard } from "@/components/ServiceCard";
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
        <section className="section-shell pt-6 sm:pt-10" id="hero">
          <SectionProgress current={1} label="Início" />
          <div className="grid gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-14">
            <div className="space-y-7">
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

              <div className="grid gap-3 sm:flex sm:flex-wrap">
                <GoldButton href="#consulta-rapida" icon="whatsapp">
                  Falar com Jefferson agora
                </GoldButton>
                <OutlineButton href="#servicos">Ver investimento</OutlineButton>
              </div>
            </div>

            <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-gold/45 bg-[radial-gradient(circle_at_70%_35%,rgba(216,170,60,0.2),transparent_42%),linear-gradient(155deg,#202020,#070707)] lg:min-h-[620px]">
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
          </div>
        </section>

        <section className="section-shell" id="consulta-rapida">
          <SectionProgress current={2} label="Consulta rápida" />
          <div className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:py-14">
            <SectionHeading
              eyebrow="Resumo do atendimento"
              title="Chegue organizado para o atendimento"
              description="Preencha os dados principais para abrir uma conversa objetiva no WhatsApp."
            />
            <ConsultationForm />
          </div>
        </section>

        <section className="section-shell" id="especialista">
          <SectionProgress current={3} label="Especialista" />
          <div className="grid gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-14">
            <div className="space-y-7 lg:order-2">
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
            </div>

            <article className="relative min-h-[520px] overflow-hidden rounded-lg border border-gold/55 bg-[radial-gradient(circle_at_58%_25%,rgba(216,170,60,0.18),transparent_36%),linear-gradient(145deg,#1e1e1e,#090909)] lg:min-h-[660px]">
              <Image
                alt={business.name}
                className="object-contain object-bottom"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                src={business.assets.specialistPhoto}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 sm:p-7">
                <h3 className="text-4xl font-black uppercase leading-none text-white">
                  {business.name}
                </h3>
                <p className="mt-2 border-t border-gold/70 pt-2 text-xl text-gold">
                  {business.position}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell" id="diferenciais">
          <SectionProgress current={4} label="Diferenciais" />
          <div className="space-y-8 py-8 lg:py-14">
            <SectionHeading
              title={
                <>
                  Por que contar com uma assessoria{" "}
                  <span className="text-gold">especializada?</span>
                </>
              }
            />

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-lg border border-gold/55 bg-white/[0.04] p-5 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-[112px_1fr] sm:items-center">
                  <span className="flex h-24 w-24 items-center justify-center rounded-lg border border-gold/45 bg-gold/10 text-gold">
                    <Icon name="file" className="h-12 w-12" />
                  </span>
                  <div>
                    <h3 className="text-3xl font-black uppercase leading-tight text-white">
                      {differentiators[0].title}
                    </h3>
                    <p className="mt-3 text-lg leading-8 text-white/72">
                      {differentiators[0].description}
                    </p>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {differentiators.slice(1).map((item, index) => (
                  <article
                    className="rounded-lg border border-gold/35 bg-white/[0.035] p-5"
                    key={item.title}
                  >
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
                ))}
              </div>
            </div>

            <p className="rounded-lg border border-white/12 bg-white/[0.04] p-5 text-base leading-7 text-white/72">
              {business.offer.approvalDisclaimer}
            </p>
          </div>
        </section>

        <section className="section-shell pb-10" id="servicos">
          <SectionProgress current={5} label="Serviços" />
          <div className="space-y-8 py-8 lg:py-14">
            <SectionHeading title="Qual processo você precisa resolver?" />

            {featuredService ? (
              <ServiceCard
                description={featuredService.description}
                featured
                href={links.servicesWhatsApp}
                installments={featuredService.installments}
                price={featuredService.price}
                title={featuredService.title}
              />
            ) : null}

            <div className="grid gap-3 lg:grid-cols-2">
              {otherServices.map((service) => (
                <ServiceCard
                  description={service.description}
                  href={links.servicesWhatsApp}
                  icon={serviceIcons[service.id as keyof typeof serviceIcons]}
                  key={service.id}
                  title={service.title}
                />
              ))}
            </div>

            <p className="flex gap-3 rounded-lg border border-gold/25 bg-black/35 p-5 text-sm leading-6 text-white/62">
              <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>{business.offer.approvalDisclaimer}</span>
            </p>
          </div>
        </section>
      </main>
      <WhatsAppButton floating href={links.whatsapp} label="Falar pelo WhatsApp" />
    </>
  );
}
