export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-17";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

// export const SHOPIFY_STORE_ID = assertValue(
//   process.env.NEXT_PUBLIC_SHOPIFY_STORE_ID,
//   "Missing environment variable: NEXT_PUBLIC_SHOPIFY_STORE_ID"
// );

export const SHOPIFY_STORE_ID = "dreamweapon-audio.myshopify.com";

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export const SANITY_API_VERSION = apiVersion;

export const DEFAULT_CURRENCY_CODE = "USD";
export const LOCKED_DOCUMENT_TYPES = ["settings", "home", "media.tag"];
export const SHOPIFY_DOCUMENT_TYPES = [
  "product",
  "productVariant",
  "collection",
];
export const PAGE_REFERENCES = [
  { type: "collection" },
  { type: "home" },
  { type: "page" },
  { type: "product" },
];
