// Arquitectura real del producto: un sistema base transversal + tres suites por
// rol + Livia atravesándolo todo. Reemplaza a las cuatro categorías
// Atiende/Vende/Cobra/Automatiza de modules.json, que no existían en el producto.
//
// Nav, mega-menú, footer y el bloque de arquitectura del home salen todos de
// aquí: agregar un módulo a una suite es editar una lista.

export const SISTEMA_BASE = {
  slug: 'sistema-base',
  href: '/sistema-base/',
  label: 'Sistema base',
  color: 'var(--slate-9)',
  tagline: 'Opera tu inmobiliaria, con lo que realmente necesita',
  items: ['Chats', 'Propiedades', 'Calendario', 'Documentos', 'Informes'],
};

// El riel transversal del home, con la nota de qué resuelve cada superficie.
export const SUPERFICIES = [
  {
    label: 'Chats',
    note: 'WhatsApp y los demás canales, en una bandeja',
    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  },
  {
    label: 'Propiedades',
    note: 'El inventario y en qué estado está cada inmueble',
    icon: 'M4 20V9l8-5 8 5v11M9 20v-6h6v6',
  },
  {
    label: 'Calendario',
    note: 'Cada quien maneja su propia agenda',
    icon: 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 3v4M16 3v4M4 11h16',
  },
  {
    label: 'Documentos',
    note: 'La biblioteca: contratos, soportes y anexos de todos',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 15h6',
  },
  {
    label: 'Informes',
    note: 'Lo que pasó, sin armar el reporte a mano',
    icon: 'M3 3v18h18M7 15l4-5 3 3 4-6',
  },
];

export const SUITES = [
  {
    num: '01',
    slug: 'comercial',
    href: '/suites/comercial/',
    label: 'Comercial',
    navLabel: 'Suite Comercial',
    color: 'var(--yampi-9)',
    accent: 'yampi',
    tagline: 'Del interesado que escribe al negocio cerrado.',
    quien: 'quien arrienda y vende',
    items: ['Oportunidades', 'Contactos y Empresas', 'Campañas'],
  },
  {
    num: '02',
    slug: 'servicio',
    href: '/suites/servicio/',
    label: 'Servicio',
    navLabel: 'Suite Servicio',
    color: 'var(--blue-9)',
    accent: 'blue',
    tagline: 'Lo que piden inquilinos y propietarios, con respuesta.',
    quien: 'quien atiende',
    items: ['Requerimientos', 'Centro de Ayuda'],
  },
  {
    num: '03',
    slug: 'administrativa',
    href: '/suites/administrativa/',
    label: 'Administrativa',
    navLabel: 'Suite Administrativa',
    color: 'var(--teal-9)',
    accent: 'teal',
    tagline: 'Contratos firmados, arriendos cobrados y giros al día.',
    quien: 'quien cobra y administra',
    items: ['Tesorería y Cobros', 'Firma electrónica de contratos'],
  },
];

export const LIVIA = {
  slug: 'livia',
  href: '/livia/',
  label: 'Livia',
  color: 'var(--yampi-9)',
};

// Las columnas del mega-menú y del footer: transversal primero, luego las suites.
// Cada entrada de una columna lleva a la página de su grupo — no hay ficha por
// módulo, así que el enlace es el mismo para toda la columna.
export const NAV_GROUPS = [
  {
    label: SISTEMA_BASE.label,
    href: SISTEMA_BASE.href,
    color: SISTEMA_BASE.color,
    items: SISTEMA_BASE.items,
  },
  ...SUITES.map((s) => ({
    label: s.navLabel,
    href: s.href,
    color: s.color,
    items: s.items,
  })),
];
