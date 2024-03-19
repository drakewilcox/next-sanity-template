import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { defineConfig } from "sanity";
import { schema } from "./sanity/schema";
import { dataset, projectId, apiVersion } from "@/sanity/env";
import { deskStructure } from "@/sanity/structure/deskStructure";

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: "ecommerce-site",
  basePath: "/admin",
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema,
});

export default config;
