import { compileString, type StringOptions } from 'sass';
import type { Plugin } from 'kit10';

/** Creates an SCSS plugin. */
export function scssPlugin(options?: StringOptions<'sync'>): Plugin {
	return {
		filter: /\.scss/u,
		async transform(artifact) {
			const content_scss = await artifact.text();
			const content_css = compileString(content_scss, {
				...options,
				url: new URL(artifact.absolute_path, 'file://'),
			}).css;

			artifact.updateExt('css');
			artifact.update(content_css);
		},
	};
}
