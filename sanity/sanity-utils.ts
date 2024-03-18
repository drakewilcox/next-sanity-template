import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Product } from "./types";

export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      productName,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      tags,
      content
    }`
  );
}

export async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      productName,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      content
    }`,
    { slug }
  );
}
