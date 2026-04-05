/** Resolves paths to files in `public/` for any Vite `base` (e.g. GitHub Pages project site). */
export function publicAssetUrl(path: string): string {
  const trimmed = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${trimmed}`;
}

/** Home URL with hash, correct under a subpath deploy. */
export function homeHashUrl(fragment: string): string {
  const frag = fragment.replace(/^#/, "");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base === "" ? `/#${frag}` : `${base}/#${frag}`;
}
