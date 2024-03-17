import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { defineConfig } from "sanity";
import { schema } from "./sanity/schema";
import { dataset, projectId, apiVersion } from "@/sanity/env";

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: "ecommerce-site",
  basePath: "/admin",
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema,
});

export default config;
