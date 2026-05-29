// Prefixes a public-folder asset path with the configured base path so that
// images resolve correctly whether the site is served from the domain root
// or from a GitHub Pages project sub-path (e.g. https://user.github.io/Repo/).
//
// The base path is supplied at build time via NEXT_PUBLIC_BASE_PATH and must
// match the `basePath` in next.config.mjs. NEXT_PUBLIC_* vars are inlined into
// the static bundle at build time, so this works in the exported site.

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path; // leave absolute URLs untouched
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
