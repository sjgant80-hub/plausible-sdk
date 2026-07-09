/**
 * plausible-sdk · sovereign wrapper for Plausible
 * Analytics
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://plausible.io/docs/stats-api
 * Homepage: https://plausible.io
 */

export class Plausible {
  constructor({ apiKey, baseURL = 'https://plausible.io', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://plausible.io/docs/stats-api. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('plausible ' + res.status);
    return res.json();
  }
}

export default Plausible;

// Metadata
export const meta = {
  "name": "Plausible",
  "category": "Analytics",
  "homepage": "https://plausible.io",
  "docs_url": "https://plausible.io/docs/stats-api",
  "endpoints_count": 0
};
