export const deskStructure = (S) =>
  S.list()
    .title("Content")
    .items([
      // Singleton Menu item
      S.listItem()
        .title("Menu")
        .child(
          S.document()
            .schemaType("menu")
            .documentId("mainMenu")
            .title("Main Menu")
        ),
      S.divider(),
      // Lists out the rest of the document types but exclude the 'menu' type
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== "menu"
      ),
    ]);
