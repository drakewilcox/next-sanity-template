import { PortableTextBlock } from "sanity";

interface Base {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
}
export interface Product extends Base {
  productName: string;
  slug: string;
  image: string;
  price: string;
  content: PortableTextBlock[];
  tags: string[];
}
