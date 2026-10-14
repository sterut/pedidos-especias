/* ===== CONFIGURACIÓN COMPARTIDA =====
   La usan index.html (pedido de clientes) y pedidos-preventistas.html (pedido de preventistas).
   Si cambian precios, productos o el WhatsApp de destino, se edita UNA sola vez aquí. */

const VENDEDORA = {
  nombre: 'Enrique Stehli',
  whatsapp: '5493875397525' // formato internacional: 54 9 + característica + número, sin espacios
};

/* ===== PREVENTISTAS =====
   Nombres que aparecen en el selector de la página de preventistas.
   Para agregar, sacar o renombrar preventistas, se edita esta lista. */
const PREVENTISTAS = [
  'Preventista 1',
  'Preventista 2',
];

/* ===== LISTA DE PRODUCTOS =====
   Lista de precios Especias Decor, actualizada 13/10/2026.
   categoria: agrupa los productos | formato: cómo se vende | precio: número sin puntos */
const PRODUCTOS = [
  { categoria: "Especias", nombre: "Ají cayena amarillo especial", formato: "x kg", precio: 7935 },
  { categoria: "Especias", nombre: "Ají cayena común", formato: "x kg", precio: 4600 },
  { categoria: "Especias", nombre: "Ají cayena rojo", formato: "x kg", precio: 7935 },
  { categoria: "Especias", nombre: "Ají criollo común", formato: "x kg", precio: 2875 },
  { categoria: "Especias", nombre: "Ají criollo especial", formato: "x kg", precio: 5750 },
  { categoria: "Especias", nombre: "Ají locoto", formato: "x kg", precio: 7935 },
  { categoria: "Especias", nombre: "Ajo en escamas", formato: "x kg", precio: 11500 },
  { categoria: "Especias", nombre: "Ajo en polvo", formato: "x kg", precio: 5750 },
  { categoria: "Especias", nombre: "Albahaca", formato: "x kg", precio: 13800 },
  { categoria: "Especias", nombre: "Apio en polvo", formato: "x kg", precio: 13800 },
  { categoria: "Especias", nombre: "Anís en grano", formato: "x kg", precio: 17250 },
  { categoria: "Especias", nombre: "Bicarbonato de sodio", formato: "x kg", precio: 4600 },
  { categoria: "Especias", nombre: "Canela en rama", formato: "x kg", precio: 69000,
    nota: "También se consigue en tira — el precio es según el peso que elijas." },
  { categoria: "Especias", nombre: "Canela molida", formato: "x kg", precio: 34500,
    nota: "También se consigue en tira — el precio es según el peso que elijas." },
  { categoria: "Especias", nombre: "Cebolla deshidratada en escamas", formato: "x kg", precio: 20700 },
  { categoria: "Especias", nombre: "Cebolla en polvo", formato: "x kg", precio: 13800 },
  { categoria: "Especias", nombre: "Chimichurri", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Clavo de olor en grano", formato: "x kg", precio: 69000,
    nota: "También se consigue en tira — el precio es según el peso que elijas." },
  { categoria: "Especias", nombre: "Clavo de olor molido", formato: "x kg", precio: 34500,
    nota: "También se consigue en tira — el precio es según el peso que elijas." },
  { categoria: "Especias", nombre: "Colorante común", formato: "x kg", precio: 2760 },
  { categoria: "Especias", nombre: "Colorante especial", formato: "x kg", precio: 3910 },
  { categoria: "Especias", nombre: "Comino común", formato: "x kg", precio: 4600 },
  { categoria: "Especias", nombre: "Comino en grano", formato: "x kg", precio: 20700 },
  { categoria: "Especias", nombre: "Comino especial", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Condimento guisero", formato: "x kg", precio: 5750 },
  { categoria: "Especias", nombre: "Condimento para arroz", formato: "x kg", precio: 9200 },
  { categoria: "Especias", nombre: "Condimento para pizza", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Cúrcuma común", formato: "x kg", precio: 3450 },
  { categoria: "Especias", nombre: "Cúrcuma especial", formato: "x kg", precio: 9200 },
  { categoria: "Especias", nombre: "Curry", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Espinaca en polvo", formato: "x kg", precio: 8050 },
  { categoria: "Especias", nombre: "Integral para chorizo", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Integral para hamburguesa", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Integral para milanesa", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Integral para morcilla", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Jengibre molido puro", formato: "x kg", precio: 19550 },
  { categoria: "Especias", nombre: "Laurel en hojas", formato: "x kg", precio: 23000 },
  { categoria: "Especias", nombre: "Nuez moscada en pepas", formato: "x kg", precio: 69000,
    nota: "También se consigue en tira — el precio es según el peso que elijas." },
  { categoria: "Especias", nombre: "Nuez moscada molida", formato: "x kg", precio: 34500,
    nota: "También se consigue en tira — el precio es según el peso que elijas." },
  { categoria: "Especias", nombre: "Orégano", formato: "x kg", precio: 9200 },
  { categoria: "Especias", nombre: "Perejil", formato: "x kg", precio: 9200 },
  { categoria: "Especias", nombre: "Pimentón ahumado", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Pimentón común", formato: "x kg", precio: 4600 },
  { categoria: "Especias", nombre: "Pimentón especial", formato: "x kg", precio: 6900 },
  { categoria: "Especias", nombre: "Pimienta blanca común", formato: "x kg", precio: 5750 },
  { categoria: "Especias", nombre: "Pimienta blanca en grano", formato: "x kg", precio: 40250 },
  { categoria: "Especias", nombre: "Pimienta blanca especial", formato: "x kg", precio: 8050 },
  { categoria: "Especias", nombre: "Pimienta negra en grano", formato: "x kg", precio: 33350 },
  { categoria: "Especias", nombre: "Pimienta negra molida", formato: "x kg", precio: 8050 },
  { categoria: "Especias", nombre: "Provenzal", formato: "x kg", precio: 11500 },
  { categoria: "Especias", nombre: "Romero", formato: "x kg", precio: 13800 },
  { categoria: "Especias", nombre: "Tomillo", formato: "x kg", precio: 23000 },
  { categoria: "Especias", nombre: "Tira de condimentos", formato: "10 u. x 10 g", precio: 2300,
    sabores: ["Pimienta", "Ajo en polvo", "Ají criollo", "Cúrcuma", "Pimentón", "Chimichurri", "Orégano", "Ajo en escamas", "Ají cayena", "Provenzal", "Locoto", "Condimento guisero", "Curry", "Comino", "Condimento para pizza", "Condimento para arroz", "Pimienta negra", "Jengibre"] },
  { categoria: "Especias", nombre: "Tiras aromáticas", formato: "10 u. x 10 g", precio: 3300,
    sabores: ["Albahaca", "Tomillo", "Romero",
      { nombre: "Canela en polvo", confirmar: true },
      { nombre: "Canela en rama", confirmar: true },
      { nombre: "Clavo de olor", confirmar: true },
      { nombre: "Nuez moscada molida", confirmar: true },
      { nombre: "Nuez moscada en pepas", confirmar: true }] },
  { categoria: "Frutos secos", nombre: "Almendras", formato: "x kg", precio: 29000 },
  { categoria: "Frutos secos", nombre: "Avena instantánea", formato: "x kg", precio: 2500 },
  { categoria: "Frutos secos", nombre: "Banana chip", formato: "x kg", precio: 16000 },
  { categoria: "Frutos secos", nombre: "Coco rallado", formato: "x kg", precio: 15000 },
  { categoria: "Frutos secos", nombre: "Maní con sal / sin sal", formato: "x kg", precio: 4500 },
  { categoria: "Frutos secos", nombre: "Mix deportivo", formato: "x kg (banana chip, almendras, nueces, pasas, ananá y maní sin sal)", precio: 13000 },
  { categoria: "Frutos secos", nombre: "Nueces mariposa", formato: "x kg", precio: 25000 },
  { categoria: "Frutos secos", nombre: "Pasas de uva", formato: "x kg", precio: 7000 },
  { categoria: "Varios", nombre: "Aceite de oliva extra virgen Don Bosco", formato: "Botella 1/2 L", precio: 6000 },
  { categoria: "Varios", nombre: "Aceite de oliva extra virgen Don Bosco", formato: "Botella 1 L", precio: 10000 },
  { categoria: "Varios", nombre: "Aceite de oliva extra virgen Don Bosco", formato: "Botella 2 L", precio: 20000 },
  { categoria: "Varios", nombre: "Ají en vinagre (conserva)", formato: "Frasco 500 g", precio: 4025 },
  { categoria: "Varios", nombre: "Miel de abeja", formato: "x 1 L", precio: 10000 },
  { categoria: "Varios", nombre: "Poroto", formato: "x kg", precio: 4600 },
  { categoria: "Varios", nombre: "Stevia", formato: "x unidad", precio: 30000 },
  { categoria: "Semillas", nombre: "Chía negra", formato: "x kg", precio: 8000 },
  { categoria: "Semillas", nombre: "Mix de semillas", formato: "x kg", precio: 7000 },
  { categoria: "Semillas", nombre: "Mix de semillas", formato: "x 100 g", precio: 1000 },
  { categoria: "Semillas", nombre: "Sésamo", formato: "x kg", precio: 7000 },
  { categoria: "Semillas", nombre: "Sésamo", formato: "x 100 g", precio: 1000 },
  { categoria: "Hierbas", nombre: "Manzanilla", formato: "x 25 g", precio: 1380 },
  { categoria: "Hierbas", nombre: "Menta peperina", formato: "x 50 g", precio: 1725 },
  { categoria: "Hierbas", nombre: "Moringa", formato: "x 25 g", precio: 2500 },
  { categoria: "Frutos secos fraccionados", nombre: "Mix deportivo", formato: "x 100 g", precio: 1500 },
  { categoria: "Frutos secos fraccionados", nombre: "Coco rallado", formato: "x 100 g", precio: 1000 },
];

/* ===== PRESENTACIONES PARA PRODUCTOS POR KILO =====
   Se aplican a todo producto cuyo formato empiece con "x kg".
   factor = fracción del kilo. El precio se calcula solo a partir del precio por kilo. */
const PRESENTACIONES = [
  { id: '100g', etiqueta: '100 g',  factor: 0.1  },
  { id: '250g', etiqueta: '1/4 kg', factor: 0.25 },
  { id: '500g', etiqueta: '1/2 kg', factor: 0.5  },
  { id: '1kg',  etiqueta: '1 kg',   factor: 1    },
];

/* ===== HELPERS COMPARTIDOS (no hace falta tocar) ===== */
const plata = n => '$' + Math.round(n).toLocaleString('es-AR');
const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-');
const porKilo = p => p.formato.startsWith('x kg');
const detalle = p => porKilo(p) ? p.formato.replace(/^x kg\s*/, '').replace(/^\((.*)\)$/, '$1') : p.formato;
const pres = id => PRESENTACIONES.find(x => x.id === id);

function precioDe(i, presId){
  const p = PRODUCTOS[i];
  return presId ? Math.round(p.precio * pres(presId).factor) : p.precio;
}
function etiquetaDe(i, presId){
  return presId ? pres(presId).etiqueta : PRODUCTOS[i].formato;
}
