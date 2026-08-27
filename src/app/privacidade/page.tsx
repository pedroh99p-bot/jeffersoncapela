import { business } from "@/data/business";
import { Navbar } from "@/components/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell py-14">
        <article className="rounded-[24px] border border-gold/45 bg-white/[0.035] p-6 sm:p-8">
          <p className="text-sm font-black uppercase text-gold">
            Política de Privacidade
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-white">
            Uso dos dados de contato
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/72">
            {business.legal.privacy}
          </p>
          <p className="mt-4 text-base leading-7 text-white/62">
            Este site não cria cadastro, não possui backend e não armazena os
            dados digitados no formulário. Ao enviar a consulta, o navegador abre
            uma conversa no WhatsApp com a mensagem preenchida.
          </p>
        </article>
      </main>
    </>
  );
}
