import type {
  ItemInteractivo,
  TecnologiaItem,
} from "../types/interactive.types";

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

export const TECNOLOGIAS_HOVER: TecnologiaItem[] = [
  { id: 1, nombre: "React 19", categoria: "Librería UI" },
  { id: 2, nombre: "TypeScript", categoria: "Tipado Estático" },
  { id: 3, nombre: "Tailwind CSS", categoria: "Estilos Utilitarios" },
];

export const PASOS_ZOOM: string[] = [
  "1. Definir interfaces en /types",
  "2. Separar datos iniciales en /data",
  "3. Crear componentes con responsabilidad única",
];
