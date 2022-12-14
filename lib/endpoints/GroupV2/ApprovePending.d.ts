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
import { BungieMembershipType } from '../../schemas/index.js';
import { GroupApplicationRequest } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.ApprovePending} */
export declare type ApprovePendingParams = {
    /** ID of the group. */
    groupId: string;
    /** The membership id being approved. */
    membershipId: string;
    /** Membership type of the supplied membership ID. */
    membershipType: BungieMembershipType;
};
/**
 * Approve the given membershipId to join the group/clan as long as they have
 * applied.
 * @see {@link https://bungie-net.github.io/#GroupV2.ApprovePending}
*/
export declare function ApprovePending(this: BungieClient, params: ApprovePendingParams, body: GroupApplicationRequest): Promise<BungieNetResponse<boolean>>;
