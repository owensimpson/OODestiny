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
import { GroupApplicationResponse } from '../../schemas/index.js';
/** @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInviteCancel} */
export declare type IndividualGroupInviteCancelParams = {
    /** ID of the group you would like to join. */
    groupId: string;
    /** Membership id of the account being cancelled. */
    membershipId: string;
    /** MembershipType of the account being cancelled. */
    membershipType: BungieMembershipType;
};
/**
 * Cancels a pending invitation to join a group.
 * @see {@link https://bungie-net.github.io/#GroupV2.IndividualGroupInviteCancel}
*/
export declare function IndividualGroupInviteCancel(this: BungieClient, params: IndividualGroupInviteCancelParams): Promise<BungieNetResponse<GroupApplicationResponse>>;
