import { PortableTextBlock } from "sanity";

interface Base {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
}

// export interface Reference {
//   _ref: string;
//   _type: "reference";
// }
// export interface Image {
//   _type: string;
//   asset: Reference & {
//     metadata: {
//       lqip: string;
//     };
//   };
// }
export interface Product extends Base {
  productName: string;
  slug: string;
  image: string;
  price: string;
  content: PortableTextBlock[];
  tags: string[];
}
