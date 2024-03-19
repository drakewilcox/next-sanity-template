import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Product } from "../types";
import * as queries from "./queries";

export async function getProducts(): Promise<Product[]> {
  return client.fetch(queries.getProducts);
}

export async function getProduct(slug: string): Promise<Product> {
  return client.fetch(queries.getProduct, { slug });
}

export async function getMenu(): Promise<Product> {
  return client.fetch(queries.getMenu);
}
