"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { business, consultationOptions } from "@/data/business";
import { GoldButton } from "@/components/GoldButton";

const initialForm = {
  name: "",
  state: "",
  service: "Concessão de CR/CAC",
  situation: "",
};

export function ConsultationForm() {
  const [form, setForm] = useState(initialForm);

  function updateField(
    field: keyof typeof initialForm,
    value: string,
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Olá, Jefferson. Quero uma consulta organizada.",
      "",
      `Nome: ${form.name || "[nao informado]"}`,
      `Estado: ${form.state || "[nao informado]"}`,
      `Serviço ou assunto: ${form.service || "[não informado]"}`,
      `Situação atual: ${form.situation || "[não informado]"}`,
      "",
      "Gostaria de orientação para entender os próximos passos.",
    ].join("\n");

    window.open(
      `${business.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      className="rounded-[24px] border border-gold/55 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.02))] p-5 sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-black uppercase text-white">Nome</span>
          <input
            className="min-h-14 rounded-2xl border border-gold/55 bg-black/35 px-4 text-base text-white outline-none transition placeholder:text-white/38 focus:border-[#f5cf64] focus:ring-2 focus:ring-gold/20"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Como podemos te chamar?"
            type="text"
            value={form.name}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black uppercase text-white">
            Seu estado
          </span>
          <select
            className="min-h-14 rounded-2xl border border-gold/55 bg-black/35 px-4 text-base text-white outline-none transition focus:border-[#f5cf64] focus:ring-2 focus:ring-gold/20"
            name="state"
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
            Serviço ou assunto
          </span>
          <select
            className="min-h-14 rounded-2xl border border-gold/55 bg-black/35 px-4 text-base text-white outline-none transition focus:border-[#f5cf64] focus:ring-2 focus:ring-gold/20"
            name="service"
            onChange={(event) => updateField("service", event.target.value)}
            value={form.service}
          >
            {consultationOptions.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black uppercase text-white">
            Situação atual do processo
          </span>
          <textarea
            className="min-h-36 resize-y rounded-2xl border border-gold/55 bg-black/35 px-4 py-4 text-base leading-7 text-white outline-none transition placeholder:text-white/38 focus:border-[#f5cf64] focus:ring-2 focus:ring-gold/20"
            name="situation"
            onChange={(event) => updateField("situation", event.target.value)}
            placeholder="Ex.: ainda não iniciei, estou renovando, recebi uma exigência ou preciso organizar os documentos."
            value={form.situation}
          />
        </label>
      </div>

      <div className="mt-6">
        <GoldButton icon="whatsapp" type="submit">
          Enviar consulta organizada
        </GoldButton>
      </div>

      <p className="mt-4 text-center text-sm text-white/58">
        Dados enviados apenas na mensagem do WhatsApp.
      </p>
    </form>
  );
}
