import { MeiliSearch } from "meilisearch";
import movies from "../data/movies.json";

const client = new MeiliSearch({
  host: "http://localhost:7700",
  apiKey: "aSampleMasterKey",
});

client
  .index("movies")
  .addDocuments(movies as Record<string, any>[])
  .then((res) => {
    console.log(res);
  });

client.getTask(0).then((res) => {
  console.log(res);
});
