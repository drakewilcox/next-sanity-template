import { type SchemaTypeDefinition } from "sanity";
import product from "./schemas/product-schema";
import page from "./schemas/page-shema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, page],
};
