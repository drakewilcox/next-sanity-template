import { ListItemBuilder } from "sanity/structure";
import defineStructure from "../utils/defineStructure";

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Store")
    .schemaType("store")
    .child(S.editor().title("Store").schemaType("store").documentId("store"))
);
