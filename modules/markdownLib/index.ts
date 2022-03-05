import type { Plugin } from 'vite';
import { createFilter } from '@rollup/pluginutils';
import { createMarkdown } from './markdown';
import { resolveOptions } from './options';
import type { Options } from './types';
import demo from "./demo";

export const VitePluginMarkdown = (userOptions: Options = {}): Plugin => {
  const options = resolveOptions(userOptions);
  const markdownToVue = createMarkdown(options);

  const filter = createFilter(
    userOptions.include || /\.md/,
    userOptions.exclude,
  );

  return {
    name: 'vite-plugin-md',
    enforce: 'pre',
    transform(raw, id) {
      const {findDemo,insertImport} = demo();
      if (!filter(id))
        return
      try {
        findDemo(raw);
        const code =  markdownToVue(id, raw);
        return insertImport(code);
      } catch (e: any) {
        this.error(e)
      }
    },
    async handleHotUpdate(ctx) {
      if (!filter(ctx.file))
        return

      const defaultRead = ctx.read
      ctx.read = async function () {
        return markdownToVue(ctx.file, await defaultRead())
      }
    },
  }
}
