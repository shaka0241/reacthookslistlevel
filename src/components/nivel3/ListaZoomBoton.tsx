import { useState } from "react";
import { PASOS_ZOOM } from "../../data/mockLists";

/**
 * Combina una lista estática con un control de estado: el botón alterna el
 * tamaño visual de toda la lista sin modificar los datos que la componen.
 */
export const ListaZoomBoton = () => {
  // `ampliada` determina qué escala y tamaño de texto se aplican.
  const [ampliada, setAmpliada] = useState<boolean>(false);

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h3 className="font-semibold text-emerald-400">
          3.3 Lista con zoom por botón
        </h3>
        {/* Cada clic invierte la escala actual. */}
        <button
          onClick={() => setAmpliada((prev) => !prev)}
          className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
        >
          {ampliada ? "Reducir tamaño" : "Aumentar tamaño"}
        </button>
      </div>

      {/* La lista permanece igual; solo cambian sus clases de presentación. */}
      <ul
        className={`origin-top-left space-y-2 transition-all duration-300 ${
          ampliada ? "scale-105 text-lg" : "scale-100 text-sm"
        }`}
      >
        {/* Cada paso es texto simple; el índice identifica la fila en esta
            colección fija, que no se reordena ni modifica durante la sesión. */}
        {PASOS_ZOOM.map((paso, index) => (
          <li
            key={index}
            className="rounded-lg bg-slate-900 px-4 py-2.5 text-slate-200"
          >
            {paso}
          </li>
        ))}
      </ul>
    </div>
  );
};
