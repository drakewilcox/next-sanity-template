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

export const getMenu = groq`*[_type == "menu"]{
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
