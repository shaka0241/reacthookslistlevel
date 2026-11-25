import { useState } from "react";
import { ITEMS_CLICK_INICIALES } from "../../data/mockLists";
import type { ItemInteractivo } from "../../types/interactive.types";

export const ListaClickInteractiva = () => {
  const [items, setItems] = useState<ItemInteractivo[]>(ITEMS_CLICK_INICIALES);

  const handleToggleItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, activo: !item.activo } : item,
      ),
    );
  };

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
      <h3 className="mb-3 font-semibold text-emerald-400">
        3.1 Lista interactiva al clic
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => handleToggleItem(item.id)}
            className={`cursor-pointer select-none rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
              item.activo
                ? "bg-emerald-600 text-white"
                : "bg-slate-900 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {item.activo ? item.textoActivo : item.textoInicial}
          </li>
        ))}
      </ul>
    </div>
  );
};
