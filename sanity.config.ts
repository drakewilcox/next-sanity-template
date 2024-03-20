import { defineConfig, isDev } from "sanity";

import { structureTool } from "sanity/structure";
import { schemaTypes } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { customDocumentActions } from "@/sanity/plugins/customDocumentActions";
import { dataset, projectId, apiVersion } from "@/sanity/env";

const devOnlyPlugins = [visionTool({ defaultApiVersion: apiVersion })];

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  name: "default",
  title: "ecommerce-site",
  basePath: "/admin",
  plugins: [
    structureTool({ structure }),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
  },
  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource === mediaAssetSource
        );
      },
    },
  },
});

export default config;
