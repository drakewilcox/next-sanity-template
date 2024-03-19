import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "required",
      options: {
        source: "title",
        maxLength: 30,
      },
    }),
    defineField({
      title: "Nav Items",
      name: "items",
      type: "array",
      of: [
        defineArrayMember({
          type: "navPage",
        }),
      ],
    }),
  ],
});
