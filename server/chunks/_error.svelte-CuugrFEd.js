import { c as create_ssr_component, d as subscribe, e as escape, g as getContext } from './ssr-CuYULQwl.js';
import './exports-DuWZopOC.js';

function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="min-h-screen flex items-center justify-center"><div class="max-w-2xl bg-gradient-to-br from-blue-950 to-gray-900 p-8 rounded-lg shadow-lg text-center text-white"><h1 class="text-5xl font-extrabold mb-6" data-svelte-h="svelte-1wy39kg">Oops! Something went wrong...</h1> <h2 class="text-3xl font-semibold mb-8">${escape($page.error.message)}</h2> <p data-svelte-h="svelte-lhtpai">While we fix things up, why not take a moment to enjoy this adorable cat?</p> <img src="https://cataas.com/cat/cute" alt="Adorable Cat" class="mt-8 mx-auto rounded-2xl" style="max-width: 300px;"> <p class="mt-4 text-sm" data-svelte-h="svelte-1jn8uyf">Psst... You can reload to see a new cat!</p></div></div>`;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-CuugrFEd.js.map
