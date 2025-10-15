// source.config.ts
import { defineDocs } from "fumadocs-mdx/config";
var { docs, meta } = defineDocs({
  dir: "content/articles"
});
export {
  docs,
  meta
};
