import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export const urlForImage = (source: String) => {
  return builder.image(source);
};

// LOGIC THAT CAME OUT OF BOX FROM SANITY:

// const imageBuilder = createImageUrlBuilder({
//   projectId: projectId || '',
//   dataset: dataset || '',
// })

// export const urlForImage = (source: Image) => {
//   return imageBuilder?.image(source).auto('format').fit('max').url()
// }
