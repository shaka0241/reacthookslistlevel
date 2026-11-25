import { PanelEstadoEfecto } from "./components/nivel1/PanelEstadoEfecto";
import { BotonCamaleon } from "./components/nivel2/BotonCamaleon";
import { CuadradoInteractivo } from "./components/nivel2/CuadradoInteractivo";
import { ListaClickInteractiva } from "./components/nivel3/ListaClickInteractiva";
import { ListaHoverEscala } from "./components/nivel3/ListaHoverEscala";
import { ListaZoomBoton } from "./components/nivel3/ListaZoomBoton";

/**
 * Componente raíz de la interfaz.
 *
 * Su responsabilidad es componer los ejemplos del laboratorio y organizarlos
 * visualmente por niveles. La lógica de interacción vive en cada componente,
 * no aquí; así cada ejemplo se puede estudiar y reutilizar de forma aislada.
 */
export function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <header>
          <h1 className="text-3xl font-extrabold text-white">
            Laboratorio: Hooks y Eventos en React + TS
          </h1>
          <p className="mt-1 text-slate-400">
            Arquitectura Clean Code dividida en tipos, datos y componentes por
            nivel.
          </p>
        </header>

        {/* Nivel 1: sincroniza el estado de React con el título del navegador. */}
        <PanelEstadoEfecto />

        {/* Nivel 2: ejemplos de estado local y eventos del puntero/clic. */}
        <section className="grid gap-6 md:grid-cols-2">
          <BotonCamaleon />
          <CuadradoInteractivo />
        </section>

        {/* Nivel 3: recorrer datos para representar listas interactivas. */}
        <section className="grid gap-6 md:grid-cols-3">
          <ListaClickInteractiva />
          <ListaHoverEscala />
          <ListaZoomBoton />
        </section>
      </div>
    </main>
  );
}

export default App;
