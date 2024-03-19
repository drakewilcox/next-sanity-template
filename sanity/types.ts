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

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock;
};

export type NavLink = {
  title: string;
  page: Page;
};

export type Menu = {
  _id: string;
  title: string;
  slug: string;
  items: NavLink[];
};
