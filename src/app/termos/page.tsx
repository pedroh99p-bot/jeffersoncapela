import { business } from "@/data/business";
import { Navbar } from "@/components/Navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell py-14">
        <article className="rounded-[24px] border border-gold/45 bg-white/[0.035] p-6 sm:p-8">
          <p className="text-sm font-black uppercase text-gold">
            Termos de Uso
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-white">
            Condições gerais de atendimento
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/72">
            As informações deste site têm finalidade comercial e informativa. A
            contratação da assessoria deve ser confirmada diretamente com
            Jefferson Capela pelo WhatsApp.
          </p>
          <p className="mt-4 text-base leading-7 text-white/62">
            {business.legal.deferment}
          </p>
        </article>
      </main>
    </>
  );
}
