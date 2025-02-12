/* eslint-disable camelcase */
import type { CookieJar } from 'tough-cookie';

export type OptionalConfig = {
  itemsPerPage?: number;
  Language?: string;
  maxRetries?: number;
  proxyAddress?: string;
  requestDelay?: number;
  SteamCommunity_Jar?: CookieJar;
  tradableOnly?: boolean;
  useProxy?: boolean;
};
