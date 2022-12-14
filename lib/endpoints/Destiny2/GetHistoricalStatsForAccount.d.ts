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
import { DestinyStatsGroupType } from '../../schemas/index.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { DestinyHistoricalStatsAccountResult } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#Destiny2.GetHistoricalStatsForAccount} */
export declare type GetHistoricalStatsForAccountParams = {
    /** The Destiny membershipId of the user to retrieve. */
    destinyMembershipId: string;
    /**
     * Groups of stats to include, otherwise only general stats are returned. Comma
     * separated list is allowed. Values: General, Weapons, Medals.
    */
    groups?: DestinyStatsGroupType[];
    /** A valid non-BungieNet membership type. */
    membershipType: BungieMembershipType;
};
/**
 * Gets aggregate historical stats organized around each character for a given
 * account.
 * @see {@link https://bungie-net.github.io/#Destiny2.GetHistoricalStatsForAccount}
*/
export declare function GetHistoricalStatsForAccount(this: BungieClient, params: GetHistoricalStatsForAccountParams): Promise<BungieNetResponse<DestinyHistoricalStatsAccountResult>>;
