// Orden, colores y agrupación de categorías del sitio comercial Yampi.
export const CAT_ORDER = ['atiende', 'vende', 'cobra', 'automatiza'];

export const CAT_COLOR = {
  atiende: 'var(--blue-9)',
  vende: 'var(--yampi-9)',
  cobra: 'var(--teal-9)',
  automatiza: 'var(--iris-9)',
};

export const CAT_BG = {
  atiende: 'var(--blue-3)',
  vende: 'var(--yampi-2)',
  cobra: 'var(--teal-3)',
  automatiza: 'var(--iris-3)',
};

export const CAT_TEXT = {
  atiende: 'var(--blue-11)',
  vende: 'var(--yampi-11)',
  cobra: 'var(--teal-11)',
  automatiza: 'var(--iris-11)',
};

export function groupByCat(data) {
  const byCat = {};
  CAT_ORDER.forEach((c) => (byCat[c] = []));
  data.modules.forEach((m) => byCat[m.cat].push(m));
  return byCat;
}
