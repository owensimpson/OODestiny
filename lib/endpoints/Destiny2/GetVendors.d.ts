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
import { DestinyVendorFilter } from '../../schemas/index.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { DestinyVendorsResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetVendors} */
export declare type GetVendorsParams = {
    /** The Destiny Character ID of the character for whom we're getting vendor info. */
    characterId: string;
    /**
     * A comma separated list of components to return (as strings or numeric values).
     * See the DestinyComponentType enum for valid components to request. You must
     * request at least one component to receive results.
    */
    components: DestinyComponentType[];
    /** Destiny membership ID of another user. You may be denied. */
    destinyMembershipId: string;
    /** The filter of what vendors and items to return, if any. */
    filter?: DestinyVendorFilter;
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Get currently available vendors from the list of vendors that can possibly have
 * rotating inventory. Note that this does not include things like preview vendors
 * and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use
 * their definitions as-is for those.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetVendors}
*/
export declare function GetVendors(this: BungieClient, params: GetVendorsParams): Promise<BungieNetResponse<DestinyVendorsResponse>>;
