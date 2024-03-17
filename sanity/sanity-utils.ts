import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Product } from "./types";

export async function getProducts(): Promise<Product[]> {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      price,
      tags,
      content
    }`
  );
}
