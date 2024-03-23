import { client } from "@/sanity/lib/client";
import { type QueryParams } from "next-sanity";

import { LAYOUT_QUERY } from "./queries/layout";
import { COLLECTION_PAGE_QUERY } from "./queries/collection";
import {
  Product,
  Page,
  MenuDocument,
  SanityHomePage,
  SanityCollectionPage,
  SanityCollection,
  SanityLayout,
} from "@/lib/sanity/types";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: 30,
      // tags, // for tag-based revalidation
    },
  });
}

export async function getLayout(): Promise<SanityLayout> {
  return await sanityFetch<SanityLayout>({
    query: LAYOUT_QUERY,
    tags: ["menuLinks"],
  });
}

export async function getSanityCollection(
  collection: string
): Promise<SanityCollectionPage> {
  return await sanityFetch<any>({
    query: COLLECTION_PAGE_QUERY,
    params: { slug: collection },
    tags: [""],
  });
}

// return client.fetch<SanityLayout>(
//   LAYOUT_QUERY,
//   {},
//   { next: { revalidate: 15 } }
// );
