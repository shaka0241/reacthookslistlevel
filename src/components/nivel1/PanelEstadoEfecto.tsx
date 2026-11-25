import { useEffect, useState } from "react";

/**
 * Demuestra cómo coordinar estado, eventos y un efecto secundario del DOM.
 * El contador y el mensaje son estado de React; el título de la pestaña es
 * externo a React y se sincroniza mediante `useEffect`.
 */
export const PanelEstadoEfecto = () => {
  // `interacciones` es el dato que se muestra como contador.
  // El tipo numérico hace explícito qué clase de valor guardará el estado.
  const [interacciones, setInteracciones] = useState<number>(0);

  // Se mantiene un mensaje independiente para mostrar cuándo hubo actividad.
  const [ultimoRegistro, setUltimoRegistro] =
    useState<string>("Sin actividad aún");

  useEffect(() => {
    // Este efecto se ejecuta después de renderizar y cada vez que cambia
    // `interacciones`: sincroniza el título de la pestaña con ese estado.
    document.title = `Interacciones: ${interacciones}`;

    return () => {
      // Limpieza del efecto: restaura un título genérico antes de que el
      // efecto vuelva a ejecutarse o cuando el componente se desmonte.
      document.title = "Laboratorio React + TS";
    };
    // La dependencia hace que React vuelva a sincronizar el título cuando
    // cambie el contador; no se ejecuta por cambios en `ultimoRegistro`.
  }, [interacciones]);

  const handleSumar = () => {
    // Esta forma recibe una función: React la llama y le pasa el valor más
    // reciente del estado. `prev` es solo el nombre de ese parámetro (podría
    // llamarse de otra manera); devolvemos ese valor más 1 para incrementarlo.
    // Así no usamos un valor antiguo si React agrupa varias actualizaciones.
    setInteracciones((prev) => prev + 1);

    // La hora se calcula en el momento del clic y se guarda como otro estado.
    const hora = new Date().toLocaleTimeString();
    setUltimoRegistro(`Última actualización a las ${hora}`);
  };

  const handleReset = () => {
    // Reinicia ambos datos de la interfaz. El cambio del contador provoca
    // que el efecto actualice también el título de la pestaña.
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

      {/* El valor visible se deriva directamente del estado del contador. */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="rounded-lg bg-slate-900 px-4 py-2 font-mono text-xl font-bold text-white">
          {interacciones}
        </span>
        {/* En React se pasa la función al evento; no se invoca durante render. */}
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

      {/* El mensaje se actualiza junto con el contador, pero es estado separado. */}
      <p className="mt-3 text-xs text-slate-400">{ultimoRegistro}</p>
    </section>
  );
};
