import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Product, Page, MenuDocument } from "../types";
import * as queries from "./queries";

export async function getProducts(): Promise<Product[]> {
  return client.fetch(queries.getProducts);
}

export async function getProduct(slug: string): Promise<Product> {
  return client.fetch(queries.getProduct, { slug });
}

export async function getMenu(): Promise<MenuDocument> {
  return client.fetch(queries.getMenu);
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(queries.pages);
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(queries.page, { slug });
}
