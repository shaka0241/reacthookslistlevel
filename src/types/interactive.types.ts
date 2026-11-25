/**
 * Forma de un elemento de la lista que cambia al hacer clic.
 * `id` permite identificarlo de manera estable; los textos y `activo`
 * determinan qué contenido debe mostrar la interfaz.
 */
export interface ItemInteractivo {
  id: number;
  textoInicial: string;
  textoActivo: string;
  activo: boolean;
}

/**
 * Forma de cada tecnología mostrada en la lista de hover.
 * Este tipo permite detectar en compilación errores como omitir `categoria`
 * o proporcionar un valor que no sea texto.
 */
export interface TecnologiaItem {
  id: number;
  nombre: string;
  categoria: string;
}
