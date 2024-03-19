import { type SchemaTypeDefinition } from "sanity";
import product from "./schemas/documents/product";
import page from "./schemas/pages/page";
import hero from "./schemas/objects/hero";
import menu from "./schemas/singletons/menu";
import navPage from "./schemas/objects/nav-page";
import author from "./schemas/documents/author";
import blockContent from "./schemas/documents/blockContent";
import category from "./schemas/documents/category";
import post from "./schemas/documents/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    page,
    hero,
    menu,
    navPage,
    author,
    blockContent,
    category,
    post,
  ],
};
