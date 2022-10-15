import { CookieJar } from 'tough-cookie';
import type steamID from 'steamid';

export type InventoryLoaderConstructor = {
  appID: string | number;
  contextID: string | number;
  language?: string;
  proxyAddress?: string;
  steamCommunityJar?: CookieJar;
  steamID64: string | steamID;
  tradableOnly?: boolean;
  useProxy?: boolean;
};
