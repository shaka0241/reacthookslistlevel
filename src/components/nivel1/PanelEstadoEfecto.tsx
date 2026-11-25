import { useEffect, useState } from "react";

export const PanelEstadoEfecto = () => {
  const [interacciones, setInteracciones] = useState<number>(0);
  const [ultimoRegistro, setUltimoRegistro] =
    useState<string>("Sin actividad aún");

  useEffect(() => {
    document.title = `Interacciones: ${interacciones}`;

    return () => {
      document.title = "Laboratorio React + TS";
    };
  }, [interacciones]);

  const handleSumar = () => {
    setInteracciones((prev) => prev + 1);
    const hora = new Date().toLocaleTimeString();
    setUltimoRegistro(`Última actualización a las ${hora}`);
  };
  const handleReset = () => {
    setInteracciones(0);
    setUltimoRegistro("Contador reiniciado");
  };

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-800/60 p-6">
      <h2 className="mb-2 text-lg font-bold text-sky-400">
        Nivel 1: useState + useEffect
      </h2>
      <p className="mb-4 text-sm text-slate-300">
        Observa cómo cambia el título de la pestaña del navegador al modificar
        el estado.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <span className="rounded-lg bg-slate-900 px-4 py-2 font-mono text-xl font-bold text-white">
          {interacciones}
        </span>
        <button
          onClick={handleSumar}
          className="rounded-lg bg-sky-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          +1 Interacción
        </button>
        <button
          onClick={handleReset}
          className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-700"
        >
          Reiniciar
        </button>
      </div>

      <p className="mt-3 text-xs text-slate-400">{ultimoRegistro}</p>
    </section>
  );
};
