import { TECNOLOGIAS_HOVER } from "../../data/mockLists";

export const ListaHoverEscala = () => {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <h3 className="mb-3 font-semibold text-emerald-400">
        3.2 Lista con escala y color al hover
      </h3>
      <ul className="space-y-3">
        {TECNOLOGIAS_HOVER.map((tech) => (
          <li
            key={tech.id}
            className="flex cursor-pointer items-center justify-between rounded-lg bg-slate-900 px-4 py-3 text-slate-200 transition-all duration-300 hover:scale-105 hover:bg-violet-600 hover:text-white"
          >
            <span className="font-semibold">{tech.nombre}</span>
            <span className="text-xs opacity-80">{tech.categoria}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
