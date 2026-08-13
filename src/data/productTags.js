// ============================================================================
// Etiquetas de producto (constantes) + labels legibles. Separado de
// ProductData para evitar ciclos de import. Usa PRODUCT_TAGS.* en los productos
// y TAG_LABELS[tag] para mostrarlas.
// ============================================================================
export const PRODUCT_TAGS = {
  STAINLESS_STEEL: "stainless_steel",
  CERAMIC: "ceramic",
  BPA_FREE: "bpa_free",
  SILENT: "silent",
  WIRELESS: "wireless",
  BATTERY: "battery",
  MOTION_SENSOR: "motion_sensor",
  LARGE_CAPACITY: "large_capacity",
  MULTI_CAT: "multi_cat",
  DISHWASHER_SAFE: "dishwasher_safe",
  LED: "led",
  LOW_LEVEL_SHUTOFF: "low_level_shutoff",
  REPLACEMENT_FILTER: "replacement_filter",
  ACTIVATED_CARBON: "activated_carbon",
};

export const TAG_LABELS = {
  [PRODUCT_TAGS.STAINLESS_STEEL]: "Acero inoxidable",
  [PRODUCT_TAGS.CERAMIC]: "Cerámica",
  [PRODUCT_TAGS.BPA_FREE]: "Sin BPA",
  [PRODUCT_TAGS.SILENT]: "Silenciosa",
  [PRODUCT_TAGS.WIRELESS]: "Sin cable",
  [PRODUCT_TAGS.BATTERY]: "A pilas / batería",
  [PRODUCT_TAGS.MOTION_SENSOR]: "Sensor de movimiento",
  [PRODUCT_TAGS.LARGE_CAPACITY]: "Gran capacidad",
  [PRODUCT_TAGS.MULTI_CAT]: "Para varios gatos",
  [PRODUCT_TAGS.DISHWASHER_SAFE]: "Apta lavavajillas",
  [PRODUCT_TAGS.LED]: "Indicador LED",
  [PRODUCT_TAGS.LOW_LEVEL_SHUTOFF]: "Corte por nivel bajo",
  [PRODUCT_TAGS.REPLACEMENT_FILTER]: "Filtro de recambio",
  [PRODUCT_TAGS.ACTIVATED_CARBON]: "Carbón activo",
};

// Devuelve labels legibles a partir de una lista de tags (máx. n).
export const getReadableTags = (tags = [], n = 4) =>
  (Array.isArray(tags) ? tags : [])
    .map((t) => TAG_LABELS[t])
    .filter(Boolean)
    .slice(0, n);
