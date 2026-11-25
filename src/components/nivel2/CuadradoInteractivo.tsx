import { useState } from "react";

export const CuadradoInteractivo = () => {
  const [estaEncima, setEstaEncima] = useState<boolean>(false);
  const [bordeActivo, setBordeActivo] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <h3 className="font-semibold text-indigo-300">
        2.2 Cuadrado Interactivo
      </h3>
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
        {estaEncima ? "Ratón dentro" : "Pasa el ratón"}
        <br />
        {bordeActivo ? "(Con borde)" : "(Haz clic)"}
      </div>
    </div>
  );
};
