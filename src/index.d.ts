/**
 * plausible-sdk TypeScript declarations
 */
export interface PlausibleOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Plausible {
  constructor(options?: PlausibleOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Plausible;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
