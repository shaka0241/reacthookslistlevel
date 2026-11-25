import { useState } from "react";
import { ITEMS_CLICK_INICIALES } from "../../data/mockLists";
import type { ItemInteractivo } from "../../types/interactive.types";

/**
 * Demuestra una actualización inmutable de una colección en estado.
 * Al hacer clic en una fila, solo se invierte el campo `activo` del elemento
 * cuyo id coincide; las demás filas conservan sus valores.
 */
export const ListaClickInteractiva = () => {
  // El tipo describe la estructura de cada elemento que vivirá en el estado.
  // El arreglo aporta el valor inicial; las actualizaciones posteriores crean
  // un arreglo nuevo en vez de modificar este dato compartido directamente.
  const [items, setItems] = useState<ItemInteractivo[]>(ITEMS_CLICK_INICIALES);

  const handleToggleItem = (id: number) => {
    // Partimos del estado más reciente y generamos un arreglo nuevo con map.
    // Así respetamos la inmutabilidad: no cambiamos objetos del estado in situ.
    setItems((prevItems) =>
      prevItems.map((item) =>
        // El spread copia las propiedades existentes y sobrescribe únicamente
        // `activo` en el elemento solicitado.
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
        {/* Cada objeto genera una fila. Su id estable conecta el evento con
            la función que sabe actualizar precisamente ese elemento.
            La apariencia activa/inactiva se deriva del estado, no se duplica
            en otro lugar, para mantener texto y color sincronizados. */}
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
            {/* Mostrar un texto u otro es una decisión de render basada en
                  `activo`; no se modifica directamente el contenido del DOM. */}
            {item.activo ? item.textoActivo : item.textoInicial}
          </li>
        ))}
      </ul>
    </div>
  );
};
