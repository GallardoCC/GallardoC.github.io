"use client";

import { useState } from "react";
import { Button, GlassCard, Input, Textarea } from "@/components/gds";
import { site } from "@/data/site";

/**
 * Formulario sin backend: compone un mailto con los datos validados.
 * Cuando exista un endpoint (Resend/Formspree) solo cambia handleSubmit.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<{ nombre?: string; correo?: string; mensaje?: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "").trim();
    const correo = String(data.get("correo") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const next: typeof errors = {};
    if (!nombre) next.nombre = "Tu nombre es necesario";
    if (!/^\S+@\S+\.\S+$/.test(correo)) next.correo = "Correo inválido";
    if (mensaje.length < 10) next.mensaje = "Cuéntame un poco más (mínimo 10 caracteres)";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(`Contacto desde gallardo.dev — ${nombre}`);
    const body = encodeURIComponent(`${mensaje}\n\n— ${nombre} (${correo})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <GlassCard hover={false}>
      <form onSubmit={handleSubmit} noValidate style={{ display: "grid", gap: "1.1rem" }}>
        <Input label="Nombre" name="nombre" placeholder="Tu nombre" error={errors.nombre} required />
        <Input label="Correo" name="correo" type="email" placeholder="tu@correo.com" error={errors.correo} required />
        <Textarea label="Mensaje" name="mensaje" rows={6} placeholder="¿Qué construimos?" error={errors.mensaje} required />
        <Button type="submit" size="lg">Enviar mensaje</Button>
      </form>
    </GlassCard>
  );
}
