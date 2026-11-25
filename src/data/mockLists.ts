import type {
  ItemInteractivo,
  TecnologiaItem,
} from "../types/interactive.types";

// Datos iniciales para el ejemplo de clic.
// Cada elemento conserva un texto para cada estado visual y una bandera
// `activo`, que el componente cambia sin modificar este arreglo original.
export const ITEMS_CLICK_INICIALES: ItemInteractivo[] = [
  {
    id: 1,
    textoInicial: "Revisar Pull Request",
    textoActivo: "PR Aprobado ✓",
    activo: false,
  },
  {
    id: 2,
    textoInicial: "Configurar Tailwind",
    textoActivo: "Estilos Listos ✓",
    activo: false,
  },
  {
    id: 3,
    textoInicial: "Desplegar en Vercel",
    textoActivo: "En Producción ✓",
    activo: false,
  },
];

// Datos que la lista de hover solo presenta; no necesita estado propio porque
// la interacción de este ejemplo se resuelve con los estilos CSS de :hover.
export const TECNOLOGIAS_HOVER: TecnologiaItem[] = [
  { id: 1, nombre: "React 19", categoria: "Librería UI" },
  { id: 2, nombre: "TypeScript", categoria: "Tipado Estático" },
  { id: 3, nombre: "Tailwind CSS", categoria: "Estilos Utilitarios" },
];

// Pasos de texto usados por el ejemplo que cambia el tamaño de toda la lista.
export const PASOS_ZOOM: string[] = [
  "1. Definir interfaces en /types",
  "2. Separar datos iniciales en /data",
  "3. Crear componentes con responsabilidad única",
];
