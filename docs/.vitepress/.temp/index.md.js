import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"hono-inertia","text":"Inertia.js server-side adapter for Hono","tagline":"Render Inertia pages from Hono with typed props, root views, partial reloads, and redirects.","actions":[{"theme":"brand","text":"Get Started","link":"/getting-started"},{"theme":"alt","text":"API Reference","link":"/api"}]},"features":[{"title":"Hono Native","details":"Uses Hono Context responses and works with any Hono-supported runtime."},{"title":"Laravel-Style Root Views","details":"Customize the initial HTML shell with string templates or Hono TSX."},{"title":"Protocol Tested","details":"Covers Inertia headers, asset version mismatch, partial reloads, and redirects."}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
