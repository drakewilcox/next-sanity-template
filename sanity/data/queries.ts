import { groq } from "next-sanity";

export const product = groq`{
  _id,
  _createdAt,
  productName,
  "slug": slug.current,
  "image": image.asset->url,
  price,
  tags,
  content
}
`;

export const getProducts = groq`*[_type == "product"]${product}`;

export const getProduct = groq`*[_type == "product" && slug.current == $slug][0]${product}`;

export const getMenu = groq`*[_type == "menu" && _id == "mainMenu"][0]{
  _id,
  title, 
  slug, 
  items[]{
    title,
    page->{
      _id, 
      title, 
      slug
    }
  }
}`;

export const pages = groq`*[_type == "page"]{
  _id,
  _createdAt,
  title,
  "slug": slug.current
}`;

export const page = groq`*[_type == "page" && slug.current == $slug][0]{
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  content
}`;
