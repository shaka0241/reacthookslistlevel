import { useState } from "react";

/**
 * Ejemplo mínimo de `useState`: el clic alterna entre dos estados y el render
 * refleja ese estado tanto en el texto como en las clases CSS del botón.
 */
export const BotonCamaleon = () => {
  // El booleano representa si el botón está activado o no.
  const [activado, setActivado] = useState<boolean>(false);

  // Invertimos el último valor conocido en lugar de depender de una copia
  // potencialmente antigua capturada por el manejador.
  const handleToggle = () => setActivado((prev) => !prev);

  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <h3 className="font-semibold text-indigo-300">2.1 Botón Camaleón</h3>
      {/* El estado controla el color y el texto; el manejador solo lo alterna. */}
      <button
        onClick={handleToggle}
        className={`rounded-lg px-5 py-2.5 font-semibold transition-all duration-300 ${
          activado
            ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
            : "bg-indigo-600 text-white hover:bg-indigo-500"
        }`}
      >
        {/* El texto también es una representación del mismo estado booleano. */}
        {activado ? "Estado: Activado ✓" : "Haz clic para activar"}
      </button>
    </div>
  );
};
