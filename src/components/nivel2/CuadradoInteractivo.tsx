import { useState } from "react";

/**
 * Enseña dos interacciones independientes sobre el mismo elemento:
 * entrar/salir con el puntero cambia el fondo, y hacer clic alterna el borde.
 */
export const CuadradoInteractivo = () => {
  // Este estado sigue si el puntero está dentro del cuadrado.
  const [estaEncima, setEstaEncima] = useState<boolean>(false);
  // Este estado persiste después de hacer clic, hasta el siguiente clic.
  const [bordeActivo, setBordeActivo] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <h3 className="font-semibold text-indigo-300">
        2.2 Cuadrado Interactivo
      </h3>
      {/* Los eventos y las clases de este elemento combinan los dos estados:
          el puntero controla el fondo y el clic controla el borde. */}
      <div
        onMouseEnter={() => setEstaEncima(true)}
        onMouseLeave={() => setEstaEncima(false)}
        onClick={() => setBordeActivo((prev) => !prev)}
        className={`flex h-36 w-36 cursor-pointer select-none items-center justify-center rounded-xl p-3 text-center text-xs font-semibold transition-all duration-300 ${
          estaEncima
            ? "bg-amber-400 text-slate-950"
            : "bg-slate-700 text-slate-200"
        } ${bordeActivo ? "border-4 border-rose-500" : "border-4 border-transparent"}`}
      >
        {/* El contenido informa visualmente de cada interacción. */}
        {estaEncima ? "Ratón dentro" : "Pasa el ratón"}
        <br />
        {bordeActivo ? "(Con borde)" : "(Haz clic)"}
      </div>
    </div>
  );
};
