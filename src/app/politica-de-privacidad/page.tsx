import React from "react";

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-7xl mx-auto prose prose-invert">
      <h1 className="text-4xl font-bold font-orbitron tracking-wide text-foreground">Política de Privacidad</h1>
      <p className="mt-4 text-muted-foreground font-roboto">
        Última actualización: {new Date().toLocaleDateString("es-AR")}
      </p>
      <p className="font-roboto text-foreground mt-4">
        Documentación legal y políticas de privacidad para el cumplimiento y uso de la web Dos Ruedas Pro.
      </p>
    </main>
  );
}
