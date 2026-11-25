import { useState } from "react";

export const BotonCamaleon = () => {
  const [activado, setActivado] = useState<boolean>(false);

  const handleToggle = () => setActivado((prev) => !prev);

  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <h3 className="font-semibold text-indigo-300">2.1 Botón Camaleón</h3>
      <button
        onClick={handleToggle}
        className={`rounded-lg px-5 py-2.5 font-semibold transition-all duration-300 ${
          activado
            ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
            : "bg-indigo-600 text-white hover:bg-indigo-500"
        }`}
      >
        {activado ? "Estado: Activado ✓" : "Haz clic para activar"}
      </button>
    </div>
  );
};
