import { BasketIcon } from "@sanity/icons";
import { defineField } from "sanity";

import { validateSlug } from "../../utils/validateSlug";

const TITLE = "Store";

export default defineField({
  name: "store",
  title: TITLE,
  type: "document",
  icon: BasketIcon,
  groups: [
    {
      default: true,
      name: "editorial",
      title: "Editorial",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    // Slug
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      // @ts-ignore - TODO - fix this TS error
      validation: validateSlug,
    }),
    // Hero
    defineField({
      name: "hero",
      title: "Hero",
      type: "hero.page",
      group: "editorial",
    }),
    // Modules

    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo.page",
      group: "seo",
    }),
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: "Index",
        title: TITLE,
      };
    },
  },
});
