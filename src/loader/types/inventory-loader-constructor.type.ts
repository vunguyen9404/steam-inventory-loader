import type { CookieJar } from 'tough-cookie';
import type steamID from 'steamid';

export type InventoryLoaderConstructor = {
  appID: string | number;
  contextID: string | number;
  itemsPerPage?: number;
  language?: string;
  maxRetries?: number;
  proxyAddress?: string;
  requestDelay?: number;
  steamCommunityJar?: CookieJar | { _jar: CookieJar };
  cookies?: string;
  steamID64: string | steamID;
  tradableOnly?: boolean;
  useProxy?: boolean;
};
