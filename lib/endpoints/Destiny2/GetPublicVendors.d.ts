/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.17.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
import { BungieNetResponse } from '../../util/server-response.js';
import { BungieClient } from '../../util/client.js';
import { DestinyComponentType } from '../../schemas/index.js';
import { DestinyPublicVendorsResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetPublicVendors} */
export declare type GetPublicVendorsParams = {
    /**
     * A comma separated list of components to return (as strings or numeric values).
     * See the DestinyComponentType enum for valid components to request. You must
     * request at least one component to receive results.
    */
    components: DestinyComponentType[];
};
/**
 * Get items available from vendors where the vendors have items for sale that are
 * common for everyone. If any portion of the Vendor's available inventory is
 * character or account specific, we will be unable to return their data from this
 * endpoint due to the way that available inventory is computed. As I am often
 * guilty of saying: 'It's a long story...'
 * @see {@link https://bungie-net.github.io/#Destiny2.GetPublicVendors}
*/
export declare function GetPublicVendors(this: BungieClient, params: GetPublicVendorsParams): Promise<BungieNetResponse<DestinyPublicVendorsResponse>>;
