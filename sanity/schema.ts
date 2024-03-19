import { type SchemaTypeDefinition } from "sanity";
import product from "./schemas/documents/product";
import page from "./schemas/pages/page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, page],
};
