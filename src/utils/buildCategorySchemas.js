// ============================================================================
// JSON-LD para páginas de comparativa/categoría ("mejores X"): WebPage +
// ItemList de productos + Breadcrumb + FAQPage. Sin aggregateRating de Amazon.
// ============================================================================
import { SITE } from "../config/site.js";
import {
  buildItemListProducts,
  buildWebPage,
  buildBreadcrumb,
  buildFaqPage,
  graph,
} from "./schema.js";

export function buildCategorySchemas({ seo, breadcrumbs = [], products = [], faqs = [] }) {
  const url = new URL(seo.canonical, SITE.url).href;
  return graph(
    buildWebPage({
      url,
      name: seo.title,
      description: seo.description,
      breadcrumbId: `${url}#breadcrumb`,
      mainEntityId: `${url}#list`,
    }),
    buildItemListProducts(products, { id: `${url}#list` }),
    buildBreadcrumb(breadcrumbs, { id: `${url}#breadcrumb` }),
    faqs.length ? buildFaqPage(faqs, { id: `${url}#faq` }) : null,
  );
}
