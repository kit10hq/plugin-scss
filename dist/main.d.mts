import { StringOptions } from "sass";
import { Plugin } from "kit10";

//#region src/main.d.ts
/** Creates an SCSS plugin. */
declare function scssPlugin(options?: StringOptions<"sync">): Plugin;
//#endregion
export { scssPlugin };