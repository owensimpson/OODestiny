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
import { GroupType } from '../../schemas/index.js';
import { BungieMembershipType } from '../../schemas/index.js';
import { GroupMembershipSearchResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder} */
export declare type RecoverGroupForFounderParams = {
    /** Type of group the supplied member founded. */
    groupType: GroupType;
    /** Membership ID to for which to find founded groups. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
};
/**
 * Allows a founder to manually recover a group they can see in game but not on
 * bungie.net
 * @see {@link https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder}
*/
export declare function RecoverGroupForFounder(this: BungieClient, params: RecoverGroupForFounderParams): Promise<BungieNetResponse<GroupMembershipSearchResponse>>;
