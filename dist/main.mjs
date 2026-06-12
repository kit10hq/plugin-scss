import { compileString } from "sass";
//#region src/main.ts
/** Creates an SCSS plugin. */
function scssPlugin(options) {
	return {
		filter: /\.scss/u,
		async transform(artifact) {
			const content_css = compileString(await artifact.text(), {
				...options,
				url: new URL(artifact.absolute_path, "file://")
			}).css;
			artifact.updateExt("css");
			artifact.update(content_css);
		}
	};
}
//#endregion
export { scssPlugin };
