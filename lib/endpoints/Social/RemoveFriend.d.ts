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
/** @see {@link https://bungie-net.github.io/#Social.RemoveFriend} */
export declare type RemoveFriendParams = {
    /** The membership id of the user you wish to remove. */
    membershipId: string;
};
/**
 * Remove a friend relationship with the target user. The user must be on your
 * friend list, though no error will occur if they are not.
 * @see {@link https://bungie-net.github.io/#Social.RemoveFriend}
*/
export declare function RemoveFriend(this: BungieClient, params: RemoveFriendParams): Promise<BungieNetResponse<boolean>>;
