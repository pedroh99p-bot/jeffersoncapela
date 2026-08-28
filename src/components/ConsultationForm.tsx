"use client";

import { useState } from "react";
import { business, consultationOptions } from "@/data/business";
import { GoldButton } from "@/components/GoldButton";

const initialForm = {
  name: "",
  state: "",
  service: "",
  situation: "",
};

export function ConsultationForm() {
  const [form, setForm] = useState(initialForm);
  const canSubmit = form.service.length > 0;

  function updateField(
    field: keyof typeof initialForm,
    value: string,
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  const message = [
    "Olá, Jefferson. Quero uma consulta organizada.",
    "",
    `Serviço ou assunto: ${form.service || "[não informado]"}`,
    `Estado: ${form.state || "[não informado]"}`,
    `Situação atual: ${form.situation || "[não informado]"}`,
    `Nome: ${form.name || "[não informado]"}`,
    "",
    "Gostaria de orientação para entender os próximos passos.",
  ].join("\n");

  return (
    <form
      action={business.whatsapp.baseUrl}
      className="rounded-[20px] border border-gold/55 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.02))] p-4 sm:p-7"
      method="get"
      rel="noopener noreferrer"
      target="_blank"
    >
      <input name="text" readOnly type="hidden" value={message} />
      <div className="grid gap-4 sm:gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-black uppercase text-white">
            Serviço ou assunto
          </span>
          <select
            className="min-h-14 rounded-[14px] border border-gold/55 bg-black/35 px-4 text-base text-white outline-none transition focus:border-[#f5cf64] focus:ring-2 focus:ring-gold/20"
            onChange={(event) => updateField("service", event.target.value)}
            required
            value={form.service}
          >
            <option value="">Selecione um serviço</option>
            {consultationOptions.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black uppercase text-white">
            Seu estado
          </span>
          <select
            className="min-h-14 rounded-[14px] border border-gold/55 bg-black/35 px-4 text-base text-white outline-none transition focus:border-[#f5cf64] focus:ring-2 focus:ring-gold/20"
            onChange={(event) => updateField("state", event.target.value)}
            value={form.state}
          >
            <option value="">Selecione a UF</option>
            {consultationOptions.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black uppercase text-white">
            Situação atual do processo
          </span>
          <textarea
            className="min-h-32 resize-y rounded-[14px] border border-gold/55 bg-black/35 px-4 py-3 text-base leading-7 text-white outline-none transition placeholder:text-white/38 focus:border-[#f5cf64] focus:ring-2 focus:ring-gold/20"
            onChange={(event) => updateField("situation", event.target.value)}
            placeholder="Ex.: ainda não iniciei, estou renovando, recebi uma exigência ou preciso organizar os documentos."
            value={form.situation}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black uppercase text-white">Nome</span>
          <input
            className="min-h-14 rounded-[14px] border border-gold/55 bg-black/35 px-4 text-base text-white outline-none transition placeholder:text-white/38 focus:border-[#f5cf64] focus:ring-2 focus:ring-gold/20"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Como podemos te chamar?"
            type="text"
            value={form.name}
          />
        </label>
      </div>

      <div className="mt-5">
        <GoldButton disabled={!canSubmit} icon="whatsapp" type="submit">
          Enviar consulta organizada
        </GoldButton>
      </div>

      <p className="mt-3 text-center text-xs leading-5 text-white/58 sm:text-sm">
        {canSubmit
          ? "Dados enviados apenas na mensagem do WhatsApp."
          : "Selecione um serviço para habilitar o envio."}
      </p>
    </form>
  );
}
