import { client } from "../lib/client";
import { Product, Page, MenuDocument } from "@/lib/sanity/types";
import * as queries from "./queries";

export async function getProducts(): Promise<Product[]> {
  return client.fetch(queries.getProducts, { next: { revalidate: 10 } });
}

export async function getProduct(slug: string): Promise<Product> {
  return client.fetch(queries.getProduct, { slug, next: { revalidate: 10 } });
}

export async function getMenu(): Promise<MenuDocument> {
  return client.fetch(queries.getMenu, { next: { revalidate: 10 } });
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(queries.pages, { next: { revalidate: 10 } });
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(queries.page, { slug, next: { revalidate: 10 } });
}

// export async function getHomepage(): Promise<SanityHomePage> {
//   return client.fetch(HOME_PAGE_QUERY, { next: { revalidate: 10 } });
// }

// export async function getCollection(
//   slug: string
// ): Promise<SanityCollectionPage> {
//   return client.fetch(COLLECTION_PAGE_QUERY, { slug });
// }
