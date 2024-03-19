import { defineType, defineField } from "sanity";

export default defineType({
  title: "Page",
  name: "navPage",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Display Text",
    }),
    defineField({
      title: "Page",
      name: "page",
      type: "reference",
      to: [{ type: "page" }],
    }),
  ],
});
