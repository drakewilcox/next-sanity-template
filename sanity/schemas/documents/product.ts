import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "productName",
      type: "string",
      title: "Product Name",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Product Image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Description",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags for Item",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
  ],
});
