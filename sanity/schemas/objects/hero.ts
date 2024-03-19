import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      title: "Overlay Content",
      name: "content",
      type: "string",
    },
    {
      title: "Background Type",
      name: "bgType",
      type: "string",
      options: {
        list: [
          { title: "Photo", value: "photo" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Background Image",
      fields: [
        {
          name: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "video",
      type: "object",
      fields: [
        {
          title: "Background Video",
          name: "id",
          type: "string",
          description:
            "Alternatively, enter a vimeo ID to show a looping video instead",
        },
        {
          title: "Background Video Title",
          name: "title",
          type: "string",
          description: "Short title/description of the video",
        },
      ],
      hidden: ({ parent }) => {
        return parent.bgType !== "video";
      },
    },
  ],
});
