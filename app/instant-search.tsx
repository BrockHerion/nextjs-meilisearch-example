"use client";

import { InstantSearch as ReactInstantSearch } from "react-instantsearch";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const { searchClient } = instantMeiliSearch(
  "http://localhost:7700",
  "aSampleMasterKey"
);

export default function InstantSearch({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactInstantSearch searchClient={searchClient} indexName="movies">
      {children}
    </ReactInstantSearch>
  );
}
